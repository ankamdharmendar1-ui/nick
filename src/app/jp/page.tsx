import React from "react";
import type { Metadata } from "next";
import HomePage from "@/app/page";

export const metadata: Metadata = {
  title: "カスタムニックネーム＆特殊文字フォント生成器 🏆 | Nicknamegenerator.io",
  description:
    "無料のオンラインニックネーム＆特殊文字生成ツール。荒野行動、PUBG、Apex、Discord向けの2000万以上の名前アイデア。特殊文字・記号を1クリックでコピー。",
  keywords: [
    "ニックネーム生成",
    "特殊文字 フォント",
    "荒野行動 名前",
    "かわいい文字 記号",
    "ゲーマータグ",
    "エモい 名前",
  ],
  alternates: {
    canonical: "https://www.nicknamegenerator.io/jp",
    languages: {
      en: "https://www.nicknamegenerator.io",
      ja: "https://www.nicknamegenerator.io/jp",
    },
  },
  openGraph: {
    title: "カスタムニックネーム＆特殊文字フォント生成器 🏆 | Nicknamegenerator.io",
    description:
      "ゲーム用の洗練されたニックネーム、特殊文字フォント、レア記号を自由に生成。",
    url: "https://www.nicknamegenerator.io/jp",
    siteName: "Nicknamegenerator.io",
    locale: "ja_JP",
    type: "website",
  },
};

export default function JapanesePage() {
  return <HomePage initialLang="JP" />;
}
