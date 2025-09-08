import React from 'react';
import leftImage from '../../assets/adobeLogo.png'; 
import Marquee from '../sections/Marquee';


const InfraSection: React.FC = () => {
  return (
    <>
    <section className="w-full text-white py-16 px-4 2xl:pl-40 2xl:pr-30 flex flex-col-reverse lg:flex-row items-center justify-center gap-4">
      {/* Left Logo Image */}
      <div className="w-full md:w-1/2 flex md:justify-center">
        <img
          src={leftImage}
          alt="Background Symbol"
          className="max-w-[120px] md:max-w-[200px] lg:max-w-[350px]"
        />
      </div>
      <div className='absolute mt-90 md:mt-25 lg:mt-43'>
      <Marquee></Marquee>
    </div>

      {/* Right Text */}
      <div className="w-full md:absolute text-[24px] leading-10 text-[#9DA2B0] pb-5 md:pb-40 md:px-4 lg:pb-40">
        <p>
          Our network provides the infrastructure to scale decentralized AI3.0
          applications on-chain—hyper-scalable permanent data storage, super fast data
          availability & flexible EVM-compatible decoupled execution.
        </p>
      </div>
    </section>
    <hr className="h-[1px] bg-[#2F3241] border-0 mx-4 2xl:mx-40 mt-[-50px]" />
    </>
  );
};

export default InfraSection;
