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

function LandingWindowContainer() {
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

function onShowDrawingsClick(){if(!showDrawings){setShowDrawings(true); randomDraw()}else{setShowDrawings(false); randomDraw()}}

  return (
    <div className='prevent-select'>
      <IconContext.Provider value={{ className: 'tertiary-window-colors border-0 size-10 transition duration-100 ease-in hover:scale-[110%] ml-7 mt-4' }}>
        <div className='border-0 absolute ml-28'>
            <FaPaintbrush onClick={onShowDrawingsClick}/>
        </div>
        </IconContext.Provider>
    <div ref={boundingRef} className='-z-10 overflow-hidden flex justify-center items-center h-[100vh]'>

        <div className='z-1 translate-y-[90px]'>
            <ComponentCard height={596} boundingRef={boundingRef}>
                <LandingWindow showAbout={onShowAboutClick} showBlog={onShowBlogClick} showContact={onShowContactClick} showLinks={onShowLinksClick} showWork={onShowWorkClick}/>
                {showDrawings && <img className='pointer-events-none absolute -bottom-70 -right-20 rotate-20 w-[600px]' src={'./assets/gif/couch.gif'} alt='loading...' draggable={false} />}
            </ComponentCard>
        </div>

        <div ref={hiddenWindowBoundingRef} className='absolute overflow-hidden pointer-events-none flex justify-center items-center h-[100vh] w-[100vw]'>
            <div className='absolute z-2'>
                <AnimatePresence>
                  {showAbout &&
                    <motion.div className='border-0 translate-y-[-18vh] translate-x-[-23vw]' key={'aboutWindow'} initial={{y:'50%', opacity: 0, scale: 0.5}} exit={{y:'50%', opacity: 0, scale: 0.5, transition: {duration: 0.1, ease: 'easeOut'}}} animate={{y: 0, opacity: 1, scale: 1}} transition={{duration: 0.2, ease: 'easeOut'}}>
                      <ComponentCard height={497} boundingRef={hiddenWindowBoundingRef}>
                        <AboutWindow showAbout={onShowAboutClick}></AboutWindow>
                        {showDrawings && <img className='pointer-events-none absolute bottom-40 -right-60 rotate-0 w-[400px]' src={'./assets/gif/guides.gif'} alt='loading...' draggable={false} />}
                        {showDrawings && <img className='pointer-events-none absolute bottom-0 left-115 w-[200px]' src={'./assets/gif/angryGuide.gif'} alt='loading...' draggable={false} />}
                      </ComponentCard>
                    </motion.div>   
                  }
                </AnimatePresence>
              </div>


              <div className='absolute z-2'>
                <AnimatePresence>
                  {showLinks &&
                    <motion.div className='border-0 translate-y-[-9vh] translate-x-[-11vw]' key={'linksWindow'} initial={{y:'50%', opacity: 0, scale: 0.5}} exit={{y:'50%', opacity: 0, scale: 0.5, transition: {duration: 0.1, ease: 'easeOut'}}} animate={{y: 0, opacity: 1, scale: 1}} transition={{duration: 0.2, ease: 'easeOut'}}>
                      <ComponentCard height={398} boundingRef={hiddenWindowBoundingRef}>
                        <LinksWindow showLinks={onShowLinksClick}></LinksWindow>
                        {showDrawings && <img className='pointer-events-none absolute -bottom-55 left-5 w-[400px]' src={'./assets/gif/grunge.gif'} alt='loading...' draggable={false} />}
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
                        {showDrawings && <img className='pointer-events-none absolute -bottom-40 left-0  w-[350px]' src={'./assets/gif/sun.gif'} alt='loading...' draggable={false} />}
                      </ComponentCard>
                    </motion.div>   
                  }  
                </AnimatePresence> 
              </div>
        </div>

            {showDrawings &&
                <div className=' pointer-events-none'>
                    <img className='absolute bottom-[50vh] translate-y-[50vh] left-0 w-[650px]' src={'./assets/gif/girlies.gif'} alt='loading...' draggable={false} />
                    <img className='absolute bottom-0 right-0 w-[530px] scale-x-[100%]' src={'./assets/gif/doodle.gif'} alt='loading...' draggable={false} />
                </div>
            }


    </div>
    </div>
  )
}

export default LandingWindowContainer