"use client";
import React, { useState } from "react";

const INSTAGRAM_NICKNAMES = [
  "A L O N E  B O Y",
  "angel_life ♡",
  "꧁༺Q U E E N༻꧂",
  "×͜× 𝙰𝙻𝙾𝙽𝙴ㅤ𝙱𝙾𝚈",
  "★ ᴠ ɪ ʙ ᴇ ★",
  "♡ 𝑠 𝑜 𝑓 𝑡 _ 𝑔 𝑖 𝑟 𝑙 ♡",
  "𝔔𝔲𝔢𝔢𝔫 𝔬𝔣 𝔇𝔞𝔯𝔫𝔢𝔰𝔰",
  "M R • P E R F E C T",
  "꧁☆☬B O S S☬☆꧂",
  "𝓈𝓌𝑒𝑒𝓉_𝓅𝑜𝒾𝓈𝑜𝓃 🥀",
  "『sʜʀᴋ』•ᴮᴬᴰʙᴏʏツ",
  "𝓑𝓻𝓸𝓴𝓮𝓷 𝓗𝓮𝓪𝓻𝓽♡",
  "d a r k _ a n g e l",
  "★ s a v a g e _ m o d e ★",
  "s u n f l o w e r 🌻",
  "꧁༒M Y S T I C༒꧂",
  "𝓝𝓸𝓽 𝓨𝓸𝓾𝓻 𝓣𝔂𝓹𝓮",
  "★ Vibe Check: Passed ★",
  "꧁𝕲𝖔𝖑𝖉𝖊𝖓 𝕮𝖍𝖎𝖑𝖉꧂",
  "M o o n l i g h t 🌙",
  "♡ Soft But Savage ♡",
  "『G H O S T』",
  "꧁BOSS LADY꧂",
  "C h e r r y _ B o m b 🍒",
  "★ L o n e _ W o l f ★",
  "𝓡𝓸𝔂𝓪𝓵 𝓐𝓽𝓽𝓲𝓽𝓾𝓭𝓮",
  "s i l e n t _ k i l l e r",
  "♡ Born to Shine ♡",
  "꧁✦ ATTITUDE GIRL ✦꧂",
  "U N B O T H E R E D",
  "𝔅𝔞𝔡 𝔅𝔬𝔶 𝔙𝔦𝔟𝔢𝔰",
  "p e a c h y _ v i b e s 🍑",
  "★ P r e t t y _ S a v a g e ★",
  "꧁༺K I N G༻꧂",
  "c r y s t a l _ s o u l 💎",
  "꧁THAT GIRL꧂",
  "𝓘𝓬𝓮 _ 𝓠𝓾𝓮𝓮𝓷 ❄️",
  "S i m p l y _ M e",
  "♡ Zero Drama ♡",
  "꧁𝕭𝖗𝖔𝖐𝖊𝖓 𝕳𝖆𝖑𝖔꧂",
  "W a n d e r l u s t ✨",
  "★ N o _ F i l t e r ★",
  "꧁FIERCE & FREE꧂",
  "v e l v e t _ d r e a m s",
  "𝓒𝓱𝓪𝓻𝓶𝓲𝓷𝓰 _ 𝓟𝓻𝓲𝓷𝓬𝓮",
  "s t a r _ d u s t 💫",
  "꧁LEVEL UP꧂",
  "P r e t t y _ D a n g e r o u s",
  "♡ Healing Era ♡",
  "꧁MAIN CHARACTER꧂",
  "s u g a r _ r u s h 🍭",
  "★ Attitude On Point ★",
  "꧁ICONIC꧂",
  "g l o w _ g e t t e r ✨",
  "𝓚𝓮𝓮𝓹 𝓘𝓽 𝓡𝓮𝓪𝓵",
  "s o u l _ r e f l e c t i o n",
  "★ Raw & Real ★",
  "꧁FEARLESS꧂",
  "u n k n o w n _ b o y",
  "♡ C l a s s y _ V i b e s ♡",
];

export default function InstagramGrid() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (nick: string) => {
    navigator.clipboard.writeText(nick);
    setCopied(nick);
    setTimeout(() => setCopied((p) => (p === nick ? null : p)), 2000);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
      {INSTAGRAM_NICKNAMES.map((nick, i) => (
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
