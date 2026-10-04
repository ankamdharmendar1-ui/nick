import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import GuildNameGrid from "@/components/GuildNameGrid";
import { NickFooter } from "@/components/NickFooter";

export const metadata: Metadata = {
  title: "Free Fire Guild Name Maker: 100+ Guild Nicknames and Clan Tags",
  description:
    "Generate cool Free Fire guild names, clan tags, and squad badges. Browse 100+ stylish guild nicknames and guild names for Free Fire with 1-click copy.",
  keywords: [
    "free fire guild name",
    "guild nickname",
    "guild name for free fire",
    "ff guild names",
    "free fire clan names",
    "stylish ff guild name",
    "best guild name in free fire",
    "guild nicknames for free fire",
    "ff squad tags",
    "free fire guild name style",
  ],
  alternates: { canonical: "https://www.nicknamegenerator.io/free-fire-guild-name" },
  openGraph: {
    title: "Free Fire Guild Name Maker: 100+ Guild Nicknames and Clan Tags",
    description:
      "Generate cool Free Fire guild names, clan tags, and squad badges. Browse 100+ stylish guild nicknames and guild names for Free Fire with 1-click copy.",
    url: "https://www.nicknamegenerator.io/free-fire-guild-name",
    siteName: "Nicknamegenerator.io",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Fire Guild Name Maker: 100+ Guild Nicknames and Clan Tags",
    description:
      "Generate cool Free Fire guild names, clan tags, and squad badges with 1-click copy.",
  },
};

const GUILD_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I choose the best guild name for Free Fire?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best Free Fire guild names are short (under 12 characters), easy to pronounce, and feature iconic squad brackets like 『ASSASSINS』, Tibetan wings ꧁GHOST SQUAD꧂, or high-impact symbols like ⚡ and 亗. Use our generator above to test your squad name with different badges.",
      },
    },
    {
      "@type": "Question",
      name: "What is the character limit for a Free Fire guild name?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Garena Free Fire strictly restricts guild names to a maximum of 12 characters, including Unicode symbols and spaces.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to change a guild nickname in Free Fire?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Changing a guild name in Free Fire costs 500 Diamonds. Only the Guild Leader or authorized Guild Officers can rename the guild.",
      },
    },
    {
      "@type": "Question",
      name: "How do I change my guild name in Free Fire?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "1. Copy your desired guild nickname from Nicknamegenerator.io.\n2. Open Free Fire and tap the Guild icon on the right side of the lobby.\n3. Tap the pencil edit icon next to your existing guild name.\n4. Paste the new name in the text field.\n5. Confirm the change with 500 Diamonds.",
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
      name: "Free Fire Guild Names",
      item: "https://www.nicknamegenerator.io/free-fire-guild-name",
    },
  ],
};

const RELATED = [
  { label: "Free Fire Nicknames", href: "/freefire" },
  { label: "FF Name Style", href: "/ff-name-style" },
  { label: "PUBG Stylish Names", href: "/pubg-stylish-name" },
  { label: "Devil Names", href: "/devil-names" },
  { label: "Facebook Names", href: "/facebook" },
  { label: "TikTok Stylish Names", href: "/tiktok" },
];

export default function FreeFireGuildNamePage() {
  return (
    <div className="min-h-screen bg-[#ecf0f5] text-[#222]">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(GUILD_FAQ_SCHEMA) }}
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
          <Link href="/freefire" className="hover:underline">Free Fire</Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600 font-medium">Guild Names</span>
        </nav>

        {/* H1 Box */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] p-5">
          <h1 className="text-[22px] sm:text-[26px] font-bold text-[#222] m-0 leading-tight">
            Free Fire Guild Name Maker &amp; Guild Nicknames
          </h1>
          <p className="text-xs text-gray-500 font-mono mt-1">
            Top Guild Names for Free Fire • Clan Tags • Squad Badges • 1-Click Copy
          </p>
          <div className="mt-3 text-[14px] text-gray-700 leading-relaxed space-y-2">
            <p className="m-0">
              Find the perfect <strong>Free Fire guild name</strong> and squad clan tag for your team. A powerful <strong>guild nickname</strong> represents your entire squad on tournament leaderboards and kill feeds. Whether you need aggressive rusher tags, Japanese corner brackets (『SQUAD』), or royal wings (꧁ELITE꧂), create and copy verified Free Fire guild names below.
            </p>
          </div>
        </div>

        {/* Grid Box */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] overflow-hidden">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5 flex items-center justify-between">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">
              Guild Name Generator &amp; Top Clan Names
            </h2>
            <span className="text-[11px] text-gray-400 bg-[#f4f4f4] px-2 py-0.5 rounded">
              12 Characters Max • 1-Click Copy
            </span>
          </div>
          <GuildNameGrid />
        </div>

        {/* Guild Tag Formatting Guide */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7]">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">
              Popular Guild Name Formats for Free Fire Squads
            </h2>
          </div>
          <div className="p-5 text-[14px] text-gray-700 leading-relaxed space-y-3">
            <p className="m-0">
              Esports clans and top-ranked Free Fire guilds follow standard naming structures to build brand authority:
            </p>
            <div className="grid gap-3 sm:grid-cols-3 text-[13px]">
              <div className="p-3 bg-[#f8fafd] border border-[#e5e7eb] rounded">
                <div className="font-bold text-[#354861] mb-1">『Bracket Badges』</div>
                <div className="text-gray-600">
                  Clean brackets like 『ASSASSINS』 or 『SQUAD』 look disciplined and modern in tournament lobbies.
                </div>
              </div>
              <div className="p-3 bg-[#f8fafd] border border-[#e5e7eb] rounded">
                <div className="font-bold text-[#354861] mb-1">꧁Winged Ornaments꧂</div>
                <div className="text-gray-600">
                  Tibetan wing ornaments like ꧁ELITE FORCE꧂ signal veteran status and clan dominance.
                </div>
              </div>
              <div className="p-3 bg-[#f8fafd] border border-[#e5e7eb] rounded">
                <div className="font-bold text-[#354861] mb-1">⚡Symbol Flanked⚡</div>
                <div className="text-gray-600">
                  High-impact lightning bolts, skulls (☠️), or crowns (亗) ideal for aggressive rusher squads.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How to change */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7]">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">
              How to Change Guild Name in Free Fire (Step-by-Step)
            </h2>
          </div>
          <div className="p-5 text-[14px] text-gray-700 leading-relaxed">
            <ol className="list-decimal list-inside space-y-2 m-0">
              <li>Launch <strong>Garena Free Fire</strong> and tap the <strong>Guild</strong> icon on the right side of the main lobby.</li>
              <li>Tap the <strong>Guild Info / Edit (pencil icon)</strong> located beside your current guild name.</li>
              <li>Copy your favorite guild nickname from the list or generator above.</li>
              <li>Paste the new name into the &ldquo;New Guild Name&rdquo; text field.</li>
              <li>Confirm the name change by spending <strong>500 Diamonds</strong>.</li>
            </ol>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7]">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">Frequently Asked Questions</h2>
          </div>
          <div className="p-5 space-y-4 text-[14px] text-gray-700 leading-relaxed">
            {GUILD_FAQ_SCHEMA.mainEntity.map((faq, idx) => (
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
            <h2 className="text-[17px] font-semibold text-[#333] m-0">Related Nickname Generators</h2>
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
