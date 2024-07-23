import React from "react";
import Typewriter from "react-typewriter-effect";

const Homeblog = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black px-4 md:flex-row">
      <h1 className="text-3xl font-bold text-yellow-400 mb-4 md:mb-0 md:mr-8 md:text-4xl">
        <Typewriter
          textStyle={{
            fontFamily: "'Press Start 2P', cursive",
            color: "#FF00FF",
            fontWeight: 700,
            fontSize: "1.5em",
          }}
          startDelay={1000}
          cursorColor="#FF00FF"
          multiText={[
            "Welcome to the Blog",
            "Bright and Bold",
            "Retro Vibes Only",
          ]}
          multiTextDelay={1000}
          typeSpeed={80}
          multiTextLoop
        />
      </h1>
    </div>
  );
};

export default Homeblog;
