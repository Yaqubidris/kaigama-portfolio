// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Kaigama Yusuf</div>
      
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>Biography</Link>
        <Link to="#achievements" onClick={() => setIsOpen(false)}>Achievements</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        {/* <Link to="/customs-service" onClick={() => setIsOpen(false)}>Customs</Link> */}
        {/* <Link to="/yobe-government" onClick={() => setIsOpen(false)}>Yobe Govt</Link> */}
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
