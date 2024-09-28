import React from 'react'
import SliderComponent from './SliderComponent'

const Gallery = () => {
  return (
    <section className='max-h-screen bg-[#F0EDE3] p-4 flex flex-col items-center gap-12'>
      <div className='flex flex-col items-center mt-6'>
        <h3 className='font-jacques text-[32px] leading-none text-[#CFB661]'>Gallery</h3>
        <p className='font-montserrat text-[12px]'>some of our best work</p>
      </div>

        <SliderComponent />
    </section>
  )
}

export default Gallery