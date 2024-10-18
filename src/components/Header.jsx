import React from 'react';

function Header({ setCurrentSection }) {
  return (
    <header>
      <h1>Izaac Ramirez</h1>
      <nav>
        <ul>
          <li>
            <button onClick={() => setCurrentSection('about-me')}>About Me</button>
          </li>
          <li>
            <button onClick={() => setCurrentSection('projects')}>Portfolio</button>
          </li>
          <li>
            <button onClick={() => setCurrentSection('contact')}>Contact</button>
          </li>
          <li>
            <button onClick={() => setCurrentSection('resume')}>Resume</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
