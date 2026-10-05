import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import CuteGrid from "@/components/CuteGrid";
import { NickFooter } from "@/components/NickFooter";

export const metadata: Metadata = {
  title: "Cute Stylish Names: Aesthetic Fonts, Kaomoji and Bio Nicknames",
  description:
    "100+ cute stylish names, aesthetic fonts, kaomoji text symbols, and sweet nicknames for Instagram, TikTok, Roblox, and gaming. 1-click copy and paste.",
  keywords: [
    "cute stylish names",
    "cute name style",
    "cute nickname generator",
    "cute fonts for names",
    "kaomoji name generator",
    "aesthetic cute names",
    "cute symbols copy paste",
    "cute names for girls",
    "cute pubg names",
    "soft girl nicknames",
  ],
  alternates: { canonical: "https://www.nicknamegenerator.io/cute-names" },
  openGraph: {
    title: "Cute Stylish Names: Aesthetic Fonts, Kaomoji and Bio Nicknames",
    description:
      "100+ cute stylish names, aesthetic fonts, kaomoji text symbols, and sweet nicknames for Instagram, TikTok, Roblox, and gaming. 1-click copy and paste.",
    url: "https://www.nicknamegenerator.io/cute-names",
    siteName: "Nicknamegenerator.io",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cute Stylish Names: Aesthetic Fonts, Kaomoji and Bio Nicknames",
    description:
      "100+ cute stylish names, aesthetic fonts, kaomoji text symbols, and sweet nicknames. 1-click copy.",
  },
};

const CUTE_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I make my name cute and aesthetic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can use our live Cute Stylish Name Generator above. Type your name, and it will immediately convert it into soft cursive calligraphy, pastel cloud borders, cute hearts (♡, ᥫ᭡), and kaomoji faces like (✿◠‿◠). Click any style to copy it directly.",
      },
    },
    {
      "@type": "Question",
      name: "What are kaomoji text symbols for nicknames?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kaomojis are Japanese-style text emoticons created using Unicode punctuation and symbols (such as ʕ•ᴥ•ʔ, ꒰ᐢ. .ᐢ꒱, and ⊂(・▽・⊂)). Unlike traditional emojis, kaomojis can be read without turning your head sideways and are fully supported on Instagram, TikTok, and Discord.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use cute stylish names in games like Roblox, Free Fire, and PUBG?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Popular gaming tags like ᶜᵘᵗᵉ 𝘗𝘴𝘺𝘤𝘩𝘰 🩸, 🌸 Sakura_Gaming 🌸, and ꧁CUTE•GIRL꧂ use verified Unicode symbols that render smoothly inside Roblox, PUBG Mobile, BGMI, and Free Fire.",
      },
    },
    {
      "@type": "Question",
      name: "How do I add a cute nickname to my Instagram or TikTok bio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "1. Click 'Copy' on any cute name or kaomoji above.\n2. Open Instagram or TikTok and tap 'Edit Profile'.\n3. Tap 'Name' or 'Bio'.\n4. Paste the copied text and tap 'Save'.",
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
      name: "Cute Stylish Names",
      item: "https://www.nicknamegenerator.io/cute-names",
    },
  ],
};

const RELATED_GENERATORS = [
  { href: "/tiktok", label: "TikTok Names", badge: "Viral" },
  { href: "/instagram", label: "Instagram Fonts", badge: "Hot" },
  { href: "/love-style-name", label: "Love Style Names", badge: "Romantic" },
  { href: "/pubg-girl-names", label: "PUBG Girl Names", badge: "Gaming" },
  { href: "/stylish-text", label: "Fancy Text Generator", badge: "Tool" },
  { href: "/devil-names", label: "Devil Names", badge: "Attitude" },
];

