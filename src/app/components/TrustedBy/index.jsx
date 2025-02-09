import React from 'react';
import { FaStar } from 'react-icons/fa';

const TrustedBy = () => {
  return (
    <div className="bg-gray-100 flex flex-col lg:flex-row  justify-center items-center rounded-2xl mt-12 max-lg:mx-4 max-lg:p-10 max-lg:gap-10 max-lg:text-center ">
      <div className="lg:p-20 flex flex-col justify-center items-center gap-2">
        <div className="flex gap-2">
          <FaStar className="text-orange-500 text-3xl" />
          <FaStar className="text-orange-500 text-3xl" />
          <FaStar className="text-orange-500 text-3xl" />
          <FaStar className="text-orange-500 text-3xl" />
          <FaStar className="text-orange-500 text-3xl" />
        </div>
        <p className='whitespace-nowrap font-medium'>500,000+ downloads</p>
      </div>
      <div className="lg:p-20 pl-0 flex flex-col gap-4">
        <h2 className='text-2xl font-medium'>Trusted by more than 100,000 paid customers and counting....</h2>
        <p className='text-gray-500 lg:pr-32 lg:text-lg'>
          Despite the widely recognized challenge of providing numbers on real
          SIM cards, our service ensures that you receive premium, paid numbers
          with the highest possible success rates for receiving SMS messages in
          the market.
        </p>
      </div>
    </div>
  );
};

export default TrustedBy;
