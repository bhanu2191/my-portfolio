"use client";

import { Hero } from "@/components/features/Hero";

import { TechStack } from "@/components/features/TechStack";
import { Projects } from "@/components/features/Projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />
      <TechStack />
      <Projects />
    </div>
  );
}
