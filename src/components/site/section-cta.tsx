import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { CONTACT } from "./site-data";


interface SectionCTAProps {
  title?: string;
  description?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export function SectionCTA({
  title = "Ready to Secure Your Site?",
  description = "Get a free, no-obligation security assessment. We'll walk your property and build a plan tailored to your risks.",
  variant = "primary",
  className,
}: SectionCTAProps) {
  const buttonStyles = {
    primary: "bg-gold text-ink hover:bg-gold-light hover:text-ink shadow-lg shadow-gold/20",
    secondary: "bg-white/5 text-white border-white/20 hover:bg-white/10 hover:border-gold/50",
    outline: "border-gold/50 text-gold hover:bg-gold/10 hover:text-gold-light",
  };

  const linkStyles = {
    primary: "bg-gold text-ink hover:bg-gold-light hover:text-ink shadow-lg shadow-gold/20",
    secondary: "bg-white/5 text-white border border-white/20 hover:bg-white/10 hover:border-gold/50",
    outline: "border-2 border-gold/50 text-gold hover:bg-gold/10 hover:text-gold-light",
  };

  return (
    <section className={`py-12 sm:py-16 ${className}`} aria-labelledby="section-cta-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="card-glow rounded-2xl p-6 sm:p-10 lg:p-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-gold mb-4">
            <ShieldCheck className="h-4 w-4" aria-hidden />
            Free Assessment
          </div>
          <h2 id="section-cta-heading" className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className={`${linkStyles[variant]} inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold uppercase tracking-wide transition-colors`}
            >
              Request Free Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold uppercase tracking-wide transition-colors border-2 border-white/30 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10 hover:text-white hover:border-gold/60"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber" />
              </span>
              Call Now: {CONTACT.phoneDisplay}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function InlineCTA({
  text = "Get a free quote",
  href = "/contact",
  className,
}: {
  text?: string;
  href?: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Link
        href={href}
        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold uppercase tracking-wide transition-colors border-2 border-gold/50 text-gold hover:bg-gold/10 hover:text-gold-light"
      >
        {text}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}