import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import DevilGrid from "@/components/DevilGrid";
import { NickFooter } from "@/components/NickFooter";

export const metadata: Metadata = {
  title: "Devil Stylish Names: Cool Demon Fonts and Badass Nicknames",
  description:
    "100+ devil stylish names and evil fonts for Free Fire, PUBG, Instagram, and TikTok. Copy and paste devil gamer tags, demon wings, and attitude nicknames.",
  keywords: [
    "devil stylish names",
    "devil stylish name",
    "devil name style",
    "demon stylish names",
    "devil nicknames for free fire",
    "devil pubg names",
    "devil font style",
    "evil stylish names",
    "badass devil names",
    "devil name for instagram bio",
  ],
  alternates: { canonical: "https://www.nicknamegenerator.io/devil-names" },
  openGraph: {
    title: "Devil Stylish Names: Cool Demon Fonts and Badass Nicknames",
    description:
      "100+ devil stylish names and evil fonts for Free Fire, PUBG, Instagram, and TikTok. Copy and paste devil gamer tags, demon wings, and attitude nicknames.",
    url: "https://www.nicknamegenerator.io/devil-names",
    siteName: "Nicknamegenerator.io",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devil Stylish Names: Cool Demon Fonts and Badass Nicknames",
    description:
      "100+ devil stylish names and evil fonts for Free Fire, PUBG, Instagram, and TikTok. 1-click copy & paste.",
  },
};

const DEVIL_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I create a devil stylish name with symbols?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can select any curated devil nickname from our list or type your custom name into our live Devil Name Generator above. It combines dark Gothic Fraktur fonts with demon horns, angel/demon wings, sniper crosshairs, and skull ornaments ready to copy in one click.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use devil stylish names in Free Fire and PUBG Mobile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Most battle royale games like Garena Free Fire, PUBG Mobile, and BGMI support Unicode symbols like ꧁༺ ༻꧂, 亗, 𒆜, and Gothic text. For Free Fire, ensure your full nickname is within the 12-character limit.",
      },
    },
    {
      "@type": "Question",
      name: "How do I change my nickname to a devil style in Free Fire?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "1. Copy your favorite devil nickname from Nicknamegenerator.io.\n2. Open Free Fire and tap your profile banner in the top-left corner.\n3. Tap the yellow edit icon next to your current nickname.\n4. Paste the copied devil name into the 'New Nickname' field.\n5. Confirm using 390 diamonds or a Name Change Card.",
      },
    },
    {
      "@type": "Question",
      name: "Does Instagram support devil names in bio and display name?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Instagram fully supports Gothic Fraktur, cursive fonts, and evil emoji symbols like 😈, 🖤, and ☠️ in your profile Name and Bio sections.",
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
      name: "Devil Stylish Names",
      item: "https://www.nicknamegenerator.io/devil-names",
    },
  ],
};

const RELATED_GENERATORS = [
  { href: "/freefire", label: "Free Fire Names", badge: "Trending" },
  { href: "/pubg-stylish-name", label: "PUBG Stylish Names", badge: "Hot" },
  { href: "/tiktok", label: "TikTok Stylish Names", badge: "Viral" },
  { href: "/instagram", label: "Instagram Bio Fonts", badge: "Popular" },
  { href: "/love-style-name", label: "Love Style Names", badge: "Aesthetic" },
  { href: "/stylish-text", label: "Fancy Text Generator", badge: "Tool" },
];

