"use client";
import React, { useState, useMemo } from "react";
import { generateAllStyles } from "@/lib/fontTransforms";

interface NickItem {
  name: string;
  category: "vbadge" | "wings" | "crown" | "squad" | "aesthetic" | "sniper";
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
  { name: "ⓋVenom ☠", label: "Venom Badge" },
  { name: "🅥PHANTOM", label: "Phantom Badge" },
  { name: "Ⓥ ༄ᶦᶰᵈ᭄✿Gᴀᴍᴇʀ", label: "Ind Gamer Badge" },
  { name: "Ⓥ [LEGEND] ✓", label: "Legend Tag" },
  { name: "Ⓥ 『OFFICIAL』", label: "Official Tag" },
];

const FF_NICKNAMES: NickItem[] = [
  // ── V-Badge & Creator Styles ──────────────────────────────────────────────
  { name: "Ⓥ Q U E E N ᶠᶠ", category: "vbadge", copies: "19.1K" },
  { name: "🅥 𝘛𝘩𝘶𝘯𝘥𝘦𝘳 ⚡", category: "vbadge", copies: "14.2K" },
  { name: "Ⓥ MR BOSS YT", category: "vbadge", copies: "12.5K" },
  { name: "ⓋCRIMINAL FF", category: "vbadge", copies: "11.8K" },
  { name: "🅥 𝔇𝔢𝔞𝔱𝔥𝔚𝔦𝔰𝔥 ☠", category: "vbadge", copies: "9.7K" },
  { name: "Ⓥ ＫＩＮＧ 亗", category: "vbadge", copies: "8.9K" },
  { name: "ⓋVenom ☠", category: "vbadge", copies: "8.5K" },
  { name: "🅥PHANTOM", category: "vbadge", copies: "7.9K" },
  { name: "ⓋKilzone", category: "vbadge", copies: "6.8K" },
  { name: "ⓋWarlord", category: "vbadge", copies: "6.2K" },
  { name: "ⓋMystic 🔮", category: "vbadge", copies: "5.4K" },

  // ── Legendary Wings & Ornaments ──────────────────────────────────────────
  { name: "꧁OP꧂LEGEND", category: "wings", copies: "18.9K" },
  { name: "꧁NINJA꧂", category: "wings", copies: "18.3K" },
  { name: "꧁༺₦Ї₦ℑ₳༻꧂", category: "wings", copies: "16.1K" },
  { name: "꧁☆☬κɪɴɢ☬☆꧂", category: "wings", copies: "15.4K" },
  { name: "꧁𝗧𝗘𝗥𝗔’ᴮᵃᵃᵖ꧂", category: "wings", copies: "14.8K" },
  { name: "꧁ঔৣ☬✞𝓓𝖔𝖓✞☬ঔৣ꧂", category: "wings", copies: "13.2K" },
  { name: "꧁👑Rᴏʏᴀʟ👑꧂", category: "wings", copies: "12.7K" },
  { name: "꧁⁣༒𓆩₦ł₦ℑ₳𓆪༒꧂", category: "wings", copies: "11.5K" },
  { name: "꧁༒GHOST༒꧂", category: "wings", copies: "10.8K" },
  { name: "꧁༺ MaFia༻ᴾᴿᴼシ", category: "wings", copies: "10.3K" },
  { name: "꧁༺WARRIOR༻꧂", category: "wings", copies: "9.9K" },
  { name: "꧁༒☠KILLER☠༒꧂", category: "wings", copies: "9.4K" },
  { name: "꧁DEMON꧂•ᶠᶠ", category: "wings", copies: "8.7K" },
  { name: "꧁💀DARK💀꧂", category: "wings", copies: "8.2K" },
  { name: "꧁⚡STORM⚡꧂", category: "wings", copies: "7.9K" },
  { name: "꧁✦ALPHA✦꧂", category: "wings", copies: "7.5K" },
  { name: "꧁𝕯𝖆𝖗𝖐𝕭𝖑𝖆𝖉𝖊꧂", category: "wings", copies: "7.1K" },
  { name: "꧁𝐋𝐨𝐧𝐞•𝐖𝐨𝐥𝐟꧂", category: "wings", copies: "6.8K" },
  { name: "꧁💎DIAMOND💎꧂", category: "wings", copies: "6.2K" },
  { name: "꧁🅺🅸🅽🅶꧂", category: "wings", copies: "5.9K" },
  { name: "꧁༒ʜᴀᴄᴋᴇʀ༒꧂", category: "wings", copies: "5.7K" },
  { name: "꧁༒ⁿᵒᵒᵇメKiNG ༒꧂", category: "wings", copies: "5.3K" },

  // ── Sniper, Weapons & Aggressive Badass ──────────────────────────────────
  { name: "▄︻デ•̷ ̷K̷i̷l̷l̷e̷r̷══━一", category: "sniper", copies: "17.4K" },
  { name: "ʕ ͡° ʖ̯ ͡︻╦̵̵͇̿̿̿̿╤── King❦☠︎", category: "sniper", copies: "15.2K" },
  { name: "💀DᴇᴀᴛʜWᴀʟᴋᴇʀ💀", category: "sniper", copies: "14.6K" },
  { name: "༒M̸A̸D̸᭄M̸A̸F̸I̸A̸༒", category: "sniper", copies: "13.9K" },
  { name: "×× Hunter ××", category: "sniper", copies: "12.1K" },
  { name: "×× Toxic ××", category: "sniper", copies: "11.3K" },
  { name: "×× Ripper ××", category: "sniper", copies: "10.4K" },
  { name: "×× Bullet ××", category: "sniper", copies: "9.8K" },
  { name: "ᴀᴋ47•FF•ɢᴏᴅ", category: "sniper", copies: "9.2K" },
  { name: "ɴᴏ•sᴄᴏᴘᴇ•FF", category: "sniper", copies: "8.9K" },
  { name: "꧁☆SNIPER☆꧂", category: "sniper", copies: "8.5K" },
  { name: "SniperQueen♛", category: "sniper", copies: "7.9K" },
  { name: "K|I|L|L|E|R", category: "sniper", copies: "7.4K" },
  { name: "┬┴┬┴┤FireKing├┬┴┬", category: "sniper", copies: "6.7K" },

  // ── Crown, Mafia & Boss Royale ───────────────────────────────────────────
  { name: "☆⊙KING⊙☆", category: "crown", copies: "16.8K" },
  { name: "乂S H I K A R I乂", category: "crown", copies: "15.3K" },
  { name: "𒆜 𝕸𝖆𝖋𝖎𝖆 ᵇᵒʸ", category: "crown", copies: "14.1K" },
  { name: "亗『S U P R E M E』亗", category: "crown", copies: "13.6K" },
  { name: "♛KING•OF•FF♛", category: "crown", copies: "12.4K" },
  { name: "༺Leͥgeͣnͫd༻ᴳᵒᵈ", category: "crown", copies: "11.1K" },
  { name: "Sᴋ᭄Sᴀʙɪʀᴮᴼˢˢ", category: "crown", copies: "10.4K" },
  { name: "ᴮᴼˢˢ•FF•ᴷɪɴɢ", category: "crown", copies: "9.1K" },
  { name: "ᴳᵒᵈ•RAISTAR", category: "crown", copies: "8.6K" },
  { name: "⚡RAISTAR⚡", category: "crown", copies: "8.2K" },
  { name: "ⁱᵃᵐ𝓚𝓲𝓷𝓰👑", category: "crown", copies: "7.8K" },
  { name: "ⁱᵃᵐ𝕽𝖊𝖇𝖊𝖑☠", category: "crown", copies: "7.3K" },
  { name: "♛Silly♛Slanter♛", category: "crown", copies: "6.9K" },
  { name: "PʳᵒGhost ♛", category: "crown", copies: "6.4K" },
  { name: "Pʳᵒ Shadow ♟", category: "crown", copies: "5.9K" },
  { name: "Gladiator ⚔️", category: "crown", copies: "5.5K" },
  { name: "IAMZEUS ⚡", category: "crown", copies: "5.1K" },

  // ── Pro Squad & Esports Clan Tags ─────────────────────────────────────────
  { name: "༄™𒆜𝕯𝖊𝖆𝖙𝖍࿇𝕾𝖖𝖚𝖆𝖉࿐", category: "squad", copies: "17.1K" },
  { name: "『ᴹᴿ』ᴳᴬᴹᴱᴿ", category: "squad", copies: "16.4K" },
  { name: "༄ᴾᴷ᭄✿ Bullet ࿐", category: "squad", copies: "15.8K" },
  { name: "ᵀᵉᵃᵐ★SHᎪDᎾᎳ★", category: "squad", copies: "14.9K" },
  { name: "ˡᵉᵍᵉⁿᵈ々κɪɴɢ", category: "squad", copies: "13.7K" },
  { name: "༆♡ROYALメSϙᴜᴀƉ♡࿐", category: "squad", copies: "12.8K" },
  { name: "ᵀᵉᵃᵐ★ᎳᎪᏒᏒᎥᎾᏒ★", category: "squad", copies: "12.2K" },
  { name: "『sʜʀᴋ』•ᴮᴬᴰʙᴏʏツ", category: "squad", copies: "11.7K" },
  { name: "༄ᶦᶰᵈ᭄✿Gᴀᴍᴇʀ࿐", category: "squad", copies: "11.1K" },
  { name: "×͜×ㅤ𝙰𝙻𝙾𝙽𝙴ㅤ𝙱𝙾𝚈", category: "squad", copies: "10.6K" },
  { name: "ᴮᴬᴰ•ʙᴏʏ•FF", category: "squad", copies: "10.1K" },
  { name: "『ᴘʀᴏ』FIREBOX", category: "squad", copies: "9.5K" },
  { name: "Aᴠᴇɴɢᴇʀs᭄FF", category: "squad", copies: "9.3K" },
  { name: "༄ᶦᶰᵈ᭄HERO", category: "squad", copies: "8.4K" },
  { name: "Aɴᴋᴜsʜ  ᶠᶠ", category: "squad", copies: "7.2K" },
  { name: "᭄ꦿNOOB乂FF", category: "squad", copies: "6.9K" },
  { name: "ĜĄMËŘ•FF", category: "squad", copies: "6.5K" },
  { name: "Sᴘᴇᴇᴅꜱᴛᴇʀ•FF", category: "squad", copies: "6.1K" },
  { name: "ᵁᴳ•ʙᴏʏ•FF", category: "squad", copies: "5.8K" },
  { name: "ᎯᏞᎮᏂᎯ•ᶠᶠ", category: "squad", copies: "5.5K" },
  { name: "Cyberboy 💻", category: "squad", copies: "5.1K" },
  { name: "Volt boy ⚡", category: "squad", copies: "4.8K" },
  { name: "PKBullet 🎯", category: "squad", copies: "4.4K" },

  // ── Aesthetic, Soft & Girl Gamertags ───────────────────────────────────────
  { name: "ᶜᵘᵗᵉ 𝘗𝘴𝘺𝘤𝘩𝘰 🩸", category: "aesthetic", copies: "16.7K" },
  { name: "ᶜᵘᵗᵉ 𝓠𝓾𝓮𝓮𝓷 👑", category: "aesthetic", copies: "15.9K" },
  { name: "𝓑𝓻𝓸𝓴𝓮𝓷 𝓗𝓮𝓪𝓻𝓽♡", category: "aesthetic", copies: "15.1K" },
  { name: "💖CUTE💖KILLER", category: "aesthetic", copies: "13.4K" },
  { name: "𝕯𝖆𝖗𝖐 𝕬𝖓𝖌𝖊𝖑", category: "aesthetic", copies: "12.9K" },
  { name: "🌻ｓｕｎｆｌｏｗｅｒ🌻", category: "aesthetic", copies: "11.3K" },
  { name: "𓆩♡𓆪", category: "aesthetic", copies: "10.5K" },
  { name: "cuteDoll 💖", category: "aesthetic", copies: "9.8K" },
  { name: "꧁✨LEGEND✨꧂", category: "aesthetic", copies: "9.6K" },
  { name: "꧁🌙MOON🌙꧂", category: "aesthetic", copies: "8.8K" },
  { name: "🔥FIRE•BOY🔥", category: "aesthetic", copies: "8.1K" },
  { name: "Dɪᴏ፝֟sᴀღ᭄", category: "aesthetic", copies: "7.4K" },
  { name: "𝑺𝒉𝒂𝒅𝒐𝒘•FF", category: "aesthetic", copies: "6.7K" },
  { name: "Stardust ✨", category: "aesthetic", copies: "6.2K" },
  { name: "Eclipse 🌓", category: "aesthetic", copies: "5.7K" },
  { name: "Galaxy 🌌", category: "aesthetic", copies: "5.3K" },
  { name: "Raven 🦅", category: "aesthetic", copies: "4.9K" },
  { name: "Samurai 🗡️", category: "aesthetic", copies: "4.5K" },
];

