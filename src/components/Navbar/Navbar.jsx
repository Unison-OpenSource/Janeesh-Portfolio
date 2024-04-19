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
          <img className="logo" src={logo} alt="JANEESH P" />

          <ul>
            <li>
              <a className="menu-item" onClick={() => scrollToSection('home')}>Home</a>
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

          <button className="contact-btn" onClick={() => { alert('My num= 98X11 971XX , Scroll to the end to find X?') }}>
            Magic
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
