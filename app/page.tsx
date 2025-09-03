'use client';
import React, {useRef, useState} from 'react';
import Link from "next/link";
import Card from './(main)/_Components/Card';

// TODO: begin working on implementing ways to hide and show various elements on main page (like that one website that looks like a desktop and you're opening windows when clicking certain )

export default function Home() {

  const containerRef = useRef<null>(null); // create a reference to a div element
  const boundingRef = useRef<null>(null);
  return (
      <main>
        <span className='noScroll border-8 flex-col inline-block'>
          <h1>Home Page</h1>
          <Link href="/overview">Overview</Link>
          <br /> 
          <Link href="./index.html">html</Link>
          <br />
          <Link href="/myhtml">my html</Link>
          <br />
          <Link href="/drag_test">rupaul</Link>
        </span>
        <div ref={containerRef} className='pointer-events-none absolute inset-0 -z-10 overflow-hidden'>
          <Card boundingRef={containerRef} imgSrc='./joker.png' />
          <Card boundingRef={containerRef} imgSrc='./joker.png' />  
        </div>
      </main>
  )
}  

