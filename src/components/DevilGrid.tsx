"use client";

import React, { useState, useMemo } from "react";
import { transformWithMap, maps } from "@/lib/fontTransforms";

interface NickItem {
  id: string;
  name: string;
  category: "gaming" | "attitude" | "symbols" | "aesthetic" | "squad";
}

const DEVIL_NICKNAMES: NickItem[] = [
  // Demon & Gaming (Free Fire, PUBG, BGMI)
  { id: "d1", name: "😈 ᴅ ᴇ ᴠ ɪ ʟ 😈", category: "gaming" },
  { id: "d2", name: "꧁༺ᎠᎬᏙᏆᏞ༻꧂", category: "gaming" },
  { id: "d3", name: "𒆜𝕯𝖊𝖛𝖎𝖑𒆜", category: "gaming" },
  { id: "d4", name: "▄︻デD̷e̷v̷i̷l̷══━一", category: "gaming" },
  { id: "d5", name: "☠️ ＤＥＶＩＬ ☠️", category: "gaming" },
  { id: "d6", name: "亗 DEVIL 亗", category: "gaming" },
  { id: "d7", name: "꧁༒☬ƊєνιƖ☬༒꧂", category: "gaming" },
  { id: "d8", name: "⚡D E V I L ⚡", category: "gaming" },
  { id: "d9", name: "x͜× ᴅᴇᴠɪʟ ×͜x", category: "gaming" },
  { id: "d10", name: "『DEVIL』亗", category: "gaming" },
  { id: "d11", name: "Ⓥ DEVIL ᶠᶠ", category: "gaming" },
  { id: "d12", name: "ᜰ꙰ꦿ➢ƊєνιƖ々", category: "gaming" },
  { id: "d13", name: "◥ᖫ ᴅᴇᴠɪʟ ᖭ◤", category: "gaming" },
  { id: "d14", name: "メ DEVIL メ", category: "gaming" },
  { id: "d15", name: "★彡[ᴅᴇᴠɪʟ]彡★", category: "gaming" },
  { id: "d16", name: "ツ D E V I L シ", category: "gaming" },
  { id: "d17", name: "【 𝕏 】DEVIL【 𝕏 】", category: "gaming" },

  // Badass Attitude (Boys & Boss)
  { id: "d18", name: "𝕯𝖊𝖛𝖎𝖑 𝕭𝖔𝖞", category: "attitude" },
  { id: "d19", name: "DEVIL_KING👑", category: "attitude" },
  { id: "d20", name: "亗『DEVIL BOSS』亗", category: "attitude" },
  { id: "d21", name: "ⁱᵃᵐ 𝕯𝖊𝖛𝖎𝖑 😈", category: "attitude" },
  { id: "d22", name: "🔥 DEVIL FIRE 🔥", category: "attitude" },
  { id: "d23", name: "mr_devil_official", category: "attitude" },
  { id: "d24", name: "😈 Bad Devil 😈", category: "attitude" },
  { id: "d25", name: "𝓓𝓮𝓿𝓲𝓵 𝓡𝓪𝓳𝓪", category: "attitude" },
  { id: "d26", name: "𒆜 𝕯𝖊𝖛𝖎𝖑 𝕾𝖆𝖗𝖐𝖆𝖗 𒆜", category: "attitude" },
  { id: "d27", name: "『ᴠɪᴘ』DEVIL", category: "attitude" },
  { id: "d28", name: "DEVIL 007", category: "attitude" },
  { id: "d29", name: "😈 DEVIL 444 😈", category: "attitude" },
  { id: "d30", name: "𝕿𝖍𝖊 𝕯𝖊𝖛𝖎𝖑 𝕶𝖎𝖓𝖌", category: "attitude" },
  { id: "d31", name: "×͜× D E V I L B O Y ×͜x", category: "attitude" },
  { id: "d32", name: "† Devil Inside †", category: "attitude" },

  // Evil Symbols & Wings
  { id: "d33", name: "༺☠️D E V I L☠️༻", category: "symbols" },
  { id: "d34", name: "⸸ 𝕯𝖊𝖛𝖎𝖑 ⸸", category: "symbols" },
  { id: "d35", name: "☬DEVIL☬", category: "symbols" },
  { id: "d36", name: "⚔️ ᴅᴇᴠɪʟ ⚔️", category: "symbols" },
  { id: "d37", name: "༒ ƊєνιƖ ༒", category: "symbols" },
  { id: "d38", name: "✧ 𝕯𝖊𝖛𝖎𝖑 ✧", category: "symbols" },
  { id: "d39", name: "᭄DEVIL࿐", category: "symbols" },
  { id: "d40", name: "༺LeGeNd_DeViL༻", category: "symbols" },
  { id: "d41", name: "😈†ƊєνιƖ†😈", category: "symbols" },
  { id: "d42", name: "✦ 𝕯𝖆𝖗𝖐 𝕯𝖊𝖛𝖎𝖑 ✦", category: "symbols" },
  { id: "d43", name: "亗『DEVIㄥ』亗", category: "symbols" },
  { id: "d44", name: "༺ཌDevilད༻", category: "symbols" },
  { id: "d45", name: "⚚ D E V I L ⚚", category: "symbols" },
  { id: "d46", name: "⫷D E V I L⫸", category: "symbols" },

  // Dark Aesthetic & Girls
  { id: "d47", name: "𝓓𝓮𝓿𝓲𝓵 𝓖𝓲𝓻𝓵 😈", category: "aesthetic" },
  { id: "d48", name: "ᶜᵘᵗᵉ 𝕯𝖊𝖛𝖎𝖑 🖤", category: "aesthetic" },
  { id: "d49", name: "Devil Queen 👑", category: "aesthetic" },
  { id: "d50", name: "✦ Devil Angel ✦", category: "aesthetic" },
  { id: "d51", name: "♡ 𝓓𝓮𝓿𝓲𝓵 ♡", category: "aesthetic" },
  { id: "d52", name: "𝕯𝖊𝖛𝖎𝖑 𝕯𝖔𝖑𝖑", category: "aesthetic" },
  { id: "d53", name: "Miss_Devil🖤", category: "aesthetic" },
  { id: "d54", name: "🥀 𝕯𝖊𝖛𝖎𝖑 🥀", category: "aesthetic" },
  { id: "d55", name: "x𝕯𝖊𝖛𝖎𝖑 • 𝕍𝕚𝕓𝕖", category: "aesthetic" },
  { id: "d56", name: "😈 ᴅᴇᴠɪʟ ǫᴜᴇᴇɴ 😈", category: "aesthetic" },
  { id: "d57", name: "🌙 ᴅᴇᴠɪʟ 🌙", category: "aesthetic" },
  { id: "d58", name: "🖤 ᴅ ᴇ ᴠ ɪ ʟ 🖤", category: "aesthetic" },

  // Clan & Squad Tags
  { id: "d59", name: "༄™DEVIL࿐", category: "squad" },
  { id: "d60", name: "ᵀᵉᵃᵐ★DEVIL★", category: "squad" },
  { id: "d61", name: "᭄ᴾᴷ᭄✿DEVIL࿐", category: "squad" },
  { id: "d62", name: "༄™𒆜𝕯𝖊𝖛𝖎𝖑࿇𝕾𝖖𝖚𝖆𝖉࿐", category: "squad" },
  { id: "d63", name: "Devil_Clan_01", category: "squad" },
  { id: "d64", name: "亗 DEVIL ARMY 亗", category: "squad" },
  { id: "d65", name: "【DEVIL】TEAM", category: "squad" },
  { id: "d66", name: "꧁DEVIL SQUAD꧂", category: "squad" },
  { id: "d67", name: "★DEVIL ESPORTS★", category: "squad" },
  { id: "d68", name: "亗『DEVIL CLAN』亗", category: "squad" },
];

