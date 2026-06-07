import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"

export default function Cell({
                                 col = 1,
                                 row = 1,
                                 colStart,
                                 rowStart,
                                 children,
                                 className = "",
                             }) {
    const [expanded, setExpanded] = useState(false)

    return (
        <>
            {/* placeholder — holds the grid slot when cell is expanded so layout doesn't shift */}
            {expanded && (
                <div
                    style={{
                        gridColumn: `${colStart} / span ${col}`,
                        gridRow:    `${rowStart} / span ${row}`,
                    }}
                />
            )}

            <motion.div
                className={`border-2 border-white/20 bg-white/10 p-4 overflow-hidden ${className}`}
                style={{
                    // when collapsed — live in the grid normally
                    gridColumn: expanded ? undefined : `${colStart} / span ${col}`,
                    gridRow:    expanded ? undefined : `${rowStart} / span ${row}`,

                    // when expanded — rip out of grid and cover the container
                    position:   expanded ? "absolute" : "relative",
                    inset:      expanded ? 0 : undefined,
                    zIndex:     expanded ? 50 : 1,
                    borderRadius: expanded ? "40px" : undefined,
                    cursor: "pointer",
                }}
                layout
                animate={{
                    borderColor: expanded ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.2)",
                    backgroundColor: expanded ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.08)",
                }}
                whileHover={!expanded ? {
                    backgroundColor: "rgba(255,255,255,0.12)",
                    borderColor: "rgba(255,255,255,0.3)",
                } : {}}
                whileTap={!expanded ? { scale: 0.985 } : {}}
                transition={{
                    layout: { type: "spring", stiffness: 280, damping: 28 },
                    borderColor: { duration: 0.2 },
                    backgroundColor: { duration: 0.2 },
                }}
                onClick={() => !expanded && setExpanded(true)}
            >
                {/* shimmer top line */}
                <AnimatePresence>
                    {expanded && (
                        <motion.div
                            className="absolute inset-x-0 top-0 h-px bg-white/40 pointer-events-none"
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: 1 }}
                            exit={{ scaleX: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    )}
                </AnimatePresence>

                {/* close button */}
                <AnimatePresence>
                    {expanded && (
                        <motion.button
                            className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full
                         bg-white/10 border border-white/20 text-white/60
                         hover:bg-white/20 hover:text-white
                         flex items-center justify-center text-lg leading-none"
                            initial={{ opacity: 0, scale: 0.4, rotate: -90 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.4, rotate: 90 }}
                            transition={{ type: "spring", stiffness: 400, damping: 22 }}
                            onClick={e => { e.stopPropagation(); setExpanded(false) }}
                        >
                            ×
                        </motion.button>
                    )}
                </AnimatePresence>

                {/* content */}
                <motion.div
                    animate={{ opacity: expanded ? 1 : 0.75 }}
                    transition={{ duration: 0.2 }}
                >
                    {children}
                </motion.div>
            </motion.div>
        </>
    )
}