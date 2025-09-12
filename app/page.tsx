import React from 'react'
import "./globals.css"
import { Metadata } from 'next'
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: "Loading...",
  description: "loading page",
};

function Page() {
  redirect('/home')
    // i know you can have your own loading page defined using nextjs, but just bear with this for now
    return(
      <main>
        this is the loading page (you should be redirected to the home page)
      </main>
  )
}

export default Page