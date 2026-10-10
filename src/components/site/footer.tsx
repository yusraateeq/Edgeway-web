import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";
import { CONTACT, NAV_LINKS, SERVICES } from "./site-data";


export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center"
              aria-label="Edgeway Security — home"
            >
              <Image
                src="/logo-mark.jpg"
                alt="Edgeway Security logo"
                width={160}
                height={156}
                className="h-12 w-auto rounded-md ring-1 ring-gold/30"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Professional security guards, cameras, and vehicle patrol —
              monitored 24/7 by dispatch. Each site is unique, so are we.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-gold">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
              {CONTACT.experience}
            </div>
          </div>

          {/* Services */}
          <nav
            aria-label="Footer services"
            className="lg:col-span-3"
          >
            <h3 className="font-heading text-sm font-bold uppercase tracking-[0.15em] text-gold">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services#guards"
                  className="text-white/70 transition-colors hover:text-gold"
                >
                  Security Guards
                </Link>
              </li>
              <li>
                <Link
                  href="/services#cameras"
                  className="text-white/70 transition-colors hover:text-gold"
                >
                  Security Cameras
                </Link>
              </li>
              <li>
                <Link
                  href="/services#patrol"
                  className="text-white/70 transition-colors hover:text-gold"
                >
                  Vehicle Patrol
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/70 transition-colors hover:text-gold"
                >
                  All services
                </Link>
              </li>
            </ul>
          </nav>

          {/* Quick links */}
          <nav aria-label="Footer navigation" className="lg:col-span-2">
            <h3 className="font-heading text-sm font-bold uppercase tracking-[0.15em] text-gold">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/"
                  className="text-white/70 transition-colors hover:text-gold"
                >
                  Home
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="font-heading text-sm font-bold uppercase tracking-[0.15em] text-gold">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="group flex items-start gap-3 text-white/70 transition-colors hover:text-gold"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                  <span>{CONTACT.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.emailHref}
                  className="group flex items-start gap-3 text-white/70 transition-colors hover:text-gold"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                  <span className="break-all">{CONTACT.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                <span>{CONTACT.addressLine}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50">
          <p>
            &copy; {year} Edgeway Security. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
            </span>
            24/7 Dispatch Active
          </p>
        </div>
      </div>
    </footer>
  );
}
