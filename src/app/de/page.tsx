import React from "react";
import type { Metadata } from "next";
import HomePage from "@/app/page";

export const metadata: Metadata = {
  title: "Spitznamen & Gamer Namen Generator mit Symbolen 🏆 | Nicknamegenerator.io",
  description:
    "Kostenloser Generator für Spitznamen, Gamer Namen und Fortnite Namen. Über 20 Millionen Zocker Namen mit Flügeln ꧁꧂, Kronen 亗 und coolen Schriftarten. 1-Klick-Kopieren.",
  keywords: [
    "spitznamen für",
    "spitznamen",
    "gamer namen",
    "fortnite namen",
    "spitznamen generator",
    "nickname",
    "coole gamer namen",
    "discord namen",
    "zocker namen",
    "coole schriftarten",
  ],
  alternates: {
    canonical: "https://www.nicknamegenerator.io/de",
    languages: {
      en: "https://www.nicknamegenerator.io",
      de: "https://www.nicknamegenerator.io/de",
    },
  },
  openGraph: {
    title: "Spitznamen & Gamer Namen Generator mit Symbolen 🏆 | Nicknamegenerator.io",
    description:
      "Finde die besten Spitznamen und Gamer Namen für Fortnite, PUBG und Discord mit Spezialzeichen, Flügeln und Kronen. Schnelles 1-Klick-Kopieren.",
    url: "https://www.nicknamegenerator.io/de",
    siteName: "Nicknamegenerator.io",
    locale: "de_DE",
    type: "website",
  },
};

export default function GermanPage() {
  return <HomePage initialLang="DE" />;
}
