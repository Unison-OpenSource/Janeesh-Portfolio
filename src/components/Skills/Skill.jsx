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
    <section className="skills-container flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 md:items-start">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:flex-1">
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

      <div className="md:ml-8 md:flex-1">
        <div className="md:mt-8">
          <SkillInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section>
  );
};

export default Skill;
