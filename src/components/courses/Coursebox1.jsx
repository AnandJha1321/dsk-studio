import React from 'react';
import Image from 'next/image';
import hero from '@/assets/hero.png'; // Adjust this path according to your structure
import CallnowButton from './CallnowButton';

const CourseList = () => {
  const courses = [
    {
      title: 'Bridal Course',
      price: '6000',
      description: 'Everything you need to makeup a bridal, from Haldi to Reception, this course focuses on making you a Bridal Artist even if you are a complete beginner.',
      image: hero, // Use the imported image directly
      contents: [
        'Haldi',
        'Wedding',
        'Reception / Engagement',
      ],
    },
    // Add more courses here
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
};

const CourseCard = ({ course }) => {
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
      <div className="absolute inset-0 bg-black bg-opacity-55 flex flex-col  py-6 px-6">
        <div className="max-w-lg">
          <h1 className="text-[#cfb336] text-[18px] leading-tight mb-1 font-medium font-montserrat  w-72">
            {course.title}
          </h1>
          <p className="text-gray-300 text-xs font-montserrat w-[370px] mb-4">
            {course.description}
          </p>

          <ul className="list-disc list-inside mb-4">
          {course.contents.map((item, index) => (
            <li key={index} className='text-white'>{item}</li>
          ))}
        </ul>
        <button className="bg-white text-black px-4 py-2 font-montserrat hover:bg-gray-200 transition duration-200"><span className='mr-2'>📞</span>Call Now For 10% off</button>
        <button className="bg-black text-white px-4 py-2 ml-2 font-montserrat">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default CourseList; // Export CourseList instead of CourseCard
