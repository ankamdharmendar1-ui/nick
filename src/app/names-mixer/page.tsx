import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { DuoCombiner } from "@/components/DuoCombiner";
import { NickFooter } from "@/components/NickFooter";

export const metadata: Metadata = {
  title: "Names Mixer: Couple Name Generator & Matching Duo Nicknames",
  description:
    "Free names mixer and couple name generator. Combine two names into matching stylish duo nicknames, ship mashups, and aesthetic gamertags for Free Fire, PUBG, Instagram, and Discord.",
  keywords: [
    "names mixer",
    "name mixer",
    "couple name generator",
    "couple name mixer",
    "matching names for couples",
    "duo names for free fire",
    "gaming duo names",
    "couple nickname generator",
    "ship name generator",
    "matching usernames for couples",
    "bff matching names",
    "pubg duo names",
  ],
  alternates: {
    canonical: "https://www.nicknamegenerator.io/names-mixer",
  },
  openGraph: {
    title: "Names Mixer: Couple Name Generator & Matching Duo Nicknames",
    description:
      "Combine two names into matching stylish duo nicknames, ship mashups, and aesthetic gamertags. 1-click copy.",
    url: "https://www.nicknamegenerator.io/names-mixer",
    siteName: "Nicknamegenerator.io",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Names Mixer: Couple Name Generator & Matching Duo Nicknames",
    description:
      "Combine two names into matching stylish duo nicknames, ship mashups, and aesthetic gamertags. 1-click copy.",
  },
};

const MIXER_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a names mixer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A names mixer is an online tool that combines two names (such as couple names, gaming duo partners, or best friends) into matching stylish nickname pairs or blended ship names. Each duo pair shares identical aesthetic frames, crown symbols, or wing brackets so both profiles look coordinated.",
      },
    },
    {
      "@type": "Question",
      name: "How do I make matching couple names?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enter Player 1's name and Player 2's name into the input boxes above. The names mixer instantly generates 24+ matching duo pairs across gaming, romance, aesthetic, and mashup styles. Click 'Copy Both as Duo' or copy individual names with the P1/P2 buttons.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use these duo names in Free Fire and PUBG?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All generated duo nicknames use standard Unicode symbols such as wings (꧁꧂), royal crowns (亗), Japanese crosshairs (メ), and aesthetic hearts (♡, ᥫ᭡). These characters are fully compatible with Free Fire, PUBG Mobile, BGMI, Valorant, and Discord.",
      },
    },
    {
      "@type": "Question",
      name: "What is a ship name mashup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A ship name mashup blends syllables from two individual names into one unified couple tag (like 'Brangelina' or 'Bennifer'). Our mixer provides multiple blending algorithms (front-half + back-half, reverse mashups, and royal brackets) so you can find the perfect romantic ship nickname.",
      },
    },
    {
      "@type": "Question",
      name: "What are the best matching duo names for gaming?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Top gaming duo styles include Slayer Wings (꧁༺King༻꧂ & ꧁༺Queen༻꧂), Royal Apex (亗 『Shadow』 亗 & 亗 『Light』 亗), Tokyo Ghoul (x͜× Toxic ×͜x & x͜× Poison ×͜x), and Thunder Strike (⚡『Alpha』⚡ & ⚡『Omega』⚡).",
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
      item: "https://www.nicknamegenerator.io/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Names Mixer",
      item: "https://www.nicknamegenerator.io/names-mixer",
    },
  ],
};

const RELATED_GENERATORS = [
  { href: "/freefire", label: "Free Fire Names", badge: "Trending" },
  { href: "/pubg-stylish-name", label: "PUBG Names", badge: "Hot" },
  { href: "/cute-names", label: "Cute Names", badge: "Soft" },
  { href: "/boss-names", label: "Boss Names", badge: "Attitude" },
  { href: "/devil-names", label: "Devil Names", badge: "Dark" },
  { href: "/love-style-name", label: "Love Names", badge: "Couples" },
  { href: "/stylish-text", label: "Stylish Text", badge: "Tool" },
  { href: "/instagram", label: "Instagram Bio", badge: "Social" },
];

