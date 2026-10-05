import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import CoolTextGrid from "@/components/CoolTextGrid";
import { NickFooter } from "@/components/NickFooter";

export const metadata: Metadata = {
  title: "Cool Text Generator: 60+ Cool Fonts, Fancy Letters & Symbols to Copy",
  description:
    "Free cool text generator and fancy font maker. Convert plain text into 60+ cool fonts, cursive calligraphy, gothic letters, and symbols for Free Fire, PUBG, Instagram bios, and TikTok.",
  keywords: [
    "cool text generator",
    "cool fonts copy paste",
    "cool text maker",
    "cool font generator",
    "cool letters",
    "fancy text generator",
    "cool fonts for pubg",
    "cool text fonts for free fire",
    "stylish text generator",
    "aesthetic fonts copy paste",
    "cursive text generator",
    "gothic text generator",
  ],
  alternates: {
    canonical: "https://www.nicknamegenerator.io/cool-text",
  },
  openGraph: {
    title: "Cool Text Generator: 60+ Cool Fonts, Fancy Letters & Symbols to Copy",
    description:
      "Convert plain text into 60+ cool fonts, cursive calligraphy, gothic letters, and symbols for Free Fire, PUBG, Instagram bios, and TikTok. 1-click copy.",
    url: "https://www.nicknamegenerator.io/cool-text",
    siteName: "Nicknamegenerator.io",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cool Text Generator: 60+ Cool Fonts, Fancy Letters & Symbols to Copy",
    description:
      "Convert plain text into 60+ cool fonts, cursive calligraphy, gothic letters, and symbols. 1-click copy.",
  },
};

const COOL_TEXT_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does the Cool Text Generator work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Cool Text Generator converts normal keyboard characters into special Unicode glyphs located in the Mathematical Alphanumeric Symbols and Enclosed Alphanumerics blocks. Because these characters are standard Unicode, they can be copied and pasted anywhere without downloading custom fonts or installing software.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use cool text in Free Fire, PUBG, and mobile games?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Popular mobile battle royale titles like Free Fire, Free Fire MAX, PUBG Mobile, and BGMI fully support Unicode text styles including Bold Sans, Cursive Script, Small Caps, and Gothic Fraktur.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use these cool fonts on Instagram and TikTok?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Social media platforms like Instagram, TikTok, Twitter (X), Facebook, and Discord natively display Unicode font styles in bios, captions, and usernames.",
      },
    },
    {
      "@type": "Question",
      name: "What is Zalgo or Glitch text?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zalgo text (also known as glitch or corrupted text) stacks multiple Unicode combining diacritical marks above, through, and below standard letters. It creates an eerie, corrupted aesthetic popular among horror fans and edgy gamer handles.",
      },
    },
    {
      "@type": "Question",
      name: "Is this cool text generator completely free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our cool text generator is 100% free with unlimited conversions. There is no registration, watermarking, or daily limit. Simply type your text, choose a style, and click to copy.",
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
      name: "Cool Text Generator",
      item: "https://www.nicknamegenerator.io/cool-text",
    },
  ],
};

const RELATED_GENERATORS = [
  { href: "/stylish-text", label: "Stylish Text Symbols", badge: "Tool" },
  { href: "/nickname-to-symbols", label: "Nickname to Symbols", badge: "Symbols" },
  { href: "/freefire", label: "Free Fire Names", badge: "Trending" },
  { href: "/pubg-stylish-name", label: "PUBG Names", badge: "Hot" },
  { href: "/names-mixer", label: "Names Mixer", badge: "Duo" },
  { href: "/ff-name-style", label: "FF Name Style", badge: "Game" },
  { href: "/instagram", label: "Instagram Fonts", badge: "Social" },
  { href: "/tiktok", label: "TikTok Names", badge: "Viral" },
];

