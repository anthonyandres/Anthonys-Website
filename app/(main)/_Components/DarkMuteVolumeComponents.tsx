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
    
    function onDarkModeClick(){if(!isDark){setIsDark(true);  dark.play()}else{setIsDark(false); light.play();}}
    function onMuteSoundClick(){if(!isMute){setIsMute(true);  Howler.mute(true)}else{setIsMute(false); soundOn.play(); Howler.mute(false)}} //Howler.mute(false): all howler global methods are called using `Howler`
    return (
        <div className='main-bg-colors h-dvh overflow-hidden' data-theme={isDark ? 'dark' : 'light'}>
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

            <div className='absolute mt-7 ml-41'>
            <HowlerVolumeSlider isMuted={isMute} />
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default DarkMuteVolumeComponents