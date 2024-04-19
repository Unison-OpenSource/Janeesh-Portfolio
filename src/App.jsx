import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skill from './components/Skills/Skill';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import About from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';
import Ac from './components/AnimatedCard/AnimatedCard';
import Quote from './components/quote/quote';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div id="home"><Hero /></div>
        <div id="skills"><Skill /></div>
        <div id="projects"><Projects /></div>
        <div id="experience"><Experience /></div>
        <div id="contact"><About /></div>
        <Quote />
        <div id="ac"><Ac/></div>
        <Footer />
      </div>
    </>
  )
}

export default App;
