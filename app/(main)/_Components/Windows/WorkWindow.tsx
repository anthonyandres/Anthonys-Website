import React from 'react'
import './windows.css'
import { IconContext } from 'react-icons'
import {FaMinimize } from 'react-icons/fa6'
import localFont from 'next/font/local'
import HoverSoundBox from '../../../../public/sounds/HoverSoundBox'

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

            <div>
              <h2 className={`text-[200%] secondary-window-colors ${gelicaBold.className}`}>Projects</h2>
            </div>
          </div>          
        </div>
            
        </div>
    </div>
  )
}

export default WorkWindow