import { MenuAlt1Icon } from '@heroicons/react/solid'
import React from 'react'
import Vector from '@/assets/icons/Vector.svg'
import Image from 'next/image'
import Link from 'next/link'
 

const InquiryButton = () => {
  return (
    <Link
    href={"#"}
    >
    <div className='w-[200px] h-[50px] bg-[#CFB661] flex items-center justify-center 
    cursor-pointer custom-shadow mb-2'>
        <p className='flex gap-4 text-lg font-jacques text-[#4B4646] '> 
            <span className='mt-1'>
                <Image 
                src={Vector}
                width= "100%"
                height= "100%"
                alt='vector'
                />
            </span> 
            Inquire Now
         </p>
    </div>
    </Link>
  )
}

export default InquiryButton