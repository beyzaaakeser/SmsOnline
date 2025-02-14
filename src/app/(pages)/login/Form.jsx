'use client';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MailModal from './modal/MailModal';
import { auth, db } from '@/app/firebase';
import { doc, setDoc, Timestamp } from 'firebase/firestore';

const Form = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => {
          setDoc(doc(db, 'users', cred.user.uid), {
            email: email,
            password: password,
            role: 'USER',
            createdAt: Timestamp.fromDate(new Date()),
          })
            .then(() => {
              toast.success('Your account has been created. You can log in');
              setName('');
              setEmail('');
              setPassword('');
              setError('');
              router.replace('/');
            })
            .catch((err) => setError(err.message));
        })
        .catch((err) => {
          toast.error('Error ' + err.message);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          toast.success('Account logged in!');
          router.replace('/');
        })
        .catch((err) => {
          toast.error(
            'An error occurred while logging into the account! ' + err.code
          );
        });
    }
    e.target.reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-md h-8 text-black p-2 border border-orange-400"
        />

        <label className="mt-4">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-md h-8 text-black p-2  border border-orange-400"
        />
        <p
          onClick={() => setIsOpen(true)}
          className="text-sm text-gray-600 mt-2 text-end hover:text-gray-400 cursor-pointer "
        >
          Forgot Password
        </p>

        <button
          type="submit"
          className="mt-10 bg-white  border border-orange-400 text-orange-500 rounded-full p-1 py-2 font-semibold transition hover:bg-gray-100"
        >
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </button>
      </form>

      <p className="mt-5 text-center">
        <span className="text-gray-600">
          {isSignUp ? 'Have an Account' : "Don't Have an Account "}
        </span>
        <span
          onClick={() => setIsSignUp(!isSignUp)}
          className="cursor-pointer ms-2 text-blue-500"
        >
          {isSignUp ? 'Sign In' : 'Sign Up'}
        </span>
      </p>

      <MailModal isOpen={isOpen} close={() => setIsOpen(false)} />

      <ToastContainer position="bottom-right" autoClose={2000} />
    </>
  );
};

export default Form;
