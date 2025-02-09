import React from 'react';

const Info = ({ info }) => {
  return (
    <div className="flex gap-8 lg:gap-32 justify-between items-center pb-3 sm:p-5 border-b">
      <div className="text-gray-500">{info.title}</div>
      <div className="flex gap-8 lg:gap-32 justify-end">
        <div className='w-[70px]'>
          <img src="/images/check.png" alt="" className='size-12' />
        </div>
        <div className='w-[70px]'>
          <img src="/images/close.png" alt="" className='size-12' />
        </div>
      </div>
    </div>
  );
};

export default Info;
