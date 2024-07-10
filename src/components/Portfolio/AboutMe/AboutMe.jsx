import React from "react";
import Aboutmeinfocard from "./Aboutmeinfocard/Aboutmeinfocard";
import email from "./email.png";
import github from "./github.svg";
import linkedin from "./LinkedIN.png";
import Instagram from "./Instagram.png";
import AboutForm from "./AboutForm";

const AboutMe = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="text-center font-bold">
        <br></br>
        <h1 className="text-2xl md:text-4xl lg:text-5xl">Follow Me</h1>
        <br></br>
      </div>

      <div className="flex flex-wrap justify-center mb-8">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <Aboutmeinfocard iconUrl={Instagram} text="janeeshp_" />
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <Aboutmeinfocard iconUrl={github} text="janeeshgithub" />
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <Aboutmeinfocard iconUrl={linkedin} text="Janeesh P" />
        </div>
      </div>
      <div className="text-center font-bold">
        <br></br>
        <h1 className="text-2xl md:text-4xl lg:text-5xl">
          Send a Direct Message
        </h1>
        <br></br>
      </div>
      <div className="mb-8">
        <AboutForm />
      </div>
    </section>
  );
};

export default AboutMe;
