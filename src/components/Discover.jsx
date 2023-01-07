import path1 from '../assets/images/path1.png';
import Feature from './Feature';
const Discover = () => {
  return (
    <div
      className='discover flex flex-col items-center justify-start px-[5rem]
        bg-[#020917] h-[60rem] pt-[18rem] mt-[-10rem] relative z-[2] rounded-b-[5rem]'
    >
      <img src={path1} alt='path graphics element' className='w-[5rem]' />
      {/* heading */}
      <div className='headline flex flex-col mt-7 items-center text-[2rem]'>
        <span>
          An Amazing App Will Change Your
          <span>
            <b>Music Experience</b>
          </span>
        </span>
      </div>
      {/* features */}
      <div className='features flex items-center justify-around m6-[6rem] w-full'>
        <Feature icon='group1.png' title='Live Music' />
        <Feature icon='musicIcon.png' title='Live Music' />
        <Feature icon='group2.png' title='Home Studio' />
      </div>
    </div>
  );
};

export default Discover;