export default function CoolTextPage() {
  return (
    <div className="min-h-screen bg-[#ecf0f5] text-[#333]">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(COOL_TEXT_FAQ_SCHEMA) }}
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
          <span className="text-gray-600 font-medium">Cool Text Generator</span>
        </nav>

        {/* Hero Section */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#00a65a] p-5">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-2xl">✨</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#00a65a] bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
              Cool Fonts &amp; Letters Maker
            </span>
          </div>
          <h1 className="text-[22px] sm:text-[26px] font-bold text-[#222] m-0 leading-tight">
            Cool Text Generator: 60+ Cool Fonts, Fancy Letters &amp; Symbols to Copy
          </h1>
          <p className="text-xs text-gray-500 font-mono mt-1">
            Gothic Fraktur • Cursive Script • Small Caps • Double Struck • 1-Click Copy
          </p>
          <div className="mt-3 text-[14px] text-gray-700 leading-relaxed space-y-2">
            <p className="m-0">
              Welcome to the ultimate free <strong>cool text generator</strong>. Transform any word, name, or message into 60+ distinctive font styles and decorative symbols in real time. Whether you need cool gamer tags for <strong>Free Fire</strong> and <strong>PUBG</strong>, aesthetic cursive fonts for your <strong>Instagram bio</strong>, or bold letters for <strong>TikTok</strong>, choose a style below and copy it with 1 click.
            </p>
          </div>
        </div>

        {/* Converter Tool Card */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#00a65a] overflow-hidden">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5 flex items-center justify-between">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">
              Live Cool Text &amp; Font Generator
            </h2>
            <span className="text-[11px] text-[#00a65a] bg-emerald-50 px-2 py-0.5 rounded font-semibold border border-emerald-200">
              60+ Styles Active
            </span>
          </div>
          <CoolTextGrid />
        </div>

        {/* Related Generators */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] p-4">
          <h3 className="text-[14px] font-bold text-[#354861] uppercase tracking-wider mb-2.5">
            Related Font &amp; Nickname Tools
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
              What Is a Cool Text Generator and How Does It Work?
            </h2>
            <p className="mb-2">
              Unlike traditional document word processors that require you to install custom <code>.ttf</code> or <code>.otf</code> font files on your device, a <strong>cool text generator</strong> leverages the universal <strong>Unicode Standard</strong>.
            </p>
            <p>
              The Unicode consortium allocates thousands of unique codepoints for specialized alphabetic variations originally created for mathematical, linguistic, and historical notations. When our generator processes your text, it substitutes basic ASCII characters (like <code>a</code>) with their corresponding Unicode equivalents—such as <code>𝔞</code> (Fraktur), <code>𝒶</code> (Script), <code>𝕒</code> (Double Struck), or <code>ᴀ</code> (Small Caps). Because every modern smartphone and browser supports Unicode natively, your text renders identically on Android, iOS, Windows, Mac, and Linux.
            </p>
          </section>

          <section>
            <h2 className="text-[19px] font-bold text-[#222] border-b border-[#eee] pb-2 mb-3">
              Popular Cool Font Styles &amp; How to Use Them
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#f8fafc] border border-[#e2e8f0] p-3.5 rounded-[3px]">
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#354861] mb-1">
                  1. Fraktur &amp; Gothic (𝕱𝖔𝖓𝖙)
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-2">
                  Medieval Germanic blackletter calligraphy. Delivers a dark, intimidating aesthetic ideal for clan tags, rap artist handles, and dark aesthetic bios.
                </p>
                <div className="bg-white border border-[#ccd0d5] p-2 rounded text-xs font-mono font-bold text-[#222]">
                  𝕾𝖍𝖆𝖉𝖔𝖜 𝕶𝖓𝖎𝖌𝖍𝖙
                </div>
              </div>

              <div className="bg-[#f8fafc] border border-[#e2e8f0] p-3.5 rounded-[3px]">
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#e91e63] mb-1">
                  2. Cursive &amp; Script (𝒮𝓉𝓎𝓁ℯ)
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-2">
                  Soft, elegant handwriting and calligraphy glyphs. Perfect for aesthetic Instagram bios, romantic quotes, and cute nicknames.
                </p>
                <div className="bg-white border border-[#ccd0d5] p-2 rounded text-xs font-mono font-bold text-[#e91e63]">
                  𝒫𝓇𝒾𝓃𝒸ℯ𝓈𝓈 𝒟𝒾𝒶𝓇𝓎
                </div>
              </div>

              <div className="bg-[#f8fafc] border border-[#e2e8f0] p-3.5 rounded-[3px]">
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#00a65a] mb-1">
                  3. Small Capitals (sᴍᴀʟʟ ᴄᴀᴘs)
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-2">
                  Uppercase letterforms scaled to the height of lowercase letters. Clean, modern, highly legible, and preferred by top TikTok creators.
                </p>
                <div className="bg-white border border-[#ccd0d5] p-2 rounded text-xs font-mono font-bold text-[#00a65a]">
                  ᴀᴇsᴛʜᴇᴛɪᴄ ᴠɪʙᴇs
                </div>
              </div>

              <div className="bg-[#f8fafc] border border-[#e2e8f0] p-3.5 rounded-[3px]">
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#f39c12] mb-1">
                  4. Double Struck (𝔹𝕝𝕒𝕔𝕜𝕓𝕠𝕒𝕣𝕕)
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-2">
                  Hollow, double-lined mathematical blackboard bold characters. Stands out boldly in crowded comment sections and chat feeds.
                </p>
                <div className="bg-white border border-[#ccd0d5] p-2 rounded text-xs font-mono font-bold text-[#f39c12]">
                  𝕃𝔼𝔾𝔼ℕ𝔻𝔸ℝ𝕐
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-[19px] font-bold text-[#222] border-b border-[#eee] pb-2 mb-3">
              Where Can You Copy &amp; Paste Cool Text?
            </h2>
            <p className="mb-2">
              Every font generated on this page is 100% copy-paste ready for:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Mobile Games:</strong> Free Fire, Free Fire MAX, PUBG Mobile, BGMI, Call of Duty Mobile, Roblox, Brawl Stars.</li>
              <li><strong>Social Media Bios &amp; Usernames:</strong> Instagram, TikTok, Twitter / X, Facebook, Threads, Pinterest.</li>
              <li><strong>Messaging Platforms:</strong> Discord server nicknames, Telegram usernames, WhatsApp status and group names.</li>
              <li><strong>Gaming Communities:</strong> Steam profile names, Twitch chat, YouTube channel handles and video titles.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[19px] font-bold text-[#222] border-b border-[#eee] pb-2 mb-3">
              Tips for Best Cool Text Readability
            </h2>
            <ol className="list-decimal pl-5 space-y-1.5">
              <li><strong>Keep it legible:</strong> While styles like Zalgo and Gothic Fraktur look impressive, use cleaner styles like Small Caps or Bold Sans if you want other players to quickly read your gamertag in competitive matches.</li>
              <li><strong>Combine with symbols:</strong> Enhance your favorite cool font with complementary symbols like crowns (<code>亗</code>), wings (<code>꧁꧂</code>), or swords (<code>メ</code>) using our quick-insert palette above.</li>
              <li><strong>Check character limits:</strong> In games like Free Fire (12-character limit) and PUBG (14-character limit), keep your base name under 8-10 letters to leave room for decorative Unicode brackets.</li>
            </ol>
          </section>
        </article>

        {/* FAQ Section */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] overflow-hidden">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">
              Frequently Asked Questions About Cool Text
            </h2>
          </div>
          <div className="p-4 sm:p-5 space-y-4">
            {COOL_TEXT_FAQ_SCHEMA.mainEntity.map((item, idx) => (
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
