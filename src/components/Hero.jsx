import React from 'react';
import Image from 'next/image';
import hero  from '@/assets/hero.png';
import herodesk from '@/assets/herodesk.png'

const Hero = () => {
  return (
    <section className="relative w-full h-80 md:h-screen sm:h-96">
      {/* Background Image */}
      <Image
        src={hero}
        layout="fill"
        objectFit="cover"
        alt="Makeup Studio Hero"
        priority
        className='md:hidden'
    
      />

      <Image
        src={herodesk}
        layout="fill"
        quality={100}
        objectFit="cover"
        alt="Makeup Studio Hero"
        priority
        className='hidden md:block sm:block'
    
      />
      
      {/* Overlay with text */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-end  px-8">
        <div className="min-w-lg md:mb-10 lg:mb-4">
          <h1 className="text-white text-base leading-tight mb-1 font-normal font-montserrat  w-64 md:w-[70%] lg:w-[80%] md:text-[40px] lg:text-[54px]">
            Elevating Your Beauty, Embracing Your Confidence
          </h1>
          <p className="text-gray-300 text-xs font-montserrat w-[270px] mb-7 md:w-[55%] md:text-lg">
            through our courses, our work, industry level experience and our culture for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
