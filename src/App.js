import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
// import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Skills';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      {/* <Skills /> */}
      <Education/>
      <Projects />
      <Contact />
    </>
  );
}

export default App;
