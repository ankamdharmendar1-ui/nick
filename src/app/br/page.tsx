import React from "react";
import type { Metadata } from "next";
import HomePage from "@/app/page";

export const metadata: Metadata = {
  title: "Apelidos & Nomes para Free Fire Masculino Top 🏆 | Nicknamegenerator.io",
  description:
    "Gerador de apelidos e nomes para Free Fire masculino top, nomes para colocar no Free Fire e nicks personalizados. Letras modificadas, asas ꧁꧂, coroas 亗 e espaço invisível. Copie em 1 clique.",
  keywords: [
    "apelidos para",
    "apelidos para free fire",
    "nomes para free fire masculino top",
    "nomes para colocar no free fire",
    "nome para colocar no free fire",
    "nomes para botar no free fire",
    "nicks para free fire",
    "gerador de nicks",
    "letras personalizadas",
    "simbolos para nicks",
    "apelidos para jogos",
  ],
  alternates: {
    canonical: "https://www.nicknamegenerator.io/br",
    languages: {
      en: "https://www.nicknamegenerator.io",
      pt: "https://www.nicknamegenerator.io/br",
    },
  },
  openGraph: {
    title: "Apelidos & Nomes para Free Fire Masculino Top 🏆 | Nicknamegenerator.io",
    description:
      "Crie apelidos para jogos e nomes para colocar no Free Fire com asas, coroas e letras diferentes. Mais de 20 milhões de ideias de nicks para jogos.",
    url: "https://www.nicknamegenerator.io/br",
    siteName: "Nicknamegenerator.io",
    locale: "pt_BR",
    type: "website",
  },
};

export default function BrazilianPage() {
  return <HomePage initialLang="BR" />;
}
