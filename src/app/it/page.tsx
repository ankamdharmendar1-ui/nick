import React from "react";
import type { Metadata } from "next";
import HomePage from "@/app/page";

export const metadata: Metadata = {
  title: "Generatore di Nickname Gamer & Soprannomi Speciali 🏆 | Nicknamegenerator.io",
  description:
    "Generatore di nickname e soprannomi gamer gratuito. Oltre 20 milioni di idee di soprannomi per Free Fire, PUBG, Discord, Roblox. Caratteri speciali, simboli rari e copia in 1 clic.",
  keywords: [
    "soprannomi per",
    "generatore di nickname",
    "nomi gamer",
    "caratteri speciali",
    "nomi per discord",
    "simboli nickname",
    "nickname per giochi",
  ],
  alternates: {
    canonical: "https://www.nicknamegenerator.io/it",
    languages: {
      en: "https://www.nicknamegenerator.io",
      it: "https://www.nicknamegenerator.io/it",
    },
  },
  openGraph: {
    title: "Generatore di Nickname Gamer & Soprannomi Speciali 🏆 | Nicknamegenerator.io",
    description:
      "Crea nickname originali, soprannomi estetici e caratteri speciali per i tuoi profili di gioco.",
    url: "https://www.nicknamegenerator.io/it",
    siteName: "Nicknamegenerator.io",
    locale: "it_IT",
    type: "website",
  },
};

export default function ItalianPage() {
  return <HomePage initialLang="IT" />;
}
