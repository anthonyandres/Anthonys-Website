import React, { useRef } from 'react'

type Props = {
    name: string;
    title: string;
    since: string;
}

const BalatroCardTilt = ({name, title, since}: Props) => {
    const boundingRef = useRef<DOMRect | null>(null) // create a reference that is either type DOMRect or null, we use this to store a mutable value that does not cause a re-render when updated
  return (
    <div className='border border-amber-400'>
        <div
            // onMouseLeave={() => (boundingRef.current = null)} // when mouse leaves the component, clear reference to 'null
            // onMouseEnter={(ev) => {
            //     boundingRef.current = ev.currentTarget.getBoundingClientRect() // when mouse enters we store the position of the component in 'boundingRef'
            // }}
            // onMouseMove={(ev) => {
            //     if(!boundingRef.current) return // if there is nothing in boundingRef, the mouse is not over the component. So, do nothing when mouse moves
            //     const x = ev.clientX - boundingRef.current.left // take the mouse position in relation to the left side of the screen, subtract the position of the left side of the component, this gives use the distance of the mouse from the left side of the component
            //     const y = ev.clientY - boundingRef.current.top // same for top of component
            //     const xPercentage = x / boundingRef.current.width
            //     const yPercentage = y / boundingRef.current.height
            //     const xRotation = (xPercentage - 0.5) * 20
            //     const yRotation = (-yPercentage + 0.5) * 20

            //     ev.currentTarget.style.setProperty("--x-rotation", `${yRotation}deg`)
            //     ev.currentTarget.style.setProperty("--y-rotation", `${xRotation}deg`)

            // }} 
            data-tilt data-tilt-reverse='true'
            className=' border-amber-950 border-8
                        group relative grid 
                        w-[260px] 
                        grid-rows-[200px_120px_40px] 
                        rounded-md 
                        bg-amber-300 p-4 
                        text-blue-800'>
            <figure className='rounded-md mix-blend-multiply' />
            <div className='pt-4'>
                <p className='text-3x1 font-bold'>{name}</p>
                <p className='text-x1'>{title}</p>
            </div>
            <script type="text/javascript" src="vanilla-tilt.js"></script>
        </div>
    </div>
  )
}

export default BalatroCardTilt