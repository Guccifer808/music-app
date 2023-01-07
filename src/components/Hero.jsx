import DownloadApps from './DownloadApps';
import bgGraphics from '../assets/images/bgGraphics.png';
import detail1 from '../assets/images/detail1.png';
import detail2 from '../assets/images/detail2.png';
import detail3 from '../assets/images/detail3.png';
import detail4 from '../assets/images/detail4.png';
import React, { useState } from 'react';
import ReactVisibilitySensor from 'react-visibility-sensor';
import { motion } from 'framer-motion';

const Hero = () => {
  //animation
  // changes left position depending on element state
  const [elementIsVisible, setElementIsVisible] = useState(false);
  const bgVariants = {
    true: {
      left: '8rem',
    },
    false: {
      left: '19rem',
    },
  };
  const musicPlayerVariants = {
    true: {
      left: '295px',
    },
    false: {
      left: '235px',
    },
  };
  const rectVariants = {
    true: {
      left: '11rem',
    },
    false: {
      left: '13rem',
    },
  };
  const heartVariants = {
    true: {
      left: '9rem',
    },
    false: {
      left: '12.5rem',
    },
  };

  return (
    <ReactVisibilitySensor
      onChange={(isVisible) => setElementIsVisible(isVisible)}
      minTopValue={400}
    >
      <div
        className='wrapper flex bg-[#081730] items-center justify-between 
        px-[6rem] rounded-b-[5rem] w-full h-[35rem] relative z-[3]'
      >
        {/* left */}
        <div className='headings flex flex-col items-start justify-center h-full text-[3rem] px-6'>
          <span>Discover The</span>
          <span>
            <b>Future Of Music</b>
          </span>
          <span className='text-[1rem] text-[#525D6E]'>
            Music App is an ultramodern and stylish music application
            <br />
            with a millions of users worldwide
          </span>
          {/* download */}
          <div>
            <span className='text-[13px]'>Download for IOS and Android</span>
            <DownloadApps />
          </div>
        </div>
        {/* right */}
        <div className='images relative w-[50%]'>
          <motion.img
            transition={{ duration: 1, type: 'ease-out' }}
            variants={bgVariants}
            animate={`${elementIsVisible}`}
            src={bgGraphics}
            alt='background graphics'
            className='absolute top-[-8rem] left-[19rem]'
          />
          <img
            src={detail1}
            alt='hero details image'
            className='absolute top-[-15rem] h-[34rem] left-[13rem]'
          />
          <motion.img
            transition={{ duration: 1, type: 'ease-out' }}
            variants={musicPlayerVariants}
            animate={`${elementIsVisible}`}
            src={detail2}
            alt='hero details image'
            className='absolute top-[94px] left-[235px] w-[175px]'
          />
          <motion.img
            transition={{ duration: 1, type: 'ease-out' }}
            variants={rectVariants}
            animate={`${elementIsVisible}`}
            src={detail3}
            alt='hero details image'
            className='absolute top-[12rem] left-[13em] w-[5rem]'
          />
          <motion.img
            transition={{ duration: 1, type: 'ease-out' }}
            variants={heartVariants}
            animate={`${elementIsVisible}`}
            src={detail4}
            alt='hero details image'
            className='absolute top-[12rem] left-[12.5rem] w-[5rem]'
          />
        </div>
      </div>
    </ReactVisibilitySensor>
  );
};

export default Hero;
