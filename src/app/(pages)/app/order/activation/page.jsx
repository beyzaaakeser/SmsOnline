'use client';
import Title from '@/app/components/SectionsTitle';
import { useAppContext } from '@/app/redux/AppProvider';
import ProgressBar from '../../components/ProgressBar';
import { useEffect, useState } from 'react';

export default function ActivationPage() {
  const { state } = useAppContext();
  const [prices, setPrices] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [servicePrice, setServicePrice] = useState(null);

  useEffect(() => {
    if (state.country?.id) {
      fetchPrices(state.country.id);
    }
  }, [state.country?.id]);

  const fetchPrices = async (countryId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `/api/proxy?type=prices&country_id=${state.country.id}`
      );
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data = await response.json();
      setPrices(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (prices && state.service?.id) {
      // prices bir obje ise, içindeki değerleri bir diziye dönüştür
      const pricesArray = Object.values(prices);

      // Dizi içinde uygulama ID'sine göre fiyatı bul
      const priceForService = pricesArray.find(
        (price) => price.application_id === state.service.id
      );

      // Bulunan fiyatı state'e kaydet
      setServicePrice(priceForService);

      // Eğer fiyat bulunamazsa hata mesajı göster
      if (!priceForService) {
        console.error('Price for the service not found:', state.service.id);
        setError('Price for the selected service is not available.');
      }
    }
  }, [prices, state.service?.id]);

  console.log(state);
  console.log(prices);
  console.log(servicePrice);

  return (
    <div className="container flex flex-col items-center py-14 max-sm:px-4 min-h-screen">
      <Title
        title={'All set'}
        info={'Activate your number now'}
        titleDesign={'lg:text-3xl'}
      />
      <div className="flex w-full items-center justify-center">
        <ProgressBar title={'Steps 3/3'} designs={'w-3/3'} />
      </div>

      <div className=" ">
        <ul className="flex flex-col items-center gap-4 ">
          <li className="flex items-center cursor-pointer border rounded-xl p-3 px-4 w-[380px] max-w-[450px] ">
            <div>
              {state.service?.logo ? (
                <div className={`w-[50px] `}>
                  <img
                    src={state.service?.logo}
                    alt={state.service?.logo}
                    className={`w-8 h-8 `}
                  />
                </div>
              ) : (
                <div className="w-[50px]">
                  <div className="size-[32px] rounded-full bg-blue-400 "></div>
                </div>
              )}
            </div>
            <div>{state.service?.title}</div>
          </li>
          <li className="flex items-center cursor-pointer border rounded-xl p-3 px-4 w-[380px] max-w-[450px] ">
            <div>
              {state.country?.logo ? (
                <div className={`w-[50px] `}>
                  <img
                    src={state.country?.logo}
                    alt={state.country?.logo}
                    className={`w-8 h-8 `}
                  />
                </div>
              ) : (
                <div className="w-[50px]">
                  <div className="size-[32px] rounded-full bg-blue-400 "></div>
                </div>
              )}
            </div>
            <div>{state.country?.title}</div>
          </li>
        </ul>
        <div>{servicePrice?.cost}</div>
      </div>
    </div>
  );
}
