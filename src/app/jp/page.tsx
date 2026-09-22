import React from "react";
import type { Metadata } from "next";
import HomePage from "@/app/page";

export const metadata: Metadata = {
  title: "かっこいいニックネーム生成＆特殊文字フォント 🏆 | Nicknamegenerator.io",
  description:
    "無料のかっこいいニックネーム生成＆特殊文字フォントツール。荒野行動、PUBG、フォートナイト、Apex、Discord向けの2000万以上の名前アイデア。羽 ꧁꧂ や王冠 亗 を1クリックでコピー。",
  keywords: [
    "ニックネーム生成",
    "フォートナイト 名前 かっこいい",
    "荒野行動 名前",
    "特殊文字 フォント",
    "かっこいい名前",
    "Apex 名前",
    "かわいい文字 記号",
    "ゲーマータグ",
  ],
  alternates: {
    canonical: "https://www.nicknamegenerator.io/jp",
    languages: {
      en: "https://www.nicknamegenerator.io",
      ja: "https://www.nicknamegenerator.io/jp",
    },
  },
  openGraph: {
    title: "かっこいいニックネーム生成＆特殊文字フォント 🏆 | Nicknamegenerator.io",
    description:
      "ゲーム用の洗練されたかっこいいニックネーム、特殊文字フォント、レア記号を自由に生成。",
    url: "https://www.nicknamegenerator.io/jp",
    siteName: "Nicknamegenerator.io",
    locale: "ja_JP",
    type: "website",
  },
};

export default function JapanesePage() {
  return <HomePage initialLang="JP" />;
}
