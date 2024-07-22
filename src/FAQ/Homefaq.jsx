import React, { useState } from "react";

// Sample card data
const cardData = [
  { id: 1, title: "Card Title 1", description: "This is a short description for card 1." },
  { id: 2, title: "Card Title 2", description: "This is a short description for card 2." },
  { id: 3, title: "Card Title 3", description: "This is a short description for card 3." },
  { id: 4, title: "Card Title 4", description: "This is a short description for card 4." },
  { id: 5, title: "Card Title 5", description: "This is a short description for card 5." },
];

const CardsWithSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCards = cardData.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
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
