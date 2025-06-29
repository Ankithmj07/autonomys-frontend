import React from 'react';

type AutonomysCardProps = {
  title: string;
  description: string;
  image: string;
  bgImage: string;
};

const AutonomysCard: React.FC<AutonomysCardProps> = ({ title, description, image,bgImage }) => {
  return (
    <div className="bg-[#26253980] rounded-2xl p-2 flex flex-col items-center text-center text-white max-w-[402px] h-auto  pb-5">
      <img src={bgImage} alt={title} className=''></img>
      <img src={image} alt={title} className="absolute mt-4 w-[160px] h-auto" />
      <h3 className="text-[24px] mt-4"style={{fontFamily:"Roboto Serif",}}>{title}</h3>
      <p className="text-[#9DA2B0] text-[16px] leading-relaxed lg:px-6 pt-4">{description}</p>
    </div>
  );
};

export default AutonomysCard;
