import React, { useState } from 'react'

interface Props{
    isMuted: boolean
}

function HowlerVolumeSlider(isMuted:Props) {
    const [volume, setVolume] = useState(0.3)
    Howler.volume(volume) // call once initially to set volume globally

    function handleOnChange(event: React.ChangeEvent<HTMLInputElement>){
        if(!isMuted){
            setVolume(event.target.valueAsNumber)
            Howler.volume(0)
        }
        else{
            setVolume(event.target.valueAsNumber)
            Howler.volume(volume)
        }
    }

    return (
    <input
        type='range'
        min={0}
        max={1}
        step={0.02}
        value={volume}
        onChange={(event) => handleOnChange(event)}
        className='window-colors'
        >    
    </input>
    )
}

export default HowlerVolumeSlider