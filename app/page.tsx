import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import {
  Shift,
  WhatWeDo,
  Ecosystem,
  OperatingModel,
  TargetCompanies,
  Vision,
  CTA,
} from "@/components/Sections";

export default function Page() {
  return (
    <>
      <div className="bg" aria-hidden="true">
        <div className="bg-grid" />
        <div className="bg-topo" />
        <div className="bg-glow bg-glow--a" />
        <div className="bg-glow bg-glow--b" />
        <div className="bg-noise" />
      </div>

      <Nav />

      <main id="top">
        <Hero />
        <Shift />
        <WhatWeDo />
        <Ecosystem />
        <OperatingModel />
        <TargetCompanies />
        <Vision />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
