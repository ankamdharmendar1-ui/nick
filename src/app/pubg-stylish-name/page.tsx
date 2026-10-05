import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import PubgNamesGrid from "@/components/PubgNamesGrid";
import { NickFooter } from "@/components/NickFooter";

export const metadata: Metadata = {
  title: "Best Name for PUBG: 100+ Cool PUBG Names, Clan Tags and Generator",
  description:
    "Find the best name for PUBG Mobile and BGMI. 100+ cool PUBG names, clan tags, conqueror symbols like 亗, and live name generator with 1-click copy.",
  keywords: [
    "best name for pubg",
    "pubg names",
    "best names for pubg",
    "best clan names for pubg",
    "name for pubg",
    "cool names for pubg mobile",
    "best pubg player names",
    "best clan name for pubg",
    "best gaming names for pubg",
    "best names for pubg mobile",
    "pubg stylish name",
    "bgmi stylish name",
  ],
  alternates: { canonical: "https://www.nicknamegenerator.io/pubg-stylish-name" },
  openGraph: {
    title: "Best Name for PUBG: 100+ Cool PUBG Names, Clan Tags and Generator",
    description:
      "Find the best name for PUBG Mobile and BGMI. 100+ cool PUBG names, clan tags, conqueror symbols like 亗, and live name generator with 1-click copy.",
    url: "https://www.nicknamegenerator.io/pubg-stylish-name",
    siteName: "Nicknamegenerator.io",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Name for PUBG: 100+ Cool PUBG Names, Clan Tags and Generator",
    description:
      "Find the best name for PUBG Mobile & BGMI. 100+ cool PUBG names, clan tags & symbols.",
  },
};

const PUBG_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best name for PUBG Mobile and BGMI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best name for PUBG depends on your playstyle. Conqueror rushers prefer crown symbols like 亗•CONQUEROR•亗 or 亗『KING』亗, snipers use weapon tags like ▄︻デAWM•GOD══━一, and clans use disciplined bracket prefixes like 『ASSASSINS』 or ᵀᵉᵃᵐ★ESPORTS★.",
      },
    },
    {
      "@type": "Question",
      name: "What is the character limit for PUBG names?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PUBG Mobile and BGMI allow up to 14 characters in your in-game name. Since some decorative Unicode symbols take up 2 characters in game memory, keeping your base nickname to 6 to 10 letters is recommended.",
      },
    },
    {
      "@type": "Question",
      name: "How do I type the Japanese crown symbol (亗) in PUBG?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 亗 symbol (pronounced Sui in Japanese/Chinese) cannot be typed on standard Western keyboards. You can easily copy it from our generator above and paste it directly into your PUBG Rename Card dialog.",
      },
    },
    {
      "@type": "Question",
      name: "How do I change my name in PUBG Mobile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "1. Copy your favorite PUBG name from Nicknamegenerator.io.\n2. Open PUBG Mobile and tap Inventory.\n3. Tap the crate/box icon on the right side and select your Rename Card.\n4. Tap 'Use', paste your copied name into the text box, and press OK.",
      },
    },
  ],
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.nicknamegenerator.io",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "PUBG Stylish Names",
      item: "https://www.nicknamegenerator.io/pubg-stylish-name",
    },
  ],
};

const RELATED = [
  { label: "PUBG Girl Names", href: "/pubg-girl-names" },
  { label: "Free Fire Nicknames", href: "/freefire" },
  { label: "FF Guild Names", href: "/free-fire-guild-name" },
  { label: "Devil Names", href: "/devil-names" },
  { label: "Facebook Names", href: "/facebook" },
  { label: "TikTok Names", href: "/tiktok" },
  { label: "Stylish Text", href: "/stylish-text" },
  { label: "Nickname Maker", href: "/nickname-maker" },
];

