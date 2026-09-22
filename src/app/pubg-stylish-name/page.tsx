import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import PubgNamesGrid from "@/components/PubgNamesGrid";

export const metadata: Metadata = {
  title: "PUBG Stylish Names 🏆 – 50+ Best BGMI & PUBG Mobile Names to Copy",
  description:
    "Best PUBG Mobile and BGMI stylish names to copy and paste. 50+ nicknames: ꧁༒PUBG•KING༒꧂, 亗•CONQUEROR•亗, 『BGMI•MASTER』... One-click copy, verified game-ready.",
  keywords: [
    "pubg stylish name", "bgmi stylish name", "pubg mobile names",
    "pubg name symbols", "pubg name copy paste", "bgmi name generator",
    "pubg conqueror names", "pubg clan tags",
  ],
  alternates: { canonical: "https://www.nicknamegenerator.io/pubg-stylish-name" },
  openGraph: {
    title: "PUBG Stylish Names 🏆 – 50+ Best BGMI & PUBG Mobile Names to Copy",
    description: "Browse 50+ stylish PUBG Mobile & BGMI names with symbols like 亗 and ꧁. One-click copy.",
    url: "https://www.nicknamegenerator.io/pubg-stylish-name",
    siteName: "Nicknamegenerator.io",
    type: "website",
  },
};

const RELATED = [
  { label: "PUBG Girl Names", href: "/pubg-girl-names" },
  { label: "Free Fire Nicknames", href: "/freefire" },
  { label: "FF Guild Names", href: "/free-fire-guild-name" },
  { label: "Stylish Text", href: "/stylish-text" },
  { label: "Nickname Maker", href: "/nickname-maker" },
  { label: "Nickname Editor", href: "/nickname-editor" },
];

export default function PubgStylishNamePage() {
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
          <span className="text-gray-600">PUBG Stylish Names</span>
        </div>

        {/* H1 Box */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] p-5 mb-4">
          <h1 className="text-[22px] sm:text-[26px] font-bold text-[#222] m-0 leading-tight">
            PUBG Stylish Names 🏆
            <span className="text-[13px] font-normal text-gray-600 font-mono ml-2">
              ꧁༒PUBG•KING༒꧂, 亗•CONQUEROR•亗, 『BGMI•MASTER』...
            </span>
          </h1>
          <div className="mt-3 text-[14px] text-gray-700 leading-relaxed space-y-2">
            <p className="indent-4 m-0">
              Find top-tier <strong>PUBG stylish names</strong> and <strong>BGMI clan tags</strong> to command respect on the battlefield. Features popular symbols like the Japanese 亗 crown, bullet points, brackets, and bold small caps that render properly in PUBG Mobile and Battlegrounds Mobile India.
            </p>
            <p className="indent-4 m-0">
              Click any nickname below to copy it immediately. Need a custom name? Try our <Link href="/stylish-text" className="text-[#2c6da5] hover:underline">Stylish Text Generator</Link> or <Link href="/nickname-editor" className="text-[#2c6da5] hover:underline">Nickname Editor</Link>.
            </p>
          </div>
        </div>

        {/* Grid Box */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5 flex items-center justify-between">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">
              Top 50 PUBG &amp; BGMI Stylish Names 🏆
            </h2>
            <span className="text-[11px] text-gray-400 bg-[#f4f4f4] px-2 py-0.5 rounded">Click to copy</span>
          </div>
          <PubgNamesGrid />
        </div>

        {/* PUBG Symbols & Tips */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">Most Popular PUBG Name Symbols</h2>
          </div>
          <div className="grid gap-3 p-4 sm:grid-cols-3 text-[13px] text-gray-700 leading-relaxed">
            <div className="rounded border border-[#e5e7eb] bg-[#f8fafd] p-3">
              <h3 className="font-bold text-[#354861]">亗 The Japanese Crown</h3>
              <p className="mt-1 mb-0">The 亗 symbol resembles a mini crown or fortress gate. It is the signature symbol of PUBG conqueror players.</p>
            </div>
            <div className="rounded border border-[#e5e7eb] bg-[#f8fafd] p-3">
              <h3 className="font-bold text-[#354861]">• Middle Dot Separator</h3>
              <p className="mt-1 mb-0">Spaces are limited in PUBG ID naming, so players use the elevated dot • to cleanly separate clan tag from player handle.</p>
            </div>
            <div className="rounded border border-[#e5e7eb] bg-[#f8fafd] p-3">
              <h3 className="font-bold text-[#354861]">『Japanese Brackets』</h3>
              <p className="mt-1 mb-0">Corner brackets like 『 』 enclose team designations or role titles like IGL, SNIPER, or RUSHER.</p>
            </div>
          </div>
        </div>

        {/* How to change */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">How to Change Name in PUBG Mobile &amp; BGMI</h2>
          </div>
          <div className="p-5 text-[14px] text-gray-700 leading-relaxed">
            <ol className="list-decimal list-inside space-y-2 m-0">
              <li>Open <strong>PUBG Mobile / BGMI</strong> and tap on <strong>Inventory</strong>.</li>
              <li>Go to the box icon (bottom tab) to locate your <strong>Rename Card</strong>.</li>
              <li>Tap <strong>Use</strong> on the Rename Card.</li>
              <li>Click your favorite name from this page to copy it, and paste it into the dialog box.</li>
              <li>Tap <strong>OK</strong> to confirm your new gamertag.</li>
            </ol>
            <p className="mt-3 text-[12px] text-gray-500 m-0">
              💡 If you don't have a Rename Card, you can purchase one from the in-game Shop for 180 UC or earn one from seasonal progress missions.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">Frequently Asked Questions</h2>
          </div>
          <div className="p-5 space-y-4 text-[14px] text-gray-700 leading-relaxed">
            <div>
              <h3 className="font-bold text-[#354861] mb-1">What is the character limit for PUBG Mobile names?</h3>
              <p className="m-0">PUBG Mobile and BGMI allow up to 14 characters. Some decorative Unicode symbols count as 2 characters, so keeping your core name to 6-8 letters is best.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#354861] mb-1">Do these names work on BGMI (Battlegrounds Mobile India)?</h3>
              <p className="m-0">Yes, BGMI uses the exact same rendering engine as PUBG Mobile, so every symbol and font here renders identically in BGMI.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#354861] mb-1">Why do some symbols show up as question marks [?] in PUBG?</h3>
              <p className="m-0">Older or rare emojis are filtered by PUBG's font engine. Every nickname listed on this page is tested and verified to display properly without question mark boxes.</p>
            </div>
          </div>
        </div>

        {/* Related */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">Related Nickname Pages</h2>
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
          <Link href="/pubg-girl-names" className="text-[#2c6da5] hover:underline">PUBG Girl Names</Link>
          <span>|</span>
          <Link href="/freefire" className="text-[#2c6da5] hover:underline">Free Fire</Link>
          <span>|</span>
          <Link href="/stylish-text" className="text-[#2c6da5] hover:underline">Stylish Text</Link>
          <span>|</span>
          <Link href="/about" className="text-[#2c6da5] hover:underline">About</Link>
        </div>
      </div>
    </div>
  );
}
