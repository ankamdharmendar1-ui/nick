import React from "react";
import type { Metadata } from "next";
import HomePage from "@/app/page";

export const metadata: Metadata = {
  title: "Gerador de Nicks Personalizados & Apelidos para Jogos 🏆 | Nicknamegenerator.io",
  description:
    "Gerador gratuito de nicks personalizados e apelidos para jogos. Mais de 20 milhões de ideias de nicks para Free Fire, PUBG, Valorant, Roblox, Discord. Letras e símbolos em 1 clique.",
  keywords: [
    "nicks para free fire",
    "gerador de nicks",
    "letras personalizadas",
    "simbolos para nicks",
    "apelidos para jogos",
    "nomes para pubg",
    "letras diferentes",
  ],
  alternates: {
    canonical: "https://www.nicknamegenerator.io/br",
    languages: {
      en: "https://www.nicknamegenerator.io",
      pt: "https://www.nicknamegenerator.io/br",
    },
  },
  openGraph: {
    title: "Gerador de Nicks Personalizados & Apelidos para Jogos 🏆 | Nicknamegenerator.io",
    description:
      "Crie nicks marcantes para jogos, fontes diferenciadas e símbolos raros. Destaque-se no Free Fire e PUBG Mobile.",
    url: "https://www.nicknamegenerator.io/br",
    siteName: "Nicknamegenerator.io",
    locale: "pt_BR",
    type: "website",
  },
};

export default function BrazilianPage() {
  return <HomePage initialLang="BR" />;
}
