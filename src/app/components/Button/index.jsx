import React from 'react';
import { GoArrowRight } from 'react-icons/go';

const Button = ({ title, designs }) => {
  return (
    <div
      className={`flex justify-center items-center gap-2 bg-orange-500 rounded-md h-[50px] w-[140px] cursor-pointer text-white hover:shadow-lg ${designs}`}
    >
      {title}
      <GoArrowRight />
    </div>
  );
};

export default Button;
