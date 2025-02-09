import React from 'react';

const Inputs2 = ({ input }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        {input.image}
        <h2 className="text-[14px] font-semibold">{input.title}</h2>
      </div>
      <p className="pl-6 text-gray-500 text-[12px]">{input.desc}</p>
    </div>
  );
};

export default Inputs2;
