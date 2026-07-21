import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// The new syntax-highlighted lines building you out as an object constructor
const lines = [
    [
        { text: 'const ', className: 'text-purple-400 font-semibold' },
        { text: 'engineer ', className: 'text-cyan-300' },
        { text: '= ', className: 'text-white/70' },
        { text: '{', className: 'text-yellow-400 font-bold' },
    ],
    [
        { text: '  role', className: 'text-amber-400' },
        { text: ': ', className: 'text-white/70' },
        { text: "'Full-Stack Engineer'", className: 'text-emerald-400' },
        { text: ',', className: 'text-white/40' },
    ],
    [
        { text: '  specialization', className: 'text-amber-400' },
        { text: ': ', className: 'text-white/70' },
        { text: "'Frontend Engineering'", className: 'text-emerald-400' },
        { text: ',', className: 'text-white/40' },
    ],
    [
        { text: '  currentFocus', className: 'text-amber-400' },
        { text: ': ', className: 'text-white/70' },
        { text: "'Scalable Systems & UI Architecture'", className: 'text-emerald-400' },
        { text: ',', className: 'text-white/40' },
    ],
    [
        { text: '  stack', className: 'text-amber-400' },
        { text: ': ', className: 'text-white/70' },
        { text: '[', className: 'text-purple-400' },
        { text: "'React'", className: 'text-emerald-400' },
        { text: ', ', className: 'text-white/40' },
        { text: "'TypeScript'", className: 'text-emerald-400' },
        { text: ', ', className: 'text-white/40' },
        { text: "'Node.js'", className: 'text-emerald-400' },
        { text: ', ', className: 'text-white/40' },
        { text: "'PostgreSQL'", className: 'text-emerald-400' },
        { text: ']', className: 'text-purple-400' },
        { text: ',', className: 'text-white/40' },
    ],
    [
        { text: '  principle', className: 'text-amber-400' },
        { text: ': ', className: 'text-white/70' },
        { text: "'Build intuitive interfaces. Engineer reliable systems.'", className: 'text-emerald-400' },
    ],
    [
        { text: '};', className: 'text-yellow-400 font-bold' },
    ],
]

const lineLength = (segments) => segments.reduce((n, s) => n + s.text.length, 0)

function Cursor({ active }) {
    return (
        <motion.span
            aria-hidden="true"
            className="ml-0.5 inline-block h-[1.05em] w-[0.4em] translate-y-[0.15em] bg-cyan-400/90"
            animate={active ? { opacity: [1, 1, 0, 0] } : { opacity: 0 }}
            transition={
                active
                    ? { duration: 1, repeat: Infinity, ease: 'linear', times: [0, 0.5, 0.5, 1] }
                    : { duration: 0.2 }
            }
        />
    )
}

function Line({ segments, revealed, active }) {
    let remaining = revealed
    let cursorPlaced = false
    const nodes = []

    segments.forEach((seg, i) => {
        const len = seg.text.length

        if (remaining >= len) {
            nodes.push(
                <span key={i} className={seg.className}>
                    {seg.text}
                </span>
            )
            remaining -= len
            return
        }

        if (remaining > 0) {
            nodes.push(
                <span key={`${i}-a`} className={seg.className}>
                    {seg.text.slice(0, remaining)}
                </span>
            )
            if (active) {
                nodes.push(<Cursor key="cursor" active />)
                cursorPlaced = true
            }
            const hidden = seg.text.slice(remaining)
            if (hidden) {
                nodes.push(
                    <span key={`${i}-b`} className="text-transparent">
                        {hidden}
                    </span>
                )
            }
            remaining = 0
            return
        }

        if (active && !cursorPlaced) {
            nodes.push(<Cursor key="cursor" active />)
            cursorPlaced = true
        }
        nodes.push(
            <span key={i} className="text-transparent">
                {seg.text}
            </span>
        )
    })

    if (active && !cursorPlaced) nodes.push(<Cursor key="cursor" active />)

    return <p className="whitespace-pre leading-relaxed">{nodes}</p>
}

export default function TerminalCard() {
    const [lineIndex, setLineIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const done = lineIndex >= lines.length

    useEffect(() => {
        if (done) return

        const length = lineLength(lines[lineIndex])

        if (charIndex < length) {
            const t = setTimeout(() => setCharIndex((c) => c + 1), 15 + Math.random() * 25)
            return () => clearTimeout(t)
        }

        const t = setTimeout(() => {
            setLineIndex((l) => l + 1)
            setCharIndex(0)
        }, 180)
        return () => clearTimeout(t)
    }, [lineIndex, charIndex, done])

    return (
        <div
            aria-hidden="true"
            className="relative flex h-full w-full flex-col overflow-hidden rounded-2xl bg-transparent p-5 font-mono text-sm text-zinc-300 transition-colors hover:border-white/20 sm:p-6"
        >
            {/* Ambient code-glow effects matching your layout background styles */}
            <div className="pointer-events-none absolute -top-16 -right-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />

            {/* Top window headers */}
            <div className="relative z-10 mb-4 flex items-center justify-between border-b border-white/5 pb-3">
                <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                    <span className="relative h-2.5 w-2.5">
                        <motion.span
                            className="absolute inset-0 rounded-full bg-cyan-400/60"
                            animate={{ scale: [1, 2], opacity: [0.6, 0] }}
                            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
                        />
                        <span className="absolute inset-0 rounded-full bg-cyan-400/90" />
                    </span>
                </div>
                <span className="text-[11px] tracking-wide text-zinc-500">~/portfolio — constructor.js</span>
            </div>

            {/* Realtime compilation block layout */}
            <div className="relative z-10 flex flex-wrap flex-1 flex-col gap-1.5 font-mono text-xs sm:text-sm">
                {lines.map((segments, i) => (
                    <Line
                        key={i}
                        segments={segments}
                        revealed={i < lineIndex ? lineLength(segments) : i === lineIndex ? charIndex : 0}
                        active={i === lineIndex}
                    />
                ))}

                <p className="leading-relaxed mt-2 text-[11px] font-sans">
                    <span className={done ? 'text-emerald-400/90 font-medium' : 'text-transparent'}>
                        ✓ Object instantiated successfully.
                    </span>
                    {done && <Cursor active={false} />}
                </p>
            </div>
        </div>
    )
}