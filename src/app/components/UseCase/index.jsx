import { useCase } from '@/app/utils/UseCase';
import React from 'react';
import UseCard from './UseCard';
import './useCase.css';
import Title from '../SectionsTitle';

const UseCase = () => {
  return (
    <div className="bg-gray-100 py-40">
      <Title
        title={'Use Case'}
        info={'Check out some popular use cases of Temp Number'}
        containerDesign={'pb-20'}
      />
      <div className="container flex md:grid md:grid-cols-2 sm:gap-10 scrollCard">
        {useCase.map((item, index) => (
          <UseCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default UseCase;
