import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import FacebookGrid from "@/components/FacebookGrid";
import { NickFooter } from "@/components/NickFooter";

export const metadata: Metadata = {
  title: "Facebook Stylish Names: Cool Profile Fonts, VIP Bio and Symbols",
  description:
    "100+ Facebook stylish names, VIP account fonts, and attitude bio nicknames for FB boys & girls. Instant 1-click copy and paste for your Facebook profile.",
  keywords: [
    "facebook stylish names",
    "facebook stylish name",
    "fb stylish name",
    "facebook vip account name",
    "facebook name font style",
    "facebook single name",
    "facebook attitude names",
    "facebook bio stylish fonts",
    "stylish name for fb",
    "facebook profile font generator",
  ],
  alternates: { canonical: "https://www.nicknamegenerator.io/facebook" },
  openGraph: {
    title: "Facebook Stylish Names: Cool Profile Fonts, VIP Bio and Symbols",
    description:
      "100+ Facebook stylish names, VIP account fonts, and attitude bio nicknames for FB boys & girls. Instant 1-click copy and paste for your Facebook profile.",
    url: "https://www.nicknamegenerator.io/facebook",
    siteName: "Nicknamegenerator.io",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Facebook Stylish Names: Cool Profile Fonts, VIP Bio and Symbols",
    description:
      "100+ Facebook stylish names, VIP account fonts, and attitude bio nicknames. 1-click copy & paste.",
  },
};

const FACEBOOK_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I make my Facebook name stylish?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can use our live Facebook Stylish Name Styler above. Type your name, choose from VIP crowns, cursive calligraphy, small caps, or bold gothic fonts, and click copy. Then open your Facebook Settings > Accounts Center > Personal Details > Name and paste your stylish text.",
      },
    },
    {
      "@type": "Question",
      name: "Does Facebook allow stylish fonts and symbols in profile names?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Facebook enforces a strict real-name policy on Primary Account Names, meaning some heavy symbol combinations may be restricted. However, Facebook fully allows stylish fonts and symbols in your 'Other Names / Nicknames' field and Bio section.",
      },
    },
    {
      "@type": "Question",
      name: "How do I add a stylish nickname on Facebook?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "1. Copy your stylish nickname from Nicknamegenerator.io.\n2. Open Facebook and go to your profile.\n3. Tap 'Edit Profile' > scroll down to 'Edit Your About Info'.\n4. Under 'Other Names', tap 'Add Nickname'.\n5. Paste your stylish text and check 'Show at top of profile' to display it next to your name.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Facebook VIP Account bio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Facebook VIP bio is a decorative text layout using Unicode crowns, luxury stars, borders, and attitude quotes that make your personal profile look like a verified VIP or celebrity account.",
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
      name: "Facebook Stylish Names",
      item: "https://www.nicknamegenerator.io/facebook",
    },
  ],
};

const RELATED_GENERATORS = [
  { href: "/instagram", label: "Instagram Fonts", badge: "Hot" },
  { href: "/tiktok", label: "TikTok Stylish Names", badge: "Viral" },
  { href: "/devil-names", label: "Devil Stylish Names", badge: "New" },
  { href: "/freefire", label: "Free Fire Names", badge: "Trending" },
  { href: "/love-style-name", label: "Love Style Names", badge: "Aesthetic" },
  { href: "/stylish-text", label: "Fancy Text Generator", badge: "Tool" },
];

