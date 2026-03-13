"use client";

import { categories } from "@/data/collections";

const totalCollections = categories.flatMap((c) => c.collections).length;
const totalProducts = categories
  .flatMap((c) => c.collections)
  .reduce((sum, col) => sum + col.products.length, 0);

export function Hero() {
  return (
    <section className="py-8 pb-4">
      <div className="mx-auto max-w-5xl px-5">
        <div className="animate-fade-in-up flex flex-col items-center text-center">
          <h1 className="font-[family-name:var(--font-cormorant)] text-[1.3rem] font-semibold italic leading-snug tracking-wide text-foreground">
            누군가의 취향을 담다.
          </h1>
          <div className="mt-3 flex items-center gap-3 text-[11px] font-medium text-foreground/50">
            <span className="rounded-full bg-foreground/5 px-2.5 py-0.5">{totalCollections} 큐레이션</span>
            <span className="text-foreground/20">·</span>
            <span className="rounded-full bg-foreground/5 px-2.5 py-0.5">{totalProducts}+ 상품</span>
            <span className="text-foreground/20">·</span>
            <span className="rounded-full bg-foreground/5 px-2.5 py-0.5">{categories.length} 카테고리</span>
          </div>
        </div>
      </div>
    </section>
  );
}