export default function CuteNamesPage() {
  return (
    <div className="min-h-screen bg-[#ecf0f5] text-[#333]">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CUTE_FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-xs text-gray-500 flex items-center gap-1.5">
          <Link href="/" className="hover:text-pink-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Cute Stylish Names</span>
        </nav>

        {/* Page Header */}
        <header className="bg-white border border-[#d2d6de] rounded-[3px] p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#f4f4f4] pb-4 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl">🌸</span>
                <span className="text-xs font-bold uppercase tracking-wider text-pink-600 bg-pink-50 px-2 py-0.5 rounded border border-pink-200">
                  Aesthetic &amp; Kaomoji Fonts
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#222] tracking-tight">
                Cute Stylish Names &amp; Aesthetic Font Generator
              </h1>
            </div>
            <div className="text-xs text-gray-500 font-mono">
              Updated October 2026 • 1-Click Copy
            </div>
          </div>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-4xl">
            Explore 100+ cute stylish names, soft girl fonts, kaomoji text faces, and sweet nicknames for Instagram bios, TikTok usernames, Roblox, and gaming. Type your name into our live generator to instantly decorate it with hearts, pastel stars, and cherry blossoms.
          </p>
        </header>

        {/* Interactive Grid & Generator */}
        <CuteGrid />

        {/* Related Generators Bar */}
        <div className="bg-white border border-[#d2d6de] rounded-[3px] p-4 shadow-sm">
          <div className="text-xs font-bold text-[#354861] uppercase tracking-wider mb-3">
            More Popular Nickname Generators
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {RELATED_GENERATORS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col p-2.5 rounded border border-gray-200 hover:border-pink-400 hover:bg-[#fdf2f8] transition-colors text-center"
              >
                <span className="text-[13px] font-semibold text-[#222] group-hover:text-pink-600 truncate">
                  {item.label}
                </span>
                <span className="text-[10px] text-gray-400 mt-0.5">
                  {item.badge}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Comprehensive SEO Content Section */}
        <article className="bg-white border border-[#d2d6de] rounded-[3px] p-6 shadow-sm space-y-6 leading-relaxed text-sm text-[#444]">
          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-[#222]">
              What Makes a Nickname Cute and Aesthetic?
            </h2>
            <p>
              A <strong>cute stylish name</strong> combines delicate Unicode typography (such as cursive script, small caps, and rounded bubble letters) with sweet decorative symbols like hearts (<code>♡</code>, <code>ᥫ᭡</code>), stars (<code>✨</code>, <code>⋆｡°✩</code>), flowers (<code>🌸</code>, <code>✿</code>), and Japanese kaomojis (<code>ʕ•ᴥ•ʔ</code>).
            </p>
            <p>
              On platforms like <strong>TikTok, Instagram, and Discord</strong>, aesthetic names reflect a friendly, soft-girl or playful personality. In competitive games like <strong>Free Fire, PUBG, and Valorant</strong>, the &ldquo;cute killer&rdquo; aesthetic (e.g. <code>ᶜᵘᵗᵉ 𝘗𝘴𝘺𝘤𝘩𝘰 🩸</code> or <code>💖 CUTE KILLER 💖</code>) has become immensely popular as players contrast adorable styling with deadly in-game skills.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-[#222]">
              Top Cute Symbols and Kaomoji Ornaments
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
              <div className="p-3 bg-[#fdf2f8]/40 border border-pink-100 rounded">
                <div className="font-bold text-gray-800 text-xs mb-1">Kaomoji Emoticons</div>
                <div className="font-mono text-pink-600 text-sm">(✿◠‿◠) ʕ•ᴥ•ʔ ꒰ᐢ. .ᐢ꒱</div>
                <div className="text-[11px] text-gray-500 mt-1">Expressive Japanese text faces that stand out in bios.</div>
              </div>
              <div className="p-3 bg-[#fdf2f8]/40 border border-pink-100 rounded">
                <div className="font-bold text-gray-800 text-xs mb-1">Soft Hearts &amp; Ribbons</div>
                <div className="font-mono text-pink-600 text-sm">♡ ᥫ᭡ 💖 🎀 💌</div>
                <div className="text-[11px] text-gray-500 mt-1">Romantic symbols for couple tags and aesthetic handles.</div>
              </div>
              <div className="p-3 bg-[#fdf2f8]/40 border border-pink-100 rounded">
                <div className="font-bold text-gray-800 text-xs mb-1">Pastel Stars &amp; Clouds</div>
                <div className="font-mono text-pink-600 text-sm">☁️ ⋆｡°✩ *ੈ✩‧₊˚ ✨</div>
                <div className="text-[11px] text-gray-500 mt-1">Dreamy cosmic borders for profile descriptions.</div>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-[#222]">
              Cute Bio Ideas for Social Profiles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3 bg-gray-50 border border-gray-200 rounded font-mono text-xs text-gray-700">
                🌸 Sweet like honey • Wild like the sea 🌸<br />
                ☁️ Dreaming with my eyes wide open ☁️
              </div>
              <div className="p-3 bg-gray-50 border border-gray-200 rounded font-mono text-xs text-gray-700">
                ♡ Be a voice, not an echo ♡<br />
                ✨ Creating my own little sunshine ✨
              </div>
              <div className="p-3 bg-gray-50 border border-gray-200 rounded font-mono text-xs text-gray-700">
                ʕ•ᴥ•ʔ Just a cute human enjoying the journey.<br />
                🍓 Strawberry dreams &amp; soft vibes 🍓
              </div>
              <div className="p-3 bg-gray-50 border border-gray-200 rounded font-mono text-xs text-gray-700">
                🎀 Kindness is free, sprinkle it everywhere 🎀<br />
                💖 Living in my own happy fairytale 💖
              </div>
            </div>
          </section>

          {/* FAQ Accordion Section */}
          <section className="space-y-4 pt-4 border-t border-gray-200">
            <h2 className="text-lg md:text-xl font-bold text-[#222]">
              Frequently Asked Questions (FAQs)
            </h2>
            <div className="space-y-3">
              {CUTE_FAQ_SCHEMA.mainEntity.map((faq, idx) => (
                <div key={idx} className="p-3.5 bg-gray-50 border border-gray-200 rounded-[3px]">
                  <h3 className="font-semibold text-[#222] text-sm mb-1">{faq.name}</h3>
                  <p className="text-xs text-gray-600 whitespace-pre-line leading-relaxed">
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </article>
      </div>

      <NickFooter />
    </div>
  );
}
