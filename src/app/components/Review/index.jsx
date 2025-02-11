import { cards } from '@/app/utils/ReviewCard';
import React from 'react';
import Title from '../SectionsTitle';

const Review = () => {
  return (
    <div className="container">
      <Title
        title={'Our clients reviews'}
        containerDesign={"pb-20"}
        info={`  Over 100,000 paid customers rely on our services and counting....`}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-[600px] px-3 sm:px-2">
        {cards.map((card, index) => (
          <div key={card.image} className="border rounded-3xl p-8">
            <div className="border-b flex items-center gap-8 pb-8">
              <div className="rounded-full  bg-gray-100 size-[50px] flex justify-center items-center">
                <img src={card.image} alt={card.title} width={30} />
              </div>
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold">{card.title}</h2>
                <p className="text-gray-500">{card.info}</p>
              </div>
            </div>
            <div className="flex flex-col gap-10 py-8">
              <div className=" text-[14px] flex flex-col gap-10">
                {card.desc.map((item, index) => (
                  <div key={item.link} className="flex flex-col gap-2">
                    <p className="text-yellow-500 flex gap-1 text-lg">
                      {item?.stars}
                    </p>
                    <p className="text-gray-500">{item.text}</p>
                    <p className="text-blue-500">{item.link}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
