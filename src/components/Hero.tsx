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
          <h1 className="text-[1.3rem] font-bold leading-snug tracking-tight text-foreground">
            누군가의 취향을 담다.
          </h1>
          <div className="mt-3 flex items-center gap-3 text-[12px] text-foreground/50">
            <span><strong className="text-foreground">{totalCollections}</strong> 큐레이션</span>
            <span className="text-foreground/20">·</span>
            <span><strong className="text-foreground">{totalProducts}+</strong> 상품</span>
            <span className="text-foreground/20">·</span>
            <span><strong className="text-foreground">{categories.length}</strong> 카테고리</span>
          </div>
        </div>
      </div>
    </section>
  );
}
