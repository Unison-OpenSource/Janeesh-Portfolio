import React from 'react';

const ProjectCard = ({ project, id }) => {
  const { title, imagesrc, description, skills, demo, source } = project;

  return (
    <div key={id}>
      <img src={imagesrc} alt={`image of ${title}`} />
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {/* Use skills.map to render each skill as an li element */}
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <div>
        <a href={demo}>Demo</a>
      </div>
    </div>
  );
};

export default ProjectCard;
