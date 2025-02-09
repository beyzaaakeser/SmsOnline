import React from 'react';
import Button from '../Button';
import { enterprises } from '@/app/utils/EnterpriseClients';

const Enterprise = () => {
  return (
    <div className="container bg-white my-52 flex flex-col lg:flex-row justify-center gap-20 h-[50vh] max-sm:my-72 px-4">
      <div className="flex flex-col lg:w-1/2 min-h-[350px] h-full justify-between">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-3xl md:text-5xl  font-medium max-lg:text-center pb-4">
              Enterprise clients
            </h2>
            <p className="text-gray-500  lg:pr-36 leading-relaxed ">
              For enterprise clients and corporations, we offer a range of
              non-VOIP and real SIM numbers from different providers around the
              world
            </p>
          </div>
          <div className="pl-4 ">
            <ul className="flex flex-col gap-2">
              <li className="list-disc text-gray-500">
                Access to a global real-sim network
              </li>
              <li className="list-disc text-gray-500">
                Exclusive terms, prices and dedicated support
              </li>
              <li className="list-disc text-gray-500">
                Financial and corporate compliance
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Button title="Contact Us" designs={'w-[180px] rounded-xl'} />
        </div>
      </div>

      <div className="lg:w-1/2 grid grid-cols-2 gap-4">
        {enterprises.map((enterprise, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg flex items-center justify-center p-4"
          >
            <img src={enterprise.image} alt="" width={120} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Enterprise;
