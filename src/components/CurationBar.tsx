"use client";

import { categories } from "@/data/collections";

const allCollections = categories.flatMap((cat) => cat.collections);
const half = Math.ceil(allCollections.length / 2);
const row1 = allCollections.slice(0, half);
const row2 = allCollections.slice(half);

function MarqueeRow({ items, reverse }: { items: typeof allCollections; reverse?: boolean }) {
  const animClass = reverse ? "animate-marquee-reverse" : "animate-marquee";
  return (
    <div className="relative flex whitespace-nowrap overflow-hidden" style={{ touchAction: "pan-y" }}>
      <div className={`flex ${animClass} gap-2.5 pr-2.5`} style={{ willChange: "transform" }}>
        {items.map((col) => (
          <a
            key={col.slug}
            href={`#${col.slug}`}
            className="inline-flex shrink-0 items-center rounded-full bg-[#F4F3F1] px-3 py-1 text-[11px] font-semibold text-[#1a2744] transition-opacity hover:bg-white"
          >
            {col.title}
          </a>
        ))}
      </div>
      <div className={`flex ${animClass} gap-2.5 pr-2.5`} aria-hidden style={{ willChange: "transform" }}>
        {items.map((col) => (
          <span
            key={`dup-${col.slug}`}
            className="inline-flex shrink-0 items-center rounded-full bg-[#F4F3F1] px-3 py-1 text-[11px] font-semibold text-[#1a2744]"
          >
            {col.title}
          </span>
        ))}
      </div>
    </div>
  );
}

export function CurationBar() {
  return (
    <div className="overflow-hidden border-y border-[#1a2744]/10 bg-[#1a2744] py-2">
      <div className="flex flex-col gap-2">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </div>
  );
}
