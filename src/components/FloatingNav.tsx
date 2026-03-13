"use client";

import { useState, useRef, useEffect } from "react";
import { categories } from "@/data/collections";

const allCollections = categories.flatMap((c) => c.collections);

export function FloatingNav() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="fixed bottom-6 right-4 z-[999] sm:right-6">
      {open && (
        <div className="absolute bottom-full right-0 mb-3 w-[80vw] max-w-[320px] max-h-[60vh] overflow-y-auto rounded-2xl border border-border bg-card-bg/95 p-4 shadow-2xl backdrop-blur-xl animate-fade-in-up">
          <p className="mb-3 text-[10px] font-semibold tracking-widest text-muted uppercase">큐레이션</p>
          <div className="space-y-1">
            {allCollections.map((col) => (
              <a
                key={col.slug}
                href={`#${col.slug}`}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-[12px] leading-snug text-foreground/70 transition-all hover:bg-accent-light hover:text-foreground"
              >
                {col.title}
              </a>
            ))}
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-white shadow-lg transition-all hover:scale-105 active:scale-95"
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M4.5 4.5l9 9M13.5 4.5l-9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3 5.5h12M3 9h12M3 12.5h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        )}
      </button>
    </div>
  );
}
