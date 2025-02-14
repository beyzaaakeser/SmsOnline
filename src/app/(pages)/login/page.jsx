import React from 'react';
import GoogleButton from './GoogleButton';
import Form from './Form';
import { ToastContainer } from 'react-toastify';

const Login = () => {
  return (
    <>
      <div className="h-screen bg-white text-white grid place-items-center ">
        <div className="bg-white border-orange-200 border-2 text-gray-700 py-4 px-12 sm:py-6 sm:px-16 lg:py-8 lg:px-32 rounded-lg flex flex-col gap-5 shadow-xl">
          <div className="flex justify-center">
            <img className="h-[60px]" src="/images/icon.png" alt="" />
          </div>
          <GoogleButton />

          <Form />
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </>
  );
};

export default Login;
