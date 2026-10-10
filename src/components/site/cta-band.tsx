import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { CONTACT } from "./site-data";
import { Reveal } from "./reveal";


interface CtaBandProps {
  title?: string;
  body?: string;
}

export function CtaBand({
  title = "Ready to Secure Your Site?",
  body = "Get a free, no-obligation security assessment. We'll walk your property and build a plan tailored to your risks — usually within one business day.",
}: CtaBandProps) {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative isolate overflow-hidden bg-ink text-white py-20 sm:py-24"
    >
      <div className="absolute inset-0 -z-10 hero-grain" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-px gold-line opacity-60" aria-hidden />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <Reveal>
        <h2
          id="cta-heading"
          className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
        >
          {title}
        </h2>
        </Reveal>
        <Reveal delay={100}>
        <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-white/75">
          {body}
        </p>
        </Reveal>
        <Reveal delay={200} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-ink shadow-lg shadow-gold/30 transition-colors hover:bg-gold-light"
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-sm transition-colors hover:border-gold/60 hover:bg-white/10"
          >
            <Phone className="h-4 w-4" />
            {CONTACT.phoneDisplay}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
