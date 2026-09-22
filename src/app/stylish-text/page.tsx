import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import StylishTextTool from "@/components/StylishTextTool";

export const metadata: Metadata = {
  title: "Stylish Name & Fancy Text Generator – Online Name Writing in 100+ Fonts",
  description:
    "Free online stylish name writing and fancy text generator. Convert normal text into 100+ stylish name writing fonts, symbols, and cool gamertags with one-click copy.",
  keywords: [
    "name writing", "stylish name writing", "name writing style", "stylish name generator", "fancy text generator", "cool font generator",
    "stylish text symbols", "nickname font converter", "unicode font generator",
    "stylish name for free fire", "fancy text copy paste", "cool text generator",
  ],
  alternates: { canonical: "https://www.nicknamegenerator.io/stylish-text" },
  openGraph: {
    title: "Stylish Name & Fancy Text Generator – Online Name Writing in 100+ Fonts",
    description: "Free online stylish name writing and fancy text generator. 100+ fonts, symbols, and nickname styles with one-click copy.",
    url: "https://www.nicknamegenerator.io/stylish-text",
    siteName: "Nicknamegenerator.io",
    type: "website",
  },
};

const RELATED = [
  { label: "Free Fire Nicknames", href: "/freefire" },
  { label: "PUBG Names", href: "/pubg-stylish-name" },
  { label: "PUBG Girl Names", href: "/pubg-girl-names" },
  { label: "Free Fire Guild Names", href: "/free-fire-guild-name" },
  { label: "Love Style Names", href: "/love-style-name" },
  { label: "Nickname Maker", href: "/nickname-maker" },
  { label: "Nickname Editor", href: "/nickname-editor" },
];

