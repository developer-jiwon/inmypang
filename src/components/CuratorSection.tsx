"use client";

import { useState } from "react";

const curators = [
  { name: "지원", location: "오타와" },
];

export function CuratorSection() {
  const [showBeta, setShowBeta] = useState(false);

  return (
    <>
      <section className="border-y border-border/30 bg-card-bg/50 py-3">
        <div className="mx-auto max-w-5xl flex items-center justify-between px-5">
          <div className="flex items-center gap-4 overflow-hidden">
            <span className="shrink-0 text-[10px] font-semibold tracking-widest text-foreground/40 uppercase">Curators</span>
            <div className="flex items-center gap-3">
              {curators.map((c) => (
                <div key={c.name} className="flex items-center gap-1.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-foreground text-[8px] font-bold text-white">
                    {c.name[0]}
                  </span>
                  <span className="text-[11px] text-foreground/60">{c.name}</span>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => setShowBeta(true)}
            className="shrink-0 rounded-full border border-dashed border-foreground/20 px-3 py-1 text-[10px] font-medium text-foreground/40 transition-colors hover:border-accent hover:text-accent"
          >
            + 큐레이터 지원
          </button>
        </div>
      </section>

      {showBeta && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm" onClick={() => setShowBeta(false)}>
          <div className="mx-4 rounded-2xl bg-card-bg p-6 text-center shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-[20px]">
              🚧
            </div>
            <h3 className="text-[16px] font-bold text-foreground">베타 모드입니다</h3>
            <p className="mt-2 text-[13px] text-foreground/60">
              큐레이터 모집은 곧 오픈 예정이에요!
            </p>
            <button
              onClick={() => setShowBeta(false)}
              className="mt-4 rounded-full bg-foreground px-6 py-2 text-[12px] font-medium text-white transition-all hover:opacity-90"
            >
              확인
            </button>
          </div>
        </div>
      )}
    </>
  );
}
