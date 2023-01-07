import maskGroup from '../assets/images/maskGroup.png';
import path2 from '../assets/images/path2.png';
import trackImage from '../assets/images/group4.png';
const MusicPlayer = () => {
  return (
    <div className='musicPlayer flex flex-col px-5 py-3 mt-5 w-full border-2 border-black bg-[#232A4E] rounded-xl'>
      {/* top part */}
      <div className='top flex items-center justify-between'>
        {/* profile */}
        <div className='profile flex'>
          <img
            src={maskGroup}
            alt='mask group image'
            className='w-[2.5rem] h-[2.5rem] border-2 border-stone-100 rounded-full'
          />
          <div className='details flex flex-col ml-4'>
            {/* Song info */}
            <span className='text-[1rem]'>Money For Nothing</span>
            <span className='text-sm text-gray-400'>Dire Straits</span>
          </div>
        </div>
        <div className=''>
          <img src={path2} alt='' className='h-[1rem] cursor-pointer' />
        </div>
      </div>
      {/* bottom part */}
      <div className='bottom flex items-center justify-between mt-5'>
        <div className='track flex items-center justify-between text-sm text-gray-400 flex-[2]'>
          <span>3:46</span>
          <img src={trackImage} alt='track image' className='w-[18rem]' />
          <span>5:05</span>
        </div>
        {/* player controls */}
        <div className='controls'>
          {/* prev arrow song icon */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='10.455'
            height='12.442'
            viewBox='0 0 10.455 12.442'
          >
            <g transform='translate(-0.432)'>
              <g transform='translate(1.543)'>
                <path
                  d='M62.208,5.066,69.119.334A1.687,1.687,0,0,1,70.027,0c.517,0,.836.415.836,1.109V11.334c0,.693-.319,1.107-.835,1.107a1.673,1.673,0,0,1-.9-.335L62.211,7.376A1.419,1.419,0,0,1,61.52,6.22,1.414,1.414,0,0,1,62.208,5.066Z'
                  transform='translate(-61.52 0)'
                  fill='#4b537b'
                />
              </g>
              <rect
                width='1'
                height='12'
                rx='0.5'
                transform='translate(0.432 0.221)'
                fill='#4b537b'
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
