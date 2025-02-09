'use client';
import { questions } from '@/app/utils/Questions';
import React, { useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa6';

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" p-4 lg:px-36 space-y-4">
      {questions.map((question, index) => (
        <div
          key={index}
          className="border rounded-3xl p-8 cursor-pointer overflow-hidden"
          onClick={() => toggleAnswer(index)}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">{question.title}</h2>
            <div>
              {activeIndex === index ? (
                <div className="flex items-center gap-3 text-xl text-orange-500">
                  <span className='max-md:hidden'>Close</span>
                  <FaArrowUp className="transform transition-transform duration-300" />
                </div>
              ) : (
                <div className="flex items-center gap-3 text-xl text-orange-500">
                  <span className='max-md:hidden'>Read answer</span>
                  <FaArrowDown className="transform transition-transform duration-300" />
                </div>
              )}
            </div>
          </div>
          <div
            className={`grid transition-all duration-300 ease-in-out ${
              activeIndex === index
                ? 'grid-rows-[1fr] opacity-100 mt-3'
                : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden">
              <p className="text-gray-500">{question.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Questions;
