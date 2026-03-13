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
              className="inline-flex shrink-0 items-center rounded-full bg-[#F4F3F1] px-3 py-1 text-[11px] font-semibold text-[#1a2744] transition-opacity hover:bg-white"
            >
              {col.title}
            </a>
          ))}
        </div>
        <div className="flex animate-marquee gap-3 py-2.5 pr-3" aria-hidden>
          {allCollections.map((col) => (
            <span
              key={`dup-${col.slug}`}
              className="inline-flex shrink-0 items-center rounded-full bg-[#F4F3F1] px-3 py-1 text-[11px] font-semibold text-[#1a2744]"
            >
              {col.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
