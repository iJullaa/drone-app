import React, { useState } from 'react';
import './Header.css';
import { ReactComponent as Logo } from '../assets/logo.svg';

// Importing icons for the hamburger menu and the close 'X'
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  // State that tracks if the mobile menu is open or closed
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu state
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // This function ensures the menu closes when a link is clicked
  const handleLinkClick = () => {
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  return (
    <>
      {/* --- MAIN, VISIBLE HEADER --- */}
      <header className="main-header">
        <div className="container">
          <a href="/" className="logo-link">
            <Logo className="logo-svg" />
          </a>

          {/* Navigation for desktop (disappears on mobile) */}
          <nav className="main-nav desktop-nav">
            <ul>
              <li><a href="#project">About Project</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#report" className="report-button">Live Demo</a></li>
            </ul>
          </nav>

          {/* Hamburger menu button (appears on mobile) */}
          <button className="hamburger-menu" onClick={toggleMobileMenu}>
            <FaBars />
          </button>
        </div>
      </header>

      {/* --- SLIDE-OUT MOBILE MENU (OVERLAY) --- */}
      {/* We use a conditional 'open' class to control the animation */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-top">
          <a href="/" className="logo-link" onClick={handleLinkClick}>
            <Logo className="logo-svg" />
          </a>
          <button className="close-menu" onClick={toggleMobileMenu}>
            <FaTimes />
          </button>
        </div>
        
        {/* Mobile navigation links, consistent with desktop */}
        <nav className="mobile-nav-links">
          <ul>
            <li><a href="#project" onClick={handleLinkClick}>About Project</a></li>
            <li><a href="#about" onClick={handleLinkClick}>About Us</a></li>
          </ul>
        </nav>

        {/* The button at the bottom of the mobile menu */}
        <div className="mobile-nav-bottom">
            <a href="#report" className="report-button" onClick={handleLinkClick}>Live Demo</a>
        </div>
      </div>
    </>
  );
};

export default Header;