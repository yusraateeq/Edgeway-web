import Image from "next/image";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";


interface PageHeaderProps {
  eyebrow: string;
  title: string;
  intro: string;
  backgroundImage?: string;
  backgroundImageAlt?: string;
  className?: string;
}

export function PageHeader({ eyebrow, title, intro, backgroundImage, backgroundImageAlt, className }: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-ink text-white",
        "pt-[112px] sm:pt-[136px] pb-14 sm:pb-20",
        className,
      )}
    >
      {backgroundImage && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={backgroundImage}
            alt={backgroundImageAlt || "Background"}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
        </div>
      )}
      {/* Subtle gold radial accents */}
      <div className="absolute inset-0 -z-10 hero-grain" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-px gold-line opacity-50" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <Reveal variant="fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-gold">
              {eyebrow}
            </span>
            <h1 className="mt-4 font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
              {title}
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/75">
              {intro}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

