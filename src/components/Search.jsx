import bgGraphics from '../assets/images/bgGraphics.png';
import fragment1 from '../assets/images/fragment1.png';
import fragment2 from '../assets/images/fragment2.png';
import fragment3 from '../assets/images/fragment3.png';
import fragment4 from '../assets/images/fragment4.png';
import searchIcon from '../assets/images/search.png';
import path1 from '../assets/images/path1.png';
import MusicPlayer from './MusicPlayer';
import VisibilitySensor from 'react-visibility-sensor';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Search = () => {
  //animation
  const [elementIsVisible, setElementIsVisible] = useState(false);
  //
  const bgVariants = {
    true: {
      left: '-44rem',
    },
    false: {
      left: '-88rem',
    },
  };
  const imageVariants = {
    true: {
      left: '18rem',
    },
    false: {
      left: '14rem',
    },
  };
  const musicImgVariants = {
    true: {
      left: '2rem',
    },
    false: {
      left: '6rem',
    },
  };

  return (
    <div className='search relative h-[65rem] px-[5rem] bg-[#081730] pt-[10rem] pb-[10rem] mt-[-10rem] z-[3] flex items-center justify-between rounded-b-[5rem]'>
      {/* left */}

      <div className='left flex-1 z-[-1]'>
        <motion.img
          transform={{ duration: 2, type: 'ease-out' }}
          variants={bgVariants}
          animate={`${elementIsVisible}`}
          src={bgGraphics}
          alt='background image graphics'
          className='absolute top-[10rem] left-[-65rem]'
        />
        <img
          src={fragment1}
          alt='background image graphics'
          className='absolute w-[16rem] top-[16rem]'
        />
        <img
          src={fragment2}
          alt='background image graphics'
          className='absolute w-[9rem] top-[22.7rem] left-[7rem]'
        />
        <motion.img
          transform={{ duration: 2, type: 'ease-out' }}
          variants={imageVariants}
          animate={`${elementIsVisible}`}
          src={fragment3}
          alt='background image graphics'
          className='absolute w-[9rem] top-[23rem] left-[17rem]'
        />
        <motion.img
          transform={{ duration: 2, type: 'ease-out' }}
          variants={musicImgVariants}
          animate={`${elementIsVisible}`}
          src={fragment4}
          alt='background image graphics'
          className='absolute w-[17rem] top-[40rem] left-[2rem]'
        />
      </div>
      {/* right */}
      <div className='right flex flex-col items-start justify-start flex-1 h-full pt-[9rem]'>
        {/* search bar */}
        <div className='inputBar flex justify-start w-full z-[2]'>
          <input
            type='text'
            className='flex-[19] outline-none bg-[#020917] rounded-xl p-3 h-[3rem]'
            placeholder='Search for songs...'
          />
          <div
            className='searchIcon flex flex-1 items-center justify-center ml-2 p-2 h-[3rem] rounded-2xl 
          bg-gradient-to-bl from-[#F3071D] to-[#E600FF] cursor-pointer'
          >
            <img
              src={searchIcon}
              alt='search icon image'
              className='w-[1.5rem]'
            />
          </div>
        </div>
        {/* searchbar icons */}
        <div className='tild flex justify-start items-center mt-7 w-full'>
          <img src={path1} alt='searchbar icon image' className='w-[5rem]' />
        </div>
        {/* searchbar text */}
        <div className='detail flex flex-col mt-5 text-4xl'>
          <span>Search Music by</span>
          <span>
            <b>Name or URL</b>
          </span>
          <span className='text-sm text-[#4D586A] mt-3'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda,
            officia!
          </span>
        </div>
        <VisibilitySensor
          onChange={(isVisible) => setElementIsVisible(isVisible)}
          // minTopValue={100}
        >
          {/* music player */}
          <MusicPlayer />
        </VisibilitySensor>
      </div>
    </div>
  );
};

export default Search;
