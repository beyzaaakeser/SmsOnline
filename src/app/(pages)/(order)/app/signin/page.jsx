'use client';
import { auth } from '@/app/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { doc, setDoc, Timestamp } from 'firebase/firestore';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { CiMail } from 'react-icons/ci';
import {
  IoEyeOffOutline,
  IoEyeOutline,
  IoLockOpenOutline,
} from 'react-icons/io5';
import { toast, ToastContainer } from 'react-toastify';

const SignIn = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [serviceCost, setServiceCost] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const cost = sessionStorage?.getItem('servicePriceCost');
    setServiceCost(cost);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success('Account logged in!');
        {
          serviceCost ? router.replace('/app/funds') : router.replace('/app');
        }
      })
      .catch((err) => {
        toast.error(
          'An error occurred while logging into the account! ' + err.code
        );
      });

    e.target.reset();
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
            <h2 className="text-2xl font-bold">Welcome!</h2>
            <p className="text-gray-500 text-sm text-center px-16">
              Please login to continue
            </p>
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
              className="rounded-md h-8 text-black p-2 focus:outline-none w-full  "
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
                  className="rounded-md h-8 text-black p-2 focus:outline-none w-full "
                />
              </div>
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="focus:outline-none"
              >
                {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Link
              href={'/app/reset-password'}
              className="text-gray-400 text-xs"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className=" text-white border border-orange-400 bg-orange-500 rounded-xl p-1 py-4  transition hover:shadow-xl"
          >
            Login
          </button>
        </form>
        <p className="mt-5 text-center text-sm text-gray-500">
          Don't have an account?{' '}
          <span className="text-orange-500 font-semibold ">
            <Link href={'/app/signup'}>Sign Up</Link>
          </span>
        </p>
      </div>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
};

export default SignIn;
