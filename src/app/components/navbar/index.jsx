'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import DropMenu from './NavDrop';
import { language, menuItems, menuItems2 } from '@/app/utils/NavDropData';
import Link from 'next/link';
import { MdOutlineMenu } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import Button from '../Button';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" w-full">
      <div className="container flex flex-row justify-between items-center h-[96px] max-lg:px-2">
        <div className="flex items-center gap-4">
          <Link href={"/"}><Image src="/images/icon.png" alt="icon" width={40} height={40} /></Link>
          <Link
            href={'/'}
            className="flex flex-col max-lg:hidden cursor-pointer"
          >
            <h1 className="font-medium text-[21px] p-0 m-0">Temp Number</h1>
            <p className="text-gray-500 p-0 m-0 text-[14px]">
              receive sms online
            </p>
          </Link>
        </div>
        <div
          className={`
      flex bg-white right-0 gap-10 
      backdrop-blur-[2px] bg-opacity-5 z-[9] relative
      ${open ? 'offcanvas lg:hidden' : 'max-lg:hidden'}
    `}
        >
          <div
            className={`
               ${
                 open
                   ? 'flex max-lg:flex-col  bg-white gap-10 w-[80%] h-full bg-opacity-100 ml-auto items-start pt-20 px-8 rounded-[40px_0_0_40px] drop-shadow-[5px_0_10px_rgba(0,0,0,0.3)]'
                   : 'flex gap-10 items-center justify-center'
               }
      
            `}
          >
            <div
              onClick={() => setOpen(false)}
              className="flex justify-end w-full"
            >
              <IoMdClose className="text-xl text-gray-500 relative z-[99] " />
            </div>
            <DropMenu title="Product" menuItems={menuItems} />
            <DropMenu title="Resources" menuItems={menuItems2} />
            <Link href={'/'} className="px-2">
              <h2 className="cursor-pointer text-[16px]">API</h2>
            </Link>
            <Link href={'/'} className="px-2">
              <h2 className="cursor-pointer text-[16px]">Partnership</h2>
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center gap-3 relative z-[1]">
          <div className="">
            <div className="flex items-center gap-2 max-lg:hidden">
              <div className="border min-h-[50px] min-w-[120px] flex justify-center items-center rounded-xl cursor-pointer hover:bg-gray-50">
                {' '}
                <DropMenu title="English" menuItems={language} />
              </div>
              <Button title={'Try Now'} />
            </div>
            <div className="flex items-center gap-2 lg:hidden">
              <div
                className={`
               ${
                 open
                   ? 'hidden'
                   : 'border h-[40px] flex justify-center items-center rounded-xl cursor-pointer hover:bg-gray-50'
               }
      
            `}
              >
                {' '}
                <DropMenu title="🌐" menuItems={language} />
              </div>
              <Button title={'Try Now'} designs={'h-[35px] w-[100px]'} />
            </div>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="lg:hidden size-9 flex justify-center rounded-lg items-center border border-gray-300 relative z-[99]"
          >
            {open ? (
              <IoMdClose className="text-xl text-gray-500 relative z-[99]" />
            ) : (
              <MdOutlineMenu className="text-xl text-gray-500 relative z-[99]" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
