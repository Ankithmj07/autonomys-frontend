import React from 'react';
import bgImage from '../../assets/adsBg.png'; 
import AdsMarquee from './AdsMarquee';

const AdsSection: React.FC = () => {
  return (
    <div className='px-3 mt-30'>
        <div
          className="w-full h-[950px] flex flex-col items-center justify-center rounded-4xl "
          style={{
            backgroundImage: `url(${bgImage}), linear-gradient(-61deg, #d1d8eb, #7e91c6 20%, #566eb1 50%, #1b2a54 80%, #0d193d)`,
            backgroundPosition:'50% 100%, 0px 0px',
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover, auto;',
          }}
        >
        <div className='text-center mb-40 lg:mb-0 lg:mb-20'>
          <h1
            className="text-[40px] lg:text-[72px] text-white text-center leading-12 lg:leading-30"
            style={{
              fontFamily: 'Roboto Serif',
            }}
          >
            Powered by Autonomys
          </h1>
          <div className='w-full flex justify-center'>
          <p className="text-[#c9d4ec] text-[16px] max-w-[720px] text-center mt-2">
            Building on the Autonomys Network will help you unlock unparalleled performance, security and scalability.
          </p>
          </div>
          <div className="flex flex-col lg:flex-row px-20 lg:px-0 gap-6 justify-center mt-10">
            <button className="bg-[#191926] text-white lg:px-8 py-3 rounded-2xl hover:opacity-80 transition">
              List Project
            </button>
            <button className="bg-white text-black px-8 py-3 rounded-2xl hover:opacity-80 transition">
              Explore Ecosystem
            </button>
          </div>
        </div>
        <div className='hidden lg:block w-full px-3 absolute mt-140'>
          <AdsMarquee></AdsMarquee>
        </div>
        </div>
    </div>
  );
};

export default AdsSection;
