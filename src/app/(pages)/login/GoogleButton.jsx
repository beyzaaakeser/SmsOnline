'use client';
import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, provider } from '@/app/firebase';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const GoogleButton = () => {
  const router = useRouter();


  const handleClick = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        const userData = {
          uid: result.user.uid,
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
        };
       
        toast.success('Successfully logged into account!');
        router.push('/');
      } else {
        toast.error('Login failed - no user data received');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error(error.message || 'An error occurred during login');
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="bg-white flex items-center py-2 px-10 
        rounded-full gap-2 transition hover:bg-gray-100
        text-orange-500 font-semibold whitespace-nowrap 
        border border-orange-400"
      >
        <img
          src="/images/google-g.png"
          className="h-[20px]"
          alt="Google Logo"
        />
        Sign in with Google
      </button>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </>
  );
};

export default GoogleButton;
