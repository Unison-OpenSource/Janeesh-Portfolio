import React from "react";
import project from "./Projects.json";
import "./Projects.css";
import spidey from "./spid.jpg";
const Projects = () => {
  return (
    <>
      <div className="text-center font-bold">
        <h1 className="text-2xl md:text-4xl lg:text-5xl">Projects</h1>
        <br></br>
      </div>
      <div className="projects-container">
        {project.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.imagesrc || spidey} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>Skills: {project.skills.join(", ")}</p>
            <div className="project-links">
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Demo
              </a>
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
