import Image from "next/image";
import Link from "next/link";
import {
  Handshake,
  Eye,
  BadgeCheck,
  Headset,
  ClipboardCheck,
  MapPin,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "./reveal";
import { CONTACT } from "./site-data";


const VALUE_PROPS = [
  {
    icon: Handshake,
    title: "Hand-in-Hand Partnership",
    desc: "We work with you to build the right solution for your site — not a one-size-fits-all package.",
  },
  {
    icon: Eye,
    title: "24/7 Dispatch Monitoring",
    desc: "Cameras and vehicles are watched around the clock by our dispatch center, with verified response.",
  },
  {
    icon: BadgeCheck,
    title: "Licensed & Screened Officers",
    desc: "Every guard is fully licensed, background-checked, and supervised to a single high standard.",
  },
  {
    icon: Headset,
    title: "Rapid Response",
    desc: "Live dispatch means alerts become action — escalation, dispatch, and follow-through in minutes.",
  },
  {
    icon: ClipboardCheck,
    title: "Documented Reporting",
    desc: "Time-stamped patrol logs, incident reports, and activity summaries keep you in the loop.",
  },
  {
    icon: MapPin,
    title: "Custom Site Coverage",
    desc: "Routes, posts, and camera placement are mapped to your property's real risk profile.",
  },
];

export function About() {
  return (
    <>
      <section
        aria-labelledby="why-heading"
        className="bg-background py-20 sm:py-24"
      >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: image + experience badge */}
          <div className="relative">
            <div className="relative aspect-[4/5] sm:aspect-[5/4] overflow-hidden rounded-2xl shadow-2xl shadow-black/20">
              <Image
                src="/images/security-patch.jpg"
                alt="Close-up of a security officer's uniform with a gold SECURITY patch"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            {/* Floating experience card */}
            <div className="absolute -bottom-6 left-4 sm:left-8 flex items-center gap-4 rounded-xl border border-gold/30 bg-ink px-5 py-4 shadow-xl shadow-black/30">
              <span className="font-heading text-4xl font-extrabold text-gold leading-none">
                20+
              </span>
              <span className="text-xs font-semibold uppercase leading-tight tracking-wide text-white/80">
                Years of
                <br />
                Security Experience
              </span>
            </div>
            {/* Decorative gold corner */}
            <div
              className="absolute -top-3 -right-3 h-16 w-16 rounded-tr-2xl border-r-2 border-t-2 border-gold/50"
              aria-hidden
            />
          </div>

          {/* Right: copy + value props */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">
              Why Edgeway
            </span>
            <h2
              id="why-heading"
              className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground"
            >
              Each Site is Unique,
              <span className="block text-gold">So Are We.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
              We know each job is different, and each site has its own security
              needs. That&rsquo;s why we work with you, hand in hand, to develop
              the right solution for your site, shipment, property, or whatever
              else you need protecting — bringing you peace of mind, so you can
              focus on what matters most.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {VALUE_PROPS.map((prop, idx) => {
                const Icon = prop.icon;
                return (
                  <Reveal key={prop.title} stagger={idx * 90} as="li" className="card-glow flex items-start gap-3 rounded-xl p-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ink text-gold">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-foreground">
                        {prop.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {prop.desc}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
