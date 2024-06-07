import React from "react"
import './MobileNav.css'

const MobileNav = (isOpen,toggleMenu) => {
    const [openMenu,setOpenMenu]=useState(false);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
    <div className={`mobile-menu ${isOpen ? "active":""}`}
    onClick={toggleMenu}>
    <div className="mobile-menu-container">
        <img className="logo" src="/src/components/Navbar/logo.png" alt=""/>
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


          <button className="contact-btn" onClick={() => { alert('THANKS FOR CLICKING') }}>
            Download CV
          </button>
    </div>
    </div>
    </>
  );
}
export default MobileNav