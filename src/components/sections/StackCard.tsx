import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


type StackCardProps = {
  title: string;
  description: string;
  image: string;
  listItems: string[];
  reverse: boolean;
};

const StackCardComponent: React.FC<StackCardProps> = ({
  title,
  description,
  image,
  listItems,
  reverse
}) => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1, // how much of component should be visible
      });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
    <div 
    ref={ref}
    className={`w-full bg-[#d1d8eb] rounded-3xl px-0 xl:py-10 xl:p-6 xl:px-30 flex flex-col-reverse lg:flex-row
        ${reverse ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-5 lg:gap-20 items-center`}>     
      <div className="flex-1">
        <div className='hidden lg:block w-full px-2'>
            <h2 className="text-4xl lg:text-[54px]"
            style={{
                fontFamily:"Roboto Serif",
                backgroundImage: 'linear-gradient(172deg, #5373c4, #191926)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >{title}</h2>
        </div>
        <div className='w-full'>
            <p className="text-[18px] text-[#1F2031] opacity-60 mt-0 lg:mt-4">{description}</p>
        </div>
        <div className="flex flex-col gap-3 mt-8">
          {listItems.map((item, index) => (
            <button
              key={index}
              className="bg-[#B2B9CD] md:w-[50%] lg:text-left px-3 text-white py-1 rounded-md "
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1">
        <img
          src={image}
          alt={title}
          className="w-full h-auto rounded-2xl object-contain"
        />
      </div>
      <div className='block lg:hidden w-full'>
            <h2 className="text-4xl lg:text-[54px] mb-2"
            style={{
                fontFamily:"Roboto Serif",
                backgroundImage: 'linear-gradient(172deg, #5373c4, #191926)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >{title}</h2>
        </div>
    </div>
    </motion.div>
  );
};

export default StackCardComponent;
