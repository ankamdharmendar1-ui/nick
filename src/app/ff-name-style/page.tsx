import type { Metadata } from "next";
import Link from "next/link";
import FfNameStyleTool from "@/components/FfNameStyleTool";

export const metadata: Metadata = {
  title: "FF Name Style: Stylish Free Fire Names, Fonts & Symbols",
  description: "Create a stylish FF name with Free Fire fonts, symbols, crowns, and copy-ready nickname styles. Enter your name and copy your favorite FF name style.",
  keywords: ["ff name style", "free fire name style", "stylish ff name", "ff stylish name", "free fire fonts", "ff name symbols"],
  alternates: { canonical: "https://www.nicknamegenerator.io/ff-name-style" },
  openGraph: {
    title: "FF Name Style: Stylish Free Fire Names, Fonts & Symbols",
    description: "Create copy-ready Free Fire name styles with fonts, symbols, crowns, and decorations.",
    url: "https://www.nicknamegenerator.io/ff-name-style",
    siteName: "Nicknamegenerator.io",
    type: "website",
  },
};

export default function FfNameStylePage() {
  return (
    <div className="min-h-screen bg-[#ecf0f5] text-[#222]">
      <header className="flex h-[44px] items-center bg-[#354861] px-4 shadow-md">
        <Link href="/" className="text-[26px] font-light tracking-tight text-white hover:opacity-80">Nicknamegenerator<span className="text-[#3c8dbc]">.io</span></Link>
        <nav className="ml-auto flex gap-4 text-[13px]"><Link href="/" className="text-white hover:text-[#00c0ef]">Home</Link><Link href="/freefire" className="text-white hover:text-[#00c0ef]">Free Fire Names</Link><Link href="/stylish-text" className="text-white hover:text-[#00c0ef]">Stylish Text</Link></nav>
      </header>
      <main className="mx-auto max-w-[960px] px-4 py-6">
        <div className="mb-4 text-[13px] text-[#2c6da5]"><Link href="/" className="hover:underline">Home</Link><span className="mx-1 text-gray-400">/</span><span className="text-gray-600">FF Name Style</span></div>
        <section className="mb-4 rounded-[3px] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] bg-white p-5 shadow-sm">
          <h1 className="text-[26px] font-bold leading-tight text-[#222]">FF Name Style: Stylish Free Fire Names, Fonts &amp; Symbols</h1>
          <p className="mt-3 text-[14px] leading-relaxed text-gray-700">Create a stylish <strong>FF name</strong> for your Free Fire profile. Add crowns, wings, symbols, and Unicode fonts to turn a plain name into a copy-ready Free Fire nickname. Enter your name below, choose a style, and copy it in one tap.</p>
        </section>

        <FfNameStyleTool />

        <section className="mt-4 rounded-[3px] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] bg-white shadow-sm">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5"><h2 className="text-[17px] font-semibold text-[#333]">How to Make an FF Name Style</h2></div>
          <ol className="list-decimal space-y-2 p-5 pl-9 text-[14px] leading-relaxed text-gray-700"><li>Type your player name into the FF name style generator.</li><li>Browse the generated fonts and decorated name styles.</li><li>Tap <strong>Copy</strong> beside the style you like.</li><li>Open Free Fire, edit your profile name, and paste the copied text.</li></ol>
        </section>

        <section className="mt-4 rounded-[3px] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] bg-white shadow-sm">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5"><h2 className="text-[17px] font-semibold text-[#333]">Popular Free Fire Name Styles</h2></div>
          <div className="grid gap-4 p-5 text-[14px] leading-relaxed text-gray-700 sm:grid-cols-3"><div><h3 className="font-bold text-[#354861]">Pro FF Names</h3><p className="mt-1">Short, readable names with a small symbol accent work well for a competitive gaming profile: 亗 Shadow 亗 or 『Legend』.</p></div><div><h3 className="font-bold text-[#354861]">King &amp; Crown Styles</h3><p className="mt-1">Crowns, stars, and wing-style brackets create a strong identity without making the name hard to read.</p></div><div><h3 className="font-bold text-[#354861]">Aesthetic FF Names</h3><p className="mt-1">Use decorative Unicode fonts for a softer or more creative profile style, then test the display in-game.</p></div></div>
        </section>

        <section className="mt-4 rounded-[3px] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] bg-white shadow-sm">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5"><h2 className="text-[17px] font-semibold text-[#333]">FF Name Style FAQs</h2></div>
          <div className="space-y-4 p-5 text-[14px] leading-relaxed text-gray-700"><div><h3 className="font-bold text-[#354861]">What is an FF name style?</h3><p className="m-0">An FF name style is a Free Fire nickname enhanced with Unicode fonts, symbols, and decorative characters.</p></div><div><h3 className="font-bold text-[#354861]">How do I copy an FF stylish name?</h3><p className="m-0">Click the Copy button beside any generated name style, then paste it into the nickname field in Free Fire.</p></div><div><h3 className="font-bold text-[#354861]">Where can I find more Free Fire nickname ideas?</h3><p className="m-0">Browse our <Link href="/freefire" className="text-[#2c6da5] hover:underline">Free Fire nicknames</Link> or use the <Link href="/stylish-text" className="text-[#2c6da5] hover:underline">stylish text generator</Link> for more font styles.</p></div></div>
        </section>
      </main>
    </div>
  );
}
