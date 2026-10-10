import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck, Radio } from "lucide-react";
import { HERO_COPY, CONTACT, DISPATCH_NOTE } from "./site-data";
import { Button } from "@/components/ui/button";


export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-ink text-white"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/security-team-patrol.jpg"
          alt="Edgeway Security officers on patrol in uniform"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark gradient overlay for legibility - reduced opacity to show image */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
        <div className="absolute inset-0 hero-grain" />
      </div>

      {/* Top spacer to clear fixed header */}
      <div className="h-[112px] sm:h-[136px]" aria-hidden />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
        <div className="max-w-2xl animate-fade-up">
          {/* Experience badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-gold backdrop-blur-sm">
            <ShieldCheck className="h-4 w-4" aria-hidden />
            {HERO_COPY.badge}
          </div>

          <h1
            id="hero-title"
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight"
          >
            Each Site is Unique,
            <span className="block text-gold">So Are We.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-white/85">
            {HERO_COPY.body}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button
              asChild
              size="lg"
              className="bg-gold text-ink font-bold uppercase tracking-wide shadow-lg shadow-gold/30 hover:bg-gold-light hover:text-ink"
            >
              <Link href={HERO_COPY.primaryCta.href}>
                {HERO_COPY.primaryCta.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/5 text-white font-semibold uppercase tracking-wide backdrop-blur-sm hover:bg-white/10 hover:text-white hover:border-gold/60"
            >
              <Link href={HERO_COPY.secondaryCta.href}>
                {HERO_COPY.secondaryCta.label}
              </Link>
            </Button>
          </div>

          {/* Dispatch note */}
          <div className="mt-8 inline-flex items-center gap-2.5 rounded-lg border border-amber/30 bg-amber/10 px-4 py-2.5 text-sm text-amber-50 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber" />
            </span>
            <Radio className="h-4 w-4 text-amber" aria-hidden />
            <span className="font-medium">{DISPATCH_NOTE}</span>
          </div>
        </div>
      </div>

      {/* Quick contact strip */}
      <div className="border-t border-white/10 bg-black/40 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-stretch divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          <a
            href={CONTACT.phoneHref}
            className="group flex flex-1 items-center gap-3 px-6 py-4 transition-colors hover:bg-white/5"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold">
              <Phone className="h-5 w-5" aria-hidden />
            </span>
            <span className="flex flex-col">
              <span className="text-[11px] uppercase tracking-wide text-white/50">
                Call us
              </span>
              <span className="font-heading text-base font-bold text-white group-hover:text-gold">
                {CONTACT.phoneDisplay}
              </span>
            </span>
          </a>
          <a
            href={CONTACT.emailHref}
            className="group flex flex-1 items-center gap-3 px-6 py-4 transition-colors hover:bg-white/5"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold">
              <ShieldCheck className="h-5 w-5" aria-hidden />
            </span>
            <span className="flex flex-col">
              <span className="text-[11px] uppercase tracking-wide text-white/50">
                Email us
              </span>
              <span className="font-heading text-base font-bold text-white group-hover:text-gold">
                {CONTACT.email}
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
