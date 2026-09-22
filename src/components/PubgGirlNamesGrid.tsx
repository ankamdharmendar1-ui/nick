"use client";

import React, { useState } from "react";

const GIRL_NAMES: string[] = [
  "꧁✿QUEEN✿꧂", "𝓖𝓸𝓵𝓭𝓮𝓷•𝓖𝓲𝓻𝓵", "♡ROSE•FF♡", "꧁💕PRINCESS💕꧂", "ᴮᴬᴰ•ɢɪʀʟ•FF",
  "꧁✨DIVA✨꧂", "𝓑𝓪𝓫𝔂•𝓖𝓲𝓻𝓵♡", "♛QUEEN•OF•PUBG♛", "꧁🌸CHERRY🌸꧂", "𝓢𝓮𝓬𝓻𝓮𝓽•𝓐𝓰𝓮𝓷𝓽",
  "꧁💎DIAMOND•GIRL💎꧂", "★GIRL•GAMER★", "𝓐𝓷𝓰𝓮𝓵•𝓦𝓲𝓷𝓰𝓼", "♡SOFT•GIRL♡", "꧁🌺SAKURA🌺꧂",
  "𝓟𝓻𝓲𝓷𝓬𝓮𝓼𝓼•𝓦𝓪𝓻𝓻𝓲𝓸𝓻", "꧁DEADLY•DIVA꧂", "★FIERCE•QUEEN★", "𝓢𝓷𝓸𝔀•𝓦𝓱𝓲𝓽𝓮", "♡MISS•SNIPER♡",
  "꧁💜VIOLET•GIRL💜꧂", "𝓜𝓸𝓸𝓷𝓵𝓲𝓰𝓱𝓽•𝓖𝓲𝓻𝓵", "꧁ALPHA•FEMALE꧂", "★LONE•WOLF•GIRL★", "𝓢𝓽𝔂𝓵𝓲𝓼𝓱•𝓺𝓾𝓮𝓮𝓷",
  "♡ROSE•GAMER♡", "꧁🦋BUTTERFLY•GIRL🦋꧂", "𝓟𝓸𝓲𝓼𝓸𝓷•𝓘𝓿𝔂", "꧁GIRL•BOSS꧂", "★SUGAR•RUSH★",
  "𝓢𝓮𝓻𝓮𝓷𝓲𝓽𝔂•𝓖𝓲𝓻𝓵", "♡PINKY•KILLER♡", "꧁🌙LUNA•GIRL🌙꧂", "𝓢𝓽𝓸𝓻𝓶•𝓺𝓾𝓮𝓮𝓷", "★GLAM•SNIPER★",
  "𝓓𝓪𝓻𝓴•𝓐𝓷𝓰𝓮𝓵", "♡NEON•GIRL♡", "꧁✦STAR•GIRL✦꧂", "𝓜𝔂𝓼𝓽𝓮𝓻𝔂•𝓖𝓲𝓻𝓵", "★SAVAGE•QUEEN★",
  "𝓖𝓻𝓪𝓬𝓮•𝓤𝓷𝓭𝓮𝓻•𝓕𝓲𝓻𝓮", "♡CHERRY•BLOSSOM♡", "꧁💫NOVA•GIRL💫꧂", "𝓔𝓵𝓮𝓬𝓽𝓻𝓪•𝓖𝓲𝓻𝓵", "★WARRIOR•QUEEN★",
  "𝓟𝓱𝓪𝓷𝓽𝓸𝓶•𝓠𝓾𝓮𝓮𝓷", "♡VELVET•GIRL♡", "꧁🌹ROSE•WARRIOR🌹꧂", "𝓒𝓻𝔂𝓼𝓽𝓪𝓵•𝓖𝓲𝓻𝓵", "★BLAZE•QUEEN★"
];

export default function PubgGirlNamesGrid() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (nick: string) => {
    navigator.clipboard.writeText(nick);
    setCopied(nick);
    setTimeout(() => setCopied((p) => (p === nick ? null : p)), 2000);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
      {GIRL_NAMES.map((nick, i) => (
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
