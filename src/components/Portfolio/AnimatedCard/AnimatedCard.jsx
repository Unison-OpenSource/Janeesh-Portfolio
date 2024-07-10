import React, { useState } from "react";
import { motion } from "framer-motion";
import cardsData from "./AnimatedCardsData.json";
import pic from "/src/assets/LOGOS-main/Apple.png";

const AnimatedCard = () => {
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  const animated = {
    layout: "position",
    animate: { opacity: 1 },
    transition: { delay: 0.3 },
    initial: { opacity: 0 },
  };

  return (
    <>
      <div className="text-center font-bold">
        <br></br>
        <h1 className="text-2xl md:text-4xl lg:text-5xl">Channel</h1>
        <br></br>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cardsData.map((card, index) => (
          <motion.div
            key={index}
            className={`p-4 bg-violet-700 rounded-lg cursor-pointer relative overflow-hidden ${
              expandedCardIndex === index ? "shadow-lg" : ""
            }`}
            layout
            onClick={() => {
              setExpandedCardIndex(expandedCardIndex === index ? null : index);
            }}
          >
            <motion.h3
              {...animated}
              className="text-white text-lg font-semibold mb-2"
            >
              {card.title}
            </motion.h3>

            <motion.p {...animated} className="text-white mb-4">
              {card.content}
            </motion.p>

            {expandedCardIndex === index && (
              <>
                <motion.img
                  {...animated}
                  src={card.image || pic}
                  alt="demo image"
                  className="w-full h-48 object-cover rounded-lg mb-2"
                />

                <motion.p {...animated} className="text-white mb-4">
                  {card.additionalContent}
                </motion.p>

                <motion.div {...animated} className="flex justify-end">
                  <motion.a
                    href={card.visitLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <motion.button className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300">
                      Visit
                    </motion.button>
                  </motion.a>
                </motion.div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AnimatedCard;
