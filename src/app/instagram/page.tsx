import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import InstagramGrid from "@/components/InstagramGrid";
import { NickFooter } from "@/components/NickFooter";

export const metadata: Metadata = {
  title: "Nicknames for Instagram: A L O N E B O Y, angel_life ❤️ 🏆",
  description:
    "Nicknames for Instagram and username generator. Find 60+ stylish Instagram usernames, aesthetic spaced fonts, attitude bios, and rare symbols with one-click copy.",
  keywords: [
    "nicknames for instagram",
    "instagram username generator",
    "instagram takma adları",
    "nama panggilan untuk instagram",
    "никнеймы для instagram",
    "surnoms pour instagram",
    "spitznamen für instagram",
    "apelidos para instagram",
    "instagram name style",
    "aesthetic instagram names",
    "alone boy instagram name",
    "instagram stylish font",
    "instagram bio styles",
  ],
  alternates: { canonical: "https://www.nicknamegenerator.io/instagram" },
  openGraph: {
    title: "Nicknames for Instagram: A L O N E B O Y, angel_life ❤️ 🏆",
    description:
      "Nicknames for Instagram and username generator. 60+ stylish Instagram usernames, aesthetic spaced fonts, attitude bios, and rare symbols.",
    url: "https://www.nicknamegenerator.io/instagram",
    siteName: "Nicknamegenerator.io",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicknames for Instagram: A L O N E B O Y, angel_life ❤️ 🏆",
    description:
      "Find 60+ stylish Instagram usernames, aesthetic spaced fonts, attitude bios, and rare symbols with one-click copy.",
  },
};

const INSTAGRAM_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I get a stylish nickname for Instagram?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can choose any pre-made nickname from this page or use our Stylish Text Generator to type your name and generate 100+ fancy font styles like spaced text (A L O N E  B O Y), cursive, or gothic with one-click copy.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use symbols and special fonts in my Instagram bio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Instagram fully supports Unicode symbols, hearts (♡), crowns (♕), stars (★), and stylish font alphabets in your display name and bio section.",
      },
    },
    {
      "@type": "Question",
      name: "Are these Instagram nicknames free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, 100% free with unlimited copying and no registration required.",
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
      name: "Nicknames for Instagram",
      item: "https://www.nicknamegenerator.io/instagram",
    },
  ],
};

const RELATED = [
  { label: "Instagram Girl Attitude Names", href: "/instagram-girl-attitude-names" },
  { label: "Stylish Text Generator", href: "/stylish-text" },
  { label: "Nickname Maker", href: "/nickname-maker" },
  { label: "Love Style Names", href: "/love-style-name" },
  { label: "Free Fire Nicknames", href: "/freefire" },
  { label: "PUBG Stylish Names", href: "/pubg-stylish-name" },
  { label: "Cool Text Generator", href: "/cool-text" },
];

const BIO_TEMPLATES = [
  {
    title: "Aesthetic Vibe",
    bio: "꧁ A E S T H E T I C ꧂\n✦ Living in my own world\n♡ Soft heart, strong mind\n📍 Creating my own sunshine ✨",
  },
  {
    title: "Attitude & Savage",
    bio: "⚡ S A V A G E  M O D E ⚡\n★ Self made, self paid\n♡ Zero drama, pure vibes\n🔥 Too real for fake people",
  },
  {
    title: "Dreamer & Traveler",
    bio: "🌙 M O O N C H I L D 🌙\n✦ Chasing sunsets & dreams\n♡ Wanderlust soul\n📸 Documenting little moments",
  },
  {
    title: "Classy & Simple",
    bio: "♡ C L A S S Y ♡\n✦ Simplicity is the ultimate sophistication\n✨ On my own wave\n🤍 Unbothered & Thriving",
  },
];

