import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "./logobl.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="bg-opacity-25 bg-black backdrop-blur-lg sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        <div className="flex items-center">
          <button onClick={() => navigate("/")}>
            <img className="h-10" src={logo} alt="JANEESH P" />
          </button>
        </div>
        <div className="hidden md:flex space-x-6">
          <ul className="flex space-x-4">
            {["home", "skills", "projects", "contact"].map((section) => (
              <li key={section}>
                <a
                  className="text-white text-xl p-1 font-medium cursor-pointer transition duration-300 hover:text-blue-500"
                  onClick={() => scrollToSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <Button text="Coming!" onClick={() => navigate("/soon")} />
          <Button text="My World" onClick={() => navigate("/design")} />
        </div>
        <button
          className="md:hidden bg-gradient-to-r from-black to-black text-white px-4 py-2 rounded-md text-lg font-medium hover:bg-black hover:text-white transition duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-opacity-25 bg-black backdrop-blur-lg absolute top-0 left-0 w-full py-4">
          <ul className="flex flex-col items-center space-y-4">
            {["home", "skills", "projects", "contact"].map((section) => (
              <li key={section}>
                <a
                  className="text-white text-lg font-medium cursor-pointer transition duration-300 hover:text-blue-500"
                  onClick={() => scrollToSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
            <li>
              <Button text="Coming!" onClick={() => navigate("/soon")} />
            </li>
            <li>
              <Button text="My World" onClick={() => navigate("/design")} />
            </li>
            <li>
              <button
                className="text-white text-lg font-medium"
                onClick={() => setMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

const Button = ({ text, onClick }) => {
  return (
    <button
      className="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
      onClick={onClick}
    >
      {text}
      <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
      <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
      <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
      <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
        Explore
      </span>
    </button>
  );
};

export default Navbar;
