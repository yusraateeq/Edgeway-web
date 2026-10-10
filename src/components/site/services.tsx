"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronRight, Radio, ShieldCheck, ArrowRight } from "lucide-react";
import { SERVICES, DISPATCH_NOTE } from "./site-data";
import { Reveal } from "./reveal";
import Link from "next/link";
import { CONTACT } from "./site-data";


export function Services() {
  return (
    <>
      <section
        aria-labelledby="services-heading"
        className="bg-background py-20 sm:py-24"
      >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section header */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">
            What We Do
          </span>
          <h2
            id="services-heading"
            className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground"
          >
            Three Divisions. One Standard.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            From a single guard to a fully monitored patrol program, Edgeway
            builds security around your site — not the other way around.
          </p>
        </Reveal>

        {/* Service cards */}
        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.id} stagger={idx * 120} className="h-full">
              <article
                key={service.id}
                id={service.id}
                className="group card-glow flex h-full flex-col overflow-hidden rounded-2xl scroll-mt-32"
              >
                {/* Image header */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
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

                {/* Description */}
                <div className="px-5 pt-5">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>

                {/* Offerings accordion */}
                <div className="mt-3 flex-1 px-2 pb-2">
                  <Accordion type="single" collapsible className="w-full">
                    {service.offerings.map((offering) => (
                      <AccordionItem
                        key={offering.name}
                        value={offering.name}
                        className="border-b border-border/60 last:border-b-0"
                      >
                        <AccordionTrigger className="px-3 py-3.5 text-left text-sm font-bold uppercase tracking-wide hover:no-underline hover:text-gold-dark [&[data-state=open]>svg]:text-gold-dark">
                          <span className="flex items-center gap-2">
                            <ChevronRight className="h-4 w-4 shrink-0 text-gold transition-transform" />
                            {offering.name}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="px-3 pb-4 text-sm leading-relaxed text-muted-foreground">
                          {offering.desc}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                {/* CTA */}
                <div className="mt-auto px-5 pb-5">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-gold-dark transition-colors hover:text-ink"
                  >
                    Request this service
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
              </Reveal>
            );
          })}
        </div>

        {/* Dispatch note banner */}
        <Reveal className="mt-12 flex items-center justify-center gap-3 rounded-xl border border-amber/30 bg-amber/5 px-5 py-4 text-center">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber" />
          </span>
          <Radio className="h-5 w-5 text-amber" aria-hidden />
          <p className="text-sm sm:text-base font-semibold text-foreground">
            {DISPATCH_NOTE}
          </p>
        </Reveal>
      </div>
    </section>
    </>
  );
}
