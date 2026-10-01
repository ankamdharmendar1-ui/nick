"use client";
import React, { useState, useMemo } from "react";
import { generateAllStyles } from "@/lib/fontTransforms";

interface NickItem {
  name: string;
  category: "vbadge" | "wings" | "crown" | "squad" | "aesthetic";
  copies: string;
}

const V_BADGE_PRESETS = [
  { name: "Ⓥ", label: "Pure V-Badge (Verified)" },
  { name: "🅥", label: "Dark V-Badge (Official)" },
  { name: "Ⓥ Q U E E N ᶠᶠ", label: "Queen V-Badge" },
  { name: "🅥 𝘛𝘩𝘶𝘯𝘥𝘦𝘳 ⚡", label: "Thunder Badge" },
  { name: "Ⓥ MR BOSS YT", label: "Creator Badge" },
  { name: "ⓋCRIMINAL FF", label: "Criminal FF Badge" },
  { name: "🅥 𝔇𝔢𝔞𝔱𝔥𝔚𝔦𝔰𝔥 ☠", label: "DeathWish Badge" },
  { name: "Ⓥ ＫＩＮＧ 亗", label: "King Crown Badge" },
  { name: "Ⓥ • ʙᴏss ᶠᶠ", label: "Boss FF Badge" },
  { name: "Ⓥ ༄ᶦᶰᵈ᭄✿Gᴀᴍᴇʀ", label: "Ind Gamer Badge" },
];

const FF_NICKNAMES: NickItem[] = [
  // V-Badge items
  { name: "Ⓥ Q U E E N ᶠᶠ", category: "vbadge", copies: "19.1K" },
  { name: "🅥 𝘛𝘩𝘶𝘯𝘥𝘦𝘳 ⚡", category: "vbadge", copies: "14.2K" },
  { name: "Ⓥ MR BOSS YT", category: "vbadge", copies: "12.5K" },
  { name: "ⓋCRIMINAL FF", category: "vbadge", copies: "11.8K" },
  { name: "🅥 𝔇𝔢𝔞𝔱𝔥𝔚𝔦𝔰𝔥 ☠", category: "vbadge", copies: "9.7K" },
  { name: "Ⓥ ＫＩＮＧ 亗", category: "vbadge", copies: "8.9K" },

  // Wings items
  { name: "꧁NINJA꧂", category: "wings", copies: "18.3K" },
  { name: "꧁༺₦Ї₦ℑ₳༻꧂", category: "wings", copies: "16.1K" },
  { name: "꧁☆☬κɪɴɢ☬☆꧂", category: "wings", copies: "15.4K" },
  { name: "꧁औৣ☬✞𝓓𝖔𝖓✞☬ঔৣ꧂", category: "wings", copies: "13.2K" },
  { name: "꧁⁣༒𓆩₦ł₦ℑ₳𓆪༒꧂", category: "wings", copies: "11.5K" },
  { name: "꧁༒GHOST༒꧂", category: "wings", copies: "10.8K" },
  { name: "꧁༺WARRIOR༻꧂", category: "wings", copies: "9.9K" },
  { name: "꧁༒☠KILLER☠༒꧂", category: "wings", copies: "9.4K" },
  { name: "꧁DEMON꧂•ᶠᶠ", category: "wings", copies: "8.7K" },
  { name: "꧁💀DARK💀꧂", category: "wings", copies: "8.2K" },
  { name: "꧁⚡STORM⚡꧂", category: "wings", copies: "7.9K" },
  { name: "꧁✦ALPHA✦꧂", category: "wings", copies: "7.5K" },
  { name: "꧁𝕯𝖆𝖗𝖐𝕭𝖑𝖆𝖉𝖊꧂", category: "wings", copies: "7.1K" },
  { name: "꧁𝐋𝐨𝐧𝐞•𝐖𝐨𝐥𝐟꧂", category: "wings", copies: "6.8K" },
  { name: "꧁☆SNIPER☆꧂", category: "wings", copies: "6.5K" },
  { name: "꧁💎DIAMOND💎꧂", category: "wings", copies: "6.2K" },
  { name: "꧁🅺🅸🅽🅶꧂", category: "wings", copies: "5.9K" },
  { name: "꧁༒ʜᴀᴄᴋᴇʀ༒꧂", category: "wings", copies: "5.7K" },

  // Crown & Boss
  { name: "☆⊙KING⊙☆", category: "crown", copies: "14.8K" },
  { name: "亗『S U P R E M E』亗", category: "crown", copies: "13.6K" },
  { name: "♛KING•OF•FF♛", category: "crown", copies: "12.4K" },
  { name: "༺Leͥgeͣnͫd༻ᴳᵒᵈ", category: "crown", copies: "11.1K" },
  { name: "Sᴋ᭄Sᴀʙɪʀᴮᴼˢˢ", category: "crown", copies: "10.4K" },
  { name: "ᴮᴼˢˢ•FF•ᴷɪɴɢ", category: "crown", copies: "9.1K" },
  { name: "ᴳᵒᵈ•RAISTAR", category: "crown", copies: "8.6K" },
  { name: "⚡RAISTAR⚡", category: "crown", copies: "8.2K" },

  // Squad & Pro Tags
  { name: "『sʜʀᴋ』•ᴮᴬᴰʙᴏʏツ", category: "squad", copies: "15.9K" },
  { name: "༄ᶦᶰᵈ᭄✿Gᴀᴍᴇʀ࿐", category: "squad", copies: "14.7K" },
  { name: "×͜×ㅤ𝙰𝙻𝙾𝙽𝙴ㅤ𝙱𝙾𝚈", category: "squad", copies: "13.8K" },
  { name: "ᴮᴬᴰ•ʙᴏʏ•FF", category: "squad", copies: "10.1K" },
  { name: "Aᴠᴇɴɢᴇʀs᭄FF", category: "squad", copies: "9.3K" },
  { name: "ɴᴏ•sᴄᴏᴘᴇ•FF", category: "squad", copies: "8.9K" },
  { name: "༄ᶦᶰᵈ᭄HERO", category: "squad", copies: "8.4K" },
  { name: "ᴀᴋ47•FF•ɢᴏᴅ", category: "squad", copies: "7.7K" },
  { name: "Aɴᴋᴜsʜ  ᶠᶠ", category: "squad", copies: "7.2K" },
  { name: "᭄ꦿNOOB乂FF", category: "squad", copies: "6.9K" },
  { name: "ĜĄMËŘ•FF", category: "squad", copies: "6.5K" },
  { name: "Sᴘᴇᴇᴅꜱᴛᴇʀ•FF", category: "squad", copies: "6.1K" },
  { name: "ᵁᴳ•ʙᴏʏ•FF", category: "squad", copies: "5.8K" },
  { name: "ᎯᏞᎮᏂᎯ•ᶠᶠ", category: "squad", copies: "5.5K" },

  // Aesthetic
  { name: "𝓑𝓻𝓸𝓴𝓮𝓷 𝓗𝓮𝓪𝓻𝓽♡", category: "aesthetic", copies: "16.4K" },
  { name: "𝕯𝖆𝖗𝖐 𝕬𝖓𝖌𝖊𝖑", category: "aesthetic", copies: "12.9K" },
  { name: "🌻ｓｕｎｆｌｏｗｅｒ🌻", category: "aesthetic", copies: "11.3K" },
  { name: "𓆩♡𓆪", category: "aesthetic", copies: "10.5K" },
  { name: "꧁✨LEGEND✨꧂", category: "aesthetic", copies: "9.6K" },
  { name: "꧁🌙MOON🌙꧂", category: "aesthetic", copies: "8.8K" },
  { name: "🔥FIRE•BOY🔥", category: "aesthetic", copies: "8.1K" },
  { name: "Dɪᴏ፝֟sᴀღ᭄", category: "aesthetic", copies: "7.4K" },
  { name: "𝑺𝒉𝒂𝒅𝒐𝒘•FF", category: "aesthetic", copies: "6.7K" },
];