export default function InstagramPage() {
  return (
    <div className="min-h-screen bg-[#ecf0f5] text-[#222]">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(INSTAGRAM_FAQ_SCHEMA) }}
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
          <Link href="/stylish-text" className="text-white hover:text-[#00c0ef]">Stylish Text</Link>
          <Link href="/contact" className="text-white hover:text-[#00c0ef]">Contact</Link>
        </nav>
      </header>

      <div className="mx-auto max-w-[960px] px-4 py-6">
        {/* Breadcrumb */}
        <div className="mb-4 text-[13px] text-[#2c6da5]">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="text-gray-400 mx-1">/</span>
          <span className="text-gray-600">Nicknames for Instagram</span>
        </div>

        {/* H1 Main Box — Targets Nickfinder exact formula */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] p-5 mb-4">
          <h1 className="text-[22px] sm:text-[26px] font-bold text-[#222] m-0 leading-tight">
            Nicknames for Instagram:{" "}
            <span className="text-[#0055ff] tracking-widest font-mono">A L O N E  B O Y</span>,{" "}
            <span className="italic font-serif">angel_life ❤️</span>
          </h1>
          <div className="mt-3 text-[14px] text-gray-700 leading-relaxed space-y-2">
            <p className="indent-4 m-0">
              The free online <strong>Instagram username generator</strong> on this page helps you create unique, aesthetic, and attitude-driven <strong>nicknames for Instagram</strong>. Browse 60+ copy-ready handles featuring spaced aesthetic fonts, cursive scripts, gothic letters, and symbols.
            </p>
            <p className="indent-4 m-0">
              Simply click any nickname below to instantly copy it to your clipboard. Use our{" "}
              <Link href="/stylish-text" className="text-[#2c6da5] hover:underline">
                Stylish Text Generator
              </Link>{" "}
              to transform your own name into 100+ Instagram font styles.
            </p>
          </div>
        </div>

        {/* Main Nicknames Grid Box */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5 flex items-center justify-between">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">
              Top 60 Nicknames for Instagram 🏆
            </h2>
            <span className="text-[11px] text-gray-400 bg-[#f4f4f4] px-2 py-0.5 rounded">
              Click to copy
            </span>
          </div>
          <InstagramGrid />
        </div>

        {/* Bio Templates Section */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">
              Aesthetic Instagram Bio Ideas &amp; Templates
            </h2>
          </div>
          <div className="grid gap-3 p-4 sm:grid-cols-2 text-[13px] text-gray-700 leading-relaxed">
            {BIO_TEMPLATES.map((b) => (
              <div key={b.title} className="rounded border border-[#e5e7eb] bg-[#f8fafd] p-3">
                <h3 className="font-bold text-[#354861] mb-1.5">{b.title}</h3>
                <pre className="font-sans text-[13px] text-gray-800 whitespace-pre-wrap m-0 bg-white p-2.5 rounded border border-[#e2e8f0]">
                  {b.bio}
                </pre>
              </div>
            ))}
          </div>
        </div>

        {/* How to Change Name Guide */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">
              How to Change Your Instagram Name or Bio
            </h2>
          </div>
          <div className="p-5 text-[14px] text-gray-700 leading-relaxed">
            <ol className="list-decimal list-inside space-y-2 m-0">
              <li>Open the <strong>Instagram</strong> app and navigate to your <strong>Profile</strong>.</li>
              <li>Tap <strong>Edit Profile</strong>.</li>
              <li>Click any nickname or bio template from this page to copy it.</li>
              <li>Paste it into the <strong>Name</strong> or <strong>Bio</strong> field.</li>
              <li>Tap the checkmark (✓) or <strong>Done</strong> in the top-right corner to save.</li>
            </ol>
            <p className="mt-3 text-[12px] text-gray-500 m-0">
              💡 Tip: Instagram allows stylish Unicode fonts in the &ldquo;Name&rdquo; and &ldquo;Bio&rdquo; fields. If you want a custom username handle (@handle), keep it alphanumeric with dots or underscores.
            </p>
          </div>
        </div>

        {/* FAQ Box */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">Frequently Asked Questions</h2>
          </div>
          <div className="p-5 space-y-4 text-[14px] text-gray-700 leading-relaxed">
            <div>
              <h3 className="font-bold text-[#354861] mb-1">
                How do I get a stylish nickname for Instagram?
              </h3>
              <p className="m-0">
                You can choose any pre-made nickname from this page or use our{" "}
                <Link href="/stylish-text" className="text-[#2c6da5] hover:underline">
                  Stylish Text Generator
                </Link>{" "}
                to type your name and generate 100+ fancy font styles like spaced text (A L O N E  B O Y), cursive, or gothic.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[#354861] mb-1">
                Can I use symbols and special fonts in my Instagram bio?
              </h3>
              <p className="m-0">
                Yes! Instagram fully supports Unicode symbols, hearts (♡), crowns (♕), stars (★), and stylish font alphabets in your display name and bio section.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[#354861] mb-1">
                Are these Instagram nicknames free to use?
              </h3>
              <p className="m-0">
                Yes, 100% free with unlimited copying and no registration required.
              </p>
            </div>
          </div>
        </div>

        {/* Related Links Box */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">Related Generators &amp; Styles</h2>
          </div>
          <div className="p-4 flex flex-wrap gap-2">
            {RELATED.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="text-[13px] text-[#2c6da5] border border-[#d2d6de] px-3 py-1.5 rounded-[20px] hover:bg-[#3c8dbc] hover:text-white hover:border-[#3c8dbc] transition-colors"
              >
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
