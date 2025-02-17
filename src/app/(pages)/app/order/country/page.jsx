'use client';

import { useAppContext } from '@/app/redux/AppProvider';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import Loading from '@/app/loading';
import Title from '@/app/components/SectionsTitle';
import ProgressBar from '../../components/ProgressBar';
import { CiSearch } from 'react-icons/ci';
import { appCountries } from '@/app/utils/AppCountry';
import ServiceItem from '../../components/ServiceItem';
import { FaArrowRightLong } from 'react-icons/fa6';
import Link from 'next/link';
import '../../ServiceCountry.css';
import ListItem from '../../components/ListItem';

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

export default function CountryList() {
  const { state, setState } = useAppContext();
  const router = useRouter();
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    const savedCountry = sessionStorage.getItem('selectedCountry');
    if (savedCountry) {
      setSelectedCountry(JSON.parse(savedCountry));
    }
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      sessionStorage.setItem(
        'selectedCountry',
        JSON.stringify(selectedCountry)
      );
    } else {
      sessionStorage.removeItem('selectedCountry');
    }
  }, [selectedCountry]);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await fetch('/api/proxy?type=countries');
        if (!response.ok)
          throw new Error(`API request failed: ${response.status}`);
        const data = await response.json();

        const countriesWithFlags = await Promise.all(
          Object.values(data).map(async (country) => {
            try {
              const flagResponse = await fetch(
                `https://restcountries.com/v3.1/alpha/${country.code.toLowerCase()}`
              );
              const flagData = await flagResponse.json();
              return {
                ...country,
                logo: flagData[0]?.flags?.png || '/images/no-flag.png',
              };
            } catch (error) {
              return { ...country, logo: '/images/no-flag.png' };
            }
          })
        );

        setCountries(countriesWithFlags);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCountries();
  }, []);

  const handleSelectCountry = useCallback(() => {
    if (state.service == null) router.push('/app');
    if (selectedCountry) {
      setState((prev) => ({ ...prev, country: selectedCountry }));
      router.push('/app/order/activation');
    }
    if (!selectedCountry) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }
  }, [selectedCountry, setState, router]);

  const filteredCountries = countries.filter((country) =>
    country?.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
  );

  if (loading) return <Loading />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container py-14 max-sm:px-4 min-h-screen relative">
      {showAlert && (
        <div className="absolute top-24 right-4 bg-orange-500 w-[300px] text-white text-center px-6 py-3 rounded-lg shadow-xl">
          Please choose a country.
        </div>
      )}
      <Title
        title={'Country'}
        info={'Please choose number country'}
        titleDesign={'lg:text-[32px]'}
      />

      <ProgressBar title={'Steps 2/3'} designs={'w-2/3'} />

      <div className="h-12 sm:h-16 border max-w-[550px] rounded-xl flex items-center mx-auto bg-gray-100 px-5 mb-8 gap-2">
        <CiSearch className="text-2xl" />
        <input
          type="search"
          placeholder="Search"
          className="h-full w-full bg-gray-100 rounded-xl focus:outline-none"
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div>
        {debouncedSearchQuery ? (
          <ul className="flex flex-col max-w-[550px] mx-auto overflow-y-auto max-h-[300px]   ">
            {filteredCountries.map((item) => (
              <ListItem
                key={item.id}
                item={item}
                selectedItem={selectedCountry}
                onSelect={setSelectedCountry}
                imgDesigns={'!h-6'}
              />
            ))}
          </ul>
        ) : !isSearchFocused ? (
          <ul className="flex flex-col gap-4 mx-auto max-w-[450px]">
            {appCountries.map((item) => (
              <ServiceItem
                designs={'w-[100px]'}
                imgDesigns={'w-8 h-6'}
                key={item.id}
                item={item}
                selectedService={selectedCountry}
                onSelect={setSelectedCountry}
              />
            ))}
          </ul>
        ) : null}
      </div>

      <div className="fixed bottom-0 left-0 py-4  right-0 w-full bg-white shadow-2xl">
        <div className="flex items-center gap-4 justify-end px-4 sm:pr-40 ">
          <Link
            href={'..'}
            className={
              'bg-white text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white hover:shadow-xl w-[150px] py-3 text-center rounded-xl'
            }
          >
            Back
          </Link>

          <button
            onClick={handleSelectCountry}
            className={` flex items-center gap-3 justify-center px-8 py-3 cursor-pointer bg-orange-500 text-white border border-orange-500 hover:shadow-xl w-[200px] sm:w-[250px] text-center rounded-xl`}
          >
            Continue <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
}