export default function FreefireGrid() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "vbadge" | "wings" | "crown" | "squad" | "aesthetic">("all");
  const [copied, setCopied] = useState<string | null>(null);

  const dynamicStyles = useMemo(() => {
    if (!searchTerm.trim()) return [];
    return generateAllStyles(searchTerm.trim()).filter((s) => s.category === "Gamer" || s.category === "Badass" || s.category === "Fancy");
  }, [searchTerm]);

  const filteredNicks = useMemo(() => {
    if (activeTab === "all") return FF_NICKNAMES;
    return FF_NICKNAMES.filter((item) => item.category === activeTab);
  }, [activeTab]);

  const handleCopy = (nick: string) => {
    navigator.clipboard.writeText(nick);
    setCopied(nick);
    setTimeout(() => setCopied((p) => (p === nick ? null : p)), 2000);
  };

  return (
    <div className="space-y-4">
      {/* V-Badge Quick Copy Bar */}
      <div className="bg-[#fff9e6] border border-[#ffe082] rounded-[3px] p-3.5">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <span className="text-[18px]">Ⓥ</span>
            <span className="text-[13px] font-bold text-[#b7791f] uppercase tracking-wider">
              Free Fire V-Badge Vault (1-Click Copy)
            </span>
          </div>
          <span className="text-[11px] text-gray-500">Official verified symbol</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {V_BADGE_PRESETS.map((item) => {
            const isCopied = copied === item.name;
            return (
              <button
                key={item.name}
                onClick={() => handleCopy(item.name)}
                className={`p-2 rounded-[3px] border text-left transition-all flex items-center justify-between ${
                  isCopied
                    ? "bg-[#00a65a] text-white border-[#00a65a]"
                    : "bg-white text-[#222] border-[#ffe082] hover:bg-[#fff3cd] hover:border-[#f6993f]"
                }`}
                title={`Copy ${item.label}`}
              >
                <span className="font-mono text-[13px] font-bold truncate pr-1">{item.name}</span>
                <span
                  className={`text-[10px] px-1 py-0.2 rounded font-bold shrink-0 ${
                    isCopied ? "bg-white text-[#00a65a]" : "bg-[#fef3c7] text-[#92400e]"
                  }`}
                >
                  {isCopied ? "✓" : "Copy"}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Live Custom Name Generator */}
      <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#00c0ef] p-4">
        <label htmlFor="ff-input" className="block text-[14px] font-bold text-[#354861] mb-1.5">
          ⚡ Turn Your Name into a Free Fire Pro Nickname:
        </label>
        <div className="flex gap-2">
          <input
            id="ff-input"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Type your name (e.g. Hunter, Killer, Boss, Queen, Rai)..."
            className="flex-1 px-3 py-2 border border-[#d2d6de] rounded-[3px] text-[14px] outline-none focus:border-[#3c8dbc]"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="px-3 py-2 bg-gray-200 text-gray-700 text-[13px] rounded-[3px] hover:bg-gray-300 font-medium"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Dynamic Results if typing */}
      {dynamicStyles.length > 0 && (
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#00a65a] p-4">
          <div className="flex items-center justify-between border-b border-[#f4f4f4] pb-2 mb-3">
            <h3 className="text-[15px] font-bold text-[#333] m-0">
              🎮 Generated FF Styles for &quot;{searchTerm}&quot; ({dynamicStyles.length})
            </h3>
            <span className="text-[11px] text-gray-500">Click to copy</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {dynamicStyles.map((item) => {
              const isCopied = copied === item.styled;
              return (
                <button
                  key={item.id}
                  onClick={() => handleCopy(item.styled)}
                  className={`text-left p-2.5 rounded-[3px] border transition-all flex items-center justify-between ${
                    isCopied
                      ? "bg-[#00a65a] text-white border-[#00a65a]"
                      : "bg-[#f9fafb] text-[#222] border-[#e5e7eb] hover:bg-[#eef5fc] hover:border-[#3c8dbc]"
                  }`}
                >
                  <span className="text-[14px] font-medium truncate pr-2">{item.styled}</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.5 rounded font-semibold shrink-0 ${
                      isCopied ? "bg-white text-[#00a65a]" : "bg-[#3c8dbc]/10 text-[#3c8dbc]"
                    }`}
                  >
                    {isCopied ? "Copied!" : "Copy"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Main 50+ Names Grid with Tabs */}
      <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de]">
        {/* Category Filter Tabs */}
        <div className="border-b border-[#f4f4f4] p-3 flex flex-wrap items-center justify-between gap-2">
          <span className="text-[14px] font-bold text-[#354861]">Filter Nicknames:</span>
          <div className="flex flex-wrap gap-1">
            {[
              { id: "all", label: "All 50+" },
              { id: "vbadge", label: "Ⓥ V-Badge" },
              { id: "wings", label: "꧁ Wings ꧂" },
              { id: "crown", label: "亗 Crown & Boss" },
              { id: "squad", label: "Pro Squad Tags" },
              { id: "aesthetic", label: "Aesthetic" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`text-[12px] px-2.5 py-1 rounded-[3px] font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-[#354861] text-white"
                    : "bg-[#ecf0f5] text-[#444] hover:bg-[#d2d6de]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
          {filteredNicks.map((nick, i) => {
            const isCopied = copied === nick.name;
            return (
              <div
                key={i}
                onClick={() => handleCopy(nick.name)}
                className={`flex items-center justify-between px-3 py-2.5 border-b border-[#f4f4f4] cursor-pointer group transition-colors ${
                  isCopied ? "bg-[#eafaf1]" : "hover:bg-[#f9f9f9]"
                }`}
              >
                <div className="flex items-center gap-2 min-w-0 pr-2">
                  <span className="font-mono text-[14px] text-[#222] truncate select-all">{nick.name}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[11px] text-gray-400 font-mono hidden sm:inline">❤️ {nick.copies}</span>
                  <span
                    className={`text-[11px] font-semibold px-2 py-0.5 rounded transition-colors ${
                      isCopied
                        ? "bg-[#00a65a] text-white"
                        : "bg-[#e8f4fd] text-[#2c6da5] group-hover:bg-[#3c8dbc] group-hover:text-white"
                    }`}
                  >
                    {isCopied ? "Copied!" : "Copy"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
