import { services } from '@/app/utils/ServiceCountry';
import React from 'react';
import './service.css';
import Table from '@/app/components/ServiceCountryTable/Table';

const page = async ({ params }) => {
  const { href } = await params;
  const service = services.find((c) => c.href === params.href);
  if (!service) {
    return <div>Service not found</div>;
  }
  return (
    <div className="container min-h-screen">
      <div className="flex max-lg:flex-col pt-6 min-h-[65vh]">
        <div className="flex flex-col lg:flex-[5] justify-evenly max-lg:text-center">
          <div className="flex flex-col gap-4 pr-4 ">
            <h2 className="text-4xl font-semibold max-lg:px-10 ">
              Temp Number for{' '}
              <br />
              <span className="text-orange-500 text-2xl ">{service.title}</span>
            </h2>
            <p className="text-gray-600 text-[clamp(1.1rem,1vw,2rem)] max-lg:px-4 pr-4">
              Create a {service.title} account without providing your real
              number using temporary real-sim numbers. You can keep your private
              number secure by using a Temp Number to receive verification SMS
              messages online from {service.title}
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

      <div className="container flex flex-col lg:flex-row  bg-gray-100 text-gray-500 my-24 p-12 px-12 text-[13px]  rounded-3xl  gap-10">
        <div className="flex border p-4 rounded-xl w-[150px] h-[80px] ">
          <img
            src={service.image}
            alt={service.title}
            className=" object-fill "
          />
        </div>
        <div className="flex flex-col gap-4 ">
          <h2 className="text-2xl text-black font-semibold">
            What is {service.title} ?
          </h2>
          <p className="text-[16px]">{service.desc}</p>
        </div>
      </div>

      <div className="pb-20">
        <div className="flex flex-col justify-center items-center gap-4 mb-20">
          <h2 className="text-3xl lg:text-5xl text-center font-semibold">
            Popular services in {service.title}
          </h2>
          <p className="text-gray-500 lg:max-w-[850px] text-center px-5">
            There are temporary phone numbers for {service.title} in many
            countries. Choose a country to receive SMS from or search for more
          </p>
        </div>
        <Table />
      </div>
      <div className="h-[250px]"></div>
    </div>
  );
};

export default page;
