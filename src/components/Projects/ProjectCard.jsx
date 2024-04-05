import React from 'react'

const ProjectCard = ({
    project : { title,imagesrc,description,skills,demo,source
}}) => {
  return (
    <div key={id}>
                <img src={project.imagesrc} alt={`image of ${project.title}` }/>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>{
        project.skills.map((skill, id) => {
        <li key={id}>{skill}</li>
    })}</ul>
    <div>
    <a href={project.demo}>Demo</a>
    </div>
            </div>
  )
}

export default ProjectCard
