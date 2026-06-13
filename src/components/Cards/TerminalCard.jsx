import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const lines = [
    '> initializing portfolio...',
    '> stack: React + Node.js + Tailwind',
    '> currently building: personal portfolio v2',
    '> status: always learning, always shipping',
    '> open to: freelance & collaborations_',
]

export default function TerminalCard() {
    const [displayed, setDisplayed] = useState([])
    const [currentLine, setCurrentLine] = useState(0)
    const [currentChar, setCurrentChar] = useState(0)

    useEffect(() => {
        if (currentLine >= lines.length) return

        if (currentChar < lines[currentLine].length) {
            const t = setTimeout(() => {
                setDisplayed(prev => {
                    const next = [...prev]
                    next[currentLine] = (next[currentLine] || '') + lines[currentLine][currentChar]
                    return next
                })
                setCurrentChar(c => c + 1)
            }, 35)
            return () => clearTimeout(t)
        } else {
            const t = setTimeout(() => {
                setCurrentLine(l => l + 1)
                setCurrentChar(0)
            }, 300)
            return () => clearTimeout(t)
        }
    }, [currentLine, currentChar])

    return (
        <div className='bg-transparent p-6 font-mono text-sm h-full'>
            <div className='flex gap-2 mb-4'>
                <span className='w-3 h-3 rounded-full bg-red-400'></span>
                <span className='w-3 h-3 rounded-full bg-yellow-400'></span>
                <span className='w-3 h-3 rounded-full bg-green-400'></span>
            </div>

            <div className='flex flex-col gap-1 text-white/70 h-full'>
                {displayed.map((line, i) => (
                    <motion.p
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={i === displayed.length - 1 ? 'text-white' : ''}
                    >
                        {line}
                        {i === currentLine && (
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.7 }}
                            >
                                |
                            </motion.span>
                        )}
                    </motion.p>
                ))}
            </div>
        </div>
    )
}