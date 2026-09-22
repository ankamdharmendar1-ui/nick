import React from "react";
import type { Metadata } from "next";
import HomePage from "@/app/page";

export const metadata: Metadata = {
  title: "Generador de Apodos y Nicks Gamer con Letras y Símbolos 🏆 | Nicknamegenerator.io",
  description:
    "Generador de apodos y nicks gamer gratis. Más de 20 millones de apodos y nombres para Free Fire, PUBG, Discord, Roblox. Letras personalizadas, símbolos raros y copia en 1 clic.",
  keywords: [
    "apodos para",
    "generador de apodos",
    "nicks gamer",
    "apodos para free fire",
    "letras bonitas",
    "nombres para pubg",
    "simbolos para apodos",
    "creador de nicks",
  ],
  alternates: {
    canonical: "https://www.nicknamegenerator.io/es",
    languages: {
      en: "https://www.nicknamegenerator.io",
      es: "https://www.nicknamegenerator.io/es",
    },
  },
  openGraph: {
    title: "Generador de Apodos y Nicks Gamer con Letras y Símbolos 🏆 | Nicknamegenerator.io",
    description:
      "El generador de apodos y nicks gamer número uno en español. Nombres con alas, coronas y letras bonitas con copia en 1 clic.",
    url: "https://www.nicknamegenerator.io/es",
    siteName: "Nicknamegenerator.io",
    locale: "es_ES",
    type: "website",
  },
};

export default function SpanishPage() {
  return <HomePage initialLang="ES" />;
}
