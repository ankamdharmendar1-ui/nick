"use client";

import React, { useState } from "react";

const PUBG_NAMES: string[] = [
  "꧁༒PUBG•KING༒꧂", "亗•CONQUEROR•亗", "『BGMI•MASTER』", "꧁CHICKEN•DINNER꧂", "⚡PUBG•GOD⚡",
  "亗SNIPER•KING亗", "『RUSH•PLAYER』", "꧁RUSH•GAMING꧂", "★SOLO•SQUAD★", "亗•M416•PRO•亗",
  "꧁ᴘᴜʙɢ•ʙᴏss꧂", "『AKM•LEGEND』", "⚡CONQUEROR⚡", "亗•BGMI•KING•亗", "꧁SQUAD•LEADER꧂",
  "★LONE•RANGER★", "『RUSH•KING』", "꧁AWM•SNIPER꧂", "⚡WINNER•WINNER⚡", "亗•ROYAL•PASS•亗",
  "꧁ᴮᴳᴹᴵ•ɢᴏᴅ꧂", "『KILL•MASTER』", "⚡DOMINATOR⚡", "亗SCOPE•PRO亗", "꧁PUBG•LEGEND꧂",
  "★BATTLE•ROYALE★", "『ERANGEL•KING』", "꧁SANHOK•PRO꧂", "⚡MIRAMAR•GOD⚡", "亗•VIKENDI•ACE•亗",
  "꧁SQUAD•WIPE꧂", "★HEADSHOT•KING★", "『FULL•SQUAD』", "꧁FINISHER꧂", "⚡TERMINATOR⚡",
  "亗•CLUTCH•KING•亗", "꧁BERYL•PRO꧂", "★SUPPRESSOR•GOD★", "『GRENADE•KING』", "꧁FRAG•MASTER꧂",
  "⚡LAST•ZONE⚡", "亗•ZONE•RUNNER•亗", "꧁DROP•KING꧂", "★HOT•DROP★", "『LOOT•MASTER』",
  "꧁360•NO•SCOPE꧂", "⚡ONE•TAP•GOD⚡", "亗•SPRAY•PRO•亗", "꧁BGMI•CONQUEROR꧂", "★MYTHIC•RANK★"
];

export default function PubgNamesGrid() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (nick: string) => {
    navigator.clipboard.writeText(nick);
    setCopied(nick);
    setTimeout(() => setCopied((p) => (p === nick ? null : p)), 2000);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
      {PUBG_NAMES.map((nick, i) => (
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
  );
}
