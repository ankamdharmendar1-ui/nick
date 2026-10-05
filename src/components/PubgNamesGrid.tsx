"use client";

import React, { useState, useMemo } from "react";
import { transformWithMap, maps } from "@/lib/fontTransforms";

interface NickItem {
  id: string;
  name: string;
  category: "conqueror" | "clan" | "sniper" | "cool" | "girls";
}

const PUBG_NAMES: NickItem[] = [
  // 亗 Conqueror & Pro
  { id: "p1", name: "亗•CONQUEROR•亗", category: "conqueror" },
  { id: "p2", name: "亗『KING』亗", category: "conqueror" },
  { id: "p3", name: "x͜× CLUTCH ×͜x", category: "conqueror" },
  { id: "p4", name: "メ S H A H メ", category: "conqueror" },
  { id: "p5", name: "亗•BGMI•KING•亗", category: "conqueror" },
  { id: "p6", name: "꧁༒PUBG•KING༒꧂", category: "conqueror" },
  { id: "p7", name: "亗•ROYAL•PASS•亗", category: "conqueror" },
  { id: "p8", name: "『sʜʀᴋ』•ᴮᴬᴰʙᴏʏツ", category: "conqueror" },
  { id: "p9", name: "亗•CLUTCH•GOD•亗", category: "conqueror" },
  { id: "p10", name: "꧁ᴮᴳᴹᴵ•ɢᴏᴅ꧂", category: "conqueror" },
  { id: "p11", name: "亗•VIKENDI•ACE•亗", category: "conqueror" },
  { id: "p12", name: "★彡[CONQUEROR]彡★", category: "conqueror" },
  { id: "p13", name: "亗 NOOB TO PRO 亗", category: "conqueror" },
  { id: "p14", name: "『OP』• S H A D O W", category: "conqueror" },

  // Best Clan Names (targeting "best clan names for pubg")
  { id: "p15", name: "『ASSASSINS』", category: "clan" },
  { id: "p16", name: "ᵀᵉᵃᵐ★ESPORTS★", category: "clan" },
  { id: "p17", name: "꧁SOUL•SQUAD꧂", category: "clan" },
  { id: "p18", name: "亗 GODS OF PUBG 亗", category: "clan" },
  { id: "p19", name: "★DARK•CLAN★", category: "clan" },
  { id: "p20", name: "『HYDRA』OFFICIAL", category: "clan" },
  { id: "p21", name: "꧁ELITE•FORCE꧂", category: "clan" },
  { id: "p22", name: "⚡THUNDER•SQUAD⚡", category: "clan" },
  { id: "p23", name: "『MAFIA•KINGS』", category: "clan" },
  { id: "p24", name: "亗 SQUAD 444 亗", category: "clan" },
  { id: "p25", name: "★BLOODLINE★", category: "clan" },
  { id: "p26", name: "꧁IMMORTALS꧂", category: "clan" },
  { id: "p27", name: "『TITAN•CLAN』", category: "clan" },
  { id: "p28", name: "メ DYNASTY メ", category: "clan" },

  // Sniper & Weapon Masters
  { id: "p29", name: "▄︻デAWM•GOD══━一", category: "sniper" },
  { id: "p30", name: "亗•M416•GLACIER•亗", category: "sniper" },
  { id: "p31", name: "▄︻デK̷i̷l̷l̷e̷r̷══━一", category: "sniper" },
  { id: "p32", name: "『AKM•LEGEND』", category: "sniper" },
  { id: "p33", name: "꧁AWM•SNIPER꧂", category: "sniper" },
  { id: "p34", name: "★HEADSHOT•MACHINE★", category: "sniper" },
  { id: "p35", name: "亗•SPRAY•PRO•亗", category: "sniper" },
  { id: "p36", name: "꧁360•NO•SCOPE꧂", category: "sniper" },
  { id: "p37", name: "⚡ONE•TAP•GOD⚡", category: "sniper" },
  { id: "p38", name: "▄︻デDEADSHOT══━一", category: "sniper" },
  { id: "p39", name: "『BERYL•M762』亗", category: "sniper" },
  { id: "p40", name: "★SUPPRESSOR•GOD★", category: "sniper" },

  // Cool & Badass
  { id: "p41", name: "★彡[ᴅᴇᴠɪʟ]彡★", category: "cool" },
  { id: "p42", name: "⚡TERMINATOR⚡", category: "cool" },
  { id: "p43", name: "꧁CHICKEN•DINNER꧂", category: "cool" },
  { id: "p44", name: "『KILL•MASTER』", category: "cool" },
  { id: "p45", name: "★SOLO•SQUAD★", category: "cool" },
  { id: "p46", name: "꧁RUSH•GAMING꧂", category: "cool" },
  { id: "p47", name: "亗•DOMINATOR•亗", category: "cool" },
  { id: "p48", name: "『ERANGEL•KING』", category: "cool" },
  { id: "p49", name: "꧁LAST•ZONE꧂", category: "cool" },
  { id: "p50", name: "★HOT•DROP•HERO★", category: "cool" },
  { id: "p51", name: "ツ P R O B O Y シ", category: "cool" },
  { id: "p52", name: "【 𝕏 】WARLORD【 𝕏 】", category: "cool" },
  { id: "p53", name: "『FRAG•MASTER』", category: "cool" },
  { id: "p54", name: "꧁SQUAD•WIPER꧂", category: "cool" },

  // Girls & Aesthetic
  { id: "p55", name: "✿ • Q U E E N✿ᴳᴵᴿᴸ࿐", category: "girls" },
  { id: "p56", name: "♡ 𝓟𝓾𝓫𝓰 𝓠𝓾𝓮𝓮𝓷 ♡", category: "girls" },
  { id: "p57", name: "ᶜᵘᵗᵉ 𝘗𝘴𝘺𝘤𝘩𝘰 🩸", category: "girls" },
  { id: "p58", name: "Miss_Sniper🖤", category: "girls" },
  { id: "p59", name: "亗 PRINCESS 亗", category: "girls" },
  { id: "p60", name: "★ CUTE KILLER ★", category: "girls" },
  { id: "p61", name: "꧁ANGEL•EYES꧂", category: "girls" },
  { id: "p62", name: "♡ ᥫ᭡ Queen ᥫ᭡ ♡", category: "girls" },
  { id: "p63", name: "『LADY•RUSHER』", category: "girls" },
  { id: "p64", name: "🌸 Sakura_Gaming 🌸", category: "girls" },
];

