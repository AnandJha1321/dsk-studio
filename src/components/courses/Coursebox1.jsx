import React, { useState } from 'react';
import Image from 'next/image';
import course1 from '@/assets/course1.png';
import CallnowButton from './CallnowButton';
import Link from 'next/link';
import course2 from '@/assets/course2.PNG';
import course3 from '@/assets/course3.png';
import course4 from '@/assets/course4.jpeg';
import course6 from '@/assets/course6.jpg';
import course5 from '@/assets/course5.jpg';
import CoursesButton from '../CoursesButton';
import BookingButton from './BookingButton';
import { CheckCircleIcon, DownloadIcon, PhoneIcon } from '@heroicons/react/solid';

const CourseList = () => {

const courses = [

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
      'Reception',
      'Engagement',
    ],
  },
  {
    id: 'basic-to-international',
    title: 'Basic to International',
    selectName: 'Basic to International',
    price: '6000',
    description: 'Everything you need to makeup a bridal, from Haldi to Reception, this course focuses on making you a Bridal Artist even if you are a complete beginner.',
    image: course2,
    contents: [
      'Bridal Course',
      'Nude Makeup',
      'Fantasy Makeup',
      'Film & Video Makeup',
      'HD Makeup',
      'Corrective Makeup',
      'And More...'
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
      'Open hairstyle  (Curls, Tongs, Straighteneing)',
      'Front Variation',
      'Braids',
      'Hair Buns (Indian Bun, Messy Bun)',
      'International Hairstyle'
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
      'Bridal Course',
      'Hairstyle Course',
      'Hair Colouring',
      'Highlights',
      'Waxing',
      'Facial & Cleanups',
      'Eyebrow',
      'Bleach',
      'Hair Spa',
      'Hair treatments',
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
      'Nude Makeup',
      'Bridal Makeup',
      'Party Makeup',
      'Airbrush Makeup',
      'HD Makeup',
      'Runway Catwalk'
    ],
  },
  {
    id: 'hair-treatment',
    title: 'Hair Treatment Course',
    selectName: 'Hair Treatment',
    price: '6000',
    description: 'Everything you need to makeup a bridal, from Haldi to Reception, this course focuses on making you a Bridal Artist even if you are a complete beginner.',
    image: course6,
    contents: [
      'Hair Cuts',
      'Global',
      'Balayage',
      'Highlights',
      'Botox',
      'Nanoplastia',
      'Keratin', 
      'Smoothening',
      'Kerasmootheing',
      'Hair Spa'
    ],
  },
];

  const [selectedCourse, setSelectedCourse] = useState('basic-to-international');

  const handleCourseChange = (e) => {
    const courseId = e.target.value;
    setSelectedCourse(courseId);
    scrollToCourse(courseId);
  };

  const scrollToCourse = (courseId) => {
    const courseSection = document.getElementById(courseId);
    if (courseSection) {
      courseSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Dropdown for selecting courses */}
      <div className="flex justify-center mt-4">
        <select
          className="bg-gray-200 md:hidden text-black text-sm p-2 font-montserrat rounded-md"
          value={selectedCourse}
          onChange={handleCourseChange}
        >
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.title}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 md:gap-3 mt-10">
        {courses.map((course, index) => (
          <div id={course.id} key={index} className='flex flex-col items-center'>
            <CourseCard course={course} id={index} />
            {index === 2 && (
              <div className='mt-8 md:hidden'>
                <BookingButton />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const CourseCard = ({ course, id }) => {
  return (
    <section className={`relative w-[100%] h-[350px] `}>
      {/* Background Image */}
      <Image
        src={course.image}
        layout="fill"
        objectFit="cover"
        alt="Course Images"
        priority
      />
      
      {/* Overlay with text */}
      <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col py-4 px-6">
        <div className="my-3">
          <h1 className="text-[#cfb336] text-[24px] leading-tight mb-1 font-medium font-montserrat w-[334px]">
            {course.title}
          </h1>
          <p className="text-gray-300 text-xs  font-montserrat w-[320px] mb-4 sm:text-sm  sm:w-[400px]  ">
            {course.description}
          </p>
          <ul className={`${id === 2 || id === 0
          ? "w-full pb-3 sm:grid sm:grid-cols-2 lg:block"
            : "w-[90%] sm:w-[70%] md:w-[70%] text-nowrap grid grid-cols-2 mb-4  "}`}>
            {course.contents.map((item, index) => (
              <li key={index} className="text-white list-none font-lato text-left " >
                <p className= 'flex items-center gap-3 text-[14px] md:text-base'>    
                  <span>
                  <CheckCircleIcon className={`${item === 'Bridal Course' || item === 'Hairstyle Course' ? 'w-5' : 'w-4'} text-yellow-400`} />
                    </span>             
                  {item}
                </p>
                </li>
            ))}
          </ul>
          <div className='flex '>
            <button className="bg-white flex text-black px-2 items-center justify-center text-[14px] py-2 
            font-montserrat hover:bg-gray-200 transition duration-200  text-nowrap">
              <span className="mr-2"><PhoneIcon className='w-4'/></span>
              Call Now For 10% off
            </button>
            <button className="bg-black flex text-white ml-3 px-3 items-center hover:text-black justify-center text-[14px]
             py-2 font-montserrat hover:bg-gray-200 transition duration-200  text-nowrap"
             > <span><DownloadIcon className='w-4 mr-2'/></span>Get Syllabus</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseList;



