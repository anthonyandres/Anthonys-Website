'use client'

import React, { MutableRefObject, RefObject, useRef } from 'react'
import {motion, useMotionValue, useSpring, useTransform, useVelocity} from 'framer-motion'
import Card from './Card';

interface Props {
    outerRef: RefObject<null>;
}

function DragCard({outerRef}: Props) {
    // TODO: see if there's anything useful you can do with this parent child structure between Card and its bounding area (DragCard) 
    const containerRef = useRef<null>(null); // create a reference to a div element
    return(
        <div ref={containerRef} className='absolute inset-0 z-10 overflow-hidden'>
            <Card boundingRef={containerRef} /> 
        </div>
    )
//   return (
//     <section className='relative 
//                         grid 
//                         min-h-screen 
//                         w-full 
//                         place-content-center 
//                         overflow-hidden 
//                         bg-#486a4f'>
//         <h2 className='relative
//                        z-0 
//                        text-[20vw] 
//                        font-black 
//                        text-neutral-800 
//                        md:text-[200px]'>
//             ANTHONY<span className='text-indigo-500'>.</span>
//         </h2>
//         <Cards />
//     </section>
//   );
};

// const Cards = () => {
//     const containerRef = useRef<HTMLDivElement | null>(null);
//     return(
//         <div ref={containerRef} className='absolute inset-0 z-10'>
//             <Card ref={containerRef} />
//         </div>
//     )
// }

// const Card = ({containerRef}: Props) => {
//     const x = useMotionValue(0)
//     const y = useMotionValue(0)
//     const xVelocity = useVelocity(x)
//     const xVelSpring = useSpring(xVelocity, {stiffness: 150,})

//     const rotate = useTransform(
//         xVelSpring,
//         [-16000, 0, 16000],
//         [-70, 1, 70],
//         {clamp: true}
//     )

//     return <motion.div 
//             drag
//             dragConstraints={containerRef}
//             style={{x, rotate}} 
//             className='size-56 bg-white'></motion.div>
// }

export default DragCard