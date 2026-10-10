"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, Phone, Mail, ShieldCheck } from "lucide-react";
import { CONTACT, NAV_LINKS } from "./site-data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";


export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-ink/95 backdrop-blur supports-[backdrop-filter]:bg-ink/85 shadow-lg shadow-black/30"
          : "bg-ink/80 backdrop-blur-sm",
      )}
    >
      {/* Top utility bar */}
      <div className="hidden md:block border-b border-white/10 bg-black/30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-[12.5px] text-white/70">
          <span className="inline-flex items-center gap-2 font-medium">
            <ShieldCheck className="h-3.5 w-3.5 text-gold" aria-hidden />
            {CONTACT.experience}
          </span>
          <div className="flex items-center gap-5">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-gold"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden />
              {CONTACT.phoneDisplay}
            </a>
            <a
              href={CONTACT.emailHref}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-gold"
            >
              <Mail className="h-3.5 w-3.5" aria-hidden />
              {CONTACT.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3">
        <Link
          href="/"
          className="flex items-center gap-2.5 shrink-0"
          aria-label="Edgeway Security — home"
        >
          <Image
            src="/logo-mark.jpg"
            alt="Edgeway Security logo"
            width={160}
            height={156}
            priority
            className="h-10 w-auto sm:h-11 rounded-md ring-1 ring-gold/30"
          />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(
                "relative text-sm font-semibold uppercase tracking-wide transition-colors hover:text-gold",
                isActive(link.href) ? "text-gold" : "text-white/80",
              )}
            >
              {link.label}
              <span
                className={cn(
                  "absolute -bottom-1.5 left-0 h-0.5 bg-gold transition-all duration-300",
                  isActive(link.href) ? "w-full" : "w-0",
                )}
                aria-hidden
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <Button
            asChild
            size="sm"
            className="hidden sm:inline-flex bg-gold text-ink font-bold uppercase tracking-wide shadow-md shadow-gold/20 hover:bg-gold-light hover:text-ink"
          >
            <Link href="/contact">Get a Free Quote</Link>
          </Button>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-white hover:bg-white/10 hover:text-white"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[360px] bg-ink text-white border-white/10 p-0"
            >
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <Image
                  src="/logo-mark.jpg"
                  alt="Edgeway Security logo"
                  width={140}
                  height={137}
                  className="h-10 w-auto rounded-md ring-1 ring-gold/30"
                />
                <SheetClose asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/10"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </SheetClose>
              </div>
              <nav aria-label="Mobile" className="flex flex-col gap-1 px-3 py-4">
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={isActive(link.href) ? "page" : undefined}
                      className={cn(
                        "rounded-md px-3 py-3 text-base font-semibold uppercase tracking-wide transition-colors hover:bg-white/5 hover:text-gold",
                        isActive(link.href) ? "text-gold" : "text-white/85",
                      )}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto border-t border-white/10 px-5 py-5 space-y-3">
                <SheetClose asChild>
                  <Button
                    asChild
                    className="w-full bg-gold text-ink font-bold uppercase tracking-wide hover:bg-gold-light hover:text-ink"
                  >
                    <Link href="/contact">Get a Free Quote</Link>
                  </Button>
                </SheetClose>
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-center justify-center gap-2 text-sm text-white/80 hover:text-gold"
                >
                  <Phone className="h-4 w-4" />
                  {CONTACT.phoneDisplay}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
