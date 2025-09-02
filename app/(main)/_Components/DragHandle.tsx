import { DragControls } from "framer-motion";

interface Props {
  dragControls: DragControls;
  handleHeight: number;
}

// function handlePointerDown(event: any, dragControl:DragControls){ // maybe use
//     dragControl.start(event)
// }

export function DragHandle({dragControls, handleHeight}:Props){
    return(
        <div
            className={'absolute left-0 right-0 top-0 flex justify-center z-10'} 
            style={{border: '0px solid black', height: `${handleHeight}%`}} // height of the handle is adjustable depending on what is being dragged, but for the most part i don't think it will change from 10%
            onPointerDown={(event) => dragControls.start(event)}
        >

        </div>
    )
}