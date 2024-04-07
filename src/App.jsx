import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skill from './components/Skills/Skill'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import About from  './components/AboutMe/AboutMe'


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

    </div>
    </>
  )
}

export default App
