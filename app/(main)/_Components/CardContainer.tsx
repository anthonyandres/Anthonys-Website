'use client'
import React, { useRef } from 'react'
import Card from './Card'

interface Props{
    imgSrc:string
}

function CardContainer({imgSrc}: Props) {
    const boundingRef = useRef(null)
  return (
    <div ref={boundingRef} className='border-0 z-2 absolute overflow-hidden justify-center h-full w-full'>
        <div className='flex justify-center translate-y-60'>
            <Card boundingRef={boundingRef} imgSrc={imgSrc} />
        </div>
        
    </div>
  )
}

export default CardContainer