import React from 'react';
import CenterMenu from './CenterMenu';
import { MdOutlineFacebook } from 'react-icons/md';
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiOutlineGithub,
} from 'react-icons/ai';
const Footer = () => {
  //styles
  const socialsStyle =
    'rounded-full border-2 border-stone-100 p-2 mr-[5rem]  hover:bg-stone-500 hover:cursor-pointer hover:bg-gradient-to-bl from-[#F3071D] to-[#E600FF]';
  return (
    <div
      className='footer flex flex-col items-center justify-start px-[5rem]
     bg-[#081730] h-[30rem] pt-[18rem] mt-[-10rem] relative z-[1] '
    >
      <CenterMenu />
      {/* social */}
      <div className='flex w-full justify-center mt-14 '>
        <div className={socialsStyle}>
          <MdOutlineFacebook />
        </div>
        <div className={socialsStyle}>
          <AiOutlineTwitter />
        </div>
        <div className={socialsStyle}>
          <AiFillYoutube />
        </div>
        <div className={socialsStyle}>
          <AiOutlineGithub />
        </div>
      </div>
      {/* details */}
      <span className='text-[1rem] text-gray-400 text-center px-[15rem] mt-[2rem]'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
        excepturi repudiandae repellat, eveniet non harum!
      </span>
    </div>
  );
};

export default Footer;
