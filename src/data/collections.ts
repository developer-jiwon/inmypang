export type Product = {
  id: number;
  name: string;
  price: string;
  img: string;
  note: string;
  badge?: string;
};

export type Collection = {
  slug: string;
  title: string;
  subtitle: string;
  tag: string;
  products: Product[];
};

export type Category = {
  slug: string;
  name: string;
  collections: Collection[];
};

const bgColors = ["#E8E0F0", "#DBEAFE", "#D1FAE5", "#FEE2E2", "#FEF3C7", "#E0E7FF", "#CFFAFE"];
const fgColors = ["#8B5CF6", "#3B82F6", "#10B981", "#EF4444", "#F59E0B", "#6366F1", "#06B6D4"];
let colorIdx = 0;
const PH = (text: string) => {
  const i = colorIdx++ % bgColors.length;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="400" height="400" fill="${bgColors[i]}"/><text x="200" y="210" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="600" fill="${fgColors[i]}">${text}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

export const categories: Category[] = [
  // ─── 귀국 쇼핑 시리즈 ───
  {
    slug: "homecoming",
    name: "귀국 쇼핑",
    collections: [
      {
        slug: "canada-4yr-must-buy",
        title: "캐나다 4년차, 내가 한국에 있었다면...",
        subtitle: "오타와에서 4년, 귀국할 때마다 똑같은 걸 사는 나",
        tag: "귀국 쇼핑",
        products: [
          { id: 101, name: "라운드랩 자작나무 수분 크림", price: "18,900", img: PH("Round+Lab"), note: "캐나다 겨울을 이긴 크림" },
          { id: 102, name: "삼양 불닭볶음면 멀티팩", price: "4,480", img: PH("Buldak"), note: "T&T에서 3배 가격", badge: "가격차 큼" },
          { id: 103, name: "메디힐 N.M.F 마스크팩 10매", price: "8,900", img: PH("Mediheal"), note: "기내 필수템", badge: "인기" },
          { id: 104, name: "CJ 햇반 210g x 12개", price: "11,880", img: PH("Hetbahn"), note: "H마트에서 사면 손해" },
          { id: 105, name: "다이소 실리콘 주걱 세트", price: "3,000", img: PH("Daiso"), note: "Dollar Tree와 비교 불가", badge: "가성비" },
          { id: 106, name: "곰표 밀맥주 6캔", price: "12,900", img: PH("Gompyo"), note: "캐나다에서 구할 수 없음" },
        ],
      },
      {
        slug: "72hr-shopping-route",
        title: "일시귀국 72시간 쇼핑 루트",
        subtitle: "인천공항 → 올리브영 → 다이소 → 이마트, 국룰 순서",
        tag: "귀국 쇼핑",
        products: [
          { id: 111, name: "올리브영 1+1 세일 수분크림", price: "12,900", img: PH("Olive+Young"), note: "1+1은 한국만의 축복" },
          { id: 112, name: "다이소 여행용 파우치 세트", price: "3,000", img: PH("Pouch"), note: "이거 하나로 정리 끝" },
          { id: 113, name: "이마트 노브랜드 견과류 1kg", price: "9,980", img: PH("No+Brand"), note: "Costco보다 싸다" },
          { id: 114, name: "이니스프리 그린티 씨드 세럼", price: "22,000", img: PH("Innisfree"), note: "면세점보다 올영이 쌈" },
          { id: 115, name: "초코파이 정 오리지널 36개입", price: "7,480", img: PH("Chocopie"), note: "외국인 친구 선물 1순위" },
          { id: 116, name: "모다모다 샴푸 블랙", price: "28,900", img: PH("Modamoda"), note: "해외직구 불가 아이템" },
        ],
      },
      {
        slug: "suitcase-30",
        title: "캐리어에 꼭 넣어가는 30가지",
        subtitle: "23kg 안에 우겨넣는 기술, 4년차의 패킹 리스트",
        tag: "귀국 쇼핑",
        products: [
          { id: 121, name: "비비고 만두 1kg", price: "8,980", img: PH("Bibigo"), note: "냉동만두는 한국이 진리" },
          { id: 122, name: "오뚜기 진라면 순한맛 멀티", price: "3,180", img: PH("Jin"), note: "해외에선 사치품" },
          { id: 123, name: "려 자양윤모 샴푸", price: "11,900", img: PH("Ryo"), note: "한방샴푸는 직접 사야 함" },
          { id: 124, name: "에뛰드 플레이컬러 아이팔레트", price: "19,800", img: PH("Etude"), note: "Sephora 반값" },
          { id: 125, name: "종근당 비타민D 3000IU", price: "12,900", img: PH("Vitamin+D"), note: "캐나다 겨울 필수" },
          { id: 126, name: "핫팩 30매입 대용량", price: "9,900", img: PH("Hotpack"), note: "캐나다 겨울 생존템" },
        ],
      },
    ],
  },

  // ─── 가격 비교 시리즈 ───
  {
    slug: "price-compare",
    name: "가격 비교",
    collections: [
      {
        slug: "canada-vs-korea",
        title: "캐나다 vs 한국, 같은 제품 가격 3배 차이",
        subtitle: "H마트에서 절대 사면 안 되는 것들",
        tag: "가격 비교",
        products: [
          { id: 201, name: "신라면 멀티팩 (5개입)", price: "3,380", img: PH("Shin"), note: "H마트 $8.99 vs 쿠팡 3,380원", badge: "3배 차이" },
          { id: 202, name: "참이슬 후레쉬 360ml x 20", price: "22,900", img: PH("Chamisul"), note: "LCBO $9.95/병 vs 1,145원/병", badge: "8배 차이" },
          { id: 203, name: "농심 새우깡 대용량", price: "2,980", img: PH("Saewookkang"), note: "$5.99 vs 2,980원" },
          { id: 204, name: "설화수 윤조에센스 90ml", price: "79,000", img: PH("Sulwhasoo"), note: "Holt's $140 vs 79,000원" },
          { id: 205, name: "비비고 왕교자 1.05kg", price: "8,480", img: PH("Wanggyoza"), note: "$16.99 vs 8,480원" },
          { id: 206, name: "바나나맛 우유 6개입", price: "5,280", img: PH("Banana+Milk"), note: "$3.99/개 vs 880원/개", badge: "4배 차이" },
        ],
      },
      {
        slug: "never-buy-overseas",
        title: "해외 한인마트에서 절대 사면 안 되는 것들",
        subtitle: "귀국 때 사오면 반값 이하인 리스트",
        tag: "가격 비교",
        products: [
          { id: 211, name: "오뚜기 카레 분말 100g", price: "1,980", img: PH("Curry"), note: "한인마트 $6.99, 말이 됨?" },
          { id: 212, name: "고추장 500g", price: "4,980", img: PH("Gochujang"), note: "$12.99에서 해방" },
          { id: 213, name: "깻잎 통조림", price: "2,480", img: PH("Sesame+Leaf"), note: "신선 깻잎은 꿈도 못 꿈" },
          { id: 214, name: "미원 100g", price: "1,280", img: PH("Miwon"), note: "한인마트 $4.99" },
          { id: 215, name: "삼립 호빵 8개입", price: "4,980", img: PH("Hobang"), note: "겨울 귀국 필수템" },
          { id: 216, name: "오징어채 200g", price: "5,980", img: PH("Squid"), note: "$15.99에서 해방" },
        ],
      },
    ],
  },

  // ─── 20대 여자 ───
  {
    slug: "20f",
    name: "20대 여자",
    collections: [
      {
        slug: "oliveyoung-10k-challenge",
        title: "올리브영 1만원 챌린지",
        subtitle: "만원으로 이만큼? 해외에선 상상도 못 할 가성비",
        tag: "20대 여자",
        products: [
          { id: 301, name: "클리오 킬커버 쿠션 미니", price: "9,900", img: PH("Clio"), note: "MAC 절반도 안 되는 가격" },
          { id: 302, name: "토니모리 원더 세라마이드 토너", price: "8,900", img: PH("Tonymoly"), note: "CeraVe 대체템" },
          { id: 303, name: "롬앤 쥬시 래스팅 틴트", price: "8,900", img: PH("Romand"), note: "전세계가 인정한 틴트" },
          { id: 304, name: "마녀공장 퓨어 클렌징 오일", price: "9,800", img: PH("Manyo"), note: "DHC보다 낫다 진심" },
          { id: 305, name: "에이프릴스킨 당근 패드", price: "9,900", img: PH("Carrot+Pad"), note: "TikTok에서 난리난 그거" },
          { id: 306, name: "이니스프리 노세범 파우더", price: "7,000", img: PH("No+Sebum"), note: "전세계 MZ 파우치 필수" },
        ],
      },
      {
        slug: "gift-for-foreign-friends",
        title: "해외 친구 선물 세트",
        subtitle: "외국인 친구에게 주면 감동 확정 K-뷰티 세트",
        tag: "20대 여자",
        products: [
          { id: 311, name: "라네즈 립 슬리핑 마스크", price: "16,000", img: PH("Laneige"), note: "Sephora 베스트셀러가 반값" },
          { id: 312, name: "메디힐 마스크팩 10종 세트", price: "12,900", img: PH("Mediheal+Set"), note: "1장에 1,290원 말이 돼?" },
          { id: 313, name: "한국 전통 부채 세트", price: "8,900", img: PH("Fan"), note: "한국 감성 선물" },
          { id: 314, name: "허니버터아몬드 3종 세트", price: "9,900", img: PH("Honey+Butter"), note: "한번 먹으면 중독" },
          { id: 315, name: "조선미녀 맑은 선크림", price: "11,900", img: PH("Beauty+of+Joseon"), note: "Amazon 30불짜리" },
          { id: 316, name: "마켓컬리 한과 선물세트", price: "15,900", img: PH("Hangwa"), note: "외국인 감동 보장" },
        ],
      },
    ],
  },

  // ─── 30대 여자 ───
  {
    slug: "30f",
    name: "30대 여자",
    collections: [
      {
        slug: "selfcare-100k",
        title: "월 10만원 셀프케어 루틴",
        subtitle: "해외에서는 월 30만원, 한국에서는 10만원이면 충분",
        tag: "30대 여자",
        products: [
          { id: 401, name: "라운드랩 자작나무 수분 크림", price: "18,900", img: PH("Round+Lab"), note: "건조한 나라 필수" },
          { id: 402, name: "닥터지 레드 블레미쉬 수딩 크림", price: "14,200", img: PH("Dr.G"), note: "진정 크림 끝판왕" },
          { id: 403, name: "이니스프리 레티놀 시카 앰플", price: "22,000", img: PH("Retinol"), note: "해외 레티놀 반값" },
          { id: 404, name: "비오레 UV 워터리 에센스", price: "9,800", img: PH("Biore"), note: "매일 쓰는 선크림" },
          { id: 405, name: "아이소이 불가리안 로즈 세럼", price: "28,000", img: PH("Isoi"), note: "해외 직구 불가" },
          { id: 406, name: "VT 리들샷 100 에센스", price: "17,900", img: PH("VT"), note: "피부과 대체템" },
        ],
      },
      {
        slug: "baby-korea-essential",
        title: "육아템 한국 직구 필수",
        subtitle: "아기 데리고 귀국하면 무조건 사야 하는 것들",
        tag: "30대 여자",
        products: [
          { id: 411, name: "궁중비책 기저귀 팬츠 대용량", price: "24,900", img: PH("Diaper"), note: "Pampers의 반값" },
          { id: 412, name: "보령 아기 물티슈 캡형 80매x10", price: "9,900", img: PH("Wet+Wipes"), note: "해외 물티슈와 차원이 다름" },
          { id: 413, name: "맘마밀 이유식 파우치 10개", price: "12,900", img: PH("Baby+Food"), note: "한국 이유식이 최고" },
          { id: 414, name: "뽀로로 칫솔 세트", price: "5,900", img: PH("Pororo"), note: "아이가 좋아하는 건 만국공통" },
          { id: 415, name: "알집매트 놀이방매트", price: "89,000", img: PH("Play+Mat"), note: "해외 직구하면 배송비만 10만원" },
          { id: 416, name: "유한킴벌리 아기 선크림", price: "8,900", img: PH("Baby+Sun"), note: "민감한 아기 피부에 안심" },
        ],
      },
    ],
  },

  // ─── 30대 남자 ───
  {
    slug: "30m",
    name: "30대 남자",
    collections: [
      {
        slug: "korean-alcohol-anju",
        title: "해외에서 못 구하는 한국 술/안주",
        subtitle: "LCBO에는 없는, 한국 편의점의 위대함",
        tag: "30대 남자",
        products: [
          { id: 501, name: "참이슬 후레쉬 360ml x 20", price: "22,900", img: PH("Chamisul"), note: "LCBO $9.95 vs 쿠팡 1,145원" },
          { id: 502, name: "곰표 밀맥주 6캔", price: "12,900", img: PH("Gompyo"), note: "캐나다에서 구할 수 없음" },
          { id: 503, name: "안동소주 350ml", price: "8,900", img: PH("Andong"), note: "한국 전통주의 깊은 맛" },
          { id: 504, name: "노가리칩 대용량", price: "6,900", img: PH("Nogari"), note: "맥주 안주 끝판왕" },
          { id: 505, name: "불닭 소스", price: "3,480", img: PH("Buldak+Sauce"), note: "뭐든 맛있어지는 마법" },
          { id: 506, name: "GS25 편의점 안주 세트", price: "12,900", img: PH("Anju+Set"), note: "편의점이 그리운 밤" },
        ],
      },
      {
        slug: "mens-grooming-value",
        title: "남자 그루밍 가성비 끝판왕",
        subtitle: "해외 남자 그루밍 가격에 경악한 30대의 쇼핑리스트",
        tag: "30대 남자",
        products: [
          { id: 511, name: "이니스프리 포레스트 올인원", price: "18,900", img: PH("Forest"), note: "올인원 하나면 끝" },
          { id: 512, name: "오딧세이 바디워시", price: "9,900", img: PH("Odyssey"), note: "Old Spice 졸업" },
          { id: 513, name: "다슈 헤어왁스", price: "8,900", img: PH("Dashu"), note: "해외에서 못 구함" },
          { id: 514, name: "비오레 맨즈 폼클렌저", price: "5,900", img: PH("Biore+Men"), note: "Cerave 반값" },
          { id: 515, name: "에스네이처 아쿠아 스쿼란 세럼", price: "14,900", img: PH("Squalane"), note: "The Ordinary 대체" },
          { id: 516, name: "질레트 면도기 리필 8입", price: "19,900", img: PH("Gillette"), note: "한국이 캐나다의 반값" },
        ],
      },
    ],
  },

  // ─── 40대 ───
  {
    slug: "40s",
    name: "40대",
    collections: [
      {
        slug: "health-supplement-compare",
        title: "건강식품 직구 vs 한국",
        subtitle: "iHerb vs 쿠팡, 실제 가격 비교 결과",
        tag: "40대",
        products: [
          { id: 601, name: "종근당 비타민D 3000IU 90캡슐", price: "12,900", img: PH("Vitamin+D"), note: "캐나다 겨울 필수" },
          { id: 602, name: "정관장 홍삼정 에브리타임", price: "32,900", img: PH("Red+Ginseng"), note: "해외 직구 불가" },
          { id: 603, name: "뉴트리원 루테인 오메가3", price: "24,900", img: PH("Lutein"), note: "눈 건강 필수" },
          { id: 604, name: "닥터리브 콜라겐 스틱", price: "29,900", img: PH("Collagen"), note: "한국산 콜라겐이 최고" },
          { id: 605, name: "고려은단 멀티비타민", price: "15,900", img: PH("Multi+Vita"), note: "iHerb보다 가성비 좋음" },
          { id: 606, name: "프로폴리스 스프레이", price: "8,900", img: PH("Propolis"), note: "환절기 목 보호" },
        ],
      },
      {
        slug: "parents-gift-list",
        title: "부모님 선물 리스트",
        subtitle: "해외에서 돌아온 효자/효녀 필수 쇼핑",
        tag: "40대",
        products: [
          { id: 611, name: "정관장 활기력 세트", price: "89,000", img: PH("Gift+Set"), note: "부모님 선물 국룰" },
          { id: 612, name: "보국전자 안마기", price: "49,900", img: PH("Massager"), note: "해외 직구하면 배송비 폭탄" },
          { id: 613, name: "설화수 자음생 크림", price: "89,000", img: PH("Sulwhasoo"), note: "엄마가 좋아하는 그 크림" },
          { id: 614, name: "동원 참치 선물세트", price: "29,900", img: PH("Tuna+Set"), note: "실용적인 한국 선물" },
          { id: 615, name: "락앤락 텀블러 세트", price: "19,900", img: PH("Tumbler"), note: "부모님 산책 필수템" },
          { id: 616, name: "한삼인 홍삼 스틱 30포", price: "39,900", img: PH("Stick"), note: "매일 하나씩 효도" },
        ],
      },
    ],
  },

  // ─── 시즌별 ───
  {
    slug: "seasonal",
    name: "시즌",
    collections: [
      {
        slug: "summer-homecoming",
        title: "여름 귀국 필수 쇼핑리스트",
        subtitle: "여름 한국은 쇼핑 천국. 세일 시즌에 맞춰 귀국하라",
        tag: "시즌",
        products: [
          { id: 701, name: "이니스프리 수퍼 볼캐닉 클레이 마스크", price: "11,000", img: PH("Clay+Mask"), note: "여름 모공 케어" },
          { id: 702, name: "빙그레 메로나 18개입", price: "8,900", img: PH("Melona"), note: "여름 귀국의 이유" },
          { id: 703, name: "쿨링 넥밴드", price: "9,900", img: PH("Cooling"), note: "한국 여름 생존템" },
          { id: 704, name: "에뛰드 순정 선크림", price: "8,900", img: PH("Etude+Sun"), note: "올영 여름 세일 필수" },
          { id: 705, name: "유니클로 에어리즘 3팩", price: "19,900", img: PH("Airism"), note: "한국이 캐나다보다 쌈" },
          { id: 706, name: "모기 퇴치 패치 60매", price: "5,900", img: PH("Mosquito"), note: "캐나다엔 이런 게 없음" },
        ],
      },
      {
        slug: "holiday-groceries",
        title: "설날/추석 귀국 장보기",
        subtitle: "명절에 맞춰 귀국하면 챙겨야 할 것들",
        tag: "시즌",
        products: [
          { id: 711, name: "CJ 고메 소불고기", price: "12,900", img: PH("Bulgogi"), note: "캐나다에서 한식 해먹기" },
          { id: 712, name: "풀무원 생면식감 라면", price: "4,980", img: PH("Pulmuone"), note: "프리미엄 라면의 세계" },
          { id: 713, name: "한과 모듬 선물세트", price: "29,900", img: PH("Hangwa+Set"), note: "명절 필수 선물" },
          { id: 714, name: "양반 갈비탕 460g x 4", price: "15,900", img: PH("Galbitang"), note: "해외에서 끓여먹는 한식" },
          { id: 715, name: "종가집 김치 1kg", price: "8,900", img: PH("Kimchi"), note: "진짜 김치가 그리울 때" },
          { id: 716, name: "미쟝센 퍼펙트 세럼", price: "8,900", img: PH("Mise+en"), note: "한국 헤어케어의 자존심" },
        ],
      },
    ],
  },
];
