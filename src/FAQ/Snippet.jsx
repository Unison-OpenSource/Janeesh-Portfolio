import React from 'react';
import ProgressCard from './ProgressCard'; // Adjust the path as necessary

const Snippet = () => {
  // You can adjust the number of cards or use dynamic data as needed
  const cards = [1, 2, 3, 4, 5];

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="w-full max-w-sm mx-auto">
            <ProgressCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Snippet;
