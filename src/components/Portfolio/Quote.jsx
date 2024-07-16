import React, { useState, useEffect } from "react";
import axios from "axios";

const Quote = () => {
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
    <div className="text-center p-4">
      <h2 className="text-lg font-semibold">{quote}</h2>

      <button
        onClick={fetchQuote}
        className="bg-purple-950 text-purple-400 border border-purple-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
      >
        <span className="bg-purple-400 shadow-purple-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
        Send
      </button>
    </div>
  );
};

export default Quote;
