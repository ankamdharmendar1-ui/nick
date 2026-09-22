import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import NicknameMakerTool from "@/components/NicknameMakerTool";

export const metadata: Metadata = {
  title: "Nickname Maker 🎮 – Generate Unique Nickname Ideas Online",
  description:
    "Free online Nickname Maker. Browse 100+ creative nickname ideas organized by vibe: Gamer, Aesthetic, Badass, Cute, Anime, and Fantasy. Pick an idea, copy it, or style it in 1 click.",
  keywords: [
    "nickname maker", "nickname ideas", "username maker", "create a nickname",
    "online nickname generator", "good nicknames for games", "aesthetic nickname ideas",
  ],
  alternates: { canonical: "https://www.nicknamegenerator.io/nickname-maker" },
  openGraph: {
    title: "Nickname Maker 🎮 – Generate Unique Nickname Ideas Online",
    description: "Browse 100+ creative nickname ideas by vibe. Find the perfect name for gaming, Discord, and social profiles.",
    url: "https://www.nicknamegenerator.io/nickname-maker",
    siteName: "Nicknamegenerator.io",
    type: "website",
  },
};

const RELATED = [
  { label: "Nickname Editor", href: "/nickname-editor" },
  { label: "Stylish Text Generator", href: "/stylish-text" },
  { label: "Free Fire Nicknames", href: "/freefire" },
  { label: "PUBG Names", href: "/pubg-stylish-name" },
  { label: "Love Style Names", href: "/love-style-name" },
  { label: "Names Mixer", href: "/names-mixer" },
];

export default function NicknameMakerPage() {
  return (
    <div className="min-h-screen bg-[#ecf0f5] text-[#222]">
      {/* Header */}
      <header className="bg-[#354861] h-[44px] flex items-center px-4 shadow-md">
        <Link href="/" className="text-white font-light text-[26px] tracking-tight hover:opacity-80">
          Nicknamegenerator<span className="text-[#3c8dbc]">.io</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 text-[13px]">
          <Link href="/" className="text-white hover:text-[#00c0ef]">Home</Link>
          <Link href="/stylish-text" className="text-white hover:text-[#00c0ef]">Stylish Text</Link>
          <Link href="/nickname-editor" className="text-white hover:text-[#00c0ef]">Editor</Link>
        </nav>
      </header>

      <div className="mx-auto max-w-[960px] px-4 py-6">
        {/* Breadcrumb */}
        <div className="mb-4 text-[13px] text-[#2c6da5]">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="text-gray-400 mx-1">/</span>
          <span className="text-gray-600">Nickname Maker</span>
        </div>

        {/* H1 Box */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] p-5 mb-4">
          <h1 className="text-[22px] sm:text-[26px] font-bold text-[#222] m-0 leading-tight">
            Nickname Maker – Find Fresh &amp; Creative Name Ideas 🎮
          </h1>
          <div className="mt-3 text-[14px] text-gray-700 leading-relaxed space-y-2">
            <p className="indent-4 m-0">
              Need fresh name inspiration? While font converters only re-style words you already have, our <strong>Nickname Maker</strong> gives you genuine <strong>nickname ideas</strong> across gaming, aesthetic, badass, cute, anime, and fantasy styles.
            </p>
            <p className="indent-4 m-0">
              Browse categories below, filter by keyword, or click any name to copy it. Want to turn your chosen idea into fancy Unicode lettering? Tap <strong>Style</strong> to immediately convert it!
            </p>
          </div>
        </div>

        {/* Tool */}
        <NicknameMakerTool />

        {/* Brainstorming Tips */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mt-4 mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">How to Create an Unforgettable Gamertag</h2>
          </div>
          <div className="grid gap-3 p-4 sm:grid-cols-3 text-[13px] text-gray-700 leading-relaxed">
            <div className="rounded border border-[#e5e7eb] bg-[#f8fafd] p-3">
              <h3 className="font-bold text-[#354861]">1. Combine Two Elements</h3>
              <p className="mt-1 mb-0">Pair an adjective with a punchy noun: Shadow + Byte, Neon + Rifle, or Velvet + Dream. Two-word names are easy to say on voice chat.</p>
            </div>
            <div className="rounded border border-[#e5e7eb] bg-[#f8fafd] p-3">
              <h3 className="font-bold text-[#354861]">2. Keep It Pronounceable</h3>
              <p className="mt-1 mb-0">Teammates should be able to shout your name in 1 second during intense firefights. Avoid overly cluttered letter strings.</p>
            </div>
            <div className="rounded border border-[#e5e7eb] bg-[#f8fafd] p-3">
              <h3 className="font-bold text-[#354861]">3. Add Symbols Last</h3>
              <p className="mt-1 mb-0">Pick a strong base name first, then head to our <Link href="/nickname-editor" className="text-[#2c6da5] hover:underline">Nickname Editor</Link> to add wings, crowns, or brackets.</p>
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
              <h3 className="font-bold text-[#354861] mb-1">What is the difference between a nickname maker and font styler?</h3>
              <p className="m-0">A nickname maker gives you curated, original words and concepts to inspire your identity. A font styler takes an existing name and renders it in decorative fonts.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#354861] mb-1">Are these nickname ideas free to claim?</h3>
              <p className="m-0">Yes, every idea is free to use across Steam, Discord, Xbox, PlayStation, Roblox, Free Fire, and social networks.</p>
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
          <Link href="/nickname-editor" className="text-[#2c6da5] hover:underline">Editor</Link>
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
