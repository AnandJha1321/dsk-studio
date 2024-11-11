import React from 'react';
import Line from './Line';
import Image from 'next/image';
import demo from '@/assets/demo.jpg';
import owners from '@/assets/owners.PNG';
import CoursesButton from './CoursesButton';

const About = () => {
  return (
    <section className='min-h-fit bg-white py-10 '>
      <div className=' flex flex-col items-center gap-8'>
      <div className='flex flex-col gap-[2px]'>
        <Line />
        <Line />
      </div>

      <div className='flex flex-col items-center lg:flex-row md:gap-10 lg:gap-10 xl:gap-40'>
        <div>
          <Image 
            src={owners}
            alt='ownerImage'
            width={350}
            className='md:hidden'
          />


        <Image 
            src={owners}
            alt='ownerImage'
            width={450}
            className='hidden md:block'
          />
        </div>

        <div className='flex flex-col mb-7'>
             <p className='font-montserrat text-center font-light text-[#787474] mt-8 leading-none'>Meet</p>
            <h2 className='font-jacques text-center text-[28px] text-[#A88C13]'>Diya & Deepali</h2>
            <h3 className='mt-3 text-[16px] tracking-wider font-jacques text-center'>FOUNDER&apos;S & LEAD ARTIST&apos;S AT DSK</h3>

            <p className='w-[350px] md:w-[500px] font-montserrat text-[14px] text-gray-800 mt-6 text-center leading-6 tracking-wide'>
              Deepali and her daughter Diya are among the most talented makeup artists in Mumbai, with a passion for delivering exceptional client experiences.
              <br />
              <br />
              Having trained over <span className='text-[#A88C13]'>100+</span> students, they offer a comprehensive range of makeup courses that provide hands-on practice, a well-structured curriculum, and even the 
              opportunity  for a <span className='text-[#A88C13]'> 3-month</span> internship at DSK, ensuring that students gain real-world experience in a professional environment.
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
