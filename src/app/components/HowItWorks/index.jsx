import { clients, inputs, outputs, process } from '@/app/utils/WorksInput';
import React from 'react';
import Inputs from './Inputs';
import './works.css';

import Inputs2 from './Inputs2';
import Title from '../SectionsTitle';
const HowItWorks = () => {
  return (
    <div className="bg-gray-100 mt-10 py-32 px-8">
      <Title
        title={'How it works'}
        info={
          '  The following diagram illustrates how our product works behind the scenes. Despite the simple user interface, the backbone is extremely sophisticated and complex.'
        }
      />

      <div className="flex gap-20 mt-20 container scrollCard ">
        <div className="">
          <div className="mb-10">
            <h2 className="text-xl font-semibold">Inputs</h2>
            <p className="text-gray-500 text-[14px]">The best resources</p>
          </div>
          <div className="h-[450px] flex flex-col justify-between  ">
            {inputs.map((input, index) => (
              <div key={index} className="relative">
                <img
                  src="/images/arrow-separate.png"
                  alt="arrow"
                  width={50}
                  className="absolute top-[50%] -right-16"
                />
                <Inputs input={input} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-10">
            <h2 className="text-xl font-semibold">Process</h2>
            <p className="text-gray-500 text-[14px]">
              The 'magic' we are doing
            </p>
          </div>
          <div className="bg-white rounded-lg h-[450px] w-[260px] p-4 flex flex-col justify-between relative">
            <img
              src="/images/arrow-separate.png"
              alt="arrow"
              width={50}
              className="absolute top-[50%] -right-16"
            />
            {process.map((input, index) => (
              <Inputs2 input={input} key={index} />
            ))}
          </div>
        </div>

        <div>
          <div className="mb-10">
            <h2 className="text-xl font-semibold">Outputs</h2>
            <p className="text-gray-500 text-[14px]">The products we offer</p>
          </div>
          <div className="bg-white rounded-lg h-[450px] w-[260px] p-4 flex flex-col justify-between">
            {outputs.map((input, index) => (
              <Inputs2 input={input} key={index} />
            ))}
          </div>
        </div>

        <div>
          <div className="mb-10">
            <h2 className="text-xl font-semibold">Happy Clients</h2>
            <p className="text-gray-500 text-[14px]">
              The best value for money
            </p>
          </div>
          <div className="h-[450px] flex flex-col justify-between ">
            {clients.map((input, index) => (
              <div
                key={index}
                className="flex flex-col justify-between relative"
              >
                <img
                  src="/images/arrow-separate.png"
                  alt="arrow"
                  width={50}
                  className="absolute top-[50%] -left-16 rotate-180 "
                />
                <Inputs input={input} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
