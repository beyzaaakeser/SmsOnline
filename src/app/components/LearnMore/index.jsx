import { learnCards } from '@/app/utils/LearnMore';
import Link from 'next/link';
import React from 'react';
import { IoMdArrowDropright } from 'react-icons/io';
import Button from '../Button';
import Title from '../SectionsTitle';

const LearnMore = () => {
  return (
    <div className="bg-gray-100 py-32">
      <div className="container">

        <Title
          title={'Learn more'}
          info={`These articles provide information on receiving SMS messages with
            disposable numbers`}
          containerDesign={'pb-20'}
          infoDesign={'lg:w-[850px]'}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-2 lg:grid-cols-3 place-items-center">
          {learnCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl max-w-[370px] cursor-pointer"
            >
              <img src={card.image} alt={card.title} className="w-full" />
              <div className="flex flex-col gap-4 mt-2 p-6">
                <h2 className="text-xl font-semibold">{card.title}</h2>
                <p className="text-gray-500 pr-4 h-[60px]">{card.desc}</p>
                <Link
                  href={'/'}
                  className="text-orange-500 flex gap-4 items-center"
                >
                  Read more <IoMdArrowDropright />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-20">
          <Button title="Visit blog" designs={'w-[160px] rounded-[15px]'} />
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
