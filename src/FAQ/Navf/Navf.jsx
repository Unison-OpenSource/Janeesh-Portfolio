import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "./logoblf.png";

const Navf = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <nav className="bg-gray-700 bg-opacity-75 backdrop-blur-lg sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2">
        <div className="flex items-center">
          <button onClick={() => navigate("/")}>
            <img className="h-8" src={logo} alt="JANEESH P" />
          </button>
        </div>
        <div className="hidden md:flex space-x-4">
          <Button text="New" onClick={() => navigate("/soon")} />
          <Button text="Blog" onClick={() => navigate("/blog")} />
        </div>
        <button
          className="md:hidden text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-600 transition duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon
            icon={menuOpen ? faTimes : faBars}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gray-700 bg-opacity-75 backdrop-blur-lg absolute top-0 left-0 w-full py-2">
          <ul className="flex flex-col items-center space-y-2">
            <li>
              <Button text="New" onClick={() => navigate("/soon")} />
            </li>
            <li>
              <Button text="Blog" onClick={() => navigate("/blog")} />
            </li>
            <li>
              <button
                className="text-white text-lg font-medium"
                onClick={() => setMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faTimes} aria-label="Close menu" />
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
      className="relative w-24 p-2 h-10 bg-gray-700 text-white border-none rounded-md text-lg font-bold cursor-pointer relative z-10 group overflow-hidden"
      onClick={onClick}
    >
      {text}
      <span className="absolute w-32 h-24 -top-8 -left-2 bg-gray-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
      <span className="absolute w-32 h-24 -top-8 -left-2 bg-gray-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
      <span className="absolute w-32 h-24 -top-8 -left-2 bg-gray-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
      <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2 left-4 z-10">
        Explore
      </span>
    </button>
  );
};

export default Navf;
