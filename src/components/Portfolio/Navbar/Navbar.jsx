import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close the menu after clicking on a section link
    }
  };

  const openLink = (url) => {
    window.open(url, "_blank");
    setMenuOpen(false); // Close the menu after clicking on a link
  };

  return (
    <nav className="bg-opacity-25 bg-black backdrop-blur-lg sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        <div className="flex items-center">
          <img className="h-10" src={logo} alt="JANEESH P" />
        </div>
        <div className="hidden md:flex space-x-6">
          <ul className="flex space-x-4">
            <li>
              <a
                className="text-white text-xl p-1 font-medium cursor-pointer transition duration-300 hover:text-blue-500"
                onClick={() => scrollToSection("home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-white text-xl p-1 font-medium cursor-pointer transition duration-300 hover:text-blue-500"
                onClick={() => scrollToSection("skills")}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="text-white text-xl p-1 font-medium cursor-pointer transition duration-300 hover:text-blue-500"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </a>
            </li>

            <li>
              <a
                className="text-white text-xl p-1 font-medium cursor-pointer transition duration-300 hover:text-blue-500"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
          <button
            className="bg-gradient-to-r from-gray-400 to-gray-500 text-white px-4 py-2 rounded-md text-lg font-medium hover:bg-black hover:text-black transition duration-300"
            onClick={() => navigate("/blog")}
          >
            Blog
          </button>
          <button
            className="bg-gradient-to-r from-gray-400 to-gray-500 text-white px-4 py-2 rounded-md text-lg font-medium hover:bg-black hover:text-black transition duration-300"
            onClick={() => navigate("/design")}
          >
            My World
          </button>
          <button
            className=" bg-gradient-to-r  from-purple-400 to-blue-500 text-white px-4 py-2 rounded-md text-lg font-medium hover:bg-black hover:text-black transition duration-300"
            onClick={() =>
              openLink(
                "https://drive.google.com/file/d/1vji0j71bvfGj6-8DCcnIX9svwkS1IWte/view?usp=sharing"
              )
            }
          >
            RESUME
          </button>
        </div>
        <button
          className="md:hidden bg-gradient-to-r from-purple-400 to-blue-500 text-white px-4 py-2 rounded-md text-lg font-medium hover:bg-black hover:text-blue-500 transition duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-opacity-25 bg-black backdrop-blur-lg absolute top-0 left-0 w-full py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <a
                className="text-white text-lg font-medium cursor-pointer transition duration-300 hover:text-blue-500"
                onClick={() => {
                  scrollToSection("home");
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-white text-lg font-medium cursor-pointer transition duration-300 hover:text-blue-500"
                onClick={() => {
                  scrollToSection("skills");
                }}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="text-white text-lg font-medium cursor-pointer transition duration-300 hover:text-blue-500"
                onClick={() => {
                  scrollToSection("projects");
                }}
              >
                Projects
              </a>
            </li>

            <li>
              <a
                className="text-white text-lg font-medium cursor-pointer transition duration-300 hover:text-blue-500"
                onClick={() => {
                  scrollToSection("contact");
                }}
              >
                Contact
              </a>
            </li>
            <li>
              <button
                className="bg-gradient-to-r from-gray-400 to-gray-500 text-white px-4 py-2 rounded-md text-lg font-medium hover:bg-black hover:text-gray-500 transition duration-300 w-full"
                onClick={() => navigate("/blog")}
              >
                Blog
              </button>
            </li>
            <li>
              <button
                className="bg-gradient-to-r from-gray-400 to-gray-500 text-white px-4 py-2 rounded-md text-lg font-medium hover:bg-black hover:text-gray-500 transition duration-300 w-full"
                onClick={() => navigate("/design")}
              >
                My World
              </button>
            </li>
            <li>
              <button
                className="bg-gradient-to-r from-purple-400 to-blue-500 text-white px-4 py-2 rounded-md text-lg font-medium hover:bg-black hover:text-blue-500 transition duration-300 w-full"
                onClick={() =>
                  openLink(
                    "https://drive.google.com/file/d/1vji0j71bvfGj6-8DCcnIX9svwkS1IWte/view?usp=sharing"
                  )
                }
              >
                RESUME
              </button>
            </li>
            <li>
              <button
                className="bg-gradient-to-r from-red-400 to-red-500 text-white px-4 py-2 rounded-md text-lg font-medium hover:bg-black hover:text-red-500 transition duration-300 w-full"
                onClick={() => setMenuOpen(false)}
              >
                Close
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
