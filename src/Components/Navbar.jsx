import { useState } from 'react';
import { Link } from 'react-scroll';
import { HiOutlineMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='flex items-center justify-between py-6 px-4 md:px-8'>
      <div className='flex flex-shrink-0 items-center'>
        <h2 className='text-2xl'>Sirajul Munir</h2>
      </div>

      {/* Hamburger menu for mobile */}
      <div className='md:hidden'>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX size={30} /> : <HiOutlineMenu size={30} />}
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex m-8 items-center justify-center gap-4 text-2xl'>
        <li className='cursor-pointer'><Link to="hero" smooth={true} duration={500}>Home</Link></li>
        <li className='cursor-pointer'><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li className='cursor-pointer'><Link to="project" smooth={true} duration={500}>Projects</Link></li>
        <li className='cursor-pointer'><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
        <li className='cursor-pointer'><Link to="technology" smooth={true} duration={500}>Technology</Link></li>
      </ul>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className='absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 text-xl md:hidden z-50'>
          <li className='cursor-pointer'><Link to="hero" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Home</Link></li>
          <li className='cursor-pointer'><Link to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)}>About</Link></li>
          <li className='cursor-pointer'><Link to="project" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Projects</Link></li>
          <li className='cursor-pointer'><Link to="experience" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Experience</Link></li>
          <li className='cursor-pointer'><Link to="technology" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Technology</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
