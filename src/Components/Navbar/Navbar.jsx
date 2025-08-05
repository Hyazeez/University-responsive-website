import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/images/universitylogos2.png';
import Search from '../../assets/search.png';
import User from '../../assets/user.png';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { Link, ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <img src={logo} alt="University Logo" className="nav-logo" />

        <ul className="nav-links">
          <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
          <li><Link to='program' smooth={true} offset={-330} duration={500}>Program</Link></li>
          <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
          <li><Link to='university' smooth={true} offset={-250} duration={500}>University</Link></li>
          <li><Link to='testimonials' smooth={true} offset={-300} duration={500}>Testimonials</Link></li>
          <li><Link to='contact' smooth={true} offset={-250} duration={500}>Contact Us</Link></li>
        </ul>

        <div className="navbar-right">
          <img src={Search} alt="Search" />
          <img src={User} alt="User" />
          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <FaBars className="hamburger" onClick={() => setMenuOpen(true)} />
        </div>
      </nav>

      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}

      <div className={`side-drawer ${menuOpen ? 'open' : ''}`}>
        <FaTimes className="close-icon" onClick={() => setMenuOpen(false)} />
        <ul>
          <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
          <li><Link to='program' smooth={true} offset={-330} duration={500}>Program</Link></li>
          <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
          <li><Link to='university' smooth={true} offset={-250} duration={500}>University</Link></li>
          <li><Link to='testimonials' smooth={true} offset={-300} duration={500}>Testimonials</Link></li>
          <li><Link to='contact' smooth={true} offset={-250} duration={500}>Contact Us</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
