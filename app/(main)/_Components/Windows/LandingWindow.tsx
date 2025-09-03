import React from 'react'
import './windows.css'
import { FaBook, FaCameraRetro, FaCode, FaEnvelopeOpenText, FaLink } from "react-icons/fa6"
import { IconContext } from "react-icons"

// const gelica = localFont({
//   src: '../../../../public/Fonts/Gelica/Gelica-Regular.otf',
// })

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
    <div className='window-colors prevent-select h-[100%] w-[50vw] min-w-150 max-w-[960px] border-0 rounded-[0px]'>
      <div className='flex flex-col gap-y-0'>

        <div className='tertiary-window-colors flex landing-header p-20'>
            <p className='pl-6 text-2xl'>home</p>
        </div>
          
        <div className='flex border-0 overflow-hidden content flex-col gap-y-10 min-h-111 p-20 '>
          <div className='window-colors border-0 justify-center items-center w-[100%] flex flex-col'>
            <div className='border-0 justify-center flex min-w-[150px] w-[100%]' data-theme=''>
              <h2 className='text-[500%] text-center'>hey, i&apos;m <span className='secondary-window-colors'>anthony</span></h2>
            </div>
            
            <div className=' border-0 w-[100%] min-w-[150px] justify-center flex -translate-y-0'>
              <p className=' text-[150%] text-center'>engineering graduate, developer, and creative</p>
            </div>
          </div>

          

          <div className='window-colors border-0 w-[80%] min-w-[400px] grid grid-cols-5'>
            <IconContext.Provider value={{ className: 'border-0 size-[60%] transition duration-100 ease-in hover:scale-[110%]' }}>
              <div className='border-0 inline-flex-center'>
                <p className='text-2xl'>about </p>
                <FaCameraRetro onClick={showAbout}/>   
              </div>
              <div className='border-0 inline-flex-center'>
                <p className='text-2xl'>links </p>
                <FaLink onClick={showLinks}/>  
              </div>
              <div className='border-0 inline-flex-center'>
                <p className='text-2xl'>work </p>
                <FaCode onClick={showWork}/> 
              </div>
              <div className='border-0 inline-flex-center'>
                <p className='text-2xl'>blog </p>
                <FaBook onClick={showBlog}/>
              </div>
              <div className='border-0 inline-flex-center'>
                <p className='text-2xl'>contact </p>
                <FaEnvelopeOpenText onClick={showContact}/>
              </div>
              
              {/* <div className='flex flex-row gap-x-16 justify-center'>
                <FaCameraRetro onClick={showAbout}/>
                <FaLink onClick={showLinks}/>
                <FaCode onClick={showWork}/>
                <FaBook onClick={showBlog}/>
                <FaEnvelopeOpenText onClick={showContact}/>
              </div>
              <div className='flex flex-row gap-x-16 justify-center'>
                <p className='size-[7%] text-2xl text-center'>about</p>
                <p className='size-[7%] text-2xl text-center'>links</p>
                <p className='size-[7%] text-2xl text-center'>work</p>
                <p className='size-[7%] text-2xl text-center'>blog</p>
                <p className='size-[7%] text-2xl text-center'>contact</p>
              </div> */}
            </IconContext.Provider>
          </div>  

            {/* <div className='border-0 w-[100%] min-w-[600px]'>
              <IconContext.Provider value={{ color: '', className: 'border-0 size-[57px] transition duration-100 ease-in hover:scale-[110%]' }}>
              <div className='flex flex-row gap-x-16 justify-center'>
                <Link href={''}><FaCameraRetro /></Link>
                <Link href={''}><FaLink /></Link>
                <Link href={''}><FaCode /></Link>
                <Link href={''}><FaBook /></Link>
                <Link href={''}><FaEnvelopeOpenText /></Link>
              </div>
              <div className='flex flex-row gap-x-16 justify-center'>
                <p className='size-[57px] text-2xl text-center'>about</p>
                <p className='size-[57px] text-2xl text-center'>links</p>
                <p className='size-[57px] text-2xl text-center'>work</p>
                <p className='size-[57px] text-2xl text-center'>blog</p>
                <p className='size-[57px] text-2xl text-center'>contact</p>
              </div>
              </IconContext.Provider>
          </div> */}

        </div>

      </div>
    </div>
  )
}

export default LandingWindow
