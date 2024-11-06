import React from 'react'
import Line from './Line'
import Logo from './Logo'
import Video from './Video'
import CoursesButton from './CoursesButton'
import thumbnail1 from '@/assets/thumbnail1.png'
import thumbnail2 from '@/assets/thumbnail2.png'
import thumbnail3 from '@/assets/thumbnail3.png'
import Arrowup from '@/assets/icons/Arrowup.png'
import { ArrowCircleUpIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <section className='max-h-screen w-full lg:w-full bg-white text-center'>
        <div className='flex flex-col  lg:flex-row lg:items-center lg:justify-center items-center 
        my-10 gap-8 lg:gap-8 xl:gap-12 xl:pr-12'>
        <div className='flex-col items-center justify-center space-y-4 '>
            <div className='flex flex-col items-center py-0 cursor-pointer'>
                <h1 className= {`font-inter font-bold text-[#FFD700] text-[32px] leading-none md:text-[40px]'`}>DSK</h1>
                <p className='font-jacques text-[12px] leading-none tracking-wide md:text-[15px] '>Makeover & Academy</p>  
            </div>

                <p className='text-[16px] text-center mx-auto lg:mx-auto font-montserrat w-[80vw] lg:w-[30vw]  text-[#646363]'>
                DSK makeover is located at 107/B, Ajmal Ramdev bldg no.2 S.V Road , Above Naresh Steel, Bhayandar East, Mumabi                
                </p>

                <p className='text-[16px] text-center mx-auto lg:mx-auto font-montserrat w-[80vw] lg:w-[30vw]  text-[#646363]'>
                    Contact us on 9867035747 / 9324970277</p>

                <div className='w-[400px] mx-auto'>
                <CoursesButton />
                </div>
       </div>

        <div className='flex flex-col lg:flex-row lg:hidden'>
            <div className="w-[90vw] h-[1.5px] bg-[#969494] mt-2 lg:rotate-90 lg:w-[300px]"></div>
            <div className="w-[90vw] h-[1.5px] bg-[#969494] mt-2 lg:rotate-90 lg:w-[300px]"></div>
        </div>

        <div className='lg:flex lg:gap-1 hidden '>
        <div className='border-[1px] h-[340px] border-[#938F8F]'></div>
        <div className='border-[1px] h-[340px]  border-[#938F8F]'></div>
        </div>
      

        <div className='flex flex-col  justify-center items-center lg:block text-[4vw] font-montserrat text-[#696767] tracking-wide'>

            <p className='flex gap-2  items-center lg:text-[18px]  lg:whitespace-nowrap'>
                FOLLOW US ON
                <a href="https://www.instagram.com/dsk_makeup_studio/?hl=en">
          
                <span  className='underline font-jacques text-[6vw] text-[#BFA534] lg:text-[3vw]'>
                    Instagram
                </span>
                </a>
            </p>

            <div className='flex w-full md:gap-12 lg:gap-4 mt-10'>
                <Video reelThumbnail= {thumbnail1} reelLink= "https://www.instagram.com/reel/C-7tFz8sEsx/?hl=en" width={170}/>
                <Video reelThumbnail= {thumbnail2} reelLink= "https://www.instagram.com/reel/C9UEVFwsGiW/?hl=en" width={150}/>
                <Video reelThumbnail= {thumbnail3} reelLink= "https://www.instagram.com/reel/C5aobbHs7Fv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={160}/>
            </div>
        </div>
        </div>

        <div className='flex gap-2  items-center justify-center bg-[#F0EDE3] w-full py-2'>
            <Link
                href={"#"}
            >
                <ArrowCircleUpIcon  width={28}    />
            </Link>
            <p className='font-montserrat text-slate-600'>BACK TO TOP</p>
        </div>
    </section>
  )
}

export default Footer