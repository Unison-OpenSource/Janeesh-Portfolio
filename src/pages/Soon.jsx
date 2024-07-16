import React from "react";

import { Typewriter } from "react-simple-typewriter";

const Soon = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 text-center">
        <Typewriter
          words={["I Will Reveal Soon ....."]}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <br />
    </div>
  );
};

export default Soon;
