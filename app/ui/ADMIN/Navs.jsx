"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link href="/adminito69" className="text-white font-bold text-xl">
            <Image src="/logo.svg" alt="logo" width={1000} height={1000} className='w-16'/>
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/adminito69" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
            Users
          </Link>
          <Link href="/adminito69/deposits" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
            Deposits
          </Link>
          <Link href="/adminito69/withdrawals" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
            Withdrawals
          </Link>
          <Link href="/adminito69/transactions" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
            Transactions
          </Link>
          <Link href="/adminito69/wallets" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
            Wallets
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white hover:text-gray-400 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link href="/users" className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
            Users
          </Link>
          <Link href="/deposits" className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
            Deposits
          </Link>
          <Link href="/withdrawals" className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
            Withdrawals
          </Link>
          <Link href="/transactions" className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
            Transactions
          </Link>
          <Link href="/mail" className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
            Mail
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
