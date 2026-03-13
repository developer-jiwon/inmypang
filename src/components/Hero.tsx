"use client";

import { categories } from "@/data/collections";

const totalCollections = categories.flatMap((c) => c.collections).length;
const totalProducts = categories
  .flatMap((c) => c.collections)
  .reduce((sum, col) => sum + col.products.length, 0);

export function Hero() {
  return (
    <section className="py-6">
      <div className="mx-auto max-w-5xl px-5">
        <div className="animate-fade-in-up flex flex-col items-center text-center">
          <h1 className="font-[family-name:var(--font-cormorant)] text-[1.6rem] font-light italic leading-snug tracking-wide text-foreground">
            누군가의 취향을 담다.
          </h1>
          <div className="mt-2 flex items-center gap-2 text-[10px] text-foreground/40">
            <span>{totalCollections} 큐레이션</span>
            <span>·</span>
            <span>{totalProducts}+ 상품</span>
            <span>·</span>
            <span>{categories.length} 카테고리</span>
          </div>
        </div>
      </div>
    </section>
  );
}
