'use client';
import React, { useState } from 'react';
import { FaCirclePlay } from 'react-icons/fa6';
import WatchModal from './WatchModal';

const WatchVideo = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex justify-center items-center gap-2 text-orange-600 border border-orange-600 h-[50px] w-full sm:w-[60%] lg:w-[160px] rounded-md hover:shadow-lg"
      >
        <FaCirclePlay /> Watch Video
      </button>
      <WatchModal isOpen={isOpen} close={() => setIsOpen(false)} />
    </>
  );
};

export default WatchVideo;
