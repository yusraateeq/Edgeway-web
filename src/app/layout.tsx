import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { Loader } from "@/components/site/loader";


const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://edgewaysecurity.com";
const PHONE_DISPLAY = "(747) 370-4640";
const PHONE_HREF = "tel:+17473704640";
const EMAIL = "info@edgewaysecurity.com";

// ImageKit URL for SEO/JSON-LD (uses env var with fallback)
const IMAGEKIT_URL = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || SITE_URL;
const LOGO_URL = `${IMAGEKIT_URL}/logo-mark.jpg`;
const FAVICON_URL = `${IMAGEKIT_URL}/favicon.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Edgeway Security | 24/7 Security Guards, Camera & Patrol Services",
    template: "%s | Edgeway Security",
  },
  description:
    "Edgeway Security delivers 20+ years of professional protection — armed & unarmed guards, off-duty police officers, camera installation & 24/7 monitoring, and vehicle patrol. Serving schools, construction sites, warehouses, hospitals, shopping centers, plazas, government sites & dams. Get a free security assessment: (747) 370-4640.",
  keywords: [
    "security guard services",
    "armed security guards",
    "unarmed security guards",
    "off duty police officers",
    "security camera installation",
    "solar security cameras",
    "24/7 camera monitoring",
    "vehicle patrol services",
    "lot patrol",
    "lot escorting",
    "security company",
    "Los Angeles security",
    "Edgeway Security",
  ],
  authors: [{ name: "Edgeway Security" }],
  creator: "Edgeway Security",
  publisher: "Edgeway Security",
  alternates: { canonical: SITE_URL },
  icons: {
    icon: [{ url: FAVICON_URL, type: "image/jpeg" }],
    apple: [{ url: LOGO_URL }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Edgeway Security",
    title: "Edgeway Security | 24/7 Security Guards, Camera & Patrol Services",
    description:
      "20+ years of professional protection. Armed & unarmed guards, off-duty police, camera installation & 24/7 monitoring, and vehicle patrol. Cameras and vehicles monitored 24/7 by dispatch. Get a free quote: (747) 370-4640.",
    images: [
      {
        url: LOGO_URL,
        width: 800,
        height: 783,
        alt: "Edgeway Security logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Edgeway Security | 24/7 Protection You Can Trust",
    description:
      "20+ years of professional security. Guards, cameras & vehicle patrol — monitored 24/7 by dispatch. (747) 370-4640",
    images: [LOGO_URL],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "Security Services",
  other: {
    "format-detection": "telephone=no",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "Edgeway Security",
      description:
        "Professional security services with 20+ years of experience. Armed & unarmed guards, off-duty police officers, camera installation & 24/7 monitoring, and vehicle patrol. Cameras and vehicles monitored 24/7 by dispatch.",
      telephone: PHONE_DISPLAY,
      email: EMAIL,
      url: SITE_URL,
      image: LOGO_URL,
      logo: LOGO_URL,
      priceRange: "$$",
      foundingDate: "2005",
      areaServed: "United States",
      knowsAbout: [
        "Security Guard Services",
        "Armed Security",
        "Unarmed Security",
        "Off Duty Police Officers",
        "Security Camera Installation",
        "Solar Security Cameras",
        "24/7 Camera Monitoring",
        "Vehicle Patrol",
        "Lot Patrolling",
        "Lot Escorting",
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Edgeway Security",
      url: SITE_URL,
      logo: LOGO_URL,
      email: EMAIL,
      telephone: PHONE_DISPLAY,
      foundingDate: "2005",
      slogan: "Each Site is Unique, So Are We.",
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service-guards`,
      name: "Security Guard Services",
      provider: { "@id": `${SITE_URL}/#business` },
      serviceType: "Security Guard",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Security Guard Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Unarmed Guard" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Armed Guard" } },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Off Duty Police Officers" },
          },
        ],
      },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service-cameras`,
      name: "Security Camera & Monitoring Services",
      provider: { "@id": `${SITE_URL}/#business` },
      serviceType: "Security Camera Installation & Monitoring",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Camera Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Camera Installation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Solar Camera" } },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "24/7 Camera Monitoring" },
          },
        ],
      },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service-patrol`,
      name: "Vehicle Patrol Services",
      provider: { "@id": `${SITE_URL}/#business` },
      serviceType: "Vehicle Patrol",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Vehicle Patrol Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lot Patrolling" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lot Escorting" } },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Escorting Between Cities" },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${sora.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        <Loader />
        <div className="flex min-h-screen flex-col bg-background">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-gold focus:px-4 focus:py-2 focus:font-bold focus:text-ink"
          >
            Skip to content
          </a>
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
