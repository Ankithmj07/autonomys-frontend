import React from 'react';
import AutonomysCard from '../sections/AutonomysCard';

import storageImg from '../../assets/storage.svg';
import executionImg from '../../assets/execution.svg';
import consensusImg from '../../assets/consensus.svg';
import consensusBG from '../../assets/consensusBG.png'
import storageBG from '../../assets/storageBG.png'
import executionBG from '../../assets/executionBG.png'

const features = [
  {
    title: 'Permanent Storage',
    description:
      'Our distributed storage network (DSN) ensures data integrity and permanent availability—crucial for storing vast amounts of AI data.',
    image: storageImg,
    bgImage: storageBG,
  },
  {
    title: 'Decoupled Execution',
    description:
      'Our customizable DecEx environments (domains) for secure, scalable smart contract, super dApp and agent deployment on Substrate or any-VM.',
    image: executionImg,
    bgImage: executionBG,
  },
  {
    title: 'PoAS Consensus',
    description:
      'Our unique Proof-of-Archival-Storage (PoAS) consensus chain for decentralized sequencing, and transaction validation and settlement.',
    image: consensusImg,
    bgImage: consensusBG,
  },
];

const AutonomysSection: React.FC = () => {
  return (
    <section className="w-full px-4 py-20 bg-[#1A1927] text-white"
    >
      <div className="text-center mb-14">
        <h2 className="text-[40px] lg:text-[72px] font-light text-[#C7CAE2] mb-4"
        style={{
            fontFamily:"Roboto Serif",
            backgroundImage: 'linear-gradient(172deg, #5373c4, white)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        
        >Autonomys Network</h2>
        <p className="text-[#9DA2B0] text-base md:text-[20px] leading-8 max-w-4xl mx-auto tracking-wide">
          Our AI3.0 ecosystem stack is designed to provide all the necessary components to build and deploy
          AI-powered dApps (super dApps) and agents, and includes:
        </p>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-6 xl:grid xl:grid-cols-3 2xl:grid 2xl:grid-cols-3 xl:gap-0 xl:px-25 justify-center gap-8 items-stretch">
        {features.map((feature) => (
          <AutonomysCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default AutonomysSection;
