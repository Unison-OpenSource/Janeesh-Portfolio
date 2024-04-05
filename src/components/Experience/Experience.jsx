import React from 'react'
import './Experience.css'
import { WORK_EXPERIENCE } from '../../utils/data';
import ExperienceCard from './ExperienceCard/ExperienceCard';
const Experience = () => {
    
  return (
    <section className="experience-container">
        <h5>Experience</h5>

        <div className="experience-content">
            {WORK_EXPERIENCE.map((item) => (
                <ExperienceCard key={item.title} details={item} />
            ))}
        </div>
        </section>
  );
};

export default Experience;
