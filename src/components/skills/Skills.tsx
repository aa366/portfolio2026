"use client";
import { Activity, useState } from "react";
import SkillCard from "./SkillCard";
import SectionWrapper from "../section-wrapper";
import { useIsHydrated } from "radix-ui/internal";

interface Props {
  skillData: SKILLGROUP[];
}

const Skills = ({ skillData }: Props) => {
  const title = "Tech Stack";
  const isHydrated = useIsHydrated();
  const categories = skillData.map((s) => s.category);

  const [category, setCategory] = useState(categories[0]);

  if (!isHydrated) {
    return null;
  }
  return (
    <SectionWrapper id="skills" className="w-full">
      <h2 className="text-4xl text-center">{title}</h2>

      {/* catagories */}

      <div className="md:w-1/2 overflow-x-auto scroll-hide lg:w-1/3 mx-auto mt-6 p-2 flex justify-between items-center gap-3 rounded-md bg-primary/10">
        {categories.map((name, i) => (
          <span
            key={i + "CATAGORY"}
            onClick={() => setCategory(name)}
            className={`p-1.5 md:p-2 text-sm md:text-base w-full text-center cursor-pointer rounded-md ${
              category.toLowerCase() === name.toLowerCase()
                ? "bg-primary/70  "
                : ""
            } transition-all capitalize`}
          >
            {name}
          </span>
        ))}
      </div>

      {/* icons */}
      <div className="lg:w-3/4 2xl:w-3/5 my-8 mx-auto md:px-12 grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 place-items-center gap-8">
        {skillData.map((group, i) => (
          <Activity
            key={"avtivity" + i}
            mode={
              group.category.toLowerCase() === category.toLowerCase()
                ? "visible"
                : "hidden"
            }
          >
            {group.skills.map((skill, i) => (
              <SkillCard key={"skillcard" + skill.name + i} {...skill} />
            ))}
          </Activity>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
