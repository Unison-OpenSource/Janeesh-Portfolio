import React from "react";

const Categories = ({ onSelectCategory }) => {
  const categories = ["Tech", "Lifestyle", "Health", "Travel"];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 md:p-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 md:mb-8">Categories</h2>
      <ul className="flex flex-wrap justify-center space-x-4 md:space-x-6 lg:space-x-8">
        {categories.map((category) => (
          <li
            key={category}
            className="text-lg md:text-xl p-4 bg-white shadow-md rounded-md cursor-pointer hover:bg-gray-200 transition duration-300 transform hover:scale-105"
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
