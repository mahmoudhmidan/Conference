import React, { useState } from 'react';
import './NavigationBar.css';
import { Link } from 'react-router-dom';

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenuWithDelay = () => {
    const menu = document.querySelector('nav.mobile ul');
    if (menu) {
      menu.classList.remove('open');
      menu.classList.add('closing');
      setTimeout(() => {
        setMenuOpen(false);
        menu.classList.remove('closing');
      }, 300);
    } else {
      setMenuOpen(false);
    }
  };
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenuWithDelay(); // Close the menu after scrolling on mobile
    }
  };

  return (
    <>
      <nav role="navigation" aria-label="Main" className="mobile">
        <div className="logo">
          <a aria-label="we care company logo" href="#">
          <img src="./images/Logo/logo.png" className="logo-image"/>
          </a>
        </div>
        {menuOpen ? null : (
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="menu-toggle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        )}

        <ul className={`py-4 ${menuOpen ? 'open' : ''}`}>
          <button onClick={toggleMenu} className="menu-close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <li>
            <a href="#home" onClick={closeMenuWithDelay}>Home</a>
          </li>
          <li>
            <a href="#services" onClick={closeMenuWithDelay}>Services</a>
          </li>
          <li>
            <a href="#machines" onClick={closeMenuWithDelay}>Machines</a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenuWithDelay}>Projects</a>
          </li>
          <li>
            <a href="#gallery" onClick={closeMenuWithDelay}>Gallery</a>
          </li>
          <li>
            <Link to={'/news-page'} onClick={closeMenuWithDelay}>News</Link>
          </li>
          <li>
            <a href="#about" onClick={closeMenuWithDelay}>About Us</a>
          </li>
          <li className="contact-item">
          <button
              aria-label="live chat"
              className="contact-button"
              onClick={scrollToContact}
            >
              Contact US
            </button>
          </li>
        </ul>
      </nav>

      <nav role="navigation" aria-label="Main" className="desktop">
        <div className="logo">
          <a aria-label="we care company logo" href="#">
           <img src="./images/Logo/logo.png" className="logo-image"/>
          </a>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
            <a href="#services">Services</a>
          </li>
            <li>
              <a href="#machines">Machines</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
            <Link  to={'/news-page'}>News</Link>
          </li>
            <li>
              <a href="#about">About Us</a>
            </li>
          </ul>
          <div className="contact-button-container">
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              aria-label="live chat"
              className="contact-button"
            >
              Contact US
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
