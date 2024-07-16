import Navbar from "../components/Portfolio/Navbar/Navbar";
import Hero from "../components/Portfolio/Hero/Hero";
import Skill from "../components/Portfolio/Skills/Skill";
import Projects from "../components/Portfolio/Projects/Projects";
import About from "../components/Portfolio/AboutMe/AboutMe";
import Footer from "../components/Portfolio/Footer";
import Map from "../components/Portfolio/Map";
import Quote from "../components/Portfolio/Quote";
import Ja from "../components/Portfolio/Ja";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div id="home">
          <Hero />
        </div>
        <div id="skills">
          <Skill />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <About />
        </div>
        <div>
          <Quote />
        </div>
        <div>
          <Map />
        </div>
        <div>
          <Ja />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
