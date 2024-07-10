import React from "react";
import Profile from "./me.jpg"; // Import your CSS file for Hero component styling

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center py-20">
      <div className="hero-bg"></div>
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-semibold text-white mb-4">
              Building Something that is Irreplaceable
            </h2>
            <p className="text-lg text-white mb-8">
              FullStack Developer | AI Enthusiast | Coder | Content Creator
            </p>
          </div>

          <div className="md:w-1/2 md:ml-6">
            <div className="w-73 h-73 border-2 border-blue-100 flex items-center justify-center">
              <img
                src={Profile}
                className="w-full h-auto transform transition duration-300 hover:scale-110"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
