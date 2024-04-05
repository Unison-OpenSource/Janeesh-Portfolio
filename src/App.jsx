import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skill from './components/Skills/Skill'
import Experience from './components/Experience/Experience'
import AboutMe from './components/AboutMe/AboutMe'
import Projects from './components/Projects/Projects'


const App = () => {
  return (
    <>
    <Navbar/>
      <div className="container">
      <Hero />
      <Skill />
      <Experience/>
      <Projects />
      <AboutMe />

    </div>
    </>
  )
}

export default App
