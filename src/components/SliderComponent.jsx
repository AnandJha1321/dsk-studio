import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import slide2 from '@/assets/slide2.JPG'
import slide3 from '@/assets/slide3.JPG'
import slide4 from '@/assets/slide4.JPG'
import slide1 from '@/assets/slide1.JPG'
import slide5 from '@/assets/slide5.PNG'



export default function SliderComponent() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="">
        <SwiperSlide>
          <Image 
            src={slide1}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src={slide2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src={slide3}
          />
        </SwiperSlide>
        <SwiperSlide>
        <Image 
            src={slide4}
          />
        </SwiperSlide>
        <SwiperSlide>
        <Image 
            src={slide5}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
