'use client';
import { auth } from '@/app/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { CiMail } from 'react-icons/ci';
import { toast, ToastContainer } from 'react-toastify';

const ResetPassword = () => {
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target[0].value.trim();

    if (!email) {
      setEmailError('Please enter email address.');
      return;
    }

    setEmailError('');

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success('A link has been sent to your email. Please check it.');
      })
      .catch((err) => {
        toast.warning(
          'The link could not be sent to your email. Please try again.'
        );
      });
  };
  return (
    <div className="container py-4">
      <div className="w-[380px] sm:w-[400px] max-sm:px-2 mx-auto ">
        <div>
          <div className="flex justify-center items-center">
            <img
              src="/images/signup-logo.svg"
              alt="signup logo"
              className="w-[88px]"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-4 py-6">
            <h2 className="text-3xl font-bold">Reset Password</h2>
            <p className="text-gray-500 text-sm text-center px-16">
              Enter email address to reset password
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <div className="flex items-center border p-4 py-3 rounded-xl">
              <CiMail />
              <input
                placeholder="Email Address"
                type="email"
                className="rounded-md h-8 text-black p-2 focus:outline-none  w-full "
              />
            </div>
            {emailError && (
              <p className="text-orange-500 text-sm mt-2 pl-2">{emailError}</p>
            )}
          </div>

          <button
            type="submit"
            className="flex items-center justify-center w-full bg-orange-500  text-white  rounded-xl py-4 px-10 cursor-pointer hover:shadow-xl "
          >
            Reset Password
          </button>
        </form>
      </div>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
};

export default ResetPassword;
