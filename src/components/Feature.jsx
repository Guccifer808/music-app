import React from 'react';

const Feature = ({ icon, title }) => {
  return (
    <div className='feature flex flex-col items-center justify-center text-center mx-12 relative'>
      {/* icon */}
      <div className='icon bg-[#081730] rounded-3xl p-4'>
        <img
          src={`../src/assets/images/${icon}`}
          alt='feature icon'
          className='w-[3rem]'
        />
      </div>
      {/* title and desc */}
      <span className='mt-5'>{title}</span>
      <span className='text-[#707070] mt-4'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </span>
      {/* learn more */}
      <span className='text-[#E600FF] underline hover:cursor-pointer mt-[3rem]'>
        Learn More
      </span>
    </div>
  );
};

export default Feature;
