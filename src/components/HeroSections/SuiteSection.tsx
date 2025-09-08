import React from 'react';
import SuiteCardComponent from '../sections/SuiteCard';
import suite1Img from '../../assets/suite1.png';
import suite2Img from '../../assets/suite2.png';
import suite3Img from '../../assets/suite3.png';
import suiteBG1Img from '../../assets/suiteBG1.svg'
import suiteBG2Img from '../../assets/suiteBG2.svg';

const suiteCardData = [
  {
    topTitle: 'Farm',
    title: 'Space Acres',
    description:
      'Multi-platform desktop application that simplifies setting up and managing a blockchain node and farming operation on the Autonomys Network.',
    image: suite1Img,
    bgImage : suiteBG1Img,
  },
  {
    topTitle: 'Stake',
    title: 'Astral',
    description:
      'Web application for interacting with the Autonomys Network, and block explorer for the consensus chain. Register operators, stake and nominate on Astral.',
    image: suite2Img,
    bgImage : suiteBG2Img,
  },
  {
    topTitle: 'Build',
    title: 'Auto SDK',
    description:
      'A comprehensive toolkit for developers to create, deploy, and manage decentralized applications and agents on the Autonomys Network.',
    image: suite3Img,
  },
];

const SuiteSection: React.FC = () => {
  return (
    <div className="bg-[#1a1927] w-full px-0 xl:px-32 py-20 flex flex-col gap-14 lg:mt-[-150px]">
        <div className='w-full'>
            <div className='flex justify-center'>
                <h1 className='text-[40px] text-center md:text-[72px] lg:pt-10'
                style={{
                    fontFamily:"Roboto Serif",
                    backgroundImage: 'linear-gradient(172deg, #5373c4, white)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                   Auto Suite
                </h1>
            </div>
        </div>
      {suiteCardData.map((card, index) => (
        <SuiteCardComponent
          key={index}
          topTitle={card.topTitle}
          title={card.title}
          description={card.description}
          image={card.image}
          bgImage={card.bgImage}
        />
      ))}
    </div>
  );
};

export default SuiteSection;
