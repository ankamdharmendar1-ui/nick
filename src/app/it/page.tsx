import React from "react";
import type { Metadata } from "next";
import HomePage from "@/app/page";

export const metadata: Metadata = {
  title: "Soprannomi & Nomi per Fortnite e Brawl Stars 🏆 | Nicknamegenerator.io",
  description:
    "Generatore di soprannomi, nomi per Fortnite, nomi Brawl Stars e nomi per Fortnite gratis. Oltre 20 milioni di nickname con simboli speciali, ali e corone. Copia in 1 clic.",
  keywords: [
    "soprannomi",
    "nomi brawl stars",
    "nomi fortnite",
    "nomi per fortnite",
    "soprannomi per",
    "generatore di nickname",
    "nomi gamer",
    "caratteri speciali",
    "nickname per giochi",
    "simboli nickname",
  ],
  alternates: {
    canonical: "https://www.nicknamegenerator.io/it",
    languages: {
      en: "https://www.nicknamegenerator.io",
      it: "https://www.nicknamegenerator.io/it",
    },
  },
  openGraph: {
    title: "Soprannomi & Nomi per Fortnite e Brawl Stars 🏆 | Nicknamegenerator.io",
    description:
      "Crea soprannomi creativi, nomi per Fortnite e nomi Brawl Stars con simboli speciali ꧁꧂, ali e corone 亗. Il generatore di nickname italiano numero uno.",
    url: "https://www.nicknamegenerator.io/it",
    siteName: "Nicknamegenerator.io",
    locale: "it_IT",
    type: "website",
  },
};

export default function ItalianPage() {
  return <HomePage initialLang="IT" />;
}
