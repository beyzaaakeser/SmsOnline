import React from 'react';
import FeatureCard from './FeatureCard';
import { featuresCard } from '@/app/utils/FeatureCard';
import Title from '../SectionsTitle';

const Features = () => {
  return (
    <div className="my-20">
      <Title
        title={'Features'}
        info={
          'Temp Number offers short-term usage phone numbers from different countries to receive SMS messages at fair and affordable prices'
        }
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 px-4">
        {featuresCard.map((card, index) => (
          <FeatureCard key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Features;
