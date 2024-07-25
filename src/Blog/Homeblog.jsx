import React from "react";
import Typewriter from "react-typewriter-effect";

const Homeblog = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black px-4">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-4 md:text-4xl">
          <Typewriter
            textStyle={{
              fontFamily: "'Courier New', Courier, monospace",
              color: "#00FF00",
              fontWeight: 400,
              fontSize: "1.8em",
            }}
            startDelay={1000}
            cursorColor="#00FF00"
            multiText={[
              "Welcome to the Blog",
              "Vintage Typewriter Effect",
              "Classic and Timeless",
            ]}
            multiTextDelay={1000}
            typeSpeed={100}
            multiTextLoop
          />
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-200 mb-4 md:text-4xl">
          <Typewriter
            textStyle={{
              fontFamily: "'Roboto', sans-serif",
              color: "#FF5722",
              fontWeight: 500,
              fontSize: "2em",
            }}
            startDelay={1000}
            cursorColor="#FF5722"
            multiText={[
              "Welcome to the Blog",
              "Sleek and Modern",
              "Cutting-edge Design",
            ]}
            multiTextDelay={1000}
            typeSpeed={90}
            multiTextLoop
          />
        </h1>
      </div>
    </div>
  );
};

export default Homeblog;
