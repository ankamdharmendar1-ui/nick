"use client";

import React, { useState, useMemo } from "react";
import { transformWithMap, maps } from "@/lib/fontTransforms";

interface NickItem {
  id: string;
  name: string;
  category: "kaomoji" | "aesthetic" | "hearts" | "girls" | "gaming";
}

const CUTE_NICKNAMES: NickItem[] = [
  // Kaomoji & Faces
  { id: "c1", name: "(✿◠‿◠) 𝓒𝓾𝓽𝓲𝓮 (◠‿◠✿)", category: "kaomoji" },
  { id: "c2", name: "(｡♥‿♥｡) Sweetie", category: "kaomoji" },
  { id: "c3", name: "ʕ•ᴥ•ʔ Teddy Bear", category: "kaomoji" },
  { id: "c4", name: "(◕‿◕✿) Princess", category: "kaomoji" },
  { id: "c5", name: "(づ｡◕‿‿◕｡)づ Hugs", category: "kaomoji" },
  { id: "c6", name: "(=^･^=) Kitty Cat", category: "kaomoji" },
  { id: "c7", name: "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ Sparkle", category: "kaomoji" },
  { id: "c8", name: "⊂(・▽・⊂) Cutie Pie", category: "kaomoji" },
  { id: "c9", name: "(◕ᴗ◕✿) Sweet Angel", category: "kaomoji" },
  { id: "c10", name: "꒰ᐢ. .ᐢ꒱ Bunny", category: "kaomoji" },

  // Aesthetic & Soft
  { id: "c11", name: "♡ 𝑠 𝑜 𝑓 𝑡 _ 𝑔 𝑖 𝑟 𝑙 ♡", category: "aesthetic" },
  { id: "c12", name: "🌸 𝓕𝓵𝓸𝔀𝓮𝓻 𝓖𝓲𝓻𝓵 🌸", category: "aesthetic" },
  { id: "c13", name: "☁️ ˖⁺｡˚ Moon Child ˚｡⁺˖ ☁️", category: "aesthetic" },
  { id: "c14", name: "*ੈ✩‧₊˚ Baby Angel ˚₊‧✩ੈ*", category: "aesthetic" },
  { id: "c15", name: "✿ 𝓢𝓾𝓷𝓯𝓵𝓸𝔀𝓮𝓻 ࿐", category: "aesthetic" },
  { id: "c16", name: "🌙 ⋆｡°✩ Starlight ✩°｡⋆ 🌙", category: "aesthetic" },
  { id: "c17", name: "🍓 Strawberry Milk 🍓", category: "aesthetic" },
  { id: "c18", name: "✨ Peach Blossom ✨", category: "aesthetic" },
  { id: "c19", name: "𝓥𝓪𝓷𝓲𝓵𝓵𝓪 𝓓𝓻𝓮𝓪𝓶 ♡", category: "aesthetic" },
  { id: "c20", name: "🌷 𝓣𝓾𝓵𝓲𝓹 𝓑𝓪𝓫𝔂 🌷", category: "aesthetic" },

  // Hearts & Love Symbols
  { id: "c21", name: "♡ ᥫ᭡ Honey Bun ᥫ᭡ ♡", category: "hearts" },
  { id: "c22", name: "💖 Sweetheart 💖", category: "hearts" },
  { id: "c23", name: "𝓑𝓻𝓸𝓴𝓮𝓷 𝓗𝓮𝓪𝓻𝓽♡", category: "hearts" },
  { id: "c24", name: "💕 Love Bug 💕", category: "hearts" },
  { id: "c25", name: "♡ Sugar Plum ♡", category: "hearts" },
  { id: "c26", name: "💓 Buttercup 💓", category: "hearts" },
  { id: "c27", name: "💌 Little Dreamer 💌", category: "hearts" },
  { id: "c28", name: "♡ 𝓒𝓱𝓮𝓻𝓻𝔂 𝓑𝓵𝓸𝓼𝓼𝓸𝓶 ♡", category: "hearts" },

  // Girls & Princess
  { id: "c29", name: "👑 𝓤𝓰𝓵𝔂 𝓟𝓻𝓲𝓷𝓬𝓮𝓼𝓼 👑", category: "girls" },
  { id: "c30", name: "꧁Princess Elite꧂", category: "girls" },
  { id: "c31", name: "ᶜᵘᵗᵉ 𝓠𝓾𝓮𝓮𝓷 👑", category: "girls" },
  { id: "c32", name: "Miss_Cutiepie", category: "girls" },
  { id: "c33", name: "𝓓𝓸𝓵𝓵 𝓑𝓪𝓫𝔂 🎀", category: "girls" },
  { id: "c34", name: "✿ • Q U E E N✿ᴳᴵᴿᴸ࿐", category: "girls" },
  { id: "c35", name: "♡ Barbie Girl ♡", category: "girls" },
  { id: "c36", name: "🦋 Butterfly Wings 🦋", category: "girls" },

  // Gaming (Cute Killers & Psychos)
  { id: "c37", name: "ᶜᵘᵗᵉ 𝘗𝘴𝘺𝘤𝘩𝘰 🩸", category: "gaming" },
  { id: "c38", name: "💖 CUTE KILLER 💖", category: "gaming" },
  { id: "c39", name: "🌸 Sakura_Gaming 🌸", category: "gaming" },
  { id: "c40", name: "Miss_Sniper🖤", category: "gaming" },
  { id: "c41", name: "꧁CUTE•GIRL꧂", category: "gaming" },
  { id: "c42", name: "✿ BABY_KILLER ✿", category: "gaming" },
  { id: "c43", name: "🎀 Headshot Doll 🎀", category: "gaming" },
  { id: "c44", name: "♡ Sweet Poison ♡", category: "gaming" },
];

