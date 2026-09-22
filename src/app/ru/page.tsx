import React from "react";
import type { Metadata } from "next";
import HomePage from "@/app/page";

export const metadata: Metadata = {
  title: "Символы для Ников & Ники для Пабга 🏆 | Nicknamegenerator.io",
  description:
    "Генератор символов для ников, красивых ников для PUBG, Free Fire, Telegram и Discord. Ники для пабга, стильные ники и ник в тг с крыльями ꧁꧂ и коронами 亗. Копирование в 1 клик.",
  keywords: [
    "символы для ников",
    "ники для пабга",
    "ники",
    "ник",
    "ник в тг",
    "никнеймы для",
    "генератор ников",
    "красивые ники",
    "ники для фри фаер",
    "символы для ника",
  ],
  alternates: {
    canonical: "https://www.nicknamegenerator.io/ru",
    languages: {
      en: "https://www.nicknamegenerator.io",
      ru: "https://www.nicknamegenerator.io/ru",
    },
  },
  openGraph: {
    title: "Символы для Ников & Ники для Пабга 🏆 | Nicknamegenerator.io",
    description:
      "Лучший генератор символов для ников, ников для пабга и красивых ников в тг. Стильные ники с крыльями ꧁꧂, коронами 亗 и японскими символами. Копируй в 1 клик!",
    url: "https://www.nicknamegenerator.io/ru",
    siteName: "Nicknamegenerator.io",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RussianPage() {
  return <HomePage initialLang="RU" />;
}
