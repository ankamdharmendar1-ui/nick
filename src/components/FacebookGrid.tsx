"use client";

import React, { useState, useMemo } from "react";
import { transformWithMap, maps } from "@/lib/fontTransforms";

interface NickItem {
  id: string;
  name: string;
  category: "vip" | "attitude" | "girls" | "symbols" | "bio";
}

const FB_NICKNAMES: NickItem[] = [
  // VIP Account & Official
  { id: "fb1", name: "『ᴠɪᴘ』𝕱𝖆𝖈𝖊𝖇𝖔𝖔𝖐 𝕶𝖎𝖓𝖌", category: "vip" },
  { id: "fb2", name: "👑 𝓕𝓑 𝓞𝓯𝓯𝓲𝓬𝓲𝓪𝓵 👑", category: "vip" },
  { id: "fb3", name: "亗 VIP ACCOUNT 亗", category: "vip" },
  { id: "fb4", name: "★彡[ғв_ᴏғғɪᴄɪᴀʟ]彡★", category: "vip" },
  { id: "fb5", name: "『ᴠɪᴘ』亗 𝕽𝖔𝖞𝖆𝖑 亗", category: "vip" },
  { id: "fb6", name: "🔥 MR. VIP OFFICIAL 🔥", category: "vip" },
  { id: "fb7", name: "𝓥𝓘𝓟 𝓑𝓞𝓢𝓢", category: "vip" },
  { id: "fb8", name: "Ⓥ VIP USER Ⓥ", category: "vip" },
  { id: "fb9", name: "✦ 𝕱𝖆𝖈𝖊𝖇𝖔𝖔𝖐 𝕷𝖊𝖌𝖊𝖓𝖉 ✦", category: "vip" },
  { id: "fb10", name: "★ 𝕽𝖔𝖞𝖆𝖑 𝕭𝖑𝖔𝖔𝖉 ★", category: "vip" },

  // Attitude & Boys
  { id: "fb11", name: "乂 S H A H 乂", category: "attitude" },
  { id: "fb12", name: "𒆜 𝕭𝖆𝖉𝖘𝖍𝖆𝖍 𒆜", category: "attitude" },
  { id: "fb13", name: "ⁱᵃᵐ 𝓚𝓲𝓷𝓰👑", category: "attitude" },
  { id: "fb14", name: "⚡ D E V I L _ B O Y ⚡", category: "attitude" },
  { id: "fb15", name: "亗『SARKAR』亗", category: "attitude" },
  { id: "fb16", name: "𝕿𝖍𝖊 𝕬𝖙𝖙𝖎𝖙𝖚𝖉𝖊 𝕭𝖔𝖞", category: "attitude" },
  { id: "fb17", name: "×͜× B A D B O Y ×͜x", category: "attitude" },
  { id: "fb18", name: "𒆜 𝕸𝖆𝖋𝖎𝖆 ᵇᵒʸ 𒆜", category: "attitude" },
  { id: "fb19", name: "ツ S M I L E R シ", category: "attitude" },
  { id: "fb20", name: "『𝕽𝖆𝖏𝖆』亗", category: "attitude" },
  { id: "fb21", name: "mr_silent_killer", category: "attitude" },
  { id: "fb22", name: "★ S A R K A R ★", category: "attitude" },

  // Girls & Aesthetic
  { id: "fb23", name: "𝓕𝓪𝓬𝓮𝖇𝓸𝓸𝓴 𝓠𝓾𝓮𝓮𝓷 👑", category: "girls" },
  { id: "fb24", name: "♡ 𝓟𝓻𝓲𝓷𝓬𝓮𝓼𝓼 ♡", category: "girls" },
  { id: "fb25", name: "ᶜᵘᵗᵉ 𝕯𝖔𝖑𝖑 🖤", category: "girls" },
  { id: "fb26", name: "Miss_Attitude_Queen", category: "girls" },
  { id: "fb27", name: "✿ 𝓢𝔀𝓮𝓮𝓽 𝓖𝓲𝓻𝓵 ࿐", category: "girls" },
  { id: "fb28", name: "𝓓𝓮𝓿𝓲𝓵 𝓖𝓲𝓻𝓵 😈", category: "girls" },
  { id: "fb29", name: "♡ ᥫ᭡ Angel ᥫ᭡ ♡", category: "girls" },
  { id: "fb30", name: "🌙 ᴍᴏᴏɴʟɪɢʜᴛ 🌙", category: "girls" },
  { id: "fb31", name: "★ P R I N C E S S ★", category: "girls" },
  { id: "fb32", name: "𝓑𝓻𝓸𝓴𝓮𝓷 𝓗𝓮𝓪𝓻𝓽♡", category: "girls" },

  // Facebook Bio Borders & Symbols
  { id: "fb33", name: "●▬▬▬▬▬๑۩۩๑▬▬▬▬▬●", category: "symbols" },
  { id: "fb34", name: "╔═════ೋೋ═════╗", category: "symbols" },
  { id: "fb35", name: "╚═════ೋೋ═════╝", category: "symbols" },
  { id: "fb36", name: "«────── « ⋅ʚ♡ɞ⋅ » ──────»", category: "symbols" },
  { id: "fb37", name: "★·.·´¯`·.·★ VIP ★·.·´¯`·.·★", category: "symbols" },
  { id: "fb38", name: "◢◤◢◤◢◤ OFFICIAL ◢◤◢◤◢◤", category: "symbols" },
  { id: "fb39", name: "⸸ 𝕯𝖆𝖗𝖐 𝕾𝖔𝖚𝖑 ⸸", category: "symbols" },
  { id: "fb40", name: "꧁༺ 𝓕𝓑 𝓚𝓘𝓝𝓖 ༻꧂", category: "symbols" },

  // Profile VIP Bios
  { id: "fb41", name: "👑 VIP Profile Loading... 100% 👑", category: "bio" },
  { id: "fb42", name: "🔥 Single & Proud • Born to Win 🔥", category: "bio" },
  { id: "fb43", name: "🖤 Simple Boy with High Attitude 🖤", category: "bio" },
  { id: "fb44", name: "👑 Welcome to My Official FB Profile 👑", category: "bio" },
  { id: "fb45", name: "✦ Respect Everyone • Fear No One ✦", category: "bio" },
  { id: "fb46", name: "🌹 My Life • My Rules • My Attitude 🌹", category: "bio" },
];

