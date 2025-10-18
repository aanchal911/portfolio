import React from "react";
import Hero from "./components/Hero";
import SolarSystem from "./components/SolarSystem";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Hero />
      <SolarSystem />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;