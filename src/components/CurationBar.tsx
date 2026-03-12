"use client";

import { categories } from "@/data/collections";

const allCollections = categories.flatMap((cat) => cat.collections);

export function CurationBar() {
  return (
    <div className="overflow-hidden border-y border-white/40 bg-white/50 backdrop-blur-sm">
      <div className="relative flex whitespace-nowrap">
        <div className="flex animate-marquee gap-6 py-2.5 pr-6">
          {allCollections.map((col) => (
            <a
              key={col.slug}
              href={`#${col.slug}`}
              className="inline-flex shrink-0 items-center gap-2 text-[12px] font-medium text-foreground/50 transition-colors hover:text-foreground"
            >
              <span className="text-accent/40">·</span>
              {col.title}
            </a>
          ))}
        </div>
        <div className="flex animate-marquee gap-6 py-2.5 pr-6" aria-hidden>
          {allCollections.map((col) => (
            <span
              key={`dup-${col.slug}`}
              className="inline-flex shrink-0 items-center gap-2 text-[12px] font-medium text-foreground/50"
            >
              <span className="text-accent/40">·</span>
              {col.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
