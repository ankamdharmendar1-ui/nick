import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import TiktokGrid from "@/components/TiktokGrid";
import { NickFooter } from "@/components/NickFooter";

export const metadata: Metadata = {
  title: "Nicknames for TikTok: Broken Heart♡, Dark Angel & Stylish Names",
  description:
    "Username generator for TikTok – stylish names, aesthetic fonts & symbols for boys and girls to copy and use. 60+ cool TikTok nicknames with 1-click copy.",
  keywords: [
    "tiktok stylish names",
    "fancy & stylish tiktok names",
    "tiktok names for boys",
    "tiktok names for girls",
    "aesthetic usernames for tiktok",
    "tiktok name fonts",
    "tiktok username generator",
    "nicknames for tiktok",
    "cool tiktok names",
    "attitude names for tiktok",
    "broken heart tiktok name",
    "dark angel tiktok",
  ],
  alternates: { canonical: "https://www.nicknamegenerator.io/tiktok" },
  openGraph: {
    title: "Nicknames for TikTok: Broken Heart♡, Dark Angel & Stylish Names",
    description:
      "Username generator for TikTok – stylish names, aesthetic fonts & symbols for boys and girls to copy and use. 60+ cool TikTok nicknames with 1-click copy.",
    url: "https://www.nicknamegenerator.io/tiktok",
    siteName: "Nicknamegenerator.io",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicknames for TikTok: Broken Heart♡, Dark Angel & Stylish Names",
    description:
      "Find 60+ stylish TikTok names, aesthetic fonts, attitude bios, and rare symbols with 1-click copy.",
  },
};

const TIKTOK_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I get a stylish nickname for TikTok?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can choose any pre-made nickname from this page or type your name into our instant TikTok name generator box above. Click on any font or aesthetic variation (like Broken Heart♡, Dark Angel, or xVibe) to copy it to your clipboard.",
      },
    },
    {
      "@type": "Question",
      name: "How do I change my display name on TikTok?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "1. Copy your favorite stylish name from Nicknamegenerator.io.\n2. Open TikTok and tap Profile in the bottom right.\n3. Tap 'Edit Profile'.\n4. Tap 'Name' (Display Name).\n5. Paste your copied stylish text and tap 'Save'.",
      },
    },
    {
      "@type": "Question",
      name: "Does TikTok allow symbols and fancy fonts in usernames?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! TikTok supports decorative Unicode fonts, cute hearts (♡), crowns (👑), stars (★), and Japanese/anime symbols in your TikTok Display Name and Bio. Keep in mind that your unique @username handle can only use letters, numbers, underscores, and periods.",
      },
    },
    {
      "@type": "Question",
      name: "Are these TikTok stylish names free to copy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, 100% free with unlimited copying and no registration or app downloads required.",
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
      name: "TikTok Stylish Names",
      item: "https://www.nicknamegenerator.io/tiktok",
    },
  ],
};

const TIKTOK_BIO_TEMPLATES = [
  {
    title: "Aesthetic & Soft Vibe",
    bio: "✦ x 𝕍 𝕚 𝕓 𝕖 ✦\n♡ Living life in pastel colors\n📍 Chasing dreams & coffee ☕\n✨ Welcome to my safe space",
  },
  {
    title: "Attitude & Savage",
    bio: "⚡ N O  N A M E ⚡\n★ Born to express, not impress\n🔥 Silent moves, loud results\n😈 Level up or get left behind",
  },
  {
    title: "Broken Heart & Deep",
    bio: "🥀 𝓑𝓻𝓸𝓴𝓮𝓷 𝓗𝓮𝓪𝓻𝓽 🥀\n✦ Finding peace in the dark\n🌙 Night thinker, day dreamer\n🤍 Unbothered & Unmatched",
  },
  {
    title: "Viral Creator & Trendsetter",
    bio: "👑 J U S T • M E 👑\n🎬 Daily TikTok videos & vibes\n📩 Collabs: DM on Instagram\n✨ Press Follow & Join the Squad!",
  },
];

const RELATED_GENERATORS = [
  { label: "Instagram Nicknames", href: "/instagram" },
  { label: "Instagram Girl Attitude Names", href: "/instagram-girl-attitude-names" },
  { label: "Cool Text Generator", href: "/cool-text" },
  { label: "Stylish Text Generator", href: "/stylish-text" },
  { label: "Names Mixer for Duos", href: "/names-mixer" },
  { label: "Love Style Names", href: "/love-style-name" },
  { label: "Free Fire Nicknames", href: "/freefire" },
  { label: "PUBG Stylish Names", href: "/pubg-stylish-name" },
];

