'use client'
import React, { useRef, useState } from 'react'
import Card from '../_Components/Card'
import LandingWindow from '../_Components/Windows/LandingWindow'
import ComponentCard from '../_Components/ComponentCard'
import "../../globals.css"
import { motion, AnimatePresence } from 'framer-motion'
import AboutWindow from '../_Components/Windows/AboutWindow'
import LinksWindow from '../_Components/Windows/LinksWindow'
import WorkWindow from '../_Components/Windows/WorkWindow'
import BlogWindow from '../_Components/Windows/BlogWindow'
import ContactWindow from '../_Components/Windows/ContactWindow'
import Footer from '../_Components/Footer'
import { Howl, Howler } from 'howler'
import { FaMoon, FaSun, FaVolumeHigh, FaVolumeXmark } from 'react-icons/fa6'
import { IconContext } from 'react-icons'

function Page() {
  const containerRef = useRef<null>(null)
  const cmbRef = useRef<null>(null)
  const ref3 = useRef(null)
  const [showAbout, setShowAbout] = useState(false)
  const [showBlog, setShowBlog] = useState(false)
  const [showContact, setShowContact] = useState(false)
  const [showLinks, setShowLinks] = useState(false)
  const [showWork, setShowWork] = useState(false)
  const [isMute, setIsMute] = useState(false)
  const [isDark, setIsDark] = useState(false)

  //Howler.mute(false) //all global methods are called using `Howler`
  const zoomIn = new Howl({
    src: ['./sounds/zoomIn.wav'],
    volume: 0.3
  })
  const zoomOut = new Howl({
    src: ['./sounds/zoomOut.wav'],
    volume: 0.5
  })
  const soundOn = new Howl({
    src: ['./sounds/soundOn.wav'],
    volume: 0.5
  })
  const light = new Howl({
    src: ['./sounds/UI_Day.wav'],
    volume: 0.5
  })
  const dark = new Howl({
    src: ['./sounds/UI_Night.wav'],
    volume: 0.5
  })

  function onShowAboutClick(){if(!showAbout){setShowAbout(true); zoomIn.play()}else{setShowAbout(false); zoomOut.play()}} // function to handle logic if window(s) are shown or not. Yes its one line, i know
  function onShowBlogClick(){if(!showBlog){setShowBlog(true); zoomIn.play()}else{setShowBlog(false); zoomOut.play()}}
  function onShowContactClick(){if(!showContact){setShowContact(true); zoomIn.play()}else{setShowContact(false); zoomOut.play()}}
  function onShowLinksClick(){if(!showLinks){setShowLinks(true); zoomIn.play()}else{setShowLinks(false); zoomOut.play()}}
  function onShowWorkClick(){if(!showWork){setShowWork(true); zoomIn.play()}else{setShowWork(false); zoomOut.play()}}

  function onMuteSoundClick(){if(!isMute){setIsMute(true);  Howler.mute(true)}else{setIsMute(false); soundOn.play(); Howler.mute(false)}}
  function onDarkModeClick(){if(!isDark){setIsDark(true);  dark.play()}else{setIsDark(false); light.play();}}

  // function updateZIndex(){
  //   const els = document.querySelectorAll('.drag-handle')
  //   let maxZindex = 1
  //   els.forEach((el) => {
  //       let zIndex = parseInt(window.getComputedStyle(el).getPropertyValue("z-index"))
  //       if(!isNaN(zIndex) && (zIndex > maxZindex)){
  //         maxZindex = zIndex
  //       }
  //   })
  //   setZIndex(maxZindex + 1)
  //   console.log(zIndex)
  // }

    // <div className='hidden md:inline'> means that when the window is larger than 768 pixels
    return(
      <main ref={ref3} className='main-bg-colors h-dvh overflow-hidden' data-theme={isDark ? 'dark' : 'light'}>
        <IconContext.Provider value={{ className: 'tertiary-window-colors border-0 size-10 transition duration-100 ease-in hover:scale-[110%] ml-7 mt-4' }}>
          <div className='absolute ml-14'>
            {!isDark && <FaSun onClick={onDarkModeClick}/>}
          </div>
          <div className='absolute ml-14'>
            {isDark && <FaMoon onClick={onDarkModeClick}/>}
          </div>
          <div className='absolute'>
            {!isMute && <FaVolumeHigh onClick={onMuteSoundClick}/>}
          </div>
          <div className='absolute'>
            {isMute && <FaVolumeXmark onClick={onMuteSoundClick}/>}
          </div>
        </IconContext.Provider>
        <div className='hidden md:inline overflow-hidden'>
          <div ref={containerRef} className='drag-handle imageCardContainer'>
            <div style={{ translate: '0px -250px'}}>
              <Card boundingRef={containerRef} imgSrc='./anthony2.jpg' />
            </div>
          </div>


          <div ref={containerRef} className='drag-handle imageCardContainer'>
            <div style={{ translate: '0px -250px'}}>
              <Card boundingRef={containerRef} imgSrc='./anthony3.jpg' />
            </div>
          </div>
          
          
          <div ref={containerRef} className='drag-handle imageCardContainer'>
            <div style={{ translate: '0px -250px'}}>
              <Card boundingRef={containerRef} imgSrc='./anthony4.jpg' />
            </div>
          </div>
          
          
          <div ref={containerRef} className='drag-handle imageCardContainer'>
            <div style={{ translate: '0px -250px'}}>
              <Card boundingRef={containerRef} imgSrc='./anthony.jpg' />
            </div>
          </div>


          <div ref={cmbRef} className='-z-10 overflow-hidden' style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
            <div style={{ translate: '0px 90px', zIndex: 0}}>
              <ComponentCard height={60} boundingRef={cmbRef}>
                <LandingWindow showAbout={onShowAboutClick} showBlog={onShowBlogClick} showContact={onShowContactClick} showLinks={onShowLinksClick} showWork={onShowWorkClick}/>
              </ComponentCard>
            </div>


            <div ref={ref3} className='absolute overflow-hidden pointer-events-none' style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh', width:'100vw'}}>
              <div className='absolute z-2'>
                <AnimatePresence>
                  {showAbout &&
                    <motion.div className='border-0' style={{ translate: '-450px -180px'}} key={'aboutWindow'} initial={{y:'50%', opacity: 0, scale: 0.5}} exit={{y:'50%', opacity: 0, scale: 0.5, transition: {duration: 0.1, ease: 'easeOut'}}} animate={{y: 0, opacity: 1, scale: 1}} transition={{duration: 0.2, ease: 'easeOut'}}>
                      <ComponentCard height={50} boundingRef={ref3}>
                        <AboutWindow showAbout={onShowAboutClick}></AboutWindow>
                      </ComponentCard>
                    </motion.div>   
                  }
                </AnimatePresence>
              </div>


              <div className='absolute z-2'>
                <AnimatePresence>
                  {showLinks &&
                    <motion.div className='border-0' style={{ translate: '-150px -90px'}} key={'linksWindow'} initial={{y:'50%', opacity: 0, scale: 0.5}} exit={{y:'50%', opacity: 0, scale: 0.5, transition: {duration: 0.1, ease: 'easeOut'}}} animate={{y: 0, opacity: 1, scale: 1}} transition={{duration: 0.2, ease: 'easeOut'}}>
                      <ComponentCard height={40} boundingRef={ref3}>
                        <LinksWindow showLinks={onShowLinksClick}></LinksWindow>
                      </ComponentCard>
                    </motion.div>   
                  }  
                </AnimatePresence> 
              </div>


              <div className='absolute z-2'>
                <AnimatePresence>
                  {showWork &&
                    <motion.div className='border-0' style={{ translate: '500px -190px'}} key={'workWindow'} initial={{y:'50%', opacity: 0, scale: 0.5}} exit={{y:'50%', opacity: 0, scale: 0.5, transition: {duration: 0.1, ease: 'easeOut'}}} animate={{y: 0, opacity: 1, scale: 1}} transition={{duration: 0.2, ease: 'easeOut'}}>
                      <ComponentCard height={40} boundingRef={ref3}>
                        <WorkWindow showWork={onShowWorkClick}></WorkWindow>
                      </ComponentCard>
                    </motion.div>   
                  }  
                </AnimatePresence> 
              </div>


              <div className='absolute z-2'>
                <AnimatePresence>
                  {showBlog &&
                    <motion.div className='border-0' style={{ translate: '-550px 270px'}} key={'blogWindow'} initial={{y:'50%', opacity: 0, scale: 0.5}} exit={{y:'50%', opacity: 0, scale: 0.5, transition: {duration: 0.1, ease: 'easeOut'}}} animate={{y: 0, opacity: 1, scale: 1}} transition={{duration: 0.2, ease: 'easeOut'}}>
                      <ComponentCard height={30} boundingRef={ref3}>
                        <BlogWindow showBlog={onShowBlogClick}></BlogWindow>
                      </ComponentCard>
                    </motion.div>   
                  }  
                </AnimatePresence> 
              </div>


              <div className='absolute z-2'>
                <AnimatePresence>
                  {showContact &&
                    <motion.div className='border-0' style={{ translate: '620px 170px'}} key={'contactWindow'} initial={{y:'50%', opacity: 0, scale: 0.5}} exit={{y:'50%', opacity: 0, scale: 0.5, transition: {duration: 0.1, ease: 'easeOut'}}} animate={{y: 0, opacity: 1, scale: 1}} transition={{duration: 0.2, ease: 'easeOut'}}>
                      <ComponentCard height={60} boundingRef={ref3}>
                        <ContactWindow showContact={onShowContactClick}></ContactWindow>
                      </ComponentCard>
                    </motion.div>   
                  }  
                </AnimatePresence> 
              </div>
            </div>
          </div>
          <footer className='border-0 relative bottom-4 '>
            <Footer></Footer>
          </footer>
        </div>


        <div className='flex justify-center items-center h-full md:hidden'>
          TODO: add mobile layout here. if you are on your phone, enable desktop mode! (if you see this, you owe me 5 Canadian Dollars)
        </div>
      </main>
  )
}

export default Page

//YOU CAN USE md:w-56 to set the width to 768px on medium screens. use `md:`