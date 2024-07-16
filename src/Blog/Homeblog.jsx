import { Typewriter } from "react-simple-typewriter";
import sp from "./sp.png";

const Homeblog = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 md:flex-row">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 md:mb-0 md:mr-8">
        <Typewriter
          words={["Welcome to the Blog"]}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <img
        src={sp}// Replace with your image URL
        alt="Blog Image"
        className="w-100 h-100 object-cover rounded-md"
      />
    </div>
  );
};

export default Homeblog;
