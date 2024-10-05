import React from 'react'
import Line from '../Line'
import Image from 'next/image'


const AboutArtists = ({src, text, name}) => {
  return (
    <>
        <div className="md:none flex flex-col gap-[0.5px]">
        <Line />
        <Line />
      </div>

      <div  className="flex flex-col items-center justify-center">
       <Image src={src} width={300}
        alt='onwersImages'
       />

      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center gap-1">
          <p className="font-montserrat font-light text-[#787474] mt-8 leading-none text-[12px]">Hello, I’m </p>
          <h3 className="font-jacques text-[28px] leading-none">{name}</h3>
        </div>

        <div className="flex justify-center">
          <p className="text-center text-[14px] tracking-wide text-[#6C6262] w-[70%]">{text}</p>
        </div>
      </div>

      </div>
    </>
  )
}

export default AboutArtists