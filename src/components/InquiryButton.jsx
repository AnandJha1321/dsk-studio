import { MenuAlt1Icon } from '@heroicons/react/solid'
import React from 'react'
import Vector from '@/assets/icons/Vector.svg'
import Image from 'next/image'
import Link from 'next/link'
 

const InquiryButton = () => {
  return (
    <a
    href= "tel:+9321633596"
    >
    <div className='w-[200px] h-[50px] md:w-[160px] md:h-[40px] bg-[#CFB661] flex items-center justify-center 
    cursor-pointer hover:bg-[#A88C13] transition duration-300 mb-2'>
        <p className='flex gap-4 text-lg font-jacques text-[#4B4646] md:text-[14px]'> 
            <span className='mt-1'>
                <Image 
                src={Vector}
                width= "100%" 
                height= "100%"
                alt='vector'
                className='sm:hidden'
                />


                <Image 
                src={Vector}
                width= {20} 
                height= "100%"
                alt='vector'
                className='hidden lg:block'
                />

             
            </span> 
            Inquire Now
         </p>
    </div>
    </a>
  )
}

export default InquiryButton