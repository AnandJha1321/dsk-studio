import React from 'react';
import Image from 'next/image';
import course1 from '@/assets/course1.png';
import CallnowButton from './CallnowButton';
import Link from 'next/link';
import course2 from '@/assets/course2.png'
import course3 from '@/assets/course3.png'
import course4 from '@/assets/course4.jpeg'
import course6 from '@/assets/course6.jpg'
import course5 from '@/assets/course5.jpg'


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
      title: 'Basic to Advance (Diploma)',
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
        {courses.map((course) => (
          <p 
            key={course.id} 
            onClick={() => scrollToCourse(course.id)} 
            className="cursor-pointer text-gray-500
             hover:text-[#A88C13] hover:text-[10px] transition duration-200 hover:underline"
          >
            <span className= {course.id === "basic-to-international" ? 'hidden' : 'mr-1'}>
              |
            </span>
            {course.selectName}
          </p>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-10">
      {courses.map((course, index) => (
        <div id={course.id} key={index} >
          <CourseCard course={course} />
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
          <h1 className="text-[#cfb336] text-[24px] leading-tight mb-1 font-medium font-montserrat w-[342px]">
            {course.title} <span className='text-[16px]'>(₹{course.price})</span>
          </h1>
          <p className="text-gray-300 text-xs font-montserrat w-[320px] mb-4">
            {course.description}
          </p>

          <ul className="list-disc list-inside mb-4">
            {course.contents.map((item, index) => (
              <li key={index} className="text-white">{item}</li>
            ))}
          </ul>
          <button className="bg-white text-black px-2 text-[14px] py-2 font-montserrat hover:bg-gray-200 transition duration-200">
            <span className="mr-2">📞</span>Call Now For 10% off
          </button>
          <button className="bg-black text-white px-4 py-2 ml-2 text-[14px] font-montserrat">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default CourseList;
