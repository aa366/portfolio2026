import React from "react";
import { MYPROJECTS } from "@/constants/data";
import Projects from "./projects/projects";
export default function MyProjects() {
  return (
    <>
      <Projects projectsData={MYPROJECTS} />
    </>
  );
}
