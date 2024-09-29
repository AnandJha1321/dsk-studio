import Image from 'next/image'
import React from 'react'

const ServiceComponent = ({img, text}) => {
  return (
    <div className="relative w-[350px] h-[500px] bg-gray-200 shadow-md overflow-hidden ">
        {/* Background Image */}
        <Image
            src={img} 
            alt="Bride and Groom"
            layout="fill"
            objectFit="cover"
            className="brightness-75"
        />

        {/* Overlay Text */}
        <div className="absolute bottom-1/2 transform translate-y-1/2 w-full flex justify-center">
            <div className="bg-[#F0EDE3] px-4 py-2 w-[200px] text-center border-2 border-[#BFA534] shadow-md hover:bg-[#CFB661] cursor-pointer transiton 
            duration-300 text-[#6C6262] hover:text-white ">
            <h3 className="text-lg tracking-wide font-montserrat">
                {text}
            </h3>
            </div>
        </div>
        </div>
  )
}

export default ServiceComponent