import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import GuildNameGrid from "@/components/GuildNameGrid";

export const metadata: Metadata = {
  title: "Free Fire Guild Names 🏆 – 50+ Best FF Clan & Guild Tags to Copy",
  description:
    "Best Free Fire guild names and clan tags to copy and paste. Browse 50+ stylish FF guild names: 『ASSASSINS』, ꧁GHOST SQUAD꧂, ★PREDATOR GUILD★... One-click copy, ready for your squad.",
  keywords: [
    "free fire guild name", "ff guild names", "free fire clan names",
    "stylish ff guild name", "guild name for free fire", "ff squad tags",
    "best guild name in free fire", "free fire guild name style",
  ],
  alternates: { canonical: "https://www.nicknamegenerator.io/free-fire-guild-name" },
  openGraph: {
    title: "Free Fire Guild Names 🏆 – 50+ Best FF Clan & Guild Tags to Copy",
    description: "Browse 50+ stylish Free Fire guild names and clan tags. Copy with one click, ready for your FF squad.",
    url: "https://www.nicknamegenerator.io/free-fire-guild-name",
    siteName: "Nicknamegenerator.io",
    type: "website",
  },
};

const RELATED = [
  { label: "Free Fire Nicknames", href: "/freefire" },
  { label: "FF Name Style", href: "/ff-name-style" },
  { label: "PUBG Stylish Names", href: "/pubg-stylish-name" },
  { label: "Stylish Text", href: "/stylish-text" },
  { label: "Names Mixer", href: "/names-mixer" },
  { label: "Symbol Generator", href: "/nickname-to-symbols" },
];

export default function FreeFireGuildNamePage() {
  return (
    <div className="min-h-screen bg-[#ecf0f5] text-[#222]">
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

      <div className="mx-auto max-w-[960px] px-4 py-6">
        {/* Breadcrumb */}
        <div className="mb-4 text-[13px] text-[#2c6da5]">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="text-gray-400 mx-1">/</span>
          <Link href="/freefire" className="hover:underline">Free Fire</Link>
          <span className="text-gray-400 mx-1">/</span>
          <span className="text-gray-600">Guild Names</span>
        </div>

        {/* H1 Box */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] p-5 mb-4">
          <h1 className="text-[22px] sm:text-[26px] font-bold text-[#222] m-0 leading-tight">
            Free Fire Guild Names 🏆
            <span className="text-[13px] font-normal text-gray-600 font-mono ml-2">
              『ASSASSINS』, ꧁GHOST SQUAD꧂, ★PREDATOR GUILD★...
            </span>
          </h1>
          <div className="mt-3 text-[14px] text-gray-700 leading-relaxed space-y-2">
            <p className="indent-4 m-0">
              Browse 50+ stylish <strong>Free Fire guild names</strong>, clan tags, and squad badges. Unlike personal nicknames, guild names represent your entire team and need to be authoritative, short, and memorable.
            </p>
            <p className="indent-4 m-0">
              Click any guild name below to copy it directly. You can also customize letters and symbols using our <Link href="/stylish-text" className="text-[#2c6da5] hover:underline">Stylish Text Generator</Link>.
            </p>
          </div>
        </div>

        {/* Grid Box */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5 flex items-center justify-between">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">
              Top 50 Free Fire Guild &amp; Clan Names 🏆
            </h2>
            <span className="text-[11px] text-gray-400 bg-[#f4f4f4] px-2 py-0.5 rounded">Click to copy</span>
          </div>
          <GuildNameGrid />
        </div>

        {/* Guild Tag Formatting Guide */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">Guild Tag Formats &amp; Ideas</h2>
          </div>
          <div className="p-5 text-[14px] text-gray-700 leading-relaxed space-y-3">
            <p className="m-0">
              Top esports guilds in Free Fire follow standard prefix or badge naming styles:
            </p>
            <div className="grid gap-3 sm:grid-cols-3 text-[13px]">
              <div className="p-3 bg-[#f8fafd] border border-[#e5e7eb] rounded">
                <div className="font-bold text-[#354861] mb-1">『Bracketed Badges』</div>
                <div className="text-gray-600">Clean Japanese corner brackets like 『ASSASSINS』 or 『SQUAD』 look modern and disciplined on leaderboards.</div>
              </div>
              <div className="p-3 bg-[#f8fafd] border border-[#e5e7eb] rounded">
                <div className="font-bold text-[#354861] mb-1">꧁Winged Badges꧂</div>
                <div className="text-gray-600">Classic Tibetan wing ornaments like ꧁ELITE FORCE꧂ indicate an experienced, veteran guild.</div>
              </div>
              <div className="p-3 bg-[#f8fafd] border border-[#e5e7eb] rounded">
                <div className="font-bold text-[#354861] mb-1">⚡Symbol Flanked⚡</div>
                <div className="text-gray-600">Short high-impact symbols such as lightning bolts or crowns for aggressive rusher squads.</div>
              </div>
            </div>
          </div>
        </div>

        {/* How to change */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">How to Change Guild Name in Free Fire</h2>
          </div>
          <div className="p-5 text-[14px] text-gray-700 leading-relaxed">
            <ol className="list-decimal list-inside space-y-2 m-0">
              <li>Open <strong>Free Fire</strong> and tap the <strong>Guild</strong> icon on the right menu.</li>
              <li>Tap the <strong>Guild Info / Edit (pencil icon)</strong> next to the guild name.</li>
              <li>Copy your preferred guild name from the list above.</li>
              <li>Paste the name into the guild rename box.</li>
              <li>Confirm the name change (costs <strong>500 Diamonds</strong>).</li>
            </ol>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">Frequently Asked Questions</h2>
          </div>
          <div className="p-5 space-y-4 text-[14px] text-gray-700 leading-relaxed">
            <div>
              <h3 className="font-bold text-[#354861] mb-1">What is the character limit for Free Fire guild names?</h3>
              <p className="m-0">Garena Free Fire allows up to 12 characters for guild names, including spaces and Unicode symbols.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#354861] mb-1">Can anyone change the guild name?</h3>
              <p className="m-0">No, only the Guild Leader or an appointed Guild Officer with management permissions can change the guild name.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#354861] mb-1">Are these guild names safe from bans?</h3>
              <p className="m-0">Yes, all characters used are standard Unicode symbols verified to render inside Free Fire without violating game policies.</p>
            </div>
          </div>
        </div>

        {/* Related */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">Related Generators</h2>
          </div>
          <div className="p-4 flex flex-wrap gap-2">
            {RELATED.map((r) => (
              <Link key={r.href} href={r.href}
                className="text-[13px] text-[#2c6da5] border border-[#d2d6de] px-3 py-1.5 rounded-[20px] hover:bg-[#3c8dbc] hover:text-white hover:border-[#3c8dbc] transition-colors">
                {r.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-[12px] text-gray-500 mt-4 space-x-3">
          <Link href="/" className="text-[#2c6da5] hover:underline">Home</Link>
          <span>|</span>
          <Link href="/freefire" className="text-[#2c6da5] hover:underline">Free Fire</Link>
          <span>|</span>
          <Link href="/stylish-text" className="text-[#2c6da5] hover:underline">Stylish Text</Link>
          <span>|</span>
          <Link href="/about" className="text-[#2c6da5] hover:underline">About</Link>
          <span>|</span>
          <Link href="/contact" className="text-[#2c6da5] hover:underline">Contact</Link>
        </div>
      </div>
    </div>
  );
}
