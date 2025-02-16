'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import DropMenu from './NavDrop';
import { language, menuItems, menuItems2 } from '@/app/utils/NavDropData';
import Link from 'next/link';
import { MdOutlineMenu } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import Button from '../Button';
import { BiSolidDoorOpen } from 'react-icons/bi';
import { listenToAuthChanges, logout } from '@/app/firebase/fetchUserData';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState();
  const [userData, setUserData] = useState(null);
  const [userModal, setUserModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unSub = listenToAuthChanges(setUser, setUserData);
    return () => unSub();
  }, []);

  /*   console.log(user);
  console.log(userData); */
  return (
    <div className=" w-full">
      <div className="container flex flex-row justify-between items-center h-[96px] max-lg:px-2">
        <div className="flex items-center gap-4">
          <Link href={'/'}>
            <Image src="/images/icon.png" alt="icon" width={40} height={40} />
          </Link>
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
                   ? 'flex max-lg:flex-col  bg-white gap-10 w-[80%] h-full bg-opacity-100 ml-auto items-start pt-10 px-8 rounded-[40px_0_0_40px] drop-shadow-[5px_0_10px_rgba(0,0,0,0.3)]'
                   : 'flex gap-10 items-center justify-center'
               }
      
            `}
          >
            <div
              onClick={() => setOpen(false)}
              className="flex justify-end w-full "
            >
              <div className="flex lg:hidden cursor-pointer border rounded-md p-2 ">
                {' '}
                <IoMdClose className="text-2xl text-gray-500 relative z-[99]  " />
              </div>
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
              {!user ? (
                <Button title={'Log In'} href={'/login'} />
              ) : (
                <div className="flex flex-col gap-5 relative">
                  <div
                    onClick={() => setUserModal(!userModal)}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="rounded-full size-12 flex items-center justify-center  bg-orange-500 text-white cursor-pointer select-none uppercase font-semibold text-xl ">
                      {user.email.slice(0, 1)}
                    </div>
                  </div>
                  {userModal && (
                    <div className="flex flex-col w-[250px] absolute gap-2 right-2 top-14 p-2 px-4 rounded-md border border-orange-400 bg-gray-50 shadow-md">
                      <p className="text-ellipsis line-clamp-1">{user.email}</p>
                      {userData?.role == 'ADMIN' && (
                        <p
                          className="cursor-pointer hover:text-orange-500"
                          onClick={() => {
                            router.push('/dashboard');
                            setUserModal(false);
                          }}
                        >
                          Admin Dashboard
                        </p>
                      )}
                      <button
                        onClick={() => {
                          logout();
                          setUserModal(false);
                        }}
                        className="flex justify-center items-center gap-2 
                        p-1 bg-orange-500 rounded transition text-white"
                      >
                        <BiSolidDoorOpen />
                        <span className="">Log Out</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="flex items-center gap-2 lg:hidden ">
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
              {!user ? (
                <Button
                  href={'/login'}
                  title={'Log In'}
                  designs={'h-[33px] w-[95px]'}
                />
              ) : (
                <div className="flex flex-col gap-5 relative">
                  <div
                    onClick={() => setUserModal(!userModal)}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="rounded-full size-10 flex items-center justify-center bg-orange-500 text-white cursor-pointer select-none uppercase font-semibold text-xl ">
                      {user.email.slice(0, 1)}
                    </div>
                  </div>
                  {userModal && (
                    <div className="flex flex-col w-[250px] absolute gap-2 right-2 top-14 p-2 px-4 rounded-md border border-orange-400 bg-gray-50 shadow-md">
                      <p className="text-ellipsis line-clamp-1">{user.email}</p>
                      {userData?.role == 'ADMIN' && (
                        <p onClick={() => router.push('/dashboard')}>
                          Admin Dashboard
                        </p>
                      )}
                      <button
                        onClick={() => {
                          logout();
                          setUserModal(false);
                        }}
                        className="flex justify-center items-center gap-2 
                        p-1 bg-orange-500 rounded transition text-white"
                      >
                        <BiSolidDoorOpen />
                        <span className="">Log Out</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="lg:hidden size-9 flex justify-center rounded-lg items-center border border-gray-300 relative z-[99]"
          >
            {open ? (
              <IoMdClose className="text-xl text-gray-500 relative z-[99]" />
            ) : (
              <MdOutlineMenu className="text-xl text-gray-500 relative z-[99] cursor-pointer" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