export default function DevilNamesPage() {
  return (
    <div className="min-h-screen bg-[#ecf0f5] text-[#333]">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(DEVIL_FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-xs text-gray-500 flex items-center gap-1.5">
          <Link href="/" className="hover:text-[#3c8dbc] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Devil Stylish Names</span>
        </nav>

        {/* Page Header */}
        <header className="bg-white border border-[#d2d6de] rounded-[3px] p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#f4f4f4] pb-4 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl">😈</span>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                  Badass Gaming & Attitude
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#222] tracking-tight">
                Devil Stylish Names & Demon Font Generator
              </h1>
            </div>
            <div className="text-xs text-gray-500 font-mono">
              Updated October 2026 • 1-Click Copy
            </div>
          </div>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-4xl">
            Explore 100+ badass devil stylish names, demon fonts, evil gaming tags, and dark aesthetic nicknames for Free Fire, PUBG Mobile, BGMI, TikTok, and Instagram. Type your name into our live generator to instantly generate demonic wings, horns, skulls, and Gothic Fraktur styles.
          </p>
        </header>

        {/* Interactive Grid & Generator */}
        <DevilGrid />

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
                className="group flex flex-col p-2.5 rounded border border-gray-200 hover:border-[#3c8dbc] hover:bg-[#eef5fc] transition-colors text-center"
              >
                <span className="text-[13px] font-semibold text-[#222] group-hover:text-[#3c8dbc] truncate">
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
              Why Are Devil Stylish Names So Popular in Gaming?
            </h2>
            <p>
              In competitive battle royale games like <strong>Free Fire, PUBG Mobile, BGMI, and Call of Duty: Mobile</strong>, your nickname is your identity on the battlefield. Devil and demon-themed nicknames convey aggression, fearless attitude, dominance, and pro-level skills. Players who choose devil tags like <code>꧁༺ᎠᎬᏙᏆᏞ༻꧂</code>, <code>亗 DEVIL 亗</code>, or <code>𒆜𝕯𝖊𝖛𝖎𝖑𒆜</code> stand out instantly on kill feeds and leaderboard banners.
            </p>
            <p>
              Beyond gaming, devil stylish fonts have become a huge trend on social platforms like <strong>Instagram and TikTok</strong>, where users incorporate dark aesthetic fonts and evil emojis (😈, 🖤, ☠️) into their bio descriptions and usernames to project confidence and rebellious attitude.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-[#222]">
              Popular Symbols and Unicode Ornaments for Devil Names
            </h2>
            <p>
              To create an authentic devil aesthetic, our generator utilizes carefully curated Unicode characters that render smoothly across Android, iOS, Windows, and gaming engines:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
              <div className="p-3 bg-[#f9fafb] border border-gray-200 rounded">
                <div className="font-bold text-gray-800 text-xs mb-1">Demon Horns & Skulls</div>
                <div className="font-mono text-rose-600 text-sm">😈 ☠️ 💀 ⸸ ⚚</div>
                <div className="text-[11px] text-gray-500 mt-1">Conveys dark and lethal aggression.</div>
              </div>
              <div className="p-3 bg-[#f9fafb] border border-gray-200 rounded">
                <div className="font-bold text-gray-800 text-xs mb-1">Wings & Frames</div>
                <div className="font-mono text-rose-600 text-sm">꧁༺ ༻꧂ ◥ᖫ ᖭ◤ 亗</div>
                <div className="text-[11px] text-gray-500 mt-1">Gives a royal demon aura on leaderboards.</div>
              </div>
              <div className="p-3 bg-[#f9fafb] border border-gray-200 rounded">
                <div className="font-bold text-gray-800 text-xs mb-1">Weapons & Daggers</div>
                <div className="font-mono text-rose-600 text-sm">▄︻デ═一 ⚔️ 🗡️ †</div>
                <div className="text-[11px] text-gray-500 mt-1">Perfect for snipers and clutch rushers.</div>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-[#222]">
              How to Change Your Name in Free Fire & PUBG Mobile
            </h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <strong>Copy Your Name:</strong> Click the &ldquo;Copy&rdquo; button on any devil name above.
              </li>
              <li>
                <strong>Open Your Game:</strong> Launch Garena Free Fire or PUBG Mobile and head to your user profile page.
              </li>
              <li>
                <strong>Access Name Editor:</strong> Tap the edit/pencil icon next to your current in-game name (IGN).
              </li>
              <li>
                <strong>Paste and Verify:</strong> Long press on the text input field, select &ldquo;Paste&rdquo;, and make sure the name does not exceed the character limit (Free Fire allows up to 12 characters; PUBG allows up to 14 characters).
              </li>
              <li>
                <strong>Confirm:</strong> Use your Name Change Card or in-game currency to lock in your new devil gamer tag.
              </li>
            </ol>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-[#222]">
              Devil Bio Ideas for Instagram and TikTok
            </h2>
            <p>
              Looking for matching attitude captions for your profile bio? Here are some top devil-inspired bio quotes you can copy and customize:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3 bg-gray-50 border border-gray-200 rounded font-mono text-xs text-gray-700">
                😈 I am not bad, I am worst for bad people. 🖤<br />
                👑 Devil by Nature • King by Attitude 👑
              </div>
              <div className="p-3 bg-gray-50 border border-gray-200 rounded font-mono text-xs text-gray-700">
                ×͜× Don&apos;t play with me, I am the Devil itself. ×͜x<br />
                ⸸ Dark Soul with a Golden Heart ⸸
              </div>
              <div className="p-3 bg-gray-50 border border-gray-200 rounded font-mono text-xs text-gray-700">
                𒆜 Born to Rule, not to follow. 𒆜<br />
                ☠️ Silence is the best reply to an enemy. ☠️
              </div>
              <div className="p-3 bg-gray-50 border border-gray-200 rounded font-mono text-xs text-gray-700">
                ♡ Sweet as Sugar • Cold as Ice ♡<br />
                😈 Hurt me once, I will destroy you twice. 😈
              </div>
            </div>
          </section>

          {/* FAQ Accordion Section */}
          <section className="space-y-4 pt-4 border-t border-gray-200">
            <h2 className="text-lg md:text-xl font-bold text-[#222]">
              Frequently Asked Questions (FAQs)
            </h2>
            <div className="space-y-3">
              {DEVIL_FAQ_SCHEMA.mainEntity.map((faq, idx) => (
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
