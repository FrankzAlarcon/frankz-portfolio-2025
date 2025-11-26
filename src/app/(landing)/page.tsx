import { AboutMe } from "@/features/landing/components/about-me";
import { Certifications } from "@/features/landing/components/certifications";
import { Experience } from "@/features/landing/components/experience";
import { Hero } from "@/features/landing/components/hero";
import Projects from "@/features/landing/components/projects";
import { Skills } from "@/features/landing/components/skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <Certifications />
      <Projects />
      <AboutMe />
    </>
  );
}
