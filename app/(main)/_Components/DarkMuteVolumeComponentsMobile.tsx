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

function DarkMuteVolumeComponentsMobile({children}:any) {
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
            <div className='absolute m-0 top-0 left-0 border-0'>
                <IconContext.Provider value={{ className: 'tertiary-window-colors border-0 size-10 transition duration-100 ease-in hover:scale-[110%] ml-7 mt-4' }}>
                    <div className='absolute left-14'>
                        {!isDark && <FaSun onClick={onDarkModeClick}/>}
                    </div>
                    <div className='absolute left-14'>
                        {isDark && <FaMoon onClick={onDarkModeClick}/>}
                    </div>
                    <div className='absolute'>
                        {!isMute && <FaVolumeHigh onClick={onMuteSoundClick}/>}
                    </div>
                    <div className='absolute'>
                        {isMute && <FaVolumeXmark onClick={onMuteSoundClick}/>}
                    </div>
                </IconContext.Provider>

                <div className='absolute top-15 left-2'>
                <HowlerVolumeSlider isMuted={isMute} />
                </div>

                
            </div>

            <div>
                {children}
            </div>
        </div>
    )
}

export default DarkMuteVolumeComponentsMobile