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
      <Swiper navigation={true} modules={[Navigation]} className="h-[100%]  md:w-[700px] lg:w-[1000px] lg:h-[800px] xl:h-[800px] xl:w-[1000px] flex items-center mb-6 swiper2">
        <SwiperSlide>
          <Image 
            src={slide1}
            alt='slid1'
            quality={100}
            // width= "100%"
            objectFit='cover'
            layout='fill'
            className='hidden lg:block xl:block'
          />


          <Image 
            src={slide1}
            alt='slid1'
            quality={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src={slide2}
            alt='slid2'
            objectFit='cover'
            layout='fill'
            className='hidden lg:block xl:block'
          />

          <Image 
            src={slide2}
            alt='slid1'
            quality={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src={slide3}
            alt='slid3'
            objectFit='cover'
            layout='fill'
            className='hidden lg:block xl:block'
          />

          <Image 
            src={slide3}
            alt='slid1'
            quality={100}
          />
        </SwiperSlide>
        <SwiperSlide>
        <Image 
            src={slide4}
            alt='slid4'
             objectFit='cover'
            layout='fill'
            className='hidden lg:block xl:block'
          /> 
          
          <Image 
          src={slide4}
          alt='slid1'
          quality={100}
        />
        </SwiperSlide>
        <SwiperSlide>
        <Image 
            src={slide5}
            alt='slid5'
             objectFit='cover'
            layout='fill'
            className='hidden lg:block xl:block'
          />

          <Image 
            src={slide5}
            alt='slid1'
            quality={100}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
