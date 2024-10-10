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
    <section className='max-h-screen w-full bg-white  flex flex-col items-center mt-14 gap-8'>
       
       <div className='flex flex-col items-center py-0 cursor-pointer'>
        <h1 className= {`font-inter font-bold text-[#FFD700] text-[32px] leading-none md:text-[40px]'`}>DSK</h1>
        <p className='font-jacques text-[12px] leading-none tracking-wide md:text-[15px] '>Makeover & Academy</p>  
        </div>

        <p className='text-16px text-center font-montserrat w-[80vw] text-[#646363]'>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed to using Content hereIt is a long established.</p>

        <div className='w-[80%]'>
        <CoursesButton />
        </div>

        <div className='flex flex-col '>
            <div className="w-[90vw] h-[1.5px] bg-[#969494] mt-2"></div>
            <div className="w-[90vw] h-[1.5px] bg-[#969494] mt-2"></div>
        </div>

        <div className='flex flex-col items-center text-[4vw] font-montserrat text-[#696767] tracking-wide'>
            <p className='flex gap-2 justify-center items-center'>
                FOLLOW US ON
                <a href="https://www.instagram.com/dsk_makeup_studio/?hl=en">
                <span  className='underline font-jacques text-[6vw] text-[#BFA534]'>
                    Instagram
                </span>
                </a>
            </p>

            <div className='flex w-full gap-2 mt-10'>
                <Video reelThumbnail= {thumbnail1} reelLink= "https://www.instagram.com/reel/C-7tFz8sEsx/?hl=en" width={170}/>
                <Video reelThumbnail= {thumbnail2} reelLink= "https://www.instagram.com/reel/C9UEVFwsGiW/?hl=en" width={150}/>
                <Video reelThumbnail= {thumbnail3} reelLink= "https://www.instagram.com/reel/C5aobbHs7Fv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={160}/>
            </div>
        </div>
        <div className='flex gap-2 items-center justify-center bg-[#F0EDE3] w-full py-2'>
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