import type { Metadata } from "next";
import { PageHeader } from "@/components/site/page-header";
import { Contact } from "@/components/site/contact";

export const metadata: Metadata = {
  title: "Contact Edgeway Security — Free Quote",
  description:
    "Get a free security assessment from Edgeway Security. Call (747) 370-4640 or email info@edgewaysecurity.com. 24/7 dispatch, serving the Greater Los Angeles area. Request your free quote today.",
  alternates: { canonical: "https://edgewaysecurity.com/contact" },
  openGraph: {
    title: "Contact Edgeway Security — Free Quote",
    description:
      "Call (747) 370-4640 or request a free quote online. 24/7 dispatch, serving the Greater Los Angeles area.",
    url: "https://edgewaysecurity.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Get Your Free Security Assessment"
        intro="Tell us about your site and we'll build a tailored quote — usually within one business day. Prefer to talk? Call us now at (747) 370-4640."
        backgroundImage="/images/security-patch.jpg"
        backgroundImageAlt="Close-up of a security officer's uniform with a gold SECURITY patch"
      />
      <Contact />
    </>
  );
}
