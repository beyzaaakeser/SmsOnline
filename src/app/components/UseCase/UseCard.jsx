import React from 'react';

const UseCard = ({ item }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-12 min-w-[380px] max-sm:mx-2 bg-white rounded-3xl p-12">
      <div>
        <img src={item.image} alt="" className="w-[100px]" />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-medium">{item.title}</h2>
        <p className="text-gray-500">{item.desc}</p>
      </div>
    </div>
  );
};

export default UseCard;
