import React from "react";
import "./AboutMe.css";
import Aboutmeinfocard from "./Aboutmeinfocard/Aboutmeinfocard";
import email from "./email.png";
import github from "./github.svg";
import  linkedin from "./LinkedIN.png";
import Instagram from "./Instagram.png";
const AboutMe = () => {
  return (
    <section className="contact-container">
      <h5>Contact</h5>
      <div className="contact-content"></div>
      <div style={{ flex: 1 }}></div>
      <Aboutmeinfocard iconUrl={email}    
       text="janeeshpofficial@gmail.com"/>
      <Aboutmeinfocard iconUrl={github} 
       text="janeeshgithub"/>
       <Aboutmeinfocard iconUrl={linkedin} 
       text="Janeesh P"/>
       <Aboutmeinfocard iconUrl={Instagram} 
       text="janeeshp_"/>
      <div style={{ flex: 1 }}></div>

    </section>
  );
};

export default AboutMe;
