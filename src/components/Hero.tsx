"use client";

import { categories } from "@/data/collections";

const totalCollections = categories.flatMap((c) => c.collections).length;
const totalProducts = categories
  .flatMap((c) => c.collections)
  .reduce((sum, col) => sum + col.products.length, 0);

export function Hero() {
  return (
    <section className="pt-6 pb-4">
      <div className="mx-auto max-w-5xl px-5">
        <div className="animate-fade-in-up flex items-end justify-between">
          {/* Left side */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/35">
              해외살이 쇼핑 큐레이션
            </p>
            <h1 className="mt-2 font-[family-name:var(--font-playfair)] text-[1.6rem] font-medium leading-tight tracking-tight text-accent sm:text-[2rem]">
              누군가의<br />취향을 담다.
            </h1>
            <div className="mt-3 h-[2px] w-8 rounded-full bg-accent/40" />
          </div>
          {/* Right side — stats */}
          <div className="text-right">
            <span className="font-[family-name:var(--font-playfair)] text-[2.5rem] font-medium leading-none text-accent sm:text-[3rem]">
              {totalCollections}
            </span>
            <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-accent/70">
              Curated Collections
            </p>
            <p className="mt-2 text-[10px] text-foreground/35">
              {totalProducts}+ 상품 · {categories.length} 카테고리
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
