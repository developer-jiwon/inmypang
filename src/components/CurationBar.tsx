"use client";

import { categories } from "@/data/collections";

const allCollections = categories.flatMap((cat) => cat.collections);

const dotColors = [
  "text-[#E67E22]", "text-[#2E7D32]", "text-[#C2185B]", "text-[#7B1FA2]",
  "text-[#1565C0]", "text-[#F57F17]", "text-[#00838F]", "text-[#E67E22]",
  "text-[#2E7D32]", "text-[#C2185B]", "text-[#7B1FA2]", "text-[#1565C0]",
  "text-[#F57F17]", "text-[#00838F]", "text-[#E67E22]",
];

export function CurationBar() {
  return (
    <div className="overflow-hidden border-y border-[#d0e4f0]/40 bg-gradient-to-r from-[#e8f1f8] via-[#f0f4f8] to-[#e8f1f8]">
      <div className="relative flex whitespace-nowrap">
        <div className="flex animate-marquee gap-6 py-2.5 pr-6">
          {allCollections.map((col, i) => (
            <a
              key={col.slug}
              href={`#${col.slug}`}
              className="inline-flex shrink-0 items-center gap-2 text-[12px] font-medium text-foreground/50 transition-colors hover:text-foreground"
            >
              <span className={`text-[16px] leading-none ${dotColors[i % dotColors.length]}`}>•</span>
              {col.title}
            </a>
          ))}
        </div>
        <div className="flex animate-marquee gap-6 py-2.5 pr-6" aria-hidden>
          {allCollections.map((col, i) => (
            <span
              key={`dup-${col.slug}`}
              className="inline-flex shrink-0 items-center gap-2 text-[12px] font-medium text-foreground/50"
            >
              <span className={`text-[16px] leading-none ${dotColors[i % dotColors.length]}`}>•</span>
              {col.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
