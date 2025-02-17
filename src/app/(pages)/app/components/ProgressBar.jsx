import React from 'react';

const ProgressBar = ({ title, designs }) => {
  return (
    <div className="flex flex-col gap-2 my-8 w-[350px]  lg:w-[450px] mx-auto ">
      <div className="text-orange-500 mx-auto">{title}</div>
      <div className="w-[350px] lg:max-w-[450px] mx-auto h-3 rounded-full bg-gray-100 ">
        <div className={`${designs} bg-orange-500 rounded-full h-3 `}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
