import React from "react";

const Categories = ({ onSelectCategory }) => {
  const categories = ["Tech", "Lifestyle", "Health", "Travel"];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold text-black mb-4">Categories</h2>
      <ul className="flex flex-wrap justify-center space-x-4">
        {categories.map((category) => (
          <li
            key={category}
            className="text-xl p-4 bg-white shadow-md rounded-md cursor-pointer hover:bg-gray-200 transition duration-300"
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
