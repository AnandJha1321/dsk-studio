import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/">
      <div className='flex flex-col items-center py-0 cursor-pointer'>
        <h1 className= {`font-inter font-bold text-[#FFD700] text-[24px] leading-none md:text-[40px]'`}>DSK</h1>
        <p className='font-jacques text-[12px] leading-none tracking-wide md:text-[15px] '>Makeover & Academy</p>  
      </div>
    </Link>
  )
}

export default Logo