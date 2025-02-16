'use client';
import { useAppContext } from '@/app/redux/AppProvider';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import ServiceItem from './components/ServiceItem';
import Title from '@/app/components/SectionsTitle';
import Loading from '@/app/loading';
import { CiSearch } from 'react-icons/ci';
import ProgressBar from './components/ProgressBar';
import { appServices } from '@/app/utils/AppService';

export default function ServiceList() {
  const { setState } = useAppContext();
  const router = useRouter();

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

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

  console.log(services);

  if (loading) return <Loading />;
  if (error) return <p>Error: {error}</p>;

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
        />
      </div>

      <div>
        {!isSearchFocused && (
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
        )}

        {isSearchFocused && (
          <ul className="flex flex-col gap-4 mx-auto max-w-[500px]">
            {services.map((service) => (
              <ServiceItem
                key={service.id}
                service={service}
                selectedService={selectedService}
                onSelect={setSelectedService}
              />
            ))}
          </ul>
        )}
      </div>

      <button onClick={handleSelectService} disabled={!selectedService}>
        Continue
      </button>
    </div>
  );
}
