'use client'; // this directive converts this entire component into a client component. The NextJS compiler will include this and any other dependant components in the JS bundle  
import React from 'react'

function ClickMeButton() {
  return (
    <button onClick={() => console.log('Click')}>Click Me!</button> // dynamically create anonymous function using arrow function when button is clicked
  )
}

export default ClickMeButton

// this is a client side component