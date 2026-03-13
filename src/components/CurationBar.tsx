"use client";

import { categories } from "@/data/collections";

const allCollections = categories.flatMap((cat) => cat.collections);

const pillColors = [
  "bg-[#FFF3E0] text-[#E67E22]", "bg-[#E8F5E9] text-[#2E7D32]",
  "bg-[#FCE4EC] text-[#C2185B]", "bg-[#F3E5F5] text-[#7B1FA2]",
  "bg-[#E3F2FD] text-[#1565C0]", "bg-[#FFF8E1] text-[#F57F17]",
  "bg-[#E0F7FA] text-[#00838F]", "bg-[#FFF3E0] text-[#E67E22]",
  "bg-[#E8F5E9] text-[#2E7D32]", "bg-[#FCE4EC] text-[#C2185B]",
  "bg-[#F3E5F5] text-[#7B1FA2]", "bg-[#E3F2FD] text-[#1565C0]",
  "bg-[#FFF8E1] text-[#F57F17]", "bg-[#E0F7FA] text-[#00838F]",
  "bg-[#FFF3E0] text-[#E67E22]",
];

export function CurationBar() {
  return (
    <div className="overflow-hidden border-y border-[#d0e4f0]/40 bg-gradient-to-r from-[#e8f1f8] via-[#f0f4f8] to-[#e8f1f8]">
      <div className="relative flex whitespace-nowrap">
        <div className="flex animate-marquee gap-3 py-2.5 pr-3">
          {allCollections.map((col, i) => (
            <a
              key={col.slug}
              href={`#${col.slug}`}
              className={`inline-flex shrink-0 items-center rounded-full px-3 py-1 text-[11px] font-semibold transition-opacity hover:opacity-80 ${pillColors[i % pillColors.length]}`}
            >
              {col.title}
            </a>
          ))}
        </div>
        <div className="flex animate-marquee gap-3 py-2.5 pr-3" aria-hidden>
          {allCollections.map((col, i) => (
            <span
              key={`dup-${col.slug}`}
              className={`inline-flex shrink-0 items-center rounded-full px-3 py-1 text-[11px] font-semibold ${pillColors[i % pillColors.length]}`}
            >
              {col.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
