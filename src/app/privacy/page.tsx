export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="text-[20px] font-semibold text-foreground">개인정보처리방침</h1>
      <div className="mt-2 h-px bg-foreground/10" />

      <div className="mt-8 space-y-6 text-[13px] leading-relaxed text-foreground/70">
        <section>
          <h2 className="font-semibold text-foreground">1. 개인정보의 수집 및 이용 목적</h2>
          <p className="mt-2">
            인마이팡(이하 &quot;사이트&quot;)은 별도의 회원가입 절차 없이 운영되며,
            이용자의 개인정보를 직접 수집하지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">2. 제3자 서비스</h2>
          <p className="mt-2">
            본 사이트는 아래의 제3자 서비스를 이용하며, 각 서비스의 개인정보 처리에 대해서는
            해당 서비스의 개인정보처리방침을 참고해 주세요.
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li><strong>Google AdSense</strong> — 광고 제공을 위해 쿠키를 사용할 수 있습니다.</li>
            <li><strong>쿠팡 파트너스</strong> — 상품 링크 클릭 시 쿠팡으로 이동하며, 쿠팡의 개인정보처리방침이 적용됩니다.</li>
            <li><strong>Vercel Analytics</strong> — 사이트 이용 통계를 위해 익명화된 데이터를 수집할 수 있습니다.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">3. 쿠키 사용</h2>
          <p className="mt-2">
            본 사이트는 Google AdSense 및 제휴 서비스를 통해 쿠키를 사용할 수 있습니다.
            브라우저 설정을 통해 쿠키를 거부할 수 있으며, 이 경우 일부 서비스 이용에 제한이 있을 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">4. 개인정보 보호책임자</h2>
          <p className="mt-2">
            개인정보 관련 문의사항은 아래로 연락해 주세요.
          </p>
          <p className="mt-1">이메일: dev.jiwonnie@gmail.com</p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">5. 방침 변경</h2>
          <p className="mt-2">
            본 개인정보처리방침은 2026년 3월 13일부터 적용됩니다.
            변경 사항이 있을 경우 사이트를 통해 공지합니다.
          </p>
        </section>
      </div>
    </div>
  );
}
