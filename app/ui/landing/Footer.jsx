import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <div> <div className="lg:px-40 lg:py-20 px-7 py-10">
    <Image
    src="/logo2.svg"
    width={200}
    height={200}
    alt="footer logo"
    className='w-[40%] lg:w-[200px]'
    />
  </div>
  <div className="flex justify-between flex-col-reverse px-7 lg:px-0 lg:flex-row text-[14px] lg:text-[12px] lg:mx-40 pt-10 pb-7  border-t">
    <p className='mt-7 lg:mt-0'>© 2024 World Gold Council. All Rights Reserved</p>
    <div className="flex gap-3 lg:gap-7 flex-col   lg:flex-row">
      <p className="cursor-pointer hover:border-b lg:hover:border-b-black pb-3">Cookies</p>
      <p className="cursor-pointer hover:border-b lg:hover:border-b-black pb-3">Terms & Conditions</p>
      <p className="cursor-pointer hover:border-b lg:hover:border-b-black pb-3">Privacy Policy</p>
    </div>
  </div></div>
  )
}
