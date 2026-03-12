export function Footer() {
  return (
    <footer className="mt-8 border-t border-border">
      {/* Gradient accent line */}
      <div className="gradient-line" />

      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="flex flex-col items-center text-center">
          <span className="font-[family-name:var(--font-logo)] text-lg font-medium italic tracking-tight text-foreground">
            inmypang
          </span>

          <div className="my-6 h-px w-16 bg-border" />

          <div className="flex items-center gap-6 text-[12px] text-muted">
            <span>해외살이 쇼핑 큐레이션</span>
            <span className="h-3 w-px bg-border" />
            <span>오타와, 캐나다</span>
          </div>

          <p className="mt-6 max-w-sm text-[10px] leading-relaxed text-muted/60">
            이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
          </p>
          <p className="mt-2 text-[10px] text-muted/40">© 2026 인마이팡</p>
        </div>
      </div>
    </footer>
  );
}
