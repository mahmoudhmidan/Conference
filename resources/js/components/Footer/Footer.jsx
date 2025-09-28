import React from 'react';
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#03045E] text-white py-10" id="footer">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo & About */}
        <div>
          <img src="/assets/img/Logo_.png" alt="CodeBox Logo" className="w-32 mb-4"/>
          <p className="text-gray-300 text-sm">
            CodeBox is a creative agency specializing in event management, web and app development, 
            and branding solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="/organizer" className="hover:text-white transition">Organizer</a></li>
            <li><a href="#scientific-committee" className="hover:text-white transition">Speakers</a></li>
            <li><a href="#agenda" className="hover:text-white transition">Agenda</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="font-bold text-lg mb-3">Contact Us</h3>
          <p className="text-gray-300 text-sm mb-2">Email: Info@whatanart.net</p>
          <p className="text-gray-300 text-sm mb-2">Phone: <a href="" className="hover:text-white transition">123456789</a></p>
          <div className="flex gap-4">
            <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaInstagram size={20}/>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaFacebook size={20}/>
            </a>
            <a href="mailto:info@whaanart.net" className="hover:text-white transition">
              <FaEnvelope size={20}/>
            </a>
          </div>
        </div>

      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} WhatAnArt. All rights reserved.
      </div>
    </footer>
  );
}
