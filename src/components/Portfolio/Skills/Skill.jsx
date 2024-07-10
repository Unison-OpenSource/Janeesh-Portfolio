import React, { useState } from "react";
import { SKILLS } from "./data";
import SkillCard from "./SkillCard";
import SkillInfoCard from "./SkillInfoCard";

const Skill = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <section className="skills-container flex flex-col items-center justify-center gap-8 min-h-screen px-4 py-8">
      <div className="text-center font-bold">
        <h1 className="text-2xl md:text-4xl lg:text-5xl">Proficiency</h1>
      </div>

      <div className="w-full max-w-screen-lg mx-auto mt-8">
        <SkillInfoCard
          heading={selectedSkill.title}
          skills={selectedSkill.skills}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {SKILLS.map((item) => (
          <div
            key={item.title}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4"
          >
            <SkillCard
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() => handleSelectSkill(item)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
