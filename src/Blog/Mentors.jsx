import React, { useState, useEffect } from "react";
import mentorsData from "./Mentors.json"; // Adjust the path if needed

const getRandomColor = () => {
  // Function to generate a random color
  const colors = [
    "#FF5733", "#33FF57", "#3357FF", "#F333FF", "#FFEB33",
    "#33FFF2", "#FF5733", "#FF8C00", "#8A2BE2", "#7FFF00",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const Mentors = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    // Set the mentors data from the JSON file
    setMentors(mentorsData);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 md:p-12 bg-gray-900">
      <h2 className="text-3xl font-bold text-white mb-6 md:mb-8">Placement Stories</h2>
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {mentors.map((mentor) => (
          <div
            key={mentor.id}
            className="shadow-md rounded-lg overflow-hidden border border-gray-700"
            style={{ backgroundColor: getRandomColor() }}
          >
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-white">{mentor.title}</h3>
              <h4 className="text-lg font-medium mb-2 text-white">{mentor.subheading}</h4>
              <p className="text-white">{mentor.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentors;
