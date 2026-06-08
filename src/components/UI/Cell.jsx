import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"

export default function Cell({
                                 col = 1,
                                 row = 1,
                                 colStart,
                                 rowStart,
                                 preview,
                                 expanded: expandedContent,
                                 className = "",
                                 expandedClassName = "",
                             }) {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <>
            {/* holds the grid slot while expanded */}
            {isExpanded && (
                <div style={{
                    gridColumn: `${colStart} / span ${col}`,
                    gridRow:    `${rowStart} / span ${row}`,
                }} />
            )}

            <AnimatePresence mode="wait">
                {!isExpanded ? (
                    <motion.div
                        key="collapsed"
                        className={`border-2 border-white/20 bg-white/5
                                    overflow-hidden cursor-pointer ${className}`}
                        style={{
                            gridColumn: `${colStart} / span ${col}`,
                            gridRow:    `${rowStart} / span ${row}`,
                        }}
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.08, ease: "easeIn" } }}
                        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
                        whileHover={{
                            backgroundColor: "rgba(255,255,255,0.3)",
                            borderColor: "rgba(255,255,255,0)",
                            transition: { duration: 0.15 },
                        }}
                        whileTap={{ scale: 0.97, transition: { duration: 0.1 } }}
                        onClick={() => setIsExpanded(true)}
                    >
                        <motion.div
                            className="w-full h-full"
                            initial={{ opacity: 0, y: 12, x: 5 }}
                            animate={{ opacity: 1, y: 0, x: 0 }}
                            exit={{ opacity: 0, transition: { duration: 0.05 } }}
                            transition={{ delay: 0.4, duration: 0.2 }}
                        >
                            {preview}
                        </motion.div>
                    </motion.div>

                ) : (
                    <motion.div
                        key="expanded"
                        className={`absolute overflow-hidden z-50 ${expandedClassName}`}
                        style={{ inset: "24px" }}
                        initial={{ opacity: 0.6, scale: 0.90, borderRadius: "60px" }}
                        animate={{ opacity: 1, scale: 1, borderRadius: "60px",
                            backgroundColor: "#848484" }}
                        exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.08, ease: "easeIn" } }}
                        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.05 }}
                    >
                        <motion.button
                            className="absolute top-8 right-8 z-10 w-10 h-10 rounded-full
                           bg-black/60 border border-white/20 text-white/80
                           hover:bg-black/80 hover:text-white
                           flex items-center justify-center text-xl leading-none"
                            initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, transition: { duration: 0.05 } }}
                            transition={{ type: "spring", stiffness: 400, damping: 22, delay: 0.1 }}
                            onClick={() => setIsExpanded(false)}
                        >
                            ×
                        </motion.button>

                        <motion.div
                            className="w-full h-full"
                            initial={{ opacity: 0, y: 12, x: 8 }}
                            animate={{ opacity: 1, y: 0, x: 0 }}
                            exit={{ opacity: 0, transition: { duration: 0.05 } }}
                            transition={{ duration: 0.25, delay: 0.4 }}
                        >
                            {expandedContent}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}