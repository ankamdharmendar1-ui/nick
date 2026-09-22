import React from "react";
import type { Metadata } from "next";
import HomePage from "@/app/page";

export const metadata: Metadata = {
  title: "Генератор Стильных Ников и Красивых Имен для Игр 🏆 | Nicknamegenerator.io",
  description:
    "Бесплатный генератор ников и красивых шрифтов. Более 20 млн никнеймов для Free Fire, PUBG, CS2, Discord, Telegram. Редкие символы, крылья, короны и копирование в 1 клик.",
  keywords: [
    "никнеймы для",
    "генератор ников",
    "красивые ники",
    "ники для фри фаер",
    "ники для пабг",
    "символы для ника",
    "красивый шрифт онлайн",
  ],
  alternates: {
    canonical: "https://www.nicknamegenerator.io/ru",
    languages: {
      en: "https://www.nicknamegenerator.io",
      ru: "https://www.nicknamegenerator.io/ru",
    },
  },
  openGraph: {
    title: "Генератор Стильных Ников и Красивых Имен для Игр 🏆 | Nicknamegenerator.io",
    description:
      "Лучший сервис создания красивых никнеймов с редкими знаками, коронами и крыльями. Копирование в один клик.",
    url: "https://www.nicknamegenerator.io/ru",
    siteName: "Nicknamegenerator.io",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RussianPage() {
  return <HomePage initialLang="RU" />;
}
