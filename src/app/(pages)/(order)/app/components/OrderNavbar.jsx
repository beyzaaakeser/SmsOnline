'use client';
import React, { useState } from 'react';
import { RiLogoutBoxRLine, RiMenu3Fill } from 'react-icons/ri';
import { MdClose, MdHistory } from 'react-icons/md';
import { CiCirclePlus, CiDollar } from 'react-icons/ci';
import { GoCreditCard } from 'react-icons/go';
import { IoIosHelpCircleOutline } from 'react-icons/io';
import Link from 'next/link';

const OrderNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container flex items-center justify-between py-5 max-sm:px-4 relative h-[86px]">
      <div className="flex items-center gap-2">
        <img src="/images/order-logo.svg" alt="Logo" className="size-10" />
        <h1 className="text-2xl font-medium">Temp Number</h1>
      </div>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer p-2">
        <RiMenu3Fill className="text-3xl font-semibold" />
      </div>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 bg-neutral-800/60 z-[9] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
      <div
        className={`fixed top-0 h-screen right-0 w-[350px] sm:w-[400px] bg-white p-8 px-12 shadow-lg z-[10] transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          <div
            onClick={() => setIsOpen(false)}
            className="border rounded-full size-10 flex justify-center items-center  cursor-pointer"
          >
            <MdClose className="text-lg" />
          </div>

          <div className='flex flex-col justify-between h-full'>
            <div className=" text-xl flex flex-col justify-center gap-5 mt-8 px-8">
              <h2 className="font-semibold text-2xl">Menu</h2>
              <div className="flex items-center gap-3 cursor-pointer">
                <CiCirclePlus className="text-orange-500 !font-bold" />{' '}
                <span>Order New</span>
              </div>
              <div className="flex items-center gap-3 cursor-pointer ">
                <MdHistory className="text-orange-500" /> <span>History</span>
              </div>
              <div className="flex items-center gap-3 cursor-pointer">
                <CiDollar className="text-orange-500 font-semibold" />{' '}
                <span>Funds</span>
              </div>
              <div className="flex items-center gap-3 cursor-pointer">
                <GoCreditCard className="text-orange-500 font-semibold" />{' '}
                <span>Transactions</span>
              </div>
              <div className="flex items-center gap-3 cursor-pointer">
                <IoIosHelpCircleOutline className="text-orange-500 font-semibold" />{' '}
                <span>Help</span>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-3 mt-12 px-8 text-sm">
              <p>
                Temp Number{' '}
                <span className="bg-orange-500 text-white font-semibold p-[2px] px-1 rounded-md ">
                  PRO
                </span>
              </p>
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
              <p>Refund Policy</p>
              <p>Affiliate Program</p>
              <p>API</p>
            </div>
            <div className="border-t ">
              <Link
                href={'/login'}
                className="flex items-center gap-3 px-8 mt-4"
              >
                <RiLogoutBoxRLine className="text-green-500 text-xl" />
                <span className="text-sm">Login/Sign Up</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderNavbar;
