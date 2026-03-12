#!/usr/bin/env node
/**
 * 인마이팡 로고 생성기 (Jiwon-studio 방식)
 * Gemini API로 쇼핑바구니 로고 생성
 *
 * 사용법: node generate-logo.cjs [icon|og|all]
 */

const { GoogleGenAI } = require("@google/genai");
const fs = require("fs");
const path = require("path");

const API_KEY = process.env.GEMINI_API_KEY || "AIzaSyDVCDJTlRLGnLpQ0mdrPv8IVPhZGE5jdK4";

const ai = new GoogleGenAI({ apiKey: API_KEY });

const ASSETS = {
  icon: {
    name: "앱 아이콘 / 파비콘",
    output: "public/logo.png",
    prompt: `Create a cute minimal shopping basket logo icon.

Style:
- Flat design, clean thick rounded outlines
- Main color: bright mustard yellow (#EFAD1E) for the basket
- Accent: soft mint emerald (#A8D5C2) for a small heart or star peeking out from inside the basket
- The basket has a rounded, friendly, playful shape
- White background, centered composition
- No text, no letters, just the icon
- Square 1:1 ratio, app icon style
- Simple, modern, kawaii-inspired but not childish
- Think: a cozy shopping basket with Korean goodies inside`,
  },
  og: {
    name: "OG 이미지 (1200x630)",
    output: "public/og-image.png",
    prompt: `Create a clean minimal banner image for a Korean shopping curation website called "인마이팡".

Style:
- White background with subtle mustard yellow (#EFAD1E) and mint emerald (#A8D5C2) grid pattern
- A cute small shopping basket icon (mustard yellow) on the left side
- Clean, modern magazine aesthetic
- Text "인마이팡" in bold black Korean text in the center
- Subtitle "IN MY PANG" in small English below
- Landscape 1200x630 ratio
- Minimal, editorial, sophisticated`,
  },
};

async function generateAsset(key) {
  const asset = ASSETS[key];
  if (!asset) {
    console.error(`❌ 알 수 없는 에셋: ${key}`);
    console.log(`사용 가능: ${Object.keys(ASSETS).join(", ")}`);
    return;
  }

  console.log(`\n🎨 ${asset.name} 생성 중...`);

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-image",
      contents: [{ role: "user", parts: [{ text: asset.prompt }] }],
      config: {
        responseModalities: ["image", "text"],
      },
    });

    // 이미지 파트 찾기
    const imagePart = response.candidates?.[0]?.content?.parts?.find(
      (p) => p.inlineData?.mimeType?.startsWith("image/")
    );

    if (!imagePart) {
      console.error("❌ 이미지 생성 실패 — 텍스트 응답만 받음");
      const textPart = response.candidates?.[0]?.content?.parts?.find((p) => p.text);
      if (textPart) console.log("응답:", textPart.text);
      return;
    }

    const outputPath = path.resolve(__dirname, asset.output);
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const buffer = Buffer.from(imagePart.inlineData.data, "base64");
    fs.writeFileSync(outputPath, buffer);

    console.log(`✅ 저장: ${outputPath}`);
    console.log(`   크기: ${(buffer.length / 1024).toFixed(1)}KB`);
  } catch (err) {
    console.error(`❌ 생성 실패:`, err.message);
  }
}

async function main() {
  const target = process.argv[2] || "icon";

  if (target === "all") {
    for (const key of Object.keys(ASSETS)) {
      await generateAsset(key);
    }
  } else {
    await generateAsset(target);
  }
}

main();
