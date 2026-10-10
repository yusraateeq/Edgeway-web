import { INDUSTRIES } from "./site-data";
import { Reveal } from "./reveal";
import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { CONTACT } from "./site-data";


export function Industries() {
  return (
    <>
      <section
        aria-labelledby="industries-heading"
        className="bg-background py-20 sm:py-24"
      >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-background px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">
            Who We Protect
          </span>
          <h2
            id="industries-heading"
            className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground"
          >
            Industries We Secure
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            From campuses to critical infrastructure, Edgeway has the cleared,
            trained personnel to match your site&rsquo;s risk profile.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-5">
          {INDUSTRIES.map((industry, idx) => {
            const Icon = industry.icon;
            return (
              <Reveal key={industry.name} stagger={idx * 80} className="h-full">
              <article
                key={industry.name}
                className="group card-glow relative flex h-full flex-col items-start gap-3 rounded-xl p-5 sm:p-6"
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
                <span className="absolute right-4 top-4 h-1.5 w-1.5 rounded-full bg-gold/0 transition-all group-hover:bg-gold" aria-hidden />
              </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 text-center text-sm text-muted-foreground">
          Don&rsquo;t see your industry?{" "}
          <a
            href="/contact"
            className="font-semibold text-gold-dark underline-offset-4 hover:underline"
          >
            Talk to us
          </a>{" "}
          — if it needs protecting, we&rsquo;ve got it covered.
        </Reveal>
      </div>
    </section>
    </>
  );
}
