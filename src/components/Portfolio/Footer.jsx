import React, { useState, useEffect } from "react";
import axios from "axios";

const Footer = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await axios.get("https://type.fit/api/quotes");
      const randomQuote =
        response.data[Math.floor(Math.random() * response.data.length)];
      setQuote(`${randomQuote.text} - ${randomQuote.author || "Unknown"}`);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 ">
      <div className="flex flex-col items-center mb-1">
        <h2 className="text-lg font-semibold mb-3">{quote}</h2>
        <button
          onClick={fetchQuote}
          className="relative border hover:border-purple-600 duration-500 group cursor-pointer text-purple-50 overflow-hidden h-14 w-56 rounded-md bg-purple-800 p-2 flex justify-center items-center font-extrabold"
        >
          <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-purple-900 delay-150 group-hover:delay-75"></div>
          <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-purple-800 delay-150 group-hover:delay-100"></div>
          <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-purple-700 delay-150 group-hover:delay-150"></div>
          <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-purple-600 delay-150 group-hover:delay-200"></div>
          <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-purple-500 delay-150 group-hover:delay-300"></div>
          <p className="z-10">Discover</p>
        </button>
      </div>
      <div className="text-center text-xl p-4">
        ❤❤ Janeesh P ❤❤
        <br />
        Let's Connect
        <br />
        Let's Grow
      </div>
    </div>
  );
};

export default Footer;
