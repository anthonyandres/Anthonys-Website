import React from 'react'
import './windows.css'
import { FaBook, FaCameraRetro, FaCode, FaEnvelopeOpenText, FaLink } from "react-icons/fa6"
import { IconContext } from "react-icons"
import localFont from 'next/font/local'
import ScaleIconSilent from '../ScaleIconSilent'

const gelica = localFont({
    src: '../../../../public/Fonts/Gelica/Gelica-Regular.otf',
})

const gelicaBold = localFont({
    src: '../../../../public/Fonts/Gelica/Gelica-Bold.otf',
})

interface Props{
  showAbout: ()=> void
  showLinks: ()=> void
  showWork: ()=> void
  showBlog: ()=> void
  showContact: ()=> void
}

function LandingWindow({showAbout = () => {}, showLinks = () => {}, showWork = () => {}, showBlog = () => {}, showContact = () => {}}: Props) {

                                                            //vvv the width here dictates the width of the parent (ComponentCard)
  return (
    <div className='window-colors prevent-select h-[100%] w-[50vw] min-w-165 max-w-[960px] border-0 rounded-[0px]'>
      <div className='flex flex-col gap-y-0'>

        <div className='tertiary-window-colors flex landing-header p-20'>
            <p className='pl-6 text-2xl'>home</p>
        </div>
          
        <div className='flex border-0 overflow-hidden content flex-col gap-y-10 min-h-111 p-20'>
          <div className='window-colors border-0 justify-center items-center w-[100%] flex flex-col'>
            <div className={`border-0 justify-center flex min-w-[150px] w-[100%] ${gelicaBold.className}`}>
              <h2 className='text-[500%] text-center'>hey, i&#39;m <span className='secondary-window-colors'>anthony</span></h2>
            </div>
            
            <div className=' border-0 w-[100%] min-w-[150px] justify-center flex -translate-y-0'>
              <p className=' text-[150%] text-center'>engineering graduate, developer, and creative</p>
            </div>
          </div>


          <div className='window-colors border-0 w-[80%] min-w-[400px] grid grid-cols-5'>
            <IconContext.Provider value={{ className: 'border-0 size-[60%] flex' }}>
                <ScaleIconSilent>
                <div className='border-0 flex flex-col items-center' onClick={showAbout}>
                  <FaCameraRetro/>
                  <p className='text-2xl'>about</p>
                </div>
                </ScaleIconSilent>   
              
              <ScaleIconSilent>
              <div className='border-0 flex flex-col-reverse items-center' onClick={showLinks}>
                <p className='text-2xl'>links</p>
                <FaLink/>  
              </div>
              </ScaleIconSilent>

              <ScaleIconSilent>
              <div className='border-0 flex flex-col-reverse items-center' onClick={showWork}>
                <p className='text-2xl'>work</p>
                <FaCode/> 
              </div>
              </ScaleIconSilent>

              <ScaleIconSilent>
              <div className='border-0 flex flex-col-reverse items-center' onClick={showBlog}>
                <p className='text-2xl'>blog</p>
                <FaBook/>
              </div>
              </ScaleIconSilent>

              <ScaleIconSilent>
              <div className='border-0 flex flex-col-reverse items-center' onClick={showContact}>
                <p className='text-2xl'>contact</p>
                <FaEnvelopeOpenText/>
              </div>
              </ScaleIconSilent>
            </IconContext.Provider>
          </div>  

        </div>

      </div>
    </div>
  )
}

export default LandingWindow
