import React from 'react';
import Image from 'next/image';
import course1 from '@/assets/course1.png';
import CallnowButton from './CallnowButton';
import Link from 'next/link';
import course2 from '@/assets/course2.PNG'
import course3 from '@/assets/course3.png'
import course4 from '@/assets/course4.jpeg'
import course6 from '@/assets/course6.jpg'
import course5 from '@/assets/course5.jpg'
import CoursesButton from '../CoursesButton';
import BookingButton from './BookingButton';
import { PhoneIcon } from '@heroicons/react/solid';


const CourseList = () => {
  const courses = [
    {
      id: 'basic-to-international',
      title: 'Basic to International',
      selectName: 'Basic to International',
      price: '6000',
      description: 'Everything you need to makeup a bridal, from Haldi to Reception, this course focuses on making you a Bridal Artist even if you are a complete beginner.',
      image: course2,
      contents: [
        'Haldi',
        'Wedding',
        'Reception / Engagement',
      ],
    },
    {
      id: 'bridal-course',
      title: 'Bridal Course',
      selectName: 'Bridal',
      price: '6000',
      description: 'Everything you need to makeup a bridal, from Haldi to Reception, this course focuses on making you a Bridal Artist even if you are a complete beginner.',
      image: course1,
      contents: [
        'Haldi',
        'Wedding',
        'Reception / Engagement',
      ],
    },
    {
      id: 'hairstyle',
      title: 'Hairstyle',
      selectName: 'Hairs',
      price: '6000',
      description: 'Everything you need to makeup a bridal, from Haldi to Reception, this course focuses on making you a Bridal Artist even if you are a complete beginner.',
      image: course3,
      contents: [
        'Haldi',
        'Wedding',
        'Reception / Engagement',
      ],
    },
    {
      id: 'beautician-course',
      title: 'Beautician Course',
      selectName: 'Beautician',
      price: '6000',
      description: 'Everything you need to makeup a bridal, from Haldi to Reception, this course focuses on making you a Bridal Artist even if you are a complete beginner.',
      image: course4,
      contents: [
        'Haldi',
        'Wedding',
        'Reception / Engagement',
      ],
    },
    {
      id: 'basic-to-advance',
      title: 'Advance Diploma course',
      selectName: 'Diploma',
      price: '24499',
      description: 'Everything you need to makeup a bridal, from Haldi to Reception, this course focuses on making you a Bridal Artist even if you are a complete beginner.',
      image: course5,
      contents: [
        'Haldi',
        'Wedding',
        'Reception / Engagement',
      ],
    },
    {
      id: 'hair-treatment',
      title: 'Hair Treatment ',
      selectName: 'Hair Treatment',
      price: '6000',
      description: 'Everything you need to makeup a bridal, from Haldi to Reception, this course focuses on making you a Bridal Artist even if you are a complete beginner.',
      image: course6,
      contents: [
        'Haldi',
        'Wedding',
        'Reception / Engagement',
      ],
    },
  ];

  const scrollToCourse = (courseId) => {
    const courseSection = document.getElementById(courseId);
    if (courseSection) {
      courseSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (

    <div>
       <div className="flex text-[9.5px] gap-[2px] items-center justify-center w-full leading-none font-montserrat mt-2">
        <div className='flex absolute sm:initail sm:px-3'>
        {courses.map((course) => (
          <p 
            key={course.id} 
            onClick={() => scrollToCourse(course.id)} 
            className="cursor-pointer text-gray-500 text-[8.2px]
             hover:text-[#A88C13]  transition hover:underline md:hidden sm:text-[14px]  mt-4 uppercase"
          > 
            <span className= {course.id === "basic-to-international" ? 'hidden' : 'mx-[3px] sm:mx-[6px]'}>
              |
            </span>
            {course.selectName}
          </p>
        ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
      {courses.map((course, index) => (
        <div id={course.id} key={index}  className='flex flex-col items-center'>
          <CourseCard course={course} />
          {index === 2 ? (
            <div className='mt-8 md:hidden'>
              <BookingButton />
            </div>
          ) : ''}
        </div>
      ))}
    </div>
    </div>
  );
};

const CourseCard = ({ course }) => {
  return (
    <section className="relative w-[100%] h-80">
      {/* Background Image */}
      <Image
        src={course.image}
        layout="fill"
        objectFit="cover"
        alt="Course Images"
        priority
      />
      
      {/* Overlay with text */}
      <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col py-6 px-6">
        <div className="my-3">
          <h1 className="text-[#cfb336] text-[24px] leading-tight mb-1 font-medium font-montserrat w-[334px]">
            {course.title} 
          </h1>
          <p className="text-gray-300 text-xs font-montserrat w-[320px] mb-4">
            {course.description}
          </p>

          <ul className="list-disc list-inside mb-4">
            {course.contents.map((item, index) => (
              <li key={index} className="text-white">{item}</li>
            ))}
          </ul>
          <div className='flex '>
          <button className="bg-white flex text-black px-2 items-center justify-center text-[14px] py-2 font-montserrat hover:bg-gray-200 transition duration-200">
            <span className="mr-2"><PhoneIcon className='w-4'/></span>
            Call Now For 10% off
          </button>
          <button className="bg-black flex text-white ml-3 px-3 items-center hover:text-black justify-center text-[14px] py-2 font-montserrat hover:bg-gray-200 transition duration-200">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseList;