export default function TiktokPage() {
  return (
    <div className="min-h-screen bg-[#ecf0f5] text-[#222]">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(TIKTOK_FAQ_SCHEMA) }}
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
          <Link href="/instagram" className="text-white hover:text-[#00c0ef]">Instagram</Link>
          <Link href="/cool-text" className="text-white hover:text-[#00c0ef]">Cool Text</Link>
        </nav>
      </header>

      <div className="mx-auto max-w-[900px] px-4 py-6">
        {/* Breadcrumb */}
        <div className="mb-4 text-[13px] text-[#2c6da5]">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="text-gray-400 mx-1">/</span>
          <span className="text-gray-600">TikTok Stylish Names</span>
        </div>

        {/* Intro Hero Box */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-6">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h1 className="text-[20px] font-bold text-[#333] m-0">
              TikTok Stylish Names: Fancy Fonts, Aesthetic Symbols &amp; Bio Ideas
            </h1>
          </div>
          <div className="p-4 text-[14px] text-gray-700 leading-relaxed space-y-3">
            <p>
              Looking for the best <strong>TikTok stylish names</strong> for boys and girls? Welcome to the #1 free TikTok username and display name creator.
              Explore 60+ pre-made aesthetic usernames, viral fonts like <em>x𝕍𝕚𝕓𝕖</em>, <em>Broken Heart♡</em>, <em>✦ 𝕯𝖆𝖗𝖐 𝕬𝖓𝖌𝖊𝖑 ✦</em>, and rare symbols (👑, 🥀, 😈, ༊·˚†) with instant 1-click copy.
            </p>
            <p className="text-[13px] text-gray-600">
              You can also type your custom name in the generator box below to transform it into 60+ instant decorative Unicode fonts compatible with TikTok, Instagram, and Discord.
            </p>
          </div>
        </div>

        {/* Live Grid & Custom Styler */}
        <TiktokGrid />

        {/* Bio Templates Section */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] my-6">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">
              📝 Aesthetic TikTok Bio Ideas &amp; Templates
            </h2>
          </div>
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {TIKTOK_BIO_TEMPLATES.map((b) => (
              <div key={b.title} className="rounded border border-[#e5e7eb] bg-[#f8fafd] p-3">
                <h3 className="font-bold text-[#354861] text-[14px] mb-1.5">{b.title}</h3>
                <pre className="text-[13px] text-gray-700 whitespace-pre-wrap font-sans bg-white p-2.5 rounded border border-[#d2d6de] leading-relaxed">
                  {b.bio}
                </pre>
              </div>
            ))}
          </div>
        </div>

        {/* How to Change Name Guide */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-6">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">
              📱 How to Change Your Name on TikTok
            </h2>
          </div>
          <div className="p-4 text-[14px] text-gray-700 leading-relaxed space-y-2">
            <ol className="list-decimal list-inside space-y-2">
              <li>Click on any stylish nickname or generated font on this page to copy it to your clipboard.</li>
              <li>Open the <strong>TikTok app</strong> on your iPhone or Android phone.</li>
              <li>Tap the <strong>Profile</strong> icon in the bottom-right corner.</li>
              <li>Tap <strong>Edit profile</strong>.</li>
              <li>Select <strong>Name</strong> (your Display Name).</li>
              <li>Delete your old name, paste the copied stylish name, and tap <strong>Save</strong>.</li>
            </ol>
            <p className="text-[12px] text-gray-500 mt-3">
              Note: TikTok allows you to change your Display Name once every 7 days. Your display name can contain emojis, symbols, and special Unicode fonts!
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-6">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">
              ❓ Frequently Asked Questions
            </h2>
          </div>
          <div className="p-4 space-y-4 text-[14px]">
            {TIKTOK_FAQ_SCHEMA.mainEntity.map((faq) => (
              <div key={faq.name} className="border-b border-gray-100 pb-3 last:border-b-0 last:pb-0">
                <h3 className="font-semibold text-[#354861] mb-1">{faq.name}</h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line m-0">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Generators Box */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-6">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">
              🔗 Related Generators &amp; Tools
            </h2>
          </div>
          <div className="p-4 flex flex-wrap gap-2">
            {RELATED_GENERATORS.map((rel) => (
              <Link
                key={rel.href}
                href={rel.href}
                className="text-[13px] bg-[#ecf0f5] text-[#2c6da5] px-3 py-1.5 rounded-[3px] hover:bg-[#2c6da5] hover:text-white transition-colors"
              >
                {rel.label}
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
