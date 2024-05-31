import React from 'react';
import PaidIcon from '@mui/icons-material/Paid';
import { CreditCard } from '@mui/icons-material';
import Link from 'next/link';
import Image from 'next/image';

export default function Money({ wallet }) {
  return (
    <div className='lg:bg-black lg:pt-9 px-2 py-4 lg:pb-9 lg:px-9 mb-12'>
        
    <div className="lg:flex-row flex-col flex gap-4 justify-between">
        <div className='lg:flex-row flex flex-col gap-4'>
      <div className=" lg:p-4 p-2 rounded-lg bg-gradient-to-r from-black to-gold shadow-md">
        <h2 className="text-xs lg:text-base font-semibold text-white">Total Balance</h2>
        <p className="text-lg lg:text-3xl font-bold text-white">${wallet.totalBalance}.00</p>
      </div>
      <div className=" lg:p-4 p-2 rounded-lg bg-gradient-to-r from-black to-gold shadow-md">
        <h2 className="text-xs lg:text-base font-semibold text-white">Cash Balance</h2>
        <p className="text-lg lg:text-3xl font-bold text-white">${wallet.cashBalance}.00</p>
      </div>
      <div className=" lg:p-4 p-2 rounded-lg bg-gradient-to-r from-black to-gold shadow-md">
        <h2 className="text-xs lg:text-base font-semibold text-white">Gold Balance</h2>
        <p className="text-lg lg:text-3xl font-bold text-white">{wallet.goldBalance}.00 oz</p>
      </div>
      <div className=" lg:p-4 p-2 rounded-lg bg-gradient-to-r from-black to-gold shadow-md">
        <h2 className="text-xs lg:text-base font-semibold text-white">Profit</h2>
        <p className="text-lg lg:text-3xl font-bold text-white">${wallet.goldBalance}.00 </p>
      </div>
      </div>
        <div className='self-center lg:block hidden lg:ml-24 '>
            <Image 
            src="/golds.png"
            width={1000}
            height={100}
            alt="logo"
            className=" w-40  h-24 object-cover rounded-xl"/>
        </div>
    </div>
    <div className='flex lg:gap-5 mt-6 gap-2 lg:justify-start justify-center lg:mt-9'>
            <Link href="/dashboard/deposit" className='lg:text-[0.8rem] text-[0.9rem] lg:px-4 px-2 py-2 border border-black lg:border-cusblue hover:bg-slate-200 lg:text-white rounded-xl '>
            Deposit <PaidIcon/>
        </Link>
      
        
        <Link href="/dashboard/withdraw" className='lg:text-[0.8rem] text-[0.9rem] lg:px-4 px-2 py-2 bg-cusblue hover:bg-slate-200 text-white rounded-xl '>
            Withdraw <CreditCard/>
        </Link>
       
    </div>
    
    </div>
  );
}
