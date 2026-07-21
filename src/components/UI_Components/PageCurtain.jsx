import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'


const TILE_SIZE = 150

function useResponsiveGrid() {
    const [grid, setGrid] = useState({
        cols: 10,
        rows: 5,
    })

    useEffect(() => {
        const update = () => {
            setGrid({
                cols: Math.ceil(window.innerWidth / TILE_SIZE),
                rows: Math.ceil(window.innerHeight / TILE_SIZE),
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

export default function PageCurtain() {
    const location = useLocation()

    const { cols: COLS, rows: ROWS } = useResponsiveGrid()
    const blocks = useMemo(() =>
        Array.from({ length: COLS * ROWS }, (_, i) => {
            const col = i % COLS
            const row = Math.floor(i / COLS)
            const glitch = Math.random() < 0.15

            const centerX = COLS / 2
            const centerY = ROWS / 2

            const distance = Math.hypot(
                col - centerX,
                row - centerY
            )

            const positionalDelay =
                distance * 0.025 +
                Math.random() * 0.02

            const baseBg = SHADES_OF_BLACK[Math.floor(Math.random() * SHADES_OF_BLACK.length)]
            const glitchBg = GLITCH_HIGHLIGHTS[Math.floor(Math.random() * GLITCH_HIGHLIGHTS.length)]

            return {
                id: i,
                col,
                row,
                delay: positionalDelay,
                duration: 1.8 + Math.random() * 0.3,
                glitch,
                baseBg,
                glitchBg,
                jitter: (Math.random() - 0.5) * 6,
            }
        }), [location.pathname])

    // Calc base sizes in percentage
    const blockW = 100 / COLS
    const blockH = 100 / ROWS

    return (
        <div key={location.pathname} className='fixed inset-0 z-50 pointer-events-none flex items-center justify-center overflow-hidden'>
            {/* Transparent container so your actual page remains visible beneath */}
            <div className='absolute inset-0'>
                {blocks.map(b => (
                    <motion.div
                        key={b.id}
                        className='absolute'
                        style={{
                            width: `calc(${blockW}% + 0.5px)`,
                            height: `calc(${blockH}% + 0.5px)`,
                            left: `${b.col * blockW}%`,
                            top: `${b.row * blockH}%`,
                            backgroundColor: b.baseBg,
                            boxShadow: b.glitch
                                ? 'inset 0 0 0 1px rgba(255, 255, 255, 0.15)'
                                : undefined,
                            willChange: 'transform',
                        }}
                        initial={{ y: '-100vh', x: 0 }}
                        animate={b.glitch ? {
                            y: ['-100vh', '0vh', '0vh', '0vh', '-100vh'],
                            x: [0, b.jitter, 0, 0, 0],
                            backgroundColor: [b.baseBg, b.glitchBg, b.baseBg, b.baseBg, b.baseBg],
                        } : {
                            y: ['-100vh', '0vh', '0vh', '-100vh'],
                        }}
                        transition={b.glitch ? {
                            duration: b.duration,
                            delay: b.delay,
                            times: [0, 0.12, 0.22, 0.82, 1],
                            ease: [0.22, 1, 0.36, 1]
                        } : {
                            duration: b.duration,
                            delay: b.delay,
                            times: [0, 0.14, 0.82, 1],
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    />
                ))}
            </div>

            {/* Subtle monochrome scanline overlay */}
            <motion.div
                className='absolute inset-0'
                style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 3px)',
                    mixBlendMode: 'overlay',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.4, 0.4, 0] }}
                transition={{ duration: 2.1, times: [0, 0.15, 0.82, 1], ease: 'easeInOut' }}
            />

            {/* Central Graphic */}
            <motion.img
                src='/tumblr_mc23i6syO01rfjowdo1_500_gif (500×500).gif'
                alt='bat'
                className='relative z-10 w-80 h-80 sm:w-96 sm:h-96 object-contain'
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{
                    opacity: [0, 1, 0.7, 1, 1, 0],
                    scale: [0.85, 1.02, 1, 1, 1, 0.95],
                }}
                transition={{
                    duration: 2.1,
                    times: [0, 0.15, 0.22, 0.28, 0.82, 1],
                    ease: 'easeInOut',
                }}
                style={{
                    willChange: 'opacity, transform',
                    filter: 'drop-shadow(0 0 12px rgba(255,255,255,0.15))',
                }}
            />
        </div>
    )
}