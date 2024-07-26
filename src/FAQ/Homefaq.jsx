import React, { useState, useEffect } from "react";
import categoriesData from "./Faq.json";
import Snippet from "./Snippet";
import Github from "./GitHub";

const Homefaq = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(""); // Default category
  const [cards, setCards] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);

  useEffect(() => {
    // Set available categories from categoriesData
    const categories = Object.keys(categoriesData);
    setCategoryOptions(categories);

    // Load cards based on the selected category
    if (categories.length > 0) {
      setSelectedCategory(categories[0]); // Set default category to the first one
    }
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setCards(categoriesData[selectedCategory] || []);
    }
  }, [selectedCategory]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-900">
      {/* Category Selector */}
      <div className="w-full max-w-md mb-6">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full p-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-0 focus:border-gray-500"
        >
          {categoryOptions.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-md mb-8">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-0 focus:border-gray-500"
        />
      </div>

      {/* Cards Container */}
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className="bg-gray-800 shadow-md rounded-lg overflow-hidden border border-gray-700 transform transition-transform duration-500 hover:scale-105 hover:shadow-lg"
          >
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-white">
                {card.title}
              </h2>
              <p className="text-gray-300">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Snippet />
      <Github />
    </div>
  );
};

export default Homefaq;
