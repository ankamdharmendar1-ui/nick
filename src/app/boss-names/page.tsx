import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import BossGrid from "@/components/BossGrid";
import { NickFooter } from "@/components/NickFooter";

export const metadata: Metadata = {
  title: "Boss Stylish Names: Cool Attitude Fonts, Crown Symbols and Generator",
  description:
    "100+ boss stylish names, crown symbols 亗, mafia fonts, and attitude nicknames for Free Fire, PUBG Mobile, Instagram, and TikTok. 1-click copy.",
  keywords: [
    "boss stylish names",
    "boss stylish fonts",
    "stylish boss name",
    "boss font generator",
    "boss name for pubg",
    "boss attitude names",
    "vip boss fonts",
    "boss names for free fire",
    "boss name style",
    "lady boss stylish name",
  ],
  alternates: { canonical: "https://www.nicknamegenerator.io/boss-names" },
  openGraph: {
    title: "Boss Stylish Names: Cool Attitude Fonts, Crown Symbols and Generator",
    description:
      "100+ boss stylish names, crown symbols 亗, mafia fonts, and attitude nicknames for Free Fire, PUBG Mobile, Instagram, and TikTok. 1-click copy.",
    url: "https://www.nicknamegenerator.io/boss-names",
    siteName: "Nicknamegenerator.io",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boss Stylish Names: Cool Attitude Fonts, Crown Symbols and Generator",
    description:
      "100+ boss stylish names, crown symbols 亗, mafia fonts, and attitude nicknames. 1-click copy.",
  },
};

const BOSS_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I create a boss stylish name with crown symbols?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can use our live Boss Name & Attitude Styler above. Type your gamertag or nickname, and it will immediately generate styles with Japanese Conqueror crowns (亗『NAME』亗), royal VIP badges (👑 『ᴠɪᴘ』NAME 👑), and mafia crosshairs ready to copy in one click.",
      },
    },
    {
      "@type": "Question",
      name: "What are the most popular symbols for boss nicknames in Free Fire and PUBG?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The top symbols for boss names are the Japanese crown (亗), royal crowns (👑), official VIP brackets (『ᴠɪᴘ』), verified gaming V-badges (Ⓥ), crosshairs (▄︻デ══━一), and Japanese clan markers (メ).",
      },
    },
    {
      "@type": "Question",
      name: "How do I change my nickname to a boss style in game?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "1. Click 'Copy' on your favorite boss nickname above.\n2. Open Free Fire, PUBG Mobile, or BGMI.\n3. Open your profile and tap the Rename icon or use a Rename Card.\n4. Paste the boss nickname into the name field and confirm.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use boss attitude fonts on Instagram and Facebook bios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all boss fonts and Unicode brackets render cleanly on Instagram display names, TikTok handles, and Facebook VIP profile bios without distortion.",
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
      name: "Boss Stylish Names",
      item: "https://www.nicknamegenerator.io/boss-names",
    },
  ],
};

const RELATED_GENERATORS = [
  { href: "/pubg-stylish-name", label: "PUBG Names", badge: "Conqueror" },
  { href: "/freefire", label: "Free Fire Names", badge: "Trending" },
  { href: "/devil-names", label: "Devil Names", badge: "Badass" },
  { href: "/facebook", label: "Facebook VIP Names", badge: "VIP" },
  { href: "/free-fire-guild-name", label: "Guild Clan Names", badge: "Squad" },
  { href: "/stylish-text", label: "Fancy Text Generator", badge: "Tool" },
];

