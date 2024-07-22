import React, { useState, useEffect } from "react";
import categoriesData from "./Faq.json"; // Import JSON data

const CardsWithSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("category1"); // Default category
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Load cards based on the selected category
    setCards(categoriesData[selectedCategory] || []);
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Category Selector */}
      <div className="w-full max-w-md mb-4">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
        </select>
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-md mb-8">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Cards Container */}
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
          >
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsWithSearch;
