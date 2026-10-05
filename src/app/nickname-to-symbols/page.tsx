import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { NicknameToSymbols } from "@/components/tools/NicknameToSymbols";
import { NickFooter } from "@/components/NickFooter";

export const metadata: Metadata = {
  title: "Nickname to Symbols Converter: 100+ Stylish Name Symbols & Leet Generator",
  description:
    "Convert your plain nickname into cool symbols, leet text, and stylish gaming fonts. Copy crowns, wings, weapon crosshairs, and aesthetic symbols for Free Fire, PUBG, and Instagram.",
  keywords: [
    "nickname to symbols",
    "convert nickname to symbols",
    "name to symbols converter",
    "symbols for nickname",
    "nickname with symbols",
    "stylish symbols for names",
    "free fire nickname symbols",
    "pubg nickname symbols",
    "leet text generator",
    "text to symbols converter",
    "aesthetic name symbols",
    "gaming nickname symbols",
  ],
  alternates: {
    canonical: "https://www.nicknamegenerator.io/nickname-to-symbols",
  },
  openGraph: {
    title: "Nickname to Symbols Converter: 100+ Stylish Name Symbols & Leet Generator",
    description:
      "Convert your plain nickname into cool symbols, leet text, and stylish gaming fonts. 1-click copy.",
    url: "https://www.nicknamegenerator.io/nickname-to-symbols",
    siteName: "Nicknamegenerator.io",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nickname to Symbols Converter: 100+ Stylish Name Symbols & Leet Generator",
    description:
      "Convert your plain nickname into cool symbols, leet text, and stylish gaming fonts. 1-click copy.",
  },
};

const SYMBOLS_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does the Nickname to Symbols Converter work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The converter accepts your plain English nickname and automatically converts each character into corresponding math symbols, Greek letters, runes, and leetspeak glyphs (such as A to 4, Δ, or α). It also frames the converted name in popular gaming brackets like crowns (亗), wings (꧁꧂), and sniper crosshairs (▄︻デ══━一).",
      },
    },
    {
      "@type": "Question",
      name: "Can I use these symbol nicknames in Free Fire and PUBG?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All converted symbols and ornaments are standard Unicode characters recognized by mobile gaming titles including Free Fire, Free Fire MAX, PUBG Mobile, BGMI, Call of Duty Mobile, and Roblox.",
      },
    },
    {
      "@type": "Question",
      name: "Can I insert custom symbols into my nickname?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Our tool includes a clickable Symbol Palette featuring crowns, wings, swords, Japanese kanji, and aesthetic hearts. Click any symbol to insert it directly into your nickname at any position.",
      },
    },
    {
      "@type": "Question",
      name: "What are the most popular symbols for Free Fire nicknames?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most searched Free Fire symbols are the Japanese crown glyph (亗), legendary slayer wings (꧁༺ ༻꧂), samurai cross (メ), thunder bolt (⚡), umbrella (☂️), and Tokyo Ghoul dead face (x͜×).",
      },
    },
    {
      "@type": "Question",
      name: "What is leetspeak (1337) in nicknames?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Leetspeak replaces traditional Latin alphabet letters with visually similar numbers or symbols (such as E with 3, A with 4, T with 7, and S with 5). It allows gamers to claim popular gamertags that have already been registered in plain text.",
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
      name: "Nickname to Symbols",
      item: "https://www.nicknamegenerator.io/nickname-to-symbols",
    },
  ],
};

const RELATED_GENERATORS = [
  { href: "/stylish-text", label: "Stylish Text Symbols", badge: "Tool" },
  { href: "/cool-text", label: "Cool Text Generator", badge: "Fonts" },
  { href: "/freefire", label: "Free Fire Names", badge: "Trending" },
  { href: "/pubg-stylish-name", label: "PUBG Names", badge: "Hot" },
  { href: "/names-mixer", label: "Names Mixer", badge: "Duo" },
  { href: "/grouped-by-symbol", label: "Grouped by Symbol", badge: "Symbols" },
  { href: "/devil-names", label: "Devil Names", badge: "Attitude" },
  { href: "/boss-names", label: "Boss Names", badge: "Mafia" },
];

