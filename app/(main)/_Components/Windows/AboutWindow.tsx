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

const gelicaLight = localFont({
    src: '../../../../public/Fonts/Gelica/Gelica-Light.otf',
})

interface Props{
  showAbout: ()=> void
}


function AboutWindow({showAbout = () => {}}: Props) {
    const containerRef = useRef<null>(null)

  return (
    <div className='window-colors prevent-select h-[491px] w-[50vw] min-w-150 max-w-[960px] border-0 rounded-[0px]'>
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
                <div className='border-0 h-full inline-flex flex-col p-4 overflow-y-auto scrollbar-colors'>
                     <div className='window-colors border-3 border-dashed rounded-2xl p-4 grid gap-y-5'>
                        <h2 className='secondary-window-colors text-3xl font-bold text-center'>Hey! I&#39;m Anthony, I am...</h2>
                            <div className={`window-colors ${gelicaLight.className}`}>
                                <ul className=' text-[20px] list-disc pl-10'>
                                    <li>a recent Computer Engineering graduate</li>
                                    <li>currently looking for work!</li>
                                    <li>open to gain new experiences and learn as much as I can in the industry</li>
                                </ul>        
                            </div>

                            <h2 className='window-colors text-3xl font-bold mt-5'>Education</h2>
                            <div className=''>
                                <p className='bgbg bg-[#d1cca366] rounded-[20px] pt-2 pb-2 pl-5'>Bachelor of Engineering in Computer Engineering <span className={`text-[#919191] text-[15px] ${gelicaLight.className}`}>(Software Engineering Option)<br/>GPA: 3.27 / 4.33</span></p>
                            </div>

                            <p className='window-colors text-2xl text-left font-bold mt-5'>Related topics i&#39;m interested in:</p>
                            <div className={`window-colors ${gelicaLight.className}`}>
                                <ul className=' text-[20px] list-disc pl-10'>
                                    <li>frontend development</li>
                                    <li>backend development</li>
                                    <li>QA software/hardware testing</li>
                                    <li>hardware systems design/analysis</li>
                                </ul>        
                            </div>
                            
                        <h2 className='secondary-window-colors font-bold text-3xl text-center mt-10'>A little bit about me..</h2>
                            <p className='window-colors text-justify'>I have always been a very analytical person. I tend to break concepts down to understandable components so that I can understand not only specifically how the the entirety works, but how the individual components function and contribute to the overall system. No matter what I do, I always apply that thinking and the end result of having gained new knowledge that way will always be satisfying to me. Knowing that I put in the work in such a way makes me enjoy learning as an experience, and not just for the final reward of new knowledge! <br/><br/> In a sense, this way of thinking I&#39;ve adapted over time has proven to a little bit pesky. Sometimes I find myself a litle too invested in learning about various topics...<br/><sub>suffering from success?</sub></p>
                        
                        <p className='window-colors text-2xl text-left font-bold mt-5'>My other passions:</p>
                            <div className={`window-colors ${gelicaLight.className}`}>
                                <ul className=' text-[20px] list-disc pl-10'>
                                    <li>MUSIC!</li>
                                    <li>audio equipment</li>
                                    <li>digital and film photography/videography</li>
                                    <li>hobby electronics</li>
                                    <li>electronics repair</li>
                                    <li>visual art</li>
                                    <li>video games</li>
                                    <li>tabletop RPGs</li>
                                    <li>music production</li>
                                </ul>        
                            </div>
                        
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