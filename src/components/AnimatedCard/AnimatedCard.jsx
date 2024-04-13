import React, { useState } from "react";
import "./AnimatedCard.css";
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
    <h1>Channels</h1>
    <div className="projects-container">
      {cardsData.map((card, index) => (
        <motion.div
          key={index}
          className={`project-card ${expandedCardIndex === index ? "expanded" : ""}`}
          layout
          onClick={() => {
            setExpandedCardIndex(expandedCardIndex === index ? null : index);
          }}
        >
          <motion.h3 layout="position">{card.title}</motion.h3>

          <motion.p layout="position">{card.content}</motion.p>

          {expandedCardIndex === index && (
            <>
              <motion.img
                {...animated}
                src={card.image || pic}
                alt="demo image"
              />

              <motion.p {...animated}>{card.additionalContent}</motion.p>

              <motion.div {...animated} className="btn-container">
                <motion.a
                  href={card.visitLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button>
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
