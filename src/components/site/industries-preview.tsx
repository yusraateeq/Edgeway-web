import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { INDUSTRIES } from "./site-data";
import { Reveal } from "./reveal";
import { CONTACT } from "./site-data";


export function IndustriesPreview() {
  const preview = INDUSTRIES.slice(0, 6);
  return (
    <>
      <section
        aria-labelledby="industries-preview-heading"
        className="relative bg-background py-20 sm:py-24"
      >
      <div className="absolute inset-x-0 top-0 h-px gold-line opacity-50" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-background px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">
            Who We Protect
          </span>
          <h2
            id="industries-preview-heading"
            className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground"
          >
            Industries We Secure
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            From campuses to critical infrastructure — cleared, trained
            personnel matched to your risk profile.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
          {preview.map((industry, idx) => {
            const Icon = industry.icon;
            return (
              <Reveal key={industry.name} stagger={idx * 90} className="h-full">
              <article
                key={industry.name}
                className="group card-glow relative flex h-full flex-col items-start gap-3 rounded-xl p-5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-ink text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <div>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-foreground">
                    {industry.name}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                    {industry.blurb}
                  </p>
                </div>
              </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 text-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-foreground shadow-sm transition-colors hover:border-gold/50 hover:text-gold-dark"
          >
            View All Industries
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
    </>
  );
}
