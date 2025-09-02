import React from 'react'
import { useDroppable } from '@dnd-kit/core'

function Droppable(props: any) {
  const {isOver, setNodeRef} = useDroppable({ // when a draggable element is moved over your droppable element, the 'isOver' property becomes 'true'
    id: 'droppable',
  })
  const style = {
    color: isOver ? 'green' : undefined, // if isOver is true, then the colour of the droppable becomes green
  }


  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  )
}

export default Droppable