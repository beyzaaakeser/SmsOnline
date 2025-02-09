'use client';
import React, { useState } from 'react';
import Button from '../Button';
import { FaBoxArchive } from 'react-icons/fa6';
import { IoCode } from 'react-icons/io5';
import { PiBuildingApartmentFill } from 'react-icons/pi';

const Partnership = () => {
  const [suppliers, setSuppliers] = useState(true);
  const [software, setSoftware] = useState(false);
  const [affiliates, setAffiliates] = useState(false);

  const handleSuppliers = () => {
    setSuppliers(true);
    setSoftware(false);
    setAffiliates(false);
  };
  const handleSoftware = () => {
    setSuppliers(false);
    setSoftware(true);
    setAffiliates(false);
  };
  const handleAffiliates = () => {
    setSuppliers(false);
    setSoftware(false);
    setAffiliates(true);
  };

  return (
    <div className="container bg-white my-20 flex max-lg:mt-72 flex-col lg:flex-row max-lg:gap-20">
      <div className="flex flex-col lg:w-1/2 min-h-[350px] h-full justify-between max-lg:px-4">
        <div className="flex flex-col gap-8 ">
          <div>
            <h2 className="text-3xl md:text-5xl  font-medium max-lg:text-center pb-4">
              Partnership
            </h2>
            <p className="text-gray-500  lg:pr-36 leading-relaxed ">
              Partnerships are key to success and can create a strong foundation
              for building high-quality products. We are interested in
              collaborating with
            </p>
          </div>
          <div className="pl-4 ">
            <ul className="flex flex-col gap-2">
              <li className="list-disc text-gray-500">
                Suppliers of real SIM numbers
              </li>
              <li className="list-disc text-gray-500">
                Software creators and owners
              </li>
              <li className="list-disc text-gray-500">
                Affiliates and site owners
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Button title="Contact Us" designs={'w-[180px] rounded-xl'} />
        </div>
      </div>

      <div className="lg:w-1/2 ">
        <div className="flex items-center justify-center gap-4 md:gap-16 ">
          <div
            onClick={handleSuppliers}
            className={`flex items-center justify-center gap-2 font-medium cursor-pointer pb-3 ${
              suppliers
                ? 'text-orange-500 border-b-4 border-orange-500 rounded-md'
                : ''
            }`}
          >
            <FaBoxArchive />
            <span>Suppliers</span>
          </div>
          <div
            onClick={handleSoftware}
            className={`flex items-center justify-center gap-2 font-medium cursor-pointer pb-3 ${
              software
                ? 'text-orange-500 border-b-4 border-orange-500 rounded-md'
                : ''
            }`}
          >
            <IoCode />
            <span className="whitespace-nowrap">Software owners</span>
          </div>
          <div
            onClick={handleAffiliates}
            className={`flex items-center justify-center gap-2 font-medium cursor-pointer pb-3 ${
              affiliates
                ? 'text-orange-500 border-b-4 border-orange-500 rounded-md'
                : ''
            }`}
          >
            <PiBuildingApartmentFill />
            <span>Affiliates</span>
          </div>
        </div>
        <div className="border  pt-12 flex rounded-3xl ">
          <div className='w-3/5 flex justify-center items-center'>
            <img src="/images/phone.webp" alt="phone" width={250} />
          </div>
          <div className='w-2/5 flex justify-center items-center text-gray-500' >
            {suppliers && <p>Please contact us if you are supplier</p>}
            {software && (
              <p>Please contact us if you are software developer or owner</p>
            )}
            {affiliates && (
              <p>
                Please <span className='text-blue-500 cursor-pointer'>become our affiliate</span> and earn rewards if you are website
                owner
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnership;
