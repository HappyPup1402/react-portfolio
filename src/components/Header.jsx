import React from 'react';

function Header() {
  return (
    <header>
      <h1>Your Name</h1>
      <nav>
        <ul>
          <li><a href="#about-me" className="nav-link">About Me</a></li>
          <li><a href="#projects" className="nav-link">Portfolio</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
          <li><a href="#resume" className="nav-link">Resume</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;