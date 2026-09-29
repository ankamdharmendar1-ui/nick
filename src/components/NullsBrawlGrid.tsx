"use client";
import React, { useState } from "react";

const NULLS_BRAWL_NAMES: string[] = [
  "ζ͜͡M₳ƧƬeR≠🖤",
  "ζ͜͡»Aʟɪᴠᴇ爱",
  "诶ZEUS🐼🖤",
  "•DÊWÕN🖤ʑβ",
  "⚡BRAWLER⚡",
  "亗•MORTIS•亗",
  "꧁༺EDGAR༻꧂",
  "『CROW•PRO』",
  "★SPIKE•LEGEND★",
  "꧁LEON•KING꧂",
  "亗FÂNG亗",
  "꧁•SHELLEY•꧂",
  "⚡COLT•GOD⚡",
  "『SURGE•POWER』",
  "★STU•SPEED★",
  "꧁༒CORDELIUS༒꧂",
  "亗•BUZZ•亗",
  "꧁SAMURAI•KENJI꧂",
  "『HYPERCHARGE』",
  "★STAR•DROP★",
  "꧁TITAN•BRAWL꧂",
  "⚡SHADOW•BRAWLER⚡",
  "亗DRACO亗",
  "『EL•PRIMO』",
  "꧁VIPER•BRAWL꧂",
  "★CHAMPION★",
  "꧁GHOST•RIDER꧂",
  "亗•ASSASSIN•亗",
  "『TOXIC•BRAWLER』",
  "⚡NIGHT•HAWK⚡",
  "꧁IMMORTAL꧂",
  "★RUSH•KILLER★",
  "亗•SOLO•SHOWDOWN•亗",
  "꧁GEM•GRABBER꧂",
  "『KNOCKOUT•PRO』",
  "⚡BOUNTY•HUNTER⚡",
  "亗•DUO•KING•亗",
  "꧁HEIST•MASTER꧂",
  "★BRAWL•STARS★",
  "꧁DARK•KNIGHT꧂",
  "亗OMEGA亗",
  "『APEX•PREDATOR』",
  "⚡VENOM⚡",
  "꧁PHANTOM꧂",
  "★RED•DRAGON★",
  "亗•INFERNO•亗",
  "꧁SAVAGE꧂",
  "『DEADLY•SHOT』",
  "⚡BLAZE⚡",
  "亗OVERPOWERED亗",
];

export default function NullsBrawlGrid() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (nick: string) => {
    navigator.clipboard.writeText(nick);
    setCopied(nick);
    setTimeout(() => setCopied((p) => (p === nick ? null : p)), 2000);
  };

  return (
    <div>
      <div className="flex items-center justify-between border-b border-[#f4f4f4] px-4 py-2.5">
        <h2 className="text-[17px] font-semibold text-[#333] m-0">
          En Popüler Nulls Brawl İsimleri &amp; Şekilli Nickler (50+)
        </h2>
        <span className="text-[11px] text-gray-400">Kopyalamak için tıkla</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
        {NULLS_BRAWL_NAMES.map((nick, i) => (
          <div
            key={i}
            onClick={() => handleCopy(nick)}
            className="flex items-center justify-between px-4 py-3 border-b border-[#f4f4f4] hover:bg-[#f9f9f9] cursor-pointer group transition-colors"
          >
            <span className="font-mono text-[14px] text-[#222] select-all font-medium">
              {nick}
            </span>
            <span
              className={`text-[11px] font-semibold px-2.5 py-1 rounded ml-2 shrink-0 transition-colors ${
                copied === nick
                  ? "bg-[#00a65a] text-white"
                  : "bg-[#e8f4fd] text-[#2c6da5] group-hover:bg-[#3c8dbc] group-hover:text-white"
              }`}
            >
              {copied === nick ? "Kopyalandı!" : "Kopyala"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
