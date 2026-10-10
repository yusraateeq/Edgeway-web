"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";


export function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 600);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink transition-opacity duration-500"
      role="status"
      aria-label="Loading"
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="relative flex h-20 w-20 items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-gold/20" />
          <div className="absolute inset-0 rounded-full border-4 border-gold border-t-transparent animate-spin" />
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-ink ring-2 ring-gold/30">
            <ShieldCheck className="h-8 w-8 text-gold" aria-hidden />
          </div>
        </div>
        <p className="text-sm font-medium uppercase tracking-wider text-white/70">
          Loading Edgeway Security
        </p>
      </div>
    </div>
  );
}

export function PageTransitionLoader() {
  const [loading, setLoading] = useState(false);

  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  return (
    <>
      {loading && (
        <div className="fixed top-0 left-0 right-0 h-1 bg-gold z-[99] animate-pulse" />
      )}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.startPageLoad = function() { document.dispatchEvent(new CustomEvent('page-load-start')); };
            window.stopPageLoad = function() { document.dispatchEvent(new CustomEvent('page-load-stop')); };
          `,
        }}
      />
    </>
  );
}