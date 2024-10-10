import { ArrowRightIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import Link from 'next/link';

const CoursesButton = () => {
  const [showArrow, setShowArrow] = useState(false);

  const handleClick = () => {
    setShowArrow(true);
    setTimeout(() => {
        setShowArrow(false)
    }, 2000);
  };

  return (
    <Link href={'/courses'}>
      <div
        onClick={handleClick}
        className='w-[50%] mx-auto h-[50px] bg-[#CFB661] flex items-center justify-center 
        cursor-pointer custom-shadow'
      >
        <p className='flex gap-4 text-lg font-jacques text-white'>
          View Courses
          <ArrowRightIcon 
            className={`text-white w-7 ${showArrow ? 'block' : 'hidden'}`} 
            fontSize={20}
          />
        </p>
      </div>
    </Link>
  );
};

export default CoursesButton;
