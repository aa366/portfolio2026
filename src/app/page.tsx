import Experience from "@/components/Experience";
import Hero from "@/components/hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
