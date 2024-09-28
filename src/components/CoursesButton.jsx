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
    <Link href={'#'}>
      <div
        onClick={handleClick}
        className='w-[200px] h-[50px] bg-[#CFB661] flex items-center justify-center 
        cursor-pointer custom-shadow mt-10'
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
