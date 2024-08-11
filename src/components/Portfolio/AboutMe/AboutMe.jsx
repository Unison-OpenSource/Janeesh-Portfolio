import Aboutmeinfocard from "./Aboutmeinfocard/Aboutmeinfocard";
import github from "./github.svg";
import linkedin from "./LinkedIN.png";
import What from "./wi.png";
import x from "./xx.jpg";
import yt from "./yt.png";

import AboutForm from "./AboutForm";

const AboutMe = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="text-center font-bold mb-8">
        <h1 className="text-2xl md:text-4xl lg:text-5xl">Follow Me</h1>
      </div>

      <div className="flex flex-wrap justify-center mb-8">
        {/* Centering social media cards */}
        <div className="w-1/3 sm:w-1/4 lg:w-1/6 mb-4 flex justify-center">
          <a
            href="https://x.com/janeeshofficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Aboutmeinfocard iconUrl={x} text="janeeshofficial" />
          </a>
        </div>
        <div className="w-1/3 sm:w-1/4 lg:w-1/6 mb-4 flex justify-center">
          <a
            href="https://www.youtube.com/@janeeshp6930"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Aboutmeinfocard iconUrl={yt} text="Janeesh P" />
          </a>
        </div>
        <div className="w-1/3 sm:w-1/4 lg:w-1/6 mb-4 flex justify-center">
          <a
            href="https://whatsapp.com/channel/0029VagpP7n6RGJARH1bEJ2Z"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Aboutmeinfocard iconUrl={What} text="Spidey" />
          </a>
        </div>
        <div className="w-1/3 sm:w-1/4 lg:w-1/6 mb-4 flex justify-center">
          <a
            href="https://github.com/janeeshgithub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Aboutmeinfocard iconUrl={github} text="janeeshgithub" />
          </a>
        </div>
        <div className="w-1/3 sm:w-1/4 lg:w-1/6 mb-4 flex justify-center">
          <a
            href="https://www.linkedin.com/in/janeesh-p-880963250/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Aboutmeinfocard iconUrl={linkedin} text="Janeesh P" />
          </a>
        </div>
      </div>

      <div className="text-center font-bold mb-8">
        <h1 className="text-2xl md:text-4xl lg:text-5xl">
          Send a Direct Message
        </h1>
      </div>
      <div className="mb-8 flex justify-center">
        <AboutForm />
      </div>
    </section>
  );
};

export default AboutMe;
