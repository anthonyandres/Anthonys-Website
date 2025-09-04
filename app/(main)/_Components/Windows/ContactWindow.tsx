import React, { useState } from 'react'
import './windows.css'
import { IconContext } from 'react-icons'
import {FaMinimize, FaRegFaceLaugh, FaRegFaceMeh } from 'react-icons/fa6'
import localFont from 'next/font/local'

const gelica = localFont({
    src: '../../../../public/Fonts/Gelica/Gelica-Regular.otf',
})

const gelicaBold = localFont({
    src: '../../../../public/Fonts/Gelica/Gelica-Bold.otf',
})

interface Props{
  showContact: ()=> void
}


function LinksWindow({showContact = () => {}}: Props) {
    const [isEmail, setIsEmail] = useState(false)

      const happy = new Howl({
        src: ['./sounds/happy.wav'],
        volume: 0.1
      })
      const sad = new Howl({
        src: ['./sounds/sad.wav'],
        volume: 0.5
      })

    function onEmailHover(){if(!isEmail){setIsEmail(true);  happy.play()}else{setIsEmail(false); sad.play();}}

  return (
    <div className={`window-colors prevent-select h-[596px] w-[30vw] min-w-[600px] max-w-[600px] border-0 rounded-[0px] ${gelica.className}`}>
        <IconContext.Provider value={{ className: 'tertiary-window-colors justify-right border-0 size-[20px] transition duration-100 ease-in hover:scale-[110%]' }}>
                <div className='z-10 absolute gap-x-16 justify-center top-3 right-3'>
                    <FaMinimize onClick={showContact}/>
                </div>
                </IconContext.Provider>
        <div className='flex flex-col h-full'>
            <div className='border-0 tertiary-window-colors flex flex-row landing-header text-amber-100 p-20'>
                <p className='pl-6 text-2xl text-center'>contact</p>
            </div>
            <div className='window-colors grid-rows-3 gap-y-0 overflow-hidden border-0 p-15 h-full'>
                <div className={`secondary-window-colors ${gelicaBold.className}`}>
                    <h1>Contact me!</h1>    
                </div>
                <div className='flex-row justify-center text-center'>
                    <p>The easiest way to contact me is through email. However, you may also be able to reach me through other means!</p>
                    <p className='text-xs mt-2'>(psst check the links window)</p>        
                </div> 
                <div className='text-center border-0'>
                    <button onClick={() => window.location.href = 'mailto:anthonyandres1881@gmail.com'}>
                        <IconContext.Provider value={{ className: 'border-0 size-40 transition duration-100 ease-in hover:scale-[110%] mt-7' }}>
                        {!isEmail && <FaRegFaceMeh onMouseEnter={onEmailHover} onMouseLeave={onEmailHover}/>}
                        {isEmail && <FaRegFaceLaugh onMouseEnter={onEmailHover} onMouseLeave={onEmailHover}/>}
                        </IconContext.Provider>
                    </button>
                    <p>click to send me an email!</p>  
                </div>            
            </div>
            
        </div>
    </div>
  )
}

export default LinksWindow