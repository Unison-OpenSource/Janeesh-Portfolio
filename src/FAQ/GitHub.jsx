import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div className="flex flex-col items-center pb-10 bg-black text-white">
      <h1 className="text-4xl font-bold mb-5">
        Days I <span className="text-gray-500">Code</span>
      </h1>
      <div className="bg-gray-800 shadow-md rounded-lg p-5">
        <GitHubCalendar
          username="janeeshgithub"
          blockSize={15}
          blockMargin={5}
          color="#9CA3AF" // Tailwind's gray-400 color
          fontSize={16}
        />
      </div>
    </div>
  );
}

export default Github;
