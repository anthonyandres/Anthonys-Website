import { motion, useSpring } from 'framer-motion'
import React, { useState } from 'react'

function ScaleIcon({children}:any) {
    const init = Math.floor(Math.random() * 6)
    const [src, setSrc] = useState('./sounds/glass/glass0.wav')
    const [prevChoice, setPrevChoice] = useState(init)
    const springScale = useSpring(1, {stiffness: 16000, damping: 100})
        
    const meow = new Howl({
        src: [src],
        volume: 0.8
    })

    const handleMouseEnter = () => {
        let choice = Math.floor(Math.random() * 6)
        // let meowChoice = Math.floor(Math.random() * 2) + 1
        while(prevChoice == choice){
            console.log('reroll! ' + choice) 
            choice = Math.floor(Math.random() * 6) //ensure that no number is repeated
        }
        // if(choice > 9){
        //     setSrc('./sounds/meows/meow'+meowChoice+'_Key'+choice+'.wav')
        // }
        // else{
        //     setSrc('./sounds/meows/meow'+meowChoice+'_Key0'+choice+'.wav')
        // }
        setPrevChoice(choice)
        // console.log(src)
        // console.log('meowChoice: ' + meowChoice + ' choice: ' + choice)
        setSrc('./sounds/glass/glass'+choice+'.wav')
        meow.play()
        
    }

    return (
    <motion.div
        transition={{duration: 0.1, type: 'spring'}}
        whileHover={{scale: 1.2}}
        onMouseEnter={handleMouseEnter}
        style={{scale: springScale}}
    >
        {children}
    </motion.div>
  )
}

export default ScaleIcon