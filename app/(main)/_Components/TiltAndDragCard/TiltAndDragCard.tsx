import React, { useState } from 'react'
import { defaultCoordinates, DndContext, KeyboardSensor, MouseSensor, TouchSensor, Translate, useDraggable, useSensor, useSensors, PointerActivationConstraint } from '@dnd-kit/core';
import { restrictToWindowEdges } from '@dnd-kit/modifiers';
import Draggablee from './Draggablee';

interface Card {
  //activationConstraint: PointerActivationConstraint;
  id: number;
  title: string;
  //img: string;
}

const cardData = [
  {
    id: "1",
    position:{
      x: 0,
      y: 0
    }
  }
]


const TiltAndDragCard = ({id, title}: Card) => {
  const [position, setPosition] = useState<{x: number, y: number}>({x:0, y:0})

  const{
    attributes, 
    listeners, 
    setNodeRef, 
    transform, 
  } = useDraggable({
    id: id,
  })
  const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)
                    rotateY(${(transform.x/10)}deg) 
                    rotateX(${(transform.y/10)}deg)`, 
    } : undefined
  
  const [{translate}, setTranslate] = useState<{
    initialTranslate: Translate;
    translate: Translate;
  }>({initialTranslate: defaultCoordinates, translate: defaultCoordinates});
  const [initialWindowScroll, setInitialWindowScroll] = useState(
    defaultCoordinates
  );

  return (
    <DndContext modifiers={[restrictToWindowEdges]} onDragEnd={({delta}) => {
      setPosition(currentPosition => {
        const newX = position.x + delta.x
        const newY = position.y + delta.y

        return {x: newX, y: newY}
      })
    }}
    >
      <Draggablee position={position}>

          <div
                data-tilt data-tilt-reverse='true'
                className='border-amber-950 border-8
                            group relative grid 
                            w-[260px] 
                            grid-rows-[200px_120px_40px] 
                            rounded-md 
                            bg-amber-300 p-4 
                            text-blue-800'>
                <figure className='rounded-md mix-blend-multiply' />
                <div className='pt-4'>
                    <p className='text-3x1 font-bold'>{id}</p>
                    <p className='text-x1'>{title}</p>
                </div>
                <script type="text/javascript" src="vanilla-tilt.js"></script>
            </div>

      </Draggablee>
    </DndContext>
  )
}



export default TiltAndDragCard