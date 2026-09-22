import React from "react";
import type { Metadata } from "next";
import HomePage from "@/app/page";

export const metadata: Metadata = {
  title: "Şekilli Takma Ad & Havalı Oyuncu Niki Oluşturucu 🏆 | Nicknamegenerator.io",
  description:
    "Ücretsiz şekilli nick ve takma ad oluşturucu. Free Fire, PUBG Mobile, Valorant, Discord için 20 milyondan fazla isim fikri. Havalı semboller ve 1 tıkla kopyalama.",
  keywords: [
    "şekilli nick",
    "şekilli takma ad",
    "pubg nickleri",
    "free fire isimleri",
    "şekilli harfler",
    "oyuncu adları",
    "şekilli yazı yazma",
  ],
  alternates: {
    canonical: "https://www.nicknamegenerator.io/tr",
    languages: {
      en: "https://www.nicknamegenerator.io",
      tr: "https://www.nicknamegenerator.io/tr",
    },
  },
  openGraph: {
    title: "Şekilli Takma Ad & Havalı Oyuncu Niki Oluşturucu 🏆 | Nicknamegenerator.io",
    description:
      "Akılda kalıcı oyuncu nikleri, estetik yazı tipleri ve nadir semboller tasarlayın.",
    url: "https://www.nicknamegenerator.io/tr",
    siteName: "Nicknamegenerator.io",
    locale: "tr_TR",
    type: "website",
  },
};

export default function TurkishPage() {
  return <HomePage initialLang="TR" />;
}
