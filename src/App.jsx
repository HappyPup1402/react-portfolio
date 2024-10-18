import React, { useState } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('about-me');

  const renderSection = () => {
    switch (currentSection) {
      case 'about-me':
        return <AboutMe />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div>
      <Header setCurrentSection={setCurrentSection} />
      {renderSection()}
      <Footer />
    </div>
  );
}

export default App;
