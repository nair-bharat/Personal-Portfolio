import React from 'react';
import Header from './components/header.js'
import AboutMe from './components/aboutme.js'
import Skills from './components/skills.js'
import Footer from './components/footer.js'
import './resources/style.css'

const App = () => (
  <div>
    <div>
      <Header />
      <AboutMe />
      <Skills />
    </div>
    <Footer />
  </div>
);

export default App;
