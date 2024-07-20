import React from "react";
import Typewriter from "react-typewriter-effect";

const Homeblog = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 md:flex-row">
      <h1 className="text-4xl font-bold text-pink-800 mb-4 md:mb-0 md:mr-8">
        <Typewriter
          textStyle={{
            fontFamily: "'Comic Sans MS', cursive",
            color: "#D43F6C",
            fontWeight: 600,
            fontSize: "2.5em",
          }}
          startDelay={1000}
          cursorColor="#D43F6C"
          multiText={[
            "Welcome to the Blog",
            "Janeesh P Welcomes You",
            "This site is under Construction",
          ]}
          multiTextDelay={1000}
          typeSpeed={60}
          multiTextLoop
        />
      </h1>
    </div>
  );
};

export default Homeblog;