// Custom Free Fire Name Templates (when user types their name)
function generateFfTemplates(name: string) {
  const clean = name.trim();
  if (!clean) return [];

  return [
    { label: "V-Badge Elite", styled: `Ⓥ ${clean} 亗` },
    { label: "Sniper God Crosshair", styled: `︻デ═一 ${clean} ═━一` },
    { label: "Legendary Dragon Wings", styled: `꧁༒☬${clean}☬༒꧂` },
    { label: "Conqueror Crown", styled: `亗 『${clean}』 亗` },
    { label: "Badass Ghost X", styled: `x͜× ${clean} ×͜x` },
    { label: "V-Badge [LEGEND]", styled: `Ⓥ ${clean} [LEGEND]` },
    { label: "Tokyo Clan Tag", styled: `メ ${clean} メ` },
    { label: "Death Cross Scythe", styled: `⚔️ 彡${clean}彡 ⚔️` },
    { label: "Esports Tournament Bracket", styled: `『sʜʀᴋ』•${clean}ツ` },
    { label: "Imperial V-Badge", styled: `🅥 ${clean} ⚡` },
    { label: "Broken Heart Aesthetic", styled: `𝓑𝓻𝓸𝓴𝓮𝓷 𝓗𝓮𝓪𝓻𝓽♡ ${clean}` },
    { label: "Crown King Star", styled: `★彡[ ${clean} ]彡★` },
    { label: "Cyber Warlord Badge", styled: `【 𝕏 】${clean}【 𝕏 】` },
    { label: "Mafia Boy Clan", styled: `𒆜 ${clean} ᵇᵒʸ` },
    { label: "Official Verified Tag", styled: `Ⓥ ${clean} 『OFFICIAL』` },
    { label: "Cute Killer Aesthetic", styled: `💖CUTE💖${clean}` },
    { label: "Fire Dragon Clan", styled: `🔥 ${clean} 🔥` },
    { label: "Anime Kanji Warrior", styled: `『鬼』${clean}『神』` },
  ];
}

