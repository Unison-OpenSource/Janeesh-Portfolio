import React from 'react';
import logo from './logo.png';
import "./Navbar.css";

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <ul>
            <li>
              <a className="menu-item" onClick={() => scrollToSection('home')}>Hero</a>
            </li>
            <li>
              <a className="menu-item" onClick={() => scrollToSection('skills')}>Skills</a>
            </li>
            <li>
              <a className="menu-item" onClick={() => scrollToSection('projects')}>Projects</a>
            </li>
            <li>
              <a className="menu-item" onClick={() => scrollToSection('experience')}>Experience</a>
            </li>
            <li>
              <a className="menu-item" onClick={() => scrollToSection('ac')}>Channel</a>
            </li>
            <li>
              <a className="menu-item" onClick={() => scrollToSection('contact')}>Contact</a>
            </li>
          </ul>

          <img className="logo" src={logo} alt="JANEESH P" /> {/* Moved the logo after the menu */}

          <button className="contact-btn" onClick={() => { alert('YOU CLICKED THE WRONG BUTTON') }}>
            Magic
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar;

