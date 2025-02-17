import React, { memo } from 'react';
import { FaCheck } from 'react-icons/fa6';
import './ServiceItem.css';

const ListItem = memo(
  ({ item, selectedItem, onSelect, designs, imgDesigns }) => {
    const isSelected = selectedItem?.id === item?.id;
    return (
      <li
        onClick={() => onSelect(item)}
        className="flex items-center justify-between border-b py-3  px-2 cursor-pointer hover:bg-gray-50 capitalize"
      >
        <div className="flex">
          {item?.logo ? (
            <div className={`w-[50px] ${designs} `}>
              <img
                src={item.logo}
                alt={item.logo}
                className={`w-8 h-8 ${imgDesigns}`}
              />
            </div>
          ) : (
            <div className="w-[50px]">
              <div className="size-[32px] rounded-full bg-blue-400 "></div>
            </div>
          )}

          <div> {item.title}</div>
        </div>

        <div className="">
          {isSelected && (
            <FaCheck className="check-icon text-lg text-blue-500" />
          )}
        </div>
      </li>
    );
  }
);

export default ListItem;
