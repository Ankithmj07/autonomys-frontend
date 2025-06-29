import React from 'react';
import mar1Img from '../../assets/mar1.png';
import mar2Img from '../../assets/mar2.png';
import mar3Img from '../../assets/mar3.png';
import mar4Img from '../../assets/mar4.png';
import mar5Img from '../../assets/mar5.png';
import mar6Img from '../../assets/mar6.png';

const Marquee: React.FC = () => {
  return (
    <div className="w-full overflow-hidden whitespace-nowrap">
      <div className="animate-marquee flex text-white text-xl font-medium">
        <img src={mar1Img}></img>
        <img src={mar2Img} className='lg:ml-20'></img>
        <img src={mar3Img} className='lg:ml-20'></img>
        <img src={mar4Img} className='lg:ml-20'></img>
        <img src={mar5Img} className='lg:ml-20'></img>
        <img src={mar6Img} className='lg:ml-20'></img>
      </div>
    </div>
  );
};

export default Marquee;
