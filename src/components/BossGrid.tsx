"use client";

import React, { useState, useMemo } from "react";
import { transformWithMap, maps } from "@/lib/fontTransforms";

interface NickItem {
  id: string;
  name: string;
  category: "crown" | "mafia" | "gaming" | "ladyboss" | "badges";
}

const BOSS_NICKNAMES: NickItem[] = [
  // 亗 Crown & Kings
  { id: "b1", name: "亗『BOSS』亗", category: "crown" },
  { id: "b2", name: "👑 THE BOSS 👑", category: "crown" },
  { id: "b3", name: "『ᴠɪᴘ』BOSS 亗", category: "crown" },
  { id: "b4", name: "亗 B O S S 亗", category: "crown" },
  { id: "b5", name: "★ 𝕭𝖔𝖘𝖘 𝕶𝖎𝖓𝖌 ★", category: "crown" },
  { id: "b6", name: "👑 MR. BOSS 👑", category: "crown" },
  { id: "b7", name: "亗•ROYAL•BOSS•亗", category: "crown" },
  { id: "b8", name: "★彡[ʙᴏss]彡★", category: "crown" },
  { id: "b9", name: "『BOSS』OFFICIAL", category: "crown" },
  { id: "b10", name: "亗『BIG BOSS』亗", category: "crown" },

  // Mafia & Attitude
  { id: "b11", name: "𒆜 𝕸𝖆𝖋𝖎𝖆 𝕭𝖔𝖘𝖘 𒆜", category: "mafia" },
  { id: "b12", name: "ⁱᵃᵐ 𝕭𝖔𝖘𝖘👑", category: "mafia" },
  { id: "b13", name: "★ S A R K A R ★", category: "mafia" },
  { id: "b14", name: "×͜× BAD BOSS ×͜x", category: "mafia" },
  { id: "b15", name: "𝕿𝖍𝖊 𝕭𝖔𝖘𝖘 𝕸𝖆𝖋𝖎𝖆", category: "mafia" },
  { id: "b16", name: "☠️ DARK BOSS ☠️", category: "mafia" },
  { id: "b17", name: "亗『SARKAR』亗", category: "mafia" },
  { id: "b18", name: "𒆜 𝕭𝖆𝖉𝖘𝖍𝖆𝖍 𒆜", category: "mafia" },
  { id: "b19", name: "mr_boss_official", category: "mafia" },
  { id: "b20", name: "🔥 SILENT BOSS 🔥", category: "mafia" },

  // Gaming (Free Fire, PUBG, BGMI)
  { id: "b21", name: "Sᴋ᭄Sᴀʙɪʀᴮᴼˢˢ", category: "gaming" },
  { id: "b22", name: "亗•CLUTCH•BOSS•亗", category: "gaming" },
  { id: "b23", name: "▄︻デBOSS•007══━一", category: "gaming" },
  { id: "b24", name: "꧁BOSS•GAMING꧂", category: "gaming" },
  { id: "b25", name: "Ⓥ BOSS ᶠᶠ", category: "gaming" },
  { id: "b26", name: "亗•BGMI•BOSS•亗", category: "gaming" },
  { id: "b27", name: "꧁༒☬B O S S☬༒꧂", category: "gaming" },
  { id: "b28", name: "メ BOSS メ", category: "gaming" },
  { id: "b29", name: "⚡BOSS•OF•FF⚡", category: "gaming" },
  { id: "b30", name: "亗•HEADSHOT•BOSS•亗", category: "gaming" },

  // Lady Boss & Queens
  { id: "b31", name: "👑 LADY BOSS 👑", category: "ladyboss" },
  { id: "b32", name: "亗 QUEEN BOSS 亗", category: "ladyboss" },
  { id: "b33", name: "Miss_Boss🖤", category: "ladyboss" },
  { id: "b34", name: "✿ BOSS GIRL ࿐", category: "ladyboss" },
  { id: "b35", name: "𝓣𝓱𝓮 𝓛𝓪𝓭𝔂 𝓑𝓸𝓼𝓼", category: "ladyboss" },
  { id: "b36", name: "♡ Boss Babe ♡", category: "ladyboss" },
  { id: "b37", name: "👑 BOSS QUEEN 👑", category: "ladyboss" },
  { id: "b38", name: "ᶜᵘᵗᵉ 𝘉𝘰𝘴𝘴 🩸", category: "ladyboss" },

  // Badges & Symbols
  { id: "b39", name: "░B░O░S░S░", category: "badges" },
  { id: "b40", name: "【 𝕏 】BOSS【 𝕏 】", category: "badges" },
  { id: "b41", name: "『sʜʀᴋ』• 𝕭𝖔𝖘𝖘ツ", category: "badges" },
  { id: "b42", name: "◤B O S S◢", category: "badges" },
  { id: "b43", name: "★彡[B O S S]彡★", category: "badges" },
  { id: "b44", name: "『ᴠɪᴘ』亗 BOSS 亗", category: "badges" },
  { id: "b45", name: "●▬▬▬▬▬๑۩BOSS۩๑▬▬▬▬▬●", category: "badges" },
  { id: "b46", name: "꧁༺ B O S S ༻꧂", category: "badges" },
];

