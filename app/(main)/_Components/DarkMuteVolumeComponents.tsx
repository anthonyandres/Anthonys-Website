'use client'
import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import { FaMoon, FaSun, FaVolumeHigh, FaVolumeXmark } from 'react-icons/fa6'
import HowlerVolumeSlider from './HowlerVolumeSlider'
import "../../globals.css"
import { Howl, Howler } from 'howler'

// interface Props{
//     invertDark: () => void
// }

function DarkMuteVolumeComponents({children}:any) {
    const [isMute, setIsMute] = useState(false)
    const [isDark, setIsDark] = useState(false)
    const [showDrawings, setShowDrawings] = useState(false)
    
    
    const light = new Howl({
        src: ['./sounds/UI_Day.wav'],
        volume: 1.5
      })
    const dark = new Howl({
        src: ['./sounds/UI_Night.wav'],
        volume: 1.5
    })
    const soundOn = new Howl({
        src: ['./sounds/soundOn.wav'],
        volume: 1.5
    })
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
    
    function onDarkModeClick(){if(!isDark){setIsDark(true);  dark.play()}else{setIsDark(false); light.play();}}
    function onMuteSoundClick(){if(!isMute){setIsMute(true);  Howler.mute(true)}else{setIsMute(false); soundOn.play(); Howler.mute(false)}} //Howler.mute(false): all howler global methods are called using `Howler`
    
    return (
        <div className='border-0 z-1 main-bg-colors h-full min-h-[100vh]' data-theme={isDark ? 'dark' : 'light'}>
            <IconContext.Provider value={{ className: 'tertiary-window-colors border-0 size-10 transition duration-100 ease-in hover:scale-[110%] ml-7 mt-4' }}>
            <div className='absolute ml-14'>
                {!isDark && <FaSun onClick={onDarkModeClick}/>}
            </div>
            <div className='absolute ml-14'>
                {isDark && <FaMoon onClick={onDarkModeClick}/>}
            </div>
            <div className='absolute'>
                {!isMute && <FaVolumeHigh onClick={onMuteSoundClick}/>}
            </div>
            <div className='absolute'>
                {isMute && <FaVolumeXmark onClick={onMuteSoundClick}/>}
            </div>
            
            </IconContext.Provider>

            <div className='absolute mt-17 ml-7'>
            <HowlerVolumeSlider isMuted={isMute} />
            </div>

            {showDrawings &&
                <div className='z-0 pointer-events-none'>
                    <img className='absolute left-2/6 -top-20 rotate-20 w-[900px]' src={'./assets/gif/couch.gif'} alt='loading...' draggable={false} />
                    <img className='absolute bottom-0 left-0 w-[650px]' src={'./assets/gif/girlies.gif'} alt='loading...' draggable={false} />
                    <img className='absolute bottom-0 right-0 w-[650px] -scale-x-[100%]' src={'./assets/gif/doodle.gif'} alt='loading...' draggable={false} />
                </div>
            }

            <div>
                {children}
            </div>
        </div>
    )
}

export default DarkMuteVolumeComponents