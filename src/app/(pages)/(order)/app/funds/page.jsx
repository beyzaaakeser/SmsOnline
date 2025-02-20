'use client';
import React, { useState } from 'react';

const Funds = () => {
  const [selected, setSelected] = useState(null);

  const paymentMethods = [
    { id: 'visa', src: '/images/visa.svg', alt: 'visa card' },
    { id: 'btc', src: '/images/btc.svg', alt: 'btc' },
    { id: 'payeer', src: '/images/payeer.svg', alt: 'payeer' },
    { id: 'yoo', src: '/images/yoo.svg', alt: 'yoo money' },
    { id: 'binance', src: '/images/binance.svg', alt: 'binance' },
    { id: 'promo', src: '/images/promoCode.svg', alt: 'promo code' },
  ];

  return (
    <div className="container py-8 max-lg:px-4">
      <div className="flex gap-12">
        <div className="flex flex-col gap-8 w-full sm:w-2/3">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-semibold">Add Funds</h2>
            <p className="text-gray-500">
              Additional fees and taxes may apply depending on your location
            </p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,_100px)] sm:grid-cols-[repeat(auto-fill,_165px)] gap-y-6 gap-x-3">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className={`border p-4 flex items-center justify-center w-full sm:w-[165px] h-[56px] sm:h-[95px] rounded-2xl cursor-pointer transition-all ${
                  selected === method.id ? 'border-orange-500 border-2' : ''
                }`}
                onClick={() => setSelected(method.id)}
              >
                <img src={method.src} alt={method.alt} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-1/3 max-sm:hidden">
          <div className="flex flex-col justify-center items-center bg-gray-100 rounded-3xl w-full h-[200px]">
            <div className="flex items-center gap-2">
              <img src="/images/money-bag.svg" alt="" />
              <span className="text-xl md:text-2xl lg:text-4xl font-semibold">
                $0.00
              </span>
            </div>
            <p className="text-xl">Credits Balance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;
