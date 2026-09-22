import React from "react";
import type { Metadata } from "next";
import HomePage from "@/app/page";

export const metadata: Metadata = {
  title: "फ्री फायर नेम & स्टाइलिश नाम जेनरेटर 🏆 | Nicknamegenerator.io",
  description:
    "फ्री फायर नेम, स्टाइलिश नाम और निकनेम जेनरेटर। 2 करोड़ से ज्यादा स्टाइलिश गेमर नाम, पंख ꧁꧂, मुकुट 亗 और दुर्लभ प्रतीकों के साथ। 1-क्लिक में कॉपी करें।",
  keywords: [
    "फ्री फायर नेम",
    "स्टाइलिश नाम",
    "निकनेम",
    "नाम",
    "निकफाइंडर",
    "उपनाम जेनरेटर",
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
    title: "फ्री फायर नेम & स्टाइलिश नाम जेनरेटर 🏆 | Nicknamegenerator.io",
    description:
      "गेमिंग और सोशल मीडिया के लिए बेहतरीन फ्री फायर नेम, स्टाइलिश नाम और दुर्लभ फ़ॉन्ट बनाएं।",
    url: "https://www.nicknamegenerator.io/hi",
    siteName: "Nicknamegenerator.io",
    locale: "hi_IN",
    type: "website",
  },
};

export default function HindiPage() {
  return <HomePage initialLang="HI" />;
}
