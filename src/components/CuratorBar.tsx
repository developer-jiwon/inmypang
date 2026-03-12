"use client";

import { useState } from "react";

const curators = [
  {
    id: "jiwon",
    name: "지원",
    avatar: "지",
    color: "#5B7B8E",
    desc: "오타와 4년차",
    tag: "귀국 쇼핑",
  },
  // 나중에 추가
  // { id: "minsu", name: "민수", avatar: "민", color: "#7A7090", desc: "토론토 2년차", tag: "전자기기" },
];

export function CuratorBar() {
  const [active, setActive] = useState(0);

  return (
    <div className="fixed bottom-6 left-1/2 z-[999] -translate-x-1/2">
      <div className="flex items-center gap-1 rounded-full border border-border/80 bg-card-bg/95 px-2 py-1.5 shadow-2xl backdrop-blur-xl">
        {curators.map((c, i) => (
          <button
            key={c.id}
            onClick={() => setActive(i)}
            className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-[12px] font-medium transition-all duration-200 ${
              active === i
                ? "bg-foreground text-white"
                : "text-muted hover:text-foreground"
            }`}
          >
            <span
              className="flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-bold text-white"
              style={{ backgroundColor: c.color }}
            >
              {c.avatar}
            </span>
            {active === i && (
              <span>{c.name} · {c.desc}</span>
            )}
            {active !== i && <span>{c.name}</span>}
          </button>
        ))}
        {/* 큐레이터 모집 */}
        <button className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-medium text-muted transition-all hover:text-foreground">
          <span className="flex h-5 w-5 items-center justify-center rounded-full border border-dashed border-muted/50 text-[10px] text-muted">
            +
          </span>
          <span className="text-[11px]">큐레이터 모집</span>
        </button>
      </div>
    </div>
  );
}