export default function FacebookPage() {
  return (
    <div className="min-h-screen bg-[#ecf0f5] text-[#333]">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FACEBOOK_FAQ_SCHEMA) }}
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
          <span className="text-gray-700 font-medium">Facebook Stylish Names</span>
        </nav>

        {/* Page Header */}
        <header className="bg-white border border-[#d2d6de] rounded-[3px] p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#f4f4f4] pb-4 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl">📘</span>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  Profile VIP Styles & Bios
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#222] tracking-tight">
                Facebook Stylish Names & VIP Profile Font Generator
              </h1>
            </div>
            <div className="text-xs text-gray-500 font-mono">
              Updated October 2026 • 1-Click Copy
            </div>
          </div>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-4xl">
            Create fancy fonts, VIP account tags, attitude nicknames, and aesthetic bio borders for your Facebook profile. Type any name below to convert it into royal crowns, cursive calligraphy, small caps, and Gothic typography with one-click copy and paste.
          </p>
        </header>

        {/* Interactive Grid & Generator */}
        <FacebookGrid />

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
                className="group flex flex-col p-2.5 rounded border border-gray-200 hover:border-[#1877f2] hover:bg-[#eef5fc] transition-colors text-center"
              >
                <span className="text-[13px] font-semibold text-[#222] group-hover:text-[#1877f2] truncate">
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
              How to Create a Facebook VIP Profile in 2026
            </h2>
            <p>
              Having a <strong>Facebook VIP account</strong> is one of the biggest social media trends across South Asia and worldwide. A stylish VIP Facebook profile consists of three key components:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong>VIP Display Nickname:</strong> An enclosed nickname displayed right next to your profile name, styled with crowns (👑) or official badges (『ᴠɪᴘ』).
              </li>
              <li>
                <strong>Aesthetic Bio Section:</strong> Clean decorative symbols, borders, and attitude quotes that describe your personality.
              </li>
              <li>
                <strong>Featured Work & Bio Links:</strong> Custom aesthetic text lines added to your workplace details (e.g. &ldquo;Works at 👑 VIP Official Account 👑&rdquo;).
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-[#222]">
              Facebook Name Policy vs. Nickname Field (Crucial Tip)
            </h2>
            <p>
              Many users encounter errors when trying to change their primary Facebook name directly to fancy text because Facebook&apos;s name standards require characters from a single language alphabet without excessive punctuation.
            </p>
            <div className="p-4 bg-amber-50 border-l-4 border-amber-400 rounded text-amber-900 text-xs leading-relaxed">
              <strong>The Pro Solution:</strong> Instead of changing your primary legal name, add your stylish name to the <strong>&ldquo;Other Names / Nickname&rdquo;</strong> field! When you enable &ldquo;Show at top of profile&rdquo;, Facebook will display your stylish nickname prominently in parentheses right below or beside your real name, completely bypassing name policy restrictions.
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-[#222]">
              Step-by-Step: Adding a Stylish Nickname to Facebook
            </h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <strong>Pick a Style:</strong> Choose or generate your favorite nickname from our generator above and click &ldquo;Copy&rdquo;.
              </li>
              <li>
                <strong>Open Facebook:</strong> Tap your profile picture in the Facebook mobile app or desktop browser.
              </li>
              <li>
                <strong>Edit About Info:</strong> Tap &ldquo;Edit Public Details&rdquo; or &ldquo;Edit Profile&rdquo;, then scroll to the bottom and select &ldquo;Edit Your About Info&rdquo;.
              </li>
              <li>
                <strong>Add Other Name:</strong> Scroll down to the &ldquo;Other Names&rdquo; section and tap &ldquo;Add Nickname&rdquo;.
              </li>
              <li>
                <strong>Paste and Check Box:</strong> Paste your stylish name into the Name field, ensure Name Type is set to &ldquo;Nickname&rdquo;, and check the box labeled <em>&ldquo;Show at top of profile&rdquo;</em>.
              </li>
              <li>
                <strong>Save:</strong> Click Save. Your new stylish nickname is now visible to all profile visitors!
              </li>
            </ol>
          </section>

          {/* FAQ Accordion Section */}
          <section className="space-y-4 pt-4 border-t border-gray-200">
            <h2 className="text-lg md:text-xl font-bold text-[#222]">
              Frequently Asked Questions (FAQs)
            </h2>
            <div className="space-y-3">
              {FACEBOOK_FAQ_SCHEMA.mainEntity.map((faq, idx) => (
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
