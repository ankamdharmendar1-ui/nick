"use client";

import React, { useState } from "react";
import { SYMBOL_CATEGORIES } from "../lib/symbolLibrary";
import { Copy, Check, Sparkles, Plus, Layers } from "lucide-react";
import { AdPlaceholder } from "./AdPlaceholder";
import confetti from "canvas-confetti";

interface SymbolKeyboardProps {
  onCopySuccess: (sym: string) => void;
}

export const SymbolKeyboard: React.FC<SymbolKeyboardProps> = ({ onCopySuccess }) => {
  const [activeCategory, setActiveCategory] = useState<string>(SYMBOL_CATEGORIES[0].category);
  const [customBuilderText, setCustomBuilderText] = useState<string>("");
  const [copiedSymbol, setCopiedSymbol] = useState<string | null>(null);
  const [builderCopied, setBuilderCopied] = useState(false);

  const currentCategoryData =
    SYMBOL_CATEGORIES.find((c) => c.category === activeCategory) || SYMBOL_CATEGORIES[0];

  const handleCopySymbol = (sym: string) => {
    navigator.clipboard.writeText(sym);
    setCopiedSymbol(sym);
    onCopySuccess(sym);

    setTimeout(() => {
      setCopiedSymbol(null);
    }, 1500);
  };

  const handleAppendToBuilder = (sym: string) => {
    setCustomBuilderText((prev) => prev + sym);
  };

  const handleCopyBuilder = () => {
    if (!customBuilderText) return;
    navigator.clipboard.writeText(customBuilderText);
    setBuilderCopied(true);
    confetti({
      particleCount: 25,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#06b6d4", "#a855f7"],
    });
    onCopySuccess(customBuilderText);
    setTimeout(() => setBuilderCopied(false), 2000);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Header */}
      <div className="border-b border-zinc-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-fuchsia-400">
          <Sparkles className="h-4 w-4" />
          <span>Copy & Paste Symbol Palette</span>
        </div>
        <h2 className="mt-1 text-2xl font-black text-white sm:text-3xl">
          Rare Gamer Symbols & Kaomoji Vault
        </h2>
        <p className="mt-1 text-sm text-zinc-400">
          Click any symbol to copy it directly, or build your own custom gamertag in the builder below.
        </p>
      </div>

      {/* Interactive Custom Gamertag Builder */}
      <div className="mt-6 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-zinc-900 via-zinc-900 to-cyan-950/20 p-5 shadow-xl">
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2 text-xs font-bold text-cyan-400">
            <Layers className="h-4 w-4" />
            <span>Interactive Custom Name Builder</span>
          </div>
          {customBuilderText && (
            <button
              onClick={() => setCustomBuilderText("")}
              className="text-xs text-zinc-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <input
            type="text"
            value={customBuilderText}
            onChange={(e) => setCustomBuilderText(e.target.value)}
            placeholder="Click symbols below or type here to craft your custom tag..."
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 font-mono text-base font-bold text-white placeholder-zinc-500 focus:border-cyan-500 focus:outline-none"
          />
          <button
            onClick={handleCopyBuilder}
            disabled={!customBuilderText}
            className={`flex shrink-0 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold shadow-lg transition-all w-full sm:w-auto ${
              builderCopied
                ? "bg-emerald-500 text-white"
                : customBuilderText
                ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white hover:scale-105"
                : "bg-zinc-800 text-zinc-500 cursor-not-allowed"
            }`}
          >
            {builderCopied ? (
              <>
                <Check className="h-4 w-4" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                <span>Copy Custom Tag</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {SYMBOL_CATEGORIES.map((cat) => (
          <button
            key={cat.category}
            onClick={() => setActiveCategory(cat.category)}
            className={`shrink-0 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
              activeCategory === cat.category
                ? "bg-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/20"
                : "border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700 hover:text-white"
            }`}
          >
            {cat.category}
          </button>
        ))}
      </div>

      <div className="mt-3 text-xs text-zinc-400">
        {currentCategoryData.description}
      </div>

      {/* Symbol Tiles Grid */}
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {currentCategoryData.symbols.map((sym, idx) => {
          const isCopied = copiedSymbol === sym;
          return (
            <div
              key={idx}
              className="group relative flex flex-col items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 transition-all hover:border-fuchsia-500/50 hover:bg-zinc-900 hover:shadow-lg hover:shadow-fuchsia-500/5"
            >
              {/* Symbol Display */}
              <div className="my-2 select-all text-center font-mono text-xl font-bold text-white group-hover:text-fuchsia-300">
                {sym}
              </div>

              {/* Action Buttons */}
              <div className="mt-2 flex w-full items-center justify-center gap-1.5 pt-2 border-t border-zinc-800/60">
                <button
                  onClick={() => handleCopySymbol(sym)}
                  className={`flex flex-1 items-center justify-center gap-1 rounded-lg py-1.5 text-[11px] font-bold transition-all ${
                    isCopied
                      ? "bg-emerald-500 text-white"
                      : "bg-zinc-800 text-zinc-300 hover:bg-fuchsia-500 hover:text-white"
                  }`}
                  title="Copy symbol"
                >
                  {isCopied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                  <span>{isCopied ? "Copied" : "Copy"}</span>
                </button>

                <button
                  onClick={() => handleAppendToBuilder(sym)}
                  className="rounded-lg bg-zinc-800 p-1.5 text-zinc-400 hover:bg-cyan-500/20 hover:text-cyan-300"
                  title="Insert into Custom Builder"
                >
                  <Plus className="h-3 w-3" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <AdPlaceholder slotType="infeed" />
    </section>
  );
};
