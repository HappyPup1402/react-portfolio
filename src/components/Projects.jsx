import React from 'react';

const projects = [
  {
    title: 'Capstone-Project',
    description: 'Western Digital sought to address issues like lack of customization and outdated methods in their current training system. I was responsible for developing the back-end infrastructure of a centralized platform, which streamlined communication, enhanced efficiency, and tracked employee training progress effectively.',
    githubLink: 'https://github.com/HappyPup1402/Capstone-Project',
  },
  {
    title: 'Employee Tracker',
    description: 'The Employee Tracker is a command-line application designed to manage a company\'s employee database. It allows users to interact with the database to view, add, and update company departments, roles, and employees.',
    githubLink: 'https://github.com/HappyPup1402/employee-tracker',
  },
  {
    title: 'Weather Dashboard',
    description: 'The Weather Dashboard is a user-friendly web application that allows travelers to search for and view current and future weather conditions for multiple cities. This app consumes the OpenWeather API to provide users with essential weather data, including temperature, humidity, wind speed, and a 5-day forecast, making it easier for users to plan their trips effectively.',
    deployLink: 'https://weather-dashboard-kt09.onrender.com',
    githubLink: 'https://github.com/HappyPup1402/weather-dashboard',
  },
  {
    title: 'Vehicle Builder',
    description: 'Vehicle Builder is a command-line application that allows users to create or select an existing vehicle and perform actions on it. Users can continuously interact with their chosen vehicle through a menu of available actions until they decide to exit the application.',
    githubLink: 'https://github.com/HappyPup1402/vehicle-builder',
  },
  
];

function Projects() {
    return (
        <section id="projects">
        <h2>Portfolio</h2>
        <div className="projects-grid">
            {projects.map((project, index) => (
            <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.deployedLink && (
                <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                    View Deployed App
                </a>
                )}
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                View on GitHub
                </a>
            </div>
            ))}
        </div>
        </section>
    );
}

export default Projects;