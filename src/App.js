import React from 'react';
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home"
import About from "./components/about/About";
import Skills from "./components/skill/Skills";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Testimonial from "./components/testimonal/Testimonial";
import Experience from "./components/experience/Experience";

function App() {
  return (
      <>
      <Header />
          <main className="main">
              <Home />
              <About />
              <Experience />
              <Skills />
              <Testimonial />
          </main>
          <Footer />
          <ScrollUp />
      </>
  );
}

export default App;
