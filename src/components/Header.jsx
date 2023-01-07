import CenterMenu from './CenterMenu';
import musicLogo from '../assets/images/musicLogo.png';

const Header = () => {
  return (
    <div className='header'>
      {/* logo */}
      <img src={musicLogo} alt='' />
      {/* menu */}
      <CenterMenu />
      {/* buttons */}
      <button>Sign Up</button>
      <button>Sign In</button>
    </div>
  );
};

export default Header;
