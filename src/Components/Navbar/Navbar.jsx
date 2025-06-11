import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/images/universitylogos.png';
import Search from '../../assets/search.png';
import User from '../../assets/profile-user.png';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Apply theme to body
  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="University Logo" className="nav-logo" />

        <ul className="nav-links">
          <li>Home</li>
          <li>Program</li>
          <li>About Us</li>
          <li>University</li>
          <li>Testimonials</li>
          <li>Contact Us</li>
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

      {/* Overlay */}
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}

      {/* Side Drawer */}
      <div className={`side-drawer ${menuOpen ? 'open' : ''}`}>
        <FaTimes className="close-icon" onClick={() => setMenuOpen(false)} />
        <ul>
          <li onClick={() => setMenuOpen(false)}>Home</li>
          <li onClick={() => setMenuOpen(false)}>Program</li>
          <li onClick={() => setMenuOpen(false)}>About Us</li>
          <li onClick={() => setMenuOpen(false)}>University</li>
          <li onClick={() => setMenuOpen(false)}>Testimonials</li>
          <li onClick={() => setMenuOpen(false)}>Contact Us</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
