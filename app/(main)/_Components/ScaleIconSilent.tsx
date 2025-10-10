import { motion, useSpring } from 'framer-motion'

function ScaleIconSilent({children}:any) {
    const init = Math.floor(Math.random() * 6)
    const springScale = useSpring(1, {stiffness: 16000, damping: 100})

    return (
    <motion.div
        transition={{duration: 0.1, type: 'spring'}}
        whileHover={{scale: 1.2}}
        whileTap={{ scale: 0.95}}
        style={{scale: springScale}}
    >
        {children}
    </motion.div>
  )
}

export default ScaleIconSilent