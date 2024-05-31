"use client"

import React from 'react'
import Orders from '@/app/ui/dashboard/Orders'
import Orders2 from '@/app/ui/dashboard/Table'

export default function page() {
  return (
    <div className='h-screen'>
      <div className='md:block hidden'><Orders/></div>
      <div className='md:hidden'><Orders2/></div>
      </div>
  )
}
