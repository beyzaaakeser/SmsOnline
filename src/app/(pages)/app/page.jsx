'use client';
import { useAppContext } from '@/app/redux/AppProvider';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import ServiceItem from './components/ServiceItem';
import Title from '@/app/components/SectionsTitle';
import { CiSearch } from 'react-icons/ci';
import ProgressBar from './components/ProgressBar';
import { appServices } from '@/app/utils/AppService';
import { FaArrowRightLong } from 'react-icons/fa6';
import './ServiceCountry.css';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default function ServiceList() {
  const { setState } = useAppContext();
  const router = useRouter();

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await fetch('/api/proxy?type=services');
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        setServices(Object.values(data));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchServices();
  }, []);

  const handleSelectService = useCallback(() => {
    if (selectedService) {
      setState((prev) => ({ ...prev, service: selectedService }));
      router.push('/app/order/country');
    }
  }, [selectedService, setState, router]);

  const filteredServices = services.filter((service) =>
    service?.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
  );

  return (
    <div className="container py-14 min-h-screen">
      <Title
        title={'Service'}
        info={'Please choose website or app name'}
        titleDesign={'lg:text-3xl'}
      />

      <ProgressBar title={'Steps 1/3'} designs={'w-1/3'} />

      <div className="h-16 border max-w-[550px] rounded-xl flex items-center mx-auto bg-gray-100 px-5 mb-8">
        <CiSearch className="text-2xl" />
        <input
          type="search"
          placeholder="Search"
          className="p-4 w-full bg-gray-100 rounded-xl focus:outline-none"
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div>
        {debouncedSearchQuery ? (
          <ul className="flex flex-col gap-2 max-w-[550px] mx-auto overflow-y-auto max-h-[300px]   ">
            {filteredServices.map((item) => (
              <li className="flex items-center gap-2 border-b py-3">
                <div className="w-[50px]">
                  <div className="size-[32px] rounded-full bg-blue-400 "></div>
                </div>
                {item.title}
              </li>
            ))}
          </ul>
        ) : !isSearchFocused ? (
          <ul className="flex flex-col gap-4 mx-auto max-w-[450px]">
            {appServices.map((item) => (
              <ServiceItem
                key={item.id}
                item={item}
                selectedService={selectedService}
                onSelect={setSelectedService}
              />
            ))}
          </ul>
        ) : null}
      </div>

      <div className="fixed bottom-0 left-0 py-4 p right-0 w-full bg-white shadow-2xl">
        <div className="flex items-center gap-4 justify-end pr-40 ">
          {selectedService && (
            <button
              onClick={() => setSelectedService(null)}
              className={
                'bg-white text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white hover:shadow-xl w-[150px] py-3 text-center rounded-xl'
              }
            >
              Cancel
            </button>
          )}
          <button
            onClick={handleSelectService}
            disabled={!selectedService}
            className={` flex items-center gap-3 justify-center px-8 py-3 cursor-pointer bg-orange-500 text-white border border-orange-500 hover:shadow-xl w-[250px] text-center rounded-xl`}
          >
            Continue <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
}
