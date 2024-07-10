import React from "react";

const ExperienceCard = ({ details }) => {
  return (
    <div className="bg-purple-900 border border-blue-800 rounded-lg p-4 mb-6">
      <h6 className="text-xl font-semibold mb-2">{details.title}</h6>
      <div className="inline-block bg-purple-600 text-white rounded-md px-3 py-1 text-sm font-medium mb-4">
        {details.date}
      </div>
      <ul>
        {details.responsibilities.map((item, index) => (
          <li key={index} className="relative text-base font-normal mb-3">
            {item}
            <span className="absolute left-0 top-1/3 w-2 h-2 bg-purple-700 rounded-full"></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
