import Link from 'next/link'
import React from 'react'

const BookingButton = () => {
  return (
   <a href="tel:+9867035747">
    <div className=' py-3  bg-[#cfb336] hover:bg-[#A88C13] font-montserrat text-white transition duration-150 '>
        <p className='text-center md:text-[20px] px-6'>Contact To Book Your Spot</p>
    </div>
   </a>
  )
}

export default BookingButton