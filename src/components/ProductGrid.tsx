const products = [
  { id: 1, name: "라운드랩 자작나무 수분 크림", price: "18,900", tag: "셀프케어", note: "파리 겨울을 이긴 크림", img: "https://placehold.co/400x400/f5f5f5/999?text=Round+Lab" },
  { id: 2, name: "닥터지 레드 블레미쉬 클리어 수딩 크림", price: "14,200", tag: "셀프케어", note: "진정 크림 끝판왕", img: "https://placehold.co/400x400/f5f5f5/999?text=Dr.G" },
  { id: 3, name: "이니스프리 레티놀 시카 흔적 앰플", price: "22,000", tag: "셀프케어", note: "해외 레티놀 반값", img: "https://placehold.co/400x400/f5f5f5/999?text=Innisfree" },
  { id: 4, name: "삼양 불닭볶음면 멀티팩", price: "4,480", tag: "먹거리", note: "해외 아시안마트의 3배 차이", badge: "가격차 큼", img: "https://placehold.co/400x400/f5f5f5/999?text=Buldak" },
  { id: 5, name: "CJ 햇반 210g x 12개", price: "11,880", tag: "먹거리", note: "자취러 생명줄", img: "https://placehold.co/400x400/f5f5f5/999?text=Hetbahn" },
  { id: 6, name: "곰표 밀맥주 6캔", price: "12,900", tag: "먹거리", note: "해외에서 못 구함", img: "https://placehold.co/400x400/f5f5f5/999?text=Gompyo" },
  { id: 7, name: "다이소 실리콘 주걱 세트", price: "3,000", tag: "생활", note: "15유로 vs 3,000원", badge: "가성비", img: "https://placehold.co/400x400/f5f5f5/999?text=Daiso" },
  { id: 8, name: "쿠쿠 전기밥솥 미니 3인용", price: "89,000", tag: "생활", note: "해외 직구하면 배송비만 5만원", img: "https://placehold.co/400x400/f5f5f5/999?text=Cuckoo" },
  { id: 9, name: "비오레 UV 아쿠아 리치 워터리 에센스", price: "9,800", tag: "셀프케어", note: "매일 쓰는 선크림", img: "https://placehold.co/400x400/f5f5f5/999?text=Biore" },
  { id: 10, name: "오뚜기 진라면 순한맛 멀티", price: "3,180", tag: "먹거리", note: "해외에선 사치품", img: "https://placehold.co/400x400/f5f5f5/999?text=Jin" },
  { id: 11, name: "무인양품 스타일 수납 바스켓 (다이소)", price: "5,000", tag: "생활", note: "무인양품 1/3 가격", img: "https://placehold.co/400x400/f5f5f5/999?text=Basket" },
  { id: 12, name: "메디힐 N.M.F 마스크팩 10매", price: "8,900", tag: "셀프케어", note: "기내 필수템", badge: "인기", img: "https://placehold.co/400x400/f5f5f5/999?text=Mediheal" },
];

export function ProductGrid() {
  return (
    <section className="py-6">
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
        {products.map((product) => (
          <a key={product.id} href="#" className="group">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-tag-bg transition-transform duration-200 group-hover:scale-[0.98]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.img}
                alt={product.name}
                className="h-full w-full object-cover"
              />
              {product.badge && (
                <span className="absolute left-2 top-2 rounded bg-foreground px-1.5 py-0.5 text-[10px] font-semibold text-background">
                  {product.badge}
                </span>
              )}
            </div>
            <div className="mt-2.5">
              <span className="text-[11px] text-muted">{product.tag}</span>
              <h3 className="mt-0.5 text-[13px] font-medium leading-snug text-foreground line-clamp-2">
                {product.name}
              </h3>
              <p className="mt-1 text-[12px] leading-snug text-muted line-clamp-1 italic">
                &ldquo;{product.note}&rdquo;
              </p>
              <p className="mt-1.5 text-[14px] font-bold text-foreground">
                {product.price}
                <span className="text-[12px] font-normal text-muted">원</span>
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
