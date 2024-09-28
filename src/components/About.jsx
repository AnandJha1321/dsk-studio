import React from 'react'
import Line from './Line'
import Image from 'next/image'
import demo from '@/assets/demo.jpg'
import owner from '@/assets/owner.jpg'

const About = () => {
  return (
    <section className='w-full h-[825px] bg-white py-10 flex flex-col items-center gap-8'>
     <div className='flex flex-col gap-[1px]'>
      <Line />
      <Line />
     </div>

     <div className='flex flex-col gap-6 items-center'>
        <div>
          <Image 
            src={owner}
            alt='onwerImage'
            width={350}
          />
        </div>

        <p className='font-montserrat font-light text-gray-500'>Meet</p>
     </div>
    </section>
  )
}

export default About