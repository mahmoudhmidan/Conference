import React, { forwardRef, useState, useRef, useEffect } from "react";
import logo from '../../assets/write-Logo_.png';
import { IoMenu, IoChevronDown } from 'react-icons/io5';
import { Link } from '@inertiajs/react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegisterDropdownOpen, setIsRegisterDropdownOpen] = useState(false);
  const [isMobileRegisterOpen, setIsMobileRegisterOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsRegisterDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const NavbarLinks = [
    { id: 1, title: 'Home', link: '#home', type: 'anchor' },
    { id: 2, title: 'About', link: '#about-us', type: 'anchor' },
    { id: 3, title: 'Contact', link: '#footer', type: 'anchor' },
    { id: 5, title: 'The Organizer', link: '/organizer', type: 'route' },
  ];

  // Registration options with Google Form links
  const registerOptions = [
    {
      id: 1,
      title: 'I am a Dentist',
      link: 'https://forms.gle/YZCtqQV7k5AASoQt7' 
    },
    {
      id: 2,
      title: 'I am a Dental Technician',
      link: 'https://forms.gle/7d9t1fMSCKNdhqSv5' 
    },
    {
      id: 3,
      title: 'I am a Student',
      link: 'https://forms.gle/7yj5Y9DLCnj35CJu7' 
    }
  ];

  const renderLink = (link) => {
    if (link.type === 'route') {
      return (
        <Link
          href={link.link}
          className="inline-block py-1 px-1 text-lg font-semibold hover:text-teal-600"
        >
          {link.title}
        </Link>
      );
    }
    
    return (
      <a
        href={link.link}
        className="inline-block py-1 px-1 text-lg font-semibold hover:text-teal-600"
      >
        {link.title}
      </a>
    );
  };

  const renderRegisterDropdown = () => (
    <div 
      className="relative" 
      ref={dropdownRef}
      onMouseEnter={() => setIsRegisterDropdownOpen(true)}
      onMouseLeave={() => setIsRegisterDropdownOpen(false)}
    >
      <button
        onClick={() => setIsRegisterDropdownOpen(!isRegisterDropdownOpen)}
        className="flex items-center gap-1 py-1 px-1 text-lg font-semibold hover:text-teal-600 focus:outline-none"
      >
        Register
        <IoChevronDown className={`transition-transform duration-200 ${isRegisterDropdownOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isRegisterDropdownOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md border border-gray-200 min-w-56 z-50">
          {registerOptions.map((option) => (
            <a
              key={option.id}
              href={option.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 text-sm font-medium hover:bg-teal-50 hover:text-teal-600 transition-colors duration-150 border-b border-gray-100 last:border-b-0"
              onClick={() => setIsRegisterDropdownOpen(false)}
            >
              {option.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );

  const renderMobileRegisterDropdown = () => (
    <div className="w-full">
      <button
        onClick={() => setIsMobileRegisterOpen(!isMobileRegisterOpen)}
        className="flex items-center justify-center gap-1 w-full py-4 text-lg font-semibold hover:text-teal-600 focus:outline-none"
      >
        Register
        <IoChevronDown className={`transition-transform duration-200 ${isMobileRegisterOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isMobileRegisterOpen && (
        <div className="bg-gray-50 border-t border-gray-200">
          {registerOptions.map((option) => (
            <a
              key={option.id}
              href={option.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-6 py-3 text-base font-medium hover:bg-teal-50 hover:text-teal-600 transition-colors duration-150 border-b border-gray-100 last:border-b-0"
              onClick={() => {
                setIsMobileRegisterOpen(false);
                setIsMenuOpen(false);
              }}
            >
              {option.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <nav className="relative px-4 md:px-16 xl:px-32 bg-white">
      {/* Desktop */}
      <div className="hidden xl:flex justify-between items-center py-6 w-full">
        <img src={logo} className="w-80" alt="Logo" />

        <ul className="flex items-center gap-6">
          {NavbarLinks.map((link) => (
            <li key={link.id}>{renderLink(link)}</li>
          ))}
          <li>{renderRegisterDropdown()}</li>
        </ul>

        {/* Partner Images */}
        <div className="flex items-center gap-4">
          <img src="/assets/img/health-minisitry.png" alt="وزارة الصحة" className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md" />
          <img src="/assets/img/icrc.png" alt="ICRC" className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md" />
          <img src="/assets/img/Marketing-drugs.jpeg" alt="Kimadia" className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md" />
          <img src="/assets/img/OMES.jpeg" alt="Partner" className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md" />
        </div>
      </div>

      {/* Mobile */}
      <div className="xl:hidden flex flex-col items-center">
        <div className="flex justify-between items-center w-full py-4">
          <img src={logo} className="w-36" alt="Logo" />
          <IoMenu
            className="text-4xl cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>

        <div className={`w-full bg-white flex flex-col items-center transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}>
          {NavbarLinks.map((link) => (
            <li key={link.id} className="list-none w-full text-center p-4">
              {renderLink(link)}
            </li>
          ))}
          <li className="list-none w-full text-center">
            {renderMobileRegisterDropdown()}
          </li>
        </div>

        {/* Partner Images Mobile */}
        <div className="flex flex-wrap justify-center items-center gap-4 mt-4 w-full">
          <img src="/assets/img/health-minisitry.png" alt="وزارة الصحة" className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md" />
          <img src="/assets/img/icrc.png" alt="ICRC" className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md" />
          <img src="/assets/img/Marketing-drugs.jpeg" alt="Kimadia" className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md" />
          <img src="/assets/img/OMES.jpeg" alt="Partner" className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md" />
        </div>
      </div>
    </nav>
  );
}