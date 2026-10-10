import { STATS } from "./site-data";
import { Reveal } from "./reveal";
import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { CONTACT } from "./site-data";


export function Stats() {
  return (
    <>
      <section
        aria-label="Edgeway Security at a glance"
        className="relative bg-feature text-white"
      >
      <div className="absolute inset-x-0 top-0 h-px gold-line opacity-60" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <dl className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
          {STATS.map((stat, idx) => (
            <Reveal
              key={stat.label}
              variant="scale"
              stagger={idx * 100}
              as="div"
              className="flex flex-col items-center justify-center px-4 py-8 sm:py-10 text-center"
            >
              <dt className="order-2 mt-1 text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-white/55">
                {stat.label}
              </dt>
              <dd className="order-1 font-heading text-4xl sm:text-5xl font-extrabold text-gold">
                {stat.value}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px gold-line opacity-60" aria-hidden />
    </section>
    </>
  );
}
