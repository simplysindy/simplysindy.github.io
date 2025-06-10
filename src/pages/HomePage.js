import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Publications from '../components/sections/Publications';
import Blog from '../components/sections/Blog';
import Contact from '../components/sections/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Blog />
      <Projects />
      <Publications />
      <Contact />
    </>
  );
};

export default HomePage; 