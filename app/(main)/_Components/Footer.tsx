import React from 'react'
import './style.css'

function Footer() {
    const date = new Date()
    const year = date.getFullYear()
  return (
    <footer>
        <p className='foot text-1xs'>©{year} Anthony Andres</p>
    </footer>
  )
}

export default Footer