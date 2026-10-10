import type { Metadata } from "next";
import { PageHeader } from "@/components/site/page-header";
import { Services } from "@/components/site/services";
import { CtaBand } from "@/components/site/cta-band";


export const metadata: Metadata = {
  title: "Security Services — Guards, Cameras & Vehicle Patrol",
  description:
    "Edgeway Security offers three divisions of protection: armed & unarmed guards and off-duty police, security camera installation with 24/7 monitoring, and marked vehicle patrol. Cameras and vehicles monitored 24/7 by dispatch. Get a free quote: (747) 370-4640.",
  alternates: { canonical: "https://edgewaysecurity.com/services" },
  openGraph: {
    title: "Security Services — Guards, Cameras & Vehicle Patrol | Edgeway Security",
    description:
      "Armed & unarmed guards, off-duty police, camera installation & 24/7 monitoring, and vehicle patrol — all monitored by dispatch.",
    url: "https://edgewaysecurity.com/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Security Built Around Your Site"
        intro="Three divisions — guards, cameras, and vehicle patrol — each tailored to your property and each monitored 24/7 by our dispatch. No templates, no guesswork."
        backgroundImage="/images/AdobeStock_717094244.jpeg"
        backgroundImageAlt="Security camera installation and monitoring setup"
      />
      <Services />
      <CtaBand
        title="Need Help Choosing a Service?"
        body="Tell us about your site and we'll recommend the right combination of guards, cameras, and patrol — backed by 20+ years of experience."
      />
    </>
  );
}
