import React, { forwardRef, useState } from "react";
import logo from '../../assets/write-Logo_.png';
import { IoMenu } from 'react-icons/io5';
import { Link } from '@inertiajs/react';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavbarLinks = [
    { id: 1, title: 'Home', link: '#home' },
    { id: 2, title: 'About', link: '#about-us' },
    { id: 3, title: 'Contact', link: '#footer' },
    { id: 4, title: 'Register', link: '#register' },
    { id: 5, title: 'The Organizer', link: 'organizer' }, // ✅ Normal page
  ];

  const renderLink = (link) => (
    <a
      href={link.link}
      className="inline-block py-1 px-1 text-lg font-semibold hover:text-teal-600"
    >
      {link.title}
    </a>
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

        <div className={`w-full bg-white flex flex-col items-center gap-2 transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}>
          {NavbarLinks.map((link) => (
            <li key={link.id} className="list-none w-full text-center p-4">
              {renderLink(link)}
            </li>
          ))}
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
