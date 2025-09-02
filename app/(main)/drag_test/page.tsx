'use client'
import React, { useRef, useState } from 'react'
import Card from '../_Components/Card'
import LandingWindow from '../_Components/LandingWindow/LandingWindow'
import ComponentCard from '../_Components/ComponentCard'
import "../../globals.css"
import { motion, AnimatePresence, easeIn } from 'framer-motion'
import AboutWindow from '../_Components/Windows/AboutWindow/AboutWindow'
import LinksWindow from '../_Components/Windows/LinksWindow/LinksWindow'
import WorkWindow from '../_Components/Windows/WorkWindow/WorkWindow'
import BlogWindow from '../_Components/Windows/BlogWindow/BlogWindow'
import ContactWindow from '../_Components/Windows/ContactWindow/ContactWindow'
import Footer from '../_Components/Footer'
import { Howl, Howler } from 'howler'
import localFont from 'next/font/local'

const gelica = localFont({
  src: '../../../public/Fonts/Gelica/Gelica-Regular.otf',
})

const windowAnimation = { //object defining windowAnimation
  key: 'window',
  initial:{y:'50%', opacity: 0, scale: 0.5},
  exit:{y:'50%', opacity: 0, scale: 0.5, transition: {duration: 0.5, ease: 'easeOut'}},
  animate:{y: 0, opacity: 1, scale: 1},
  transition:{duration: 0.1, ease: 'easeOut'},
} 

function page() {
  const containerRef = useRef<null>(null)
  const cmbRef = useRef<null>(null)
  const ref3 = useRef(null)
  const parentRef = useRef(null)
  const childRef = useRef(null)
  const [showAbout, setShowAbout] = useState(false)
  const [showBlog, setShowBlog] = useState(false)
  const [showContact, setShowContact] = useState(false)
  const [showLinks, setShowLinks] = useState(false)
  const [showWork, setShowWork] = useState(false)
  const [zIndex, setZIndex] = useState(1)

  //Howler.mute(false) //all global methods are called using `Howler`
  const zoomIn = new Howl({
    src: ['./sounds/zoomIn.wav'],
    volume: 0.3
  })
  const zoomOut = new Howl({
    src: ['./sounds/zoomOut.wav'],
    volume: 0.5
  })
  //const {Howl, Howler} = require('howler')

  function onShowAboutClick(){if(!showAbout){setShowAbout(true); zoomIn.play()}else{setShowAbout(false); zoomOut.play()}} // function to handle logic if window(s) are shown or not. Yes its one line, i know
  function onShowBlogClick(){if(!showBlog){setShowBlog(true); zoomIn.play()}else{setShowBlog(false); zoomOut.play()}}
  function onShowContactClick(){if(!showContact){setShowContact(true); zoomIn.play()}else{setShowContact(false); zoomOut.play()}}
  function onShowLinksClick(){if(!showLinks){setShowLinks(true); zoomIn.play()}else{setShowLinks(false); zoomOut.play()}}
  function onShowWorkClick(){if(!showWork){setShowWork(true); zoomIn.play()}else{setShowWork(false); zoomOut.play()}}

  function updateZIndex(){
        const els = document.querySelectorAll('.drag-handle')
        let maxZindex = 1

        els.forEach((el) => {
          
            let zIndex = parseInt(window.getComputedStyle(el).getPropertyValue("z-index"))
            if(!isNaN(zIndex) && (zIndex > maxZindex)){
            maxZindex = zIndex
            }
        })

        setZIndex(maxZindex + 1)
        console.log(zIndex)
    }



    // <div className='hidden md:inline'> means that when the window is larger than 768 pixels
    return(
      <main ref={ref3} className='h-dvh overflow-hidden'>
        <div className='absolute -z-100 text-[#]'>
          <p>
            
          </p>
        </div>
        <div className='hidden md:inline overflow-hidden'>

          <div ref={containerRef} className='drag-handle imageCardContainer' style={{zIndex: 1}}>
            <div style={{ translate: '0px -250px', zIndex}} className='drag-handle' onMouseDown={updateZIndex}>
              <Card boundingRef={containerRef} imgSrc='./anthony2.jpg' />
            </div>
          </div>


          <div ref={containerRef} className='drag-handle imageCardContainer' style={{zIndex: 1}}>
            <div style={{ translate: '0px -250px', zIndex}} className='drag-handle' onMouseDown={updateZIndex}>
              <Card boundingRef={containerRef} imgSrc='./anthony3.jpg' />
            </div>
          </div>
          
          
          <div ref={containerRef} className='drag-handle imageCardContainer' style={{zIndex: 1}}>
            <div style={{ translate: '0px -250px', zIndex}}className='drag-handle' onMouseDown={updateZIndex}>
              <Card boundingRef={containerRef} imgSrc='./anthony4.jpg' />
            </div>
          </div>
          
          
          <div ref={containerRef} className='drag-handle imageCardContainer' style={{zIndex: 1}}>
            <div style={{ translate: '0px -250px', zIndex}} className='drag-handle' onMouseDown={updateZIndex}>
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
                    <motion.div className='border-0' style={{ translate: '-450px -220px'}} key={'aboutWindow'} initial={{y:'50%', opacity: 0, scale: 0.5}} exit={{y:'50%', opacity: 0, scale: 0.5, transition: {duration: 0.1, ease: 'easeOut'}}} animate={{y: 0, opacity: 1, scale: 1}} transition={{duration: 0.2, ease: 'easeOut'}}>
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
                    <motion.div className='border-0' style={{ translate: '650px 180px'}} key={'contactWindow'} initial={{y:'50%', opacity: 0, scale: 0.5}} exit={{y:'50%', opacity: 0, scale: 0.5, transition: {duration: 0.1, ease: 'easeOut'}}} animate={{y: 0, opacity: 1, scale: 1}} transition={{duration: 0.2, ease: 'easeOut'}}>
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


        <div className='inline md:hidden'>
          TODO: add sliding windows and mini layout like shar, she da goat
        </div>
      </main>
  )
}

export default page

//YOU CAN USE md:w-56 to set the width to 768px on medium screens. use `md:`