import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import FreefireGrid from "@/components/FreefireGrid";
import { NickFooter } from "@/components/NickFooter";

export const metadata: Metadata = {
  title: "Free Fire Names in Style: Cool Fonts & V-Badge Ⓥ Q U E E N ᶠᶠ 🏆",
  description:
    "Find stylish Free Fire nicknames with rare V-Badge (Ⓥ), legendary wings, and crowns. 50+ copy-ready FF name styles for your Garena Free Fire ID.",
  keywords: [
    "free fire names in style",
    "free fire nicknames",
    "ff v badge copy",
    "v badge symbol",
    "ff stylish name",
    "freefire stylish names",
    "ff nickname generator",
    "free fire username",
    "freefire fonts",
    "garena free fire nickname",
    "free fire name symbols",
    "ff name copy paste",
    "free fire gamertag",
  ],
  alternates: { canonical: "https://www.nicknamegenerator.io/freefire" },
  openGraph: {
    title: "Free Fire Names in Style: Cool Fonts & V-Badge Ⓥ Q U E E N ᶠᶠ 🏆",
    description: "Browse 50+ stylish Free Fire nicknames and FF name ideas with V-Badge (Ⓥ), crowns, wings & 1-click copy.",
    url: "https://www.nicknamegenerator.io/freefire",
    siteName: "Nicknamegenerator.io",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Fire Names in Style: Cool Fonts & V-Badge Ⓥ Q U E E N ᶠᶠ 🏆",
    description: "50+ stylish Free Fire nicknames with V-Badge (Ⓥ), crowns, wings & 1-click copy.",
  },
};

const FREEFIRE_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I get the V-Badge (Ⓥ) symbol in my Free Fire name?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Official V-Badges are given to Garena Partner Program creators, but you can copy the Unicode V-Badge symbol (Ⓥ or 🅥) from our Free Fire V-Badge Vault above and paste it directly into your Free Fire nickname or bio for free.",
      },
    },
    {
      "@type": "Question",
      name: "What are the most popular stylish Free Fire nickname symbols?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most popular FF symbols are Legendary Wings (꧁༺...༻꧂), Crowns (亗 and 👑), Crosses (†), the V-Badge (Ⓥ), Japanese Kanji (メ), and thunder bolts (⚡).",
      },
    },
    {
      "@type": "Question",
      name: "How do I change my nickname in Free Fire?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "1. Click any nickname or V-badge above to copy it.\n2. Open Garena Free Fire and tap your profile banner in the top-left corner.\n3. Tap the yellow edit/pencil icon next to your name.\n4. Paste the copied name into the text box.\n5. Confirm using 390 diamonds or a Name Change Card.",
      },
    },
    {
      "@type": "Question",
      name: "Are these stylish Free Fire nicknames safe from bans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All symbols and font decorations on Nicknamegenerator.io use valid Unicode characters fully supported by the Free Fire game client. They comply with game rules and will not cause account bans.",
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
      name: "Free Fire Nicknames",
      item: "https://www.nicknamegenerator.io/freefire",
    },
  ],
};

const RELATED = [
  { label: "Free Fire Guild Names", href: "/free-fire-guild-name" },
  { label: "FF Name Style", href: "/ff-name-style" },
  { label: "TikTok Stylish Names", href: "/tiktok" },
  { label: "PUBG Stylish Names", href: "/pubg-stylish-name" },
  { label: "PUBG Girl Names", href: "/pubg-girl-names" },
  { label: "Stylish Text Generator", href: "/stylish-text" },
  { label: "Nickname Maker", href: "/nickname-maker" },
  { label: "Symbol Generator", href: "/nickname-to-symbols" },
];

