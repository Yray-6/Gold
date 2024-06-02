"use client"

import Image from 'next/image'
import React from 'react'
import NavLinks from './NavLinks'
import Link from 'next/link'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className='fixed w-full bg-white z-50'>
      
        <div className={clsx("flex px-20 py-5 justify-between items-center",{
          "hidden": pathname.startsWith("/dashboard") || pathname.startsWith("/adminito69")
        })}>
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