function generateDevilTemplates(inputText: string) {
  const text = inputText.trim() || "Devil";
  const small = transformWithMap(text, maps.smallCaps);
  const gothic = transformWithMap(text, maps.gothic);
  const boldGothic = transformWithMap(text, maps.boldGothic);
  const boldSans = transformWithMap(text, maps.boldSans);
  const script = transformWithMap(text, maps.script);
  const boldScript = transformWithMap(text, maps.boldScript);
  const squaredDark = transformWithMap(text, maps.squaredDark);
  const upperAngles = transformWithMap(text, maps.upperAngles);
  const japanese = transformWithMap(text, maps.japanese);

  return [
    { label: "Demon Horns Elite", styled: `😈 『${boldGothic}』 😈` },
    { label: "Devil Wings Legend", styled: `꧁༺${boldGothic}༻꧂` },
    { label: "Crown Boss Devil", styled: `亗『${small}』亗` },
    { label: "Crosshair Sniper Devil", styled: `▄︻デ${text}══━一` },
    { label: "Evil Skull Reaper", styled: `☠️ ${boldSans} ☠️` },
    { label: "Tokyo Clan Tag", styled: `メ ${small} メ` },
    { label: "Shadow Assassin", styled: `x͜× ${boldSans} ×͜x` },
    { label: "Devil Mafia King", styled: `𒆜 𝕯𝖊𝖛𝖎𝖑 ${boldGothic} 𒆜` },
    { label: "V-Badge Devil", styled: `Ⓥ ${boldSans} 😈` },
    { label: "Gothic Fraktur", styled: `⸸ ${boldGothic} ⸸` },
    { label: "Cursive Dark Calligraphy", styled: `𝕯𝖊𝖛𝖎𝖑 ${boldScript}` },
    { label: "Square Dark Badge", styled: squaredDark },
    { label: "Upper Angles Badass", styled: upperAngles },
    { label: "Japanese Demon Spirit", styled: `『鬼』${japanese}『神』` },
    { label: "Mystic Crossed Dagger", styled: `⚔️ 彡${small}彡 ⚔️` },
    { label: "Sparkle Star Devil", styled: `༊·˚† ${boldSans} †˚·༊` },
    { label: "Vapor Spaced Devil", styled: text.split("").join(" ") },
    { label: "Aesthetic Dark Angel", styled: `✦ 𝕯𝖆𝖗𝖐 𝕬𝖓𝖌𝖊𝖑 ✦ ${script}` },
  ];
}

