import React, { useState } from 'react'
import './windows.css'
import { IconContext } from 'react-icons'
import {FaMinimize, FaRegFaceGrinTongue, FaRegFaceLaughWink, FaRegFaceMeh,  } from 'react-icons/fa6'
import localFont from 'next/font/local'
import HoverSoundBox from '../../../../public/sounds/HoverSoundBox'
import ScaleIconSilent from '../ScaleIconSilent'

const gelica = localFont({
    src: '../../../../public/Fonts/Gelica/Gelica-Regular.otf',
})

const gelicaBold = localFont({
    src: '../../../../public/Fonts/Gelica/Gelica-Bold.otf',
})

const gelicaLight = localFont({
    src: '../../../../public/Fonts/Gelica/Gelica-Light.otf',
})

interface Props{
  showWork: ()=> void
}


function WorkWindow({showWork = () => {}}: Props) {
  const [isProject, setIsPoject] = useState(false)
  const [isProjectClicked, setIsPojectClicked] = useState(false)

  const openInNewTab = (url:string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  const excited = new Howl({
    src: ['./sounds/excited.wav'],
    volume: 1.5
  })

  function onProjectEnter(){if(!isProject){setIsPoject(true); }}
  function onProjectLeave(){if(isProject){setIsPoject(false); }}
  function projectClick(){openInNewTab('https://anthonyandres.github.io/'); excited.play();}

  return (
    <div className={`window-colors prevent-select h-[392px] w-[40vw] min-w-150 max-w-[960px] border-0 rounded-[0px] ${gelica.className}`}>
      <IconContext.Provider value={{ className: 'tertiary-window-colors justify-right border-0 size-[20px] transition duration-100 ease-in hover:scale-[110%]' }}>
      <div className='z-10 absolute gap-x-16 justify-center top-3 right-3'>
          <FaMinimize onClick={showWork}/>
      </div>
      </IconContext.Provider>


      <div className='h-full flex flex-col gap-y-0 window'>
        <div className='tertiary-window-colors flex flex-row landing-header text-amber-100 p-20'>
          <p className='pl-6 text-2xl text-center'>work</p>
        </div>
            
        
        <div className='window-colors border-0 p-4 h-full overflow-y-auto scrollbar-colors'>
          <div className='window-colors border-3 border-dashed rounded-2xl p-4'>
            <p>Here are a few things I&apos;m familiar with, as well as a few things I&apos;ve worked on...</p>
            <div className='grid grid-cols-2 grid-rows-1 border-0'>
              <div className='flex justify-left flex-col'>
                <h2 className={`text-[200%] secondary-window-colors ${gelicaBold.className}`}>Tools</h2>
                <div className='border-0 flex flex-wrap justify-center'>
                  <HoverSoundBox>GitHub</HoverSoundBox>
                  <HoverSoundBox>Kubernetes</HoverSoundBox>
                  <HoverSoundBox>Microsoft Azure</HoverSoundBox>
                  <HoverSoundBox>gRPC</HoverSoundBox>
                  <HoverSoundBox>RabbitMQ</HoverSoundBox>
                  <HoverSoundBox>Trello</HoverSoundBox>
                  <HoverSoundBox>Figma</HoverSoundBox>
                  <HoverSoundBox>JUnit</HoverSoundBox>
                  <HoverSoundBox>PITest</HoverSoundBox>
                  <HoverSoundBox>Blender</HoverSoundBox>
                  <HoverSoundBox>Krita</HoverSoundBox>
                  <HoverSoundBox>Davinci Resolve</HoverSoundBox>
                  <HoverSoundBox>GIMP</HoverSoundBox>
                  <HoverSoundBox>DarkTable</HoverSoundBox>
                </div>
              </div>
                
              <div className='flex justify-left flex-col'>
                <h2 className={`text-[200%] secondary-window-colors ${gelicaBold.className}`}>Development</h2>
                <div className='border-0 flex flex-wrap justify-center'>
                  <HoverSoundBox>C</HoverSoundBox>
                  <HoverSoundBox>Java</HoverSoundBox>
                  <HoverSoundBox>Python</HoverSoundBox>
                  <HoverSoundBox>SQL</HoverSoundBox>
                  <HoverSoundBox>VHDL</HoverSoundBox>
                  <HoverSoundBox>MatLab</HoverSoundBox>
                  <HoverSoundBox>HTML</HoverSoundBox>
                  <HoverSoundBox>CSS/CSSTailwind</HoverSoundBox>
                  <HoverSoundBox>JavaScript/TypeScript</HoverSoundBox>
                  <HoverSoundBox>IntelliJ</HoverSoundBox>
                  <HoverSoundBox>Pycharm</HoverSoundBox>
                  <HoverSoundBox>Eclipse</HoverSoundBox>
                  <HoverSoundBox>Visual Studio Code</HoverSoundBox>
                </div>
              </div>  
            </div>
            <hr className='mt-5 mb-2 window-colors border-2 rounded-2xl'/>
            <div>
              <h2 className={`text-[200%] secondary-window-colors ${gelicaBold.className}`}>Projects</h2>
              <p>most of my relevant technical projects done in school can be found on my GitHub, and projects I did outside of school can be found on my other page:</p>
              <p className='mt-5 text-[13px] text-center'>(its not that flashy, but I was lazy and still am lazy)</p>
              <div className='border-0 flex flex-col items-center' onClick={()=>projectClick()}>
                <ScaleIconSilent>
                    <IconContext.Provider value={{ className: 'border-0 size-30 mb-3 mt-3' }}>
                    {!isProject && <FaRegFaceMeh onMouseEnter={onProjectEnter} onMouseLeave={onProjectLeave} />}
                    {isProject && <FaRegFaceGrinTongue onMouseEnter={onProjectEnter} onMouseLeave={onProjectLeave} />}
                    </IconContext.Provider>
                </ScaleIconSilent>
                <p>check out some of my more fun projects!</p>
              </div>
            </div>
          </div>          
        </div>
            
        </div>
    </div>
  )
}

export default WorkWindow