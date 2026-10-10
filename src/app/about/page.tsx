import type { Metadata } from "next";
import { PageHeader } from "@/components/site/page-header";
import { About } from "@/components/site/about";
import { Stats } from "@/components/site/stats";
import { Process } from "@/components/site/process";
import { CtaBand } from "@/components/site/cta-band";

export const metadata: Metadata = {
  title: "About Edgeway Security — 20+ Years of Protection",
  description:
    "Edgeway Security has 20+ years of experience protecting sites across the Greater Los Angeles area. We work hand in hand with every client to build the right security solution — guards, cameras, and patrol, monitored 24/7 by dispatch.",
  alternates: { canonical: "https://edgewaysecurity.com/about" },
  openGraph: {
    title: "About Edgeway Security — 20+ Years of Protection",
    description:
      "Each site is unique, so are we. 20+ years of professional security, monitored 24/7 by dispatch.",
    url: "https://edgewaysecurity.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Why Edgeway"
        title="Each Site is Unique, So Are We."
        intro="We know each job is different, and each site has its own security needs. That's why we work with you, hand in hand, to develop the right solution for your site, shipment, property, or whatever else you need protecting."
        backgroundImage="/images/AdobeStock_316323272.jpeg"
        backgroundImageAlt="Security team conducting site assessment and patrol"
      />
      <About />
      <Stats />
      <Process />
      <CtaBand
        title="Let's Build Your Security Plan"
        body="From a single guard to a fully monitored patrol program, we'll tailor a solution to your site — usually within one business day."
      />
    </>
  );
}
