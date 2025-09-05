'use client'
import React, { useRef, useState } from 'react'
import LandingWindow from './Windows/LandingWindow'
import ComponentCard from './ComponentCard'
import { AnimatePresence, motion } from 'framer-motion'
import AboutWindow from './Windows/AboutWindow'
import LinksWindow from './Windows/LinksWindow'
import ContactWindow from './Windows/ContactWindow'
import BlogWindow from './Windows/BlogWindow'
import WorkWindow from './Windows/WorkWindow'

function LandingWindowContainer() {
    const [showAbout, setShowAbout] = useState(false)
    const [showBlog, setShowBlog] = useState(false)
    const [showContact, setShowContact] = useState(false)
    const [showLinks, setShowLinks] = useState(false)
    const [showWork, setShowWork] = useState(false)
    const boundingRef = useRef(null)
    const hiddenWindowBoundingRef = useRef(null)

    const zoomIn = new Howl({
        src: ['./sounds/zoomIn.wav'],
        volume: 0.9
    })
    const zoomOut = new Howl({
        src: ['./sounds/zoomOut.wav'],
        volume: 1.5
    })

function onShowAboutClick(){if(!showAbout){setShowAbout(true); zoomIn.play()}else{setShowAbout(false); zoomOut.play()}} // function to handle logic if window(s) are shown or not. Yes its one line, i know
function onShowBlogClick(){if(!showBlog){setShowBlog(true); zoomIn.play()}else{setShowBlog(false); zoomOut.play()}}
function onShowContactClick(){if(!showContact){setShowContact(true); zoomIn.play()}else{setShowContact(false); zoomOut.play()}}
function onShowLinksClick(){if(!showLinks){setShowLinks(true); zoomIn.play()}else{setShowLinks(false); zoomOut.play()}}
function onShowWorkClick(){if(!showWork){setShowWork(true); zoomIn.play()}else{setShowWork(false); zoomOut.play()}}

  return (
    <div ref={boundingRef} className='-z-10 overflow-hidden flex justify-center items-center h-[100vh]'>
        <div className='z-0 translate-y-[90px]'>
            <ComponentCard height={596} boundingRef={boundingRef}>
                <LandingWindow showAbout={onShowAboutClick} showBlog={onShowBlogClick} showContact={onShowContactClick} showLinks={onShowLinksClick} showWork={onShowWorkClick}/>
            </ComponentCard>
        </div>

        <div ref={hiddenWindowBoundingRef} className='absolute overflow-hidden pointer-events-none flex justify-center items-center h-[100vh] w-[100vw]'>
            <div className='absolute z-2'>
                <AnimatePresence>
                  {showAbout &&
                    <motion.div className='border-0 translate-y-[-18vh] translate-x-[-23vw]' key={'aboutWindow'} initial={{y:'50%', opacity: 0, scale: 0.5}} exit={{y:'50%', opacity: 0, scale: 0.5, transition: {duration: 0.1, ease: 'easeOut'}}} animate={{y: 0, opacity: 1, scale: 1}} transition={{duration: 0.2, ease: 'easeOut'}}>
                      <ComponentCard height={497} boundingRef={hiddenWindowBoundingRef}>
                        <AboutWindow showAbout={onShowAboutClick}></AboutWindow>
                      </ComponentCard>
                    </motion.div>   
                  }
                </AnimatePresence>
              </div>


              <div className='absolute z-2'>
                <AnimatePresence>
                  {showLinks &&
                    <motion.div className='border-0 translate-y-[-9vh] translate-x-[-8vw]' key={'linksWindow'} initial={{y:'50%', opacity: 0, scale: 0.5}} exit={{y:'50%', opacity: 0, scale: 0.5, transition: {duration: 0.1, ease: 'easeOut'}}} animate={{y: 0, opacity: 1, scale: 1}} transition={{duration: 0.2, ease: 'easeOut'}}>
                      <ComponentCard height={398} boundingRef={hiddenWindowBoundingRef}>
                        <LinksWindow showLinks={onShowLinksClick}></LinksWindow>
                      </ComponentCard>
                    </motion.div>   
                  }  
                </AnimatePresence> 
              </div>


              <div className='absolute z-2'>
                <AnimatePresence>
                  {showWork &&
                    <motion.div className='border-0 translate-y-[-19vh] translate-x-[26vw]' key={'workWindow'} initial={{y:'50%', opacity: 0, scale: 0.5}} exit={{y:'50%', opacity: 0, scale: 0.5, transition: {duration: 0.1, ease: 'easeOut'}}} animate={{y: 0, opacity: 1, scale: 1}} transition={{duration: 0.2, ease: 'easeOut'}}>
                      <ComponentCard height={398} boundingRef={hiddenWindowBoundingRef}>
                        <WorkWindow showWork={onShowWorkClick}></WorkWindow>
                      </ComponentCard>
                    </motion.div>   
                  }  
                </AnimatePresence> 
              </div>


              <div className='absolute z-2'>
                <AnimatePresence>
                  {showBlog &&
                    <motion.div className='border-0 translate-y-[27vh] translate-x-[-29vw]' key={'blogWindow'} initial={{y:'50%', opacity: 0, scale: 0.5}} exit={{y:'50%', opacity: 0, scale: 0.5, transition: {duration: 0.1, ease: 'easeOut'}}} animate={{y: 0, opacity: 1, scale: 1}} transition={{duration: 0.2, ease: 'easeOut'}}>
                      <ComponentCard height={298} boundingRef={hiddenWindowBoundingRef}>
                        <BlogWindow showBlog={onShowBlogClick}></BlogWindow>
                      </ComponentCard>
                    </motion.div>   
                  }  
                </AnimatePresence> 
              </div>


              <div className='absolute z-2'>
                <AnimatePresence>
                  {showContact &&
                    <motion.div className='border-0 translate-y-[17vh] translate-x-[32vw]' key={'contactWindow'} initial={{y:'50%', opacity: 0, scale: 0.5}} exit={{y:'50%', opacity: 0, scale: 0.5, transition: {duration: 0.1, ease: 'easeOut'}}} animate={{y: 0, opacity: 1, scale: 1}} transition={{duration: 0.2, ease: 'easeOut'}}>
                      <ComponentCard height={596} boundingRef={hiddenWindowBoundingRef}>
                        <ContactWindow showContact={onShowContactClick}></ContactWindow>
                      </ComponentCard>
                    </motion.div>   
                  }  
                </AnimatePresence> 
              </div>
        </div>
    </div>
  )
}

export default LandingWindowContainer