function generateCuteTemplates(inputText: string) {
  const text = inputText.trim() || "Cutie";
  const small = transformWithMap(text, maps.smallCaps);
  const script = transformWithMap(text, maps.script);
  const boldScript = transformWithMap(text, maps.boldScript);
  const circled = transformWithMap(text, maps.circled);

  return [
    { label: "Kaomoji Smile", styled: `(✿◠‿◠) ${text} ♡` },
    { label: "Sweet Cursive", styled: `♡ ᥫ᭡ ${script} ᥫ᭡ ♡` },
    { label: "Pastel Clouds", styled: `☁️ ˖⁺｡˚ ${boldScript} ˚｡⁺˖ ☁️` },
    { label: "Cherry Blossom Soft", styled: `✿ ${small} ࿐` },
    { label: "Star Fairy Sparkle", styled: `*ੈ✩‧₊˚ ${small} ˚₊‧✩ੈ*` },
    { label: "Strawberry Ribbon", styled: `🍓 ${boldScript} 🍓` },
    { label: "Cute Princess Crown", styled: `👑 ${script} 👑` },
    { label: "Soft Bubble Circled", styled: circled },
    { label: "Moonlit Starfall", styled: `🌙 ⋆｡°✩ ${small} ✩°｡⋆ 🌙` },
    { label: "Cute Psycho Gaming", styled: `ᶜᵘᵗᵉ ${small} 🩸` },
    { label: "Heartbeat Melody", styled: `─═━┈ ${script} ┈━═─` },
    { label: "Teddy Bear Hug", styled: `ʕ•ᴥ•ʔ ${text}` },
  ];
}

