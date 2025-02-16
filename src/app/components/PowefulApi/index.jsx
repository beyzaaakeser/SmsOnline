import React from 'react';
import Button from '../Button';

const PowefulApi = () => {
  return (
    <div className="container bg-white mt-52 mb-44 flex flex-col lg:flex-row justify-center gap-20 h-[50vh] max-sm:mt-96 max-lg:mt-80 px-4 ">
      <div className="lg:w-1/2 flex max-lg:justify-center max-lg:items-center">
        <img src="/images/code.webp" alt="" width={450} />
      </div>

      <div className="flex flex-col lg:w-1/2 min-h-[350px] h-full justify-between">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-3xl md:text-5xl  font-medium max-lg:text-center pb-4">
              Powerful API
            </h2>
            <p className="text-gray-500  lg:pr-36 leading-relaxed ">
              No matter how many verifications you need, the Temp Number API
              makes it easy to automate your workflows and processes
            </p>
          </div>
          <div className="pl-4 ">
            <ul className="flex flex-col gap-2">
              <li className="list-disc text-gray-500">
                Designed for developers
              </li>
              <li className="list-disc text-gray-500">
                A simple and easy way to scale
              </li>
              <li className="list-disc text-gray-500">Robust infrastructure</li>
            </ul>
          </div>
        </div>
        <div>
          <Button title="API Docs" designs={'w-[160px] rounded-xl'} href={"/"} />
        </div>
      </div>
    </div>
  );
};

export default PowefulApi;
