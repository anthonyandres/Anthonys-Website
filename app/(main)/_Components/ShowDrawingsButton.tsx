'use client'

import { useState } from "react"
import { IconContext } from "react-icons"
import { FaPaintbrush } from "react-icons/fa6"
import { Howl } from 'howler';

function ShowDrawingsButton(){
    const [showDrawings, setShowDrawings] = useState(false)

    const sound1 = new Howl({
        src: ['./sounds/draw1.wav'],
        volume: 2
    })
    const sound2 = new Howl({
        src: ['./sounds/draw2.wav'],
        volume: 2
    })
    const sound3 = new Howl({
        src: ['./sounds/draw3.wav'],
        volume: 2
    })
    const sound4 = new Howl({
        src: ['./sounds/draw4.wav'],
        volume: 2
    })

    function randomDraw(){
        const choice = Math.floor(Math.random() * 4)
        console.log(choice)
        switch(choice){
            case 0:
                sound1.rate(0.8) 
                sound1.play()
                break
            case 1:
                sound2.rate(1)  
                sound2.play()
                break
            case 2:
                sound3.rate(0.7)  
                sound3.play()
                break
            case 3:
                sound4.rate(0.9)  
                sound4.play()
                break
            default: console.log('no sound?')
        }
    }

    function onShowDrawingsClick(){if(!showDrawings){setShowDrawings(true); randomDraw()}else{setShowDrawings(false); randomDraw()}}

    return(
        <div>
            <IconContext.Provider value={{ className: 'tertiary-window-colors border-0 size-10 transition duration-100 ease-in hover:scale-[110%] ml-7 mt-4' }}>
                <div className=' border-0 absolute ml-28'>
                    <FaPaintbrush onClick={onShowDrawingsClick}/>
                </div>
            </IconContext.Provider>
            <div>
            {showDrawings &&
                    <div className=' pointer-events-none'>
                        <img className='z-0 absolute bottom-[50vh] translate-y-[50vh] -left-10 w-[600px]' src={'./assets/gif/girlies.gif'} alt='loading...' draggable={false} />
                        <img className='z-0 absolute bottom-0 right-0 w-[530px] scale-x-[100%]' src={'./assets/gif/doodle.gif'} alt='loading...' draggable={false} />
                    </div>
            }
            </div>
        </div>
    )
}

export default ShowDrawingsButton