"use client";

import React, { useState, useMemo } from "react";
import { Heart, Swords, Copy, Check, Sparkles, ArrowLeftRight, Shuffle } from "lucide-react";
import confetti from "canvas-confetti";
import { transformWithMap, maps } from "@/lib/fontTransforms";

interface DuoCombinerProps {
  onCopySuccess?: (text: string) => void;
}

const POPULAR_DUOS = [
  { p1: "King", p2: "Queen" },
  { p1: "Shadow", p2: "Light" },
  { p1: "Bonnie", p2: "Clyde" },
  { p1: "Sun", p2: "Moon" },
  { p1: "Fire", p2: "Ice" },
  { p1: "Angel", p2: "Devil" },
  { p1: "Romeo", p2: "Juliet" },
  { p1: "Joker", p2: "Harley" },
  { p1: "Thunder", p2: "Storm" },
  { p1: "Toxic", p2: "Poison" },
  { p1: "Hunter", p2: "Target" },
  { p1: "Alpha", p2: "Omega" },
];

type CategoryTab = "all" | "gaming" | "couples" | "aesthetic" | "mashup";

export const DuoCombiner: React.FC<DuoCombinerProps> = ({ onCopySuccess }) => {
  const [name1, setName1] = useState("King");
  const [name2, setName2] = useState("Queen");
  const [activeTab, setActiveTab] = useState<CategoryTab>("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const clean1 = name1.trim() || "Player1";
  const clean2 = name2.trim() || "Player2";

  // Unicode font variations
  const bold1 = transformWithMap(clean1, maps.boldSerif);
  const bold2 = transformWithMap(clean2, maps.boldSerif);
  const script1 = transformWithMap(clean1, maps.script);
  const script2 = transformWithMap(clean2, maps.script);
  const gothic1 = transformWithMap(clean1, maps.boldGothic);
  const gothic2 = transformWithMap(clean2, maps.boldGothic);
  const smallCaps1 = transformWithMap(clean1, maps.smallCaps);
  const smallCaps2 = transformWithMap(clean2, maps.smallCaps);

  // Blended ship names
  const half1 = Math.ceil(clean1.length / 2);
  const half2 = Math.ceil(clean2.length / 2);
  const blendA = clean1.slice(0, half1) + clean2.slice(Math.floor(clean2.length / 2));
  const blendB = clean2.slice(0, half2) + clean1.slice(Math.floor(clean1.length / 2));
  const blendC = clean1.slice(0, Math.min(3, clean1.length)) + clean2.slice(-Math.min(3, clean2.length));
  const blendD = clean2.slice(0, Math.min(3, clean2.length)) + clean1.slice(-Math.min(3, clean1.length));

  const allPairs = useMemo(() => [
    // GAMING DUOS
    {
      id: "slayer-wings",
      category: "gaming",
      theme: "Slayer Wings ꧁꧂",
      p1: `꧁༺${clean1}༻꧂`,
      p2: `꧁༺${clean2}༻꧂`,
    },
    {
      id: "royal-apex",
      category: "gaming",
      theme: "Royal Apex 亗",
      p1: `亗 『${bold1}』 亗`,
      p2: `亗 『${bold2}』 亗`,
    },
    {
      id: "tokyo-ghoul",
      category: "gaming",
      theme: "Tokyo Ghoul x͜×",
      p1: `x͜× ${clean1} ×͜x`,
      p2: `x͜× ${clean2} ×͜x`,
    },
    {
      id: "thunder-duo",
      category: "gaming",
      theme: "Thunder Strike ⚡",
      p1: `⚡『${bold1}』⚡`,
      p2: `⚡『${bold2}』⚡`,
    },
    {
      id: "samurai-duo",
      category: "gaming",
      theme: "Samurai Sword メ",
      p1: `メ ${clean1} メ`,
      p2: `メ ${clean2} メ`,
    },
    {
      id: "vip-bracket",
      category: "gaming",
      theme: "VIP Squad Tag",
      p1: `『ᴠɪᴘ』• ${bold1}`,
      p2: `『ᴠɪᴘ』• ${bold2}`,
    },
    {
      id: "sniper-pair",
      category: "gaming",
      theme: "Sniper Crosshairs",
      p1: `▄︻デ${clean1}══━一`,
      p2: `▄︻デ${clean2}══━一`,
    },
    {
      id: "dark-clan",
      category: "gaming",
      theme: "Dark Knight Clan",
      p1: `† 𝕯𝖆𝖗𝖐 ${gothic1} †`,
      p2: `† 𝕯𝖆𝖗𝖐 ${gothic2} †`,
    },

    // COUPLES & LOVE
    {
      id: "sweet-heart",
      category: "couples",
      theme: "Sweet Heart ♡ ᥫ᭡",
      p1: `♡ ᥫ᭡ ${script1} ᥫ᭡ ♡`,
      p2: `♡ ᥫ᭡ ${script2} ᥫ᭡ ♡`,
    },
    {
      id: "king-queen-crown",
      category: "couples",
      theme: "Crown Royalty 👑",
      p1: `👑 ${bold1} 👑`,
      p2: `👑 ${bold2} 👑`,
    },
    {
      id: "locked-love",
      category: "couples",
      theme: "Mine & Yours 🔒",
      p1: `🔒 ${clean1}'s Queen`,
      p2: `🗝️ ${clean2}'s King`,
    },
    {
      id: "floral-romance",
      category: "couples",
      theme: "Floral Romance ✿",
      p1: `✿ ${script1} ࿐`,
      p2: `✿ ${script2} ࿐`,
    },
    {
      id: "celestial-sun-moon",
      category: "couples",
      theme: "Sun & Moon ☀️🌙",
      p1: `Sun • ${bold1} ☀️`,
      p2: `Moon • ${bold2} 🌙`,
    },
    {
      id: "fire-ice-contrast",
      category: "couples",
      theme: "Fire & Ice 🔥❄️",
      p1: `🔥 Fire • ${bold1}`,
      p2: `❄️ Ice • ${bold2}`,
    },
    {
      id: "script-duo",
      category: "couples",
      theme: "Soft Cursive Script",
      p1: `𝒫𝓇𝒾𝓃𝒸ℯ • ${script1}`,
      p2: `𝒫𝓇𝒾𝓃𝒸ℯ𝓈𝓈 • ${script2}`,
    },
    {
      id: "pure-love-bracket",
      category: "couples",
      theme: "Love Birds 🕊️",
      p1: `🕊️ ⟦ ${clean1} ⟧ 💖`,
      p2: `🕊️ ⟦ ${clean2} ⟧ 💖`,
    },

    // AESTHETIC & SOFT
    {
      id: "cloud-soft",
      category: "aesthetic",
      theme: "Aesthetic Cloud ☁️",
      p1: `☁️ ˖⁺｡˚ ${smallCaps1} ˚｡⁺˖ ☁️`,
      p2: `☁️ ˖⁺｡˚ ${smallCaps2} ˚｡⁺˖ ☁️`,
    },
    {
      id: "sparkle-magic",
      category: "aesthetic",
      theme: "Sparkle Starlight ✨",
      p1: `✧･ﾟ: *✧ ${clean1} ✧*:･ﾟ✧`,
      p2: `✧･ﾟ: *✧ ${clean2} ✧*:･ﾟ✧`,
    },
    {
      id: "butterfly-aesthetic",
      category: "aesthetic",
      theme: "Butterfly Dream 🦋",
      p1: `🦋 ${script1} 🦋`,
      p2: `🦋 ${script2} 🦋`,
    },
    {
      id: "cherry-blossom",
      category: "aesthetic",
      theme: "Cherry Blossom 🌸",
      p1: `🌸 ｡˚ ${clean1} ˚｡ 🌸`,
      p2: `🌸 ｡˚ ${clean2} ˚｡ 🌸`,
    },

    // MASHUPS & SHIPS
    {
      id: "mashup-a",
      category: "mashup",
      theme: "Ship Mashup #1",
      p1: blendA,
      p2: blendB,
    },
    {
      id: "mashup-b",
      category: "mashup",
      theme: "Ship Mashup #2",
      p1: blendC,
      p2: blendD,
    },
    {
      id: "mashup-royal",
      category: "mashup",
      theme: "Royal Ship Mashup",
      p1: `👑 『${blendA}』 👑`,
      p2: `👑 『${blendB}』 👑`,
    },
    {
      id: "mashup-heart",
      category: "mashup",
      theme: "Love Ship Mashup",
      p1: `♡ ${blendA} ♡`,
      p2: `♡ ${blendB} ♡`,
    },
  ], [clean1, clean2, bold1, bold2, script1, script2, gothic1, gothic2, smallCaps1, smallCaps2, blendA, blendB, blendC, blendD]);

  const filteredPairs = useMemo(() => {
    if (activeTab === "all") return allPairs;
    return allPairs.filter((p) => p.category === activeTab);
  }, [allPairs, activeTab]);

  const copyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#3c8dbc", "#e91e63", "#00c0ef"],
    });
    if (onCopySuccess) onCopySuccess(text);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSwap = () => {
    const temp = name1;
    setName1(name2);
    setName2(temp);
  };

  const handleRandomPreset = () => {
    const random = POPULAR_DUOS[Math.floor(Math.random() * POPULAR_DUOS.length)];
    setName1(random.p1);
    setName2(random.p2);
  };

  return (
    <div className="p-4 sm:p-5">
      {/* Input Form Header */}
      <div className="bg-[#f8fafc] border border-[#d2d6de] rounded-[3px] p-4 mb-4">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          {/* Player 1 Input */}
          <div className="flex-1 w-full">
            <label className="block text-xs font-bold text-[#354861] uppercase tracking-wider mb-1">
              Player 1 / First Name
            </label>
            <div className="relative">
              <input
                type="text"
                value={name1}
                onChange={(e) => setName1(e.target.value)}
                placeholder="Enter First Name..."
                maxLength={20}
                className="w-full h-[40px] px-3 border border-[#ccd0d5] rounded-[3px] text-[15px] font-semibold text-[#333] focus:border-[#3c8dbc] focus:ring-1 focus:ring-[#3c8dbc] focus:outline-none bg-white shadow-inner"
              />
            </div>
          </div>

          {/* Swap & Random Controls */}
          <div className="flex sm:flex-col items-center justify-center gap-1.5 pt-2 sm:pt-4">
            <button
              onClick={handleSwap}
              type="button"
              title="Swap Names"
              className="p-2 border border-[#ccd0d5] bg-white rounded-[3px] text-[#555] hover:bg-[#eef4fb] hover:text-[#3c8dbc] hover:border-[#3c8dbc] transition-colors"
            >
              <ArrowLeftRight className="w-4 h-4" />
            </button>
            <button
              onClick={handleRandomPreset}
              type="button"
              title="Pick Random Duo"
              className="p-2 border border-[#ccd0d5] bg-white rounded-[3px] text-[#555] hover:bg-[#fdf2f8] hover:text-[#e91e63] hover:border-[#e91e63] transition-colors"
            >
              <Shuffle className="w-4 h-4" />
            </button>
          </div>

          {/* Player 2 Input */}
          <div className="flex-1 w-full">
            <label className="block text-xs font-bold text-[#e91e63] uppercase tracking-wider mb-1">
              Player 2 / Second Name
            </label>
            <div className="relative">
              <input
                type="text"
                value={name2}
                onChange={(e) => setName2(e.target.value)}
                placeholder="Enter Second Name..."
                maxLength={20}
                className="w-full h-[40px] px-3 border border-[#ccd0d5] rounded-[3px] text-[15px] font-semibold text-[#333] focus:border-[#e91e63] focus:ring-1 focus:ring-[#e91e63] focus:outline-none bg-white shadow-inner"
              />
            </div>
          </div>
        </div>

        {/* Popular Duo Presets Chips */}
        <div className="mt-3 pt-3 border-t border-[#e8ecf0] flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-bold text-gray-500 mr-1 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Quick Duos:
          </span>
          {POPULAR_DUOS.map((d, i) => (
            <button
              key={i}
              onClick={() => {
                setName1(d.p1);
                setName2(d.p2);
              }}
              className="text-xs px-2.5 py-1 bg-white border border-[#d2d6de] rounded-[3px] text-[#354861] hover:bg-[#354861] hover:text-white transition-colors"
            >
              {d.p1} &amp; {d.p2}
            </button>
          ))}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-1.5 mb-4 border-b border-[#d2d6de] pb-2">
        <button
          onClick={() => setActiveTab("all")}
          className={`px-3 py-1.5 text-xs font-bold rounded-[3px] transition-colors ${
            activeTab === "all"
              ? "bg-[#354861] text-white"
              : "bg-[#eef2f7] text-[#555] hover:bg-[#dde4ed]"
          }`}
        >
          All Styles ({allPairs.length})
        </button>
        <button
          onClick={() => setActiveTab("gaming")}
          className={`px-3 py-1.5 text-xs font-bold rounded-[3px] transition-colors flex items-center gap-1 ${
            activeTab === "gaming"
              ? "bg-[#f39c12] text-white"
              : "bg-[#eef2f7] text-[#555] hover:bg-[#dde4ed]"
          }`}
        >
          <Swords className="w-3 h-3" /> Gaming &amp; FF/PUBG
        </button>
        <button
          onClick={() => setActiveTab("couples")}
          className={`px-3 py-1.5 text-xs font-bold rounded-[3px] transition-colors flex items-center gap-1 ${
            activeTab === "couples"
              ? "bg-[#e91e63] text-white"
              : "bg-[#eef2f7] text-[#555] hover:bg-[#dde4ed]"
          }`}
        >
          <Heart className="w-3 h-3" /> Couples &amp; Love
        </button>
        <button
          onClick={() => setActiveTab("aesthetic")}
          className={`px-3 py-1.5 text-xs font-bold rounded-[3px] transition-colors flex items-center gap-1 ${
            activeTab === "aesthetic"
              ? "bg-[#9c27b0] text-white"
              : "bg-[#eef2f7] text-[#555] hover:bg-[#dde4ed]"
          }`}
        >
          <Sparkles className="w-3 h-3" /> Aesthetic &amp; Soft
        </button>
        <button
          onClick={() => setActiveTab("mashup")}
          className={`px-3 py-1.5 text-xs font-bold rounded-[3px] transition-colors ${
            activeTab === "mashup"
              ? "bg-[#00a65a] text-white"
              : "bg-[#eef2f7] text-[#555] hover:bg-[#dde4ed]"
          }`}
        >
          Ship Name Mashups
        </button>
      </div>

      {/* Grid of Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filteredPairs.map((pair) => {
          const bothId = `${pair.id}-both`;
          const p1Id = `${pair.id}-p1`;
          const p2Id = `${pair.id}-p2`;
          const bothText = `${pair.p1} & ${pair.p2}`;

          return (
            <div
              key={pair.id}
              className="bg-white border border-[#d2d6de] hover:border-[#3c8dbc] rounded-[3px] p-3.5 shadow-sm transition-all hover:shadow flex flex-col justify-between"
            >
              {/* Header: Theme name */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#f4f4f4]">
                <span className="text-xs font-bold text-[#354861] uppercase tracking-wide">
                  {pair.theme}
                </span>
                <span className="text-[10px] text-gray-400 uppercase font-mono">Duo Pair</span>
              </div>

              {/* Names Display Box */}
              <div className="space-y-1.5 my-2">
                {/* Player 1 Row */}
                <div className="flex items-center justify-between bg-[#f8fafc] border border-[#e2e8f0] rounded-[3px] px-3 py-2 group">
                  <span className="text-sm font-bold text-[#333] font-mono break-all pr-2">
                    {pair.p1}
                  </span>
                  <button
                    onClick={() => copyText(pair.p1, p1Id)}
                    title="Copy Player 1"
                    className="shrink-0 text-xs px-2 py-1 bg-white border border-[#ccd0d5] hover:border-[#3c8dbc] hover:text-[#3c8dbc] rounded-[3px] font-semibold flex items-center gap-1 transition-colors"
                  >
                    {copiedId === p1Id ? (
                      <Check className="w-3 h-3 text-emerald-600" />
                    ) : (
                      <Copy className="w-3 h-3 text-gray-500" />
                    )}
                    <span className="text-[11px]">P1</span>
                  </button>
                </div>

                {/* Player 2 Row */}
                <div className="flex items-center justify-between bg-[#fdf2f8] border border-[#fce7f3] rounded-[3px] px-3 py-2 group">
                  <span className="text-sm font-bold text-[#e91e63] font-mono break-all pr-2">
                    {pair.p2}
                  </span>
                  <button
                    onClick={() => copyText(pair.p2, p2Id)}
                    title="Copy Player 2"
                    className="shrink-0 text-xs px-2 py-1 bg-white border border-[#ccd0d5] hover:border-[#e91e63] hover:text-[#e91e63] rounded-[3px] font-semibold flex items-center gap-1 transition-colors"
                  >
                    {copiedId === p2Id ? (
                      <Check className="w-3 h-3 text-emerald-600" />
                    ) : (
                      <Copy className="w-3 h-3 text-gray-500" />
                    )}
                    <span className="text-[11px]">P2</span>
                  </button>
                </div>
              </div>

              {/* Copy Both Duo Button */}
              <button
                onClick={() => copyText(bothText, bothId)}
                className={`mt-2 w-full py-2 px-3 text-xs font-bold rounded-[3px] flex items-center justify-center gap-1.5 transition-colors shadow-sm ${
                  copiedId === bothId
                    ? "bg-emerald-600 text-white"
                    : "bg-[#354861] text-white hover:bg-[#3c8dbc]"
                }`}
              >
                {copiedId === bothId ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    COPIED BOTH AS DUO!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    COPY BOTH AS DUO
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
};