export default function BossNamesPage() {
  return (
    <div className="min-h-screen bg-[#ecf0f5] text-[#333]">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BOSS_FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-xs text-gray-500 flex items-center gap-1.5">
          <Link href="/" className="hover:text-[#2c3e50] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Boss Stylish Names</span>
        </nav>

        {/* Page Header */}
        <header className="bg-white border border-[#d2d6de] rounded-[3px] p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#f4f4f4] pb-4 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl">👑</span>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Attitude &amp; Crown Fonts
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#222] tracking-tight">
                Boss Stylish Names &amp; Attitude Font Generator
              </h1>
            </div>
            <div className="text-xs text-gray-500 font-mono">
              Updated October 2026 • 1-Click Copy
            </div>
          </div>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-4xl">
            Command respect with 100+ boss stylish names, Japanese Conqueror crowns (亗), mafia syndicate fonts, and attitude nicknames for PUBG Mobile, Free Fire, BGMI, and Instagram. Type any name below to generate custom VIP boss gamertags instantly.
          </p>
        </header>

        {/* Interactive Grid & Generator */}
        <BossGrid />

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
                className="group flex flex-col p-2.5 rounded border border-gray-200 hover:border-[#2c3e50] hover:bg-[#f4f7f9] transition-colors text-center"
              >
                <span className="text-[13px] font-semibold text-[#222] group-hover:text-[#2c3e50] truncate">
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
              Why Boss Names Stand Out in Battle Royale Games
            </h2>
            <p>
              In competitive multiplayer games like <strong>PUBG Mobile, BGMI, and Free Fire</strong>, players who lead squads or play aggressive rusher roles often adopt <strong>boss stylish names</strong> like <code>亗『BOSS』亗</code>, <code>Sᴋ᭄Sᴀʙɪʀᴮᴼˢˢ</code>, or <code>👑 THE BOSS 👑</code>. A boss moniker signals confidence, leadership, and fearless gunplay on leaderboard rankings.
            </p>
            <p>
              Additionally, on social platforms like <strong>Instagram, TikTok, and Facebook</strong>, boss attitude names project independence, entrepreneurial spirit, and personal brand authority (popularized by trends like &ldquo;Lady Boss&rdquo; and &ldquo;Mafia Sarkar&rdquo;).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-[#222]">
              Popular Symbols and Ornaments for Boss Names
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
              <div className="p-3 bg-[#f8f9fa] border border-gray-200 rounded">
                <div className="font-bold text-gray-800 text-xs mb-1">Crowns &amp; Conqueror</div>
                <div className="font-mono text-amber-700 text-sm">亗 👑 『ᴠɪᴘ』 Ⓥ</div>
                <div className="text-[11px] text-gray-500 mt-1">Gives supreme leader and verified VIP status.</div>
              </div>
              <div className="p-3 bg-[#f8f9fa] border border-gray-200 rounded">
                <div className="font-bold text-gray-800 text-xs mb-1">Mafia &amp; Badges</div>
                <div className="font-mono text-amber-700 text-sm">𒆜 ◤ ◢ 【 𝕏 】 ░B░O░S░S░</div>
                <div className="text-[11px] text-gray-500 mt-1">Bold framing for squad captains and clan leaders.</div>
              </div>
              <div className="p-3 bg-[#f8f9fa] border border-gray-200 rounded">
                <div className="font-bold text-gray-800 text-xs mb-1">Weapons &amp; Marks</div>
                <div className="font-mono text-amber-700 text-sm">▄︻デ══━一 メ ⚡ ☠️</div>
                <div className="text-[11px] text-gray-500 mt-1">Aggressive tags for high-kill clutch players.</div>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-[#222]">
              Boss Attitude Bio Quotes for Social Media
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3 bg-gray-50 border border-gray-200 rounded font-mono text-xs text-gray-700">
                👑 I am not a boss, I am the Boss. 👑<br />
                亗 Rule your own empire or be ruled. 亗
              </div>
              <div className="p-3 bg-gray-50 border border-gray-200 rounded font-mono text-xs text-gray-700">
                𒆜 Silence is my attitude, success is my noise. 𒆜<br />
                🔥 Born to express, not to impress. 🔥
              </div>
              <div className="p-3 bg-gray-50 border border-gray-200 rounded font-mono text-xs text-gray-700">
                『ᴠɪᴘ』 Don&apos;t follow the crowd, lead it. 『ᴠɪᴘ』<br />
                ☠️ Forgive, but never forget the disrespect. ☠️
              </div>
              <div className="p-3 bg-gray-50 border border-gray-200 rounded font-mono text-xs text-gray-700">
                👑 Lady Boss with a savage mind 👑<br />
                ★ Classy, sassy, and a bit bad-assy ★
              </div>
            </div>
          </section>

          {/* FAQ Accordion Section */}
          <section className="space-y-4 pt-4 border-t border-gray-200">
            <h2 className="text-lg md:text-xl font-bold text-[#222]">
              Frequently Asked Questions (FAQs)
            </h2>
            <div className="space-y-3">
              {BOSS_FAQ_SCHEMA.mainEntity.map((faq, idx) => (
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
