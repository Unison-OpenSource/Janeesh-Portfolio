import React from "react";
import Profile from "./me.jpg"; // Import your CSS file for Hero component styling

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center py-20">
      <div className="hero-bg absolute inset-0 z-0"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-semibold text-white mb-4">
              The Best Project You’ll Ever Work On Is You
            </h2>
            <p className="text-lg text-white mb-8">
              FullStack Developer | AI Enthusiast | Coder | Content Creator |
              Top Voice | Fitness Lover | .....
            </p>
          </div>

          <div className="md:w-1/2 md:ml-6 flex justify-center">
            <div className="w-72 h-72 border-2 border-blue-100 flex items-center justify-center">
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
