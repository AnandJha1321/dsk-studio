import React from 'react'
import TestimonialSlider from './TestimonialsSliderComponent'

const Testimonials = () => {
  return (
    <section className='max-h-screen  w-full bg-[#F0EDE3] p-4 pb-14 flex flex-col items-center gap-12 mt-10'>
          <div className='flex flex-col items-center mt-6'>
            <h3 className='font-jacques text-[32px] leading-none text-[#CFB661]'>Client Reviews</h3>
            <p className='font-montserrat text-[12px]'>See what our clients have to say!</p>
      </div>

      <TestimonialSlider />
    </section>
  )
}

export default Testimonials