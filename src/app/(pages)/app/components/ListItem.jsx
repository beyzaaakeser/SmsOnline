import React from 'react';
import { FaCheck } from 'react-icons/fa6';
import './ServiceItem.css';

const ListItem = ({ item, selectedItem, onSelect }) => {
  const isSelected = selectedItem?.id === item?.id;
  return (
    <li
      onClick={() => onSelect(item)}
      className="flex items-center justify-between border-b py-3  px-2 cursor-pointer hover:bg-gray-50 capitalize"
    >
      <div className="flex">
        <div className="w-[50px]">
          <div className="size-[32px] rounded-full bg-blue-400 "></div>
        </div>
        <div> {item.title}</div>
      </div>

      <div className="">
        {isSelected && <FaCheck className="check-icon text-lg text-blue-500" />}
      </div>
    </li>
  );
};

export default ListItem;
