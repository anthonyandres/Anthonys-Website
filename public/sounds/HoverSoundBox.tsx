import React, { useState } from 'react'
import { Howl } from 'howler'
import { motion, useSpring } from 'framer-motion'

function HoverSoundBox({children}:any) {
    const [src, setSrc] = useState('./sounds/steps/step(1).wav')
    const [prevChoice, setPrevChoice] = useState(0)
    const springScale = useSpring(1, {stiffness: 16000, damping: 100})
    
    const meow = new Howl({
        src: [src],
        volume: 1
    })

    const handleMouseEnter = () => {
        let choice = Math.floor(Math.random() * 5) + 1
        while(prevChoice == choice){
            console.log('reroll! ' + choice) 
            choice = Math.floor(Math.random() * 5) + 1 //ensure that no number is repeated
        }
        setPrevChoice(choice)
        meow.play()
        setSrc('./sounds/steps/step('+choice+').wav')
        console.log(choice)
    }

    return (
        <motion.div
            className='window-colors secondary-background-colors border-3 rounded-[10px]  w-fit p-2 m-1'
            transition={{duration: 0.1, type: 'spring'}}
            whileHover={{scale: 1.3, boxShadow: "3px 3px 1px rgba(0, 0, 0, 0.466)"}}
            onMouseEnter={handleMouseEnter}
            style={{scale: springScale}}
        >
            {children}
        </motion.div>
    )
}

export default HoverSoundBox