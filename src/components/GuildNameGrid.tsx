"use client";

import React, { useState, useMemo } from "react";
import { transformWithMap, maps } from "@/lib/fontTransforms";

const GUILD_NAMES: string[] = [
  "『ASSASSINS』", "꧁GHOST SQUAD꧂", "⚡THUNDER CLAN⚡", "『DEADLY WOLVES』", "꧁ELITE FORCE꧂",
  "★PREDATOR GUILD★", "『SHADOW HUNTERS』", "꧁DEMON SQUAD꧂", "⚡FIRE LORDS⚡", "『DEATH ANGELS』",
  "꧁DARK KNIGHTS꧂", "★ROYAL CLAN★", "『BEAST MODE』", "꧁KINGS OF FF꧂", "⚡STORM RIDERS⚡",
  "『NIGHT WOLVES』", "꧁BULLET SQUAD꧂", "★BLOOD LEGION★", "『DRAGON CLAN』", "꧁IRON THRONE꧂",
  "⚡OMEGA SQUAD⚡", "『SKULL GANG』", "꧁SILENT KILLERS꧂", "★ALPHA GUILD★", "『TOXIC CLAN』",
  "꧁FURY SQUAD꧂", "⚡DEATH SQUAD⚡", "『VENOM CLAN』", "꧁LETHAL FORCE꧂", "★DREADNOUGHT★",
  "『RAMPAGE CLAN』", "꧁AVATAR GUILD꧂", "⚡BLAZING SQUAD⚡", "『PHANTOM GUILD』", "꧁WARZONE CLAN꧂",
  "★IMMORTAL SQUAD★", "『CHAOS CLAN』", "꧁SOUL REAPERS꧂", "⚡NOVA GUILD⚡", "『TITAN SQUAD』",
  "꧁REBEL FORCE꧂", "★DOMINATION★", "『AVENGER GUILD』", "꧁CONQUEST CLAN꧂", "⚡RAMPART SQUAD⚡",
  "『STEEL LEGION』", "꧁VENDETTA CLAN꧂", "★WARLORDS★", "『APEX PREDATORS』", "꧁FALLEN ANGELS꧂",
  "亗『VIP GUILD』亗", "꧁༺SHADOW༻꧂", "★SQUAD 444★", "『GODS OF FF』", "⚡BLACK DRAGON⚡",
  "꧁TEAM ESPORTS꧂", "『MAFIA KINGS』", "★BLOODLINE★", "亗 IMMORTAL 亗", "꧁NIGHTMARE꧂",
  "『MYSTIC CLAN』", "⚡VALKYRIE⚡", "★CYBER WARRIORS★", "꧁RED SKULLS꧂", "『SOLO HUNTERS』",
  "亗 DYNASTY 亗", "꧁GALAXY GANG꧂", "★INVICTUS★", "『HELL HOUNDS』", "⚡SAVAGE ARMY⚡"
];

function generateGuildTemplates(textInput: string) {
  const text = textInput.trim().toUpperCase() || "GUILD";
  const small = transformWithMap(text, maps.smallCaps);
  const gothic = transformWithMap(text, maps.boldGothic);
  const sansBold = transformWithMap(text, maps.boldSans);

  return [
    { label: "Bracket Elite", styled: `『${text}』` },
    { label: "Winged Legend", styled: `꧁${text}꧂` },
    { label: "Boss Crown", styled: `亗『${small}』亗` },
    { label: "Thunder Squad", styled: `⚡${text}⚡` },
    { label: "Royal Star Legion", styled: `★${text}★` },
    { label: "Gothic Syndicate", styled: `꧁༺${gothic}༻꧂` },
    { label: "Sniper Crosshair", styled: `▄︻デ${text}══━一` },
    { label: "V-Badge Elite", styled: `Ⓥ ${sansBold} 亗` },
    { label: "Tokyo Clan Tag", styled: `メ ${text} メ` },
    { label: "Team Tag Prefix", styled: `ᵀᵉᵃᵐ★${text}★` },
    { label: "Skull Clan", styled: `☠️『${text}』☠️` },
    { label: "Crown Apex", styled: `👑 ${text} 👑` },
  ];
}

export default function GuildNameGrid() {
  const [inputText, setInputText] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  const dynamicGuilds = useMemo(() => generateGuildTemplates(inputText), [inputText]);

  const handleCopy = (nick: string) => {
    navigator.clipboard.writeText(nick);
    setCopied(nick);
    setTimeout(() => setCopied((p) => (p === nick ? null : p)), 2000);
  };

  return (
    <div className="space-y-4">
      {/* Live Custom Guild Name Generator */}
      <div className="p-4 bg-[#f8fafd] border-b border-[#e5e7eb]">
        <div className="text-xs font-bold text-[#354861] uppercase tracking-wider mb-2">
          Create Custom Guild Name / Clan Tag
        </div>
        <div className="flex gap-2 max-w-md">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type squad name (e.g. VIPER, TOXIC, PHANTOM)..."
            maxLength={12}
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

        {/* Dynamic Guild Tags */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-3">
          {dynamicGuilds.map((item, idx) => {
            const isCopied = copied === item.styled;
            return (
              <div
                key={idx}
                onClick={() => handleCopy(item.styled)}
                className={`p-2 rounded border cursor-pointer flex items-center justify-between transition-colors ${
                  isCopied
                    ? "bg-[#00a65a] text-white border-[#00a65a]"
                    : "bg-white border-gray-200 hover:border-[#3c8dbc] hover:bg-[#eef5fc]"
                }`}
              >
                <div className="min-w-0 pr-2">
                  <div className="font-mono text-[13px] font-bold truncate">{item.styled}</div>
                  <div className={`text-[10px] ${isCopied ? "text-white/80" : "text-gray-400"}`}>
                    {item.label}
                  </div>
                </div>
                <span
                  className={`text-[11px] font-semibold px-2 py-0.5 rounded shrink-0 ${
                    isCopied
                      ? "bg-white text-[#00a65a]"
                      : "bg-[#e8f4fd] text-[#2c6da5]"
                  }`}
                >
                  {isCopied ? "Copied!" : "Copy"}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Preset Curated Guild Names */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
        {GUILD_NAMES.map((nick, i) => (
          <div
            key={i}
            onClick={() => handleCopy(nick)}
            className="flex items-center justify-between px-3 py-2.5 border-b border-[#f4f4f4] hover:bg-[#f9f9f9] cursor-pointer group"
          >
            <span className="font-mono text-[14px] text-[#222] select-all">{nick}</span>
            <span
              className={`text-[11px] font-semibold px-2 py-0.5 rounded ml-2 shrink-0 transition-colors ${
                copied === nick
                  ? "bg-[#00a65a] text-white"
                  : "bg-[#e8f4fd] text-[#2c6da5] group-hover:bg-[#3c8dbc] group-hover:text-white"
              }`}
            >
              {copied === nick ? "Copied!" : "Copy"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
