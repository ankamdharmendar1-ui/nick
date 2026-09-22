import React from "react";
import type { Metadata } from "next";
import HomePage from "@/app/page";

export const metadata: Metadata = {
  title: "Spitznamen- & Gaming-Name Generator mit Schriftarten 🏆 | Nicknamegenerator.io",
  description:
    "Kostenloser Spitznamen- und Gamer-Tag Generator. Über 20 Millionen Ideen für Free Fire, PUBG, Discord, Roblox. Stilvolle Textsymbole, coole Schriftarten und 1-Klick-Kopieren.",
  keywords: [
    "spitznamen für",
    "spitznamen generator",
    "gaming namen",
    "coole schriftarten",
    "discord namen",
    "namensideen",
    "zocker namen",
  ],
  alternates: {
    canonical: "https://www.nicknamegenerator.io/de",
    languages: {
      en: "https://www.nicknamegenerator.io",
      de: "https://www.nicknamegenerator.io/de",
    },
  },
  openGraph: {
    title: "Spitznamen- & Gaming-Name Generator mit Schriftarten 🏆 | Nicknamegenerator.io",
    description:
      "Finde deinen perfekten Spitznamen oder Gamer-Tag. Über 20 Millionen Schriftstile und Symbole mit 1-Klick-Kopieren.",
    url: "https://www.nicknamegenerator.io/de",
    siteName: "Nicknamegenerator.io",
    locale: "de_DE",
    type: "website",
  },
};

export default function GermanPage() {
  return <HomePage initialLang="DE" />;
}
