"use client";

import React, { useState, useMemo } from "react";
import { Search, Shuffle, Copy, Check, Sparkles, Plus, Swords, Feather, Heart, Terminal } from "lucide-react";
import confetti from "canvas-confetti";
import { generateAllStyles, DecoratedStyle } from "@/lib/fontTransforms";

interface CoolTextGridProps {
  initialText?: string;
  onCopySuccess?: (text: string) => void;
}

const SAMPLE_SEEDS = [
  "Shadow", "Viper", "Slayer", "Alpha", "Phantom", "Legend", "Sniper", 
  "Tokyo", "Devil", "Angel", "Ghost", "Glitch", "Dragon", "Phoenix", "Nova", "CoolGamer"
];

const QUICK_SYMBOLS = [
  "亗", "メ", "⚡", "x͜×", "♡", "ᥫ᭡", "★", "✦", "👑", "▄︻デ══━一", "『", "』", "【", "】", "々"
];

type CategoryFilter = "All" | "Gamer" | "Fonts" | "Aesthetic" | "Fancy" | "Badass";

export default function CoolTextGrid({
  initialText = "CoolGamer",
  onCopySuccess,
}: CoolTextGridProps) {
  const [inputText, setInputText] = useState(initialText);
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const cleanText = inputText.trim() || "CoolGamer";

  const allStyles: DecoratedStyle[] = useMemo(() => {
    return generateAllStyles(cleanText);
  }, [cleanText]);

  const filteredStyles = useMemo(() => {
    if (selectedCategory === "All") return allStyles;
    return allStyles.filter((s) => s.category === selectedCategory);
  }, [allStyles, selectedCategory]);

  const handleCopy = (styledText: string, id: string) => {
    navigator.clipboard.writeText(styledText);
    setCopiedId(id);
    confetti({
      particleCount: 25,
      spread: 55,
      origin: { y: 0.8 },
      colors: ["#3c8dbc", "#00c0ef", "#354861"],
    });
    if (onCopySuccess) onCopySuccess(styledText);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleRandomSeed = () => {
    const random = SAMPLE_SEEDS[Math.floor(Math.random() * SAMPLE_SEEDS.length)];
    setInputText(random);
  };

  const handleAppendSymbol = (sym: string) => {
    setInputText((prev) => prev + sym);
  };

  return (
    <div className="p-4 sm:p-5">
      {/* Input Area */}
      <div className="bg-[#f8fafc] border border-[#d2d6de] rounded-[3px] p-4 mb-4">
        <label className="block text-xs font-bold text-[#354861] uppercase tracking-wider mb-1.5">
          Type Name or Text to Generate Cool Styles:
        </label>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type any word or nickname..."
              maxLength={30}
              className="w-full h-[42px] pl-9 pr-8 border border-[#ccd0d5] rounded-[3px] text-[15px] font-semibold text-[#333] focus:border-[#3c8dbc] focus:ring-1 focus:ring-[#3c8dbc] focus:outline-none bg-white shadow-inner"
            />
            {inputText && (
              <button
                onClick={() => setInputText("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs font-bold"
                title="Clear input"
              >
                ✕
              </button>
            )}
          </div>

          <button
            onClick={handleRandomSeed}
            type="button"
            className="h-[42px] px-4 bg-white border border-[#ccd0d5] hover:bg-[#eef4fb] hover:border-[#3c8dbc] text-[#354861] font-bold text-xs uppercase rounded-[3px] flex items-center justify-center gap-1.5 transition-colors"
          >
            <Shuffle className="w-3.5 h-3.5" /> Sample
          </button>
        </div>

        {/* Quick Symbol Insertion Chips */}
        <div className="mt-3.5 pt-3 border-t border-[#e8ecf0]">
          <div className="text-[11px] font-bold text-[#555] uppercase tracking-wider mb-2 flex items-center gap-1">
            <Plus className="w-3.5 h-3.5 text-[#3c8dbc]" /> Click to Insert Symbols:
          </div>
          <div className="flex flex-wrap gap-1">
            {QUICK_SYMBOLS.map((sym, sIdx) => (
              <button
                key={sIdx}
                onClick={() => handleAppendSymbol(sym)}
                title={`Add ${sym}`}
                className="px-2 py-1 bg-white border border-[#ccd0d5] hover:border-[#3c8dbc] hover:bg-[#eef4fb] text-[#222] rounded-[3px] text-xs font-mono font-bold transition-colors"
              >
                {sym}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-1.5 mb-4 border-b border-[#d2d6de] pb-2">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`px-3 py-1.5 text-xs font-bold rounded-[3px] transition-colors ${
            selectedCategory === "All"
              ? "bg-[#354861] text-white"
              : "bg-[#eef2f7] text-[#555] hover:bg-[#dde4ed]"
          }`}
        >
          All Styles ({allStyles.length})
        </button>
        <button
          onClick={() => setSelectedCategory("Gamer")}
          className={`px-3 py-1.5 text-xs font-bold rounded-[3px] transition-colors flex items-center gap-1 ${
            selectedCategory === "Gamer"
              ? "bg-[#f39c12] text-white"
              : "bg-[#eef2f7] text-[#555] hover:bg-[#dde4ed]"
          }`}
        >
          <Swords className="w-3 h-3" /> Gamer &amp; Battle
        </button>
        <button
          onClick={() => setSelectedCategory("Fonts")}
          className={`px-3 py-1.5 text-xs font-bold rounded-[3px] transition-colors flex items-center gap-1 ${
            selectedCategory === "Fonts"
              ? "bg-[#00a65a] text-white"
              : "bg-[#eef2f7] text-[#555] hover:bg-[#dde4ed]"
          }`}
        >
          <Feather className="w-3 h-3" /> Unicode Fonts
        </button>
        <button
          onClick={() => setSelectedCategory("Fancy")}
          className={`px-3 py-1.5 text-xs font-bold rounded-[3px] transition-colors flex items-center gap-1 ${
            selectedCategory === "Fancy"
              ? "bg-[#3c8dbc] text-white"
              : "bg-[#eef2f7] text-[#555] hover:bg-[#dde4ed]"
          }`}
        >
          <Sparkles className="w-3 h-3" /> Fancy &amp; Calligraphy
        </button>
        <button
          onClick={() => setSelectedCategory("Aesthetic")}
          className={`px-3 py-1.5 text-xs font-bold rounded-[3px] transition-colors flex items-center gap-1 ${
            selectedCategory === "Aesthetic"
              ? "bg-[#e91e63] text-white"
              : "bg-[#eef2f7] text-[#555] hover:bg-[#dde4ed]"
          }`}
        >
          <Heart className="w-3 h-3" /> Aesthetic &amp; Soft
        </button>
        <button
          onClick={() => setSelectedCategory("Badass")}
          className={`px-3 py-1.5 text-xs font-bold rounded-[3px] transition-colors flex items-center gap-1 ${
            selectedCategory === "Badass"
              ? "bg-[#605ca8] text-white"
              : "bg-[#eef2f7] text-[#555] hover:bg-[#dde4ed]"
          }`}
        >
          <Terminal className="w-3 h-3" /> Badass &amp; Glitch
        </button>
      </div>

      {/* Grid of Styles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {filteredStyles.map((item, idx) => {
          const cardId = `style-${idx}`;
          const isCopied = copiedId === cardId;

          return (
            <div
              key={idx}
              onClick={() => handleCopy(item.styled, cardId)}
              className={`bg-white border rounded-[3px] p-3 shadow-sm hover:shadow transition-all cursor-pointer flex flex-col justify-between group ${
                isCopied
                  ? "border-emerald-500 bg-emerald-50/40"
                  : "border-[#d2d6de] hover:border-[#3c8dbc]"
              }`}
            >
              {/* Header: Name of Style & Category Tag */}
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-[#f4f4f4]">
                <span className="text-[11px] font-bold text-[#354861] uppercase tracking-wider truncate max-w-[150px]">
                  {item.name}
                </span>
                <span className="text-[10px] text-gray-500 bg-[#f4f6f9] border border-[#e2e8f0] px-1.5 py-0.5 rounded font-mono">
                  {item.category}
                </span>
              </div>

              {/* Styled Text Display */}
              <div className="py-2.5 px-1 text-center font-mono text-[16px] font-bold text-[#222] break-all group-hover:text-[#3c8dbc] transition-colors min-h-[48px] flex items-center justify-center">
                {item.styled}
              </div>

              {/* 1-Click Copy Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCopy(item.styled, cardId);
                }}
                className={`mt-2 w-full py-1.5 px-3 text-xs font-bold rounded-[3px] flex items-center justify-center gap-1.5 transition-colors ${
                  isCopied
                    ? "bg-emerald-600 text-white"
                    : "bg-[#f8fafc] border border-[#ccd0d5] text-[#333] group-hover:bg-[#354861] group-hover:text-white group-hover:border-[#354861]"
                }`}
              >
                {isCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5" /> COPIED!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-gray-500 group-hover:text-white" /> COPY COOL TEXT
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>

      {/* Floating Copied Toast */}
      {copiedId && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-[3px] border border-emerald-600 bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-xl">
          <Check className="w-4 h-4" />
          Copied to clipboard!
        </div>
      )}
    </div>
  );
}
