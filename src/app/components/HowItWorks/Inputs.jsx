import React from 'react';
import { RiInboxArchiveLine } from 'react-icons/ri';


const Inputs = ({input}) => {
  return (
    <div className="flex flex-col gap-2  bg-white rounded-lg p-4 w-[250px] ">
      <div className="flex items-center gap-2">
        {input.image}
        <h2 className="text-[14px] font-semibold">{input.title}</h2>
      </div>
      <div>
        <div className="pl-10">
          <ul className="text-gray-500 text-[12px]">
            <li className="list-disc pr-10">{input.list1}</li>
            <li className="list-disc">{input.list2}</li>
            <li className="list-disc">{input.list3}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
