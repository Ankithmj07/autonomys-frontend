import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center text-center px-4 mt-[-270px] lg:mt-[-10px]">
      <h1
        className="text-[40px] md:text-[72px] font-light leading-tight mb-8 bg-clip-text text-transparent"
        style={{
          fontFamily:"Roboto Serif",
          backgroundImage: 'linear-gradient(172deg, #5373c4, white)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        The Foundation<br className="md:hidden" /> Layer for AI3.0
      </h1>


      <div className="flex flex-row gap-10">
        <button className="px-8 py-3 rounded-[16px] bg-white text-black font-medium hover:opacity-90 transition">
          Start Farming
        </button>
        <button className="px-8 py-3 rounded-[16px] bg-[#1a1927] text-white font-medium hover:opacity-90 transition">
          Discover Your Role
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
