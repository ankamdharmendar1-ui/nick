"use client";

import React from "react";
import Link from "next/link";
import { TranslationStrings, TRANSLATIONS } from "../lib/translations";

interface NickSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  currentLang: string;
  onSelectLang: (lang: string) => void;
  className?: string;
  onItemClick?: () => void;
  t?: TranslationStrings;
}

export const NickSidebar: React.FC<NickSidebarProps> = ({
  activeTab,
  setActiveTab,
  currentLang,
  onSelectLang,
  className = "",
  onItemClick,
  t: customT,
}) => {
  const t = customT || TRANSLATIONS[currentLang] || TRANSLATIONS.EN;

  const handleNav = (tabId: string) => {
    setActiveTab(tabId);
    if (onItemClick) onItemClick();
  };

  const languages = [
    ["EN", "FR", "ES"],
    ["IT", "RU", "DE"],
    ["ID", "HI", "JP"],
    ["TR", "KR", "BR"],
  ];

  return (
    <aside className={`w-[220px] shrink-0 border-r border-[#d2d6de] bg-white select-none ${className}`}>
      <div className="py-0">
        {/* Main Tools Menu */}
        <ul className="list-none p-0 m-0 text-[14px]">
          <li>
            <Link
              href="/stylish-text"
              onClick={() => handleNav("stylish-text")}
              title="Stylish Text Symbols Generator"
              className={`block w-full text-left px-4 py-2.5 transition-colors border-l-4 ${
                activeTab === "stylish-text"
                  ? "bg-[#2f4867] text-white border-[#00c0ef] font-semibold"
                  : "text-[#333333] hover:bg-[#f4f6f9] border-transparent"
              }`}
            >
              {t.stylishTextSymbols}
            </Link>
          </li>
          <li>
            <Link
              href="/names-mixer"
              onClick={() => handleNav("names-mixer")}
              title="Names Mixer for Couples & Duos"
              className={`block w-full text-left px-4 py-2.5 transition-colors border-l-4 ${
                activeTab === "names-mixer"
                  ? "bg-[#2f4867] text-white border-[#00c0ef] font-semibold"
                  : "text-[#333333] hover:bg-[#f4f6f9] border-transparent"
              }`}
            >
              {t.namesMixer}
            </Link>
          </li>
          <li>
            <Link
              href="/nickname-to-symbols"
              onClick={() => handleNav("nickname-to-symbols")}
              title="Convert Nicknames to Cool Symbols"
              className={`block w-full text-left px-4 py-2.5 transition-colors border-l-4 ${
                activeTab === "nickname-to-symbols"
                  ? "bg-[#2f4867] text-white border-[#00c0ef] font-semibold"
                  : "text-[#333333] hover:bg-[#f4f6f9] border-transparent"
              }`}
            >
              {t.nicknameToSymbols}
            </Link>
          </li>
          <li>
            <Link
              href="/cool-text"
              onClick={() => handleNav("cool-text")}
              title="Cool Text & Font Generator"
              className={`block w-full text-left px-4 py-2.5 transition-colors border-l-4 ${
                activeTab === "cool-text"
                  ? "bg-[#2f4867] text-white border-[#00c0ef] font-semibold"
                  : "text-[#333333] hover:bg-[#f4f6f9] border-transparent"
              }`}
            >
              {t.coolTextGenerator}
            </Link>
          </li>
        </ul>

        {/* Section: CATEGORIES */}
        <div className="bg-[#ecf0f5] px-4 py-2 text-[11px] font-bold tracking-wider text-[#555] uppercase border-y border-[#d2d6de]">
          {t.categories}
        </div>

        <ul className="list-none p-0 m-0 text-[14px]">
          <li>
            <Link
              href="/grouped-by-symbol"
              onClick={() => handleNav("grouped-by-symbol")}
              title="Browse Nicknames Grouped By Symbol"
              className={`block w-full text-left px-4 py-2.5 transition-colors border-l-4 ${
                activeTab === "grouped-by-symbol"
                  ? "bg-[#2f4867] text-white border-[#00c0ef] font-semibold"
                  : "text-[#333333] hover:bg-[#f4f6f9] border-transparent"
              }`}
            >
              {t.groupedBySymbol}
            </Link>
          </li>
          <li>
            <Link
              href="/male-names"
              onClick={() => handleNav("male-names")}
              title="Male Gamer Names & Tags"
              className={`block w-full text-left px-4 py-2.5 transition-colors border-l-4 ${
                activeTab === "male-names"
                  ? "bg-[#2f4867] text-white border-[#00c0ef] font-semibold"
                  : "text-[#333333] hover:bg-[#f4f6f9] border-transparent"
              }`}
            >
              {t.maleNames}
            </Link>
          </li>
          <li>
            <Link
              href="/female-names"
              onClick={() => handleNav("female-names")}
              title="Female Aesthetic Nicknames"
              className={`block w-full text-left px-4 py-2.5 transition-colors border-l-4 ${
                activeTab === "female-names"
                  ? "bg-[#2f4867] text-white border-[#00c0ef] font-semibold"
                  : "text-[#333333] hover:bg-[#f4f6f9] border-transparent"
              }`}
            >
              {t.femaleNames}
            </Link>
          </li>
          <li>
            <Link
              href="/password-generator"
              onClick={() => handleNav("password-generator")}
              title="Secure Gaming Password Generator"
              className={`block w-full text-left px-4 py-2.5 transition-colors border-l-4 ${
                activeTab === "password-generator"
                  ? "bg-[#2f4867] text-white border-[#00c0ef] font-semibold"
                  : "text-[#333333] hover:bg-[#f4f6f9] border-transparent"
              }`}
            >
              {t.passwordGenerator}
            </Link>
          </li>
          <li>
            <Link
              href="/domain-names"
              onClick={() => handleNav("domain-names")}
              title="Clan & Esports Domain Names"
              className={`block w-full text-left px-4 py-2.5 transition-colors border-l-4 ${
                activeTab === "domain-names"
                  ? "bg-[#2f4867] text-white border-[#00c0ef] font-semibold"
                  : "text-[#333333] hover:bg-[#f4f6f9] border-transparent"
              }`}
            >
              {t.domainNames}
            </Link>
          </li>
        </ul>

        {/* Section: INTERFACE LANGUAGE */}
        <div className="bg-[#ecf0f5] px-4 py-2 text-[11px] font-bold tracking-wider text-[#555] uppercase border-y border-[#d2d6de]">
          {t.interfaceLanguage}
        </div>

        <div className="px-4 py-3 space-y-2 text-[13px]">
          {languages.map((row, rIdx) => (
            <div key={rIdx} className="flex justify-between">
              {row.map((lang) => {
                const isSelected = currentLang === lang;
                const linkHref = lang === "EN" ? "/" : `/${lang.toLowerCase()}`;
                return (
                  <Link
                    key={lang}
                    href={linkHref}
                    onClick={() => onSelectLang(lang)}
                    className={`cursor-pointer transition-colors ${
                      isSelected
                        ? "text-black font-bold"
                        : "text-[#2c6da5] font-semibold hover:underline hover:text-[#1c4cab]"
                    }`}
                  >
                    {lang}
                  </Link>
                );
              })}
            </div>
          ))}
        </div>

        {/* Section: OTHER */}
        <div className="bg-[#ecf0f5] px-4 py-2 text-[11px] font-bold tracking-wider text-[#555] uppercase border-y border-[#d2d6de]">
          {t.other}
        </div>

        <ul className="list-none p-0 m-0 text-[14px]">
          <li>
            <Link
              href="/contact"
              className="block px-4 py-2.5 text-[#333333] hover:bg-[#f4f6f9] border-l-4 border-transparent"
            >
              {t.contacts}
            </Link>
          </li>
          <li>
            <Link
              href="/terms"
              className="block px-4 py-2.5 text-[#333333] hover:bg-[#f4f6f9] border-l-4 border-transparent"
            >
              {t.termsOfUse}
            </Link>
          </li>
          <li>
            <Link
              href="/privacy-policy"
              className="block px-4 py-2.5 text-[#333333] hover:bg-[#f4f6f9] border-l-4 border-transparent"
            >
              {t.privacyPolicy}
            </Link>
          </li>
        </ul>

        {/* Dark bottom block */}
        <div className="h-32 bg-[#222d32] border-t border-[#1a2226]" />
      </div>
    </aside>
  );
};
