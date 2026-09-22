import React from "react";
import type { Metadata } from "next";
import HomePage from "@/app/page";

export const metadata: Metadata = {
  title: "PUBG İsimleri & Nulls Brawl Şekilli Nick Yazma 🏆 | Nicknamegenerator.io",
  description:
    "En havalı PUBG isimleri, Nulls Brawl şekilli nick ve Brawl Stars isim önerileri oluşturucu. Kanatlar ꧁꧂, taç 亗 ve özel sembollerle şekilli nickler. 1 tıkla kopyala.",
  keywords: [
    "pubg isimleri",
    "nulls brawl şekilli nick",
    "pubg havalı isimler",
    "brawl stars isim önerileri",
    "nulls brawl isimleri",
    "şekilli nick",
    "şekilli takma ad",
    "free fire isimleri",
    "şekilli harfler",
  ],
  alternates: {
    canonical: "https://www.nicknamegenerator.io/tr",
    languages: {
      en: "https://www.nicknamegenerator.io",
      tr: "https://www.nicknamegenerator.io/tr",
    },
  },
  openGraph: {
    title: "PUBG İsimleri & Nulls Brawl Şekilli Nick Yazma 🏆 | Nicknamegenerator.io",
    description:
      "Havalı PUBG isimleri, Nulls Brawl ve Brawl Stars için estetik yazı tipleri ve nadir semboller tasarlayın.",
    url: "https://www.nicknamegenerator.io/tr",
    siteName: "Nicknamegenerator.io",
    locale: "tr_TR",
    type: "website",
  },
};

export default function TurkishPage() {
  return <HomePage initialLang="TR" />;
}
