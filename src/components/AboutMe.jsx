import React from 'react';
import meImage from '../assets/me.jpg';

function AboutMe() {
  return (
    <section id="about-me">
      <h2>About Me</h2>
      <img src={meImage} alt="Developer's avatar" />
      <p>
        Hi, I'm Izaac Ramirez, a UC Merced graduate with a Bachelor's degree in Computer Science and Engineering, specializing in software development. Passionate about building comprehensive software solutions from front-end to back-end. Strong believer in maintaining a balanced lifestyle, with hobbies including fitness training, video gaming, and hiking.
      </p>
    </section>
  );
}

export default AboutMe;
