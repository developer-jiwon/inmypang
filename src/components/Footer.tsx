import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-8 border-t border-foreground/5 py-8">
      <div className="mx-auto max-w-5xl px-5 text-center">
        <p className="text-[12px] leading-relaxed text-foreground/50">
          이 포스팅은 쿠팡 파트너스 활동의 일환으로,<br />
          이에 따른 일정액의 수수료를 제공받습니다.
        </p>
        <div className="mt-3 flex items-center justify-center gap-3 text-[10px] text-foreground/30">
          <Link href="/privacy" className="hover:text-foreground/50 transition-colors">개인정보처리방침</Link>
          <span>·</span>
          <Link href="/terms" className="hover:text-foreground/50 transition-colors">이용약관</Link>
        </div>
        <p className="mt-2 text-[10px] text-foreground/25">© 2026 인마이팡</p>
      </div>
    </footer>
  );
}
