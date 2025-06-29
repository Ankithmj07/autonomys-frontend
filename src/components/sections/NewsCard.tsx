import React from 'react';
import newsLogo from '../../assets/newsLogo.png';

type NewsCardProps = {
  image: string;
  title: string;
  author: string;
  date: string;
};

const NewsCard: React.FC<NewsCardProps> = ({ image, title, author, date }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-2 p-4 py-5 bg-[#292a4126] rounded-4xl hover:bg-[#2a2a3d] transition">
      <img
        src={image}
        alt={title}
        className="w-full h-[100px] lg:w-[180px] lg:h-[100px] rounded-xl object-cover"
      />
      <div className="flex flex-col justify-center mt-2 lg:mt-0 lg:px-5">
        <h3 className="text-[20px] text-[#d1d8eb] leading-6 font-light"
        style={{
            fontFamily: 'Roboto Serif',
          }}
        >{title}</h3>
        <div className="flex items-center gap-2 text-[16px] text-[#a6a6bb] mt-2">
          <img
            src={newsLogo} // Replace with author logo if any
            alt="author"
            className=""
          />
          <span>BY {author}</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
