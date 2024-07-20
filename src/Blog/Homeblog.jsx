import React from "react";
import Typewriter from "react-typewriter-effect";

const Homeblog = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 md:flex-row">
      <h1 className="text-4xl font-bold text-black mb-4 md:mb-0 md:mr-8">
        <Typewriter
          textStyle={{
            fontFamily: "Red Hat Display",
            color: "#00000",
            fontWeight: 500,
            fontSize: "2em",
          }}
          startDelay={2000}
          cursorColor="#00000"
          multiText={[
            "Welcome to the Blog",
            "Janeesh P Welcomes You",
            "I love You",
          ]}
          multiTextDelay={1000}
          typeSpeed={30}
          multiTextLoop
        />
      </h1>
    </div>
  );
};

export default Homeblog;
