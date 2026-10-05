import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { NickFooter } from "@/components/NickFooter";

export const metadata: Metadata = {
  title: "About Us | Nicknamegenerator.io",
  description:
    "Learn about Nicknamegenerator.io — the premier nickname and username generator launched in 2026 for Free Fire, PUBG, BGMI, Roblox, Valorant, and social media. Free tool trusted by gamers worldwide.",
  alternates: {
    canonical: "https://www.nicknamegenerator.io/about",
  },
  openGraph: {
    title: "About Us | Nicknamegenerator.io",
    description:
      "Learn about Nicknamegenerator.io — the premier nickname and username generator launched in 2026 for Free Fire, PUBG, BGMI, and social media.",
    url: "https://www.nicknamegenerator.io/about",
    siteName: "Nicknamegenerator.io",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Nicknamegenerator.io",
    description:
      "Learn about Nicknamegenerator.io — the premier nickname and username generator launched in 2026.",
  },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.nicknamegenerator.io/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About Us",
      item: "https://www.nicknamegenerator.io/about",
    },
  ],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#ecf0f5] text-[#222]">
      {/* JSON-LD Schema */}
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
          <Link href="/contact" className="text-white hover:text-[#00c0ef]">Contact</Link>
        </nav>
      </header>

      <div className="mx-auto max-w-[900px] px-4 py-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4 text-[13px] text-[#2c6da5] flex items-center gap-1.5">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600 font-medium">About Us</span>
        </nav>

        {/* Main Box */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h1 className="text-[18px] font-semibold text-[#333] m-0">About Nicknamegenerator.io</h1>
          </div>
          <div className="p-5 text-[14px] text-gray-700 leading-relaxed space-y-4">
            <p>
              Welcome to <strong>Nicknamegenerator.io</strong> — the next-generation username generator, nickname creator, and font styler launched in <strong>2026</strong>.
              Featuring millions of curated gamer tags, Unicode font styles, and aesthetic symbols, our platform is engineered from the ground up to give players and content creators immediate, copy-ready identities across any platform.
            </p>
            <p>
              Whether you need a legendary wings gamertag for <strong>Free Fire</strong>, a conqueror crown tag for <strong>PUBG Mobile / BGMI</strong>, a stylish couple name from our <Link href="/names-mixer" className="text-[#2c6da5] hover:underline font-semibold">Names Mixer</Link>, or an aesthetic cursive handle for <strong>Instagram</strong> and <strong>TikTok</strong> — find it here in seconds with 1-click clipboard copying.
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
              For years, gamers looking for cool gamertags were forced to navigate cluttered, ad-ridden legacy websites with slow interfaces and broken Unicode symbols that refused to paste into mobile games.
              We built Nicknamegenerator.io in <strong>2026</strong> to fix that: a clean, lightning-fast, and responsive suite of tools built specifically for modern gamers and social media users worldwide.
              Our tools are rigorously tested on live gaming engines to ensure that every crown, wing, and custom font renders seamlessly inside game clients.
            </p>
          </div>
        </div>

        {/* Trust Signals Box */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#00a65a] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">Why Gamers Choose Nicknamegenerator.io</h2>
          </div>
          <div className="p-5 text-[14px] text-gray-700 leading-relaxed">
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Launched in 2026</strong> — built from scratch with the latest Unicode standards, Next.js performance, and modern responsive design</li>
              <li><strong>In-game verified</strong> — every symbol, wing bracket, and font style is tested to work directly in Free Fire, PUBG, BGMI, Roblox, and Discord</li>
              <li><strong>60+ live font styles</strong> — instantly converts any word into Gothic, Cursive, Small Caps, Double Struck, and weapon-bracketed gamertags</li>
              <li><strong>Multi-language interface</strong> — serving players globally across 12 languages (English, Spanish, French, German, Italian, Portuguese, Hindi, Indonesian, Japanese, Korean, Turkish, and Russian)</li>
              <li><strong>100% free with 1-click copy</strong> — no accounts, no software downloads, and no watermarks</li>
              <li><strong>Privacy focused</strong> — we never harvest or sell your personal data. Read our <Link href="/privacy-policy" className="text-[#2c6da5] hover:underline font-semibold">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {[
            { title: "⚡ Instant Live Styler", desc: "Zero-latency real-time font conversion across 60+ styles." },
            { title: "👑 Rare Symbol Vault", desc: "Crowns, wings, swords, crosshairs, and Japanese kanji glyphs." },
            { title: "🆓 100% Free & Fast", desc: "Unlimited 1-click clipboard copying with zero forced signups." },
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
            <h2 className="text-[17px] font-semibold text-[#333] m-0">Dedicated Tools for Every Game &amp; Platform</h2>
          </div>
          <div className="p-5 text-[14px] text-gray-700 leading-relaxed">
            <p>
              Explore our specialized generators built for specific communities:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3 text-xs">
              <Link href="/freefire" className="p-2 bg-[#f8fafc] border border-[#d2d6de] hover:border-[#3c8dbc] rounded text-center font-semibold text-[#2c6da5]">
                Free Fire Names
              </Link>
              <Link href="/pubg-stylish-name" className="p-2 bg-[#f8fafc] border border-[#d2d6de] hover:border-[#3c8dbc] rounded text-center font-semibold text-[#2c6da5]">
                PUBG Stylish Names
              </Link>
              <Link href="/cute-names" className="p-2 bg-[#f8fafc] border border-[#d2d6de] hover:border-[#3c8dbc] rounded text-center font-semibold text-[#2c6da5]">
                Cute Names
              </Link>
              <Link href="/boss-names" className="p-2 bg-[#f8fafc] border border-[#d2d6de] hover:border-[#3c8dbc] rounded text-center font-semibold text-[#2c6da5]">
                Boss Names
              </Link>
              <Link href="/devil-names" className="p-2 bg-[#f8fafc] border border-[#d2d6de] hover:border-[#3c8dbc] rounded text-center font-semibold text-[#2c6da5]">
                Devil Names
              </Link>
              <Link href="/names-mixer" className="p-2 bg-[#f8fafc] border border-[#d2d6de] hover:border-[#3c8dbc] rounded text-center font-semibold text-[#2c6da5]">
                Names Mixer
              </Link>
              <Link href="/nickname-to-symbols" className="p-2 bg-[#f8fafc] border border-[#d2d6de] hover:border-[#3c8dbc] rounded text-center font-semibold text-[#2c6da5]">
                Nickname to Symbols
              </Link>
              <Link href="/cool-text" className="p-2 bg-[#f8fafc] border border-[#d2d6de] hover:border-[#3c8dbc] rounded text-center font-semibold text-[#2c6da5]">
                Cool Text Generator
              </Link>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#3c8dbc] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">Get in Touch</h2>
          </div>
          <div className="p-5 text-[14px] text-gray-700 leading-relaxed">
            <p>
              Have a suggestion, found a bug, or want to suggest new symbols? We&apos;d love to hear from you.
              Visit our <Link href="/contact" className="text-[#2c6da5] hover:underline font-semibold">Contact Page</Link> to get in touch with our team.
            </p>
          </div>
        </div>
      </div>

      {/* Global Footer */}
      <NickFooter />
    </div>
  );
}
