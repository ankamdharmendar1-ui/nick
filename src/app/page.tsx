"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { NickHeader } from "@/components/NickHeader";
import { NickSidebar } from "@/components/NickSidebar";
import { NickRightSidebar } from "@/components/NickRightSidebar";
import { NickCenterContent } from "@/components/NickCenterContent";
import { NickFooter } from "@/components/NickFooter";
import { SymbolKeyboard } from "@/components/SymbolKeyboard";
import { DuoCombiner } from "@/components/DuoCombiner";
import { HeroGenerator } from "@/components/HeroGenerator";
import { NicknameToSymbols } from "@/components/tools/NicknameToSymbols";
import { GroupedBySymbol } from "@/components/tools/GroupedBySymbol";
import { GenderNames } from "@/components/tools/GenderNames";
import { PasswordGenerator } from "@/components/tools/PasswordGenerator";
import { DomainNameGenerator } from "@/components/tools/DomainNameGenerator";
import { FavoritesModal } from "@/components/FavoritesModal";
import { SeoFaqSection } from "@/components/SeoFaqSection";
import { TRANSLATIONS } from "@/lib/translations";
import { Check, X } from "lucide-react";

function UrlParamWatcher({
  onParams,
}: {
  onParams: (tab: string | null, q: string | null) => void;
}) {
  const searchParams = useSearchParams();
  useEffect(() => {
    onParams(searchParams.get("tab"), searchParams.get("q"));
  }, [searchParams, onParams]);
  return null;
}

