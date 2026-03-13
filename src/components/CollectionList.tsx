"use client";

import { useEffect, useRef } from "react";
import type { Collection, Category } from "@/data/collections";

const categoryStyles = [
  { pill: "bg-[#FFF3E0] text-[#E67E22]" },
  { pill: "bg-[#E8F5E9] text-[#2E7D32]" },
  { pill: "bg-[#FCE4EC] text-[#C2185B]" },
  { pill: "bg-[#F3E5F5] text-[#7B1FA2]" },
  { pill: "bg-[#E3F2FD] text-[#1565C0]" },
  { pill: "bg-[#FFF8E1] text-[#F57F17]" },
  { pill: "bg-[#E0F7FA] text-[#00838F]" },
];

function ProductCard({ product }: { product: { id: number; name: string; img: string; note: string; badge?: string } }) {
  return (
    <a
      href={`https://www.coupang.com/np/search?component=&q=${encodeURIComponent(product.name)}&channel=user&traid=tr_AF6202879`}
      target="_blank"
      rel="noopener noreferrer"
      className="group product-card w-[21vw] shrink-0 rounded-xl bg-card-bg border border-border/40 overflow-hidden sm:w-[130px] shadow-sm"
    >
      <div className="relative aspect-square overflow-hidden bg-tag-bg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.img}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-1.5 top-1.5 rounded-md bg-foreground/85 px-1.5 py-0.5 text-[9px] font-semibold text-white backdrop-blur-sm">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-2">
        <h3 className="text-[10px] font-semibold leading-snug text-foreground line-clamp-2">
          {product.name}
        </h3>
        <p className="mt-0.5 text-[9px] font-medium text-accent-deep">
          쿠팡에서 보기 →
        </p>
      </div>
    </a>
  );
}

function ProductGrid({ products }: { products: Collection["products"] }) {
  const half = Math.ceil(products.length / 2);
  const row1 = products.slice(0, half);
  const row2 = products.slice(half);

  return (
    <div className="overflow-x-auto scrollbar-hide touch-pan-x px-5">
      <div className="flex flex-col gap-2 w-max">
        <div className="flex gap-2">
          {row1.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="flex gap-2">
          {row2.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CollectionCard({ collection }: { collection: Collection }) {
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
    <div ref={ref} id={collection.slug} className="reveal scroll-mt-20 py-5">
      <div className="mb-4 px-5">
        <h3 className="text-[15px] font-light tracking-[0.02em] text-foreground"><span className="highlight-zigzag">{collection.title}</span></h3>
        <p className="mt-0.5 text-[11px] font-light text-foreground/40">{collection.subtitle}</p>
      </div>
      <ProductGrid products={collection.products} />
      <p className="px-5 mt-2 text-[10px] text-foreground/50 leading-relaxed">
        이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
      </p>
    </div>
  );
}

export function CategorySection({ category, index }: { category: Category; index: number }) {
  const style = categoryStyles[index % categoryStyles.length];
  const totalProducts = category.collections.reduce((sum, col) => sum + col.products.length, 0);

  return (
    <section className="mt-10 first:mt-4">
      {/* Category divider */}
      <div className="px-5 mb-1">
        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-foreground/30">
          {category.name}
        </p>
        <div className="mt-2 h-px bg-foreground/6" />
      </div>

      {/* Collections */}
      {category.collections.map((col) => (
        <CollectionCard key={col.slug} collection={col} />
      ))}
    </section>
  );
}