export default function NamesMixerPage() {
  return (
    <div className="min-h-screen bg-[#ecf0f5] text-[#333]">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(MIXER_FAQ_SCHEMA) }}
      />
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
        </nav>
      </header>

      <div className="mx-auto max-w-[960px] px-4 py-6 space-y-4">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-[13px] text-[#2c6da5] flex items-center gap-1.5">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600 font-medium">Names Mixer</span>
        </nav>

        {/* Hero Section */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#e91e63] p-5">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-2xl">💑</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#e91e63] bg-pink-50 px-2.5 py-0.5 rounded border border-pink-200">
              Couple &amp; Duo Combiner
            </span>
          </div>
          <h1 className="text-[22px] sm:text-[26px] font-bold text-[#222] m-0 leading-tight">
            Names Mixer: Couple Name Generator &amp; Matching Duo Nicknames
          </h1>
          <p className="text-xs text-gray-500 font-mono mt-1">
            Free Fire Duos • PUBG Battle Duos • Matching Instagram Bios • 1-Click Copy
          </p>
          <div className="mt-3 text-[14px] text-gray-700 leading-relaxed space-y-2">
            <p className="m-0">
              Create perfectly coordinated duo nicknames and blended ship names with our free <strong>names mixer</strong>. Whether you and your partner want matching couple names for Instagram, coordinated battle tags for <strong>Free Fire</strong> and <strong>PUBG Mobile</strong>, or cute nicknames for Discord, enter both names below to generate 24+ matching duo designs instantly.
            </p>
          </div>
        </div>

        {/* Mixer Tool Card */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#e91e63] overflow-hidden">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5 flex items-center justify-between">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">
              Matching Duo Nickname Combiner
            </h2>
            <span className="text-[11px] text-pink-600 bg-pink-50 px-2 py-0.5 rounded font-semibold border border-pink-200">
              24+ Styles Available
            </span>
          </div>
          <DuoCombiner />
        </div>

        {/* Related Generators */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] p-4">
          <h3 className="text-[14px] font-bold text-[#354861] uppercase tracking-wider mb-2.5">
            Related Nickname &amp; Font Tools
          </h3>
          <div className="flex flex-wrap gap-2">
            {RELATED_GENERATORS.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#f8fafc] hover:bg-[#eef4fb] border border-[#d2d6de] hover:border-[#3c8dbc] rounded-[3px] text-xs font-semibold text-[#2c6da5] transition-all"
              >
                <span>{tool.label}</span>
                <span className="text-[10px] px-1 py-0.2 bg-white border border-[#ccd0d5] text-gray-500 rounded font-normal">
                  {tool.badge}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* In-Depth On-Page SEO Guide */}
        <article className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] p-6 space-y-6 text-[#444] text-[14px] leading-relaxed">
          <section>
            <h2 className="text-[19px] font-bold text-[#222] border-b border-[#eee] pb-2 mb-3">
              How the Names Mixer Works: Blending &amp; Matching Duos
            </h2>
            <p className="mb-2">
              A <strong>names mixer</strong> is a specialized utility that solves a common challenge for couples, gaming partners, and squad mates: how to create two distinct gamertags that clearly belong together. Instead of having one player named &quot;DarkRider&quot; and the other &quot;Princess99&quot;, a duo combiner enforces symmetry through identical Unicode bracket frames, font transforms, and complementary motifs.
            </p>
            <p>
              Our generator works on two distinct principles:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5">
              <li>
                <strong>Symmetrical Frame Matching:</strong> Wraps both names in twin decorative brackets like <code>꧁༺Player1༻꧂</code> and <code>꧁༺Player2༻꧂</code>, or crown marks like <code>亗 『Player1』 亗</code> and <code>亗 『Player2』 亗</code>.
              </li>
              <li>
                <strong>Linguistic Ship Mashups:</strong> Combines syllables and prefixes from both names (e.g., Alex + Emma = Alexma, Emmalex) to produce celebrity-style relationship ship tags.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-[19px] font-bold text-[#222] border-b border-[#eee] pb-2 mb-3">
              Best Matching Duo Nicknames for Free Fire &amp; PUBG Mobile
            </h2>
            <p className="mb-2">
              In competitive battle royale games like <strong>Free Fire (FF)</strong>, <strong>PUBG Mobile</strong>, and <strong>BGMI</strong>, matching duo nicknames establish instant squad authority in the spawn island and kill feed. When enemies see twin tags like <code>メ Shadow メ</code> and <code>メ Light メ</code> appear simultaneously on the elimination feed, it shows coordinated team chemistry.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
              <div className="bg-[#f8fafc] border border-[#e2e8f0] p-3 rounded-[3px]">
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#f39c12] mb-1">
                  Gaming Duo Theme 1: Conqueror Crowns (亗)
                </h3>
                <p className="text-xs text-gray-600 mb-2">
                  The Japanese crown glyph is the most popular symbol in Free Fire and PUBG duo ranks:
                </p>
                <div className="bg-white border border-[#ccd0d5] p-2 rounded text-xs font-mono font-bold text-[#333]">
                  亗 『ALPHA』 亗 &amp; 亗 『OMEGA』 亗
                </div>
              </div>

              <div className="bg-[#f8fafc] border border-[#e2e8f0] p-3 rounded-[3px]">
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#3c8dbc] mb-1">
                  Gaming Duo Theme 2: Slayer Wings (꧁꧂)
                </h3>
                <p className="text-xs text-gray-600 mb-2">
                  Legendary wing brackets deliver the classic tryhard aesthetic:
                </p>
                <div className="bg-white border border-[#ccd0d5] p-2 rounded text-xs font-mono font-bold text-[#333]">
                  ꧁༺HUNTER༻꧂ &amp; ꧁༺TARGET༻꧂
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-[19px] font-bold text-[#222] border-b border-[#eee] pb-2 mb-3">
              Romantic Couple Nicknames for Instagram, TikTok &amp; Discord
            </h2>
            <p className="mb-2">
              For social media bios and Discord couple matching, softer aesthetic fonts and emotional motifs take center stage. Popular pairing themes include:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong>Celestial Duos:</strong> Sun &amp; Moon (<code>Sun • Name ☀️</code> &amp; <code>Moon • Name 🌙</code>) symbolizing light and night.
              </li>
              <li>
                <strong>Elemental Contrasts:</strong> Fire &amp; Ice (<code>🔥 Fire • Name</code> &amp; <code>❄️ Ice • Name</code>) celebrating opposite personalities that complete each other.
              </li>
              <li>
                <strong>Heart Accents:</strong> Using rare aesthetic glyphs like the cursive heart <code>♡ ᥫ᭡</code> and cherry blossom flowers <code>✿ ࿐</code>.
              </li>
              <li>
                <strong>Mine &amp; Yours:</strong> Lock and key concepts (<code>🔒 Her King</code> &amp; <code>🗝️ His Queen</code>).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-[19px] font-bold text-[#222] border-b border-[#eee] pb-2 mb-3">
              Step-by-Step: How to Change Your Duo Name in Games
            </h2>
            <ol className="list-decimal pl-5 space-y-1.5">
              <li>Enter your name in <strong>Player 1</strong> and your partner&apos;s name in <strong>Player 2</strong>.</li>
              <li>Browse the <strong>Gaming</strong> or <strong>Couples</strong> category tabs to choose your desired symmetry.</li>
              <li>Click <strong>Copy Both as Duo</strong> to store both names in clipboard, or copy <strong>P1</strong> and <strong>P2</strong> individually.</li>
              <li>Open <strong>Free Fire</strong> &gt; Profile &gt; Tap edit icon on nickname &gt; Paste and confirm (costs 390 diamonds or 1 Name Change Card).</li>
              <li>Open <strong>PUBG Mobile</strong> &gt; Inventory &gt; Tap Rename Card &gt; Paste your matching tag and save.</li>
            </ol>
          </section>
        </article>

        {/* FAQ Section */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] overflow-hidden">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">
              Frequently Asked Questions About Names Mixer
            </h2>
          </div>
          <div className="p-4 sm:p-5 space-y-4">
            {MIXER_FAQ_SCHEMA.mainEntity.map((item, idx) => (
              <div key={idx} className="border-b border-[#f4f4f4] pb-3 last:border-b-0 last:pb-0">
                <h3 className="text-[14px] font-bold text-[#354861] m-0 mb-1">
                  {item.name}
                </h3>
                <p className="text-[13px] text-gray-600 m-0 leading-relaxed">
                  {item.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <NickFooter />
    </div>
  );
}
