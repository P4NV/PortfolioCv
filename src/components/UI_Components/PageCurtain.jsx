import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

export default function PageCurtain() {
    const location = useLocation()

    return (
        <AnimatePresence mode='wait'>
            <motion.div
                key={location.pathname}
                className='fixed inset-0 z-50 bg-black pointer-events-none flex items-center justify-center'
                initial={{ scaleY: 0, originY: '0%' }}
                animate={{ scaleY: [0, 1, 1, 0], originY: ['0%', '0%', '100%', '100%'] }}
                transition={{ duration: 1, times: [0, 0.4, 0.6, 1], ease: 'easeInOut' }}
            >
                <motion.span
                    className='text-white text-2xl font-semibold tracking-widest uppercase'
                    animate={{ opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 1, times: [0, 0.35, 0.65, 1] }}
                >
                    Antonio Pavin
                </motion.span>
            </motion.div>
        </AnimatePresence>
    )
}