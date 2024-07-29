import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div className="flex flex-col items-center pb-10  text-white">
      <div className="bg-gray-800 shadow-md rounded-lg p-5 w-full sm:w-4/5 lg:w-3/5">
        <GitHubCalendar
          username="janeeshgithub"
          blockSize={10} // Adjusted for better visibility on mobile
          blockMargin={5}
          color="#9CA3AF" // Tailwind's gray-400 color
          fontSize={12} // Adjusted for better visibility on mobile
        />
      </div>
    </div>
  );
}

export default Github;
