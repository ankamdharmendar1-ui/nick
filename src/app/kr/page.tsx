import React from "react";
import type { Metadata } from "next";
import HomePage from "@/app/page";

export const metadata: Metadata = {
  title: "게임 닉네임 추천 & 특수문자 닉네임 생성기 🏆 | Nicknamegenerator.io",
  description:
    "배틀그라운드(배그), 발로란트, 롤, 로블록스용 멋진 게임 닉네임 추천 및 특수문자 닉네임 생성기. 날개 ꧁꧂, 왕관 亗, 예쁜 폰트를 1클릭으로 복사하세요.",
  keywords: [
    "게임 닉네임 추천",
    "특수문자 닉네임",
    "배그 닉네임",
    "롤 닉네임",
    "발로란트 닉네임",
    "닉네임 생성기",
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
    title: "게임 닉네임 추천 & 특수문자 닉네임 생성기 🏆 | Nicknamegenerator.io",
    description:
      "나만의 개성 넘치는 게임 닉네임 추천과 특수문자 닉네임을 디자인하세요. 1클릭 복사.",
    url: "https://www.nicknamegenerator.io/kr",
    siteName: "Nicknamegenerator.io",
    locale: "ko_KR",
    type: "website",
  },
};

export default function KoreanPage() {
  return <HomePage initialLang="KR" />;
}
