import {motion} from 'framer-motion'

function Card({children,className = ''}) {
    return (
        <motion.div
            initial={{ borderColor: 'rgba(255,255,255,0.4)' }}
            whileHover={{ borderColor: 'rgba(255,255,255,1)'}}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className={`glass_card border-2 border-solid text-xl ${className}`}>
            {children}
        </motion.div>
    )
}
export default Card;