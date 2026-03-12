"use client";

import { useState, useEffect, useRef } from "react";
import type { Category, Collection } from "@/data/collections";

const ITEMS_PER_PAGE = 3;

function ProductCard({ product }: { product: { id: number; name: string; price: string; img: string; note: string; badge?: string } }) {
  return (
    <a href="#" className="group product-card rounded-xl bg-card-bg border border-border/60 overflow-hidden">
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
      <div className="p-3">
        <h3 className="text-[13px] font-semibold leading-snug text-foreground line-clamp-2">
          {product.name}
        </h3>
        <p className="mt-1 text-[11px] text-muted italic line-clamp-1">
          &ldquo;{product.note}&rdquo;
        </p>
        <div className="mt-2 flex items-baseline gap-1">
          <p className="text-[15px] font-bold text-foreground">
            {product.price}
          </p>
          <span className="text-[11px] font-medium text-muted">원</span>
        </div>
      </div>
    </a>
  );
}

function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <div id={collection.slug} className="scroll-mt-20">
      <div className="mb-4">
        <h3 className="text-[15px] font-bold text-foreground leading-tight">{collection.title}</h3>
        <p className="mt-0.5 text-[12px] text-muted">{collection.subtitle}</p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {collection.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export function CategorySection({ category, categoryIndex }: { category: Category; categoryIndex: number }) {
  const [page, setPage] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const totalPages = Math.ceil(category.collections.length / ITEMS_PER_PAGE);
  const visibleCollections = showAll
    ? category.collections
    : category.collections.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

  useEffect(() => {
    const el = sectionRef.current;
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
    <section ref={sectionRef} className="reveal mb-16">
      {/* Category header — 깔끔하게 */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-extrabold text-foreground tracking-tight">
          {category.name}
        </h2>

        {/* Pagination */}
        {totalPages > 1 && !showAll && (
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage(Math.max(0, page - 1))}
              disabled={page === 0}
              className="flex h-7 w-7 items-center justify-center rounded-lg border border-border text-foreground/50 transition-all hover:bg-tag-bg disabled:opacity-20"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M8.5 3.5L5 7l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <span className="w-10 text-center text-[11px] font-medium text-muted tabular-nums">
              {page + 1}/{totalPages}
            </span>
            <button
              onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
              disabled={page === totalPages - 1}
              className="flex h-7 w-7 items-center justify-center rounded-lg border border-border text-foreground/50 transition-all hover:bg-tag-bg disabled:opacity-20"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5.5 3.5L9 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="mb-8 h-px bg-border" />

      {/* Collections */}
      <div className="space-y-10">
        {visibleCollections.map((col) => (
          <CollectionCard key={col.slug} collection={col} />
        ))}
      </div>

      {/* Show all toggle */}
      {totalPages > 1 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-6 w-full rounded-lg border border-border py-2.5 text-[12px] font-medium text-muted transition-all hover:bg-tag-bg hover:text-foreground"
        >
          {showAll ? "접기" : `전체 보기`}
        </button>
      )}
    </section>
  );
}
