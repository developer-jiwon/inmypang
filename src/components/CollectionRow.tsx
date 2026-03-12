"use client";

import { useEffect, useRef } from "react";
import type { Collection } from "@/data/collections";

const curatorLines = [
  "지원's pick — 캐나다 4년차의 실전 리스트",
  "이번 달 가장 반응 좋았던 컬렉션",
  "편집장 추천 — 귀국 전 꼭 보세요",
  "실제로 사서 써본 것만 골랐어요",
  "해외살이 친구들이 가장 많이 저장한 글",
  "조회수 1위 — 이유가 있는 리스트",
  "귀국 D-7, 이것부터 장바구니에",
  "매달 업데이트되는 실전 쇼핑 가이드",
];

function getRandomCurator(seed: number) {
  return curatorLines[seed % curatorLines.length];
}

export function CollectionRow({ collection, index }: { collection: Collection; index: number }) {
  const curator = getRandomCurator(index);
  const sectionRef = useRef<HTMLElement>(null);

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
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={collection.slug}
      className="reveal mb-16 scroll-mt-20"
    >
      {/* Section header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/10 text-[11px] font-bold text-accent-deep">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="inline-flex items-center rounded-full bg-accent-light px-3 py-1 text-[11px] font-semibold text-accent-deep tracking-wide">
            {collection.tag}
          </div>
        </div>
        <h2 className="text-[1.5rem] font-extrabold text-foreground leading-tight tracking-tight">
          {collection.title}
        </h2>
        <p className="mt-1.5 text-[14px] text-muted leading-relaxed">{collection.subtitle}</p>
        <p className="mt-2 flex items-center gap-1.5 text-[11px] text-muted/70 italic">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1v4l2.5 1.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1" />
          </svg>
          {curator}
        </p>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {collection.products.map((product) => (
          <a key={product.id} href="#" className="group product-card rounded-xl bg-card-bg border border-border/60 overflow-hidden">
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
                  {product.price.toLocaleString()}
                </p>
                <span className="text-[11px] font-medium text-muted">원</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
