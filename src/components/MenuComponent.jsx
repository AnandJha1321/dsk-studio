import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import InstaIcon from '@/assets/icons/Insta.png';
import Image from 'next/image';
import Link from 'next/link';
import InquiryButton from './InquiryButton';



const MenuComponent = () => {
    const navLinks = [
        { nav: 'HOME', href: '/' },
        { nav: 'COURSES', href: '/courses' },
        {
          nav: 'SERVICES',
          href: '#services',
          onClick: (e) => {
            e.preventDefault();
            // Check if we are on the home page or not
            if (window.location.pathname === '/') {
              scrollToServices(e); // If on home page, scroll smoothly
            } else {
              // If on a different page, navigate to the home page
              window.location.href = '/#services';
            }
          },
        },
        { nav: 'GALLERY', href: '/gallery' },
        { nav: 'ARTISTS', href: '/artists' },
      ];

      const [menu, setMenu] = useState(false);

      const handleMenu = () => {
        setMenu(!menu);
      };
    
      const scrollToServices = (e) => {
        e.preventDefault();
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      };
    

  return (
    <>
        <div className="text-black flex flex-col gap-4 lg:hidden">
        <div className="w-full h-[2.5px] bg-[#969494] mt-1"></div>
        <div className="w-full h-8">
          {!menu ? (
            <MenuIcon
              className="h-8 text-[#969494] mx-auto cursor-pointer transition duration-200"
              onClick={handleMenu}
            />
          ) : (
            <XIcon
              className="h-8 text-[#969494] mx-auto cursor-pointer transition duration-500"
              onClick={handleMenu}
            />
          )}
        </div>
        <div className="w-full h-[2.5px] bg-[#969494] mt-1"></div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out font-montserrat absolute w-full z-50 ${
          menu ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col items-center bg-[#F0EDE3] p-4 gap-2">
          <li>
            <Link href="https://www.instagram.com/dsk_makeup_studio/?hl=en" target="_blank">
              <Image src={InstaIcon} alt="Insta Logo" width={20} height={20} className="mb-4" />
            </Link>
          </li>
          <ul className="flex flex-col items-center gap-4">
            {navLinks.map((nav, i) => (
              <li key={i}>
                <Link href={nav.href} onClick={handleMenu}>
                  <span
                    className="text-[#747070] cursor-pointer text-[18px] tracking-wider hover:text-[#CFB661] transition duration-300 font-medium"
                    onClick={nav.onClick}
                  >
                    {nav.nav}
                  </span>
                </Link>
              </li>
            ))}
            <InquiryButton />
          </ul>
        </ul>
      </div>
    </>
      
  )
}

export default MenuComponent