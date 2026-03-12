"use client";

const curators = [
  { name: "지원", avatar: "지", color: "#5B7B8E" },
  // 나중에 추가
  // { name: "민수", avatar: "민", color: "#7A7090" },
  // { name: "소영", avatar: "소", color: "#6A8A7A" },
];

export function CuratorProfile() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-5">
      <div className="flex items-center gap-3">
        {/* Avatar stack */}
        <div className="flex -space-x-2">
          {curators.map((c) => (
            <div
              key={c.name}
              className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background text-[11px] font-bold text-white"
              style={{ backgroundColor: c.color }}
              title={c.name}
            >
              {c.avatar}
            </div>
          ))}
          {/* Placeholder for more */}
          <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-tag-bg text-[10px] font-medium text-muted">
            +
          </div>
        </div>

        <div className="text-[12px] text-muted">
          <span className="font-semibold text-foreground">{curators[0].name}</span>
          {curators.length > 1 && ` 외 ${curators.length - 1}명`}
          {" "}· 큐레이터
        </div>
      </div>
    </section>
  );
}