export default function NicknameToSymbolsPage() {
  return (
    <div className="min-h-screen bg-[#ecf0f5] text-[#333]">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SYMBOLS_FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      {/* Top Header */}
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
          <span className="text-gray-600 font-medium">Nickname to Symbols</span>
        </nav>

        {/* Hero Section */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#00c0ef] p-5">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-2xl">⚡</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#00c0ef] bg-cyan-50 px-2.5 py-0.5 rounded border border-cyan-200">
              Unicode Symbol Converter
            </span>
          </div>
          <h1 className="text-[22px] sm:text-[26px] font-bold text-[#222] m-0 leading-tight">
            Nickname to Symbols Converter: 100+ Stylish Name Symbols &amp; Leet Generator
          </h1>
          <p className="text-xs text-gray-500 font-mono mt-1">
            Free Fire Symbols • PUBG Battle Marks • Leet 1337 Replacements • 1-Click Copy
          </p>
          <div className="mt-3 text-[14px] text-gray-700 leading-relaxed space-y-2">
            <p className="m-0">
              Transform any plain gamertag into a striking visual identity with our free <strong>nickname to symbols converter</strong>. Swap standard letters for rare Greek, mathematical, and runic glyphs, or wrap your name in legendary battle brackets including conqueror crowns (<code>亗</code>), slayer wings (<code>꧁꧂</code>), and weapon scopes (<code>▄︻デ══━一</code>). Click any result to copy instantly.
            </p>
          </div>
        </div>

        {/* Converter Tool Card */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#00c0ef] overflow-hidden">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5 flex items-center justify-between">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">
              Convert Plain Nickname to Symbols &amp; Leet Styles
            </h2>
            <span className="text-[11px] text-[#00a65a] bg-emerald-50 px-2 py-0.5 rounded font-semibold border border-emerald-200">
              Instant Converter
            </span>
          </div>
          <NicknameToSymbols />
        </div>

        {/* Related Generators */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] p-4">
          <h3 className="text-[14px] font-bold text-[#354861] uppercase tracking-wider mb-2.5">
            Related Font &amp; Symbol Generators
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
              How the Nickname to Symbols Converter Works
            </h2>
            <p className="mb-2">
              Every competitive gamer understands the frustration of trying to register a favorite nickname only to find it already claimed. A <strong>nickname to symbols converter</strong> solves this problem by mapping standard Latin alphabet letters (A-Z) to visually similar Unicode mathematical symbols, Greek letters, Cyrillic equivalents, and phonetic notations.
            </p>
            <p>
              By converting &quot;Ninja&quot; into <code>N1nj4</code> or <code>Nιηʝα</code>, your game engine perceives a distinct sequence of Unicode codepoints while other players in the lobby clearly read your intended identity.
            </p>
          </section>

          <section>
            <h2 className="text-[19px] font-bold text-[#222] border-b border-[#eee] pb-2 mb-3">
              Alphabet to Symbols Reference Table (A-Z)
            </h2>
            <p className="mb-3">
              Below is the comprehensive letter-to-symbol substitution dictionary used by professional esports players and top Free Fire / PUBG streamers:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-[#d2d6de] text-xs">
                <thead>
                  <tr className="bg-[#f8fafc] text-[#354861]">
                    <th className="border border-[#d2d6de] p-2 font-bold w-16">Letter</th>
                    <th className="border border-[#d2d6de] p-2 font-bold w-28">Leet (1337)</th>
                    <th className="border border-[#d2d6de] p-2 font-bold">Greek, Math &amp; Unicode Symbols</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { l: "A", leet: "4, @", sym: "Δ, Λ, д, α, Ѧ, ∀, ä, ǟ" },
                    { l: "B", leet: "8", sym: "ß, ɮ, Ɓ, β, ฿, ᵇ, ᗷ" },
                    { l: "C", leet: "(, <", sym: "¢, ©, ç, 匚, ƈ, ς" },
                    { l: "D", leet: ")", sym: "Ð, ɖ, ₫, ∂, ժ, ᗪ" },
                    { l: "E", leet: "3, €", sym: "£, є, э, Σ, ξ, ë" },
                    { l: "F", leet: "|=", sym: "ƒ, բ, ᖴ, ϝ, ք" },
                    { l: "G", leet: "9, 6", sym: "ǥ, ₲, Ꮆ, ց, ဌ" },
                    { l: "H", leet: "#", sym: "н, ɦ, ӈ, ዘ, ɧ, ᕼ" },
                    { l: "I", leet: "1, !", sym: "|, ι, ɨ, ł, ï, ɪ" },
                    { l: "K", leet: "|<", sym: "к, ƙ, Ҡ, ҟ, Ќ" },
                    { l: "L", leet: "1, £", sym: "ℓ, ł, 乚, ι, ᒪ" },
                    { l: "M", leet: "^^", sym: "м, ɱ, 爪, ϻ, ʍ" },
                    { l: "N", leet: "/\\/", sym: "η, ռ, И, П, ո, ɴ" },
                    { l: "O", leet: "0", sym: "ø, Ø, σ, ѳ, ◯, ☯, ö" },
                    { l: "R", leet: "2", sym: "я, ɾ, Ʀ, Я, г, ᖇ" },
                    { l: "S", leet: "5, $", sym: "§, ѕ, ƨ, ⚡, ʂ, ᔕ" },
                    { l: "T", leet: "7, +", sym: "†, т, τ, ‡, ţ, ㄒ" },
                    { l: "X", leet: "><, %", sym: "ж, 乂, ✖, ×, ӿ" },
                    { l: "Z", leet: "2", sym: "ƶ, ʐ, 乙, ʑ, ᘔ" },
                  ].map((row) => (
                    <tr key={row.l} className="hover:bg-[#fbfcfd]">
                      <td className="border border-[#d2d6de] p-2 font-bold text-[#354861]">{row.l}</td>
                      <td className="border border-[#d2d6de] p-2 font-mono text-[#00a65a]">{row.leet}</td>
                      <td className="border border-[#d2d6de] p-2 font-mono text-[#222]">{row.sym}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-[19px] font-bold text-[#222] border-b border-[#eee] pb-2 mb-3">
              Popular Gaming Symbols: Meanings &amp; Usage
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#f8fafc] border border-[#e2e8f0] p-3.5 rounded-[3px]">
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#f39c12] mb-1">
                  1. Japanese Crown Glyphs (亗)
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Pronounced &quot;sui&quot; in Japanese, this ancient radical depicts an imperial crown. In Free Fire and PUBG, it is the universal signature of heroic conquerors and guild leaders.
                </p>
              </div>

              <div className="bg-[#f8fafc] border border-[#e2e8f0] p-3.5 rounded-[3px]">
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#3c8dbc] mb-1">
                  2. Legendary Slayer Wings (꧁ ꧂)
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Originating from Southeast Asian ornate punctuation, wing brackets turn any plain nickname into an elaborate banner that commands immediate attention in the lobby.
                </p>
              </div>

              <div className="bg-[#f8fafc] border border-[#e2e8f0] p-3.5 rounded-[3px]">
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#00a65a] mb-1">
                  3. Sniper Crosshairs (▄︻デ══━一)
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Built using box drawing and border symbols, the sniper rifle symbol signals long-range precision and marksman dominance in Battle Royale matches.
                </p>
              </div>

              <div className="bg-[#f8fafc] border border-[#e2e8f0] p-3.5 rounded-[3px]">
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#e91e63] mb-1">
                  4. Aesthetic Japanese Kanji (メ &amp; 々)
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  The katana slash glyph (メ) and repetition mark (々) are popular among competitive esports players for clean, minimalist, high-skill aesthetics.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-[19px] font-bold text-[#222] border-b border-[#eee] pb-2 mb-3">
              How to Change Your Nickname With Symbols in Games
            </h2>
            <ol className="list-decimal pl-5 space-y-1.5">
              <li>Type your gamertag into the converter input at the top of this page.</li>
              <li>Optionally click any symbol from the <strong>Symbol Palette</strong> to insert crowns or wings.</li>
              <li>Browse the tabs (<strong>Gaming</strong>, <strong>Leet</strong>, <strong>Aesthetic</strong>) to pick your favorite converted style.</li>
              <li>Click <strong>COPY SYMBOL NAME</strong> to save it to your device clipboard.</li>
              <li>Open your game (<strong>Free Fire</strong> &gt; Profile &gt; Edit Nickname, or <strong>PUBG Mobile</strong> &gt; Inventory &gt; Rename Card).</li>
              <li>Paste the converted symbol name and press Confirm.</li>
            </ol>
          </section>
        </article>

        {/* FAQ Section */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] overflow-hidden">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">
              Frequently Asked Questions: Nickname to Symbols
            </h2>
          </div>
          <div className="p-4 sm:p-5 space-y-4">
            {SYMBOLS_FAQ_SCHEMA.mainEntity.map((item, idx) => (
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
