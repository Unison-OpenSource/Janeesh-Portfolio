import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Homed = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 text-center">
        <Typewriter
          words={["This is my World Without You"]}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <br />
      <h1 className="text-xl sm:text-4xl font-bold text-gray-800 text-center">
        <Typewriter
          words={["Empty"]}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={1000}
          deleteSpeed={10}
          delaySpeed={1000}
        />
      </h1>

      <div className="w-full flex justify-center mt-4">
        <div className="relative w-80 h-80">
          <iframe
            src="https://giphy.com/embed/3oEduFTfx1FRTRGfEQ"
            width="100%"
            height="100%"
            style={{ position: "absolute" }}
            frameBorder="0"
            className="giphy-embed rounded"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Homed;
