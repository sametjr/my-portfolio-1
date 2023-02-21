import React from "react";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Technologies from "./components/technologies/Technologies";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Navigation";

const App = () => {
  return (
    <>
      <Header />
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <Navigation />
    </>
  );
};

export default App;
