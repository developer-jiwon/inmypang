"use client";

import { useEffect, useRef } from "react";
import type { Collection } from "@/data/collections";

// Each section gets floating blobs — positioned absolutely, overflow visible, no hard edges
const sectionBlobs = [
  // blue blob left + faint lavender right
  { blobs: [{ color: "96,165,250", size: 320, x: "-10%", y: "10%", opacity: 0.18 }, { color: "167,139,250", size: 220, x: "75%", y: "60%", opacity: 0.10 }] },
  // lavender blob right + faint blue left
  { blobs: [{ color: "167,139,250", size: 300, x: "70%", y: "5%", opacity: 0.16 }, { color: "96,165,250", size: 200, x: "5%", y: "55%", opacity: 0.08 }] },
  // mint blob left + faint lavender
  { blobs: [{ color: "52,211,153", size: 340, x: "0%", y: "15%", opacity: 0.14 }, { color: "167,139,250", size: 180, x: "80%", y: "50%", opacity: 0.07 }] },
  // rose blob right + faint mint
  { blobs: [{ color: "251,146,160", size: 280, x: "65%", y: "0%", opacity: 0.15 }, { color: "52,211,153", size: 200, x: "10%", y: "60%", opacity: 0.07 }] },
  // strong blue blob
  { blobs: [{ color: "96,165,250", size: 360, x: "-5%", y: "20%", opacity: 0.20 }, { color: "251,146,160", size: 180, x: "80%", y: "15%", opacity: 0.08 }] },
  // indigo blob right
  { blobs: [{ color: "129,140,248", size: 300, x: "60%", y: "10%", opacity: 0.15 }, { color: "96,165,250", size: 200, x: "5%", y: "70%", opacity: 0.08 }] },
  // cyan blob left
  { blobs: [{ color: "34,211,238", size: 320, x: "10%", y: "5%", opacity: 0.14 }, { color: "129,140,248", size: 180, x: "85%", y: "55%", opacity: 0.07 }] },
];

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

  const blobData = sectionBlobs[index % sectionBlobs.length];

  return (
    <div
      ref={ref}
      id={collection.slug}
      className="reveal scroll-mt-20 relative py-8 overflow-visible"
    >
      {/* Floating gradient blobs — no hard edges */}
      {blobData.blobs.map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-3xl pointer-events-none"
          style={{
            width: b.size,
            height: b.size,
            left: b.x,
            top: b.y,
            background: `rgba(${b.color}, ${b.opacity})`,
          }}
        />
      ))}
      <div className="relative mb-5 flex items-center gap-3 px-5">
        <span
          className="shrink-0 rounded-full px-3 py-1 text-[10px] font-bold text-white"
          style={{ background: mustardGradients[index % mustardGradients.length] }}
        >
          {collection.tag}
        </span>
        <div className="min-w-0">
          <h3 className="text-[15px] font-bold text-foreground leading-snug truncate">{collection.title}</h3>
          <p className="text-[11px] text-foreground/45 truncate">{collection.subtitle}</p>
        </div>
      </div>
      <div className="relative">
        <ProductMarquee products={collection.products} />
      </div>
    </div>
  );
}

export function CollectionList({ collections }: { collections: Collection[] }) {
  return (
    <div className="space-y-4">
      {collections.map((col, i) => (
        <CollectionCard key={col.slug} collection={col} index={i} />
      ))}
    </div>
  );
}
