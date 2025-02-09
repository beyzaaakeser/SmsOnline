import React from 'react';
import Table from '../ServiceCountryTable/Table';

const AvailableServicesCountries = () => {
  return (
    <div className="bg-gray-100 pb-20">
      <div className="flex flex-col justify-center items-center gap-4 mb-20">
        <h2 className="text-3xl lg:text-5xl text-center font-semibold">
          Available services and countries
        </h2>
        <p className="text-gray-500 lg:max-w-[850px] text-center px-5">
          It is possible to use temporary disposable numbers for SMS
          verification in different countries and for specific services
        </p>
      </div>
      <Table/>
    </div>
  );
};

export default AvailableServicesCountries;
