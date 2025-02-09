import { countries } from '@/app/utils/ServiceCountry';
import React from 'react';
import './country.css';
import Table from '@/app/components/ServiceCountryTable/Table';

const page = async ({ params }) => {
  const { href } = await params;
  const country = countries.find((c) => c.href === params.href);

  if (!country) {
    return <div>Country not found</div>;
  }
  return (
    <div className="container min-h-screen">
      <div className="flex max-lg:flex-col pt-6 min-h-[65vh]">
        <div className="flex flex-col lg:flex-[5] justify-evenly max-lg:text-center">
          <div className="flex flex-col gap-4 pr-4 ">
            <h2 className="text-4xl font-semibold max-lg:px-10 ">
              Temp Number in{' '}
              <br />
              <span className="text-orange-500  text-3xl ">{country.title}</span>
            </h2>
            <p className="text-gray-600 text-[clamp(1.1rem,1vw,2rem)] max-lg:px-4 pr-4">
              Need a temporary number in {country.title}? Let us take care of
              it! With our service, you get a number in {country.title} you can
              use to receive SMS messages. This could be for registering for a
              website, mobile apps or just keeping your phone number private
            </p>
          </div>
        </div>
        <div className="flex  flex-col lg:flex-[7] gap-8">
          <div className="relative w-full h-full ">
            <div className="absolute bg-gray-200 circle1 opacity-50 z-0 max-lg:hidden"></div>
            <div className="absolute bg-gray-400 circle2 opacity-50 z-0 max-lg:hidden"></div>

            <div className=" w-full h-full inset-0 flex justify-center items-center relative z-10">
              <video src="/images/video.webm"></video>
            </div>
          </div>
        </div>
      </div>

      <div className="container  flex flex-col lg:flex-row  bg-gray-100 text-gray-500 my-24 p-12 px-12 text-[13px]  rounded-3xl  gap-10">
        <div className="flex border p-4 rounded-xl w-[150px] h-[80px] ">
          <img
            src={country.image}
            alt={country.title}
            className=" object-fill "
          />
        </div>
        <div className="flex flex-col gap-4 ">
          <h2 className="text-2xl text-black font-semibold">
            About {country.title}
          </h2>
          <p className="text-[16px]">{country.desc}</p>
        </div>
      </div>

      <div className="pb-20">
        <div className="flex flex-col justify-center items-center gap-4 mb-20">
          <h2 className="text-3xl lg:text-5xl text-center font-semibold">
            Popular services in {country.title}
          </h2>
          <p className="text-gray-500 lg:max-w-[850px] text-center px-5">
            You can get temporary phone numbers in {country.title} for websites, apps,
            and internet services. Find a Temp Number to receive SMS from a
            specific service or search for more
          </p>
        </div>
        <Table />
      </div>
      <div className='h-[250px]'></div>
    </div>
  );
};

export default page;