function generatePubgTemplates(inputText: string) {
  const text = inputText.trim() || "Sniper";
  const small = transformWithMap(text, maps.smallCaps);
  const gothic = transformWithMap(text, maps.boldGothic);
  const sansBold = transformWithMap(text, maps.boldSans);
  const upperAngles = transformWithMap(text, maps.upperAngles);
  const circledDark = transformWithMap(text, maps.circledDark);

  return [
    { label: "Conqueror Crown", styled: `亗『${small}』亗` },
    { label: "Sniper Crosshair", styled: `▄︻デ${text}══━一` },
    { label: "Japanese Clan Bracket", styled: `『${sansBold}』` },
    { label: "Tokyo Clan Tag", styled: `メ ${small} メ` },
    { label: "Badass Shadow Assassin", styled: `x͜× ${sansBold} ×͜x` },
    { label: "Legendary Wing Frame", styled: `꧁༺${gothic}༻꧂` },
    { label: "Esports Star Stalker", styled: `★彡[${sansBold}]彡★` },
    { label: "Thunderbolt Dominator", styled: `⚡${sansBold}⚡` },
    { label: "Middle Dot Clan Style", styled: `PUBG•${small}` },
    { label: "Team Tag Prefix", styled: `ᵀᵉᵃᵐ★${sansBold}★` },
    { label: "Upper Angles Military", styled: upperAngles },
    { label: "Bubble Dark Badge", styled: circledDark },
    { label: "Skull Clan Tag", styled: `☠️『${small}』☠️` },
    { label: "Aesthetic Duo Heart", styled: `♡ ᥫ᭡ ${small} ᥫ᭡ ♡` },
  ];
}

