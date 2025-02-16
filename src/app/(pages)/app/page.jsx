'use client';
import { useAppContext } from '@/app/redux/AppProvider';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import ServiceItem from './components/ServiceItem';
import Title from '@/app/components/SectionsTitle';
import { CiSearch } from 'react-icons/ci';
import ProgressBar from './components/ProgressBar';
import { appServices } from '@/app/utils/AppService';

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
    <div className="container py-14">
      <Title
        title={'Service'}
        info={'Please choose website or app name'}
        titleDesign={'lg:text-3xl'}
      />

      <ProgressBar title={'Steps 1/3'} designs={'w-1/3'} />

      <div className="h-16 border max-w-[650px] rounded-xl flex items-center mx-auto bg-gray-100 px-5 mb-8">
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
          <ul className="flex flex-col gap-4 mx-auto max-w-[500px]">
            {filteredServices.map((service) => (
              <ServiceItem
                key={service.id}
                service={service}
                selectedService={selectedService}
                onSelect={setSelectedService}
              />
            ))}
          </ul>
        ) : !isSearchFocused ? (
          <ul className="flex flex-col gap-4 mx-auto max-w-[500px]">
            {appServices.map((service) => (
              <ServiceItem
                key={service.id}
                service={service}
                selectedService={selectedService}
                onSelect={setSelectedService}
              />
            ))}
          </ul>
        ) : null}
      </div>

      <button
        onClick={handleSelectService}
        disabled={!selectedService}
        className={`mt-8 mx-auto block px-8 py-3 rounded-lg ${
          selectedService
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        Continue
      </button>
    </div>
  );
}
