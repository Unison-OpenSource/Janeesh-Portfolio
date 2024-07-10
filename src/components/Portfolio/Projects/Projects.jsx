import React from 'react'
import project from "./Projects.json"
import './Projects.css'
const Projects = () => {
  return (<>
    <h1 className="text-2xl font-semibold mb-8 md:mb-0">Projects</h1><br/>
    <div className="projects-container">
      {project.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.imagesrc} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>Skills: {project.skills.join(', ')}</p>
          <div className="project-links">
            <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
            <a href={project.source} target="_blank" rel="noopener noreferrer">Source</a>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Projects;
