"use client";

import React, { useState } from "react";

const ATTITUDE_NAMES: string[] = [
  "𝔔𝔲𝔢𝔢𝔫 𝔬𝔣 𝔇𝔞𝔯𝔨𝔫𝔢𝔰𝔰", "꧁✦ ATTITUDE GIRL ✦꧂", "𝓑𝓪𝓭 𝓖𝓲𝓻𝓵 𝓥𝓲𝓫𝓮𝓼", "★ᵢₙdₑₚₑₙdₑₙₜ ₓₒₓₒ★",
  "꧁𝕯𝖆𝖗𝖐 𝕬𝖓𝖌𝖊𝖑꧂", "𝒮𝒾𝓁𝑒𝓃𝓉 𝒬𝓊𝑒𝑒𝓃", "♡ Soft But Savage ♡", "꧁BOSS LADY꧂",
  "𝓢𝓮𝓵𝓯 𝓜𝓪𝓭𝓮 𝓠𝓾𝓮𝓮𝓷", "★ No Drama Zone ★", "꧁𝕭𝖗𝖔𝖐𝖊𝖓 𝕳𝖆𝖑𝖔꧂", "𝓜𝔂 𝓛𝓲𝓯𝓮 𝓜𝔂 𝓡𝓾𝓵𝓮𝓼",
  "♡ Classy Not Trashy ♡", "꧁FIERCE & FREE꧂", "𝓖𝓵𝓸𝔀 𝓤𝓹 𝓠𝓾𝓮𝓮𝓷", "★ Vibe Check: Passed ★",
  "꧁𝕸𝖎𝖘𝖘 𝕴𝖓𝖉𝖊𝖕𝖊𝖓𝖉𝖊𝖓𝖙꧂", "𝓝𝓸𝓽 𝓨𝓸𝓾𝓻 𝓣𝔂𝓹𝓮", "♡ Born to Shine ♡", "꧁UNBOTHERED꧂",
  "𝓢𝓱𝓪𝔂 𝓺𝓾𝓮𝓮𝓷", "★ Mood: Savage ★", "꧁𝕲𝖔𝖑𝖉𝖊𝖓 𝕮𝖍𝖎𝖑𝖉꧂", "𝓢𝓷𝓸𝔀 𝓠𝓾𝓮𝓮𝓷 👑",
  "♡ Soft Heart Hard Mood ♡", "꧁TOO REAL꧂", "𝓛𝓸𝓷𝓮 𝓦𝓸𝓵𝓯 𝓔𝓷𝓮𝓻𝓰𝔂", "★ Pretty & Petty ★",
  "꧁𝖁𝖎𝖇𝖊 𝕲𝖔𝖉𝖉𝖊𝖘𝔰꧂", "𝓡𝓸𝔂𝓪𝓵 𝓐𝓽𝓽𝓲𝓽𝓾𝓭𝓮", "♡ Zero Drama ♡", "꧁THAT GIRL꧂",
  "𝓝𝓸 𝓕𝓲𝓵𝓽𝓮𝓻", "★ Raw & Real ★", "꧁𝖄𝖔𝖚𝖗 𝕷𝖔𝖘𝖘꧂", "𝓟𝓻𝓮𝓽𝓽𝔂 𝓓𝓪𝓷𝓰𝓮𝓻𝓸𝓾𝓼",
  "♡ Healing Era ♡", "꧁LEVEL UP꧂", "𝓦𝓲𝓵𝓭 𝓐𝓽 𝓗𝓮𝓪𝓻𝓽", "★ Own The Room ★",
  "꧁𝕱𝖊𝖆𝖗𝖑𝖊𝖘𝖘꧂", "𝓢𝓸𝓵𝓸 𝓠𝓾𝓮𝓮𝓷", "♡ No Apologies ♡", "꧁MAIN CHARACTER꧂",
  "𝓑𝓸𝓼𝓼 𝓔𝓷𝓮𝓻𝓰𝔂", "★ Attitude On Point ★", "꧁𝕴𝖙'𝖘 𝕲𝖎𝖗𝖑 𝕾𝖙𝖚𝖋𝖋꧂", "𝓚𝓮𝓮𝓹 𝓘𝓽 𝓡𝓮𝓪𝓵",
  "♡ Cherry Bomb ♡", "꧁ICONIC꧂"
];

export default function AttitudeNamesGrid() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (nick: string) => {
    navigator.clipboard.writeText(nick);
    setCopied(nick);
    setTimeout(() => setCopied((p) => (p === nick ? null : p)), 2000);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
      {ATTITUDE_NAMES.map((nick, i) => (
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
