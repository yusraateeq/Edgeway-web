import { PROCESS } from "./site-data";
import { Reveal } from "./reveal";
import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { CONTACT } from "./site-data";


export function Process() {
  return (
    <>
      <section
        aria-labelledby="process-heading"
        className="bg-ink text-white py-20 sm:py-24"
      >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-gold">
            How It Works
          </span>
          <h2
            id="process-heading"
            className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
          >
            A Security Plan Built Around You
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70">
            Four steps from first call to 24/7 coverage — no templates, no
            guesswork.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step, idx) => (
            <Reveal key={step.step} stagger={idx * 130} as="li" className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-gold/40 hover:bg-white/[0.05]">
              {/* Step number */}
              <div className="flex items-center justify-between">
                <span className="font-heading text-4xl font-extrabold text-gold/90">
                  {step.step}
                </span>
                {idx < PROCESS.length - 1 && (
                  <span
                    className="hidden lg:block h-px w-12 bg-gradient-to-r from-gold/50 to-transparent"
                    aria-hidden
                  />
                )}
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                {step.desc}
              </p>
            </Reveal>
          ))}
        </ol>

        {/* CTA */}
        <Reveal className="mt-14 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-ink shadow-lg shadow-gold/20 transition-colors hover:bg-gold-light"
          >
            Start With a Free Consultation
          </Link>
        </Reveal>
      </div>
    </section>
    </>
  );
}
