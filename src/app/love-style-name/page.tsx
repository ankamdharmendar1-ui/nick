import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import LoveStyleTool from "@/components/LoveStyleTool";

export const metadata: Metadata = {
  title: "Love Style Name Generator 💕 – Cute Couple Names & Love Symbols",
  description:
    "Free online Love Style Name Generator. Enter two names to create 20+ romantic couple nicknames, heart symbols, and aesthetic pairing handles with 1-click copy.",
  keywords: [
    "love style name", "couple name generator", "love nickname", "romantic names for lovers",
    "couple stylish name", "love name symbols", "heart nickname style",
  ],
  alternates: { canonical: "https://www.nicknamegenerator.io/love-style-name" },
  openGraph: {
    title: "Love Style Name Generator 💕 – Cute Couple Names & Love Symbols",
    description: "Generate 20+ romantic couple names and love nicknames with hearts and aesthetic symbols. 1-click copy.",
    url: "https://www.nicknamegenerator.io/love-style-name",
    siteName: "Nicknamegenerator.io",
    type: "website",
  },
};

const RELATED = [
  { label: "Instagram Girl Names", href: "/instagram-girl-attitude-names" },
  { label: "PUBG Girl Names", href: "/pubg-girl-names" },
  { label: "Names Mixer", href: "/names-mixer" },
  { label: "Stylish Text", href: "/stylish-text" },
  { label: "Nickname Editor", href: "/nickname-editor" },
];

export default function LoveStyleNamePage() {
  return (
    <div className="min-h-screen bg-[#ecf0f5] text-[#222]">
      {/* Header */}
      <header className="bg-[#354861] h-[44px] flex items-center px-4 shadow-md">
        <Link href="/" className="text-white font-light text-[26px] tracking-tight hover:opacity-80">
          Nicknamegenerator<span className="text-[#3c8dbc]">.io</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 text-[13px]">
          <Link href="/" className="text-white hover:text-[#00c0ef]">Home</Link>
          <Link href="/instagram-girl-attitude-names" className="text-white hover:text-[#00c0ef]">Girls</Link>
          <Link href="/stylish-text" className="text-white hover:text-[#00c0ef]">Stylish Text</Link>
        </nav>
      </header>

      <div className="mx-auto max-w-[960px] px-4 py-6">
        {/* Breadcrumb */}
        <div className="mb-4 text-[13px] text-[#2c6da5]">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="text-gray-400 mx-1">/</span>
          <span className="text-gray-600">Love Style Name Generator</span>
        </div>

        {/* H1 Box */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#e83e8c] p-5 mb-4">
          <h1 className="text-[22px] sm:text-[26px] font-bold text-[#222] m-0 leading-tight">
            Love Style Name Generator 💕
            <span className="text-[13px] font-normal text-gray-600 font-mono ml-2">
              ♡ Romeo &amp; Juliet ♡, ꧁♡He•She♡꧂...
            </span>
          </h1>
          <div className="mt-3 text-[14px] text-gray-700 leading-relaxed space-y-2">
            <p className="indent-4 m-0">
              Create sweet, romantic, and aesthetic <strong>love style names</strong> for couples, gaming duos, and social media handles. Type your name and your partner&apos;s name to instantly preview romantic combinations embellished with rare heart symbols, ribbons, and infinity signs.
            </p>
            <p className="indent-4 m-0">
              Click any generated pair to copy it. You can also click individual symbols from the <strong>Love Symbols Vault</strong> below to paste them anywhere.
            </p>
          </div>
        </div>

        {/* Tool */}
        <LoveStyleTool />

        {/* Ideas & Usage */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mt-4 mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">Where to Use Love Style Names</h2>
          </div>
          <div className="grid gap-3 p-4 sm:grid-cols-3 text-[13px] text-gray-700 leading-relaxed">
            <div className="rounded border border-[#e5e7eb] bg-[#f8fafd] p-3">
              <h3 className="font-bold text-[#354861]">💑 Gaming Duo Gamertags</h3>
              <p className="mt-1 mb-0">Matching duo tags for Free Fire, PUBG Mobile, BGMI, and Valorant so opponents know you fight together.</p>
            </div>
            <div className="rounded border border-[#e5e7eb] bg-[#f8fafd] p-3">
              <h3 className="font-bold text-[#354861]">📱 Instagram &amp; TikTok Bios</h3>
              <p className="mt-1 mb-0">Celebrate your anniversary, couple page, or shared vlog with romantic initials and interlocking heart badges.</p>
            </div>
            <div className="rounded border border-[#e5e7eb] bg-[#f8fafd] p-3">
              <h3 className="font-bold text-[#354861]">💬 WhatsApp &amp; Discord Status</h3>
              <p className="mt-1 mb-0">Subtle infinity and love charms like ❦ Romeo &amp; Juliet ❦ to customize your contact name and status line.</p>
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
              <h3 className="font-bold text-[#354861] mb-1">What is a love style name?</h3>
              <p className="m-0">A love style name is a decorative handle or display tag featuring romantic characters such as hearts (♡, ❤), roses (🌹), and infinity signs (∞) linking two people&apos;s names.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#354861] mb-1">Do these love symbols work on mobile phones?</h3>
              <p className="m-0">Yes, every symbol is part of the international Unicode standard and displays correctly across iOS, Android, Windows, and macOS.</p>
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
          <Link href="/instagram-girl-attitude-names" className="text-[#2c6da5] hover:underline">Instagram Girls</Link>
          <span>|</span>
          <Link href="/pubg-girl-names" className="text-[#2c6da5] hover:underline">PUBG Girls</Link>
          <span>|</span>
          <Link href="/stylish-text" className="text-[#2c6da5] hover:underline">Stylish Text</Link>
          <span>|</span>
          <Link href="/about" className="text-[#2c6da5] hover:underline">About</Link>
        </div>
      </div>
    </div>
  );
}
