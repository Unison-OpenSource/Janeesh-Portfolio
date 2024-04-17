import React from 'react'
import './App.css'
import Quote from './components/quote/quote'
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
      <Quote/>
      <Skill />
      <Projects/>
      <Experience/>
      <Ac/>
      <About/>
      <Footer/> 
    </div>
    </>
  )
}

export default App
