'use client';
import React, { useState } from 'react';
import { PiBuildingApartmentFill } from 'react-icons/pi';
import { BiWorld } from 'react-icons/bi';
import Link from 'next/link';
import { countries, services } from '@/app/utils/ServiceCountry';
import { CiSearch } from 'react-icons/ci';

const Table = () => {
  const [service, setService] = useState(false);
  const [country, setCountry] = useState(true);
  const handleService = () => {
    setService(true);
    setCountry(false);
  };
  const handleCountry = () => {
    setCountry(true);
    setService(false);
  };

  return (
    <div className="relative">
      <div className="container relative z-20">
        <div className="flex items-center justify-center gap-10">
          <div
            onClick={handleService}
            className={`flex items-center justify-center gap-2 font-medium cursor-pointer pb-3 ${
              service
                ? 'text-orange-500 border-b-4 border-orange-500 rounded-md'
                : ''
            }`}
          >
            <PiBuildingApartmentFill className=" text-xl" />
            <h2 className="text-xl ">Service</h2>
          </div>
          <div
            onClick={handleCountry}
            className={`flex items-center justify-center gap-2 font-medium cursor-pointer pb-3 ${
              country
                ? 'text-orange-500 border-b-4 border-orange-500 rounded-md'
                : ''
            }`}
          >
            <BiWorld className=" text-xl" />
            <h2 className="text-xl ">Country</h2>
          </div>
        </div>
        {country && (
          <div className="bg-white rounded-[30px] border border-gray-300 p-4 lg:p-24 max-lg:mx-4">
            <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3">
              {countries.map((country, index) => {
                const isLastRow = index >= countries.length - 3;
                const isLastInRow = (index + 1) % 3 === 0;

                return (
                  <Link
                    key={country.title}
                    href={`/country/${country.href}`}
                    className={`
                flex items-center gap-4 p-6 py-7
                hover:bg-gray-50 transition-colors
                ${!isLastRow ? 'border-b' : ''}
                ${!isLastInRow ? 'md:border-r' : ''}
                border-gray-200
              `}
                  >
                    <div className="w-8 h-8 flex items-center">
                      <img src={country.image} alt="" />
                    </div>
                    <span className="text-gray-900 text-lg">
                      {country.title}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
        {service && (
          <div className="bg-white rounded-2xl p-4 lg:p-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const isLastRow = index >= services.length - 3;
                const isLastInRow = (index + 1) % 3 === 0;

                return (
                  <Link
                    key={service.href}
                    href={`/service/${service.href}`}
                    className={`
                flex items-center gap-4 p-6 py-7
                hover:bg-gray-50 transition-colors
                ${!isLastRow ? 'border-b' : ''}
                ${!isLastInRow ? 'md:border-r' : ''}
                border-gray-200
              `}
                  >
                    <div className="w-8 h-8 flex items-center">
                      <img src={service.image} alt="" />
                    </div>
                    <span className="text-gray-900 text-lg">
                      {service.title}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <div className="bg-white h-[600px] w-full md:p-44 absolute -bottom-40 flex items-center justify-center">
        <div className="flex flex-col gap-3 items-center justify-center text-center ">
          <Link
            href={'/'}
            className="flex items-center gap-2 p-4 mt-[450px] border border-orange-500 text-orange-500 rounded-lg hover:shadow-lg"
          >
            <CiSearch className="text-orange-500" />
            <span>Search for more</span>
          </Link>
          <p className="text-gray-500 lg:w-[95%]">
            You will be able to view the price per action after selecting the
            service and country
          </p>
        </div>
      </div>
    </div>
  );
};

export default Table;
