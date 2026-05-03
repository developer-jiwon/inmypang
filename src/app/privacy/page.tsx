export const metadata = {
  title: "개인정보처리방침 | 인마이팡",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="text-[20px] font-semibold text-foreground">개인정보처리방침</h1>
      <div className="mt-2 h-px bg-foreground/10" />

      <div className="mt-8 space-y-6 text-[13px] leading-relaxed text-foreground/70">
        <p>인마이팡(이하 &quot;사이트&quot;)은 「개인정보 보호법」 및 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」을 준수합니다.</p>

        <section>
          <h2 className="font-semibold text-foreground">1. 수집하는 개인정보</h2>
          <p className="mt-2">
            본 사이트는 회원가입·로그인 기능이 없으며, 이용자가 직접 입력하는 개인정보(이름·연락처·주소 등)를 수집하지 않습니다.
          </p>
          <p className="mt-2">
            웰컴 팝업 노출 여부 등 일부 UI 상태값을 이용자의 브라우저 localStorage에 저장합니다. 해당 값은 이용자 식별이 불가능하며, 외부 서버로 전송되지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">2. 자동 수집 정보 (호스팅사)</h2>
          <p className="mt-2">
            웹 호스팅을 위탁받은 Vercel Inc.(미국)는 서비스 제공 과정에서 이용자의 IP·접속 시간·User-Agent를 일시적으로 로그에 기록할 수 있습니다. 통신비밀보호법에 따라 일정 기간 후 자동 삭제됩니다.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">3. 외부 링크 (쿠팡 파트너스)</h2>
          <p className="mt-2">
            본 사이트의 상품 카드는 쿠팡 파트너스 활동의 일환으로, 이용자가 링크를 클릭하면 쿠팡 사이트로 이동하며 일정액의 수수료가 본 사이트 운영자에게 지급될 수 있습니다.
          </p>
          <p className="mt-2">
            쿠팡 사이트 이동 후의 개인정보 수집·처리는 쿠팡(쿠팡 주식회사)의 개인정보처리방침에 따르며, 본 사이트는 이에 대해 관여하거나 책임지지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">4. 광고 및 분석 도구 미사용</h2>
          <p className="mt-2">
            본 사이트는 광고 네트워크(Google AdSense 등) 및 사용자 추적 분석 도구를 사용하지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">5. 제3자 제공</h2>
          <p className="mt-2">
            본 사이트는 수집되는 개인정보가 없으므로 제3자에게 제공하지 않습니다. 호스팅 위탁 관계는 위 제2조와 같습니다.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">6. 국외 이전</h2>
          <p className="mt-2">
            호스팅 위탁사 Vercel Inc.이 미국에 소재하므로 자동 수집 정보가 국외로 이전될 수 있습니다. 「개인정보 보호법」 제28조의8에 따라 고지합니다.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">7. 만 14세 미만 아동</h2>
          <p className="mt-2">
            본 사이트는 만 14세 미만 아동의 개인정보를 고의로 수집하지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">8. 이용자의 권리</h2>
          <p className="mt-2">
            이용자는 브라우저 설정에서 localStorage를 삭제하여 저장된 모든 데이터를 즉시 삭제할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">9. 개인정보 보호책임자 및 문의</h2>
          <p className="mt-2">개인정보 보호책임자: 황지원 (개발·운영자)</p>
          <p className="mt-1">이메일: dev.jiwonnie@gmail.com</p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">10. 방침 변경</h2>
          <p className="mt-2">
            본 방침이 변경될 경우 시행일 최소 7일 전 본 페이지를 통해 공지합니다. 시행일: 2026년 5월 3일.
          </p>
        </section>
      </div>
    </div>
  );
}
