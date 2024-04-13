import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skill from './components/Skills/Skill'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import About from  './components/AboutMe/AboutMe'
import Footer from './components/Footer/Footer'
import Ac from './components/AnimatedCard/AnimatedCard'


const App = () => {
  return (
    <>
    <Navbar/>
    <div className="container">
      <Hero />
      <Skill />
      <Experience/>
      <Projects />
      <About/>
      <Ac></Ac>
      <Footer/> 
    </div>
    </>
  )
}

export default App
