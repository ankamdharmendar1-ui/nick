import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import FreefireGrid from "@/components/FreefireGrid";

export const metadata: Metadata = {
  title: "Free Fire Nicknames & FF Nickname Generator 🏆 – Stylish Names & Symbols",
  description:
    "Find stylish Free Fire nicknames and FF nickname ideas with rare symbols and fancy fonts. Browse 50+ copy-ready FF name styles for your Garena Free Fire ID.",
  keywords: [
    "free fire nicknames", "ff nickname", "ff stylish name", "freefire stylish names", "ff nickname generator",
    "free fire username", "freefire fonts", "garena free fire nickname",
    "free fire name symbols", "ff name copy paste", "free fire gamertag",
  ],
  alternates: { canonical: "https://www.nicknamegenerator.io/freefire" },
  openGraph: {
    title: "Free Fire Nicknames & FF Nickname Generator 🏆 – Stylish Names & Symbols",
    description: "Browse 50+ stylish Free Fire nicknames and FF name ideas with one-click copy. Fonts, symbols, crowns, wings & more.",
    url: "https://www.nicknamegenerator.io/freefire",
    siteName: "Nicknamegenerator.io",
    type: "website",
  },
};

const RELATED = [
  { label: "PUBG Nicknames", href: "/?q=PUBG" },
  { label: "BGMI Nicknames", href: "/?q=BGMI" },
  { label: "Roblox Nicknames", href: "/?q=Roblox" },
  { label: "Valorant Nicknames", href: "/?q=Valorant" },
  { label: "Stylish Text Generator", href: "/stylish-text" },
  { label: "FF Name Style", href: "/ff-name-style" },
  { label: "Symbol Generator", href: "/nickname-to-symbols" },
];

