import {motion} from 'framer-motion'

function Card({children,className = ''}) {
    return (
        <motion.div
            initial={{ borderColor: 'rgba(255,255,255,0.4)',scale:1 }}
            whileHover={{ borderColor: 'rgba(255,255,255,1)',scale:0.99 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className={`glass border-2 border-solid ${className}`}>
            {children}
        </motion.div>
    )
}
export default Card;