import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    COVER_START,
    CURTAIN_DURATION,
    CURTAIN_EASE,
    LIFT_POINT,
} from './transitionConfig'


const TILE_SIZE = 150

// Mulberry32 — small, deterministic PRNG. Re-seeded per (path, cols, rows)
// so the curtain looks the same on every render of the same route and only
// changes when the route or viewport actually changes.
function makeRng(seed) {
    let t = seed >>> 0
    return () => {
        t = (t + 0x6D2B79F5) >>> 0
        let r = t
        r = Math.imul(r ^ (r >>> 15), r | 1)
        r ^= r + Math.imul(r ^ (r >>> 7), r | 61)
        return ((r ^ (r >>> 14)) >>> 0) / 4294967296
    }
}

function hashString(str) {
    let h = 2166136261
    for (let i = 0; i < str.length; i++) {
        h ^= str.charCodeAt(i)
        h = Math.imul(h, 16777619)
    }
    return h >>> 0
}

function useResponsiveGrid() {
    const [grid, setGrid] = useState({ cols: 10, rows: 5 })

    useEffect(() => {
        const update = () => {
            setGrid({
                cols: Math.max(1, Math.ceil(window.innerWidth / TILE_SIZE)),
                rows: Math.max(1, Math.ceil(window.innerHeight / TILE_SIZE)),
            })
        }
        update()
        window.addEventListener('resize', update)
        return () => window.removeEventListener('resize', update)
    }, [])

    return grid
}

const SHADES_OF_BLACK = ['#000000', '#050608', '#0a0c10', '#0e1117', '#141822']
const GLITCH_HIGHLIGHTS = ['#1a1f2c', '#252b3d', '#323a50']

// Fractional keyframe points the tiles pass through. The last frame must equal
// the first so framer-motion doesn't snap back at loop end.
const TIMES_OPEN_CLOSE = [0, COVER_START, LIFT_POINT, 1]
const TIMES_GLITCH = [0, 0.12, 0.22, LIFT_POINT, 1]

export default function PageCurtain() {
    const location = useLocation()
    const { cols: COLS, rows: ROWS } = useResponsiveGrid()

    // Recompute when path OR grid size changes. The previous version memoized
    // only on pathname, so a viewport resize laid the old 10x5 block array out
    // against a 13x8 grid and left a large uncovered strip on the right edge.
    const blocks = useMemo(() => {
        const rng = makeRng(hashString(location.pathname) ^ (COLS * 1009 + ROWS))
        const centerX = (COLS - 1) / 2
        const centerY = (ROWS - 1) / 2

        return Array.from({ length: COLS * ROWS }, (_, i) => {
            const col = i % COLS
            const row = Math.floor(i / COLS)
            const glitch = rng() < 0.15
            const distance = Math.hypot(col - centerX, row - centerY)
            const delay = distance * 0.025 + rng() * 0.02
            const duration = CURTAIN_DURATION + rng() * 0.3 - 0.15
            const baseBg = SHADES_OF_BLACK[Math.floor(rng() * SHADES_OF_BLACK.length)]
            const glitchBg = GLITCH_HIGHLIGHTS[Math.floor(rng() * GLITCH_HIGHLIGHTS.length)]
            const jitter = (rng() - 0.5) * 6

            // Stable key that includes grid dimensions so React fully tears down
            // and remounts the tile DOM nodes when the viewport resizes. Using
            // just `i` here would let React reuse the old nodes whose stored
            // col/row were computed against the previous COLS value, leaving
            // tiles piled in the top-left and the rest of the grid empty.
            return {
                key: `${COLS}x${ROWS}:${i}`,
                col, row, glitch, delay, duration, baseBg, glitchBg, jitter,
            }
        })
    }, [location.pathname, COLS, ROWS])

    // Base size as a percentage of the parent. The last col/row tiles are
    // widened to fill any remainder so there's never a sub-pixel gap on the
    // right or bottom edge regardless of viewport.
    const blockW = 100 / COLS
    const blockH = 100 / ROWS

    return (
        <div
            key={location.pathname}
            className='fixed inset-0 z-50 pointer-events-none overflow-hidden'
        >
            <div className='absolute inset-0'>
                {blocks.map(b => {
                    const width = b.col === COLS - 1
                        ? `calc(100% - ${b.col * blockW}%)`
                        : `${blockW}%`
                    const height = b.row === ROWS - 1
                        ? `calc(100% - ${b.row * blockH}%)`
                        : `${blockH}%`

                    const animate = b.glitch
                        ? {
                            y: ['-100vh', '0vh', '0vh', '0vh', '-100vh'],
                            x: [0, b.jitter, 0, 0, 0],
                            backgroundColor: [b.baseBg, b.glitchBg, b.baseBg, b.baseBg, b.baseBg],
                        }
                        : { y: ['-100vh', '0vh', '0vh', '-100vh'] }

                    const transition = b.glitch
                        ? { duration: b.duration, delay: b.delay, times: TIMES_GLITCH, ease: CURTAIN_EASE }
                        : { duration: b.duration, delay: b.delay, times: TIMES_OPEN_CLOSE, ease: CURTAIN_EASE }

                    return (
                        <motion.div
                            key={b.key}
                            className='absolute'
                            style={{
                                width,
                                height,
                                left: `${b.col * blockW}%`,
                                top: `${b.row * blockH}%`,
                                backgroundColor: b.baseBg,
                                boxShadow: b.glitch
                                    ? 'inset 0 0 0 1px rgba(255, 255, 255, 0.15)'
                                    : undefined,
                            }}
                            initial={{ y: '-100vh', x: 0 }}
                            animate={animate}
                            transition={transition}
                        />
                    )
                })}
            </div>

            {/* Subtle monochrome scanline overlay */}
            <motion.div
                className='absolute inset-0'
                style={{
                    backgroundImage:
                        'repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 3px)',
                    mixBlendMode: 'overlay',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.4, 0.4, 0] }}
                transition={{
                    duration: CURTAIN_DURATION,
                    times: [0, 0.15, LIFT_POINT, 1],
                    ease: 'easeInOut',
                }}
            />

            {/* Central graphic — appears while the curtain is fully covering. */}
            <div className='absolute inset-0 z-10 flex items-center justify-center pointer-events-none'>
                <motion.img
                    src='/tumblr_mc23i6syO01rfjowdo1_500_gif (500×500).gif'
                    alt='bat'
                    className='w-80 h-80 sm:w-96 sm:h-96 object-contain'
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{
                        opacity: [0, 1, 1, 0, 0],
                        scale: [1, 1, 1, 1, 1],
                    }}
                    transition={{
                        duration: CURTAIN_DURATION,
                        times: [0, 0.15, 0.4, 0.52, 1],
                        ease: 'easeInOut',
                    }}
                    style={{ filter: 'drop-shadow(0 0 12px rgba(255,255,255,0.15))' }}
                />
            </div>
        </div>
    )
}
