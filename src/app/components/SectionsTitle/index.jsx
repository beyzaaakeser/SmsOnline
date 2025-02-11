import React from 'react';

const Title = ({ title, info, containerDesign, titleDesign, infoDesign }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-4 ${containerDesign} `}
    >
      <h2
        className={`text-3xl lg:text-5xl text-center font-semibold  ${titleDesign} `}
      >
        {title}
      </h2>
      <p
        className={`text-gray-500 lg:w-[600px] text-center px-5 ${infoDesign} `}
      >
        {info}
      </p>
    </div>
  );
};

export default Title;
