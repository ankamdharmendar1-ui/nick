import React from "react";
import type { Metadata } from "next";
import HomePage from "@/app/page";

export const metadata: Metadata = {
  title: "Nama FF Keren & Nickname FF dengan Simbol Payung & Sayap 🏆 | Nicknamegenerator.io",
  description:
    "Generator nama FF keren, nickname FF, dan nama FF simbol gratis. Lebih dari 20 juta ide nama Free Fire dengan sayap ꧁꧂, mahkota 亗, payung ☂️. Salin cepat 1 klik.",
  keywords: [
    "nama ff keren",
    "nickname ff",
    "nama ff",
    "raja buaya",
    "nama ff payung",
    "simbol nama ff",
    "generator nama ff",
    "nama pubg keren",
    "nama ml estetik",
  ],
  alternates: {
    canonical: "https://www.nicknamegenerator.io/id",
    languages: {
      en: "https://www.nicknamegenerator.io",
      id: "https://www.nicknamegenerator.io/id",
    },
  },
  openGraph: {
    title: "Nama FF Keren & Nickname FF dengan Simbol Payung & Sayap 🏆 | Nicknamegenerator.io",
    description:
      "Temukan ribuan nama FF keren, nickname FF raja buaya, dan simbol estetik untuk Free Fire dan PUBG Mobile.",
    url: "https://www.nicknamegenerator.io/id",
    siteName: "Nicknamegenerator.io",
    locale: "id_ID",
    type: "website",
  },
};

export default function IndonesianPage() {
  return <HomePage initialLang="ID" />;
}
