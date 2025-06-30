import React from 'react';

type SuiteCardProps = {
  topTitle: string;
  title: string;
  description: string;
  image: string;
  bgImage?:string;
};

const SuiteCardComponent: React.FC<SuiteCardProps> = ({
  topTitle,
  title,
  description,
  image,
  bgImage
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row px-4 2xl:px-10 items-center justify-between w-full gap-8 lg:gap-20`}
    >
      {/* Left Text */}
      <div className="flex-1">
        <h3 className="text-white text-[26px] mb-3">{topTitle}</h3>
        <h2
          className="text-[40px] md:text-[54px] leading-tight"
          style={{
            fontFamily: 'Roboto Serif',
            backgroundImage: 'linear-gradient(172deg, #5373c4, white)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {title}
        </h2>
        <p className="text-[#d1d8eb] text-[16px] opacity-80 mt-4">{description}</p>
        <div className="mt-4 md:mt-10 lg:mt-14">
          <button className="border border-white text-white px-6 py-2 rounded-xl hover:bg-white hover:text-black transition">
            Get Started
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-0.9 flex justify-center">
        <div className="relative bg-[#2b2d45] rounded-3xl">
        {bgImage && (
          <img
            src={bgImage}
            alt={`${title} background`}
            className="absolute inset-0 z-0 w-[366px] mt-[3px]"
          />
        )}
          <img src={image} alt={title} className="relative z-10 w-full md:w-[350px] lg:w-[366px] object-contain" />
          
        </div>
      </div>
    </div>
  );
};

export default SuiteCardComponent;
