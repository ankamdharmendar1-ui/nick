import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import NicknameEditorTool from "@/components/NicknameEditorTool";

export const metadata: Metadata = {
  title: "Nickname Editor 🎨 – Add Prefix, Suffix & Symbols to Any Name",
  description:
    "Free online Nickname Editor. Customize any name with stylish prefixes (꧁, 『, 亗), suffixes (꧂, 』), separators, and font transformations. Live preview & 1-click copy.",
  keywords: [
    "nickname editor", "custom nickname creator", "prefix suffix name generator",
    "name symbol editor", "free fire name editor", "pubg name maker editor",
    "stylish nickname editor",
  ],
  alternates: { canonical: "https://www.nicknamegenerator.io/nickname-editor" },
  openGraph: {
    title: "Nickname Editor 🎨 – Add Prefix, Suffix & Symbols to Any Name",
    description: "Design custom gamertags by combining prefix symbols, fonts, and suffixes with real-time preview and 1-click copy.",
    url: "https://www.nicknamegenerator.io/nickname-editor",
    siteName: "Nicknamegenerator.io",
    type: "website",
  },
};

const RELATED = [
  { label: "Nickname Maker", href: "/nickname-maker" },
  { label: "Stylish Text", href: "/stylish-text" },
  { label: "Free Fire Nicknames", href: "/freefire" },
  { label: "PUBG Stylish Names", href: "/pubg-stylish-name" },
  { label: "Symbol Generator", href: "/nickname-to-symbols" },
  { label: "Names Mixer", href: "/names-mixer" },
];

export default function NicknameEditorPage() {
  return (
    <div className="min-h-screen bg-[#ecf0f5] text-[#222]">
      {/* Header */}
      <header className="bg-[#354861] h-[44px] flex items-center px-4 shadow-md">
        <Link href="/" className="text-white font-light text-[26px] tracking-tight hover:opacity-80">
          Nicknamegenerator<span className="text-[#3c8dbc]">.io</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 text-[13px]">
          <Link href="/" className="text-white hover:text-[#00c0ef]">Home</Link>
          <Link href="/nickname-maker" className="text-white hover:text-[#00c0ef]">Maker</Link>
          <Link href="/stylish-text" className="text-white hover:text-[#00c0ef]">Stylish Text</Link>
        </nav>
      </header>

      <div className="mx-auto max-w-[960px] px-4 py-6">
        {/* Breadcrumb */}
        <div className="mb-4 text-[13px] text-[#2c6da5]">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="text-gray-400 mx-1">/</span>
          <span className="text-gray-600">Nickname Editor</span>
        </div>

        {/* H1 Box */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] p-5 mb-4">
          <h1 className="text-[22px] sm:text-[26px] font-bold text-[#222] m-0 leading-tight">
            Nickname Editor 🎨 – Build Custom Gamertags with Symbols
          </h1>
          <div className="mt-3 text-[14px] text-gray-700 leading-relaxed space-y-2">
            <p className="indent-4 m-0">
              Take full creative control with the <strong>Nickname Editor</strong>. Rather than choosing from pre-set lists, assemble your own unique gamertag piece-by-piece: select your favorite prefix symbol, customize spacing separators, apply Unicode font transformations, and cap it off with a matching suffix.
            </p>
            <p className="indent-4 m-0">
              Watch your changes update in the live preview box and copy your completed gamertag in a single tap.
            </p>
          </div>
        </div>

        {/* Tool */}
        <NicknameEditorTool />

        {/* Pro Tips */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mt-4 mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">Pro Tips for Nickname Editing</h2>
          </div>
          <div className="grid gap-3 p-4 sm:grid-cols-3 text-[13px] text-gray-700 leading-relaxed">
            <div className="rounded border border-[#e5e7eb] bg-[#f8fafd] p-3">
              <h3 className="font-bold text-[#354861]">Symmetrical Symbols</h3>
              <p className="mt-1 mb-0">Pair opening and closing wings like ꧁ and ꧂, or Japanese brackets 『 and 』 for balanced aesthetic harmony.</p>
            </div>
            <div className="rounded border border-[#e5e7eb] bg-[#f8fafd] p-3">
              <h3 className="font-bold text-[#354861]">Dot Spacing</h3>
              <p className="mt-1 mb-0">Use the elevated middle dot • instead of a blank space to ensure games don't truncate or reject spaces in names.</p>
            </div>
            <div className="rounded border border-[#e5e7eb] bg-[#f8fafd] p-3">
              <h3 className="font-bold text-[#354861]">Small Caps Legibility</h3>
              <p className="mt-1 mb-0">Small caps (ᴘʀᴏ) look sleek and modern while remaining instantly readable on kill feeds and spectator screens.</p>
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
              <h3 className="font-bold text-[#354861] mb-1">What games work with this nickname editor?</h3>
              <p className="m-0">Our editor uses universal Unicode characters that render cleanly in Garena Free Fire, PUBG Mobile, BGMI, Call of Duty Mobile, Valorant, Roblox, and Discord.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#354861] mb-1">Can I copy the edited name to clipboard with one click?</h3>
              <p className="m-0">Yes! Simply click the "Copy Nickname" button below the live preview card, and your customized text is immediately ready to paste.</p>
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
          <Link href="/nickname-maker" className="text-[#2c6da5] hover:underline">Maker</Link>
          <span>|</span>
          <Link href="/stylish-text" className="text-[#2c6da5] hover:underline">Stylish Text</Link>
          <span>|</span>
          <Link href="/freefire" className="text-[#2c6da5] hover:underline">Free Fire</Link>
          <span>|</span>
          <Link href="/about" className="text-[#2c6da5] hover:underline">About</Link>
        </div>
      </div>
    </div>
  );
}
