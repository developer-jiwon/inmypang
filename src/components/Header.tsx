"use client";

import { useState, useRef, useEffect } from "react";
import { categories } from "@/data/collections";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    document.addEventListener("mousedown", handleClick);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handleClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 gradient-border-bottom ${
        scrolled
          ? "bg-card-bg/95 backdrop-blur-xl shadow-[0_1px_12px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5">
        <a href="/" className="text-[18px] font-extrabold tracking-tight text-foreground">
          인마이팡
        </a>

        <div ref={ref} className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 rounded-full border border-border bg-card-bg px-4 py-2 text-[13px] font-medium text-foreground shadow-sm transition-all hover:border-accent/40 hover:shadow-md"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2.5 4.5h11M2.5 8h11M2.5 11.5h11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            큐레이션 목록
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            >
              <path d="M2.5 3.75L5 6.25L7.5 3.75" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {open && (
            <div className="absolute right-0 top-full mt-3 w-[480px] rounded-2xl border border-border bg-card-bg p-6 shadow-2xl animate-fade-in-up">
              <p className="mb-4 text-[10px] font-semibold tracking-widest text-muted uppercase">Collections</p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                {categories.map((cat) => (
                  <div key={cat.slug}>
                    <p className="mb-2 flex items-center gap-2 text-[12px] font-bold text-foreground">
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      {cat.name}
                    </p>
                    <div className="space-y-0.5">
                      {cat.collections.map((col) => (
                        <a
                          key={col.slug}
                          href={`#${col.slug}`}
                          onClick={() => setOpen(false)}
                          className="block rounded-lg px-3 py-2 text-[13px] leading-snug text-foreground/80 transition-all hover:bg-accent-light/60 hover:text-foreground hover:pl-4"
                        >
                          {col.title}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
