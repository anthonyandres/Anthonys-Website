import React from 'react'
import "../../globals.css"
import Footer from '../_Components/Footer'
import CardContainer from '../_Components/CardContainer'
import WindowContainer from '../_Components/WindowContainer'
import DarkMuteVolumeComponents from '../_Components/DarkMuteVolumeComponents'
import { Metadata } from 'next'
import ShowDrawingsButton from '../_Components/ShowDrawingsButton'

export const metadata: Metadata = {
  title: "Have Fun",
  description: 'Play With Some Cards',
};

function Page() {
    // <div className='hidden md:inline'> means that when the window is larger than 768 pixels it has a display of `inline`, otherwise it is hidden when it is smaller than 768 pixels
    return(
      <main>
        <div className='hidden md:inline'>
          <DarkMuteVolumeComponents>
            <div className='overflow-hidden'>
              {/* these components have all of the photo cards */}
              <div className='border-0 pointer-events-none'>
                <CardContainer imgSrc={'./anthony2.jpg'}></CardContainer>
              </div>
              <div className='border-0 pointer-events-none'>
                <CardContainer imgSrc={'./anthony3.jpg'}></CardContainer>
              </div>
              <div className='border-0 pointer-events-none'>
                <CardContainer imgSrc={'./anthony4.jpg'}></CardContainer>
              </div>
              <div className='border-0 pointer-events-none'>
                <CardContainer imgSrc={'./anthony.jpg'}></CardContainer>
              </div>

              <ShowDrawingsButton />

              <footer className='border-0 relative bottom-4 '>
                <Footer></Footer>
              </footer>
            </div>
          </DarkMuteVolumeComponents>
        </div>
        <div className='flex justify-center items-center h-full md:hidden'>
          TODO: add mobile layout here. if you are on your phone, enable desktop mode! (if you see this, you owe me 5 Canadian Dollars)
        </div>
      </main>
  )
}

export default Page