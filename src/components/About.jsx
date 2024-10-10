import React from 'react';
import Line from './Line';
import Image from 'next/image';
import demo from '@/assets/demo.jpg';
import owner from '@/assets/owner.jpg';
import CoursesButton from './CoursesButton';

const About = () => {
  return (
    <section className='min-h-fit bg-white py-10'>
      <div className=' flex flex-col items-center gap-8'>
      <div className='flex flex-col gap-[2px]'>
        <Line />
        <Line />
      </div>

      <div className='flex flex-col items-center lg:flex-row lg:gap-20'>
        <div>
          <Image 
            src={owner}
            alt='ownerImage'
            width={350}
            className='md:hidden'
          />


        <Image 
            src={owner}
            alt='ownerImage'
            width={450}
            className='hidden md:block'
          />
        </div>

        <div className='flex flex-col mb-7'>
             <p className='font-montserrat text-center font-light text-[#787474] mt-8 leading-none'>Meet</p>
            <h2 className='font-jacques text-center text-[28px] text-[#A88C13]'>Diya & Deepali</h2>
            <h3 className='mt-3 text-[16px] tracking-wider font-jacques text-center'>FOUNDER&apos;S & LEAD ARTIST&apos;S AT DSK</h3>

            <p className='w-[380px] md:w-[500px] font-montserrat text-[14px] text-gray-800 mt-6 text-center leading-6 tracking-wide'>
              Deepali and her daughter Diya are among the most talented makeup artists in Mumbai, with a passion for delivering exceptional client experiences. At DSK, their mission is to help every 
              client discover their most beautiful self, from pre-wedding shoot makeup to the big wedding day itself. 
              <br />
              <br />
              Having trained over <span className='text-[#A88C13]'>100+</span> students, they offer a comprehensive range of makeup courses that provide hands-on practice, a well-structured curriculum, and even the 
              opportunity for a 3-month internship at DSK, ensuring that students gain real-world experience in a professional environment.
            </p>

            <div className='mt-10'>
              <CoursesButton />
            </div>
        </div>
      
      </div>

      <div className='flex flex-col gap-[1px]'>
        <Line />
        <Line />
      </div>
      </div>
    </section>
  );
};

export default About;
