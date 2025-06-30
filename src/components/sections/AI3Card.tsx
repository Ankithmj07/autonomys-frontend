import React from 'react';

type AI3CardProps = {
  version: string;
  title: string;
  description: string;
};

const AI3Card: React.FC<AI3CardProps> = ({ version, title, description }) => {
  return (
    <div className="bg-[#91a0b119] backdrop-blur-lg border-1 border-[#292a41] rounded-3xl px-2 py-6 lg:p-15 flex flex-col lg:flex-row gap-6 text-white">
      {/* Left Section */}
      <div className="flex flex-col px-4 w-full md:w-1/2">
        <div className="bg-[#292A41] text-white px-4 py-5 lg:px-6 lg:py-7 rounded-2xl w-fit text-lg mb-4">
          <p
          style={{
            backgroundImage: 'linear-gradient(172deg, #5373c4, white)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          >{version}</p>
        </div>
        <div className='pr-4 lg:pr-6 md:pr-10'>
            <h2 className="text-3xl leading-snug"
            style={{
                fontFamily:"Roboto Serif",
            }}
            >
            {title}
            </h2>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full text-[#9DA2B0] text-base leading-relaxed px-4 lg:px-11 text-[16px] lg:py-2 tracking-wide">
        {description}
      </div>
    </div>
  );
};

export default AI3Card;
