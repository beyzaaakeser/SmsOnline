import React from 'react';
import Table from '../ServiceCountryTable/Table';
import Title from '../SectionsTitle';

const AvailableServicesCountries = () => {
  return (
    <div className="bg-gray-100 pb-20">
      <Title
        title={'Available services and countries'}
        info={`It is possible to use temporary disposable numbers for SMS
          verification in different countries and for specific services`}
        containerDesign={'pb-20'}
        infoDesign={'lg:max-w-[850px]'}
      />
      <Table />
    </div>
  );
};

export default AvailableServicesCountries;
