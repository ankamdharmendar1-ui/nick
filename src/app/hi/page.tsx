import React from "react";
import type { Metadata } from "next";
import HomePage from "@/app/page";

export const metadata: Metadata = {
  title: "कस्टम उपनाम और स्टाइलिश गेमर टैग जेनरेटर 🏆 | Nicknamegenerator.io",
  description:
    "मुफ़्त ऑनलाइन उपनाम और गेमर टैग जेनरेटर। Free Fire, BGMI, PUBG, Discord के लिए 2 करोड़ से अधिक स्टाइलिश नाम और दुर्लभ प्रतीक। 1-क्लिक कॉपी।",
  keywords: [
    "उपनाम जेनरेटर",
    "स्टाइलिश नाम",
    "फ्री फायर नाम",
    "बीजीएमआई गेमर टैग",
    "नाम प्रतीक",
    "कूल टेक्स्ट स्टाइल",
  ],
  alternates: {
    canonical: "https://www.nicknamegenerator.io/hi",
    languages: {
      en: "https://www.nicknamegenerator.io",
      hi: "https://www.nicknamegenerator.io/hi",
    },
  },
  openGraph: {
    title: "कस्टम उपनाम और स्टाइलिश गेमर टैग जेनरेटर 🏆 | Nicknamegenerator.io",
    description:
      "गेमिंग और सोशल मीडिया के लिए बेहतरीन स्टाइलिश उपनाम और दुर्लभ फ़ॉन्ट बनाएं।",
    url: "https://www.nicknamegenerator.io/hi",
    siteName: "Nicknamegenerator.io",
    locale: "hi_IN",
    type: "website",
  },
};

export default function HindiPage() {
  return <HomePage initialLang="HI" />;
}
