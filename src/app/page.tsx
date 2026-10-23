import Experience from "@/components/Experience";
import Hero from "@/components/hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

import Contact from "@/components/Contact";
import SelectTheme from "@/components/layouts/navbar/SelectTheme";
import { ModeToggle } from "@/components/layouts/navbar/trigger";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 my-5">
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <div className=" hidden">
        <SelectTheme />
        <ModeToggle />
      </div>
    </main>
  );
}
