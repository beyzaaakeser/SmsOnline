import { useCase } from '@/app/utils/UseCase';
import React from 'react';
import UseCard from './UseCard';
import "./useCase.css"

const UseCase = () => {
  return (
    <div className="bg-gray-100 py-40">
      <div className="flex flex-col justify-center items-center gap-4 mb-20">
        <h2 className="text-3xl lg:text-5xl text-center font-semibold">
          Use Case
        </h2>
        <p className="text-gray-500 lg:w-[600px] text-center px-5">
          Check out some popular use cases of Temp Number
        </p>
      </div>
      <div className="container flex md:grid md:grid-cols-2 gap-10 scrollCard">
        {useCase.map((item,index) => <UseCard key={index} item={item} />)}
      </div>
    </div>
  );
};

export default UseCase;
