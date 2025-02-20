import React from 'react';
import GoogleButton from '../components/GoogleButton';
import Link from 'next/link';

const CreateAccount = () => {
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
            <h2 className="text-2xl font-bold">Create Account</h2>
            <p className="text-gray-500 text-sm text-center px-16">
              It will allow saving history and sync with another device easily
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center w-full">
          <GoogleButton />
        </div>

        <div className="flex items-center justify-center my-4 text-gray-500 h-12">
          <span className="border-b-2 border-dashed w-[150px]"></span>
          <span className="px-2 text-sm">OR</span>
          <span className="border-b-2 border-dashed  w-[150px]"></span>
        </div>

        <div className="flex items-center justify-center w-full bg-orange-500  text-white  rounded-xl py-4 px-10 cursor-pointer hover:shadow-xl ">
          <Link href={'/app/signup'} className=" ">
            Continue with email
          </Link>
        </div>

        <p className="mt-5 text-center text-sm text-gray-500">
          By signing up, you agree to our
          <p className="text-orange-500  ">
            <Link href={'/app/terms-of-service'}>Terms of Service</Link>
          </p>{' '}
        </p>
      </div>
    </div>
  );
};

export default CreateAccount;
