import React from 'react';

type MarqueeCardProps = {
  logo: string;
  title: string;
  category: string;
};

const MarqueeCard: React.FC<MarqueeCardProps> = ({ logo, title, category }) => {
  return (
    <div className="bg-[#292a4126] backdrop-blur-[40px] p-5 border-2 border-[#292a4126] rounded-4xl rounded-3xl px-6 py-0 flex flex-col gap-4 flex-shrink-0  w-[250px] lg:w-[350px] ml-5">
      <div className='px-0 mt-4'>
        <img src={logo} alt={title} className="w-13" />
      </div>

      {/* Text Content */}
      <div className='mt-2'>
        <h3
          className="text-[24px] text-white"
          style={{
            fontFamily: 'Roboto Serif',
          }}
        >
          {title}
        </h3>
        <p className="text-[12px] text-white tracking-widest mt-2">{category.toUpperCase()}</p>
      </div>
    </div>
  );
};

export default MarqueeCard;