export default function DevilGrid() {
  const [inputText, setInputText] = useState("");
  const [activeTab, setActiveTab] = useState<
    "all" | "gaming" | "attitude" | "symbols" | "aesthetic" | "squad"
  >("all");
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const dynamicTemplates = useMemo(
    () => generateDevilTemplates(inputText),
    [inputText]
  );

  const filteredNicks = useMemo(() => {
    if (activeTab === "all") return DEVIL_NICKNAMES;
    return DEVIL_NICKNAMES.filter((item) => item.category === activeTab);
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
          <span className="font-mono font-bold max-w-[200px] truncate text-emerald-300">
            {copiedText}
          </span>
        </div>
      )}

      {/* Generator Box */}
      <div className="bg-white border border-[#d2d6de] rounded-[3px] shadow-sm overflow-hidden">
        <div className="bg-[#354861] text-white px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">😈</span>
            <h2 className="text-base font-semibold tracking-wide">
              Live Devil Name Generator
            </h2>
          </div>
          <span className="text-xs text-gray-300">Type any name to stylize</span>
        </div>

        <div className="p-4 border-b border-gray-100 bg-[#f9fafb]">
          <div className="max-w-xl mx-auto flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your name (e.g. Devil, Hunter, Rahul, King)..."
              maxLength={20}
              className="flex-1 px-3.5 py-2.5 border border-[#d2d6de] rounded-[3px] text-sm focus:outline-none focus:border-[#3c8dbc] bg-white text-[#222]"
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
                    : "bg-white text-[#222] border-[#e2e8f0] hover:border-[#3c8dbc] hover:bg-[#eef5fc]"
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
                      : "bg-[#e8f4fd] text-[#2c6da5] group-hover:bg-[#3c8dbc] group-hover:text-white"
                  }`}
                >
                  {isCopied ? "Copied!" : "Copy"}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Preset Curated Names with Category Tabs */}
      <div className="bg-white border border-[#d2d6de] rounded-[3px] shadow-sm overflow-hidden">
        <div className="p-4 border-b border-[#e5e7eb] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-[#354861] uppercase tracking-wider">
              Curated Devil Names Collection ({filteredNicks.length})
            </h3>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {[
              { id: "all", label: "All Names" },
              { id: "gaming", label: "Gaming (FF/PUBG)" },
              { id: "attitude", label: "Badass & Attitude" },
              { id: "symbols", label: "Evil Symbols & Wings" },
              { id: "aesthetic", label: "Dark Aesthetic & Girls" },
              { id: "squad", label: "Clan & Squad" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`text-[12px] px-3 py-1 rounded-[3px] font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-[#354861] text-white"
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
                    : "bg-white text-[#222] border-[#e2e8f0] hover:border-[#3c8dbc] hover:bg-[#eef5fc]"
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
                      : "bg-[#e8f4fd] text-[#2c6da5] group-hover:bg-[#3c8dbc] group-hover:text-white"
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
