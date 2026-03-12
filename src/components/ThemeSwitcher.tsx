"use client";

import { useState, useEffect } from "react";

const themes = [
  {
    id: 1,
    name: "Blue",
    accent: "#3B82F6",
    accentLight: "#EFF6FF",
    accentDeep: "#2563EB",
  },
  {
    id: 2,
    name: "Teal",
    accent: "#14B8A6",
    accentLight: "#ECFDF5",
    accentDeep: "#0D9488",
  },
  {
    id: 3,
    name: "Violet",
    accent: "#8B5CF6",
    accentLight: "#F5F3FF",
    accentDeep: "#7C3AED",
  },
  {
    id: 4,
    name: "Indigo",
    accent: "#6366F1",
    accentLight: "#EEF2FF",
    accentDeep: "#4F46E5",
  },
  {
    id: 5,
    name: "Cyan",
    accent: "#06B6D4",
    accentLight: "#ECFEFF",
    accentDeep: "#0891B2",
  },
];

export function ThemeSwitcher() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = themes[active];
    const root = document.documentElement;
    root.style.setProperty("--accent", t.accent);
    root.style.setProperty("--accent-light", t.accentLight);
    root.style.setProperty("--accent-deep", t.accentDeep);
  }, [active]);

  return (
    <div className="fixed bottom-6 left-1/2 z-[999] -translate-x-1/2">
      <div className="flex items-center gap-0.5 rounded-full border border-border/80 bg-card-bg/95 p-1 shadow-2xl backdrop-blur-xl">
        {themes.map((t, i) => (
          <button
            key={t.id}
            onClick={() => setActive(i)}
            className={`flex h-8 items-center gap-1.5 rounded-full px-3 text-[11px] font-medium transition-all duration-200 ${
              active === i
                ? "text-white"
                : "text-muted hover:text-foreground"
            }`}
            style={{
              backgroundColor: active === i ? t.accent : "transparent",
            }}
          >
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: t.accent }}
            />
            {active === i && <span>{t.name}</span>}
          </button>
        ))}
      </div>
    </div>
  );
}
