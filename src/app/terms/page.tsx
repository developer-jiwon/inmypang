export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="text-[20px] font-semibold text-foreground">이용약관</h1>
      <div className="mt-2 h-px bg-foreground/10" />

      <div className="mt-8 space-y-6 text-[13px] leading-relaxed text-foreground/70">
        <section>
          <h2 className="font-semibold text-foreground">1. 서비스 소개</h2>
          <p className="mt-2">
            인마이팡(이하 &quot;사이트&quot;)은 큐레이터가 직접 선정한 상품을 소개하는 쇼핑 큐레이션 서비스입니다.
            본 사이트는 상품을 직접 판매하지 않으며, 쿠팡 등 외부 쇼핑몰로의 링크를 제공합니다.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">2. 제휴 마케팅 안내</h2>
          <p className="mt-2">
            본 사이트의 상품 링크는 쿠팡 파트너스 활동의 일환으로,
            이에 따른 일정액의 수수료를 제공받습니다.
            상품의 가격, 재고, 상세 정보는 쿠팡 사이트에서 직접 확인해 주세요.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">3. 면책 조항</h2>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>본 사이트에서 제공하는 상품 정보는 참고용이며, 실제 상품 정보와 다를 수 있습니다.</li>
            <li>상품의 구매, 배송, 환불 등은 쿠팡의 정책에 따르며, 본 사이트는 이에 대한 책임을 지지 않습니다.</li>
            <li>상품 리뷰 및 추천은 큐레이터의 개인적인 의견이며, 효능이나 품질을 보장하지 않습니다.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">4. 저작권</h2>
          <p className="mt-2">
            본 사이트의 콘텐츠(텍스트, 디자인, 큐레이션 구성)는 인마이팡에 귀속됩니다.
            상품 이미지의 저작권은 각 판매자 및 쿠팡에 있습니다.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">5. 문의</h2>
          <p className="mt-2">
            서비스 이용 관련 문의: dev.jiwonnie@gmail.com
          </p>
        </section>

        <p className="text-[11px] text-foreground/40">
          본 약관은 2026년 3월 13일부터 시행됩니다.
        </p>
      </div>
    </div>
  );
}
