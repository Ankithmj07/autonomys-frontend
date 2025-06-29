import React from 'react';
import leftRingImg from '../../assets/left.png';
import AI3Section from '../../components/HeroSections/AI3Section';

const RightRingComponent: React.FC = () => {
  return (
    <div className="relative w-full lg:h-[1800px] pb-20 lg:pb-0"
    style={{
      backgroundImage: 'linear-gradient(180deg, #1a192700, #1a192700 50%, #5373c44d 75%, #d1d8eb)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}
    >
      {/* Ring image on the right side */}
      <img
        src={leftRingImg}
        alt="Ring Background"
        className="absolute right-0 top-[38%] lg:top-0 z-0 max-w-full h-auto"
      />

      {/* AI3Section content on top */}
      <div className="relative z-1">
      <div className="text-center mb-14 lg:pt-50">
        <h2 className="text-[40px] lg:text-[72px] font-light text-[#C7CAE2] mb-4"
        style={{
            fontFamily:"Roboto Serif",
            backgroundImage: 'linear-gradient(172deg, #5373c4, white)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        
        >AI3.0</h2>
        <p className="text-[#9DA2B0] text-lg lg:text-[20px] leading-8 max-w-4xl mx-auto tracking-wide">
        Open, accessible and collaborative web3-enabled AI model, app and agent development and deployment.
        </p>
      </div>
        <AI3Section />
      </div>
    </div>
  );
};

export default RightRingComponent;
