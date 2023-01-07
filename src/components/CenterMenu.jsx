import React from 'react';

const CenterMenu = () => {
  //styles
  const liStyles = 'mr-[3rem] hover:cursor-pointer';
  return (
    <div className='menu flex'>
      <ul className='flex w-full justify-between'>
        <li className={liStyles}>Home</li>
        <li className={liStyles}>Pricing</li>
        <li className={liStyles}>About</li>
        <li className={liStyles}>Events</li>
      </ul>
    </div>
  );
};

export default CenterMenu;
