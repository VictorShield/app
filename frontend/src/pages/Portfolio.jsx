import React from "react";
import Nav from "../components/Nav";
import Ribbon from "../components/Ribbon";
import Footer from "../components/Footer";
import HeroSection from "../sections/HeroSection";
import PhilosophySection from "../sections/PhilosophySection";
import CaseStudySection from "../sections/CaseStudySection";
import FrameworkSection from "../sections/FrameworkSection";
import ServicesSection from "../sections/ServicesSection";
import ContactSection from "../sections/ContactSection";

export default function Portfolio() {
  return (
    <main data-testid="portfolio-page" className="bg-[#050505] text-white">
      <Nav />
      <HeroSection />
      <Ribbon
        items={[
          "Creative Strategy",
          "Funnel Optimization",
          "Hook Frameworks",
          "Performance Creative",
          "Kill Discipline",
        ]}
      />
      <PhilosophySection />
      <CaseStudySection />
      <Ribbon
        items={[
          "Baby Phat",
          "Y2K Revival",
          "+90.6% ROAS",
          "−47.5% CAC",
          "$1.39M Revenue",
        ]}
        speed={45}
      />
      <FrameworkSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
