// src/pages/index.tsx
import About from "@/sections/About";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects/>
    </>
  );
}
