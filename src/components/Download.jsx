import DownloadApps from './DownloadApps';
import path1 from '../assets/images/path1.png';
const Download = () => {
  return (
    <div
      className='flex flex-col items-center justify-start relative px-[5rem] h-[48rem] pt-[18rem] mt-[-10rem]
    z-[0] rounded-b-[5rem] bg-[#020917]'
    >
      {/* path icon */}
      <img src={path1} alt='' className='w-[5rem]' />
      {/* heading */}
      <div className='headline mt-7 flex flex-col items-center text-[2rem]'>
        <span>
          Download <b>AI-powered</b> Music
        </span>
        <span>
          App<b> Now!</b>
        </span>
        <span className='text-[1rem] text-gray-400 px-[15rem] text-center mt-[1rem]'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis,
          quo?
        </span>
      </div>
      {/* download Apps */}
      <div className='mt-14'>
        <DownloadApps />
      </div>
    </div>
  );
};

export default Download;
