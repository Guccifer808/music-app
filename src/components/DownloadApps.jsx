import appStore from '../assets/images/appS.png';
import GooglePlay from '../assets/images/gPlay.png';

const DownloadApps = () => {
  //styles
  const downloadImagesStyles =
    'border-2 border-[#232A4E] rounded-xl h-[3rem] w-[10rem]';
  return (
    <div className='download '>
      <div className='download_images flex'>
        <img
          src={appStore}
          alt='app store download image'
          className={downloadImagesStyles + ' mr-8'}
        />
        <img
          src={GooglePlay}
          alt='google play download image'
          className={downloadImagesStyles}
        />
      </div>
    </div>
  );
};

export default DownloadApps;
