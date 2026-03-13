"use client";

import { useEffect, useRef } from "react";
import type { Collection } from "@/data/collections";

const tagColors = [
  { bg: "bg-accent/10", text: "text-accent" },
  { bg: "bg-blue-50", text: "text-blue-500" },
  { bg: "bg-emerald-50", text: "text-emerald-500" },
  { bg: "bg-rose-50", text: "text-rose-400" },
  { bg: "bg-violet-50", text: "text-violet-500" },
  { bg: "bg-amber-50", text: "text-amber-600" },
  { bg: "bg-cyan-50", text: "text-cyan-500" },
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

function CollectionCard({ collection, index }: { collection: Collection; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const color = tagColors[index % tagColors.length];

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
      className="reveal scroll-mt-20 py-6"
    >
      {/* Section header — inourbag style */}
      <div className="mb-4 px-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${color.bg} ${color.text}`}>
              {collection.tag}
            </span>
            <span className="text-[10px] text-foreground/25">·</span>
            <span className="text-[10px] text-foreground/30">{collection.products.length}개 상품</span>
          </div>
          <a
            href={`#${collection.slug}`}
            className="text-[10px] font-medium text-accent/60 transition-colors hover:text-accent"
          >
            전체보기
          </a>
        </div>
        <h3 className="mt-2 text-[16px] font-bold text-foreground leading-snug">{collection.title}</h3>
        <p className="mt-0.5 text-[11px] text-foreground/40">{collection.subtitle}</p>
      </div>
      <ProductMarquee products={collection.products} />
    </div>
  );
}

export function CollectionList({ collections }: { collections: Collection[] }) {
  return (
    <div className="divide-y divide-border/30">
      {collections.map((col, i) => (
        <CollectionCard key={col.slug} collection={col} index={i} />
      ))}
    </div>
  );
}
