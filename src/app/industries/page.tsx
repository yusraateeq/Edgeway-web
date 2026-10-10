import type { Metadata } from "next";
import { PageHeader } from "@/components/site/page-header";
import { Industries } from "@/components/site/industries";
import { CtaBand } from "@/components/site/cta-band";


export const metadata: Metadata = {
  title: "Industries We Secure",
  description:
    "Edgeway Security protects schools, construction sites, warehouses, stores, hospitals, shopping centers, plazas, government sites, and dams. Cleared, trained personnel matched to your industry's risk profile. Get a free assessment: (747) 370-4640.",
  alternates: { canonical: "https://edgewaysecurity.com/industries" },
  openGraph: {
    title: "Industries We Secure | Edgeway Security",
    description:
      "From campuses to critical infrastructure — cleared, trained security personnel for 9+ industries.",
    url: "https://edgewaysecurity.com/industries",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Who We Protect"
        title="Industries We Secure"
        intro="From campuses to critical infrastructure, Edgeway has the cleared, trained personnel to match your site's risk profile — across nine industries and counting."
        backgroundImage="/images/AdobeStock_926070665.jpeg"
        backgroundImageAlt="Security professionals protecting a commercial facility"
      />
      <Industries />
      <CtaBand
        title="Don't See Your Industry?"
        body="If it needs protecting, we've got it covered. Talk to us about your site and we'll build a custom security plan."
      />
    </>
  );
}
