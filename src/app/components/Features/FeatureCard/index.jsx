import React from 'react';

const FeatureCard = ({ card }) => {
  return (
    <div className="w-full max-w-[400px] h-[500px] flex flex-col relative border rounded-xl mt-20 mx-auto">
      <div className="w-full flex flex-[8]">
        <img src={card.image} alt="" className="absolute -top-16" />
      </div>
      <div className="text-center flex flex-col flex-[4] gap-4 p-4 pt-0">
        <h2 className="text-2xl">{card.title}</h2>
        <p className="text-gray-500">{card.desc}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
