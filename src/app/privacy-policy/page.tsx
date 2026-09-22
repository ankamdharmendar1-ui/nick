import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Nicknamegenerator.io",
  description: "Privacy Policy and data collection guidelines for Nicknamegenerator.io.",
};

export default function PrivacyPolicyPage() {
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
          <span className="text-gray-600">Privacy Policy</span>
        </div>

        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5 flex items-center justify-between">
            <h1 className="text-[18px] font-semibold text-[#333] m-0">Privacy Policy</h1>
            <span className="text-[11px] text-gray-400">Last Updated: September 2026</span>
          </div>
          <div className="p-5 space-y-5 text-[14px] text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-[15px] font-bold text-[#354861] mb-1 border-b border-[#f4f4f4] pb-1">1. Overview</h2>
              <p className="m-0">At Nicknamegenerator.io ("we", "our", or "us"), we respect your personal privacy. This Privacy Policy explains how information is collected, used, and protected when you use our website, tools, and nickname generation services.</p>
            </section>
            <section>
              <h2 className="text-[15px] font-bold text-[#354861] mb-1 border-b border-[#f4f4f4] pb-1">2. Information We Do Not Collect</h2>
              <p className="m-0">Nicknamegenerator.io is an interactive, client-side utility tool. We do not require account registration, passwords, email addresses, or phone numbers. All custom text entered into our generator, symbol vault, and duo mixer is processed locally inside your web browser.</p>
            </section>
            <section>
              <h2 className="text-[15px] font-bold text-[#354861] mb-1 border-b border-[#f4f4f4] pb-1">3. Local Storage</h2>
              <p className="m-0">When you save nicknames to your "Favorites" list, they are stored directly in your browser&apos;s LocalStorage. This data never leaves your device and is not transmitted to our servers.</p>
            </section>
            <section>
              <h2 className="text-[15px] font-bold text-[#354861] mb-1 border-b border-[#f4f4f4] pb-1">4. Third-Party Advertisements & Google AdSense</h2>
              <p className="m-0">We may partner with third-party advertising companies such as Google AdSense to serve ads when you visit our website. Google, as a third-party vendor, uses cookies (including the DoubleClick cookie) to serve ads based on prior visits to our website or other websites on the Internet.</p>
              <p className="mt-2">Users may opt out of personalized advertising by visiting{" "}
                <a href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer" className="text-[#2c6da5] underline">
                  Google&apos;s Ads Settings
                </a>.
              </p>
            </section>
            <section>
              <h2 className="text-[15px] font-bold text-[#354861] mb-1 border-b border-[#f4f4f4] pb-1">5. Cookies and Web Analytics</h2>
              <p className="m-0">We may use standard web analytics tools (such as Google Analytics) to monitor anonymous traffic trends, page views, and user preferences to enhance site performance and usability.</p>
            </section>
            <section>
              <h2 className="text-[15px] font-bold text-[#354861] mb-1 border-b border-[#f4f4f4] pb-1">6. Contact Us</h2>
              <p className="m-0">If you have any questions or concerns regarding this Privacy Policy, please reach out via our{" "}
                <Link href="/contact" className="text-[#2c6da5] underline hover:text-[#23527c]">Contact Page</Link>.
              </p>
            </section>
          </div>
        </div>

        <div className="text-center text-[12px] text-gray-500 mt-4 space-x-3">
          <Link href="/" className="text-[#2c6da5] hover:underline">Home</Link>
          <span>|</span>
          <Link href="/about" className="text-[#2c6da5] hover:underline">About</Link>
          <span>|</span>
          <Link href="/contact" className="text-[#2c6da5] hover:underline">Contact</Link>
          <span>|</span>
          <Link href="/terms" className="text-[#2c6da5] hover:underline">Terms of Use</Link>
        </div>
      </div>
    </div>
  );
}
