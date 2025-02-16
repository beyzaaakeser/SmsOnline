import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import Questions from './Questions';
import Button from '../Button';
const Faq = () => {
  return (
    <div className="bg-white py-32">
      <div className="container">
        <div className="flex flex-col justify-center items-center gap-6 mb-20">
          <h2 className="text-3xl lg:text-5xl text-center font-semibold">
            FAQ
          </h2>
          <p className="text-gray-500 lg:max-w-[650px] text-center px-5">
            Welcome to our FAQ section, where you can find answers to the most
            commonly asked questions about our products and services.
          </p>
          <div className="flex items-center gap-3">
            <p className="text-gray-500">More Question?</p>
            <p className="flex items-center gap-2 text-orange-500">
              Contact Us <FaArrowRightLong />{' '}
            </p>
          </div>
        </div>
        <Questions />
       <div className='flex justify-center items-center mt-10'>
       <Button title="Visit help center" designs="w-[200px]" href={"/"} />
       </div>
      </div>
    </div>
  );
};

export default Faq;
