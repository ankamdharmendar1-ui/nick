import React from "react";
import type { Metadata } from "next";
import HomePage from "@/app/page";

export const metadata: Metadata = {
  title: "Generator Nama Panggilan Keren & Nickname Game Estetik 🏆 | Nicknamegenerator.io",
  description:
    "Generator nama panggilan keren dan nickname game gratis. Lebih dari 20 juta ide nama untuk Free Fire, PUBG Mobile, Mobile Legends, Roblox. Simbol estetik dan salin 1 klik.",
  keywords: [
    "nama panggilan untuk",
    "generator nama panggilan",
    "nama ff keren",
    "nama pubg keren",
    "simbol tulisan keren",
    "nama ml estetik",
    "font tulisan keren",
  ],
  alternates: {
    canonical: "https://www.nicknamegenerator.io/id",
    languages: {
      en: "https://www.nicknamegenerator.io",
      id: "https://www.nicknamegenerator.io/id",
    },
  },
  openGraph: {
    title: "Generator Nama Panggilan Keren & Nickname Game Estetik 🏆 | Nicknamegenerator.io",
    description:
      "Temukan ribuan nama game keren dan simbol estetik untuk Free Fire, PUBG, dan Mobile Legends.",
    url: "https://www.nicknamegenerator.io/id",
    siteName: "Nicknamegenerator.io",
    locale: "id_ID",
    type: "website",
  },
};

export default function IndonesianPage() {
  return <HomePage initialLang="ID" />;
}
