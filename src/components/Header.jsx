import CenterMenu from './CenterMenu';
import musicLogo from '../assets/images/musicLogo.png';

const Header = () => {
  //styles
  const buttonsStyles = 'border-2 rounded-sm border-[#232A4E] px-6 py-2';
  return (
    <div className='header flex bg-[#081730] text-[0.8rem] items-center justify-between px-[5rem] pt-[2.4rem]'>
      {/* logo */}
      <img src={musicLogo} alt='music app logo' className='logo w-10 h-10' />
      {/* menu */}
      <CenterMenu />
      {/* buttons */}
      <div className='buttons flex'>
        <button className={buttonsStyles + ` mr-[35px] hover:bg-[#232A4E]`}>
          Sign Up
        </button>
        <button className={buttonsStyles + ` bg-[#232A4E]`}>Sign In</button>
      </div>
    </div>
  );
};

export default Header;
