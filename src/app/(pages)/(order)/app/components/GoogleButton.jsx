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
        router.push('/app');
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
        className="bg-white flex items-center justify-center py-4 px-10  w-full
        rounded-xl gap-2 text-black  whitespace-nowrap border "
      >
        <img
          src="/images/google-g.png"
          className="h-[20px]"
          alt="Google Logo"
        />
        Continue with Google
      </button>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </>
  );
};

export default GoogleButton;