export default function FreefirePage() {
  return (
    <div className="min-h-screen bg-[#ecf0f5] text-[#222]">
      {/* Structured Data Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FREEFIRE_FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      <header className="bg-[#354861] h-[44px] flex items-center px-4 shadow-md">
        <Link href="/" className="text-white font-light text-[26px] tracking-tight hover:opacity-80">
          Nicknamegenerator<span className="text-[#3c8dbc]">.io</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 text-[13px]">
          <Link href="/" className="text-white hover:text-[#00c0ef]">Home</Link>
          <Link href="/tiktok" className="text-white hover:text-[#00c0ef]">TikTok</Link>
          <Link href="/stylish-text" className="text-white hover:text-[#00c0ef]">Stylish Text</Link>
          <Link href="/contact" className="text-white hover:text-[#00c0ef]">Contact</Link>
        </nav>
      </header>

      <div className="mx-auto max-w-[960px] px-4 py-6">
        <div className="mb-4 text-[13px] text-[#2c6da5]">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="text-gray-400 mx-1">/</span>
          <span className="text-gray-600">Free Fire Nicknames &amp; V-Badge</span>
        </div>

        {/* Hero Title Box */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] p-5 mb-4">
          <h1 className="text-[22px] sm:text-[26px] font-bold text-[#222] m-0 leading-tight">
            Free Fire Names in Style: Cool Fonts, Rare Symbols &amp; V-Badges 🏆
          </h1>
          <div className="mt-3 text-[14px] text-gray-700 leading-relaxed space-y-2">
            <p className="m-0">
              Upgrade your <strong>Garena Free Fire ID</strong> with elite stylish text fonts, official verified <strong>V-Badges (Ⓥ &amp; 🅥)</strong>, legendary wings (꧁༒꧂), crowns (亗), and aggressive battle symbols.
              Whether you need a pro gamertag for Solo Rank, a legendary squad identity, or a verified V-Badge profile, copy hundreds of styles in 1 click.
            </p>
          </div>
        </div>

        {/* Upgraded FreefireGrid with V-Badge Vault + Custom Styler */}
        <div className="mb-6">
          <FreefireGrid />
        </div>

        {/* Free Fire V-Badge Guide */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#ffe082] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5 flex items-center gap-2">
            <span className="text-[16px]">Ⓥ</span>
            <h2 className="text-[17px] font-semibold text-[#333] m-0">What is the Free Fire V-Badge and How to Use It?</h2>
          </div>
          <div className="p-5 text-[14px] text-gray-700 leading-relaxed space-y-3">
            <p>
              In Free Fire, the <strong>V-Badge (Verified Badge)</strong> is the ultimate badge of honor given to verified tournament esports players and content creators in the Garena Partner Program.
              Players who do not have the in-game partner status can use Unicode verified symbols like <strong>Ⓥ</strong> and <strong>🅥</strong> in their nickname, clan tag, and bio.
            </p>
            <div className="bg-[#fff9e6] p-3 rounded border border-[#ffe082] text-[13px]">
              <strong>💡 Pro Tip for V-Badge Names:</strong> Copy <code>Ⓥ</code> from our vault and place it in front of your name (e.g. <code>Ⓥ ᴛʜᴜɴᴅᴇʀ ⚡</code> or <code>Ⓥ Q U E E N ᶠᶠ</code>) for an authentic esports influencer look.
            </div>
          </div>
        </div>

        {/* Popular FF Name Categories Breakdown */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">Popular Free Fire Name Styles</h2>
          </div>
          <div className="grid gap-3 p-4 sm:grid-cols-3 text-[13px] text-gray-700 leading-relaxed">
            <div className="rounded border border-[#e5e7eb] bg-[#f8fafd] p-3">
              <h3 className="font-bold text-[#354861] m-0 mb-1">Ⓥ V-Badge &amp; Creator</h3>
              <p className="m-0 text-gray-600">The verified circle symbol placed before player tags, like Ⓥ MR BOSS YT or 🅥 𝘛𝘩𝘶𝘯𝘥𝘦𝘳 ⚡.</p>
            </div>
            <div className="rounded border border-[#e5e7eb] bg-[#f8fafd] p-3">
              <h3 className="font-bold text-[#354861] m-0 mb-1">Crown &amp; King Names</h3>
              <p className="m-0 text-gray-600">Royal crowns (亗, ♛, 👑) designed for top guild masters and aggressive rusher roles.</p>
            </div>
            <div className="rounded border border-[#e5e7eb] bg-[#f8fafd] p-3">
              <h3 className="font-bold text-[#354861] m-0 mb-1">Legendary Wings</h3>
              <p className="m-0 text-gray-600">Double wing ornaments (꧁༺...༻꧂) that give a commanding, symmetrical esports look.</p>
            </div>
          </div>
        </div>

        {/* Step-by-Step Name Change Guide */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">How to Change Your Free Fire Nickname</h2>
          </div>
          <div className="p-5 text-[14px] text-gray-700 leading-relaxed">
            <ol className="list-decimal list-inside space-y-2 m-0">
              <li>Click any nickname or V-badge on this page to copy it instantly.</li>
              <li>Open <strong>Free Fire</strong> on your mobile device and tap your <strong>Profile Banner</strong> in the top-left.</li>
              <li>Tap the <strong>yellow pencil icon</strong> right next to your nickname.</li>
              <li>Paste the copied stylish name into the text box.</li>
              <li>Confirm your change using <strong>390 diamonds</strong> or a free <strong>Name Change Card</strong> from guild rewards.</li>
            </ol>
          </div>
        </div>

        {/* Frequently Asked Questions with Schema */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">Frequently Asked Questions</h2>
          </div>
          <div className="p-5 space-y-4 text-[14px] text-gray-700 leading-relaxed">
            {FREEFIRE_FAQ_SCHEMA.mainEntity.map((faq) => (
              <div key={faq.name} className="border-b border-gray-100 pb-3 last:border-b-0 last:pb-0">
                <h3 className="font-bold text-[#354861] mb-1">{faq.name}</h3>
                <p className="text-gray-600 m-0 whitespace-pre-line">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Nickname Generators */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">Related Nickname Generators</h2>
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

      </div>

      {/* Global Footer */}
      <NickFooter />
    </div>
  );
}
