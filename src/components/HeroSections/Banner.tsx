import React from 'react';
import upperRingImg from '../../assets/upperRing.png'
import Navbar from '../layouts/Navbar';
import HeroSection from './HeroComponent';

const Banner: React.FC = () => {
  return (
    <div className='px-2 pt-2'>
    <div
      style={{
        backgroundImage: `url(${upperRingImg}), linear-gradient(-60deg, #ffffff, #ffffff 0%, #7e91c6 38%, #566eb1 49%, #1b2a54 79%, #0d193d 90%)`,
        backgroundPosition: '50% 0, 0 0',
        backgroundRepeat: 'no-repeat, repeat',
        backgroundSize: 'contain, auto',
        paddingTop: '615px',
        borderRadius:'30px',
      }}
      className="w-full"
    >
        <div className='fixed absolute top-0'>
            <Navbar></Navbar>
        </div>
        <HeroSection></HeroSection>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </div>
    </div>
  );
};

export default Banner;
