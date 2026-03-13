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
import { FaPaintbrush } from 'react-icons/fa6'
import { IconContext } from 'react-icons'
import LandingMobile from './Windows/LandingMobile'
import AboutMobile from './Windows/AboutMobile'
import ComponentCardMobile from './ComponentCardMobile'
import LinksMobile from './Windows/LinksMobile'
import WorkMobile from './Windows/WorkMobile'
import BlogMobile from './Windows/BlogMobile'
import ContactMobile from './Windows/ContactMobile'

function MobileContainer() {
    const [showAbout, setShowAbout] = useState(false)
    const [showBlog, setShowBlog] = useState(false)
    const [showContact, setShowContact] = useState(false)
    const [showLinks, setShowLinks] = useState(false)
    const [showWork, setShowWork] = useState(false)
    const boundingRef = useRef(null)
    const hiddenWindowBoundingRef = useRef(null)

    const [showDrawings, setShowDrawings] = useState(false)

    const zoomIn = new Howl({
        src: ['./sounds/zoomIn.wav'],
        volume: 0.9
    })
    const zoomOut = new Howl({
        src: ['./sounds/zoomOut.wav'],
        volume: 1.5
    })
    const sound1 = new Howl({
        src: ['./sounds/draw1.wav'],
        volume: 2
    })
    const sound2 = new Howl({
        src: ['./sounds/draw2.wav'],
        volume: 2
    })
    const sound3 = new Howl({
        src: ['./sounds/draw3.wav'],
        volume: 2
    })
    const sound4 = new Howl({
        src: ['./sounds/draw4.wav'],
        volume: 2
    })

    function randomDraw(){
        const choice = Math.floor(Math.random() * 4)
        console.log(choice)
        switch(choice){
            case 0:
                sound1.rate(0.8) 
                sound1.play()
                break
            case 1:
                sound2.rate(1)  
                sound2.play()
                break
            case 2:
                sound3.rate(0.7)  
                sound3.play()
                break
            case 3:
                sound4.rate(0.9)  
                sound4.play()
                break
            default: console.log('no sound?')
        }
    }

function onShowAboutClick(){if(!showAbout){setShowAbout(true); zoomIn.play()}else{setShowAbout(false); zoomOut.play()}} // function to handle logic if window(s) are shown or not. Yes its one line, i know
function onShowBlogClick(){if(!showBlog){setShowBlog(true); zoomIn.play()}else{setShowBlog(false); zoomOut.play()}}
function onShowContactClick(){if(!showContact){setShowContact(true); zoomIn.play()}else{setShowContact(false); zoomOut.play()}}
function onShowLinksClick(){if(!showLinks){setShowLinks(true); zoomIn.play()}else{setShowLinks(false); zoomOut.play()}}
function onShowWorkClick(){if(!showWork){setShowWork(true); zoomIn.play()}else{setShowWork(false); zoomOut.play()}}


  return (
    <div className='prevent-select'>

    <div ref={boundingRef} className='-z-10 overflow-hidden flex justify-center items-center h-[100vh]'>

        <div className='z-1 translate-y-[0px]'>

                <LandingMobile showAbout={onShowAboutClick} showBlog={onShowBlogClick} showContact={onShowContactClick} showLinks={onShowLinksClick} showWork={onShowWorkClick}/>
        </div>

        <div ref={hiddenWindowBoundingRef} className='border-0 absolute overflow-hidden pointer-events-none flex justify-center items-center h-[100vh] w-[100vw]'>
            <div className='absolute z-2'>
                <AnimatePresence>
                  {showAbout &&
                    <motion.div className='absolute bottom-[-50vh] left-[-50vw] translate-x-[5%] z-3 border-0' key={'aboutWindow'} initial={{y:'100%', opacity: 100, scale: 1}} exit={{y:'100%', opacity: 100, scale: 1, transition: {duration: 0.2, ease: 'easeIn'}}} animate={{y: 0, opacity: 1, scale: 1}} transition={{duration: 0.3, ease: 'easeOut', type: 'spring'}}>
                      <ComponentCardMobile height={90} boundingRef={hiddenWindowBoundingRef}>
                        <AboutMobile height={90} showAbout={onShowAboutClick}></AboutMobile>
                      </ComponentCardMobile>
                    </motion.div>   
                  }
                </AnimatePresence>
              </div>


              <div className='absolute z-2'>
                <AnimatePresence>
                  {showLinks &&
                    <motion.div className='absolute bottom-[-50vh] left-[-50vw] translate-x-[5%] z-3 border-0' key={'aboutWindow'} initial={{y:'100%', opacity: 100, scale: 1}} exit={{y:'100%', opacity: 100, scale: 1, transition: {duration: 0.2, ease: 'easeIn'}}} animate={{y: 0, opacity: 1, scale: 1}} transition={{duration: 0.3, ease: 'easeOut', type: 'spring'}}>
                      <ComponentCardMobile height={60} boundingRef={hiddenWindowBoundingRef}>
                        <LinksMobile height={60} showLinks={onShowLinksClick}></LinksMobile>
                        {showDrawings && <img className='pointer-events-none absolute -bottom-55 left-5 w-[400px]' src={'./assets/gif/grunge.gif'} alt='loading...' draggable={false} />}
                      </ComponentCardMobile>
                    </motion.div>   
                  }  
                </AnimatePresence> 
              </div>


              <div className='absolute z-2'>
                <AnimatePresence>
                  {showWork &&
                    <motion.div className='absolute bottom-[-50vh] left-[-50vw] translate-x-[5%] z-3 border-0' key={'aboutWindow'} initial={{y:'100%', opacity: 100, scale: 1}} exit={{y:'100%', opacity: 100, scale: 1, transition: {duration: 0.2, ease: 'easeIn'}}} animate={{y: 0, opacity: 1, scale: 1}} transition={{duration: 0.3, ease: 'easeOut', type: 'spring'}}>
                      <ComponentCardMobile height={70} boundingRef={hiddenWindowBoundingRef}>
                        <WorkMobile height={70} showWork={onShowWorkClick}></WorkMobile>
                      </ComponentCardMobile>
                    </motion.div>   
                  }  
                </AnimatePresence> 
              </div>


              <div className='absolute z-2'>
                <AnimatePresence>
                  {showBlog &&
                    <motion.div className='absolute bottom-[10vh] right-[-50vw] translate-x-[0%] z-3 border-0' key={'aboutWindow'} initial={{x:'100%', opacity: 100, scale: 1}} exit={{x:'100%', opacity: 100, scale: 1, transition: {duration: 0.2, ease: 'easeIn'}}} animate={{x: 0, opacity: 1, scale: 1}} transition={{duration: 2, ease: 'easeOut', type: 'spring'}}>
                      <ComponentCardMobile height={30} boundingRef={hiddenWindowBoundingRef}>
                        <BlogMobile height={30} showBlog={onShowBlogClick}></BlogMobile>
                      </ComponentCardMobile>
                    </motion.div>   
                  }  
                </AnimatePresence> 
              </div>


              <div className='absolute z-2'>
                <AnimatePresence>
                  {showContact &&
                    <motion.div className='absolute bottom-[-50vh] left-[-50vw] z-3 border-0 translate-x-[5%]' key={'aboutWindow'} initial={{y:'100%', opacity: 100, scale: 1}} exit={{y:'100%', opacity: 100, scale: 1, transition: {duration: 0.2, ease: 'easeIn'}}} animate={{y: 0, opacity: 1, scale: 1}} transition={{duration: 0.3, ease: 'easeOut', type: 'spring'}}>
                        <ComponentCardMobile height={60} boundingRef={hiddenWindowBoundingRef}>
                            <ContactMobile height={60} showContact={onShowContactClick}></ContactMobile>
                        </ComponentCardMobile>
                    </motion.div>   
                  }  
                </AnimatePresence> 
              </div>
        </div>
    </div>
    </div>
  )
}

export default MobileContainer