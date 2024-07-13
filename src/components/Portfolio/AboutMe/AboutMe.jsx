import React from "react";
import Aboutmeinfocard from "./Aboutmeinfocard/Aboutmeinfocard";
import github from "./github.svg";
import linkedin from "./LinkedIN.png";
import Instagram from "./Instagram.png";
import What from "./wi.png";
import x from "./xx.jpg";
import yt from "./yt.png";

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
          <a
            href="https://www.instagram.com/janeeshp_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Aboutmeinfocard iconUrl={Instagram} text="janeeshp_" />
          </a>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <a
            href="https://x.com/janeeshofficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Aboutmeinfocard iconUrl={x} text="janeeshofficial" />
          </a>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <a
            href="https://www.instagram.com/janeeshp_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Aboutmeinfocard iconUrl={yt} text="janeeshp_" />
          </a>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <a
            href="https://whatsapp.com/channel/0029VagpP7n6RGJARH1bEJ2Z"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Aboutmeinfocard iconUrl={What} text="janeeshp_" />
          </a>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <a
            href="https://github.com/janeeshgithub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Aboutmeinfocard iconUrl={github} text="janeeshgithub" />
          </a>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <a href="" target="_blank" rel="noopener noreferrer">
            <Aboutmeinfocard iconUrl={linkedin} text="Janeesh P" />
          </a>
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