export default function PubgStylishNamePage() {
  return (
    <div className="min-h-screen bg-[#ecf0f5] text-[#222]">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PUBG_FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      {/* Header */}
      <header className="bg-[#354861] h-[44px] flex items-center px-4 shadow-md">
        <Link href="/" className="text-white font-light text-[26px] tracking-tight hover:opacity-80">
          Nicknamegenerator<span className="text-[#3c8dbc]">.io</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 text-[13px]">
          <Link href="/" className="text-white hover:text-[#00c0ef]">Home</Link>
          <Link href="/freefire" className="text-white hover:text-[#00c0ef]">Free Fire</Link>
          <Link href="/stylish-text" className="text-white hover:text-[#00c0ef]">Stylish Text</Link>
        </nav>
      </header>

      <div className="mx-auto max-w-[960px] px-4 py-6 space-y-4">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-[13px] text-[#2c6da5] flex items-center gap-1.5">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600 font-medium">PUBG Names</span>
        </nav>

        {/* H1 Box */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#f39c12] p-5">
          <h1 className="text-[22px] sm:text-[26px] font-bold text-[#222] m-0 leading-tight">
            Best Name for PUBG: 100+ Cool PUBG Names &amp; Clan Tags
          </h1>
          <p className="text-xs text-gray-500 font-mono mt-1">
            PUBG Mobile &amp; BGMI • Conqueror Crowns (亗) • Sniper Crosshairs • 1-Click Copy
          </p>
          <div className="mt-3 text-[14px] text-gray-700 leading-relaxed space-y-2">
            <p className="m-0">
              Discover the <strong>best name for PUBG</strong> and <strong>BGMI</strong> to dominate the battleground with authority. Whether you need aggressive conqueror symbols like the Japanese crown (<code>亗</code>), sniper crosshairs (<code>▄︻デ══━一</code>), or disciplined clan tags (<code>『ASSASSINS』</code>), type your gamertag below or choose from 100+ curated PUBG names.
            </p>
          </div>
        </div>

        {/* Grid Box */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#f39c12] overflow-hidden">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5 flex items-center justify-between">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">
              Best PUBG Names &amp; Clan Tags Collection
            </h2>
            <span className="text-[11px] text-gray-400 bg-[#f4f4f4] px-2 py-0.5 rounded">
              Verified Game-Ready • 1-Click Copy
            </span>
          </div>
          <PubgNamesGrid />
        </div>

        {/* PUBG Symbols & Tips */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7]">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">
              Most Popular Symbols for PUBG Mobile &amp; BGMI Names
            </h2>
          </div>
          <div className="grid gap-3 p-4 sm:grid-cols-3 text-[13px] text-gray-700 leading-relaxed">
            <div className="rounded border border-[#e5e7eb] bg-[#f8fafd] p-3">
              <h3 className="font-bold text-[#354861] mb-1">亗 The Japanese Crown</h3>
              <p className="m-0 text-gray-600">
                The 亗 character represents supreme Conqueror rank and clutch prowess. It renders natively on both iOS and Android.
              </p>
            </div>
            <div className="rounded border border-[#e5e7eb] bg-[#f8fafd] p-3">
              <h3 className="font-bold text-[#354861] mb-1">• Middle Dot Separator</h3>
              <p className="m-0 text-gray-600">
                Because spacebars are restricted in PUBG IDs, pro players use elevated dots (•) to cleanly separate clan tags from their IGN.
              </p>
            </div>
            <div className="rounded border border-[#e5e7eb] bg-[#f8fafd] p-3">
              <h3 className="font-bold text-[#354861] mb-1">『Japanese Brackets』</h3>
              <p className="m-0 text-gray-600">
                Square corner brackets enclose clan tags or player roles such as 『IGL』, 『SNIPER』, or 『RUSHER』.
              </p>
            </div>
          </div>
        </div>

        {/* Clan Naming Guide */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7]">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">
              Best Clan Names for PUBG Mobile (Clan Tag Ideas)
            </h2>
          </div>
          <div className="p-5 text-[14px] text-gray-700 leading-relaxed space-y-3">
            <p className="m-0">
              When choosing the <strong>best clan name for PUBG</strong>, ensure all squad members share a consistent prefix tag. Top competitive esports clans use tags like:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 text-[13px]">
              <li><strong>『HYDRA』• [Name]</strong> — Iconic esports bracket naming.</li>
              <li><strong>亗 SQUAD 444 亗</strong> — Symmetrical crown framing for aggressive leaderboard squads.</li>
              <li><strong>ᵀᵉᵃᵐ★SOUL★</strong> — Small superscript prefixes that leave maximum room for your player handle.</li>
            </ul>
          </div>
        </div>

        {/* How to change */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7]">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">
              How to Change Your Name in PUBG Mobile &amp; BGMI
            </h2>
          </div>
          <div className="p-5 text-[14px] text-gray-700 leading-relaxed">
            <ol className="list-decimal list-inside space-y-2 m-0">
              <li>Launch <strong>PUBG Mobile</strong> or <strong>BGMI</strong> and tap on <strong>Inventory</strong>.</li>
              <li>Tap the crate/box icon on the bottom right to locate your <strong>Rename Card</strong>.</li>
              <li>Tap <strong>Use</strong> on the Rename Card.</li>
              <li>Click your favorite nickname from our generator above to copy it, and paste it into the name dialog.</li>
              <li>Tap <strong>OK</strong> to confirm your new name.</li>
            </ol>
            <p className="mt-3 text-[12px] text-gray-500 m-0">
              💡 Tip: If you don&apos;t have a Rename Card, you can purchase one from the in-game Shop for 180 UC or earn one by completing Progress Missions.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7]">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">
              Frequently Asked Questions (FAQs)
            </h2>
          </div>
          <div className="p-5 space-y-4 text-[14px] text-gray-700 leading-relaxed">
            {PUBG_FAQ_SCHEMA.mainEntity.map((faq, idx) => (
              <div key={idx} className="p-3 bg-gray-50 border border-gray-200 rounded">
                <h3 className="font-bold text-[#354861] mb-1 text-[14px]">{faq.name}</h3>
                <p className="m-0 text-xs text-gray-600 whitespace-pre-line leading-relaxed">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Related */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7]">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">Related Nickname Pages</h2>
          </div>
          <div className="p-4 flex flex-wrap gap-2">
            {RELATED.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="text-[13px] text-[#2c6da5] border border-[#d2d6de] px-3 py-1.5 rounded-[20px] hover:bg-[#3c8dbc] hover:text-white hover:border-[#3c8dbc] transition-colors"
              >
                {r.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Global Footer */}
      <NickFooter />
    </div>
  );
}
