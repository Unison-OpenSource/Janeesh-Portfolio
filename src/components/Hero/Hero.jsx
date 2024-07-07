import React from "react";
import Profile from "./me.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>
          Progress is impossible without change, and those who cannot change
          their minds cannot change anything
        </h2>
        <p>
          FullStack Developer | AI Enthusiast | Coder | Content Creator
          <br />
        </p>
      </div>

      <div className="hero-img">
        <div className="tech-icon">
          <img src={Profile} height={400} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