export default function HomePage({ initialLang = "EN" }: { initialLang?: string }) {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [currentLang, setCurrentLang] = useState<string>(initialLang);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState<boolean>(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleParamsChange = React.useCallback((tab: string | null, q: string | null) => {
    if (tab) {
      setActiveTab(tab);
      if (q !== null) setSearchQuery(q);
    } else if (q !== null) {
      setSearchQuery(q);
      setActiveTab("home");
    } else {
      // Plain "/" — no params at all: go back to default homepage
      setActiveTab("home");
      setSearchQuery("");
    }
  }, []);

  // Load favorites & language from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("ng_favorites");
      if (saved) {
        setFavorites(JSON.parse(saved));
      }
      if (initialLang === "EN") {
        const savedLang = localStorage.getItem("ng_lang");
        if (savedLang && TRANSLATIONS[savedLang]) {
          setCurrentLang(savedLang);
        }
      } else {
        setCurrentLang(initialLang);
      }
    } catch {
      // Ignore in private mode
    }
  }, [initialLang]);

  const saveFavorites = (updated: string[]) => {
    setFavorites(updated);
    try {
      localStorage.setItem("ng_favorites", JSON.stringify(updated));
    } catch {
      // Ignore
    }
  };

  const handleToggleFavorite = (name: string) => {
    if (favorites.includes(name)) {
      saveFavorites(favorites.filter((f) => f !== name));
      showToast("Removed from favorites");
    } else {
      saveFavorites([name, ...favorites]);
      showToast("Saved to favorites ❤️");
    }
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 2500);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setActiveTab("home");
  };

  const handleSelectLanguage = (lang: string) => {
    setCurrentLang(lang);
    try {
      localStorage.setItem("ng_lang", lang);
    } catch {
      // Ignore
    }
    const langDict = TRANSLATIONS[lang] || TRANSLATIONS.EN;
    showToast(`${langDict.copiedToast || "Language switched: " + lang}`);
  };

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.EN;

  return (
    <div className="min-h-screen bg-[#ecf0f5] text-[#222]">
      {/* Top Header */}
      <NickHeader
        onSearch={handleSearch}
        onToggleMobileSidebar={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        favoritesCount={favorites.length}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
        t={t}
      />

      {/* Main 3-Column Body Container */}
      <div className="mx-auto max-w-[1440px] px-2 sm:px-3 lg:px-4 py-3 sm:py-4">
        <div className="flex flex-col lg:flex-row items-start gap-4">
          {/* Left Column: Sidebar Navigation (Desktop) */}
          <div className="hidden md:block">
            <NickSidebar
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              currentLang={currentLang}
              onSelectLang={handleSelectLanguage}
              t={t}
            />
          </div>

          {/* Mobile Sidebar Modal */}
          {mobileSidebarOpen && (
            <div className="fixed inset-0 z-50 flex md:hidden bg-black/60 backdrop-blur-sm">
              <div className="relative w-72 bg-white h-full shadow-2xl p-2 overflow-y-auto">
                <div className="flex justify-between items-center p-3 border-b border-gray-200">
                  <span className="font-bold text-[#354861]">Menu</span>
                  <button onClick={() => setMobileSidebarOpen(false)} className="p-1">
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <NickSidebar
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  currentLang={currentLang}
                  onSelectLang={handleSelectLanguage}
                  onItemClick={() => setMobileSidebarOpen(false)}
                  t={t}
                />
              </div>
            </div>
          )}

          {/* Center Column: Active Tool or Home View */}
          <main className="flex-1 min-w-0 w-full">
            {activeTab === "home" && (
              <NickCenterContent
                searchQuery={searchQuery}
                onCopySuccess={(text) => showToast(`Copied "${text}"`)}
                onSelectName={(name) => {
                  setSearchQuery(name);
                  setActiveTab("home");
                }}
                t={t}
              />
            )}

            {activeTab === "stylish-text" && (
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-white border border-[#d2d6de] px-4 py-2 rounded-[3px]">
                  <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                    {t.stylishTextSymbols}
                  </span>
                  <button
                    onClick={() => setActiveTab("home")}
                    className="text-xs font-semibold text-[#0055ff] hover:underline cursor-pointer"
                  >
                    {t.backHome}
                  </button>
                </div>
                <SymbolKeyboard onCopySuccess={(sym) => showToast(`Copied "${sym}"`)} />
              </div>
            )}

            {activeTab === "names-mixer" && (
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-white border border-[#d2d6de] px-4 py-2 rounded-[3px]">
                  <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                    {t.namesMixer}
                  </span>
                  <button
                    onClick={() => setActiveTab("home")}
                    className="text-xs font-semibold text-[#0055ff] hover:underline cursor-pointer"
                  >
                    {t.backHome}
                  </button>
                </div>
                <DuoCombiner onCopySuccess={(pair) => showToast(`Copied "${pair}"`)} />
              </div>
            )}

            {activeTab === "nickname-to-symbols" && (
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-white border border-[#d2d6de] px-4 py-2 rounded-[3px]">
                  <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                    {t.nicknameToSymbols}
                  </span>
                  <button
                    onClick={() => setActiveTab("home")}
                    className="text-xs font-semibold text-[#0055ff] hover:underline cursor-pointer"
                  >
                    {t.backHome}
                  </button>
                </div>
                <NicknameToSymbols onCopySuccess={(text) => showToast(`Copied "${text}"`)} />
              </div>
            )}

            {activeTab === "cool-text" && (
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-white border border-[#d2d6de] px-4 py-2 rounded-[3px]">
                  <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                    {t.coolTextGenerator}
                  </span>
                  <button
                    onClick={() => setActiveTab("home")}
                    className="text-xs font-semibold text-[#0055ff] hover:underline cursor-pointer"
                  >
                    {t.backHome}
                  </button>
                </div>
                <HeroGenerator
                  favorites={favorites}
                  onToggleFavorite={handleToggleFavorite}
                  onCopySuccess={(name) => showToast(`Copied "${name}"`)}
                />
              </div>
            )}

            {activeTab === "grouped-by-symbol" && (
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-white border border-[#d2d6de] px-4 py-2 rounded-[3px]">
                  <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                    {t.groupedBySymbol}
                  </span>
                  <button
                    onClick={() => setActiveTab("home")}
                    className="text-xs font-semibold text-[#0055ff] hover:underline cursor-pointer"
                  >
                    {t.backHome}
                  </button>
                </div>
                <GroupedBySymbol onCopySuccess={(text) => showToast(`Copied "${text}"`)} />
              </div>
            )}

            {activeTab === "male-names" && (
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-white border border-[#d2d6de] px-4 py-2 rounded-[3px]">
                  <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                    {t.maleNames}
                  </span>
                  <button
                    onClick={() => setActiveTab("home")}
                    className="text-xs font-semibold text-[#0055ff] hover:underline cursor-pointer"
                  >
                    {t.backHome}
                  </button>
                </div>
                <GenderNames gender="male" onCopySuccess={(text) => showToast(`Copied "${text}"`)} />
              </div>
            )}

            {activeTab === "female-names" && (
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-white border border-[#d2d6de] px-4 py-2 rounded-[3px]">
                  <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                    {t.femaleNames}
                  </span>
                  <button
                    onClick={() => setActiveTab("home")}
                    className="text-xs font-semibold text-[#0055ff] hover:underline cursor-pointer"
                  >
                    {t.backHome}
                  </button>
                </div>
                <GenderNames gender="female" onCopySuccess={(text) => showToast(`Copied "${text}"`)} />
              </div>
            )}

            {activeTab === "password-generator" && (
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-white border border-[#d2d6de] px-4 py-2 rounded-[3px]">
                  <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                    {t.passwordGenerator}
                  </span>
                  <button
                    onClick={() => setActiveTab("home")}
                    className="text-xs font-semibold text-[#0055ff] hover:underline cursor-pointer"
                  >
                    {t.backHome}
                  </button>
                </div>
                <PasswordGenerator onCopySuccess={(text) => showToast(`Copied "${text}"`)} />
              </div>
            )}

            {activeTab === "domain-names" && (
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-white border border-[#d2d6de] px-4 py-2 rounded-[3px]">
                  <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                    {t.domainNames}
                  </span>
                  <button
                    onClick={() => setActiveTab("home")}
                    className="text-xs font-semibold text-[#0055ff] hover:underline cursor-pointer"
                  >
                    {t.backHome}
                  </button>
                </div>
                <DomainNameGenerator onCopySuccess={(text) => showToast(`Copied "${text}"`)} />
              </div>
            )}

            {/* SEO Informational FAQs below content */}
            <div className="bg-white rounded-[3px] border border-[#d2d6de] shadow-sm mt-4 p-4">
              <h2 className="text-[17px] font-semibold text-[#333] mb-3">
                {currentLang === "FR"
                  ? "Guide des Pseudos Stylés & Questions Fréquentes"
                  : "Frequently Asked Questions & Gaming Name Guide"}
              </h2>
              <SeoFaqSection lang={currentLang} />
            </div>
          </main>

          {/* Right Column: Recent Searches & Popularity Trends */}
          <div className="w-full lg:w-[300px]">
            <NickRightSidebar
              onSelectName={(name) => {
                setSearchQuery(name);
                setActiveTab("home");
              }}
              onCopySuccess={(text) => showToast(`Copied "${text}" to clipboard!`)}
              t={t}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <NickFooter />

      {/* Favorites Drawer */}
      <FavoritesModal
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favorites={favorites}
        onRemoveFavorite={(name) => saveFavorites(favorites.filter((f) => f !== name))}
        onClearAll={() => {
          saveFavorites([]);
          showToast("Cleared favorites");
        }}
        onCopySuccess={(text) => showToast(`Copied "${text}"`)}
      />

      {/* URL Search Params Watcher */}
      <Suspense fallback={null}>
        <UrlParamWatcher onParams={handleParamsChange} />
      </Suspense>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-lg bg-[#354861] text-white px-4 py-2.5 text-xs sm:text-sm font-semibold shadow-2xl border border-cyan-400/40">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#00a65a] text-white">
            <Check className="h-3 w-3 stroke-[3]" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
