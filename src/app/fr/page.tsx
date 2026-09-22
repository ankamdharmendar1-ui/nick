import React from "react";
import type { Metadata } from "next";
import HomePage from "@/app/page";

export const metadata: Metadata = {
  title: "Générateur de Pseudo Stylé & Noms Gamer 🏆 | Nicknamegenerator.io",
  description:
    "Générateur de pseudo stylé gratuit. Plus de 20 millions d'idées de pseudos et surnoms pour Fortnite, Free Fire, Discord, Roblox. Écritures stylées, symboles rares et copie en 1 clic.",
  keywords: [
    "pseudo stylé",
    "pseudo fortnite",
    "pseudo tryhard",
    "nom stylé",
    "surnoms pour",
    "générateur de pseudo",
    "écriture stylée",
    "symboles stylés",
    "pseudo gamer",
    "pseudo free fire",
    "pseudo discord",
  ],
  alternates: {
    canonical: "https://www.nicknamegenerator.io/fr",
    languages: {
      en: "https://www.nicknamegenerator.io",
      fr: "https://www.nicknamegenerator.io/fr",
    },
  },
  openGraph: {
    title: "Générateur de Pseudo Stylé & Noms Gamer 🏆 | Nicknamegenerator.io",
    description:
      "Le générateur de pseudo stylé n°1 en France. Pseudos tryhard et stylés pour Fortnite, Free Fire, Discord et réseaux sociaux.",
    url: "https://www.nicknamegenerator.io/fr",
    siteName: "Nicknamegenerator.io",
    locale: "fr_FR",
    type: "website",
  },
};

export default function FrenchPage() {
  return <HomePage initialLang="FR" />;
}
