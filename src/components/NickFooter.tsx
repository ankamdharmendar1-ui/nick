"use client";

import React from "react";
import Link from "next/link";

export const NickFooter: React.FC = () => {
  return (
    <footer className="mt-8 border-t border-[#d2d6de] bg-white text-xs text-gray-500">
      {/* 4-Column SEO Internal Linking Matrix */}
      <div className="mx-auto max-w-7xl px-4 py-8 border-b border-[#e5e7eb]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Col 1: Popular Games */}
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#354861] mb-3">
              Popular Games
            </h4>
            <ul className="space-y-2 text-[12px] list-none p-0 m-0">
              <li>
                <Link href="/freefire" title="Free Fire stylish nicknames and symbols" className="text-[#2c6da5] hover:underline">
                  Free Fire Nicknames
                </Link>
              </li>
              <li>
                <Link href="/free-fire-guild-name" title="Free Fire guild names and clan tags" className="text-[#2c6da5] hover:underline">
                  Free Fire Guild Names
                </Link>
              </li>
              <li>
                <Link href="/pubg-stylish-name" title="PUBG Mobile and BGMI stylish names" className="text-[#2c6da5] hover:underline">
                  PUBG Stylish Names
                </Link>
              </li>
              <li>
                <Link href="/pubg-girl-names" title="Cute PUBG names for girls" className="text-[#2c6da5] hover:underline">
                  PUBG Names for Girls
                </Link>
              </li>
              <li>
                <Link href="/?q=BGMI" title="BGMI clan and squad tags" className="text-[#2c6da5] hover:underline">
                  BGMI Clan Tags
                </Link>
              </li>
              <li>
                <Link href="/?q=Roblox" title="Aesthetic Roblox display names" className="text-[#2c6da5] hover:underline">
                  Roblox Aesthetic Names
                </Link>
              </li>
              <li>
                <Link href="/?q=Valorant" title="Valorant gamertags and IDs" className="text-[#2c6da5] hover:underline">
                  Valorant Gamertags
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Generator Tools */}
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#354861] mb-3">
              Generator Tools
            </h4>
            <ul className="space-y-2 text-[12px] list-none p-0 m-0">
              <li>
                <Link href="/stylish-text" title="Online name writing and stylish text" className="text-[#2c6da5] hover:underline">
                  Stylish Name Writing
                </Link>
              </li>
              <li>
                <Link href="/nickname-maker" title="Browse unique nickname ideas by vibe" className="text-[#2c6da5] hover:underline">
                  Nickname Maker
                </Link>
              </li>
              <li>
                <Link href="/nickname-editor" title="Custom prefix, suffix and symbol editor" className="text-[#2c6da5] hover:underline">
                  Nickname Editor
                </Link>
              </li>
              <li>
                <Link href="/love-style-name" title="Romantic couple and duo name generator" className="text-[#2c6da5] hover:underline">
                  Love Style Names
                </Link>
              </li>
              <li>
                <Link href="/names-mixer" title="Names mixer for couples and duos" className="text-[#2c6da5] hover:underline">
                  Names Mixer (Duo Tags)
                </Link>
              </li>
              <li>
                <Link href="/nickname-to-symbols" title="Convert plain nickname to symbols" className="text-[#2c6da5] hover:underline">
                  Nickname to Symbols
                </Link>
              </li>
              <li>
                <Link href="/cool-text" title="Cool text and aesthetic font generator" className="text-[#2c6da5] hover:underline">
                  Cool Text Generator
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Categories & Styles */}
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#354861] mb-3">
              Categories &amp; Tags
            </h4>
            <ul className="space-y-2 text-[12px] list-none p-0 m-0">
              <li>
                <Link href="/instagram-girl-attitude-names" title="Attitude names and bios for Instagram girls" className="text-[#2c6da5] hover:underline">
                  Instagram Attitude Girls
                </Link>
              </li>
              <li>
                <Link href="/ff-name-style" title="Stylish Free Fire name styles" className="text-[#2c6da5] hover:underline">
                  FF Name Style
                </Link>
              </li>
              <li>
                <Link href="/grouped-by-symbol" title="Browse nicknames grouped by symbol" className="text-[#2c6da5] hover:underline">
                  Grouped by Symbol
                </Link>
              </li>
              <li>
                <Link href="/male-names" title="Male gamer tags and handles" className="text-[#2c6da5] hover:underline">
                  Male Gamer Names
                </Link>
              </li>
              <li>
                <Link href="/female-names" title="Female aesthetic gamertags" className="text-[#2c6da5] hover:underline">
                  Female Aesthetic Names
                </Link>
              </li>
              <li>
                <Link href="/password-generator" title="Secure gaming password maker" className="text-[#2c6da5] hover:underline">
                  Password Generator
                </Link>
              </li>
              <li>
                <Link href="/domain-names" title="Esports clan domain name generator" className="text-[#2c6da5] hover:underline">
                  Clan Domain Names
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Company & Legal */}
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#354861] mb-3">
              About &amp; Legal
            </h4>
            <ul className="space-y-2 text-[12px] list-none p-0 m-0">
              <li>
                <Link href="/" title="Home – Nickname Generator" className="text-[#2c6da5] hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" title="About Nicknamegenerator.io" className="text-[#2c6da5] hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" title="Contact our support team" className="text-[#2c6da5] hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" title="Terms of Use" className="text-[#2c6da5] hover:underline">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" title="Privacy and Cookie Policy" className="text-[#2c6da5] hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto max-w-7xl px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-base font-bold text-[#354861]">
              Nicknamegenerator<span className="text-[#0055ff]">.io</span>
            </span>
            <span className="text-gray-400">|</span>
            <span>&copy; {new Date().getFullYear()} Nicknamegenerator.io</span>
          </div>
          <p className="mt-1 text-[11px] text-gray-400 max-w-lg">
            Free online nickname generator, stylish text fonts maker, and gamertag design engine for esports players, clans, and social media creators.
          </p>
        </div>

        {/* Quick Links Row */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/freefire" className="hover:underline">
            Free Fire
          </Link>
          <Link href="/pubg-stylish-name" className="hover:underline">
            PUBG
          </Link>
          <Link href="/nickname-maker" className="hover:underline">
            Maker
          </Link>
          <Link href="/about" className="hover:underline">
            About Us
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms of Use
          </Link>
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};
