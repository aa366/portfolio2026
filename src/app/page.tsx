import Experience from "@/components/Experience";
import Hero from "@/components/hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
