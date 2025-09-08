import React from 'react';
import GreenRingImage from '../../assets/GreenRing.png'; // Use your actual image path

const ProtocolSection: React.FC = () => {
  return (
    <div className='bg-[#d1d8eb] flex justify-center py-10 md:py-20 px-4 2xl:px-0 lg:py-30 lg:pb-40'>
        <section className="relative w-full xl:px-8 xl:w-[80%] overflow-hidden rounded-[2rem] py-10 md:py-10 lg:py-30"
        style={{
            backgroundImage: 'linear-gradient(91deg, #fff, #5373c4)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          {/* Ring in the Background */}
          <img
            src={GreenRingImage}
            alt="Background Ring"
            className="absolute right-[-800px] top-159 md:top-110 md:right-[-1050px] md:scale-[4.5] lg:right-[-640px] lg:top-90 w-[700px]  scale-[8.5] lg:scale-[4.5]  z-0 pointer-events-none"
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center">
            {/* Left Content */}
            <div className="max-w-xl text-left px-6 md:py-8 lg:px-15">
              <h2 className="text-4xl md:text-[54px] font-serif text-[#2d2d46] mb-4">Subspace Protocol</h2>
              <div className='lg:pr-8 md:flex justify-center'>
              <p className="text-[#5c5f75] text-[16px] leading-relaxed mb-8">
                Our novel Proof-of-Archival-Storage (PoAS) consensus mechanism maintains the honest majority assumption and permissionless nature of Nakamoto consensus without the massive electricity cost of mining.
              </p>
              </div>
              <div className="flex flex-row justify-center md:justify-start gap-4">
                <button className="bg-white text-black px-6 py-3 rounded-xl font-medium shadow">
                  Learn More
                </button>
                <button className="bg-[#1a1927] text-white px-6 py-3 rounded-xl font-medium shadow">
                  Documentation
                </button>
              </div>
            </div>

            {/* Right: YouTube Video */}
            <div className="w-full max-w-xl pt-15 px-6 lg:pl-10 lg:pt-0 lg:px-0 ">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full md:h-[280px] lg:h-[315px]"
                  width="100%"
                  src="https://www.youtube.com/embed/9jTBihUeq70"
                  title="Autonomys - Under the Hood"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default ProtocolSection;
