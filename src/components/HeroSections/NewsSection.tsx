import React from 'react';
import NewsCard from '../sections/NewsCard';
import card1Img from '../../assets/news1.png';
import card2Img from '../../assets/news2.png';
import card3Img from '../../assets/news3.png';
import newsBGImage from '../../assets/NewsBg.png';
import newsLogo from '../../assets/newsLogo.png';


const newsData = [
  {
    image: card1Img,
    title:
      'Autonomys x Phala Network: Supercharging Cross-chain dApps with Decentralized Infrastructure',
    author: 'AUTONOMYS',
    date: 'February 19, 2025',
  },
  {
    image: card2Img,
    title: 'The Aurora Buildathon: Build on Autonomys. Earn Prizes.',
    author: 'AUTONOMYS',
    date: 'February 13, 2025',
  },
  {
    image: card3Img,
    title: 'January 2025 | End of Month Report',
    author: 'AUTONOMYS',
    date: 'February 10, 2025',
  },
];

const NewsSection: React.FC = () => {
  return (
    <div className="w-full bg-[#1a1927] px-4 lg:px-40 py-16 lg:mt-20">
        <h1
              className="block lg:hidden text-[40px] mb-10"
              style={{
                fontFamily: 'Roboto Serif',
                backgroundImage: 'linear-gradient(172deg, #5373c4, white)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              News
        </h1>
      <div className="flex flex-col lg:flex-row gap-5">
        {/* Left Main News */}
        <div className="flex-1 relative">
          <img
            src={newsBGImage}
            alt="Main News"
            className="rounded-3xl w-full h-[400px] lg:h-full object-cover"
          />
          <div className="absolute bottom-2 left-2 bg-[#292a4100] backdrop-blur-2xl p-5 rounded-4xl h-[310px] max-w-[95%] lg:max-w-[62%]">
            <h2
              className="text-[24px] lg:text-[32px] text-[#d1d8eb] leading-tight font-light"
              style={{
                fontFamily: 'Roboto Serif',
              }}
            >
              Build, Learn & Meet with Autonomys at ETHDenver 2025
            </h2>
            <div className="flex gap-2 text-[14px] text-[#d1d8eb] mt-28">
              <img
                src={newsLogo} // Replace with author logo
                alt="author"
                className=""
              />
              <span style={{ fontFamily: 'Roboto Serif',}} className='mt-1'>BY AUTONOMYS</span>
              <span style={{ fontFamily: 'Roboto Serif',}} className='mt-1'>February 27, 2025</span>
            </div>
          </div>
        </div>

        {/* Right News List */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="hidden lg:block flex justify-between items-center">
            <h1
              className="text-[40px] lg:text-[96px]"
              style={{
                fontFamily: 'Roboto Serif',
                backgroundImage: 'linear-gradient(172deg, #5373c4, white)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              News
            </h1>
            <span className="text-[#d1d8eb] text-sm cursor-pointer hover:underline"
            style={{
                fontFamily: 'Roboto Serif',
              }}
            >
              See All ↗
            </span>
          </div>
          {newsData.map((item, index) => (
            <NewsCard
              key={index}
              image={item.image}
              title={item.title}
              author={item.author}
              date={item.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