export default function PubgNamesGrid() {
  const [inputText, setInputText] = useState("");
  const [activeTab, setActiveTab] = useState<
    "all" | "conqueror" | "clan" | "sniper" | "cool" | "girls"
  >("all");
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const dynamicTemplates = useMemo(
    () => generatePubgTemplates(inputText),
    [inputText]
  );

  const filteredNicks = useMemo(() => {
    if (activeTab === "all") return PUBG_NAMES;
    return PUBG_NAMES.filter((item) => item.category === activeTab);
  }, [activeTab]);

  const handleCopy = (val: string) => {
    navigator.clipboard.writeText(val);
    setCopiedText(val);
    setTimeout(() => {
      setCopiedText((prev) => (prev === val ? null : prev));
    }, 1800);
  };

  return (
    <div className="w-full space-y-4">
      {/* Toast Notification */}
      {copiedText && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#354861] text-white px-4 py-2.5 rounded shadow-lg flex items-center gap-2 text-sm border-l-4 border-[#00a65a] animate-fade-in">
          <span>✓ Copied to clipboard:</span>
          <span className="font-mono font-bold max-w-[200px] truncate text-emerald-300">
            {copiedText}
          </span>
        </div>
      )}

      {/* Live Custom PUBG Styler */}
      <div className="p-4 bg-[#f8fafd] border-b border-[#e5e7eb]">
        <div className="text-xs font-bold text-[#354861] uppercase tracking-wider mb-2">
          Live PUBG Name Generator (Type Your Handle)
        </div>
        <div className="flex gap-2 max-w-md mb-3">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your name (e.g. Hunter, Killer, Alex, King)..."
            maxLength={14}
            className="flex-1 px-3 py-2 border border-[#d2d6de] rounded-[3px] text-sm focus:outline-none focus:border-[#3c8dbc] bg-white text-[#222]"
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

        {/* Dynamic Generated Names */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {dynamicTemplates.map((t, idx) => {
            const isCopied = copiedText === t.styled;
            return (
              <div
                key={idx}
                onClick={() => handleCopy(t.styled)}
                className={`p-2 rounded border cursor-pointer flex items-center justify-between transition-colors ${
                  isCopied
                    ? "bg-[#00a65a] text-white border-[#00a65a]"
                    : "bg-white border-gray-200 hover:border-[#3c8dbc] hover:bg-[#eef5fc]"
                }`}
              >
                <div className="min-w-0 pr-2">
                  <div className="font-mono text-[13px] font-bold truncate">{t.styled}</div>
                  <div className={`text-[10px] ${isCopied ? "text-white/80" : "text-gray-400"}`}>
                    {t.label}
                  </div>
                </div>
                <span
                  className={`text-[11px] font-semibold px-2 py-0.5 rounded shrink-0 ${
                    isCopied ? "bg-white text-[#00a65a]" : "bg-[#e8f4fd] text-[#2c6da5]"
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
      <div>
        <div className="px-4 py-2 border-b border-[#e5e7eb] flex flex-wrap items-center justify-between gap-2">
          <div className="text-xs font-bold text-[#354861] uppercase tracking-wider">
            Curated PUBG Names ({filteredNicks.length})
          </div>
          <div className="flex flex-wrap gap-1">
            {[
              { id: "all", label: "All Names" },
              { id: "conqueror", label: "亗 Conqueror & Pro" },
              { id: "clan", label: "Best Clan Names" },
              { id: "sniper", label: "Sniper & Guns" },
              { id: "cool", label: "Cool & Badass" },
              { id: "girls", label: "Girls & Duo" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`text-[11px] px-2.5 py-1 rounded transition-colors ${
                  activeTab === tab.id
                    ? "bg-[#354861] text-white font-semibold"
                    : "bg-[#ecf0f5] text-[#444] hover:bg-[#d2d6de]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of Names */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
          {filteredNicks.map((nick) => {
            const isCopied = copiedText === nick.name;
            return (
              <div
                key={nick.id}
                onClick={() => handleCopy(nick.name)}
                className="flex items-center justify-between px-3 py-2.5 border-b border-[#f4f4f4] hover:bg-[#f9f9f9] cursor-pointer group"
              >
                <span className="font-mono text-[14px] text-[#222] select-all truncate pr-2">
                  {nick.name}
                </span>
                <span
                  className={`text-[11px] font-semibold px-2 py-0.5 rounded ml-2 shrink-0 transition-colors ${
                    isCopied
                      ? "bg-[#00a65a] text-white"
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
