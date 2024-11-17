'use client'
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import TechStack from "@/app/sections/TechStack";
import Experience from "@/app/sections/Experience";
import Header from "@/app/components/Header";

export default function Home() {
  return (
      <>
        <Header />
        <About />
        <Experience/>
        <TechStack/>
        <Projects />
        <Contact />
      </>
  );
}
