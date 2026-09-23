import React from "react";
import Link from "next/link";

export const metadata = {
  title: "About Us | Nicknamegenerator.io",
  description: "Learn about Nicknamegenerator.io — the most popular nickname and username generator for Free Fire, PUBG, BGMI, Roblox, Valorant, and social media.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#ecf0f5] text-[#222]">
      {/* Header */}
      <header className="bg-[#354861] h-[44px] flex items-center px-4 shadow-md">
        <Link href="/" className="text-white font-light text-[26px] tracking-tight hover:opacity-80">
          Nicknamegenerator<span className="text-[#3c8dbc]">.io</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 text-[13px]">
          <Link href="/" className="text-white hover:text-[#00c0ef]">Home</Link>
          <Link href="/contact" className="text-white hover:text-[#00c0ef]">Contact</Link>
        </nav>
      </header>

      <div className="mx-auto max-w-[900px] px-4 py-6">
        {/* Breadcrumb */}
        <div className="mb-4 text-[13px] text-[#2c6da5]">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="text-gray-400 mx-1">/</span>
          <span className="text-gray-600">About Us</span>
        </div>

        {/* Main Box */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h1 className="text-[18px] font-semibold text-[#333] m-0">About Nicknamegenerator.io</h1>
          </div>
          <div className="p-5 text-[14px] text-gray-700 leading-relaxed space-y-4">
            <p>
              Welcome to <strong>Nicknamegenerator.io</strong> — the most popular username generator and nickname finder on the web.
              Over 20 million usernames and name ideas, searchable, copyable, and ready to use on any platform.
              Whether you need a creative handle for social media, a unique gamertag, or a professional username for any online service — find it here in seconds.
            </p>
            <p>
              Type a name or keyword into the search bar to generate username ideas instantly. Browse trending names in "Popularity trends" and "Recent nicknames",
              or explore the side menu for stylish text tools, symbol generators, and more.
            </p>
          </div>
        </div>

        {/* Mission Box */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">Our Mission</h2>
          </div>
          <div className="p-5 text-[14px] text-gray-700 leading-relaxed">
            <p>
              For years, gamers looking for cool gamertags were forced to browse cluttered, ad-ridden websites with broken layouts.
              We built Nicknamegenerator.io to fix that: a clean, fast, and responsive tool built specifically for modern gamers and social media users worldwide.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {[
            { title: "⚡ Instant Styler", desc: "Zero lag typing with 60+ real-time Unicode font conversions." },
            { title: "✨ Rare Symbol Vault", desc: "Curated gaming weapons, crowns, wings, and anime kanji." },
            { title: "🆓 100% Free", desc: "Unlimited copies with zero signups or software downloads." },
          ].map((f) => (
            <div key={f.title} className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] p-4 text-center">
              <div className="font-bold text-[#354861] text-[14px] mb-1">{f.title}</div>
              <div className="text-[12px] text-gray-500">{f.desc}</div>
            </div>
          ))}
        </div>

        {/* Games Box */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">Built for Gamers Across All Titles</h2>
          </div>
          <div className="p-5 text-[14px] text-gray-700 leading-relaxed">
            <p>
              Whether you need a legendary wings nickname for <Link href="/freefire" className="text-[#2c6da5] hover:underline">Free Fire</Link>,
              a conqueror font for <Link href="/pubg-stylish-name" className="text-[#2c6da5] hover:underline">PUBG</Link>/<Link href="/pubg-stylish-name" className="text-[#2c6da5] hover:underline">BGMI</Link>,
              a sleek duelist tag for <Link href="/stylish-text" className="text-[#2c6da5] hover:underline">Valorant</Link>,
              or a cute username for <Link href="/pubg-girl-names" className="text-[#2c6da5] hover:underline">Roblox</Link> and <Link href="/nickname-maker" className="text-[#2c6da5] hover:underline">Discord</Link> — Nicknamegenerator.io has you covered.
            </p>
          </div>
        </div>

        {/* Footer links */}
        <div className="text-center text-[12px] text-gray-500 mt-6 space-x-3">
          <Link href="/" className="text-[#2c6da5] hover:underline">Home</Link>
          <span>|</span>
          <Link href="/contact" className="text-[#2c6da5] hover:underline">Contact</Link>
          <span>|</span>
          <Link href="/terms" className="text-[#2c6da5] hover:underline">Terms of Use</Link>
          <span>|</span>
          <Link href="/privacy-policy" className="text-[#2c6da5] hover:underline">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}
