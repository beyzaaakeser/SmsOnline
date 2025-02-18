import React from 'react';

const ProgressBar = ({ title, designs }) => {
  return (
    <div className="flex flex-col gap-2 mx-auto my-8 w-[350px] sm:w-[400px] md:w-[450px]  ">
      <div className="text-orange-500 mx-auto">{title}</div>
      <div className='flex w-full  items-center justify-center'>
        <div className="max-sm:w-[350px] sm:w-[400px] md:w-[450px] h-3 rounded-full bg-gray-100 ">
          <div className={`${designs} bg-orange-500 rounded-full h-3 `}></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
