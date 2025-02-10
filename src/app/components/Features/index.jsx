import React from 'react';
import FeatureCard from './FeatureCard';
import { featuresCard } from '@/app/utils/FeatureCard';

const Features = () => {
  return (
    <div className="my-20">
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-5xl font-semibold">Features</h2>
        <p className="text-gray-500 w-[380px] lg:w-[600px] text-center ">
          Temp Number offers short-term usage phone numbers from different
          countries to receive SMS messages at fair and affordable prices
        </p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        {featuresCard.map((card, index) => (
          <FeatureCard key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Features;
