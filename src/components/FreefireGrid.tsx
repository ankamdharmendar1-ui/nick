"use client";
import React, { useState } from "react";

const FF_NICKNAMES = [
  "꧁NINJA꧂", "☆⊙KING⊙☆", "『sʜʀᴋ』•ᴮᴬᴰʙᴏʏツ", "꧁༺₦Ї₦ℑ₳༻꧂",
  "༄ᶦᶰᵈ᭄✿Gᴀᴍᴇʀ࿐", "𝓑𝓻𝓸𝓴𝓮𝓷 𝓗𝓮𝓪𝓻𝓽♡", "×͜×ㅤ𝙰𝙻𝙾𝙽𝙴ㅤ𝙱𝙾𝚈", "Sᴋ᭄Sᴀʙɪʀᴮᴼˢˢ",
  "꧁☆☬κɪɴɢ☬☆꧂", "꧁ঔৣ☬✞𝓓𝖔𝖓✞☬ঔৣ꧂", "༺Leͥgeͣnͫd༻ᴳᵒᵈ", "꧁⁣༒𓆩₦ł₦ℑ₳𓆪༒꧂",
  "🌻ｓｕｎｆｌｏｗｅｒ🌻", "𝕯𝖆𝖗𝖐 𝕬𝖓𝖌𝖊𝖑", "⚡RAISTAR⚡", "꧁༒GHOST༒꧂",
  "𓆩♡𓆪", "꧁✨LEGEND✨꧂", "ᴮᴬᴰ•ʙᴏʏ•FF", "꧁༺WARRIOR༻꧂",
  "꧁༒☠KILLER☠༒꧂", "♛KING•OF•FF♛", "Aᴠᴇɴɢᴇʀs᭄FF", "꧁DEMON꧂•ᶠᶠ",
  "ɴᴏ•sᴄᴏᴘᴇ•FF", "༄ᶦᶰᵈ᭄HERO", "ᴳᵒᵈ•RAISTAR", "꧁💀DARK💀꧂",
  "꧁⚡STORM⚡꧂", "꧁🌙MOON🌙꧂", "꧁✦ALPHA✦꧂", "꧁𝕯𝖆𝖗𝖐𝕭𝖑𝖆𝖉𝖊꧂",
  "🔥FIRE•BOY🔥", "꧁𝐋𝐨𝐧𝐞•𝐖𝐨𝐥𝐟꧂", "ᴮᴼˢˢ•FF•ᴷɪɴɢ", "꧁☆SNIPER☆꧂",
  "꧁💎DIAMOND💎꧂", "ᴀᴋ47•FF•ɢᴏᴅ", "Aɴᴋᴜsʜ  ᶠᶠ", "Dɪᴏ፝֟sᴀღ᭄",
  "꧁☆STYLISH☆꧂", "᭄ꦿNOOB乂FF", "ĜĄMËŘ•FF", "𝑺𝒉𝒂𝒅𝒐𝒘•FF",
  "Sᴘᴇᴇᴅꜱᴛᴇʀ•FF", "ᵁᴳ•ʙᴏʏ•FF", "ᎯᏞᎮᏂᎯ•ᶠᶠ", "ᴀᴋ•47•ɢᴏᴅ",
  "꧁🅺🅸🅽🅶꧂", "꧁༒ʜᴀᴄᴋᴇʀ༒꧂",
];

export default function FreefireGrid() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (nick: string) => {
    navigator.clipboard.writeText(nick);
    setCopied(nick);
    setTimeout(() => setCopied((p) => (p === nick ? null : p)), 2000);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
      {FF_NICKNAMES.map((nick, i) => (
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
