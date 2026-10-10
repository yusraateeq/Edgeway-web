import {
  ShieldCheck,
  Camera,
  Car,
  GraduationCap,
  HardHat,
  Warehouse,
  Store,
  Hospital,
  ShoppingBag,
  Building2,
  Landmark,
  Droplets,
  type LucideIcon,
} from "lucide-react";


export const CONTACT = {
  phoneDisplay: "(747) 370-4640",
  phoneHref: "tel:+17473704640",
  email: "info@edgewaysecurity.com",
  emailHref: "mailto:info@edgewaysecurity.com",
  addressLine: "Serving the Greater Los Angeles Area & surrounding counties",
  experience: "20+ Years Security Experience",
};

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export interface ServiceOffering {
  name: string;
  desc: string;
}

export interface ServiceDivision {
  id: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  offerings: ServiceOffering[];
}

export const SERVICES: ServiceDivision[] = [
  {
    id: "guards",
    icon: ShieldCheck,
    title: "Security Guards",
    tagline: "Trained, licensed & visible deterrence",
    description:
      "Uniformed, professional officers tailored to your site. Every guard is screened, licensed, and supervised — providing a visible presence that deters incidents before they start.",
    image: "/images/security-team-patrol.jpg",
    imageAlt: "Edgeway Security officers in black uniforms on patrol",
    offerings: [
      {
        name: "Unarmed Guard",
        desc: "Approachable, professional presence for access control, foot patrol, and observation. Ideal for retail, offices, and residential sites.",
      },
      {
        name: "Armed Guard",
        desc: "Fully licensed armed officers for high-value assets, cash handling, and elevated-risk environments where a stronger deterrent is required.",
      },
      {
        name: "Off Duty Police Officers",
        desc: "Sworn law-enforcement professionals off the clock — bringing real authority, training, and escalation capability to sensitive sites.",
      },
    ],
  },
  {
    id: "cameras",
    icon: Camera,
    title: "Security Cameras",
    tagline: "Eyes on your site, around the clock",
    description:
      "Professional camera systems engineered for your property. Every camera we install — wired or solar — is monitored live by our dispatch, so footage turns into action.",
    image: "/images/camera-installation.jpg",
    imageAlt: "Technician installing a professional security camera on a wall",
    offerings: [
      {
        name: "Camera Installation",
        desc: "Site survey, professional mounting, and configuration of high-definition cameras with night vision and remote viewing.",
      },
      {
        name: "Solar Camera",
        desc: "Off-grid, wire-free surveillance for remote lots, construction sites, and perimeters without power infrastructure.",
      },
      {
        name: "24/7 Camera Monitoring",
        desc: "Live monitoring by our dispatch center for both camera options — proactive alerts, escalation, and verified response, day and night.",
      },
    ],
  },
  {
    id: "patrol",
    icon: Car,
    title: "Vehicle Patrol",
    tagline: "Randomized, documented mobile coverage",
    description:
      "Marked patrol units performing randomized, GPS-tracked sweeps of your property. Patrols are monitored 24/7 by our dispatch, with every visit time-stamped and reported.",
    image: "/images/patrol-vehicle.jpg",
    imageAlt: "Edgeway Security patrol vehicle with amber warning lights",
    offerings: [
      {
        name: "Lot Patrolling",
        desc: "Scheduled and randomized sweeps of parking lots, yards, and perimeters — deterring trespass, theft, and vandalism.",
      },
      {
        name: "Lot Escorting",
        desc: "Safe escort for staff, tenants, or visitors to and from their vehicles — especially valuable after hours or in high-risk areas.",
      },
      {
        name: "Escorting Between Cities",
        desc: "Convoy and asset escort across city lines for high-value transport, executives, and sensitive movement.",
      },
    ],
  },
];

export interface Industry {
  name: string;
  icon: LucideIcon;
  blurb: string;
}

export const INDUSTRIES: Industry[] = [
  { name: "Schools", icon: GraduationCap, blurb: "Campus safety & access control" },
  { name: "Construction Sites", icon: HardHat, blurb: "Asset & perimeter protection" },
  { name: "Warehouses", icon: Warehouse, blurb: "Inventory & loading dock security" },
  { name: "Stores", icon: Store, blurb: "Retail loss prevention" },
  { name: "Hospitals", icon: Hospital, blurb: "Healthcare facility safety" },
  { name: "Shopping Centers", icon: ShoppingBag, blurb: "Multi-tenant patrol & response" },
  { name: "Plazas", icon: Building2, blurb: "Open-air retail complex security" },
  { name: "Government Sites", icon: Landmark, blurb: "Cleared, compliant officers" },
  { name: "Dams", icon: Droplets, blurb: "Critical infrastructure protection" },
];

export interface Stat {
  value: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: "20+", label: "Years Experience" },
  { value: "24/7", label: "Dispatch Monitoring" },
  { value: "3", label: "Service Divisions" },
  { value: "9+", label: "Industries Served" },
];

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export const PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Consultation",
    desc: "We listen to your concerns, site layout, and risk profile — no two jobs are the same, so neither is our first conversation.",
  },
  {
    step: "02",
    title: "Site Assessment",
    desc: "Our team walks your property, identifies blind spots and access points, and documents a tailored security plan.",
  },
  {
    step: "03",
    title: "Custom Deployment",
    desc: "Guards, cameras, and patrol routes are staffed and configured to your site — hand in hand with your team.",
  },
  {
    step: "04",
    title: "24/7 Monitoring",
    desc: "Cameras and vehicles are monitored around the clock by dispatch, with verified response and detailed reporting.",
  },
];

export const HERO_COPY = {
  badge: "20+ Security Experience",
  title: "Each Site is Unique, So Are We.",
  body: "We know each job is different, and each site has its own security needs. That's why we work with you, hand in hand, to develop the right solution for your site, shipment, property, or whatever else you need protecting — bringing you peace of mind, so you can focus on what matters most.",
  primaryCta: { label: "Get a Free Quote", href: "/contact" },
  secondaryCta: { label: "Explore Services", href: "/services" },
};

export const DISPATCH_NOTE =
  "Cameras and vehicles are monitored 24/7 by dispatch.";
