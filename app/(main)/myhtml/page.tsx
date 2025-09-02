'use client';
import React, {useState} from 'react';
import { DndContext } from "@dnd-kit/core";
import Draggable from '../_Components/Draggable';
import Droppable from '../_Components/Droppable';
import VanillaTilt from 'vanilla-tilt'

function page() {
    const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = (
    <Draggable>
        <div className='flex justify-center'>
            <img className='m-2 rounded-lg w-[200px] h-[300px] object-cover' src={"/image.JPG"} data-tilt data-tilt-scale='1.1' data-tilt-reverse='true' data-tilt-perspective={300}></img>            
        </div>
        
    </Draggable>
  );
  return (
    <main>
        
      <DndContext onDragEnd={handleDragEnd}>
        {!isDropped ? draggableMarkup : null}
        <Droppable>
          {isDropped ? draggableMarkup : 'Drop here'}
        </Droppable>
    </DndContext>
    <script type="text/javascript" src="./vanilla-tilt.js"></script>
    </main>
  )

  function handleDragEnd(event: any) {
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true);
    }
  }
}


export default page