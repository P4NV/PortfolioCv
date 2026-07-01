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
                transition={{
                    duration: 1.5,
                    times: [0, 0.15, 0.85, 1],
                    ease: ['easeIn', 'linear', 'easeIn'],
                }}
            >
                <motion.span
                    className='text-white text-2xl font-semibold tracking-widest uppercase'
                    animate={{ opacity: [1] }}
                    transition={{ duration: 2, times: [2] }}
                >
                    <img src='/tumblr_mc23i6syO01rfjowdo1_500_gif (500×500).gif' alt='bat'/>
                </motion.span>
            </motion.div>
        </AnimatePresence>
    )
}