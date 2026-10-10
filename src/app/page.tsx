import { Hero } from "@/components/site/hero";
import { Stats } from "@/components/site/stats";
import { ServicesPreview } from "@/components/site/services-preview";
import { IndustriesPreview } from "@/components/site/industries-preview";
import { AboutTeaser } from "@/components/site/about-teaser";
import { CtaBand } from "@/components/site/cta-band";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesPreview />
      <IndustriesPreview />
      <AboutTeaser />
      <CtaBand />
    </>
  );
}
