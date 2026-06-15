import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// Each line is a list of styled segments, so the typewriter reveals
// real syntax-highlighted text instead of one flat string.
const lines = [
    [
        { text: '> ', className: 'text-emerald-400/80' },
        { text: 'initializing ', className: 'text-zinc-500' },
        { text: 'portfolio', className: 'text-violet-300' },
        { text: '...', className: 'text-zinc-500' },
    ],
    [
        { text: '> ', className: 'text-emerald-400/80' },
        { text: 'stack', className: 'text-zinc-500' },
        { text: ': ', className: 'text-zinc-500' },
        { text: 'React', className: 'text-cyan-300' },
        { text: ' + ', className: 'text-zinc-500' },
        { text: 'Node.js', className: 'text-lime-300' },
        { text: ' + ', className: 'text-zinc-500' },
        { text: 'Tailwind', className: 'text-sky-300' },
    ],
    [
        { text: '> ', className: 'text-emerald-400/80' },
        { text: 'currently building', className: 'text-zinc-500' },
        { text: ': ', className: 'text-zinc-500' },
        { text: 'personal portfolio ', className: 'text-zinc-200' },
        { text: 'v2', className: 'text-amber-300' },
    ],
    [
        { text: '> ', className: 'text-emerald-400/80' },
        { text: 'status', className: 'text-zinc-500' },
        { text: ': ', className: 'text-zinc-500' },
        { text: 'always learning, ', className: 'text-zinc-200' },
        { text: 'always shipping', className: 'text-emerald-300' },
    ],
    [
        { text: '> ', className: 'text-emerald-400/80' },
        { text: 'open to', className: 'text-zinc-500' },
        { text: ': ', className: 'text-zinc-500' },
        { text: 'freelance & collaborations', className: 'text-emerald-300' },
    ],
]

const lineLength = (segments) => segments.reduce((n, s) => n + s.text.length, 0)

function Cursor({ active }) {
    return (
        <motion.span
            aria-hidden="true"
            className="ml-0.5 inline-block h-[1.05em] w-[0.5em] translate-y-[0.15em] bg-emerald-400/90"
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

    return <p className="leading-relaxed">{nodes}</p>
}

export default function TerminalCard() {
    const [lineIndex, setLineIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const done = lineIndex >= lines.length

    useEffect(() => {
        if (done) return

        const length = lineLength(lines[lineIndex])

        if (charIndex < length) {
            const t = setTimeout(() => setCharIndex((c) => c + 1), 22 + Math.random() * 35)
            return () => clearTimeout(t)
        }

        const t = setTimeout(() => {
            setLineIndex((l) => l + 1)
            setCharIndex(0)
        }, 260)
        return () => clearTimeout(t)
    }, [lineIndex, charIndex, done])

    return (
        <div
            aria-hidden="true"
            className="relative flex h-full w-full flex-col overflow-hidden rounded-2xl bg-transparent p-5 font-mono text-sm text-zinc-300 transition-colors hover:border-white/20 sm:p-6"
        >
            <div className="pointer-events-none absolute -top-16 -right-10 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />
            {/*<div*/}
            {/*    className="pointer-events-none absolute inset-0 opacity-[0.05]"*/}
            {/*    style={{*/}
            {/*        backgroundImage:*/}
            {/*            'repeating-linear-gradient(to bottom, #fff 0px, #fff 1px, transparent 1px, transparent 3px)',*/}
            {/*    }}*/}
            {/*/>*/}

            <div className="relative z-10 mb-4 flex items-center justify-between border-b border-white/5 pb-3">
                <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                    <span className="relative h-2.5 w-2.5">
                        <motion.span
                            className="absolute inset-0 rounded-full bg-emerald-400/60"
                            animate={{ scale: [1, 2], opacity: [0.6, 0] }}
                            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
                        />
                        <span className="absolute inset-0 rounded-full bg-emerald-400/90" />
                    </span>
                </div>
                <span className="text-[11px] tracking-wide text-zinc-500">~/portfolio — zsh</span>
            </div>

            <div className="relative z-10 flex flex-1 flex-col gap-2">
                {lines.map((segments, i) => (
                    <Line
                        key={i}
                        segments={segments}
                        revealed={i < lineIndex ? lineLength(segments) : i === lineIndex ? charIndex : 0}
                        active={i === lineIndex}
                    />
                ))}

                <p className="leading-relaxed">
                    <span className={done ? 'text-emerald-400/80' : 'text-transparent'}>{'> '}</span>
                    <Cursor active={done} />
                </p>
            </div>
        </div>
    )
}