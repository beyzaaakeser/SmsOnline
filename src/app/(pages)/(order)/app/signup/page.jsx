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
import Link from 'next/link';
import { CiMail } from 'react-icons/ci';
import {
  IoEyeOffOutline,
  IoEyeOutline,
  IoLockOpenOutline,
} from 'react-icons/io5';
import { auth, db } from '@/app/firebase';
import { doc, setDoc, Timestamp } from 'firebase/firestore';

const SignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => {
          setDoc(
            doc(db, 'users', cred.user.uid),
            {
              email: email,
              password: password,
              role: 'USER',
              createdAt: Timestamp.fromDate(new Date()),
            },
            router.replace('/')
          )
            .then(() => {
              toast.success('Your account has been created. You can log in');
              setName('');
              setEmail('');
              setPassword('');
              setError('');
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
    <div className="container py-4">
      <div className="w-[380px] sm:w-[400px] max-sm:px-2 mx-auto ">
        <div>
          <div className='flex justify-center items-center'>
            <img
              src="/images/signup-logo.svg"
              alt="signup logo"
              className="w-[88px]"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-4 py-8">
            <h2 className="text-3xl font-bold">Sign Up</h2>
            <div className="flex flex-col items-center justify-center">
              <p className="text-gray-500 text-sm">
                By signing up, you agree to our
              </p>
              <p className="text-orange-500 text-sm">Terms of Service</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex items-center border p-4 py-3 rounded-xl">
            <CiMail />
            <input
              placeholder="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-md h-8 text-black p-2 focus:outline-none "
            />
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between border p-4 py-3 rounded-xl">
              <div className="flex items-center gap-2">
                <IoLockOpenOutline />
                <input
                  placeholder="Password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="rounded-md h-8 text-black p-2 focus:outline-none"
                />
              </div>
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="focus:outline-none"
              >
                {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </div>
            </div>

            <div className="flex items-center justify-between border p-4 py-3 rounded-xl">
              <div className="flex items-center gap-2">
                <IoLockOpenOutline />
                <input
                  placeholder="Confirm Password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="rounded-md h-8 text-black p-2 focus:outline-none"
                />
              </div>
              <div
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="focus:outline-none"
              >
                {showConfirmPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </div>
            </div>

            {password && confirmPassword && password !== confirmPassword && (
              <p className="text-orange-500 text-sm">Passwords do not match!</p>
            )}
          </div>

          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className=" text-white border border-orange-400 bg-orange-500 rounded-xl p-1 py-4  transition hover:shadow-xl"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-gray-500">
          Already have an account?{' '}
          <span className="text-orange-500 font-semibold ">
            <Link href={'/app/signin'}>Login</Link>
          </span>{' '}
        </p>
      </div>

      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
};

export default SignUp;
