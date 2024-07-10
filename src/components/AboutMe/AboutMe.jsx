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
      <h5 className="text-2xl font-semibold mb-6">Contact</h5>

      <div className="flex flex-wrap justify-center mb-8">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <Aboutmeinfocard iconUrl={email} text="janeeshpofficial@gmail.com" />
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <Aboutmeinfocard iconUrl={github} text="janeeshgithub" />
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <Aboutmeinfocard iconUrl={linkedin} text="Janeesh P" />
        </div>
      </div>

      <div className="mb-8">
        <AboutForm />
      </div>
    </section>
  );
};

export default AboutMe;
