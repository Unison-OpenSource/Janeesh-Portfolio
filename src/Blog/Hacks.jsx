import React from "react";

const Hacks = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold text-black mb-4">
        Hacks
      </h2>
      <ul className="space-y-4 w-full max-w-3xl">
        <li className="bg-white shadow-md rounded-md p-6">
          <h3 className="text-2xl font-semibold mb-2">Hack 1</h3>
          <p className="text-gray-700">
            Details about Hack 1.
          </p>
        </li>
        <li className="bg-white shadow-md rounded-md p-6">
          <h3 className="text-2xl font-semibold mb-2">Hack 2</h3>
          <p className="text-gray-700">
            Details about Hack 2.
          </p>
        </li>
        {/* Add more hacks as needed */}
      </ul>
    </div>
  );
};

export default Hacks;
