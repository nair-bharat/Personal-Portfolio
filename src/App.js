import React from 'react';
import Header from './components/header.js';
import AboutMe from './components/aboutme.js';
import Skills from './components/skills.js';
import Footer from './components/footer.js';
import Project from './components/projects.js';

const App = () => (
  <div>
    <div>
      <Header />
      <AboutMe />
      <Skills />
      <Project/>
    </div>
    <Footer />
  </div>
);

export default App;
