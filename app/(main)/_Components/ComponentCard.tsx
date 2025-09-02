//'use client'

import React, { PropsWithChildren, RefObject, useState } from 'react'
import { motion, useDragControls, useMotionValue, useSpring, useTransform, useVelocity } from 'framer-motion'
import { DragHandle } from './DragHandle';

interface Props {
    boundingRef: RefObject<null> | undefined;
    height: number;
}

const angle = 10 // set the "angle" of tile, higher is more crazy
const sheenSize = 1000 // set the size of the sheen

function ComponentCard({boundingRef, height, children}: PropsWithChildren<Props>) { // 'Card' takes a reference to a DivElement, and uses that as a bounds
    const dragControls = useDragControls()
    const [zIndex, setZIndex] = useState(0)

    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const xVelocity = useVelocity(x) // calculate the change in position of the x axis
    const xVelSpring = useSpring(xVelocity, {stiffness: 1000,
                                             damping: 30}) // dampen any acceleration

    const rotate = useTransform( // use the dampened speed values and map them to workable values for rotation (I don't want the card to rotate 16000 degrees if I move it so I map it to 70 degrees in either direction)
        xVelSpring,
        [-6000, 0, 6000],
        [-5, 0, 5],
        {clamp: true} // the upper and lower maximums for rotation values are -70 and 70 degrees rather than rotation -70 and 70 perpetually
    )
    const x2 = useSpring(0, {stiffness: 400})
    const y2 = useSpring(0, {stiffness: 400})


    const springScale = useSpring(1, {stiffness: 4000, damping: 30});

    function updateZIndex(){
        const els = document.querySelectorAll('.drag-handle')
        let maxZindex = -100

        els.forEach((el) => {
            let zIndex = parseInt(window.getComputedStyle(el).getPropertyValue('z-index'))

            if(!isNaN(zIndex) && zIndex > maxZindex){
            maxZindex = zIndex
            }
        })
        
        setZIndex(maxZindex + 1)
    }

    return(
        // <main   style={{
        //             perspective: 800, 
        //             border: '5px solid black', //uncomment this to see where the cards spawn. The black box prevents layers from interacting with each other
        //             height: '0',
        //             width: '100vw', // 264.5px //TODO: make the images scale with overall window sieze and not just window height
        //             display: 'absolute',
        //             left: '50%',
        //             top: '50%', 
        //             justifyContent: 'center', 
        //             alignItems: 'center'}}
        //         className='
        //             relative
        //             inset-0 
        //             min-w-min 
        //             -z-10 
        //             pointer-events-auto'>
        
        <motion.div
            className='min-w-min pointer-events-auto overflow-hidden' // min-w-min sets the minimum width to the smallest possible size without overflow in this case it will take the minimum width of its children without overflow (which is just one child, so the component takes the width of the child: LandingWindow etc.)
            drag                                                                        // enable drag
            dragListener={false}
            dragControls={dragControls}
            //onPointerDown={event => dragControls.start(event)}                                                                       
            dragSnapToOrigin={false}
            dragConstraints={boundingRef}                                               // set bounding area
            //whileDrag={{boxShadow: "10px 14px 2px rgba(0, 0, 0, 0.466)"}}               // while drag enable boxshadow: offset x, y, blur radius
            //whileHover={{scale: 1.01, boxShadow: "5px 5px 1px rgba(0, 0, 0, 0.466)"}}   // while hovering, scale and enable boxshadow
            //whileTap={{ scale: 1.03, boxShadow: "10px 14px 2px rgba(0, 0, 0, 0.466)" }} // while clicking on, scale increase and box shadow enable
            dragElastic={0.25}                                                          // effects resistance to being outside bounding box, lower is more resistance
            dragMomentum={false}                                                        // effects movement after drag ends
            transition={{duration: 0.1, type: 'spring'}}                                // for all i know, all animations will follow this directive                                      
            style={{
                zIndex,
                boxShadow: '2px 8px 2px rgba(0, 0, 0, 0.466)',
                position: 'relative',
                height: `${height}vh`, // 60vh the height here dictates the height of the child (whatever react component you pass into this)
                width: '', 
                borderRadius: '7px', 
                background:'white', 
                display: 'grid',
                border: '3px solid #747474f5',
                justifyContent: 'center', 
                alignItems: 'center', 
                x: x,
                y: y, 
                scale: springScale, 
                rotate, 
                transformOrigin: "50% 25%"}} // set rotation point to upper middle area
        >
            <div className='drag-handle h-full' onMouseDown={updateZIndex}>
            <DragHandle handleHeight={10} dragControls={dragControls}></DragHandle>
            {children} 
            </div>
            

        </motion.div>
       
    )
}

export default ComponentCard

function componentDidMount(this: any) {
    return this.childComponent.getDimensions()
}