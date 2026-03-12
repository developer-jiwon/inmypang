"use client";

const curators = [
  {
    id: "jiwon",
    name: "지원",
    location: "오타와, 캐나다 · 4년차",
    bio: "귀국할 때마다 똑같은 걸 사는 사람",
  },
];

export function CuratorSection() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-6">
      <div className="flex flex-wrap items-center gap-3">
        {curators.map((c) => (
          <div
            key={c.id}
            className="flex items-center gap-2.5 rounded-full border border-border bg-card-bg px-4 py-2"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-[10px] font-bold text-white">
              {c.name[0]}
            </div>
            <div className="text-[12px]">
              <span className="font-semibold text-foreground">{c.name}</span>
              <span className="mx-1.5 text-border">·</span>
              <span className="text-foreground/50">{c.location}</span>
            </div>
          </div>
        ))}
        <button className="flex items-center gap-2 rounded-full border border-dashed border-border px-4 py-2 text-[12px] text-foreground/40 transition-colors hover:border-accent hover:text-foreground">
          <span>+</span>
          <span>큐레이터 모집</span>
        </button>
      </div>
    </section>
  );
}
