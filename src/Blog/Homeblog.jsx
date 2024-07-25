import React from "react";
import Typewriter from "react-typewriter-effect";
import Jan from "./Jj.jpg";

const Homeblog = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black px-4">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-200 mb-4 md:text-4xl">
          <Typewriter
            textStyle={{
              fontFamily: "'Roboto', sans-serif",
              color: "#00BCD4", // Changed color
              fontWeight: 400, // Lighter weight
              fontSize: "1.5em", // Smaller font size
            }}
            startDelay={500} // Shorter delay before typing starts
            cursorColor="#00BCD4"
            multiText={[
              "Discover New Horizons",
              "Innovate and Create",
              "Your Journey Begins Here",
            ]}
            multiTextDelay={2000} // Longer delay between texts
            typeSpeed={60} // Faster typing speed
            multiTextLoop
          />
        </h1>
      </div>
      <div className="relative w-full h-32 mt-8">
        <img
          src={Jan}
          alt="Sliding"
          className="absolute w-32 h-32 object-cover slide-animation"
        />
      </div>
      <style jsx>{`
        @keyframes slide {
          0% {
            left: 0;
          }
          50% {
            left: calc(100% - 8rem); /* 100% width minus image width */
          }
          100% {
            left: 0;
          }
        }
        .slide-animation {
          animation: slide 5s infinite;
        }
      `}</style>
    </div>
  );
};

export default Homeblog;
