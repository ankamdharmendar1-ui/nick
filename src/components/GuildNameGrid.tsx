"use client";

import React, { useState } from "react";

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
  "『STEEL LEGION』", "꧁VENDETTA CLAN꧂", "★WARLORDS★", "『APEX PREDATORS』", "꧁FALLEN ANGELS꧂"
];

export default function GuildNameGrid() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (nick: string) => {
    navigator.clipboard.writeText(nick);
    setCopied(nick);
    setTimeout(() => setCopied((p) => (p === nick ? null : p)), 2000);
  };

  return (
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
  );
}
