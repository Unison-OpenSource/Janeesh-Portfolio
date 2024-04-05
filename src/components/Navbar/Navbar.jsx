import React from 'react';
import logo from './logo.png';
import "./Navbar.css";
const Navbar = () => {
  return (
   <>
   <nav className="nav-wrapper">
    <div className="nav-content">
        <img className="logo" src={logo} alt="JANEESH P" />

        <ul>
        <li>
            <a className="menu-item">Home</a>
        </li>
        <li>
            <a className="menu-item">Skills</a>
        </li>
        <li>
            <a className="menu-item">Projects</a>
        </li>
        <li>
            <a className="menu-item">About Me</a>
        </li>
        <li>
            <a className="menu-item">Experience</a>
        </li>

        <button className="contact-btn" onClick={() => {}}>
        PingMe
        </button>
        </ul>

         <button className="menu-btn" onClick={()=>{}}>
            <span
                class="material-symbols-oulined"
                style={{ fontSize:"1.8rem"}}
            >
            Menu
            </span>
        </button>
    </div>
   </nav>
   </>
  )
}

export default Navbar