export default function FreefireGrid() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "vbadge" | "wings" | "crown" | "squad" | "aesthetic" | "sniper">("all");
  const [copied, setCopied] = useState<string | null>(null);

  const dynamicStyles = useMemo(() => {
    if (!searchTerm.trim()) return [];
    return generateFfTemplates(searchTerm.trim());
  }, [searchTerm]);

  const filteredNicks = useMemo(() => {
    if (activeTab === "all") return FF_NICKNAMES;
    return FF_NICKNAMES.filter((item) => item.category === activeTab);
  }, [activeTab]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied((p) => (p === text ? null : p)), 2000);
  };

  return (
    <div className="space-y-5">
      {/* V-Badge Quick Copy Vault */}
      <div className="bg-[#fff9e6] border border-[#ffe082] rounded-[3px] p-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-1 mb-2.5">
          <div className="flex items-center gap-2">
            <span className="text-[20px] text-[#f6993f]">Ⓥ</span>
            <span className="text-[14px] font-bold text-[#b7791f] uppercase tracking-wider">
              Free Fire V-Badge Vault (1-Click Copy)
            </span>
          </div>
          <span className="text-[11px] text-gray-500 font-medium">Official &amp; Creator Unicode Badges</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
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
        <p className="text-[12px] text-gray-500 mt-2 mb-0">
          Click any style below to copy and paste directly into your Garena Free Fire ID.
        </p>
      </div>

      {/* Dynamic Results if typing */}
      {dynamicStyles.length > 0 && (
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#00a65a] p-4">
          <div className="flex items-center justify-between border-b border-[#f4f4f4] pb-2 mb-3">
            <h3 className="text-[15px] font-bold text-[#333] m-0">
              🎮 Free Fire Styles for &quot;{searchTerm}&quot; ({dynamicStyles.length})
            </h3>
            <span className="text-[11px] text-gray-500">Click to copy</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
            {dynamicStyles.map((item, idx) => {
              const isCopied = copied === item.styled;
              return (
                <button
                  key={idx}
                  onClick={() => handleCopy(item.styled)}
                  className={`text-left p-2.5 rounded-[3px] border transition-all flex items-center justify-between ${
                    isCopied
                      ? "bg-[#00a65a] text-white border-[#00a65a]"
                      : "bg-[#f9fafb] text-[#222] border-[#e5e7eb] hover:bg-[#eef5fc] hover:border-[#3c8dbc]"
                  }`}
                >
                  <div className="min-w-0 pr-2">
                    <div className="text-[14px] font-medium truncate">{item.styled}</div>
                    <div className="text-[11px] text-gray-400">{item.label}</div>
                  </div>
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

      {/* Main 100+ Free Fire Names Grid with Tabs */}
      <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de]">
        {/* Category Filter Tabs */}
        <div className="border-b border-[#f4f4f4] p-3 flex flex-wrap items-center justify-between gap-2">
          <span className="text-[14px] font-bold text-[#354861]">
            🔥 Top Free Fire Nicknames ({filteredNicks.length}):
          </span>
          <div className="flex flex-wrap gap-1">
            {[
              { id: "all", label: "All" },
              { id: "vbadge", label: "Ⓥ V-Badge" },
              { id: "wings", label: "꧁ Wings ꧂" },
              { id: "sniper", label: "▄︻デ Sniper & Guns" },
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
                className={`flex items-center justify-between px-3.5 py-2.5 border-b border-[#f4f4f4] cursor-pointer group transition-colors ${
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
