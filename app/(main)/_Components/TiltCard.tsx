//'use client'

import React, { PropsWithChildren, RefObject, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useVelocity } from 'framer-motion'
import { Howl } from 'howler'

interface Props {
    boundingRef: RefObject<null> | undefined;
    imgSrc: string
}

const angle = 12 // set the "angle" of tile, higher is more crazy
const sheenSize = 1000 // set the size of the sheen

function TiltCard({boundingRef, imgSrc}: PropsWithChildren<Props>) { // 'Card' takes a reference to a DivElement, and uses that as a bounds
    //const bound: RefObject<'div'> = boundingRef.current
    const [zIndex, setZIndex] = useState(0)
    const x = useMotionValue(0)
    const xVelocity = useVelocity(x) // calculate the change in position of the x axis
    const xVelSpring = useSpring(xVelocity, {stiffness: 1000, damping: 30}) // dampen any acceleration
    const springScale = useSpring(1, {stiffness: 4000, damping: 30});
    
    const rotate = useTransform( // use the dampened speed values and map them to workable values for rotation (I don't want the card to rotate 16000 degrees if I move it so I map it to 70 degrees in either direction)
        xVelSpring,
        [-6000, 0, 6000],
        [-60, 0, 60],
        {clamp: true} // the upper and lower maximums for rotation values are -70 and 70 degrees rather than rotation -70 and 70 perpetually
    )
    const x2 = useSpring(0, {stiffness: 400})
    const y2 = useSpring(0, {stiffness: 400})
    const rotateX = useTransform(y2, [-0.5, 0.5], [`${angle}deg`, `-${angle}deg`]) //handleMouseMove() determines x2 and y2, which are used here to calculate tilt
    const rotateY = useTransform(x2, [-0.5, 0.5], [`-${angle}deg`, `${angle}deg`])

    // const mouseXPos = useSpring(0, {bounce: 0})
    // const mouseYPos = useSpring(0, {bounce: 0})

    const handleMouseMove = (e: any) => {// calculate various measurements in order to obtain the x/y rotational values for tilting
        console.log('mouse move!')
        const rect = e.target.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPercent = mouseX / width - 0.5; // calculate mouse position as a percentage of where it is on the card element
        const yPercent = mouseY / height - 0.5;

        x2.set(xPercent);
        y2.set(yPercent);
        // mouseXPos.set(mouseX - sheenSize / 2)
        // mouseYPos.set(mouseY - sheenSize / 2)
    }

    
    const handleMouseLeave = () => {// set rotation values back to 0, in other words, reset tilt
        x2.set(0);
        y2.set(0);
    }

    

    const sound1 = new Howl({
        src: ['./sounds/Obj_Fall_Leaf_1.wav'],
        volume: 0.3,
    })
    const sound2 = new Howl({
        src: ['./sounds/Obj_Fall_Leaf_2.wav'],
        volume: 0.3
    })
    const sound3 = new Howl({
        src: ['./sounds/Obj_Fall_Leaf_3.wav'],
        volume: 0.3
    })

    function handleRandomSound(){
        const choice = Math.floor(Math.random() * 3)
        console.log(choice)
        switch(choice){
            case 0: 
                sound1.play()
                break
            case 1: 
                sound2.play()
                break
            case 2: 
                sound3.play()
                break
            default: console.log('no sound?')
        }
    }



    return(
        <main   style={{
                    zIndex,
                    perspective: 800, 
                    //border: '5px solid black', //uncomment this to see where the cards spawn. The black box prevents layers from interacting with each other
                    height: '0',
                    width: '19.2vw', // 264.5px 19.2vw
                    display: 'flex',
                    //left: '43vw',
                    //top: '50vh', 
                    justifyContent: 'center', 
                    alignItems: 'center',}}
                className='
                    relative
                    inset-0 
                    min-w-min 
                    -z-10 
                    pointer-events-auto'>
        {/* <span style={{perspective: 800, border: '5px solid white', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}} className='inset-0 min-w-min -z-10 pointer-events-auto'> */}
        <motion.div
            className=' drag-elements flex flex-col overflow-hidden group'
            //whileHover={{scale: 1.07, boxShadow: "7px 7px 1px rgba(0, 0, 0, 0.466)"}}   // while hovering, scale and enable boxshadow
            //whileTap={{ scale: 1.14, boxShadow: "12px 16px 2px rgba(0, 0, 0, 0.466)" }} // while clicking on, scale increase and box shadow enable
            dragElastic={0.25}                                                          // effects resistance to being outside bounding box, lower is more resistance
            dragMomentum={false}                                                        // effects movement after drag ends
            transition={{duration: 0.1, type: 'spring'}}                                // for all i know, all animations will follow this directive
            onMouseMove={handleMouseMove}                                               // when mouse moves on element, call this function
            onMouseLeave={handleMouseLeave}                                            //  when mouse leaves element, call this function     
            whileHover={{scale: 1.04, boxShadow: "7px 7px 1px rgba(0, 0, 0, 0.466)"}}   // while hovering, scale and enable boxshadow
            whileTap={{ scale: 1.07, boxShadow: "12px 16px 2px rgba(0, 0, 0, 0.466)" }}
            onTapStart={handleRandomSound}                                      
            style={{
                    //boxShadow: "5px 5px 0px rgba(0, 0, 0, 0.466)",
                    border: '0px solid #747474f5',
                    minWidth: '180px',
                    minHeight: '248px',
                    maxWidth: '270px',
                    maxHeight: '273px', 
                    height: '273px', 
                    width: '275px', //14.34 
                    borderRadius: '150px', 
                    background:'white', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    rotateX, 
                    rotateY, 
                    x, 
                    scale: springScale, 
                    rotate, 
                    //transformOrigin: "50% 25%"
                    }} // set rotation point to upper middle area
            >

            {/*TODO: sheen is laggy and only works after reloading test page FIX IT OR GET RID OF IT (but prob get rid of it)*/}
            {/* <motion.div    
                className='absolute z-10 opacity-0 group-hover:opacity-30 transition-opacity duration-200 rounded-full blur-md'
                style={{
                    background: 'radial-gradient(white, #3984ff00 80%',
                    left: mouseXPos,
                    top: mouseYPos,
                    height: sheenSize,                        
                    width: sheenSize,
                }}  
            /> */}
            
            <img style={{   
                            scale: '1.1', 
                            height: '483px', //was 18.2vw //images used will be 783x1080
                            width: '350px', //was 13.34vw
                            borderRadius: '10px', 
                            border: '10px solid white', 
                            pointerEvents: 'none', 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center',
                        translate: '0px 40px'}} 
                 className='m-2 object-cover w-3xs' 
                 src={imgSrc}>    
            </img>
        
        </motion.div>
        {/* </span> */}
        </main>
    )
}

export default TiltCard