function generateFbTemplates(inputText: string) {
  const text = inputText.trim() || "Royal";
  const small = transformWithMap(text, maps.smallCaps);
  const gothic = transformWithMap(text, maps.gothic);
  const boldGothic = transformWithMap(text, maps.boldGothic);
  const boldSans = transformWithMap(text, maps.boldSans);
  const script = transformWithMap(text, maps.script);
  const boldScript = transformWithMap(text, maps.boldScript);
  const circledDark = transformWithMap(text, maps.circledDark);
  const squaredDark = transformWithMap(text, maps.squaredDark);
  const upperAngles = transformWithMap(text, maps.upperAngles);

  return [
    { label: "VIP Official Crown", styled: `👑 『ᴠɪᴘ』${boldSans} 👑` },
    { label: "Facebook Cursive Script", styled: `𝓕𝓑 • ${boldScript}` },
    { label: "Royal Gothic Emperor", styled: `★ 𝕽𝖔𝖞𝖆𝖑 ${boldGothic} ★` },
    { label: "Apex Boss Wings", styled: `꧁༺ ${boldSans} ༻꧂` },
    { label: "Dark Badge Inverted", styled: squaredDark },
    { label: "Bubble Circled Dark", styled: circledDark },
    { label: "Upper Angles Badass", styled: upperAngles },
    { label: "Attitude Sarkar Mafia", styled: `𒆜 ${small} 𒆜` },
    { label: "Star Stalker Frame", styled: `★彡[${boldSans}]彡★` },
    { label: "Cute Heart Ribbon", styled: `♡ ᥫ᭡ ${script} ᥫ᭡ ♡` },
    { label: "Japanese Kanji Tag", styled: `メ ${small} メ` },
    { label: "Vibe Social Check", styled: `x𝕍𝕚𝕓𝕖 • ${text}` },
  ];
}

export default function FacebookGrid() {
  const [inputText, setInputText] = useState("");
  const [activeTab, setActiveTab] = useState<
    "all" | "vip" | "attitude" | "girls" | "symbols" | "bio"
  >("all");
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const dynamicTemplates = useMemo(
    () => generateFbTemplates(inputText),
    [inputText]
  );

  const filteredNicks = useMemo(() => {
    if (activeTab === "all") return FB_NICKNAMES;
    return FB_NICKNAMES.filter((item) => item.category === activeTab);
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
        <div className="bg-[#1877f2] text-white px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">📘</span>
            <h2 className="text-base font-semibold tracking-wide">
              Live Facebook Stylish Name Styler
            </h2>
          </div>
          <span className="text-xs text-blue-100">Instant VIP Profile Fonts</span>
        </div>

        <div className="p-4 border-b border-gray-100 bg-[#f9fafb]">
          <div className="max-w-xl mx-auto flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your name (e.g. Royal, Danish, Queen, Ali)..."
              maxLength={24}
              className="flex-1 px-3.5 py-2.5 border border-[#d2d6de] rounded-[3px] text-sm focus:outline-none focus:border-[#1877f2] bg-white text-[#222]"
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
                    : "bg-white text-[#222] border-[#e2e8f0] hover:border-[#1877f2] hover:bg-[#eef5fc]"
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
                      : "bg-[#e8f4fd] text-[#1877f2] group-hover:bg-[#1877f2] group-hover:text-white"
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
              Facebook Names Collection ({filteredNicks.length})
            </h3>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {[
              { id: "all", label: "All" },
              { id: "vip", label: "👑 VIP Account" },
              { id: "attitude", label: "Attitude & Boys" },
              { id: "girls", label: "Girls & Aesthetic" },
              { id: "symbols", label: "Symbols & Borders" },
              { id: "bio", label: "VIP Bio Quotes" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`text-[12px] px-3 py-1 rounded-[3px] font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-[#1877f2] text-white"
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
                    : "bg-white text-[#222] border-[#e2e8f0] hover:border-[#1877f2] hover:bg-[#eef5fc]"
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
                      : "bg-[#e8f4fd] text-[#1877f2] group-hover:bg-[#1877f2] group-hover:text-white"
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
