"use client";
import { Activity, useEffect, useState } from "react";
import { Link } from "react-scroll";
import SectionWrapper from "../section-wrapper";
import ProjectCard from "./projectCard";
// data => filter => limit + distirubution
interface Props {
  projectsData: PROJECTGROUP[];
}

const Projects = ({ projectsData }: Props) => {
  // const categories = ['All', ...Array.from(new Set(projects.map((s) => s.category)))]

  const categories = projectsData.map((item) => item.category);

  // const [category, setCategory] = useState(categories[0] || "All")
  const [category, setCategory] = useState(categories[0]);

  // const [filteredProjects, setFilteredProjects] = useState(
  //   projects
  // );
  const [viewAll, setViewAll] = useState(false);

  // const filterProjects = (cat: string) => {
  //   setViewAll(false);
  //   setCategory(cat);
  //   // cat === "All" ? setFilteredProjects(projects) :
  //   setFilteredProjects(
  //     projects.filter(
  //       (p: project) => p.category.toLowerCase() === cat.toLowerCase(),
  //     ),
  //   );
  // };

  useEffect(() => {
    // filterProjects(
    //   categories.includes("MERN Stack") ? "MERN Stack" : categories[0],
    // );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SectionWrapper id="projects" className="mx-4 md:mx-0 min-h-screen">
      <h2 className="text-4xl text-center">Projects</h2>

      {/* catagories */}
      <div className="overflow-x-auto scroll-hide md:w-full max-w-screen-sm mx-auto mt-6 flex justify-between items-center gap-2 md:gap-3  p-2 rounded-md">
        {categories.map((name, i) => (
          <span
            key={i}
            onClick={() => console.log("ok")}
            className={`p-1.5 md:p-2 w-full text-sm md:text-base text-center capitalize rounded-md  cursor-pointer transition-all ${
              category.toLowerCase() === name.toLowerCase()
                ? "bg-primary/60 "
                : "hover:bg-primary-70 "
            }`}
          >
            {name}
          </span>
        ))}
      </div>

      {/* Projects Cards */}
      <div className="md:mx-6 lg:mx-auto lg:w-5/6 2xl:w-3/4 my-4 md:my-8 mx-auto grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-10">
        {/* {filteredProjects
          // .slice(0, viewAll ? filteredProjects.length : 6)
          .map((p, i: number) => (
            <ProjectCard key={i} {...p} />
          ))} */}

        {projectsData.map((group, i) => (
          <Activity
            key={"avtivity" + i}
            mode={
              group.category.toLowerCase() === category.toLowerCase()
                ? "visible"
                : "hidden"
            }
          >
            {group.items.map((project, i) => (
              <ProjectCard
                key={"projectcard" + project.name + i}
                {...project}
              />
            ))}
          </Activity>
        ))}
      </div>
      {/* button to see all if more than 6 */}
      {/* {filteredProjects.length > 6 && (
        <ViewAll
          scrollTo="projects"
          title={viewAll ? "Okay, I got it" : "View All"}
          handleClick={() => setViewAll(!viewAll)}
        />
      )} */}
    </SectionWrapper>
  );
};

export default Projects;

type MouseEventHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;

export const ViewAll = ({
  handleClick,
  title,
  scrollTo,
}: {
  handleClick: MouseEventHandler;
  title: string;
  scrollTo: string;
}) => {
  return (
    <>
      <div className="bg-white dark:bg-grey-900 w-4/5 mx-auto blur-xl z-20 -translate-y-14 h-16"></div>

      <div className="text-center -translate-y-24">
        {title === "View All" ? (
          <button
            onClick={handleClick}
            className={`bg-violet-600 text-white px-4 ${title === "View All" ? "animate-bounce" : "animate-none"} py-1.5 rounded-md hover:shadow-xl transition-all`}
          >
            {title}
          </button>
        ) : (
          <Link
            to={scrollTo}
            className={`bg-violet-600 text-white px-4 ${title === "View All" ? "animate-bounce" : "animate-none"} cursor-pointer py-1.5 rounded-md hover:shadow-xl transition-all`}
            offset={-60}
            smooth={true}
            duration={500}
            // @ts-expect-error will return void
            onClick={() => handleClick()}
          >
            {title}
          </Link>
        )}
      </div>
    </>
  );
};