export default function FreefirePage() {
  return (
    <div className="min-h-screen bg-[#ecf0f5] text-[#222]">
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
        <div className="mb-4 text-[13px] text-[#2c6da5]">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="text-gray-400 mx-1">/</span>
          <span className="text-gray-600">Free Fire Nicknames</span>
        </div>

        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] p-5 mb-4">
          <h1 className="text-[22px] sm:text-[26px] font-bold text-[#222] m-0 leading-tight">
            Free Fire Nicknames &amp; FF Nickname Ideas 🏆
            <span className="text-[13px] font-normal text-gray-600 font-mono ml-2">
              ꧁NINJA꧂, ☆⊙KING⊙☆, ༄ᶦᶰᵈ᭄✿Gᴀᴍᴇʀ, 𝓑𝓻𝓸𝓴𝓮𝓷 𝓗𝓮𝓪𝓻𝓽♡...
            </span>
          </h1>
          <div className="mt-3 text-[14px] text-gray-700 leading-relaxed space-y-2">
            <p className="indent-4 m-0">
              Find a standout <strong>Free Fire nickname</strong> or unique <strong>FF nickname style</strong> for your Garena Free Fire profile. Browse 50+ stylish names with one-click copy — including fonts, symbols, crowns, wings, and short FF tags ready to paste into the game.
            </p>
            <p className="indent-4 m-0">
              Click any nickname below to instantly copy it to your clipboard. Use our <Link href="/stylish-text" className="text-[#2c6da5] hover:underline">Stylish Text Generator</Link> to design a custom FF nickname with your own custom letters.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5 flex items-center justify-between">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">Top 50 Free Fire Stylish Nicknames 🏆</h2>
            <span className="text-[11px] text-gray-400 bg-[#f4f4f4] px-2 py-0.5 rounded">Click to copy</span>
          </div>
          <FreefireGrid />
        </div>

        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">Popular Free Fire Name Styles</h2>
          </div>
          <div className="grid gap-3 p-4 sm:grid-cols-3 text-[13px] text-gray-700 leading-relaxed">
            <div className="rounded border border-[#e5e7eb] bg-[#f8fafd] p-3"><h3 className="font-bold text-[#354861]">Crown &amp; King Names</h3><p className="mt-1 mb-0">Use crowns, stars, and royal symbols for a powerful profile name, such as ♛KING•OF•FF♛.</p></div>
            <div className="rounded border border-[#e5e7eb] bg-[#f8fafd] p-3"><h3 className="font-bold text-[#354861]">Pro &amp; Squad Tags</h3><p className="mt-1 mb-0">Keep a short, readable tag for a squad identity, for example ᴮᴬᴰ•ʙᴏʏ•FF or ɴᴏ•sᴄᴏᴘᴇ•FF.</p></div>
            <div className="rounded border border-[#e5e7eb] bg-[#f8fafd] p-3"><h3 className="font-bold text-[#354861]">Aesthetic FF Names</h3><p className="mt-1 mb-0">Try decorative Unicode fonts with a light symbol accent, such as 𝓑𝓻𝓸𝓴𝓮𝓷 𝓗𝓮𝓪𝓻𝓽♡.</p></div>
          </div>
        </div>

        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">How to Change Your Free Fire Nickname</h2>
          </div>
          <div className="p-5 text-[14px] text-gray-700 leading-relaxed">
            <ol className="list-decimal list-inside space-y-2 m-0">
              <li>Open <strong>Free Fire</strong> and go to your <strong>Profile</strong>.</li>
              <li>Tap the <strong>pencil icon</strong> next to your current nickname.</li>
              <li>Copy any nickname from this page by clicking on it.</li>
              <li>Paste it into the name field and tap <strong>OK</strong>.</li>
              <li>Confirm the change (costs <strong>390 diamonds</strong> for a rename card).</li>
            </ol>
            <p className="mt-3 text-[12px] text-gray-500 m-0">
              💡 Tip: Use our <Link href="/stylish-text" className="text-[#2c6da5] hover:underline">Stylish Text Generator</Link> to type your own name and convert it to fancy fonts for free.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">Frequently Asked Questions</h2>
          </div>
          <div className="p-5 space-y-4 text-[14px] text-gray-700 leading-relaxed">
            <div>
              <h3 className="font-bold text-[#354861] mb-1">What are stylish Free Fire nicknames?</h3>
              <p className="m-0">Stylish Free Fire nicknames use special Unicode characters, symbols, and decorative fonts that display correctly inside the game. Examples: ꧁NINJA꧂, ☆KING☆, and ༄ᶦᶰᵈ᭄✿Gᴀᴍᴇʀ.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#354861] mb-1">Are these nicknames safe to use in Free Fire?</h3>
              <p className="m-0">Yes. All nicknames use official Unicode characters supported by Garena Free Fire. They are 100% safe and do not violate any game rules.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#354861] mb-1">How do I copy a Free Fire nickname?</h3>
              <p className="m-0">Simply click any nickname on this page — it will be instantly copied to your clipboard. Then paste it directly into the Free Fire nickname field.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#354861] mb-1">Can I create a custom Free Fire nickname?</h3>
              <p className="m-0">Yes! Use our <Link href="/stylish-text" className="text-[#2c6da5] hover:underline">Stylish Text Generator</Link> — type your name and get 60+ stylish font versions instantly, ready for Free Fire.</p>
            </div>
          </div>
        </div>

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

        <div className="text-center text-[12px] text-gray-500 mt-4 space-x-3">
          <Link href="/" className="text-[#2c6da5] hover:underline">Home</Link>
          <span>|</span>
          <Link href="/about" className="text-[#2c6da5] hover:underline">About</Link>
          <span>|</span>
          <Link href="/contact" className="text-[#2c6da5] hover:underline">Contact</Link>
          <span>|</span>
          <Link href="/terms" className="text-[#2c6da5] hover:underline">Terms</Link>
          <span>|</span>
          <Link href="/privacy-policy" className="text-[#2c6da5] hover:underline">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}
