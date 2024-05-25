import Image from 'next/image'
import React from 'react'
import NavLinks from './NavLinks'
import Link from 'next/link'


export default function Navbar() {
  return (
    <div className='fixed w-full bg-white z-50'>
      
        <div className='flex px-20 py-5 justify-between items-center'>
        <Link href="/">
        <Image
       src="logo.svg"
       width={90}
       height={100}
       className="hidden md:block"
       alt="logo"
       /> 
        </Link>
        
       <div>
        <NavLinks/>
       </div>
        </div>
      

    </div>
  )
}
