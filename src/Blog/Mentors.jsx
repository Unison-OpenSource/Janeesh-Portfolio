import React, { useState, useEffect } from "react";
import mentorsData from "./Mentors.json"; // Adjust the path if needed

const Mentors = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    // Set the mentors data from the JSON file
    setMentors(mentorsData);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 md:p-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 md:mb-8">Placement Stories</h2>
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {mentors.map((mentor) => (
          <div
            key={mentor.id}
            className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-300"
          >
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">{mentor.title}</h3>
              <h4 className="text-lg font-medium mb-2 text-gray-600">{mentor.subheading}</h4>
              <p className="text-gray-600">{mentor.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentors;
