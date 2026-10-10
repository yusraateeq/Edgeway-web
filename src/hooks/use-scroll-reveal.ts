"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealOptions {
  /** Trigger when element is this fraction visible (0-1). Default 0.15 */
  threshold?: number;
  /** Trigger once and stay visible. Default true */
  once?: boolean;
  /** Delay in ms before the reveal animation starts. Default 0 */
  delay?: number;
  /** Root margin to grow/shrink the viewport box. Default "0px 0px -10% 0px" */
  rootMargin?: string;
}

// Compute reduced-motion preference ONCE (module-level) so the hook's initial
// state can use it without calling setState inside an effect (lint-safe).
const PREFERS_REDUCED_MOTION =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Scroll-triggered reveal hook using IntersectionObserver.
 *
 * Returns a ref to attach to the element and a boolean that flips to true
 * when the element enters the viewport. Respects prefers-reduced-motion
 * (returns true immediately so content is visible without animation).
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {},
) {
  const {
    threshold = 0.15,
    once = true,
    delay = 0,
    rootMargin = "0px 0px -10% 0px",
  } = options;

  const ref = useRef<T>(null);
  // If reduced-motion is requested (or IntersectionObserver is unavailable),
  // start visible so the content shows without animation — no setState needed.
  const [visible, setVisible] = useState<boolean>(
    () => PREFERS_REDUCED_MOTION || typeof IntersectionObserver === "undefined",
  );

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Reduced-motion / no IntersectionObserver: already visible, nothing to do.
    if (PREFERS_REDUCED_MOTION || typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              const t = window.setTimeout(() => setVisible(true), delay);
              return () => window.clearTimeout(t);
            }
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once, delay, rootMargin]);

  return { ref, visible } as const;
}

