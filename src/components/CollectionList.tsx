"use client";

import { useEffect, useRef } from "react";
import type { Collection } from "@/data/collections";

const mustardGradients = [
  "linear-gradient(135deg, #DAA520, #E8BE3A)",
  "linear-gradient(135deg, #C49212, #DAA520)",
  "linear-gradient(135deg, #D4A017, #E5C040)",
  "linear-gradient(135deg, #CFA718, #DAA520)",
  "linear-gradient(135deg, #DAA520, #E0B830)",
  "linear-gradient(135deg, #C89B15, #D8AE22)",
  "linear-gradient(135deg, #D09E18, #DAA520)",
];

function ProductCard({ product }: { product: { id: number; name: string; price: string; img: string; note: string; badge?: string } }) {
  return (
    <a
      href={`https://www.coupang.com/np/search?component=&q=${encodeURIComponent(product.name)}&channel=user&traid=tr_AF6202879`}
      target="_blank"
      rel="noopener noreferrer"
      className="group product-card w-[32vw] shrink-0 rounded-lg bg-card-bg border border-border/60 overflow-hidden sm:w-[160px]"
    >
      <div className="relative aspect-square overflow-hidden bg-tag-bg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.img}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-2 top-2 rounded-md bg-foreground/85 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-sm">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-2">
        <h3 className="text-[11px] font-semibold leading-snug text-foreground line-clamp-2">
          {product.name}
        </h3>
        <p className="mt-0.5 text-[9px] text-muted italic line-clamp-1">
          &ldquo;{product.note}&rdquo;
        </p>
        <p className="mt-1 text-[12px] font-bold text-foreground">
          {product.price}<span className="text-[9px] font-medium text-muted">원</span>
        </p>
      </div>
    </a>
  );
}

function ProductMarquee({ products }: { products: Collection["products"] }) {
  return (
    <div className="overflow-hidden">
      <div className="flex animate-marquee-products gap-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
        {/* 복제본 for seamless loop */}
        {products.map((p) => (
          <ProductCard key={`dup-${p.id}`} product={p} />
        ))}
      </div>
    </div>
  );
}

function CollectionCard({ collection, index }: { collection: Collection; index: number }) {
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
    <div ref={ref} id={collection.slug} className="reveal scroll-mt-20">
      <div className="mb-4 flex items-center gap-3 px-5">
        <span
          className="shrink-0 rounded-full px-3 py-1 text-[10px] font-bold text-white"
          style={{ background: mustardGradients[index % mustardGradients.length] }}
        >
          {collection.tag}
        </span>
        <div className="min-w-0">
          <h3 className="text-[14px] font-bold text-foreground leading-snug truncate">{collection.title}</h3>
          <p className="text-[11px] text-foreground/50 truncate">{collection.subtitle}</p>
        </div>
      </div>
      <ProductMarquee products={collection.products} />
    </div>
  );
}

export function CollectionList({ collections }: { collections: Collection[] }) {
  return (
    <div className="space-y-12">
      {collections.map((col, i) => (
        <CollectionCard key={col.slug} collection={col} index={i} />
      ))}
    </div>
  );
}
