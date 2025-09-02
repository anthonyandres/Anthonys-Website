
import React from 'react'
import Link from "next/link";

const page = () => {
  return (
    <body className='bg-sky-200'>
        <div className='p-5 my-5 bg-blue-300 text-white text-4xl hover:bg-blue-400'>
        Overview Page 
        <Link href="/api_test">API call</Link> 
        </div>
    </body>
  )
}

export default page
// export default function Page(){
//     return <div><Message /></div>
// }