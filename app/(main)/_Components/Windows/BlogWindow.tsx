import React from 'react'
import './windows.css'
import { IconContext } from 'react-icons'
import {FaMinimize } from 'react-icons/fa6'
import Link from 'next/link'
import ScaleIconSilent from '../ScaleIconSilent'
import { SlSpeech } from "react-icons/sl";
interface Props{
  showBlog: ()=> void
}


function LinksWindow({showBlog = () => {}}: Props) {

  const excited = new Howl({
    src: ['./sounds/UI_Decide.wav'],
    volume: 0.75
  })

  function onBlogClick(){
    excited.play();
  }

  return (
    <div className='window-colors prevent-select h-[100%] w-[20vw] min-w-[300px] max-w-[300px] border-0 rounded-[0px]'>
        <IconContext.Provider value={{ className: 'tertiary-window-colors justify-right border-0 size-[20px] transition duration-100 ease-in hover:scale-[110%]' }}>
                <div className='z-10 absolute gap-x-16 justify-center top-3 right-3'>
                    <FaMinimize onClick={showBlog}/>
                </div>
                </IconContext.Provider>
        <div className='flex flex-col gap-y-0 window border-0 h-full'>
            <div className='tertiary-window-colors flex flex-row landing-header text-amber-100 p-20'>
                <p className='pl-6 text-2xl text-center'>blog</p>
            </div>
            <div className={`window-colors overflow-hidden border-0 h-full gelica`}>
                <div className='border-0 flex justify-center items-center h-full'>
                    <ScaleIconSilent>
                    
                      <Link href="/blog" onClick={onBlogClick}>
                      <IconContext.Provider value={{className: 'size-[120px]'}}> 
                        <SlSpeech />
                        </IconContext.Provider>
                      </Link>
                    
                    </ScaleIconSilent>     
                </div>           
            </div>
            
        </div>
    </div>
  )
}

export default LinksWindow