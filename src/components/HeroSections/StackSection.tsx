import React from 'react';
import StackCardComponent from '../sections/StackCard';
import stack1Img from '../../assets/stack1.png'
import stack2Img from '../../assets/stack2.png'
import stack3Img from '../../assets/stack3.png'
import stack4Img from '../../assets/stack4.png'
import arrowImg from'../../assets/dArrow.svg'


const stackCardData = [
    {
      title: 'dApps',
      description:
        'Develop, deploy and interact with AI-powered decentralized applications (super dApps) and verifiable Auto ID-integrated on-chain agents (Autonomys agents). Utilize Autonomys Identity (Auto ID), our custom, self-sovereign identity domain for humans and AI.',
      image: stack1Img, // replace with your correct path
      listItems: ['Auto ID', 'On-chain agents', 'DAOs', 'Compute market'],
    },
    {
      title: 'Domains (Execution)',
      description:
        'Access a limitless number of independent configurable execution environments for scalable computation, decentralized AI training and inference, and secure agentic workflows, all via distributed compute. Domains separate smart contract calls and transaction execution from consensus, allowing for modular application-specific blockchains (app-chains) interoperable through our unique cross-domain communication protocol.',
      image: stack2Img,
      listItems: ['Optimistic execution', 'Low gas fees', 'Unlimited storage', 'Highest performance'],
    },
    {
      title: 'Consensus',
      description:
        'Harness shared security with verifiably decentralized sequencing, transaction validation and settlement via our Proof-of-Archival-Storage (PoAS) chain, and ensure a single, immutable source of truth for blockchain state and history across all nodes participating in the network.',
      image: stack3Img,
      listItems: ['Decentralized sequencing', 'Shared Security', 'Minimal state'],
    },
    {
        title: 'Storage',
        description:
          'Ensure permanent data availability and integrity—crucial for storing vast amounts of AI data—with our distributed storage network (DSN) of farmers. Our DSN also stores all chain data, so the entire history is always retrievable, no matter how large it grows.',
        image: stack4Img,
        listItems: ['Permanent data availability and integrity', 'Recent history cache for fast retrieval'],
      },
  ];
  


const StackSection:React.FC = () => {
  return (
    <div className="flex flex-col gap-16 p-5 2xl:p-10 bg-[#d1d8eb]">
        <div className='w-full'>
            <div className='flex justify-center'>
                <h1 className='text-[40px] text-center lg:text-[96px] lg:pt-10'
                style={{
                    fontFamily:"Roboto Serif",
                    backgroundImage: 'linear-gradient(172deg, #5373c4, #191926)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                   Network Stack
                </h1>
                <img src={arrowImg} className='hidden lg:block w-[45px] mt-10 ml-8'></img>
            </div>
            <div className='lg:px-30'>
                <p className="text-[16px] text-center text-[#1F2031] opacity-60 mt-0">We have built the Autonomys Network from first principles to simultaneously achieve scalability, security and decentralization. At its core, the Autonomys Network implements Subspace, a novel storage-based consensus protocol that separates consensus from execution. This proposer-builder separation allows the Autonomys Network to independently scale transaction throughput and storage requirements while maintaining a fully decentralized blockchain.</p>
            </div>
            <div className='flex justify-center mt-15'>
                <hr className='w-full lg:w-[85%]'></hr>
            </div>
        </div>
      {stackCardData.map((card, index) => (
        <StackCardComponent
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
          listItems={card.listItems}
          reverse={index % 2==0}
        />
      ))}
      
    </div>
  );
};

export default StackSection;
