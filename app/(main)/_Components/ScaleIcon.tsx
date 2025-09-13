import { motion, useSpring } from 'framer-motion'
import React, { useState } from 'react'

function ScaleIcon({children}:any) {
    const [src, setSrc] = useState('./sounds/meows/meow2_Key00.wav')
    const [prevChoice, setPrevChoice] = useState(0)
    const springScale = useSpring(1, {stiffness: 16000, damping: 100})
        
    const meow = new Howl({
        src: [src],
        volume: 0.3
    })

    const handleMouseEnter = () => {
        let choice = Math.floor(Math.random() * 13)
        let meowChoice = Math.floor(Math.random() * 2) + 1
        while(prevChoice == choice){
            console.log('reroll! ' + choice) 
            choice = Math.floor(Math.random() * 13) //ensure that no number is repeated
        }
        if(choice > 9){
            setSrc('./sounds/meows/meow'+meowChoice+'_Key'+choice+'.wav')
        }
        else{
            setSrc('./sounds/meows/meow'+meowChoice+'_Key0'+choice+'.wav')
        }
        setPrevChoice(choice)
        meow.play()
        console.log(src)
        console.log('meowChoice: ' + meowChoice + ' choice: ' + choice)
        //setSrc('./sounds/steps/step('+choice+').wav')
        
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