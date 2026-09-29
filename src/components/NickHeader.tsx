"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { TranslationStrings, TRANSLATIONS } from "../lib/translations";

interface NickHeaderProps {
  onSearch: (query: string) => void;
  onToggleMobileSidebar: () => void;
  favoritesCount?: number;
  onOpenFavorites?: () => void;
  t?: TranslationStrings;
}

export const NickHeader: React.FC<NickHeaderProps> = ({
  onSearch,
  onToggleMobileSidebar,
  favoritesCount = 0,
  onOpenFavorites,
  t = TRANSLATIONS.EN,
}) => {
  const [searchInput, setSearchInput] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearch(searchInput.trim());
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#354861] shadow-md">
      <div className="mx-auto flex h-[50px] w-full items-center justify-between px-3 md:px-4">
        {/* Left: Brand Logo & Mobile Toggle */}
        <div className="flex items-center gap-2 md:gap-4 min-w-0">
          <button
            onClick={onToggleMobileSidebar}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded text-white hover:bg-[#28384d] md:hidden"
            title="Toggle Menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          <Link href="/" className="flex items-center text-white no-underline truncate">
            <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white hover:opacity-95 truncate">
              Nicknamegenerator<span className="text-cyan-400">.io</span>
            </span>
          </Link>
        </div>

        {/* Center: Subtle Glyphs & Background Pattern like Nickfinder */}
        <div className="hidden lg:flex items-center gap-3 text-xs text-slate-300 opacity-60 font-mono select-none">
          <span>[ f ]</span>
          <span>[ # ]</span>
          <span>[ @ ]</span>
          <span>[ ⚡ ]</span>
          <span>[ ★ ]</span>
          <span>[ 亗 ]</span>
          <span>[ ♡ ]</span>
        </div>

        {/* Right: Search Bar & Favorites */}
        <div className="flex items-center gap-2">
          {onOpenFavorites && (
            <button
              onClick={onOpenFavorites}
              className="flex items-center gap-1.5 rounded bg-[#28384d] px-2.5 py-1 text-xs font-semibold text-pink-300 hover:bg-[#202d3e]"
              title="View Favorites"
            >
              <span>❤️</span>
              <span className="hidden sm:inline">Favs</span>
              {favoritesCount > 0 && (
                <span className="rounded-full bg-pink-600 px-1.5 py-0.2 text-[10px] text-white">
                  {favoritesCount}
                </span>
              )}
            </button>
          )}

          {/* Desktop Search Bar */}
          <form onSubmit={handleFormSubmit} className="hidden md:flex items-center">
            <div className="flex overflow-hidden rounded-[2px] bg-white shadow-inner">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-64 lg:w-80 px-2.5 py-1.5 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#0055ff] px-3.5 py-1.5 text-xs sm:text-sm font-bold text-white transition-colors hover:bg-blue-700"
              >
                {t.findBtn}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Mobile Search Row (Clean full width, zero overflow, visible Find button) */}
      <div className="md:hidden px-3 pb-2.5 pt-0.5 border-t border-[#435975]/40">
        <form onSubmit={handleFormSubmit} className="flex w-full items-center">
          <div className="flex w-full overflow-hidden rounded-[2px] bg-white shadow-inner">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="flex-1 min-w-0 px-2.5 py-1.5 text-xs text-gray-800 placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#0055ff] px-3.5 py-1.5 text-xs font-bold text-white transition-colors hover:bg-blue-700 shrink-0"
            >
              {t.findBtn}
            </button>
          </div>
        </form>
      </div>
    </header>
  );
};
