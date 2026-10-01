"use client";
import React, { useState, useMemo } from "react";
import { generateAllStyles } from "@/lib/fontTransforms";

interface NickItem {
  id: string;
  name: string;
  category: "all" | "viral" | "aesthetic" | "attitude" | "boys" | "girls";
  likes: number;
}

const TIKTOK_CURATED_NICKS: NickItem[] = [
  { id: "tt-1", name: "Broken Heart♡", category: "viral", likes: 14200 },
  { id: "tt-2", name: "✦ 𝕯𝖆𝖗𝖐 𝕬𝖓𝖌𝖊𝖑 ✦", category: "viral", likes: 12850 },
  { id: "tt-3", name: "👑 Just_Me 👑", category: "attitude", likes: 11940 },
  { id: "tt-4", name: "uglyprincess", category: "aesthetic", likes: 10450 },
  { id: "tt-5", name: "x𝕍𝕚𝕓𝕖", category: "viral", likes: 9800 },
  { id: "tt-6", name: "😼シ•No Name•シ😈", category: "attitude", likes: 9430 },
  { id: "tt-7", name: "༊·˚† 𝕸𝖞𝖘𝖙𝖎𝖈 †˚·༊", category: "viral", likes: 8900 },
  { id: "tt-8", name: "♡ 𝑠 𝑜 𝑓 𝑡 _ 𝑔 𝑖 𝑟 𝑙 ♡", category: "girls", likes: 8750 },
  { id: "tt-9", name: "×͜× 𝙰𝙻𝙾𝙽𝙴ㅤ𝙱𝙾𝚈", category: "boys", likes: 8640 },
  { id: "tt-10", name: "★ ᴠ ɪ ʙ ᴇ ★", category: "aesthetic", likes: 8200 },
  { id: "tt-11", name: "『sʜʀᴋ』•ᴮᴬᴰʙᴏʏツ", category: "boys", likes: 7950 },
  { id: "tt-12", name: "꧁༺Q U E E N༻꧂", category: "girls", likes: 7800 },
  { id: "tt-13", name: "A L O N E  B O Y", category: "boys", likes: 7600 },
  { id: "tt-14", name: "angel_life ♡", category: "girls", likes: 7420 },
  { id: "tt-15", name: "𝔔𝔲𝔢𝔢𝔫 𝔬𝔣 𝔇𝔞𝔯𝔫𝔢𝔰𝔰", category: "attitude", likes: 7300 },
  { id: "tt-16", name: "M R • P E R F E C T", category: "boys", likes: 7150 },
  { id: "tt-17", name: "𝓈𝓌𝑒𝑒𝓉_𝓅𝑜𝒾𝓈𝑜𝓃 🥀", category: "aesthetic", likes: 6980 },
  { id: "tt-18", name: "꧁☆☬B O S S☬☆꧂", category: "attitude", likes: 6840 },
  { id: "tt-19", name: "★ s a v a g e _ m o d e ★", category: "attitude", likes: 6720 },
  { id: "tt-20", name: "s u n f l o w e r 🌻", category: "aesthetic", likes: 6590 },
  { id: "tt-21", name: "𝓝𝓸𝓽 𝓨𝓸𝓾𝓻 𝓣𝔂𝓹𝓮", category: "girls", likes: 6450 },
  { id: "tt-22", name: "★ Vibe Check: Passed ★", category: "viral", likes: 6310 },
  { id: "tt-23", name: "꧁𝕲𝖔𝖑𝖉𝖊𝖓 𝕮𝖍𝖎𝖑𝖉꧂", category: "aesthetic", likes: 6200 },
  { id: "tt-24", name: "M o o n l i g h t 🌙", category: "aesthetic", likes: 6050 },
  { id: "tt-25", name: "♡ Soft But Savage ♡", category: "girls", likes: 5930 },
  { id: "tt-26", name: "『G H O S T』", category: "boys", likes: 5800 },
  { id: "tt-27", name: "꧁BOSS LADY꧂", category: "girls", likes: 5740 },
  { id: "tt-28", name: "C h e r r y _ B o m b 🍒", category: "girls", likes: 5620 },
  { id: "tt-29", name: "★ L o n e _ W o l f ★", category: "boys", likes: 5510 },
  { id: "tt-30", name: "𝓡𝓸𝔂𝓪𝓵 𝓐𝓽𝓽𝓲𝓽𝓾𝓭𝓮", category: "attitude", likes: 5400 },
  { id: "tt-31", name: "s i l e n t _ k i l l e r", category: "boys", likes: 5320 },
  { id: "tt-32", name: "♡ Born to Shine ♡", category: "aesthetic", likes: 5210 },
  { id: "tt-33", name: "꧁✦ ATTITUDE GIRL ✦꧂", category: "girls", likes: 5120 },
  { id: "tt-34", name: "U N B O T H E R E D", category: "attitude", likes: 5040 },
  { id: "tt-35", name: "𝔅𝔞𝔡 𝔅𝔬𝔶 𝔙𝔦𝔟𝔢𝔰", category: "boys", likes: 4980 },
  { id: "tt-36", name: "p e a c h y _ v i b e s 🍑", category: "aesthetic", likes: 4910 },
  { id: "tt-37", name: "★ P r e t t y _ S a v a g e ★", category: "girls", likes: 4830 },
  { id: "tt-38", name: "꧁༺K I N G༻꧂", category: "boys", likes: 4760 },
  { id: "tt-39", name: "c r y s t a l _ s o u l 💎", category: "aesthetic", likes: 4680 },
  { id: "tt-40", name: "꧁THAT GIRL꧂", category: "girls", likes: 4600 },
  { id: "tt-41", name: "𝓘𝓬𝓮 _ 𝓠𝓾𝓮𝓮𝓷 ❄️", category: "girls", likes: 4520 },
  { id: "tt-42", name: "S i m p l y _ M e", category: "aesthetic", likes: 4450 },
  { id: "tt-43", name: "♡ Zero Drama ♡", category: "attitude", likes: 4380 },
  { id: "tt-44", name: "꧁𝕭𝖗𝖔𝖐𝖊𝖓 𝕳𝖆𝖑𝖔꧂", category: "attitude", likes: 4300 },
  { id: "tt-45", name: "W a n d e r l u s t ✨", category: "aesthetic", likes: 4220 },
  { id: "tt-46", name: "★ N o _ F i l t e r ★", category: "attitude", likes: 4150 },
  { id: "tt-47", name: "꧁FIERCE & FREE꧂", category: "attitude", likes: 4080 },
  { id: "tt-48", name: "v e l v e t _ d r e a m s", category: "aesthetic", likes: 4010 },
  { id: "tt-49", name: "𝓒𝓱𝓪𝓻𝓶𝓲𝓷𝓰 _ 𝓟𝓻𝓲𝓷𝓬𝓮", category: "boys", likes: 3950 },
  { id: "tt-50", name: "s t a r _ d u s t 💫", category: "aesthetic", likes: 3890 },
  { id: "tt-51", name: "꧁LEVEL UP꧂", category: "viral", likes: 3820 },
  { id: "tt-52", name: "P r e t t y _ D a n g e r o u s", category: "girls", likes: 3750 },
  { id: "tt-53", name: "♡ Healing Era ♡", category: "aesthetic", likes: 3690 },
  { id: "tt-54", name: "꧁MAIN CHARACTER꧂", category: "viral", likes: 3620 },
  { id: "tt-55", name: "s u g a r _ r u s h 🍭", category: "girls", likes: 3560 },
  { id: "tt-56", name: "★ Attitude On Point ★", category: "attitude", likes: 3500 },
  { id: "tt-57", name: "꧁ICONIC꧂", category: "viral", likes: 3440 },
  { id: "tt-58", name: "g l o w _ g e t t e r ✨", category: "aesthetic", likes: 3380 },
  { id: "tt-59", name: "𝓚𝓮𝓮𝓹 𝓘𝓽 𝓡𝓮𝓪𝓵", category: "attitude", likes: 3320 },
  { id: "tt-60", name: "s o u l _ r e f l e c t i o n", category: "aesthetic", likes: 3260 },
];

