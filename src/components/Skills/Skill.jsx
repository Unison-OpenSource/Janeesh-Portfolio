import React, { useState } from "react";
import { SKILLS } from "../../utils/data";
import SkillCard from "./SkillCard/SkillCard";
import SkillInfoCard from "./SkillCard/SkillInfoCard";

const Skill = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <section className="skills-container flex flex-col items-center justify-center gap-8 min-h-screen px-4 py-8">
      <div className="text-left font-bold">
        <h1 className="text-2xl md:text-4xl lg:text-5xl">Proficiency</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-4 md:justify-start">
        {SKILLS.map((item) => (
          <div key={item.title} className="w-40 md:w-43 mb-4 md:mb-0">
            <SkillCard
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() => handleSelectSkill(item)}
            />
          </div>
        ))}
      </div>

      <div className="w-full max-w-screen-lg mx-auto mt-8">
        <SkillInfoCard
          heading={selectedSkill.title}
          skills={selectedSkill.skills}
        />
      </div>
    </section>
  );
};

export default Skill;
