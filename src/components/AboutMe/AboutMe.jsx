import React from "react";
import "./AboutMe.css";
import Aboutmeinfocard from "./Aboutmeinfocard/Aboutmeinfocard";
import email from "./email.png";
import github from "./github.svg";
const AboutMe = () => {
  return (
    <section className="contact-container">
      <h5>About Me</h5>
      <div className="contact-content"></div>
      <div style={{ flex: 1 }}></div>
      <Aboutmeinfocard iconUrl={email} texts="janeeshpofficial@gmail.com" />
      <Aboutmeinfocard iconUrl={github} text="janeeshpofficial@gmail.com" />
      <Aboutmeinfocard iconUrl={github} texts="janeeshpofficial@gmail.com" />
      <Aboutmeinfocard iconUrl={email} texts="janeeshpofficial@gmail.com" />
      <div style={{ flex: 1 }}></div>
    </section>
  );
};

export default AboutMe;
