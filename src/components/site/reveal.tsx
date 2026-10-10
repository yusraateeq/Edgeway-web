"use client";

import { ElementType, ReactNode } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";


type RevealVariant =
  | "fade-up"
  | "fade"
  | "slide-left"
  | "slide-right"
  | "scale";

interface RevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  /** Stagger index — multiplies delay for sequential children. */
  stagger?: number;
  className?: string;
  as?: ElementType;
  /** Render as inline element instead of block. Default false. */
  inline?: boolean;
}

const variantClasses: Record<RevealVariant, { hidden: string; shown: string }> = {
  "fade-up": {
    hidden: "opacity-0 translate-y-8",
    shown: "opacity-100 translate-y-0",
  },
  fade: {
    hidden: "opacity-0",
    shown: "opacity-100",
  },
  "slide-left": {
    hidden: "opacity-0 translate-x-8",
    shown: "opacity-100 translate-x-0",
  },
  "slide-right": {
    hidden: "opacity-0 -translate-x-8",
    shown: "opacity-100 translate-x-0",
  },
  scale: {
    hidden: "opacity-0 scale-95",
    shown: "opacity-100 scale-100",
  },
};

export function Reveal({
  children,
  variant = "fade-up",
  delay = 0,
  stagger = 0,
  className,
  as: Tag = "div",
  inline = false,
}: RevealProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>({
    delay: delay + stagger,
    once: true,
  });

  const classes = variantClasses[variant];

  return (
    <Tag
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform motion-reduce:transition-none motion-reduce:duration-0",
        inline ? "inline-block" : "block",
        visible ? classes.shown : classes.hidden,
        className,
      )}
    >
      {children}
    </Tag>
  );
}