function generateBossTemplates(inputText: string) {
  const text = inputText.trim() || "Boss";
  const small = transformWithMap(text, maps.smallCaps);
  const gothic = transformWithMap(text, maps.boldGothic);
  const sansBold = transformWithMap(text, maps.boldSans);
  const squaredDark = transformWithMap(text, maps.squaredDark);
  const upperAngles = transformWithMap(text, maps.upperAngles);

  return [
    { label: "Apex Crown Sovereign", styled: `亗『${small}』亗` },
    { label: "VIP Crown Official", styled: `👑 『ᴠɪᴘ』${sansBold} 👑` },
    { label: "Mafia Syndicate Tag", styled: `𒆜 𝕭𝖔𝖘𝖘 ${gothic} 𒆜` },
    { label: "Sniper Crosshair", styled: `▄︻デ${text}══━一` },
    { label: "V-Badge Gaming", styled: `Ⓥ ${sansBold} 亗` },
    { label: "Square Dark Military", styled: squaredDark },
    { label: "Tokyo Clan Tag", styled: `メ ${small} メ` },
    { label: "Shadow Assassin", styled: `x͜× ${sansBold} ×͜x` },
    { label: "Star Stalker Frame", styled: `★彡[${sansBold}]彡★` },
    { label: "Upper Angles Badass", styled: upperAngles },
    { label: "Gothic Wings Legend", styled: `꧁༺${gothic}༻꧂` },
    { label: "Vapor Spaced Boss", styled: text.toUpperCase().split("").join(" ") },
  ];
}

export default function BossGrid() {
  const [inputText, setInputText] = useState("");
  const [activeTab, setActiveTab] = useState<
    "all" | "crown" | "mafia" | "gaming" | "ladyboss" | "badges"
  >("all");
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const dynamicTemplates = useMemo(
    () => generateBossTemplates(inputText),
    [inputText]
  );

  const filteredNicks = useMemo(() => {
    if (activeTab === "all") return BOSS_NICKNAMES;
    return BOSS_NICKNAMES.filter((item) => item.category === activeTab);
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
          <span className="font-mono font-bold max-w-[200px] truncate text-amber-300">
            {copiedText}
          </span>
        </div>
      )}

      {/* Generator Box */}
      <div className="bg-white border border-[#d2d6de] rounded-[3px] shadow-sm overflow-hidden">
        <div className="bg-[#2c3e50] text-white px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">👑</span>
            <h2 className="text-base font-semibold tracking-wide">
              Live Boss Name &amp; Attitude Styler
            </h2>
          </div>
          <span className="text-xs text-amber-200">Crowns, Wings &amp; Badges</span>
        </div>

        <div className="p-4 border-b border-gray-100 bg-[#f8f9fa]">
          <div className="max-w-xl mx-auto flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your name (e.g. Boss, King, Sarkar, Mafia)..."
              maxLength={20}
              className="flex-1 px-3.5 py-2.5 border border-[#d2d6de] rounded-[3px] text-sm focus:outline-none focus:border-[#2c3e50] bg-white text-[#222]"
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

        {/* Dynamic Generated Names */}
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 bg-[#f4f7f9]/50">
          {dynamicTemplates.map((t, i) => {
            const isCopied = copiedText === t.styled;
            return (
              <div
                key={i}
                onClick={() => handleCopy(t.styled)}
                className={`group cursor-pointer p-2.5 rounded-[3px] border transition-all flex items-center justify-between ${
                  isCopied
                    ? "bg-[#00a65a] text-white border-[#00a65a]"
                    : "bg-white text-[#222] border-[#e2e8f0] hover:border-[#2c3e50] hover:bg-[#eef5fc]"
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
                      : "bg-[#e8f4fd] text-[#2c6da5] group-hover:bg-[#2c3e50] group-hover:text-white"
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
              Boss Nicknames Collection ({filteredNicks.length})
            </h3>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {[
              { id: "all", label: "All" },
              { id: "crown", label: "👑 Crown & Kings" },
              { id: "mafia", label: "Mafia & Attitude" },
              { id: "gaming", label: "Gaming (FF/PUBG)" },
              { id: "ladyboss", label: "Lady Boss" },
              { id: "badges", label: "Badges & Symbols" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`text-[12px] px-3 py-1 rounded-[3px] font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-[#2c3e50] text-white"
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
                    : "bg-white text-[#222] border-[#e2e8f0] hover:border-[#2c3e50] hover:bg-[#eef5fc]"
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
                      : "bg-[#e8f4fd] text-[#2c6da5] group-hover:bg-[#2c3e50] group-hover:text-white"
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
