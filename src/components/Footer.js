import React from 'react';
import './Footer.css';

// Importujemy ikony z biblioteki, którą właśnie zainstalowaliśmy
import { FaLinkedinIn, FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        
        {/* --- GÓRNA SEKCJA STOPKI --- */}
        <div className="footer-top">
          <div className="language-selector">
            Global / English <span>▼</span>
          </div>
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          </div>
        </div>

        {/* --- DOLNA SEKCJA STOPKI --- */}
        <div className="footer-bottom">
          <div className="legal-links">
            <a href="/privacy">Privacy</a>
            <a href="/compliance">Compliance & Disclosures</a>
          </div>
          <p className="copyright">
            &copy; {new Date().getFullYear()} Drone App Inc. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;