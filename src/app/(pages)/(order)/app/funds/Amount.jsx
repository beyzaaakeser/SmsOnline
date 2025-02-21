import React, { useState, useEffect } from 'react';
import './Amount.css';
import { AiOutlineDollar } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa6';
const Amount = ({ selected, setSelected, setAmount }) => {
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [isInputSelected, setIsInputSelected] = useState(false);
  const [customAmount, setCustomAmount] = useState('');

  const infos = [
    {
      id: 'visa',
      title: 'Credit cards • PayPal • GPay • Apple Pay • iDeal',
      prices: [5, 25, 50, 100],
      input: 'Enter Amount',
    },
    {
      id: 'btc',
      title: 'More than 100 most popular cryptocurrencies',
      prices: [25, 50, 100],
      input: 'Enter Amount',
    },
    {
      id: 'payeer',
      title: 'Payeer • AdvCash • PerfectMoney • Qiwi and more',
      prices: [5, 25, 50, 100],
      input: 'Enter Amount',
    },
    {
      id: 'yoo',
      title:
        'Russian banks cards (MIR, VISA), YooMoney, Perfect Money and others',
      prices: [5, 25, 50, 100],
      input: 'Enter Amount',
    },
    {
      id: 'binance',
      title: 'Binance Pay wallet with more than 70 cryptocurrencies',
      prices: [5, 25, 50, 100],
      input: 'Enter Amount',
    },
    {
      id: 'promo',
      title: 'Redeem promo codes',
      input: 'Enter Promo Code',
    },
  ];

  const selectedInfo = infos.find((info) => info.id === selected);

  useEffect(() => {
    setCustomAmount('');
    setSelectedPrice(null);
    setIsInputSelected(false);
    setAmount('');
  }, [selected, setAmount]);

  return (
    <div>
      {selectedInfo && (
        <div>
          <p className="text-gray-500 my-6 max-sm:text-sm" >{selectedInfo.title}</p>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,_112px)] gap-y-6 gap-x-3">
              {selectedInfo.prices?.map((price, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedPrice(price);
                    setIsInputSelected(false);
                    setCustomAmount('');
                    setAmount(price);
                  }}
                >
                  <div
                    className={`border rounded-2xl flex justify-between sm:justify-center items-center max-sm:px-5 py-5 text-xl font-medium cursor-pointer transition-all ${
                      selectedPrice === price ? 'border-orange-500' : ''
                    }`}
                  >
                    <div className="flex items-center gap-2 max-sm:text-sm">
                      <span className="sm:hidden">Buy</span> ${price}{' '}
                      <span className="sm:hidden">Credits</span>
                      <div className="sm:hidden">
                        {price === 25 && (
                          <div className="bg-yellow-400 text-gray-800 text-[10px] text-center rounded-md  mx-1  px-2">
                            Recommended
                          </div>
                        )}
                      </div>
                    </div>

                    <div
                      className={`radio-box  ${
                        selectedPrice === price ? 'selected' : ''
                      }`}
                    >
                      {selectedPrice === price && (
                        <FaCheck className="check-icon text-xs" />
                      )}
                    </div>
                  </div>
                  <div className="max-sm:hidden">
                    {' '}
                    {price === 25 && (
                      <div className="bg-yellow-400 text-gray-800 text-[10px] text-center rounded-md my-3 mx-1 py-2 px-2">
                        Recommended
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-center text-gray-500 h-8 sm:hidden">
                <span className="border-b-2 border-dashed w-[130px]"></span>
                <span className="px-2 text-sm">OR</span>
                <span className="border-b-2 border-dashed w-[130px]"></span>
              </div>
              <div
                className={`border h-[72px] rounded-2xl flex justify-center items-center text-lg w-full sm:w-[200px] transition-all ${
                  isInputSelected ? 'border-orange-500' : ''
                }`}
              >
                <input
                  type="number"
                  placeholder={selectedInfo?.input}
                  value={customAmount}
                  className="w-full rounded-2xl px-4 focus:outline-none no-spinner font-medium "
                  onFocus={() => {
                    setIsInputSelected(true);
                    setSelectedPrice(null);
                    setAmount('');
                  }}
                  onChange={(e) => {
                    const value = e.target.value;
                    setCustomAmount(value);
                    setAmount(value);
                  }}
                  onBlur={() => {
                    if (!selectedPrice && !customAmount)
                      setIsInputSelected(false);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 my-5">
            <button className="border border-orange-500 bg-orange-500 text-white py-4 px-10 sm:px-12 rounded-xl flex text-nowrap items-center gap-2 hover:shadow-xl">
              <AiOutlineDollar className="text-xl " /> Add Funds
            </button>
            <button
              onClick={() => setSelected(false)}
              className="border border-orange-500 bg-white text-orange-500 py-4 px-10 sm:px-12 rounded-xl hover:shadow-xl"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Amount;
