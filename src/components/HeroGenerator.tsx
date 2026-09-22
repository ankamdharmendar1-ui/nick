"use client";

import React, { useState, useMemo } from "react";
import { Search, Shuffle, X, Sparkles, Filter } from "lucide-react";
import { generateAllStyles, DecoratedStyle } from "../lib/fontTransforms";
import { NicknameCard } from "./NicknameCard";
import { AdPlaceholder } from "./AdPlaceholder";

interface HeroGeneratorProps {
  initialText?: string;
  favorites: string[];
  onToggleFavorite: (name: string) => void;
  onCopySuccess: (name: string) => void;
}

const SAMPLE_SEEDS = [
  "Shadow", "Viper", "Slayer", "Alpha", "Phantom", "Legend", "Sniper", 
  "Tokyo", "Devil", "Angel", "Ghost", "Glitch", "Dragon", "Phoenix", "Nova"
];

const QUICK_DECOR_SYMBOLS = [
  "亗", "x͜×", "⚡", "꧁༒", "༒꧂", "メ", "♡", "ᥫ᭡", "★彡", "☠️", "『", "』", "【", "】", "✦", "々"
];

export const HeroGenerator: React.FC<HeroGeneratorProps> = ({
  initialText = "Shadow",
  favorites,
  onToggleFavorite,
  onCopySuccess,
}) => {
  const [inputText, setInputText] = useState(initialText);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const handleRandomSeed = () => {
    const random = SAMPLE_SEEDS[Math.floor(Math.random() * SAMPLE_SEEDS.length)];
    setInputText(random);
  };

  const handleAppendSymbol = (sym: string) => {
    setInputText((prev) => prev + sym);
  };

  const styles: DecoratedStyle[] = useMemo(() => {
    return generateAllStyles(inputText);
  }, [inputText]);

  const categories = ["All", "Gamer", "Aesthetic", "Badass", "Fonts", "Fancy"];

  const filteredStyles = useMemo(() => {
    if (selectedCategory === "All") return styles;
    return styles.filter((s) => s.category === selectedCategory);
  }, [styles, selectedCategory]);

  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16">
      {/* Background Neon Glows */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[600px] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-40 right-10 h-[300px] w-[400px] rounded-full bg-fuchsia-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Hero Title & Subtitle optimized for Google SEO */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Generate Over 60+ Pro Nickname Styles Instantly</span>
          </div>

          <h1 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Stylish Gamer & Aesthetic{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
              Nickname Generator
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            Create cool, rare symbols, fancy fonts, and aesthetic gamertags for <strong>Free Fire</strong>, <strong>PUBG Mobile / BGMI</strong>, <strong>Valorant</strong>, <strong>Roblox</strong>, and <strong>Discord</strong>. Click to copy instantly!
          </p>
        </div>

        {/* Interactive Search & Live Styler Input Box */}
        <div className="mx-auto mt-8 max-w-2xl">
          <div className="relative flex items-center rounded-2xl border-2 border-zinc-700 bg-zinc-900/90 p-2 shadow-2xl transition-all focus-within:border-cyan-500 focus-within:shadow-cyan-500/20">
            <Search className="ml-3 h-5 w-5 text-zinc-400" />
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type any nickname or gamertag..."
              className="w-full bg-transparent px-3 py-2 text-base font-semibold text-white placeholder-zinc-500 focus:outline-none sm:text-lg"
              maxLength={25}
            />
            {inputText && (
              <button
                onClick={() => setInputText("")}
                className="rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                title="Clear input"
              >
                <X className="h-4 w-4" />
              </button>
            )}
            <button
              onClick={handleRandomSeed}
              className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-4 py-2 text-xs font-bold text-white shadow-md transition-all hover:scale-105 active:scale-95 sm:text-sm"
              title="Generate random name"
            >
              <Shuffle className="h-4 w-4" />
              <span className="hidden sm:inline">Random</span>
            </button>
          </div>

          {/* Quick Insert Symbol Bar */}
          <div className="mt-3 flex items-center gap-1.5 overflow-x-auto pb-1 text-xs text-zinc-400 scrollbar-none">
            <span className="shrink-0 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
              Add Symbol:
            </span>
            {QUICK_DECOR_SYMBOLS.map((sym, idx) => (
              <button
                key={idx}
                onClick={() => handleAppendSymbol(sym)}
                className="shrink-0 rounded-lg border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 font-mono text-xs font-semibold text-zinc-300 transition-all hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-300 active:scale-95"
                title={`Add ${sym}`}
              >
                {sym}
              </button>
            ))}
          </div>
        </div>

        {/* Top Header Leaderboard Ad (High Visibility) */}
        <AdPlaceholder slotType="leaderboard" />

        {/* Category Filters Bar */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800/80 pb-4">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            <Filter className="h-4 w-4 text-zinc-400 mr-1 hidden sm:inline" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-cyan-500 text-black shadow-md shadow-cyan-500/20"
                    : "border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs font-medium text-zinc-400">
            Showing <strong className="text-cyan-400">{filteredStyles.length}</strong> stylish variations for &quot;{inputText || "ProGamer"}&quot;
          </div>
        </div>

        {/* Live Nickname Cards Grid */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredStyles.slice(0, 6).map((item) => (
            <NicknameCard
              key={item.id}
              name={item.styled}
              category={item.category}
              subtitle={item.name}
              isFavorite={favorites.includes(item.styled)}
              onToggleFavorite={onToggleFavorite}
              onCopySuccess={onCopySuccess}
            />
          ))}
        </div>

        {/* Native In-Feed AdSlot between cards */}
        <AdPlaceholder slotType="infeed" />

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredStyles.slice(6).map((item) => (
            <NicknameCard
              key={item.id}
              name={item.styled}
              category={item.category}
              subtitle={item.name}
              isFavorite={favorites.includes(item.styled)}
              onToggleFavorite={onToggleFavorite}
              onCopySuccess={onCopySuccess}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
