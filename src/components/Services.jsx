import React from 'react'
import demo from '@/assets/demo.jpg'
import Image from 'next/image'
import ServiceComponent from './ServiceComponent'
import InquiryButton from './InquiryButton'

const Services = () => {
  return (
    <div className='min-h-screen bg-white p-4 flex flex-col items-center gap-12' id='services'>
        <div className='flex flex-col items-center mt-10'>
            <h3 className='font-jacques text-[32px] leading-none text-[#CFB661]'>Featured Services</h3>
            <p className='font-montserrat text-[12px]'>Services Loved by people</p>
        </div>

        <div>
            <ServiceComponent img = {demo} text= "BRIDE & GROOM"/>
        </div>

        <div>
            <ServiceComponent img = {demo} text= "HAIRS SERVICE"/>
        </div>

        <div>
            <ServiceComponent img = {demo} text= "SHOOT MAKEUP"/>
        </div>


        <InquiryButton />
    </div>
  )
}

export default Services