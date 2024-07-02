import React from "react";
import logo from "./logo.png";
import "./Navbar.css";

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const openLink = () => {
    window.location.href =
      "https://drive.google.com/file/d/1vji0j71bvfGj6-8DCcnIX9svwkS1IWte/view?usp=sharing";
  };

  return (
    <>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src={logo} alt="JANEESH P" />{" "}
          {/* Moved the logo after the menu */}
          <ul>
            <li>
              <a className="menu-item" onClick={() => scrollToSection("home")}>
                Hero
              </a>
            </li>
            <li>
              <a
                className="menu-item"
                onClick={() => scrollToSection("skills")}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="menu-item"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="menu-item"
                onClick={() => scrollToSection("experience")}
              >
                Experience
              </a>
            </li>
            <li>
              <a className="menu-item" onClick={() => scrollToSection("ac")}>
                Channel
              </a>
            </li>
            <li>
              <a
                className="menu-item"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
          <button className="contact-btn" onClick={openLink}>
            RESUME
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
