import maskGroup from '../assets/images/maskGroup.png';
import path2 from '../assets/images/path2.png';
import trackImage from '../assets/images/group4.png';
const MusicPlayer = () => {
  return (
    <div
      className='musicPlayer flex flex-col px-5 py-3 mt-5 w-full border-2 border-black 
    bg-[#232A4E] rounded-xl'
    >
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
          <img src={trackImage} alt='track image' className='w-[20rem]' />
          <span>5:05</span>
        </div>
        {/* player controls */}
        <div className='controls  flex-1 flex items-center justify-around'>
          {/* prev arrow song icon */}
          <svg width='10.455' height='12.442' viewBox='0 0 10.455 12.442'>
            <path
              d='M62.208,5.066,69.119.334A1.687,1.687,0,0,1,70.027,0c.517,0,.836.415.836,1.109V11.334c0,.693-.319,1.107-.835,1.107a1.673,1.673,0,0,1-.9-.335L62.211,7.376A1.419,1.419,0,0,1,61.52,6.22,1.414,1.414,0,0,1,62.208,5.066Z'
              transform='translate(-61.52 0)'
              fill='#4b537b'
            />
            <rect
              id='Rectangle_15'
              data-name='Rectangle 15'
              width='1'
              height='12'
              rx='0.5'
              transform='translate(0.432 0.221)'
              fill='#4b537b'
            />
          </svg>
          {/* pause icon */}
          <div className='pauseButton flex items-center relative cursor-pointer'>
            {/* cicrle */}
            <svg width='40' height='40' viewBox='0 0 40 40'>
              <defs>
                <linearGradient
                  id='linear-gradient'
                  x1='0.5'
                  x2='0.5'
                  y2='1'
                  gradientUnits='objectBoundingBox'
                >
                  <stop offset='0' stopColor='#f2061d' />
                  <stop offset='1' stopColor='#e600fe' />
                </linearGradient>
              </defs>
              <path
                id='Subtraction_1'
                data-name='Subtraction 1'
                d='M-2018-1015a19.87,19.87,0,0,1-14.142-5.858A19.869,19.869,0,0,1-2038-1035a19.869,19.869,0,0,1,5.858-14.142A19.869,19.869,0,0,1-2018-1055a19.869,19.869,0,0,1,14.142,5.858A19.869,19.869,0,0,1-1998-1035a19.869,19.869,0,0,1-5.858,14.142A19.869,19.869,0,0,1-2018-1015Zm0-39a19.021,19.021,0,0,0-19,19,19.021,19.021,0,0,0,19,19,19.021,19.021,0,0,0,19-19A19.021,19.021,0,0,0-2018-1054Z'
                transform='translate(2038 1055)'
                fill='url(#linear-gradient)'
              />
            </svg>
            {/* pause */}
            <svg
              width='12.327'
              height='16.417'
              viewBox='0 0 12.327 16.417'
              className='absolute left-[0.85rem]'
            >
              <defs>
                <linearGradient
                  id='linear-gradient'
                  x1='2.686'
                  y1='0.162'
                  x2='0'
                  y2='1.074'
                  gradientUnits='objectBoundingBox'
                >
                  <stop offset='0' stopColor='#f2061e' />
                  <stop offset='1' stopColor='#e600fd' />
                </linearGradient>
              </defs>
              <rect
                id='Rectangle_12'
                data-name='Rectangle 12'
                width='3.625'
                height='16.417'
                rx='1.813'
                transform='translate(0)'
                fill='url(#linear-gradient)'
              />
              <rect
                id='Rectangle_13'
                data-name='Rectangle 13'
                width='3.625'
                height='16.417'
                rx='1.813'
                transform='translate(8.701)'
                fill='url(#linear-gradient)'
              />
            </svg>
          </div>
          {/* next arrow song icon */}
          <svg width='10.455' height='12.442' viewBox='0 0 10.455 12.442'>
            <path
              id='Path_3'
              data-name='Path 3'
              d='M70.175,5.066,63.264.334A1.687,1.687,0,0,0,62.356,0c-.517,0-.836.415-.836,1.109V11.334c0,.693.319,1.107.835,1.107a1.673,1.673,0,0,0,.9-.335l6.914-4.731a1.419,1.419,0,0,0,.691-1.155A1.414,1.414,0,0,0,70.175,5.066Z'
              transform='translate(-61.52 0)'
              fill='#4b537b'
            />
            <rect
              id='Rectangle_14'
              data-name='Rectangle 14'
              width='1'
              height='12'
              rx='0.5'
              transform='translate(9.455 0.221)'
              fill='#4b537b'
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
