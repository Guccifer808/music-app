import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { motion } from 'framer-motion';

const Feature = ({ icon, title }) => {
  //animation
  const [elementIsVisible, setElementIsVisible] = useState(false);
  //
  const variants = {
    true: {
      transform: 'scale(1)',
    },
    false: {
      transform: 'scale(0.5)',
    },
  };
  return (
    <VisibilitySensor onChange={(isVisible) => setElementIsVisible(isVisible)}>
      <div className='feature flex flex-col items-center justify-center text-center mx-12 relative'>
        {/* icon */}
        <motion.div
          transform={{ duration: 1, type: 'ease-out' }}
          variants={variants}
          animate={`${elementIsVisible}`}
          className='icon bg-[#081730] rounded-3xl p-4'
        >
          <img
            src={`../src/assets/images/${icon}`}
            alt='feature icon'
            className='w-[3rem]'
          />
        </motion.div>
        {/* title and desc */}
        <span className='mt-5'>{title}</span>
        <span className='text-[#707070] mt-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, eaque
          delectus!
        </span>
        {/* learn more */}
        <span className='text-[#E600FF] underline hover:cursor-pointer mt-[3rem]'>
          Learn More
        </span>
      </div>
    </VisibilitySensor>
  );
};

export default Feature;
