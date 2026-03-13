"use client";

import { useEffect, useRef } from "react";
import type { Collection, Category } from "@/data/collections";

// Soft pastel pill styles per category
const categoryStyles = [
  { pill: "bg-[#FFF3E0] text-[#E67E22]", accent: "#E67E22" },   // 귀국 쇼핑 — warm orange
  { pill: "bg-[#E8F5E9] text-[#2E7D32]", accent: "#2E7D32" },   // 가격 비교 — green
  { pill: "bg-[#FCE4EC] text-[#C2185B]", accent: "#C2185B" },   // 20대 여자 — pink
  { pill: "bg-[#F3E5F5] text-[#7B1FA2]", accent: "#7B1FA2" },   // 30대 여자 — purple
  { pill: "bg-[#E3F2FD] text-[#1565C0]", accent: "#1565C0" },   // 30대 남자 — blue
  { pill: "bg-[#FFF8E1] text-[#F57F17]", accent: "#F57F17" },   // 40대 — amber
  { pill: "bg-[#E0F7FA] text-[#00838F]", accent: "#00838F" },   // 시즌 — teal
];

function ProductCard({ product }: { product: { id: number; name: string; price: string; img: string; note: string; badge?: string } }) {
  return (
    <a
      href={`https://www.coupang.com/np/search?component=&q=${encodeURIComponent(product.name)}&channel=user&traid=tr_AF6202879`}
      target="_blank"
      rel="noopener noreferrer"
      className="group product-card w-[32vw] shrink-0 rounded-xl bg-card-bg border border-border/40 overflow-hidden sm:w-[160px] shadow-sm"
    >
      <div className="relative aspect-square overflow-hidden bg-tag-bg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.img}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-1.5 top-1.5 rounded-md bg-foreground/85 px-1.5 py-0.5 text-[9px] font-semibold text-white backdrop-blur-sm">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-2.5">
        <h3 className="text-[11px] font-semibold leading-snug text-foreground line-clamp-2">
          {product.name}
        </h3>
        <p className="mt-0.5 text-[9px] text-muted italic line-clamp-1">
          &ldquo;{product.note}&rdquo;
        </p>
        <p className="mt-1 text-[13px] font-bold text-foreground">
          {product.price}<span className="text-[9px] font-medium text-muted">원</span>
        </p>
      </div>
    </a>
  );
}

function ProductMarquee({ products }: { products: Collection["products"] }) {
  return (
    <div className="overflow-x-auto scrollbar-hide touch-pan-x">
      <div className="flex animate-marquee-products gap-3 hover:animation-play-state-paused px-5">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
        {products.map((p) => (
          <ProductCard key={`dup-${p.id}`} product={p} />
        ))}
      </div>
    </div>
  );
}

function CollectionCard({ collection, style }: { collection: Collection; style: typeof categoryStyles[0] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={collection.slug}
      className="reveal scroll-mt-20 py-5"
    >
      <div className="mb-4 px-5">
        <h3 className="text-[17px] font-extrabold text-foreground leading-tight">{collection.title}</h3>
        <p className="mt-1 text-[12px] text-foreground/55">{collection.subtitle}</p>
      </div>
      <ProductMarquee products={collection.products} />
    </div>
  );
}

export function CategorySection({ category, index }: { category: Category; index: number }) {
  const style = categoryStyles[index % categoryStyles.length];
  const totalProducts = category.collections.reduce((sum, col) => sum + col.products.length, 0);

  return (
    <section className="mt-6 first:mt-0">
      {/* Category header */}
      <div className="flex items-center justify-between px-5 py-4 border-t border-border/40 first:border-t-0">
        <div className="flex items-center gap-3">
          <span className={`rounded-full px-3.5 py-1.5 text-[12px] font-bold ${style.pill}`}>
            {category.name}
          </span>
          <span className="text-[11px] text-foreground/35">
            {category.collections.length}개 큐레이션 · {totalProducts}개 상품
          </span>
        </div>
      </div>

      {/* Collections in this category */}
      <div className="divide-y divide-border/20">
        {category.collections.map((col) => (
          <CollectionCard key={col.slug} collection={col} style={style} />
        ))}
      </div>
    </section>
  );
}
