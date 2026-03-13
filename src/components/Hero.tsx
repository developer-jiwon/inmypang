"use client";

import { categories } from "@/data/collections";

const totalCollections = categories.flatMap((c) => c.collections).length;
const totalProducts = categories
  .flatMap((c) => c.collections)
  .reduce((sum, col) => sum + col.products.length, 0);

export function Hero() {
  return (
    <section className="pt-2 pb-1">
      <div className="mx-auto max-w-5xl px-5">
        <div className="animate-fade-in-up flex flex-col items-center text-center">
          <h1 className="text-[1.05rem] font-light tracking-[0.08em] text-foreground/70">
            누군가의 취향을 담다.
          </h1>
          <div className="mt-2 flex items-center gap-2.5 text-[10px] font-medium text-foreground/40">
            <span>{totalCollections} 큐레이션</span>
            <span className="text-foreground/15">·</span>
            <span>{totalProducts}+ 상품</span>
            <span className="text-foreground/15">·</span>
            <span>{categories.length} 카테고리</span>
          </div>
        </div>
      </div>
    </section>
  );
}
