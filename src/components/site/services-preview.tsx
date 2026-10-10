import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { SERVICES } from "./site-data";
import { Reveal } from "./reveal";
import { CONTACT } from "./site-data";


export function ServicesPreview() {
  return (
    <>
      <section
        aria-labelledby="services-preview-heading"
        className="bg-background py-20 sm:py-24"
      >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">
            What We Do
          </span>
          <h2
            id="services-preview-heading"
            className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground"
          >
            Three Divisions. One Standard.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Guards, cameras, and patrol — each monitored 24/7 by our dispatch,
            each tailored to your site.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.id} stagger={idx * 120} className="h-full">
              <article
                key={service.id}
                className="group card-glow flex flex-col overflow-hidden rounded-2xl scroll-mt-32 h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gold text-ink shadow-lg">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <h3 className="font-heading text-xl font-bold text-white">
                      {service.title}
                    </h3>
                    <p className="text-xs font-medium uppercase tracking-wide text-gold-light">
                      {service.tagline}
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {service.offerings.map((o) => (
                      <li
                        key={o.name}
                        className="text-sm font-semibold text-foreground"
                      >
                        <span className="text-gold">•</span> {o.name}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services#${service.id}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-gold-dark transition-colors hover:text-ink"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-foreground shadow-sm transition-colors hover:border-gold/50 hover:text-gold-dark"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
    </>
  );
}
