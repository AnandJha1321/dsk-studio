import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ServiceComponent = ({img, text}) => {
  return (
    <div className="relative w-[350px] h-[500px] xl:w-[350px] xl:h-[500px] lg:w-[300px] lg:h-[400px] bg-gray-200 shadow-md overflow-hidden ">
        {/* Background Image */}
        <Image
            src={img} 
            alt="Bride and Groom"
            layout="fill"
            objectFit="cover"
            className="brightness-50"
        />

        {/* Overlay Text */}
    <Link href= "https://www.fresha.com/book-now/dsk-makeup-studio-g3qjsem2/services?lid=1462269&share&pId=1388641" >
    <div className="absolute bottom-1/2 transform translate-y-1/2 w-full flex justify-center">
            <div className="bg-[#F0EDE3] px-4 py-2 w-[200px] text-center border-2 border-[#BFA534] shadow-md hover:bg-[#CFB661] cursor-pointer transiton 
            duration-300 text-[#6C6262] hover:text-white ">
            <h3 className="text-lg tracking-wide font-montserrat">
                {text}
            </h3>
            </div>
        </div>
    </Link>
        </div>
  )
}

export default ServiceComponent