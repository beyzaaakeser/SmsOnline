import React from 'react';
import Button from '../Button';
import { FaCirclePlay } from 'react-icons/fa6';
import './hero.css';

const Hero = () => {
  return (
    <div id="hero" className="flex max-lg:flex-col pt-6 min-h-[65vh]">
      <div className="flex flex-col lg:flex-[5] justify-evenly max-lg:text-center">
        <div className="flex flex-col gap-4 pr-4 ">
          <h2 className="text-[clamp(2rem,3vw,6rem)] font-semibold max-lg:px-10 ">
            Temp Number Second Phone
          </h2>
          <p className="text-gray-600 text-[clamp(1.1rem,1vw,2rem)] max-lg:px-4 pr-4">
            Receive SMS Online using Temporary Second Phone Numbers from all
            over the world
          </p>
        </div>
        <div className="flex items-center gap-4 max-lg:flex-col max-lg:w-full max-lg:px-4 max-lg:hidden">
          <Button
            title={'Try Now'}
            designs={'w-full sm:w-[60%] lg:w-[160px]'}
          />
          <button className="flex justify-center items-center gap-2 text-orange-600 border border-orange-600 h-[50px] w-full sm:w-[60%] lg:w-[160px] rounded-md hover:shadow-lg">
            <FaCirclePlay /> Watch Video
          </button>
        </div>
      </div>
      <div className="flex  flex-col lg:flex-[7] gap-8">
        <div className="relative w-full h-full ">
          <div className="absolute bg-gray-200 circle1 opacity-50 z-0 max-lg:hidden"></div>
          <div className="absolute bg-gray-400 circle2 opacity-50 z-0 max-lg:hidden"></div>

          <div className=" w-full h-full inset-0 flex justify-center items-center relative z-3 user-select-none">
            <video
              src="/images/video.webm"
              autoPlay
              loop
              muted
              className="pointer-events-none user-select-none"
            ></video>
          </div>
        </div>
        <div className="flex items-center gap-4 max-lg:flex-col max-lg:w-full max-lg:px-4 lg:hidden">
          <Button
            title={'Try Now'}
            designs={'w-full sm:w-[60%] lg:w-[160px]'}
          />
          <button className="flex justify-center items-center gap-2 text-orange-600 border border-orange-600 h-[50px] w-full sm:w-[60%] lg:w-[160px] rounded-md hover:shadow-lg">
            <FaCirclePlay /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
