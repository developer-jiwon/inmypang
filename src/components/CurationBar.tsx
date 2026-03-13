"use client";

import { categories } from "@/data/collections";

const allCollections = categories.flatMap((cat) => cat.collections);

export function CurationBar() {
  return (
    <div className="overflow-hidden border-y border-[#1a2744]/10 bg-[#1a2744]">
      <div className="relative flex whitespace-nowrap">
        <div className="flex animate-marquee gap-3 py-2.5 pr-3">
          {allCollections.map((col) => (
            <a
              key={col.slug}
              href={`#${col.slug}`}
              className="inline-flex shrink-0 items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium text-white/90 transition-opacity hover:bg-white/25"
            >
              {col.title}
            </a>
          ))}
        </div>
        <div className="flex animate-marquee gap-3 py-2.5 pr-3" aria-hidden>
          {allCollections.map((col) => (
            <span
              key={`dup-${col.slug}`}
              className="inline-flex shrink-0 items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium text-white/90"
            >
              {col.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
