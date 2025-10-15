import React from "react";
import Hero from "../components/hero/Hero";
import Projects from "../components/projects/Projects";
import SkillsGarage from "../components/skills/SkillsGarage";
import Education from "../components/education/Education";
import PitLane from "../components/gallery/PitLane.jsx";
import TeamRadio from "../components/contact/TeamRadio";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Projects />
      <SkillsGarage />
      <Education />
      <PitLane />
      <TeamRadio />
    </div>
  );
}
