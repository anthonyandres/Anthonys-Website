import React, { useRef } from 'react'
import './windows.css'
import { IconContext } from 'react-icons'
import {FaMinimize } from 'react-icons/fa6'
import TiltCard from '../TiltCard'
import localFont from 'next/font/local'


const gelica = localFont({
    src: '../../../../public/Fonts/Gelica/Gelica-Regular.otf',
})

const gelicaBold = localFont({
    src: '../../../../public/Fonts/Gelica/Gelica-Bold.otf',
})

interface Props{
  showAbout: ()=> void
}


function AboutWindow({showAbout = () => {}}: Props) {
    const containerRef = useRef<null>(null)

  return (
    <div className='window-colors prevent-select h-full w-[50vw] min-w-150 max-w-[960px] border-0 rounded-[0px]'>
        <IconContext.Provider value={{className: 'tertiary-window-colors justify-right border-0 size-[20px] transition duration-100 ease-in hover:scale-[110%]' }}>
            <div className='z-10 absolute gap-x-16 justify-center top-3 right-3'>
                <FaMinimize onClick={showAbout}/>
            </div>
        </IconContext.Provider>


        <div ref={containerRef} className={`border-0 h-full flex flex-col gap-y-0 ${gelica.className}`}>
            <div className='tertiary-window-colors flex flex-row landing-header text-amber-100 p-20'>
                <p className='pl-6 text-2xl text-center'>about</p>
            </div>


            <div className='text-black overflow-hidden border-0 grid grid-cols-2 h-full'>
                <div className='border-0 h-[446px] inline-flex flex-col p-5 overflow-y-auto scrollbar-colors'>
                     <div className='border-0'>
                        <h2 className='secondary-window-colors text-2xl text-center'>A little bit about me..</h2>
                        <p className='window-colors text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        
                     </div>
                </div>


                <div className='border-0'>
                    <div className='border-0 grid gap-20 grid-rows-2 grid-cols-1 w-full h-full'>
                        <div className='border-0 w-full h-full flex flex-col justify-center scale-90'>
                            <div className='border-0 z-1 translate-y-25 flex justify-center'>
                                <TiltCard imgSrc='./anthony.jpg' />
                            </div>

                            <div className='window-colors border-0 h-min z-0 translate-y-60'>
                                <p className={`secondary-window-colors border-0 flex justify-center items-center text-4xl ${gelicaBold.className} `}>Anthony Andres</p>
                                <p className={`border-0 flex justify-center items-center text-xl ${gelica.className} `}>Toronto, Ontario based developer</p>
                                <p className={`border-0 flex justify-center items-center text-2xs ${gelica.className} `}>BEng. Computer Engineering Toronto Metropolitan University</p>       
                            </div>                             
                        </div>
                    </div>
                </div>            
            </div>
        </div>
    </div>
  )
}

export default AboutWindow