export default function CuteGrid() {
  const [inputText, setInputText] = useState("");
  const [activeTab, setActiveTab] = useState<
    "all" | "kaomoji" | "aesthetic" | "hearts" | "girls" | "gaming"
  >("all");
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const dynamicTemplates = useMemo(
    () => generateCuteTemplates(inputText),
    [inputText]
  );

  const filteredNicks = useMemo(() => {
    if (activeTab === "all") return CUTE_NICKNAMES;
    return CUTE_NICKNAMES.filter((item) => item.category === activeTab);
  }, [activeTab]);

  const handleCopy = (val: string) => {
    navigator.clipboard.writeText(val);
    setCopiedText(val);
    setTimeout(() => {
      setCopiedText((prev) => (prev === val ? null : prev));
    }, 1800);
  };

  return (
    <div className="w-full space-y-6">
      {/* Toast Notification */}
      {copiedText && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#354861] text-white px-4 py-2.5 rounded shadow-lg flex items-center gap-2 text-sm border-l-4 border-[#00a65a] animate-fade-in">
          <span>✓ Copied to clipboard:</span>
          <span className="font-mono font-bold max-w-[200px] truncate text-pink-300">
            {copiedText}
          </span>
        </div>
      )}

      {/* Generator Box */}
      <div className="bg-white border border-[#d2d6de] rounded-[3px] shadow-sm overflow-hidden">
        <div className="bg-gradient-to-r from-pink-500 to-rose-400 text-white px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🌸</span>
            <h2 className="text-base font-semibold tracking-wide">
              Live Cute Stylish Name Generator
            </h2>
          </div>
          <span className="text-xs text-pink-100">Adorable Fonts & Kaomoji</span>
        </div>

        <div className="p-4 border-b border-gray-100 bg-[#fdf2f8]/40">
          <div className="max-w-xl mx-auto flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your name (e.g. Angel, Princess, Kitty, Rose)..."
              maxLength={20}
              className="flex-1 px-3.5 py-2.5 border border-[#d2d6de] rounded-[3px] text-sm focus:outline-none focus:border-pink-400 bg-white text-[#222]"
            />
            {inputText && (
              <button
                onClick={() => setInputText("")}
                className="px-3 py-2 text-xs font-semibold bg-gray-200 text-gray-600 rounded hover:bg-gray-300"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Dynamic Styles Grid */}
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 bg-[#fdf2f8]/20">
          {dynamicTemplates.map((t, i) => {
            const isCopied = copiedText === t.styled;
            return (
              <div
                key={i}
                onClick={() => handleCopy(t.styled)}
                className={`group cursor-pointer p-2.5 rounded-[3px] border transition-all flex items-center justify-between ${
                  isCopied
                    ? "bg-[#00a65a] text-white border-[#00a65a]"
                    : "bg-white text-[#222] border-[#fce7f3] hover:border-pink-400 hover:bg-[#fdf2f8]"
                }`}
              >
                <div className="min-w-0 pr-2">
                  <div className="text-[14px] font-mono truncate">{t.styled}</div>
                  <div
                    className={`text-[11px] truncate ${
                      isCopied ? "text-white/80" : "text-gray-400"
                    }`}
                  >
                    {t.label}
                  </div>
                </div>
                <span
                  className={`text-[11px] font-semibold px-2 py-0.5 rounded shrink-0 transition-colors ${
                    isCopied
                      ? "bg-white text-[#00a65a]"
                      : "bg-pink-50 text-pink-600 group-hover:bg-pink-500 group-hover:text-white"
                  }`}
                >
                  {isCopied ? "Copied!" : "Copy"}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Preset Curated Tabs */}
      <div className="bg-white border border-[#d2d6de] rounded-[3px] shadow-sm overflow-hidden">
        <div className="p-4 border-b border-[#e5e7eb] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-[#354861] uppercase tracking-wider">
              Cute Nicknames Collection ({filteredNicks.length})
            </h3>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {[
              { id: "all", label: "All" },
              { id: "kaomoji", label: "(✿◠‿◠) Kaomoji Faces" },
              { id: "aesthetic", label: "🌸 Aesthetic & Soft" },
              { id: "hearts", label: "♡ Hearts & Love" },
              { id: "girls", label: "👑 Princess & Girls" },
              { id: "gaming", label: "🎮 Cute Gaming" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`text-[12px] px-3 py-1 rounded-[3px] font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-pink-500 text-white"
                    : "bg-[#ecf0f5] text-[#444] hover:bg-[#d2d6de]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of Names */}
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
          {filteredNicks.map((nick) => {
            const isCopied = copiedText === nick.name;
            return (
              <div
                key={nick.id}
                onClick={() => handleCopy(nick.name)}
                className={`group cursor-pointer p-2.5 rounded-[3px] border transition-all flex items-center justify-between ${
                  isCopied
                    ? "bg-[#00a65a] text-white border-[#00a65a]"
                    : "bg-white text-[#222] border-[#e2e8f0] hover:border-pink-400 hover:bg-[#fdf2f8]"
                }`}
              >
                <div className="min-w-0 pr-2">
                  <span className="font-mono text-[14px] text-[#222] truncate select-all block">
                    {nick.name}
                  </span>
                </div>
                <span
                  className={`text-[11px] font-semibold px-2 py-0.5 rounded shrink-0 transition-colors ${
                    isCopied
                      ? "bg-white text-[#00a65a]"
                      : "bg-[#fdf2f8] text-pink-600 group-hover:bg-pink-500 group-hover:text-white"
                  }`}
                >
                  {isCopied ? "Copied!" : "Copy"}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
