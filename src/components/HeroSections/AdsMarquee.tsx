import React from 'react';
import MarqueeCard from '../sections/MarqueeCard';
import marqueeData from '../../constants/MarqueeData';



const AdsMarquee : React.FC = () => {
  return (
    <div className="w-full overflow-hidden whitespace-nowrap">
      <div className="animate-marquee flex text-white text-xl font-medium">
      {marqueeData.map((item, index) => (
        <MarqueeCard
        key={index}
        logo={item.logo}
        title={item.title}
        category={item.category}
      />
      ))}
        </div>
    </div>
  );
};

export default AdsMarquee;
