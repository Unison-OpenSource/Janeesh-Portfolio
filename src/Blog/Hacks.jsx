import React, { useState, useEffect } from "react";
import hacksData from "./Hacks.json"; // Adjust the path if needed

const Hacks = () => {
  const [hacks, setHacks] = useState([]);

  useEffect(() => {
    // Set the hacks data from the JSON file
    setHacks(hacksData);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
      <h2 className="text-3xl font-bold text-white mb-8">Hacks</h2>
      <ul className="space-y-4 w-full max-w-3xl">
        {hacks.map((hack) => (
          <li
            key={hack.id}
            className="bg-gray-800 shadow-md rounded-md p-6 transform transition-transform duration-500 hover:scale-105 hover:shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-2 text-white">{hack.title}</h3>
            <p className="text-gray-300">{hack.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hacks;
