import { useDraggable } from '@dnd-kit/core'
import {CSS} from '@dnd-kit/utilities'
import React from 'react'

function Draggable(props: any) {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: 'draggable',
    })
    // const style = {
    //     transform: CSS.Translate.toString(transform),
    // }
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0) 
                    rotateY(${noFlip(transform.x/10)}deg) 
                    rotateX(${noFlip(transform.y/10)}deg)`,
    } : undefined

    const perspectiveStyle = transform ? {
        perspective: 1000,
    } : undefined

    return (
        <div className='flex flex-col [perspective:800px]'>
            <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
                BONTY
                {props.children}
            </button>
        </div>
    )
}

export default Draggable

function noFlip(arg0: number) {
    if(arg0 > 35){
        return 35
    }
    else{
        return arg0
    }
}
