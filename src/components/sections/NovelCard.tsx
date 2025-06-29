import React from 'react';

type NovelCardProps = {
  value: string;
  label: string;
};

const NovelCard: React.FC<NovelCardProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center text-center lg:gap-8 lg:px-6 py-6 lg:py-8">
      <h2 className="text-white text-[80px] lg:text-7xl font-light"
      style={{
        fontFamily:"Roboto Serif",
      }}
      >{value}</h2>
      <p className="text-[#C7CAE2] text-[24px] leading-relaxed px-10">
        {label}
      </p>
      <button className="hidden md:block mt-4 bg-white text-black px-6 py-2 rounded-xl font-medium">
        Explore
      </button>
    </div>
  );
};

export default NovelCard;
