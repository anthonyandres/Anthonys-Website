import React from 'react'
import './windows.css'
import { IconContext } from 'react-icons'
import {FaMinimize } from 'react-icons/fa6'

interface Props{
  showContact: ()=> void
}


function LinksWindow({showContact = () => {}}: Props) {

  return (
    <div className='window-colors prevent-select h-[100%] w-[30vw] min-w-[600px] max-w-[600px] border-0 rounded-[0px]'>
        <IconContext.Provider value={{ className: 'tertiary-window-colors justify-right border-0 size-[20px] transition duration-100 ease-in hover:scale-[110%]' }}>
                <div className='z-10 absolute gap-x-16 justify-center top-3 right-3'>
                    <FaMinimize onClick={showContact}/>
                </div>
                </IconContext.Provider>
        <div className='flex flex-col gap-y-0 window'>
            <div className='tertiary-window-colors flex flex-row landing-header text-amber-100 p-20'>
                <p className='pl-6 text-2xl text-center'>contact</p>
            </div>
            <div className=' window-colors overflow-hidden border-0 h-full'>
                <div className='border-0'>
                    <p>this is the main body </p>    
                </div>           
            </div>
            
        </div>
    </div>
  )
}

export default LinksWindow