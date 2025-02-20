'use client';

import React from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/app/firebase';
import { toast } from 'react-toastify';
import Modal from './index';

const MailModal = ({ isOpen, close }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success('A link has been sent to your email. Please check it.');
      })
      .catch((err) => {
        console.log(err);
        toast.warning(
          'The link could not be sent to your email. Please try again.'
        );
      });
  };

  return (
    <Modal isOpen={isOpen} close={close} designs={"bg-orange-500 !max-w-[600px]"} >
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <h1 className="text-3xl">Forgot Password ?</h1>
        <p className="text-gray-700 ">
          We will send a password reset link to your email address.
        </p>

        <input
          type="email"
          placeholder="Type your email"
          className="rounded-md h-10 text-black p-2  border border-orange-400 mt-5"
          required
        />
        <div className="flex  md:flex-row items-center justify-center gap-4 mt-4">
          <button
            type="button"
            className="bg-white text-black rounded-md w-[40%]  py-2 hover:bg-gray-300 transition"
            onClick={close}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-white text-black rounded-md w-[60%]  py-2 hover:bg-gray-300 transition"
          >
            Send Email
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default MailModal;
