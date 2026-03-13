import React from 'react'
import './windows.css'
import { FaBook, FaCameraRetro, FaCode, FaEnvelopeOpenText, FaLink } from "react-icons/fa6"
import { IconContext } from "react-icons"
import ScaleIconSilent from '../ScaleIconSilent'

interface Props{
  showAbout: ()=> void
  showLinks: ()=> void
  showWork: ()=> void
  showBlog: ()=> void
  showContact: ()=> void
}

function LandingMobile({showAbout = () => {}, showLinks = () => {}, showWork = () => {}, showBlog = () => {}, showContact = () => {}}: Props) {

                                                            //vvv the width here dictates the width of the parent (ComponentCard)
  return (
    <div className=' prevent-select h-[100%] w-[50vw] min-w-165 max-w-[960px] border-0 rounded-[0px]'>
      <div className='flex flex-col gap-y-0'>
          
        <div className='flex border-0 overflow-hidden content flex-col gap-y-0 min-h-111 p-20'>
          <div className=' border-0 justify-center items-center w-[100%] flex flex-col'>
            <div className={`border-0 justify-center flex min-w-[150px] w-[100%] gelicaBold`}>
              <h2 style={{WebkitTextStroke: 0, WebkitTextStrokeColor: ''}} className=' text-[10vw] text-center secondary-window-colors'>hey, i&#39;m <span className='secondary-window-colors'>anthony</span></h2>
            </div>
            
            <div className='mobile-text-colors border-0 w-[100vw] min-w-[150px] justify-center flex -translate-y-0'>
              <p className='text-[3.5vw] text-center gelicaItalic'>engineering graduate, developer, and creative</p>
            </div>
          </div>


          <div className=' border-0 pt-10 w-[80vw] grid grid-cols-3 gap-x-[5vw]'>
            <IconContext.Provider value={{ className: 'border-0 size-[11.5vw]' }}>
                <ScaleIconSilent>
                <div className='window-colors pt-2 border-0 flex flex-col items-center rounded-[15px]' onClick={showAbout}>
                  <FaCameraRetro/>
                  <p className='text-[3.6vw]'>about</p>
                </div>
                </ScaleIconSilent>   
              
              <ScaleIconSilent>
              <div className='window-colors pt-2 border-0 flex flex-col-reverse items-center rounded-[15px]' onClick={showLinks}>
                <p className='text-[3.6vw]'>links</p>
                <FaLink/>  
              </div>
              </ScaleIconSilent>

              <ScaleIconSilent>
              <div className='window-colors pt-2 border-0 flex flex-col-reverse items-center rounded-[15px]' onClick={showWork}>
                <p className='text-[3.6vw]'>work</p>
                <FaCode/> 
              </div>
              </ScaleIconSilent>
            </IconContext.Provider>
          </div>

          <div className=' border-0 mt-5 w-[80vw] grid grid-cols-2 gap-x-[5vw] translate-y-[1vw] mobile-grid translate-x-[17%]'>
            <IconContext.Provider value={{ className: 'border-0 size-[11.5vw]' }}>
                <ScaleIconSilent>
                    <div className='window-colors pt-2 border-0 flex flex-col-reverse items-center rounded-[15px]' onClick={showBlog}>
                        <p className='text-[3.6vw]'>blog</p>
                        <FaBook/>
                    </div>
                </ScaleIconSilent>

                <ScaleIconSilent>
                    <div className='window-colors pt-2 border-0 flex flex-col-reverse items-center rounded-[15px]' onClick={showContact}>
                        <p className='text-[3.6vw]'>contact</p>
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

export default LandingMobile
