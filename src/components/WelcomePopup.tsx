"use client";

import { useState, useEffect } from "react";
import { categories } from "@/data/collections";

const STORAGE_KEY = "inmypang_welcome_dismissed";

/** 오늘의 추천 컬렉션 — 날짜 기반 로테이션 */
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in"
        onClick={handleClose}
      />

      {/* Dialog */}
      <div className="relative w-full max-w-[340px] animate-popup rounded-2xl bg-card-bg shadow-2xl overflow-hidden">
        {/* Accent bar */}
        <div className="h-1 bg-gradient-to-r from-[#C4A77D] via-[#1a2744] to-[#B4D4E1]" />

        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full text-foreground/30 transition-colors hover:bg-foreground/5 hover:text-foreground/60"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        <div className="px-6 pt-6 pb-5">
          {/* Logo */}
          <p className="text-[18px] font-bold tracking-tight text-foreground">
            인마이팡
          </p>

          {/* Intro */}
          <p className="mt-3 text-[13px] leading-relaxed text-foreground/70">
            큐레이터가 직접 고른 상품,<br />
            취향으로 연결되는 쇼핑.
          </p>

          {/* Divider */}
          <div className="mt-4 h-px bg-foreground/8" />

          {/* 오늘의 추천 */}
          <div className="mt-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground/30">
              오늘의 큐레이터 추천
            </p>
            <p className="mt-1.5 text-[14px] font-semibold text-foreground leading-snug">
              {todayCol.title}
            </p>
            <p className="mt-0.5 text-[11px] text-foreground/40">
              {todayCol.subtitle}
            </p>
          </div>

          {/* CTA */}
          <button
            onClick={handleRecommend}
            className="mt-5 w-full rounded-xl bg-[#1a2744] py-3 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            오늘의 추천 보러가기
          </button>

          {/* Disclosure */}
          <p className="mt-4 text-center text-[9px] leading-relaxed text-foreground/35">
            인마이팡은 쿠팡 파트너스 활동을 통해<br />
            일정액의 수수료를 제공받고 있어요.
          </p>
        </div>
      </div>
    </div>
  );
}
