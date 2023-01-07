import DownloadApps from './DownloadApps';
import bgGraphics from '../assets/images/bgGraphics.png';
import detail1 from '../assets/images/detail1.png';
import detail2 from '../assets/images/detail2.png';
import detail3 from '../assets/images/detail3.png';
import detail4 from '../assets/images/detail4.png';

const Hero = () => {
  return (
    <div
      className='wrapper flex bg-[#081730] items-center justify-between 
        px-[5rem] rounded-b-[5rem] w-full h-[35rem] relative z-[3]'
    >
      {/* left */}
      <div className='headings flex flex-col items-start justify-center h-full text-[3rem]'>
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
        <img
          src={bgGraphics}
          alt='background graphics'
          className='absolute top-[-8rem] left-[19rem]'
        />
        <img
          src={detail1}
          alt='hero details image'
          className='absolute top-[-15rem] h-[34rem] left-[13rem]'
        />
        <img
          src={detail2}
          alt='hero details image'
          className='absolute top-[94px] left-[235px] w-[175px]'
        />
        <img
          src={detail3}
          alt='hero details image'
          className='absolute top-[12rem] left-[13em] w-[5rem]'
        />
        <img
          src={detail4}
          alt='hero details image'
          className='absolute top-[12rem] left-[12.5rem] w-[5rem]'
        />
      </div>
    </div>
  );
};

export default Hero;
