import { memo } from 'react';
import { FaCheck } from 'react-icons/fa';
import './ServiceItem.css';

const ServiceItem = memo(({ service, selectedService, onSelect }) => {
  const isSelected = selectedService?.id === service.id;

  return (
    <li
      className="flex items-center cursor-pointer border rounded-xl p-3 px-4 max-w-[450px] "
      onClick={() => onSelect(service)}
    >
      {service.logo ? (
        <div className='w-[50px]'>
          <img src={service.logo} alt={service.logo} className='size-8' />
        </div>
      ) : (
        <div className="w-[50px]">
          <div className="size-[32px] rounded-full bg-blue-400 "></div>
        </div>
      )}

      <div className="flex items-center justify-between w-full">
        <div>{service.title}</div>
        <div className={`radio-box ${isSelected ? 'selected' : ''}`}>
          {isSelected && <FaCheck className="check-icon text-xs" />}
        </div>
      </div>
    </li>
  );
});

export default ServiceItem;
