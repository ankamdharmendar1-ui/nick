import React from "react";
import type { Metadata } from "next";
import HomePage from "@/app/page";

export const metadata: Metadata = {
  title: "스타일리시 게임 닉네임 & 특수문자 생성기 🏆 | Nicknamegenerator.io",
  description:
    "무료 게임 닉네임 및 특수문자 폰트 생성기. 배틀그라운드, 발로란트, 롤, 로블록스, 디스코드용 2,000만 개 이상의 닉네임 아이디어. 1클릭 복사.",
  keywords: [
    "닉네임 생성기",
    "특수문자 닉네임",
    "배그 닉네임",
    "게임 닉네임 추천",
    "예쁜 글씨체",
    "감성 닉네임",
  ],
  alternates: {
    canonical: "https://www.nicknamegenerator.io/kr",
    languages: {
      en: "https://www.nicknamegenerator.io",
      ko: "https://www.nicknamegenerator.io/kr",
    },
  },
  openGraph: {
    title: "스타일리시 게임 닉네임 & 특수문자 생성기 🏆 | Nicknamegenerator.io",
    description:
      "나만의 개성 넘치는 게이머 태그와 특수문자 닉네임을 디자인하세요.",
    url: "https://www.nicknamegenerator.io/kr",
    siteName: "Nicknamegenerator.io",
    locale: "ko_KR",
    type: "website",
  },
};

export default function KoreanPage() {
  return <HomePage initialLang="KR" />;
}
