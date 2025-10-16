"use client";

import { useEffect, useRef } from "react";
import Hero from "./components/Hero";
import Information from "./components/Information";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";

export default function Home() {
  const sections = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.3 },
    );

    sections.current.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen  bg-gray-950 text-gray-100">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col sm:flex-row gap-10 justify-center items-center text-center ">
        <Hero />
      </section>

      {/* About Section */}
      <section
        ref={(el) => (sections.current[0] = el)}
        className="min-h-screen flex flex-col justify-center items-center text-center transition-all duration-700 opacity-0 translate-y-10 bg-gray-900"
      >
        <AboutMe />
      </section>

      <section
        ref={(el) => (sections.current[1] = el)}
        className="min-h-screen flex flex-col justify-center items-center text-center transition-all duration-700 opacity-0 translate-y-10 bg"
      >
        <Information />
      </section>

      <section
        ref={(el) => (sections.current[2] = el)}
        className="min-h-screen flex flex-col justify-center items-center text-center transition-all duration-700 opacity-0 translate-y-10 bg-gray-900"
      >
        <Projects />
      </section>
    </main>
  );
}
