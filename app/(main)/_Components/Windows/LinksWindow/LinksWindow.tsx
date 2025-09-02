import React, { useRef } from 'react'
import '../style.css'
import { IconContext } from 'react-icons'
import {FaDAndD, FaGithub, FaLinkedin, FaMinimize, FaNewspaper, FaPalette, FaSquareInstagram, FaYoutube } from 'react-icons/fa6'
import { MdLibraryMusic } from "react-icons/md"
import localFont from 'next/font/local'
import { Howl } from 'howler'

const gelica = localFont({
  src: '../../../../../public/Fonts/Gelica/Gelica-Regular.otf',
})

interface Props{
  showLinks: ()=> void
}

const press = new Howl({
    src: ['./sounds/craft.wav'],
    volume: 0.1
})


function LinksWindow({showLinks = () => {}}: Props) {
    const containerRef = useRef<null>(null)

    const openInNewTab = (url:string) => {
        press.play()
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
}

  return (
    <div className='prevent-select h-[100%] w-[20vw] min-w-150 max-w-[960px] border-0 rounded-[0px]'>
        <IconContext.Provider value={{ color: '#fef3c6', className: 'justify-right border-0 size-[20px] transition duration-100 ease-in hover:scale-[110%]' }}>
                <div className='z-10 absolute gap-x-16 justify-center top-3 right-3'>
                    <FaMinimize onClick={showLinks}/>
                </div>
                </IconContext.Provider>
        <div className='flex flex-col gap-y-0 window'>
            <div className='flex flex-row landing-header text-amber-100 p-20'>
                <p className='pl-6 text-2xl text-center'>links</p>
            </div>
            <div className={`landingWindow text-[#4a4a4a] overflow-hidden border-0 grid text-xl grid-cols-3 h-full p-7 ${gelica.className}`}>
                 <IconContext.Provider value={{ color: '#4a4a4a', className: 'border-0 size-[70px] transition duration-100 ease-in hover:scale-[110%]' }}>
                <div className='border-0 inline-flex-center'>
                    <p className=''>Github </p>
                    <FaGithub onClick={()=>openInNewTab('https://github.com/anthonyandres')}/>    
                </div>
                <div className='border-0 inline-flex-center'>
                    <p className=''>LinkedIn </p>
                    <FaLinkedin onClick={()=>openInNewTab('https://www.linkedin.com/in/anthony-andres-5599121b6/')}/>     
                </div> 
                <div className='border-0 inline-flex-center'>
                    <p className=''>Youtube </p>
                    <FaYoutube onClick={()=>openInNewTab('https://www.youtube.com/@anthong_/featured')}/>     
                </div> 
                <div className='border-0 inline-flex-center'>
                    <p className=''>Instagram </p>
                    <FaSquareInstagram onClick={()=>openInNewTab('https://www.instagram.com/anthong.png/')}/>     
                </div> 
                <div className='border-0 inline-flex-center'>
                    <p className=''>Art! </p>
                    <FaPalette onClick={()=>openInNewTab('')}/>     
                </div>
                <div className='border-0 inline-flex-center'>
                    <p className=''>Music! </p>
                    <MdLibraryMusic onClick={()=>openInNewTab('https://open.spotify.com/user/anthobhu?si=df297d63376c45f3')}/>     
                </div>
                </IconContext.Provider>            
            </div>
            
        </div>
    </div>
  )
}

export default LinksWindow