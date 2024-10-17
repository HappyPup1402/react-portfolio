import React, { useState } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [activeSection] = useState('about-me');

  return (
    <div>
      <Header />
      <main>
        {activeSection === 'about-me' && <AboutMe />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'contact' && <Contact />}
        {activeSection === 'resume' && <Resume />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
