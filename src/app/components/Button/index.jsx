import Link from 'next/link';
import React from 'react';
import { GoArrowRight } from 'react-icons/go';

const Button = ({ title, designs, href }) => {
  return (
    <Link
      href={href}
      className={`flex justify-center items-center gap-2 bg-orange-500 rounded-md h-[50px] w-[140px] cursor-pointer text-white hover:shadow-lg ${designs}`}
    >
      {title}
      <GoArrowRight />
    </Link>
  );
};

export default Button;
