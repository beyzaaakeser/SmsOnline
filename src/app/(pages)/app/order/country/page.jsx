'use client';

import { useAppContext } from '@/app/redux/AppProvider';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Loading from '@/app/loading';
import Title from '@/app/components/SectionsTitle';
import ProgressBar from '../../components/ProgressBar';

export default function CountryList() {
  const { state, setState } = useAppContext();
  const router = useRouter();

  // ... diğer kodlar aynı kalacak ...

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSelect = (country) => {
    setState((prev) => ({ ...prev, country }));
    router.push('/app/order/activation');
  };

  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await fetch('/api/proxy');
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
                flag: flagData[0]?.flags?.png || '/images/no-flag.png',
              };
            } catch (error) {
              return { ...country, flag: '/images/no-flag.png' };
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

  if (loading) return <Loading />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <Title
        title={'Country'}
        info={'Please choose number country'}
        titleDesign={'lg:text-3xl'}
      />

      <ProgressBar title={'Steps 2/3'} designs={'w-2/3'} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {countries.map((country) => (
          <div
            key={country.id}
            className="border p-4 rounded-lg hover:bg-gray-50 cursor-pointer"
            onClick={() => handleSelect(country)}
          >
            <div className="flex items-center gap-4">
              {country.flag && (
                <Image
                  src={country.flag}
                  alt={country.title}
                  width={60}
                  height={40}
                  className="object-cover rounded"
                />
              )}
              <div>
                <h3 className="font-semibold text-lg">{country.title}</h3>
                <p className="text-gray-500">Kod: {country.code}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
