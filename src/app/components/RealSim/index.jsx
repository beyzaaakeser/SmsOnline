import { info } from '@/app/utils/RealSimInfo';
import React from 'react';
import { MdSimCard } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';
import Info from './Info';
const RealSim = () => {
  return (
    <div className="mt-10 py-32 px-8">
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-3xl lg:text-5xl text-center font-semibold">Real SIM vs Virtual numbers</h2>
        <p className="text-gray-500 lg:w-[600px] text-center px-5">
          There is a significant difference between real SIM cards and virtual
          numbers (VoIP) when it comes to SMS activation and verifications
        </p>
      </div>
      <div className="lg:w-[65%] m-auto mt-10">
        <div className="flex gap-8 lg:gap-32 justify-end bg-gray-100 mb-4 p-5 md:pr-10 rounded-xl">
          <div className="flex gap-1 items-center">
            <MdSimCard className="text-orange-500" />
            <span>Real SIM</span>
          </div>
          <div className="flex gap-1 items-center">
            <TbWorld className="text-orange-500" />
            <span>Virtual</span>
          </div>
        </div>
        <div className='flex flex-col gap-6'>
            {info.map((item,index) => <Info info={item} key={index}/>)}
        </div>
      </div>
    </div>
  );
};

export default RealSim;
