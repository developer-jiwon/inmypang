"use client";

import { categories } from "@/data/collections";

const totalCollections = categories.flatMap((c) => c.collections).length;
const totalProducts = categories
  .flatMap((c) => c.collections)
  .reduce((sum, col) => sum + col.products.length, 0);

export function Hero() {
  return (
    <section className="pt-8 pb-6">
      <div className="mx-auto max-w-5xl px-5">
        <div className="animate-fade-in-up">
          {/* Main title — black, elegant */}
          <h1 className="font-[family-name:var(--font-playfair)] text-[2rem] font-medium leading-[1.2] tracking-tight text-foreground sm:text-[2.4rem]">
            누군가의 취향을<br />담다.
          </h1>

          {/* Thin accent line */}
          <div className="mt-4 h-px w-10 bg-foreground/20" />

          {/* Description + stats inline */}
          <div className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <p className="text-[12px] text-foreground/45">
              큐레이터가 직접 고른 상품, 취향으로 연결되는 쇼핑
            </p>
            <div className="flex items-center gap-2 text-[11px] font-medium text-foreground/30">
              <span>{totalCollections} collections</span>
              <span>·</span>
              <span>{totalProducts}+ items</span>
              <span>·</span>
              <span>{categories.length} categories</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
