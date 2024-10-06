import React from 'react';
import Image from 'next/image';
import videoimage from '@/assets/videoimage.png'
import demovideo from '@/assets/demovideo.mp4'


const OverlayHero = () => {
  return (
    <section className="relative w-full h-[50vh] md:h-[90vh]">
      {/* Background Image */}
      <Image 
        src={videoimage} 
        alt="Makeup artists in Bhayandar" 
        layout="fill" 
        objectFit="cover" 
        priority 
        className="absolute inset-0 w-full h-full" 
      />
      
      {/* Video Overlay in the Center */}
      <div className="absolute inset-0 bg-black bg-opacity-65 flex items-end  px-8">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[90%] md:h-auto h-[80%]">
          <video
            className="w-full h-full object-cover"
            src= {demovideo} // Replace with your video path
            controls
          />
        </div>
      </div>     
      </div>
    </section>
  );
};

export default OverlayHero;
