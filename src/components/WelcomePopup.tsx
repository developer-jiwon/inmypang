"use client";

import { useState, useEffect } from "react";
import { categories } from "@/data/collections";

const STORAGE_KEY = "inmypang_welcome_dismissed";

function getTodayCollection() {
  const allCollections = categories.flatMap((cat) => cat.collections);
  const dayIndex = Math.floor(Date.now() / 86400000) % allCollections.length;
  return allCollections[dayIndex];
}

export function WelcomePopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed !== today) {
      const timer = setTimeout(() => setShow(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleClose() {
    const today = new Date().toISOString().slice(0, 10);
    localStorage.setItem(STORAGE_KEY, today);
    setShow(false);
  }

  function handleRecommend() {
    const col = getTodayCollection();
    handleClose();
    setTimeout(() => {
      const el = document.getElementById(col.slug);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  if (!show) return null;

  const todayCol = getTodayCollection();
  const totalCollections = categories.flatMap((c) => c.collections).length;
  const totalProducts = categories.flatMap((c) => c.collections).flatMap((c) => c.products).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in"
        onPointerDown={(e) => e.preventDefault()}
      />

      {/* Dialog */}
      <div
        className="relative w-[88vw] max-w-[360px] animate-popup overflow-hidden rounded-3xl bg-white"
        style={{
          boxShadow: "0 20px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)",
        }}
      >
        {/* Top accent bar */}
        <div className="h-[2px] w-full bg-gradient-to-r from-[#C4A77D] via-[#1a2744] to-[#B4D4E1]" />

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute right-3.5 top-3.5 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-neutral-100/80 backdrop-blur-sm transition-all hover:bg-neutral-200 active:scale-95"
          style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 3l8 8M11 3l-8 8" stroke="#999" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        <div className="px-5 pt-5 pb-5">
          {/* Logo */}
          <div className="text-center">
            <p
              className="text-[20px] font-bold tracking-tight bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #C4A77D 0%, #1a2744 40%, #B4D4E1 60%, #C4A77D 100%)",
                backgroundSize: "200% auto",
                animation: "gradient-shift 4s ease infinite",
              }}
            >
              인마이팡
            </p>
            <p className="mt-0.5 text-[9px] uppercase tracking-[0.15em] text-neutral-400">
              curated shopping by taste
            </p>
          </div>

          {/* Divider */}
          <div className="mt-4 h-px bg-neutral-100" />

          {/* Intro */}
          <div className="mt-4 space-y-2.5">
            <div className="flex items-start gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1a2744]/8 text-[10px] font-semibold text-[#1a2744]">
                1
              </span>
              <p className="flex-1 pt-0.5 text-[11px] leading-relaxed text-neutral-600">
                큐레이터가 <strong className="font-semibold text-neutral-800">직접 고른 상품</strong>을 소개해요
              </p>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1a2744]/8 text-[10px] font-semibold text-[#1a2744]">
                2
              </span>
              <p className="flex-1 pt-0.5 text-[11px] leading-relaxed text-neutral-600">
                <strong className="font-semibold text-neutral-800">{totalCollections}개 큐레이션</strong>에서 {totalProducts}+ 상품을 만나보세요
              </p>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1a2744]/8 text-[10px] font-semibold text-[#1a2744]">
                3
              </span>
              <p className="flex-1 pt-0.5 text-[11px] leading-relaxed text-neutral-600">
                상품 클릭 시 <strong className="font-semibold text-neutral-800">쿠팡으로 이동</strong>해요
              </p>
            </div>
          </div>

          {/* Today's pick */}
          <button
            onClick={handleRecommend}
            className="mt-5 w-full rounded-2xl bg-[#1a2744] p-3.5 text-left transition-transform active:scale-[0.98]"
          >
            <p className="text-[10px] font-semibold tracking-wider text-white/90">
              오늘의 큐레이터 추천
            </p>
            <div className="mt-2 flex items-center justify-between gap-2">
              <div className="min-w-0 flex-1">
                <p className="truncate text-[12px] font-semibold text-white">
                  {todayCol.title}
                </p>
                <p className="truncate text-[10px] text-white/50">
                  {todayCol.subtitle}
                </p>
              </div>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-white/40">
                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>

          {/* Disclosure */}
          <p className="mt-4 text-center text-[9px] leading-relaxed text-neutral-400">
            인마이팡은 쿠팡 파트너스 활동을 통해<br />
            일정액의 수수료를 제공받고 있어요.
          </p>
        </div>
      </div>
    </div>
  );
}
