import React from "react";
import Link from "next/link";
import InstagramGrid from "@/components/InstagramGrid";
import { NickFooter } from "@/components/NickFooter";
import { InstagramLangData } from "@/lib/instagramI18n";

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

export default function InstagramPageView({ data }: { data: InstagramLangData }) {
  const homeHref = data.langCode === "en" ? "/" : `/${data.langCode}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `https://www.nicknamegenerator.io${homeHref === "/" ? "" : homeHref}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: data.h1Prefix.replace(":", "").trim(),
        item: `https://www.nicknamegenerator.io/${data.langCode}/instagram`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#ecf0f5] text-[#222]">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header */}
      <header className="bg-[#354861] h-[44px] flex items-center px-4 shadow-md">
        <Link href={homeHref} className="text-white font-light text-[26px] tracking-tight hover:opacity-80">
          Nicknamegenerator<span className="text-[#3c8dbc]">.io</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 text-[13px]">
          <Link href={homeHref} className="text-white hover:text-[#00c0ef]">Home</Link>
          <Link href="/stylish-text" className="text-white hover:text-[#00c0ef]">Stylish Text</Link>
          <Link href="/contact" className="text-white hover:text-[#00c0ef]">Contact</Link>
        </nav>
      </header>

      <div className="mx-auto max-w-[960px] px-4 py-6">
        {/* Breadcrumb */}
        <div className="mb-4 text-[13px] text-[#2c6da5]">
          <Link href={homeHref} className="hover:underline">Home</Link>
          <span className="text-gray-400 mx-1">/</span>
          <span className="text-gray-600">{data.h1Prefix.replace(":", "").trim()}</span>
        </div>

        {/* H1 Main Box */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] p-5 mb-4">
          <h1 className="text-[22px] sm:text-[26px] font-bold text-[#222] m-0 leading-tight">
            {data.h1Prefix}
            <span className="text-[#0055ff] tracking-widest font-mono">A L O N E  B O Y</span>,{" "}
            <span className="italic font-serif">angel_life ❤️</span>
          </h1>
          <div className="mt-3 text-[14px] text-gray-700 leading-relaxed space-y-2">
            <p className="indent-4 m-0">{data.p1}</p>
            <p className="indent-4 m-0">{data.p2}</p>
          </div>
        </div>

        {/* Main Nicknames Grid Box */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5 flex items-center justify-between">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">{data.gridTitle}</h2>
            <span className="text-[11px] text-gray-400 bg-[#f4f4f4] px-2 py-0.5 rounded">
              {data.clickToCopy}
            </span>
          </div>
          <InstagramGrid />
        </div>

        {/* Bio Templates Section */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">{data.bioTitle}</h2>
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
            <h2 className="text-[17px] font-semibold text-[#333] m-0">{data.guideTitle}</h2>
          </div>
          <div className="p-5 text-[14px] text-gray-700 leading-relaxed">
            <ol className="list-decimal list-inside space-y-2 m-0">
              {data.guideSteps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
            <p className="mt-3 text-[12px] text-gray-500 m-0">💡 {data.guideTip}</p>
          </div>
        </div>

        {/* FAQ Box */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">{data.faqTitle}</h2>
          </div>
          <div className="p-5 space-y-4 text-[14px] text-gray-700 leading-relaxed">
            {data.faqs.map((f, idx) => (
              <div key={idx}>
                <h3 className="font-bold text-[#354861] mb-1">{f.q}</h3>
                <p className="m-0">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Links Box */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">{data.relatedTitle}</h2>
          </div>
          <div className="p-4 flex flex-wrap gap-2">
            {[
              { label: "Instagram Girl Attitude Names", href: "/instagram-girl-attitude-names" },
              { label: "Stylish Text Generator", href: "/stylish-text" },
              { label: "Nickname Maker", href: "/nickname-maker" },
              { label: "Love Style Names", href: "/love-style-name" },
              { label: "Free Fire Nicknames", href: "/freefire" },
              { label: "PUBG Stylish Names", href: "/pubg-stylish-name" },
            ].map((r) => (
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
