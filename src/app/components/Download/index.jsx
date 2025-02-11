import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';

const Download = () => {
  return (
    <div className="container rounded-3xl my-32 max-md:mt-[1300px] max-lg:mt-[800px]  bg-orange-400 max-lg:h-[900px] lg:h-[400px] text-white ">
      <div className="flex flex-col lg:flex-row max-lg:pt-16 p-8 lg:p-16">
        <div className="flex flex-1 flex-col gap-3">
          <h2 className="text-[26px] font-semibold">Download - Get it now</h2>
          <p className="text-[18px] lg:pr-24 leading-relaxed">
            With our easy-to-use interface, you can quickly visit or download a
            temporary number and have it up and running in no time. So don't
            wait - get your temporary phone number today!
          </p>

          <div className="flex flex-col lg:flex-row gap-3 items-center mt-10">
            <div className="flex items-center gap-2 bg-black text-white w-[160px] p-2 rounded-lg">
              <FaApple className="text-3xl" />
              <div className="flex flex-col">
                <p className="text-[10px]">Download on the</p>
                <p>App Store</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-black text-white w-[160px] p-2 rounded-lg">
              <FaGooglePlay className="text-3xl" />
              <div className="flex flex-col">
                <p className="text-[10px]">Get it on</p>
                <p>Google Play</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-black text-white w-[160px] p-2 rounded-lg">
              <BiWorld className="text-3xl" />
              <div className="flex flex-col">
                <p className="text-[10px]">Get in on</p>
                <p>Web Version</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-center relative">
            <img src="/images/phone-x.png" alt="phone" width={450} className='absolute max-md:top-14 lg:-bottom-16 mx-auto' />
        </div>
      </div>
    </div>
  );
};

export default Download;