export default function TiktokGrid() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "viral" | "aesthetic" | "attitude" | "boys" | "girls">("all");
  const [copiedName, setCopiedName] = useState<string | null>(null);

  const dynamicStyles = useMemo(() => {
    if (!searchTerm.trim()) return [];
    return generateAllStyles(searchTerm.trim());
  }, [searchTerm]);

  const filteredNicks = useMemo(() => {
    if (activeTab === "all") return TIKTOK_CURATED_NICKS;
    return TIKTOK_CURATED_NICKS.filter((item) => item.category === activeTab);
  }, [activeTab]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedName(text);
    setTimeout(() => setCopiedName(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Live Generator Input Box */}
      <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#00c0ef] p-4">
        <label htmlFor="tiktok-input" className="block text-[14px] font-bold text-[#354861] mb-2">
          ✨ Type Any Name to Generate TikTok Fonts &amp; Symbols Instantly:
        </label>
        <div className="flex gap-2">
          <input
            id="tiktok-input"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="e.g. Vibe, Angel, Dark, Queen, Alex..."
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
          Tip: Click on any generated style to copy instantly to your clipboard.
        </p>
      </div>

      {/* Dynamic Results when user types */}
      {dynamicStyles.length > 0 && (
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#00a65a] p-4">
          <div className="flex items-center justify-between border-b border-[#f4f4f4] pb-2 mb-3">
            <h2 className="text-[16px] font-semibold text-[#333] m-0">
              ⚡ Generated TikTok Styles for &quot;{searchTerm}&quot; ({dynamicStyles.length} results)
            </h2>
            <span className="text-[12px] text-gray-500">Click to copy</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
            {dynamicStyles.map((item) => {
              const isCopied = copiedName === item.styled;
              return (
                <button
                  key={item.id}
                  onClick={() => handleCopy(item.styled)}
                  className={`group relative text-left p-2.5 rounded-[3px] border transition-all duration-150 flex items-center justify-between ${
                    isCopied
                      ? "bg-[#00a65a] text-white border-[#00a65a]"
                      : "bg-[#f9fafb] text-[#222] border-[#e5e7eb] hover:bg-[#eef5fc] hover:border-[#3c8dbc]"
                  }`}
                >
                  <div className="min-w-0 pr-2">
                    <div className="text-[14px] font-medium truncate tracking-wide">
                      {item.styled}
                    </div>
                    <div className={`text-[11px] truncate ${isCopied ? "text-white/80" : "text-gray-400 group-hover:text-gray-600"}`}>
                      {item.name}
                    </div>
                  </div>
                  <span
                    className={`text-[11px] px-1.5 py-0.5 rounded font-semibold shrink-0 ${
                      isCopied
                        ? "bg-white text-[#00a65a]"
                        : "bg-[#3c8dbc]/10 text-[#3c8dbc] group-hover:bg-[#3c8dbc] group-hover:text-white"
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

      {/* Curated Pre-made TikTok Nicknames Section */}
      <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7]">
        {/* Header & Tabs */}
        <div className="border-b border-[#f4f4f4] px-4 py-3 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-[17px] font-semibold text-[#333] m-0">
            🔥 Top 60 Trending TikTok Names to Copy
          </h2>

          <div className="flex flex-wrap gap-1">
            {[
              { id: "all", label: "All" },
              { id: "viral", label: "Viral & Trendy" },
              { id: "aesthetic", label: "Aesthetic" },
              { id: "attitude", label: "Attitude" },
              { id: "boys", label: "For Boys" },
              { id: "girls", label: "For Girls" },
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

        {/* Grid of Names */}
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
          {filteredNicks.map((item) => {
            const isCopied = copiedName === item.name;
            return (
              <button
                key={item.id}
                onClick={() => handleCopy(item.name)}
                className={`group relative text-left p-2.5 rounded-[3px] border transition-all duration-150 flex items-center justify-between ${
                  isCopied
                    ? "bg-[#00a65a] text-white border-[#00a65a]"
                    : "bg-white text-[#222] border-[#d2d6de] hover:bg-[#eef5fc] hover:border-[#3c8dbc]"
                }`}
              >
                <div className="min-w-0 pr-2">
                  <div className="text-[14px] font-medium truncate tracking-wide">
                    {item.name}
                  </div>
                </div>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded font-semibold shrink-0 ${
                    isCopied
                      ? "bg-white text-[#00a65a]"
                      : "bg-[#ecf0f5] text-[#333] group-hover:bg-[#3c8dbc] group-hover:text-white"
                  }`}
                >
                  {isCopied ? "Copied!" : "Copy"}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
