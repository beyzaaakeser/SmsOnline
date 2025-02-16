import { memo } from 'react';
import { FaCheck } from 'react-icons/fa';
import './ServiceItem.css';

const ServiceItem = memo(({ item, selectedService, onSelect, designs, imgDesigns }) => {
  const isSelected = selectedService?.id === item?.id;

  return (
    <li
      className="flex items-center cursor-pointer border rounded-xl p-3 px-4 max-w-[450px] "
      onClick={() => onSelect(item)}
    >
      {item?.logo ? (
        <div className={`w-[50px] ${designs} `}>
          <img src={item.logo} alt={item.logo} className={`w-8 h-8 ${imgDesigns}`} />
        </div>
      ) : (
        <div className="w-[50px]">
          <div className="size-[32px] rounded-full bg-blue-400 "></div>
        </div>
      )}

      <div className="flex items-center justify-between w-full">
        <div>{item?.title}</div>
        <div className={`radio-box ${isSelected ? 'selected' : ''}`}>
          {isSelected && <FaCheck className="check-icon text-xs" />}
        </div>
      </div>
    </li>
  );
});

export default ServiceItem;
