"use client";

import { useState, useEffect } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 gradient-border-bottom ${
        scrolled
          ? "bg-card-bg/95 backdrop-blur-xl shadow-[0_1px_12px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-start px-5 py-3.5">
        <a href="/" className="text-[18px] font-extrabold tracking-tight text-foreground">
          인마이팡
        </a>
      </div>
    </header>
  );
}
