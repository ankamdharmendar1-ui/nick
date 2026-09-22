import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Terms of Use | Nicknamegenerator.io",
  description: "Terms and conditions of use for Nicknamegenerator.io.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#ecf0f5] text-[#222]">
      <header className="bg-[#354861] h-[44px] flex items-center px-4 shadow-md">
        <Link href="/" className="text-white font-light text-[26px] tracking-tight hover:opacity-80">
          Nicknamegenerator<span className="text-[#3c8dbc]">.io</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 text-[13px]">
          <Link href="/" className="text-white hover:text-[#00c0ef]">Home</Link>
          <Link href="/contact" className="text-white hover:text-[#00c0ef]">Contact</Link>
        </nav>
      </header>

      <div className="mx-auto max-w-[900px] px-4 py-6">
        <div className="mb-4 text-[13px] text-[#2c6da5]">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="text-gray-400 mx-1">/</span>
          <span className="text-gray-600">Terms of Use</span>
        </div>

        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5 flex items-center justify-between">
            <h1 className="text-[18px] font-semibold text-[#333] m-0">Terms of Use</h1>
            <span className="text-[11px] text-gray-400">Last Updated: September 2026</span>
          </div>
          <div className="p-5 space-y-5 text-[14px] text-gray-700 leading-relaxed">
            {[
              { n: "1", title: "Acceptance of Terms", body: "By accessing and using Nicknamegenerator.io, you agree to comply with and be bound by these Terms of Use. If you do not agree with any of these terms, please discontinue using this website immediately." },
              { n: "2", title: "Permitted Use", body: "Nicknamegenerator.io is provided free of charge for personal, non-commercial entertainment and utility purposes. You may freely generate, copy, and share usernames, symbols, and clan tags in gaming platforms and social media." },
              { n: "3", title: "Intellectual Property & Trademarks", body: "Free Fire is a registered trademark of Garena. PUBG Mobile and BGMI are registered trademarks of KRAFTON Inc. Valorant is a trademark of Riot Games. Roblox is a trademark of Roblox Corporation. Nicknamegenerator.io is an independent tool and is not affiliated, endorsed, or sponsored by any of these entities." },
              { n: "4", title: "Disclaimer of Warranty", body: 'All tools, fonts, and decorations are provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind. We do not guarantee that every game client or operating system will render every Unicode symbol identically.' },
              { n: "5", title: "Changes to Terms", body: "We reserve the right to revise or modify these Terms of Use at any time without prior notice. Continued use of our site signifies acceptance of any updated terms." },
            ].map((s) => (
              <section key={s.n}>
                <h2 className="text-[15px] font-bold text-[#354861] mb-1 border-b border-[#f4f4f4] pb-1">{s.n}. {s.title}</h2>
                <p className="m-0">{s.body}</p>
              </section>
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
          <Link href="/privacy-policy" className="text-[#2c6da5] hover:underline">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}
