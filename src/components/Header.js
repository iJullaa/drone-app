import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Header.css';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const handleLinkClick = () => {
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  return (
    <>
      <header className="main-header">
        <div className="container">
          <Link to="/" className="logo-link">
            <Logo className="logo-svg" />
          </Link>

          <nav className="main-nav desktop-nav">
            <ul>
              <li>
                <Link smooth to="/#project">
                  About Project
                </Link>
              </li>
              <li>
                <Link smooth to="/#about">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/demo" className="live-demo-button">
                  Live Demo
                </Link>
              </li>
            </ul>
          </nav>

          <button className="hamburger-menu" onClick={toggleMobileMenu}>
            <FaBars />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-top">
          <Link to="/" className="logo-link" onClick={handleLinkClick}>
            <Logo className="logo-svg" />
          </Link>
          <button className="close-menu" onClick={toggleMobileMenu}>
            <FaTimes />
          </button>
        </div>

        <nav className="mobile-nav-links">
          <ul>
            <li>
              <Link smooth to="/#project" onClick={handleLinkClick}>
                About Project
              </Link>
            </li>
            <li>
              <Link smooth to="/#about" onClick={handleLinkClick}>
                About Us
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mobile-nav-bottom">
          <Link
            to="/demo"
            className="live-demo-button"
            onClick={handleLinkClick}
          >
            Live Demo
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
