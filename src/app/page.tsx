"use client";

import { Hero } from "@/components/features/Hero";
import { VideoPortfolio } from "@/components/features/VideoPortfolio";
import { TechStack } from "@/components/features/TechStack";
import { Projects } from "@/components/features/Projects";
import { Footer } from "@/components/features/Footer";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />
      <VideoPortfolio />
      <Projects />
      <TechStack />
      <Footer />
    </div>
  );
}
