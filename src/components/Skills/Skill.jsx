import React, { useState } from "react";
import { SKILLS } from "../../utils/data";
import SkillCard from "./SkillCard/SkillCard";
import SkillInfoCard from "./SkillInfoCard/SkillInfoCard";

const Skill = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <section className="skills-container flex flex-col items-center justify-center gap-8">
      <div className="text-center font-bold">
        <h1>Proficiency</h1>
      </div>

      <div className="flex overflow-x-auto md:overflow-x-visible items-center">
        {SKILLS.map((item) => (
          <SkillCard
            key={item.title}
            iconUrl={item.icon}
            title={item.title}
            isActive={selectedSkill.title === item.title}
            onClick={() => handleSelectSkill(item)}
          />
        ))}
      </div>

      <div className="mt-8">
        <SkillInfoCard
          heading={selectedSkill.title}
          skills={selectedSkill.skills}
        />
      </div>
    </section>
  );
};

export default Skill;
