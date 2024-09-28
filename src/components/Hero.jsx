import React from 'react';
import Image from 'next/image';
import hero  from '@/assets/hero.png';

const Hero = () => {
  return (
    <section className="relative w-full h-80">
      {/* Background Image */}
      <Image
        src={hero}
        layout="fill"
        objectFit="cover"
        alt="Makeup Studio Hero"
        priority
    
      />
      
      {/* Overlay with text */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-end  px-8">
        <div className="max-w-lg">
          <h1 className="text-white text-base leading-tight mb-1 font-medium font-montserrat  w-72">
            Elevating Your Beauty, Embracing Your Confidence
          </h1>
          <p className="text-gray-300 text-xs font-montserrat w-[270px] mb-7">
            through our courses, our work, industry level experience and our culture for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
