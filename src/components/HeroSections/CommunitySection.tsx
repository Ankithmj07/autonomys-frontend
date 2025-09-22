import React from 'react';
import footerBGImage from '../../assets/footerBg.png'
import FooterSection from './FooterSection';

const CommunitySection: React.FC = () => {
  return (
    <div className="w-full py-20 h-[1850px] md:h-[1500px] lg:h-[1063px]"
    style={{
        backgroundImage: `url(${footerBGImage}), linear-gradient(180deg, #1a1927, #5373c480 50%, white)`,
        backgroundPosition:'50% 100%, 0px 0px',
        backgroundRepeat:'no-repeat',
        backgroundSize:'1550px, auto',
        padding:'180px, 16px 8px',
        position:'relative'
      }}
    >
      <div className='px-4 xl:px-20 2xl:px-40 mt-10'>  
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        {/* Left Section */}
        <div>
          <h1
            className="text-[48px] md:text-[96px] leading-none"
            style={{
              fontFamily: 'Roboto Serif',
              backgroundImage: 'linear-gradient(172deg, #5373c4, white)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Join our <br /> Community
          </h1>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-8 lg:mt-8 md:mt-0">
          <p className="text-[#d1d8eb] text-[16px] opacity-80 max-w-full">
            Our network provides the infrastructure to scale decentralized AI3.0 applications on-chain—hyper-scalable permanent data storage, super-fast data availability & flexible EVM-compatible decoupled execution.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-white text-black px-8 py-3 rounded-2xl hover:opacity-80 transition">
              Discord
            </button>
            <button className="bg-[#0f0f0f] text-white px-8 py-3 rounded-2xl hover:opacity-80 transition">
              Forum
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-[#ffffff33] my-10"></div>

      {/* Newsletter */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-1">
        <h2
          className="text-[32px]"
          style={{
            fontFamily: 'Roboto Serif',
            color: 'white',
          }}
        >
          Subscribe to the AI3.0 Newsletter
        </h2>

        <div className="flex flex-col md:flex-row gap-6 w-full lg:w-auto mt-2 lg:mt-0">
          <input
            type="email"
            placeholder="Your Email"
            className="px-6 py-3 rounded-xl bg-transparent border border-[#FFFFFF33] text-white placeholder:text-[#d1d8eb] w-full lg:w-[425px] focus:outline-none focus:ring-2 focus:ring-[#5373c4]"
          />
          <button className="bg-white text-black px-6 py-3 rounded-2xl hover:opacity-80 transition">
            Subscribe
          </button>
        </div>
        
      </div>
      <div className="w-full border-t border-[#ffffff33] my-10"></div>
      </div>
      
      <div className='px-4 mt-38'>
        <FooterSection></FooterSection>
      </div>
      
    </div>
  );
};

export default CommunitySection;
