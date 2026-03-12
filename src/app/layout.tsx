import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  // TODO: 배포 후 실제 도메인으로 교체
  metadataBase: new URL("https://your-domain.com"),
  title: "인마이팡 | IN MY PANG",
  description: "해외살이 30대의 솔직한 한국 쇼핑 큐레이션",
  openGraph: {
    title: "인마이팡 | IN MY PANG",
    description: "해외살이 30대의 솔직한 한국 쇼핑 큐레이션",
    locale: "ko_KR",
    type: "website",
    siteName: "인마이팡",
    // TODO: Jiwon-studio로 OG 이미지(1200x630) 생성 후 경로 교체
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "인마이팡 | IN MY PANG",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "인마이팡 | IN MY PANG",
    description: "해외살이 30대의 솔직한 한국 쇼핑 큐레이션",
    images: ["/og-image.png"],
  },
  // TODO: Google Search Console 인증 후 아래 주석 해제 및 코드 교체
  // verification: {
  //   google: "VERIFICATION_CODE",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4588308927468413"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${jakarta.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
