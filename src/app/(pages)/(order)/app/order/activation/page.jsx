'use client';
import Title from '@/app/components/SectionsTitle';
import { useAppContext } from '@/app/redux/AppProvider';
import ProgressBar from '../../components/ProgressBar';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import { listenToAuthChanges } from '@/app/firebase/fetchUserData';

export default function ActivationPage() {
  const { state } = useAppContext();
  const [prices, setPrices] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [servicePrice, setServicePrice] = useState(null);
  const [user, setUser] = useState();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const unSub = listenToAuthChanges(setUser, setUserData);
    return () => unSub();
  }, []);

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
      const pricesArray = Object.values(prices);

      const priceForService = pricesArray.find(
        (price) => price.application_id === state.service.id
      );

      setServicePrice(priceForService);
      sessionStorage.setItem('servicePriceCost', priceForService.cost);

      if (!priceForService) {
        console.error('Price for the service not found:', state.service.id);
        setError('Price for the selected service is not available.');
      }
    }
  }, [prices, state.service?.id]);

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
            <div className="flex items-center">
              {state.country?.logo ? (
                <div className={`w-[50px] h-[32px] flex items-center `}>
                  <img
                    src={state.country?.logo}
                    alt={state.country?.logo}
                    className={`w-8 h-6 `}
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
        <div className="bg-gray-100/60 rounded-xl my-12  max-w-[320px] flex flex-col items-center justify-center mx-auto p-4 py-5">
          <div className="text-orange-500 text-3xl font-semibold">
            ${servicePrice?.cost}
          </div>
          <p className="text-gray-600 text-sm">Activation price</p>
        </div>
        <div className="flex flex-col items-center justify-center text-[10px]">
          <p className="text-gray-500">
            Need 100+ Activation's and API Access?
          </p>
          <p className="text-orange-500">Contact Us</p>
        </div>
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
          <Link
            href={user ? '/app/funds' : '/app/create-account'}
            className={`flex items-center gap-3 justify-center px-8 py-3 cursor-pointer bg-orange-500 text-white border border-orange-500 hover:shadow-xl w-[200px] sm:w-[250px] text-center rounded-xl`}
          >
            <span>Activate</span> <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </div>
  );
}
