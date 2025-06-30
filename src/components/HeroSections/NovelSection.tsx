import React from 'react';
import NovelCard from '../sections/NovelCard';
import worldBGImage from '../../assets/WorldMap.png';
import dotsImg from '../../assets/dots.svg'

const cardData = [
  { value: '1', label: 'Uniquely Capable\nConsensus Design' },
  { value: '1000+', label: 'Globally Distributed\nNodes' },
  { value: '500PB+', label: 'Decentralized\nStorage Capacity' },
];

const NovelSection: React.FC = () => {
  return (
    <div
    style={{
      backgroundImage: 'linear-gradient(0deg, #1a192700 50%, #5373c44d 75%, #d1d8eb)',
    }}
    >
        <section className="w-full relative"> 
            <h1 className='text-[40px] text-center md:text-[72px] md:pt-20'
            style={{
                fontFamily:"Roboto Serif",
                backgroundImage: 'linear-gradient(172deg, #5373c4, white)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
                A Novel Inclusive Consensus
            </h1> 
          <div className='z-0 py-50 lg:pl-0 lg:py-10'>
            <img src={worldBGImage} className='absolute w-[100%] transform scale-[0.85]'></img>
          </div>
          <div className='mt-[-200px] lg:px-0 lg:mt-[-40px]'>
            <img src={dotsImg} className='absolute transform scale-[0.85] '></img>
          </div>
          <div className="relative max-w-7xl mx-auto px-6 mt-[-350px] lg:mt-0 lg:py-76 flex flex-col lg:flex-row justify-between items-center lg:gap-12 md:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-[#ffffff25]">
            {cardData.map((card, idx) => (
              <div key={idx} className="flex-1">
                <NovelCard value={card.value} label={card.label} />
              </div>
            ))}
          </div>
        </section>
    </div>
  );
};

export default NovelSection;
