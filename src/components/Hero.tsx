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
          <h1 className="text-[1.4rem] font-light tracking-[0.04em] text-foreground sm:text-[1.6rem]">
            <span className="highlight-zigzag">캐나다 4년차</span>, 내가 한국에 있었다면...
          </h1>

          {/* Thin accent line */}
          <div className="mt-4 h-px w-10 bg-foreground/20" />

          {/* Description + stats inline */}
          <div className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <p className="text-[12px] text-foreground/70">
              오타와에서 4년, 귀국할 때마다 똑같은 걸 사는 나
            </p>
            <div className="flex items-center gap-2 text-[11px] font-medium text-foreground/50">
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
