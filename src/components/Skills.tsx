import React from "react";
import Skills from "./skills/Skills";
import { MYSKILLS } from "@/constants/data";

export default function MySkills() {
  return (
    <>
      <Skills skillData={MYSKILLS} />
    </>
  );
}
