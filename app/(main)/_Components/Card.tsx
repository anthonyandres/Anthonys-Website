//'use client'

import React, { PropsWithChildren, RefObject } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useVelocity } from 'framer-motion'
import { Howl } from 'howler'

interface Props {
    boundingRef: RefObject<null> | undefined;
    imgSrc: string
    //zIndex: number
}

const angle = 10 // set the "angle" of tile, higher is more crazy
const sheenSize = 1000 // set the size of the sheen

function Card({boundingRef, imgSrc}: PropsWithChildren<Props>) { // 'Card' takes a reference to a DivElement, and uses that as a bounds
    const x = useMotionValue(0)
    const xVelocity = useVelocity(x) // calculate the change in position of the x axis
    const xVelSpring = useSpring(xVelocity, {stiffness: 1000,
                                             damping: 30}) // dampen any acceleration
    const cardHover = new Howl({
        src: ['./sounds/CARD_TAP_01.wav'],
        volume: 0.3
    })
    const cardUp = new Howl({
        src: ['./sounds/CARD_UP_08.wav'],
        volume: 0.05
    })
    const cardDown = new Howl({
        src: ['./sounds/CARD_PLACE_01.wav'],
        volume: 0.3
    })

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
    }

    
    const handleMouseLeave = () => {// set rotation values back to 0, in other words, reset tilt
        x2.set(0);
        y2.set(0);
        //cardDown.play()
    }
    const handleHoverStart = () => {
        console.log('hover start!')
        //cardHover.play()

    }
    const handleDrag = () => {
        cardUp.play()

    }

    const springScale = useSpring(1, {stiffness: 4000, damping: 30});

    return(
        <main   style={{
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
            drag                                                                        // enable drag
            dragSnapToOrigin={false}
            dragConstraints={boundingRef}                                               // set bounding area
            whileDrag={{boxShadow: "12px 16px 2px rgba(0, 0, 0, 0.466)"}}               // while drag enable boxshadow: offset x, y, blur radius
            whileHover={{scale: 1.07, boxShadow: "7px 7px 1px rgba(0, 0, 0, 0.466)"}}   // while hovering, scale and enable boxshadow
            whileTap={{ scale: 1.14, boxShadow: "12px 16px 2px rgba(0, 0, 0, 0.466)" }} // while clicking on, scale increase and box shadow enable
            dragElastic={0.25}                                                          // effects resistance to being outside bounding box, lower is more resistance
            dragMomentum={false}                                                        // effects movement after drag ends
            transition={{duration: 0.1, type: 'spring'}}                                // for all i know, all animations will follow this directive
            onMouseMove={handleMouseMove}                                               // when mouse moves on element, call this function
            onMouseLeave={handleMouseLeave}                                             //  when mouse leaves element, call this function
            //onMouseDown={updateZIndex}
            onHoverStart={handleHoverStart}
            onDragStart={handleDrag}                                           
            style={{
                    //boxShadow: "5px 5px 0px rgba(0, 0, 0, 0.466)",
                    border: '2px solid #747474f5',
                    minWidth: '180px',
                    minHeight: '248px',
                    maxWidth: '270px',
                    maxHeight: '372px', 
                    height: '19.2vw', 
                    width: '14.34vw', 
                    borderRadius: '10px', 
                    background:'white', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    rotateX, 
                    rotateY, 
                    x, 
                    scale: springScale, 
                    rotate, 
                    transformOrigin: "50% 25%"}} // set rotation point to upper middle area
            >

            
            <img style={{   
                            scale: '10vw', 
                            height: '483px', //was 18.2vw //images used will be 783x1080
                            width: '350px', //was 13.34vw
                            borderRadius: '10px', 
                            border: '10px solid white', 
                            pointerEvents: 'none', 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center'}} 
                 className='m-2 object-cover w-3xs' 
                 src={imgSrc}>    
            </img>
        
        </motion.div>
        {/* </span> */}
        </main>
    )
}

export default Card