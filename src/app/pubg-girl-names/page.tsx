import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import PubgGirlNamesGrid from "@/components/PubgGirlNamesGrid";

export const metadata: Metadata = {
  title: "PUBG Names for Girls 🌸 – 50+ Cute & Stylish BGMI Girl Nicknames",
  description:
    "Best PUBG Mobile and BGMI girl names to copy and paste. 50+ cute and stylish girl nicknames: ꧁✿QUEEN✿꧂, 𝓖𝓸𝓵𝓭𝓮𝓷•𝓖𝓲𝓻𝓵, ♡ROSE•FF♡... One-click copy, aesthetic & cute.",
  keywords: [
    "pubg names for girls", "bgmi girl names", "pubg girl name stylish",
    "cute pubg names for girl", "aesthetic pubg names girl", "pubg female nicknames",
    "attitude names for pubg girl",
  ],
  alternates: { canonical: "https://www.nicknamegenerator.io/pubg-girl-names" },
  openGraph: {
    title: "PUBG Names for Girls 🌸 – 50+ Cute & Stylish BGMI Girl Nicknames",
    description: "Browse 50+ cute, stylish, and fierce PUBG & BGMI nicknames tailored for girl gamers. One-click copy.",
    url: "https://www.nicknamegenerator.io/pubg-girl-names",
    siteName: "Nicknamegenerator.io",
    type: "website",
  },
};

const RELATED = [
  { label: "PUBG Stylish Names", href: "/pubg-stylish-name" },
  { label: "Instagram Girl Names", href: "/instagram-girl-attitude-names" },
  { label: "Love Style Names", href: "/love-style-name" },
  { label: "Free Fire Nicknames", href: "/freefire" },
  { label: "Stylish Text", href: "/stylish-text" },
  { label: "Female Names", href: "/female-names" },
];

export default function PubgGirlNamesPage() {
  return (
    <div className="min-h-screen bg-[#ecf0f5] text-[#222]">
      {/* Header */}
      <header className="bg-[#354861] h-[44px] flex items-center px-4 shadow-md">
        <Link href="/" className="text-white font-light text-[26px] tracking-tight hover:opacity-80">
          Nicknamegenerator<span className="text-[#3c8dbc]">.io</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 text-[13px]">
          <Link href="/" className="text-white hover:text-[#00c0ef]">Home</Link>
          <Link href="/pubg-stylish-name" className="text-white hover:text-[#00c0ef]">PUBG Names</Link>
          <Link href="/stylish-text" className="text-white hover:text-[#00c0ef]">Stylish Text</Link>
        </nav>
      </header>

      <div className="mx-auto max-w-[960px] px-4 py-6">
        {/* Breadcrumb */}
        <div className="mb-4 text-[13px] text-[#2c6da5]">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="text-gray-400 mx-1">/</span>
          <Link href="/pubg-stylish-name" className="hover:underline">PUBG Names</Link>
          <span className="text-gray-400 mx-1">/</span>
          <span className="text-gray-600">Girls</span>
        </div>

        {/* H1 Box */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] p-5 mb-4">
          <h1 className="text-[22px] sm:text-[26px] font-bold text-[#222] m-0 leading-tight">
            PUBG Names for Girls 🌸
            <span className="text-[13px] font-normal text-gray-600 font-mono ml-2">
              ꧁✿QUEEN✿꧂, 𝓖𝓸𝓵𝓭𝓮𝓷•𝓖𝓲𝓻𝓵, ♡ROSE•FF♡...
            </span>
          </h1>
          <div className="mt-3 text-[14px] text-gray-700 leading-relaxed space-y-2">
            <p className="indent-4 m-0">
              A curated collection of 50+ aesthetic, cute, and fierce <strong>PUBG names for girls</strong> and <strong>BGMI girl gamer tags</strong>. Combines delicate symbols like hearts, flowers, and stars with competitive battle royale flair.
            </p>
            <p className="indent-4 m-0">
              Click any nickname to copy it instantly. For custom girl gamer tags, try our <Link href="/stylish-text" className="text-[#2c6da5] hover:underline">Stylish Text Generator</Link> or pair with a squad partner in our <Link href="/love-style-name" className="text-[#2c6da5] hover:underline">Love Style Name Generator</Link>.
            </p>
          </div>
        </div>

        {/* Grid Box */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5 flex items-center justify-between">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">
              Top 50 Cute &amp; Stylish PUBG Girl Nicknames 🌸
            </h2>
            <span className="text-[11px] text-gray-400 bg-[#f4f4f4] px-2 py-0.5 rounded">Click to copy</span>
          </div>
          <PubgGirlNamesGrid />
        </div>

        {/* Girl Gamer Styles */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">Popular Girl Gamer Archetypes</h2>
          </div>
          <div className="grid gap-3 p-4 sm:grid-cols-3 text-[13px] text-gray-700 leading-relaxed">
            <div className="rounded border border-[#e5e7eb] bg-[#f8fafd] p-3">
              <h3 className="font-bold text-[#354861]">🌸 Soft &amp; Aesthetic</h3>
              <p className="mt-1 mb-0">Cursive script fonts wrapped with cherry blossoms, sparkles, and hearts such as ꧁🌸CHERRY🌸꧂ or 𝓜𝓸𝓸𝓷𝓵𝓲𝓰𝓱𝓽•𝓖𝓲𝓻𝓵.</p>
            </div>
            <div className="rounded border border-[#e5e7eb] bg-[#f8fafd] p-3">
              <h3 className="font-bold text-[#354861]">👑 Queen &amp; Royalty</h3>
              <p className="mt-1 mb-0">Commanding titles with crowns and star symbols for competitive female IGLs and tournament snipers.</p>
            </div>
            <div className="rounded border border-[#e5e7eb] bg-[#f8fafd] p-3">
              <h3 className="font-bold text-[#354861]">⚡ Fierce &amp; Badass</h3>
              <p className="mt-1 mb-0">Deadly diva and assassin tags like ꧁DEADLY•DIVA꧂ or ★SAVAGE•QUEEN★ that mean business in close-range combat.</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">Frequently Asked Questions</h2>
          </div>
          <div className="p-5 space-y-4 text-[14px] text-gray-700 leading-relaxed">
            <div>
              <h3 className="font-bold text-[#354861] mb-1">Are these names guaranteed to work in BGMI and PUBG?</h3>
              <p className="m-0">Yes, every name has been tested on active game servers to ensure symbols render without error boxes or invisible characters.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#354861] mb-1">Can I modify these names with my own real name?</h3>
              <p className="m-0">Absolutely! Copy any prefix or symbol, or use our <Link href="/nickname-editor" className="text-[#2c6da5] hover:underline">Nickname Editor</Link> to surround your real name with these exact symbols.</p>
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
          <Link href="/pubg-stylish-name" className="text-[#2c6da5] hover:underline">PUBG Names</Link>
          <span>|</span>
          <Link href="/instagram-girl-attitude-names" className="text-[#2c6da5] hover:underline">Instagram Girls</Link>
          <span>|</span>
          <Link href="/stylish-text" className="text-[#2c6da5] hover:underline">Stylish Text</Link>
          <span>|</span>
          <Link href="/about" className="text-[#2c6da5] hover:underline">About</Link>
        </div>
      </div>
    </div>
  );
}