export default function StylishTextPage() {
  return (
    <div className="min-h-screen bg-[#ecf0f5] text-[#222]">
      {/* Header */}
      <header className="bg-[#354861] h-[44px] flex items-center px-4 shadow-md">
        <Link href="/" className="text-white font-light text-[26px] tracking-tight hover:opacity-80">
          Nicknamegenerator<span className="text-[#3c8dbc]">.io</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 text-[13px]">
          <Link href="/" className="text-white hover:text-[#00c0ef]">Home</Link>
          <Link href="/freefire" className="text-white hover:text-[#00c0ef]">Free Fire</Link>
          <Link href="/contact" className="text-white hover:text-[#00c0ef]">Contact</Link>
        </nav>
      </header>

      <div className="mx-auto max-w-[960px] px-4 py-6">

        {/* Breadcrumb */}
        <div className="mb-4 text-[13px] text-[#2c6da5]">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="text-gray-400 mx-1">/</span>
          <span className="text-gray-600">Stylish Name Writing &amp; Fancy Text</span>
        </div>

        {/* H1 Box */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] p-5 mb-4">
          <h1 className="text-[22px] sm:text-[26px] font-bold text-[#222] m-0 leading-tight">
            Stylish Name &amp; Fancy Text Generator – Online Name Writing
            <span className="text-[13px] font-normal text-gray-600 font-mono ml-2">
              𝓢𝓱𝓪𝓭𝓸𝔀, 『ＳＨＡＤＯＷ』, ꧁Shadow꧂, Ｓｈａｄｏｗ...
            </span>
          </h1>
          <div className="mt-3 text-[14px] text-gray-700 leading-relaxed space-y-2">
            <p className="indent-4 m-0">
              Free online <strong>stylish name writing and fancy text generator</strong> — convert regular text into <strong>100+ decorative fonts</strong>, symbols, and nickname styles instantly. Type any name for instant online name writing and get copy-ready results for any game or social network.
            </p>
            <p className="indent-4 m-0">
              Works for <Link href="/freefire" className="text-[#2c6da5] hover:underline">Free Fire</Link>, PUBG, BGMI, Instagram, TikTok, Discord, Roblox and any other platform that supports Unicode characters.
            </p>
          </div>
        </div>

        {/* Tool */}
        <StylishTextTool />

        {/* Name Writing Guide Box */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mt-4 mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">Decorative Name Writing Styles</h2>
          </div>
          <div className="p-5 text-[14px] text-gray-700 leading-relaxed space-y-3">
            <p className="m-0">
              Looking for creative <strong>name writing styles</strong>? Our tool transforms standard alphabet letters into artistic calligraphy, gothic script, small caps, circled bubbles, and winged gamer badges.
            </p>
            <div className="grid gap-3 sm:grid-cols-3 text-[13px] pt-1">
              <div className="p-3 bg-[#f8fafd] border border-[#e5e7eb] rounded">
                <div className="font-bold text-[#354861] mb-1">✍️ Cursive &amp; Calligraphy</div>
                <div className="text-gray-600">Soft, aesthetic handwritten lettering perfect for romantic bios, Instagram profiles, and WhatsApp statuses.</div>
              </div>
              <div className="p-3 bg-[#f8fafd] border border-[#e5e7eb] rounded">
                <div className="font-bold text-[#354861] mb-1">⚔️ Gothic &amp; Fraktur</div>
                <div className="text-gray-600">Old English bold and dramatic lettering favored by competitive battle royale squads and clan leaders.</div>
              </div>
              <div className="p-3 bg-[#f8fafd] border border-[#e5e7eb] rounded">
                <div className="font-bold text-[#354861] mb-1">🎮 Gamer Ornament Tags</div>
                <div className="text-gray-600">Pre-wrapped tags featuring wings, crowns, crosshairs, and symbols ready for one-tap copy and paste.</div>
              </div>
            </div>
          </div>
        </div>

        {/* How to use */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">How to Use the Fancy Text Generator</h2>
          </div>
          <div className="p-5 text-[14px] text-gray-700 leading-relaxed">
            <ol className="list-decimal list-inside space-y-2 m-0">
              <li>Type your <strong>name or any text</strong> in the input box above.</li>
              <li>Instantly see <strong>100+ stylish font versions</strong> generated below.</li>
              <li><strong>Click any style</strong> to instantly copy it to your clipboard.</li>
              <li>Paste it directly into <strong>Free Fire, PUBG, Instagram, TikTok</strong> or anywhere else.</li>
            </ol>
            <p className="mt-3 text-[12px] text-gray-500 m-0">
              💡 All styles use standard Unicode characters — no special software needed. Works on any device.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">Frequently Asked Questions</h2>
          </div>
          <div className="p-5 space-y-4 text-[14px] text-gray-700 leading-relaxed">
            <div>
              <h3 className="font-bold text-[#354861] mb-1">What is online name writing?</h3>
              <p className="m-0">Online name writing converts ordinary plain text into decorative Unicode font styles such as script, fraktur, double-struck, monospace, small caps, and symbol-bordered badges without installing any special fonts.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#354861] mb-1">Is this stylish name writing tool free?</h3>
              <p className="m-0">Yes, 100% free. No signup, no download, no limit. Type any name and get unlimited stylish font conversions instantly.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#354861] mb-1">Does it work for Free Fire and PUBG?</h3>
              <p className="m-0">Yes. All generated styles use Unicode characters that are fully supported inside Free Fire, PUBG Mobile, BGMI, Roblox, and most other games.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#354861] mb-1">How many font styles are available?</h3>
              <p className="m-0">Over 100 unique styles including bold, italic, script, fraktur, double-struck, monospace, small caps, bubble text, fullwidth, and decorated gamer wings.</p>
            </div>
          </div>
        </div>

        {/* Related */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">Related Tools</h2>
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

        {/* Footer */}
        <div className="text-center text-[12px] text-gray-500 mt-4 space-x-3">
          <Link href="/" className="text-[#2c6da5] hover:underline">Home</Link>
          <span>|</span>
          <Link href="/freefire" className="text-[#2c6da5] hover:underline">Free Fire</Link>
          <span>|</span>
          <Link href="/about" className="text-[#2c6da5] hover:underline">About</Link>
          <span>|</span>
          <Link href="/contact" className="text-[#2c6da5] hover:underline">Contact</Link>
          <span>|</span>
          <Link href="/privacy-policy" className="text-[#2c6da5] hover:underline">Privacy Policy</Link>
        </div>

      </div>
    </div>
  );
}
