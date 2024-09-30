// components/Header.js
import Link from 'next/link';
import Logo from './Logo';
import Menu from './Menu';

const Header = () => {
  return (
    <div className='flex flex-col'>
      <header className="bg-black text-white md:h-[140px] h-[70px] shadow-md  w-full z-50">
      <nav className="container md:mx-auto md:flex md:justify-between md:items-center p-4">
        <Logo width= "30px"/>
        <ul className="md:flex space-x-6 hidden">
          <li>
            <Link href="/">
                Home
             </Link>
          </li>
          <li><Link href="/#services" scroll= {false}>
              Services</Link>
            </li>
          <li>
            <Link href="/courses">
            Courses
            </Link>
          </li>
          <li>
            <Link href="/gallery">
            Gallery
            </Link>
            </li>
          <li><Link href="/our-story">Our Story</Link></li>
        </ul>
      </nav>
    </header>
    <Menu />
    </div>
  );
};

export default Header;
