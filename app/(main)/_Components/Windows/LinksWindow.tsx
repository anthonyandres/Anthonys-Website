import React from 'react'
import './windows.css'
import { IconContext } from 'react-icons'
import {FaGithub, FaLinkedin, FaMinimize, FaPalette, FaSquareInstagram, FaYoutube } from 'react-icons/fa6'
import { MdLibraryMusic } from "react-icons/md"
import localFont from 'next/font/local'
import { Howl } from 'howler'
import ScaleIcon from '../ScaleIcon'

const gelica = localFont({
  src: '../../../../public/Fonts/Gelica/Gelica-Regular.otf',
})

interface Props{
  showLinks: ()=> void
}

const press = new Howl({
    src: ['./sounds/craft.wav'],
    volume: 0.3
})


function LinksWindow({showLinks = () => {}}: Props) {

    const openInNewTab = (url:string) => {
        press.play()
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
}

  return (
    <div className='window-colors prevent-select h-[100%] w-[20vw] min-w-150 max-w-[960px] border-0 rounded-[0px]'>
        <IconContext.Provider value={{ className: 'tertiary-window-colors justify-right border-0 size-[20px] transition duration-100 ease-in hover:scale-[110%]' }}>
        <div className='z-10 absolute gap-x-16 justify-center top-3 right-3'>
            <FaMinimize onClick={showLinks}/>
        </div>
        </IconContext.Provider>
        <div className='flex flex-col gap-y-0 h-full'>
            <div className='tertiary-window-colors flex flex-row landing-header text-amber-100 p-20'>
                <p className='pl-6 text-2xl text-center'>links</p>
            </div>
            <div className={`window-colors overflow-hidden border-0 grid text-xl grid-cols-3 h-full p-7 pt-12 ${gelica.className}`}>
                <IconContext.Provider value={{ className: 'border-0 size-[80px]' }}>
                <ScaleIcon>
                    <div className='border-0 flex flex-col items-center' onClick={()=>openInNewTab('https://github.com/anthonyandres')}>
                        <FaGithub/>
                        <p className=''>Github </p>
                    </div>
                </ScaleIcon>

                <ScaleIcon>
                    <div className='border-0 flex flex-col items-center' onClick={()=>openInNewTab('https://www.linkedin.com/in/anthony-andres-5599121b6/')}>
                        <FaLinkedin/>
                        <p className=''>LinkedIn </p>
                    </div>
                </ScaleIcon>

                <ScaleIcon>
                    <div className='border-0 flex flex-col items-center' onClick={()=>openInNewTab('https://www.youtube.com/@anthong_/featured')}>
                        <FaYoutube/>
                        <p className=''>Youtube </p>
                    </div>
                </ScaleIcon>

                <ScaleIcon>
                    <div className='border-0 flex flex-col items-center' onClick={()=>openInNewTab('https://www.instagram.com/anthong.png/')}>
                        <FaSquareInstagram/>
                        <p className=''>Instagram </p>  
                    </div>
                </ScaleIcon>

                <ScaleIcon>
                    <div className='border-0 flex flex-col items-center' onClick={()=>openInNewTab('')}>
                        <FaPalette/>
                        <p className=''>Art! </p>
                    </div>
                </ScaleIcon>

                <ScaleIcon>
                    <div className='border-0 flex flex-col items-center' onClick={()=>openInNewTab('https://open.spotify.com/user/anthobhu?si=df297d63376c45f3')}>
                        <MdLibraryMusic/>
                        <p className=''>Music! </p>
                    </div>
                </ScaleIcon>
                </IconContext.Provider>            
            </div>
            
        </div>
    </div>
  )
}

export default LinksWindow