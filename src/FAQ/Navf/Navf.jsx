import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logoblf.png";

const Navf = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-opacity-25 bg-black backdrop-blur-lg fixed top-0 left-0 right-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        <button onClick={() => navigate("/")}>
          <img className="h-10" src={logo} alt="JANEESH P" />
        </button>

        {/* Button on the right side */}
        <ul className="flex space-x-4">
          <li>
            <button
              className="bg-red-400 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
              onClick={() => navigate("/blog")}
            >
              Blog
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navf;
