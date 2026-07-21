import { motion } from 'framer-motion'
import { CURTAIN_DURATION, LIFT_POINT } from './transitionConfig'

// Page enter/exit is choreographed against PageCurtain's timing:
//   - enter: starts fading in the moment the curtain begins lifting, so the
//     new content is revealed as the tiles rise (not before the curtain covers
//     the screen).
//   - exit: fades out quickly so the curtain has time to fully close before
//     the new route mounts.
const variants = {
    initial: { opacity: 0 },
    enter: {
        opacity: 1,
        transition: { duration: 0.45, delay: CURTAIN_DURATION * LIFT_POINT },
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.3 },
    },
}

export default function PageTransition({ children }) {
    return (
        <motion.div
            variants={variants}
            initial='initial'
            animate='enter'
            exit='exit'
        >
            {children}
        </motion.div>
    )
}
