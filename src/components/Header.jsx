// components/Header.js
import Link from 'next/link';
import instaWhite from '@/assets/icons/instaWhite.png';
import { ArrowRightIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Logo from './Logo';
import InquiryButton from './InquiryButton';
import Menu from './Menu';
import MenuComponent from './MenuComponent';

const Header = () => {
  const navLinks = [
    { nav: 'HOME', href: '/' },
    { nav: 'COURSES', href: '/courses' },
    {
      nav: 'SERVICES',
      href: '#services',
    },
    { nav: 'GALLERY', href: '/gallery' },
    { nav: 'ARTISTS', href: '/artists' },
  ];

  return (
    <div className="flex flex-col ">
      {/* Header section for large screens */}
      <header className="bg-black text-white font-lato text-[10px] h-[100px] shadow-md w-full z-50 
      hidden sm:hidden md:flex items-center  md:visible">
        <nav className="w-full mx-auto flex justify-between items-center px-4">
          {/* Left side - Social icons */}
          <div className="flex ">
            <Link href="https://www.instagram.com/dsk_makeup_studio/?hl=en" className="text-gray-700 lg:ml-20 md:hidden lg:block ">
              <Image 
                src={instaWhite}
                alt='insta'
                width={14}
              />
            </Link>
          </div>

          {/* Left-side Navigation Links */}
          <ul className="lg:flex md:hidden lg:space-x-12 lg:items-center lg:flex-grow lg:text-left lg:justify-end">
           {navLinks.slice(0,3).map((nav,index) => (
            <li key={index} className="text-[8px] sm:text-xs text-[#747070] hover:text-[#CFB661] ">
              <Link href= {nav.href}>{nav.nav}</Link>
            </li>
           ))}
          </ul>

          {/* Center - Logo */}
          <div className="lg:flex-shrink-0 lg:px-20 lg:text-center lg:items-center mx-auto ">
            <Logo />
          </div>


          {/* Right-side Navigation Links */}
          <ul className="lg:flex  lg:space-x-12 items-center lg:flex-grow lg:text-right lg:justify-start md:hidden">
          {navLinks.slice(3,6).map((nav,index) => (
            <li key={index} className="text-[8px] sm:text-xs text-[#747070] hover:text-[#CFB661]">
              <Link href= {nav.href}>{nav.nav}</Link>
            </li>
           ))}
          </ul>

          {/* Right side - Inquiry Button */}
          <div className="lg:flex-shrink-0 md:hidden lg:block">
            <InquiryButton />
          </div>
        </nav>
      </header>

        <div className='md:hidden'>
          <Menu />
        </div>
    </div>
  );
};

export default Header;
