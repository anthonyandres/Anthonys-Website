import React from 'react'
import "./globals.css"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Loading...",
  description: "loading page",
};

function Page() {
    // i know you can have your own loading page defined using nextjs, but just bear with this for now
    return(
      <main>
        this is the loading page (you should be redirected to the home page)
      </main>
  )
}

export default Page