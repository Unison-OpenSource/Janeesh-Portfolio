import React from "react";
import { WORK_EXPERIENCE } from "../../utils/data";
import ExperienceCard from "./ExperienceCard/ExperienceCard";

const Experience = () => {
  return (
    <section className="mt-16 mb-0">
      <h5 className="text-2xl font-semibold mb-10">Experience</h5>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {WORK_EXPERIENCE.map((item) => (
          <ExperienceCard key={item.title} details={item} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
