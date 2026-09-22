"use client";

import React, { useState, useMemo } from "react";

const LOVE_SYMBOLS = [
  "♡", "❤", "💕", "💞", "💗", "💓", "💝", "❣",
  "🌹", "✿", "❦", "༒", "ི♥ྀ", "🌸", "💑", "💋",
  "🫶", "💍", "🕊️", "✨", "🎀", "👑", "∞"
];

export default function LoveStyleTool() {
  const [name1, setName1] = useState("Romeo");
  const [name2, setName2] = useState("Juliet");
  const [copied, setCopied] = useState<string | null>(null);

  const combos = useMemo(() => {
    const n1 = name1.trim() || "Love";
    const n2 = name2.trim() || "Heart";

    return [
      `♡ ${n1} & ${n2} ♡`,
      `❤️ ${n1} × ${n2} ❤️`,
      `꧁♡${n1}•${n2}♡꧂`,
      `${n1} 💕 ${n2}`,
      `✨ ${n1} + ${n2} ✨`,
      `🌹 ${n1} & ${n2} 🌹`,
      `❣️ ${n1}_${n2} ❣️`,
      `꧁${n1} ❤ ${n2}꧂`,
      `${n1} • 💍 • ${n2}`,
      `𝓛𝓸𝓿𝓮: ${n1} ♡ ${n2}`,
      `★ ${n1} & ${n2} ★`,
      `${n1} ི♥ྀ ${n2}`,
      `【${n1} ❤ ${n2}】`,
      `🌸 ${n1} × ${n2} 🌸`,
      `『${n1}』♡『${n2}』`,
      `💑 ${n1} & ${n2}`,
      `꧁${n1} 💞 ${n2}꧂`,
      `✿ ${n1} • ${n2} ✿`,
      `${n1} ∞ ${n2}`,
      `❦ ${n1} & ${n2} ❦`,
      `👑 ${n1} & 👑 ${n2}`,
      `💋 ${n1}_${n2} 💋`,
      `🕊️ ${n1} & ${n2} 🕊️`,
      `🎀 ${n1} ♡ ${n2} 🎀`
    ];
  }, [name1, name2]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied((p) => (p === text ? null : p)), 2000);
  };

  return (
    <div className="space-y-4">
      {/* Inputs Box */}
      <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#e83e8c] p-4">
        <div className="text-[13px] font-bold text-[#354861] uppercase tracking-wider mb-2">
          Enter Your Two Names
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-[12px] font-semibold text-gray-600 mb-1">First Name / Partner 1</label>
            <input
              type="text"
              value={name1}
              onChange={(e) => setName1(e.target.value)}
              placeholder="e.g. Romeo"
              className="w-full border border-[#d2d6de] rounded-[2px] px-3 py-2 text-[14px] text-gray-800 focus:border-[#e83e8c] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-[12px] font-semibold text-gray-600 mb-1">Second Name / Partner 2</label>
            <input
              type="text"
              value={name2}
              onChange={(e) => setName2(e.target.value)}
              placeholder="e.g. Juliet"
              className="w-full border border-[#d2d6de] rounded-[2px] px-3 py-2 text-[14px] text-gray-800 focus:border-[#e83e8c] focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Generated Combos Grid */}
      <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7]">
        <div className="border-b border-[#f4f4f4] px-4 py-2.5 flex items-center justify-between">
          <h2 className="text-[16px] font-semibold text-[#333] m-0">
            💕 Romantic Couple Name Combinations ({combos.length})
          </h2>
          <span className="text-[11px] text-gray-400 bg-[#f4f4f4] px-2 py-0.5 rounded">
            Click to copy
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
          {combos.map((text, i) => (
            <div
              key={i}
              onClick={() => handleCopy(text)}
              className="flex items-center justify-between px-3 py-2.5 border-b border-[#f4f4f4] hover:bg-[#fff9fa] cursor-pointer group transition-colors"
            >
              <span className="font-mono text-[14px] text-[#222] select-all truncate">{text}</span>
              <span
                className={`text-[11px] font-semibold px-2 py-0.5 rounded ml-2 shrink-0 transition-colors ${
                  copied === text
                    ? "bg-[#00a65a] text-white"
                    : "bg-[#fce8ef] text-[#d63384] group-hover:bg-[#e83e8c] group-hover:text-white"
                }`}
              >
                {copied === text ? "Copied!" : "Copy"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Love Symbols Vault */}
      <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] p-4">
        <div className="border-b border-[#f4f4f4] pb-2 mb-3">
          <h3 className="text-[15px] font-semibold text-[#333] m-0">
            💖 Click-to-Copy Love Symbols
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {LOVE_SYMBOLS.map((sym, i) => (
            <button
              key={i}
              onClick={() => handleCopy(sym)}
              className="h-10 w-10 flex items-center justify-center rounded border border-[#d2d6de] bg-[#fdfdfd] hover:bg-[#fce8ef] hover:border-[#e83e8c] text-[18px] text-gray-800 transition-all cursor-pointer shadow-xs active:scale-95"
              title={`Click to copy ${sym}`}
            >
              {sym}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
