import React from "react";
import type { Metadata } from "next";
import HomePage from "@/app/page";

export const metadata: Metadata = {
  title: "Nombres para Free Fire & Apodos Chidos con Símbolos 🏆 | Nicknamegenerator.io",
  description:
    "Generador de nombres para Free Fire, apodos chidos y símbolos para Free Fire gratis. Más de 20 millones de apodos con letras bonitas, alas y coronas. Copia en 1 clic.",
  keywords: [
    "nombres para free fire",
    "nombre para free fire",
    "apodos",
    "simbolos para free fire",
    "nombres chidos para free fire",
    "apodos para free fire",
    "generador de apodos",
    "nicks gamer",
    "letras bonitas",
    "nombres para pubg",
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
    title: "Nombres para Free Fire & Apodos Chidos con Símbolos 🏆 | Nicknamegenerator.io",
    description:
      "Crea nombres para Free Fire, apodos chidos y símbolos para Free Fire. El generador de apodos número uno en español con letras bonitas, alas ꧁꧂ y coronas 亗.",
    url: "https://www.nicknamegenerator.io/es",
    siteName: "Nicknamegenerator.io",
    locale: "es_ES",
    type: "website",
  },
};

export default function SpanishPage() {
  return <HomePage initialLang="ES" />;
}
