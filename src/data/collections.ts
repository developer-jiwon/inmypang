export type Product = {
  id: number;
  name: string;
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

const PH = (text: string) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="400" height="400" fill="#F4F3F1"/><text x="200" y="210" text-anchor="middle" font-family="sans-serif" font-size="24" font-weight="400" fill="#999">${text}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

export const categories: Category[] = [
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
          { id: 1, name: "고려은단 비타민C 1000", img: PH("비타민C"), note: "" },
          { id: 2, name: "문어괄사", img: PH("괄사"), note: "" },
          { id: 3, name: "라곰 셀러스 마일드 모이스처 클렌저", img: PH("라곰"), note: "" },
          { id: 4, name: "파파레시피 효소 세안 파우더", img: PH("파파레시피"), note: "" },
          { id: 5, name: "달바 워터풀 에센스 선크림", img: PH("달바"), note: "" },
        ],
      },
    ],
  },
];
