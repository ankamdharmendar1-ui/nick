"use client";

import React, { useState, useMemo } from "react";
import { Copy, Check, Sparkles, Shuffle, Plus, Layers, Sword, Crown, Heart } from "lucide-react";
import confetti from "canvas-confetti";

interface NicknameToSymbolsProps {
  onCopySuccess?: (text: string) => void;
}

// Full A-Z symbol substitution mappings
const SYMBOL_SUBSTITUTIONS: Record<string, string[]> = {
  a: ["4", "@", "Δ", "Λ", "д", "α", "Ѧ", "∀", "ä", "ǟ"],
  b: ["8", "ß", "ɮ", "Ɓ", "β", "฿", "ᵇ", "ᗷ"],
  c: ["(", "¢", "<", "©", "ç", "匚", "ƈ", "ς"],
  d: [")", "Ð", "ɖ", "₫", "∂", "ժ", "ᗪ"],
  e: ["3", "€", "£", "є", "э", "Σ", "ξ", "ë", "є"],
  f: ["ƒ", "|= ", "բ", "ᖴ", "ϝ", "ք"],
  g: ["9", "6", "ǥ", "₲", "Ꮆ", "ց", "ဌ"],
  h: ["#", "н", "ɦ", "ӈ", "ዘ", "ɧ", "ᕼ"],
  i: ["1", "!", "|", "ι", "ɨ", "ł", "ï", "ɪ"],
  j: ["ʝ", "נ", "ل", "ʲ", "ј", "ᒍ"],
  k: ["|<", "к", "ƙ", "Ҡ", "ҟ", "Ќ"],
  l: ["1", "£", "ℓ", "ł", "乚", "ι", "ᒪ"],
  m: ["^^", "м", "ɱ", "爪", "ϻ", "ʍ"],
  n: ["η", "ռ", "И", "П", "ո", "ɴ"],
  o: ["0", "ø", "Ø", "σ", "ѳ", "◯", "☯", "ö", "¤"],
  p: ["ρ", "ƿ", "₱", "ק", "φ", "ᑭ"],
  q: ["9", "գ", "զ", "ǫ", "ᑫ"],
  r: ["2", "я", "ɾ", "Ʀ", "Я", "г", "ᖇ"],
  s: ["5", "$", "§", "ѕ", "ƨ", "⚡", "ʂ", "ᔕ"],
  t: ["7", "+", "†", "т", "τ", "‡", "ţ", "ㄒ"],
  u: ["μ", "υ", "ʊ", "Ц", "ㄩ", "ü", "ᑌ"],
  v: ["\\/", "ν", "ѵ", "ט", "ᐯ"],
  w: ["\\/\\/", "ω", "ш", "ฬ", "山", "ѡ", "ᗯ"],
  x: ["%", "><", "ж", "乂", "✖", "×", "ӿ"],
  y: ["¥", "ч", "ყ", "γ", "ÿ", "ㄚ"],
  z: ["2", "ƶ", "ʐ", "乙", "ʑ", "ᘔ"],
};

// Popular Gaming & Aesthetic Symbols Palette for quick inserting
const SYMBOL_PALETTE = [
  { label: "Crowns", symbols: ["亗", "👑", "♛", "♔", "★", "✪", "✦", "✧"] },
  { label: "Wings & Frames", symbols: ["꧁", "꧂", "༺", "༻", "ᖫ", "ᖭ", "◤", "◢", "【", "】", "『", "』"] },
  { label: "Weapons & Battle", symbols: ["▄︻デ══━一", "⚔️", "⚡", "☠️", "†", "‡", "︻╦̵̵͇̿̿̿̿╤──", "x͜×"] },
  { label: "Japanese & Asian", symbols: ["メ", "々", "父", "气", "卍", "刁", "乡", "☬"] },
  { label: "Love & Aesthetic", symbols: ["♡", "ᥫ᭡", "♥", "✿", "࿐", "🌸", "☁️", "🕊️"] },
];

const PRESETS = ["Ninja", "Shadow", "King", "BadBoy", "Queen", "Legend", "Devil", "Hunter"];

type TabFilter = "all" | "leet" | "gaming" | "aesthetic" | "heavy";

export const NicknameToSymbols: React.FC<NicknameToSymbolsProps> = ({ onCopySuccess }) => {
  const [inputText, setInputText] = useState("Ninja");
  const [activeTab, setActiveTab] = useState<TabFilter>("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const cleanText = inputText.trim() || "Ninja";

  // Build variations
  const variations = useMemo(() => {
    // 1. Classic Leet 1337 (numbers)
    const leetNumbers = cleanText
      .split("")
      .map((c) => {
        const low = c.toLowerCase();
        if (low === "a") return "4";
        if (low === "e") return "3";
        if (low === "i" || low === "l") return "1";
        if (low === "o") return "0";
        if (low === "s") return "5";
        if (low === "t") return "7";
        if (low === "b") return "8";
        if (low === "g") return "9";
        if (low === "z") return "2";
        return c;
      })
      .join("");

    // 2. Greek / Math symbols substitution
    const greekMath = cleanText
      .split("")
      .map((c) => {
        const low = c.toLowerCase();
        const arr = SYMBOL_SUBSTITUTIONS[low];
        return arr ? arr[Math.min(2, arr.length - 1)] : c;
      })
      .join("");

    // 3. Cyrillic / Rune symbols substitution
    const cyrillicRunic = cleanText
      .split("")
      .map((c) => {
        const low = c.toLowerCase();
        const arr = SYMBOL_SUBSTITUTIONS[low];
        return arr ? arr[Math.min(4, arr.length - 1)] : c;
      })
      .join("");

    // 4. Heavy Wildcard substitution
    const heavySymbols = cleanText
      .split("")
      .map((c) => {
        const low = c.toLowerCase();
        const arr = SYMBOL_SUBSTITUTIONS[low];
        return arr ? arr[arr.length - 1] : c;
      })
      .join("");

    return [
      // LEET SUBSTITUTIONS
      {
        id: "leet-classic",
        category: "leet",
        styleName: "Classic 1337 Leet",
        text: leetNumbers,
        tag: "Numbers",
      },
      {
        id: "greek-math",
        category: "leet",
        styleName: "Greek & Math Symbols",
        text: greekMath,
        tag: "Mathematical",
      },
      {
        id: "cyrillic-runic",
        category: "leet",
        styleName: "Cyrillic & Runes",
        text: cyrillicRunic,
        tag: "Special Letters",
      },
      {
        id: "heavy-glyphs",
        category: "heavy",
        styleName: "Heavy Unicode Glyphs",
        text: heavySymbols,
        tag: "Exotic",
      },

      // GAMING FRAMES WITH SYMBOL CONVERSION
      {
        id: "slayer-wings",
        category: "gaming",
        styleName: "Slayer Wings ꧁꧂",
        text: `꧁༺${greekMath}༻꧂`,
        tag: "Tryhard",
      },
      {
        id: "royal-apex",
        category: "gaming",
        styleName: "Royal Crown 亗",
        text: `亗 『${leetNumbers}』 亗`,
        tag: "PUBG / FF",
      },
      {
        id: "tokyo-ghoul",
        category: "gaming",
        styleName: "Tokyo Ghoul Cross",
        text: `x͜× ${cyrillicRunic} ×͜x`,
        tag: "Attitude",
      },
      {
        id: "samurai-blade",
        category: "gaming",
        styleName: "Samurai Blade メ",
        text: `メ ${greekMath} メ`,
        tag: "Esports",
      },
      {
        id: "sniper-scope",
        category: "gaming",
        styleName: "Sniper Crosshairs",
        text: `▄︻デ${leetNumbers}══━一`,
        tag: "Sniper",
      },
      {
        id: "vip-badge",
        category: "gaming",
        styleName: "VIP Badge Tag",
        text: `『ᴠɪᴘ』• ${cyrillicRunic}`,
        tag: "VIP Clan",
      },
      {
        id: "thunder-bolt",
        category: "gaming",
        styleName: "Thunder Strike ⚡",
        text: `⚡${greekMath}⚡`,
        tag: "Electric",
      },
      {
        id: "skull-death",
        category: "gaming",
        styleName: "Skull & Crossbones ☠️",
        text: `☠️ ${heavySymbols} ☠️`,
        tag: "Dark",
      },
      {
        id: "holy-cross",
        category: "gaming",
        styleName: "Gothic Cross †",
        text: `† ${cyrillicRunic} †`,
        tag: "Gothic",
      },
      {
        id: "asian-emperor",
        category: "gaming",
        styleName: "Asian Dragon 々",
        text: `ᜰ꙰ꦿ➢${greekMath}々`,
        tag: "Rare",
      },

      // AESTHETIC & SOFT
      {
        id: "sweet-hearts",
        category: "aesthetic",
        styleName: "Aesthetic Heart ♡",
        text: `♡ ᥫ᭡ ${cyrillicRunic} ᥫ᭡ ♡`,
        tag: "Love",
      },
      {
        id: "floral-bloom",
        category: "aesthetic",
        styleName: "Floral Blossom ✿",
        text: `✿ ${greekMath} ࿐`,
        tag: "Floral",
      },
      {
        id: "cherry-soft",
        category: "aesthetic",
        styleName: "Cherry Blossom 🌸",
        text: `🌸 ｡˚ ${leetNumbers} ˚｡ 🌸`,
        tag: "Soft Girl",
      },
      {
        id: "starlight-magic",
        category: "aesthetic",
        styleName: "Starlight Shimmer ✨",
        text: `✧･ﾟ: *✧ ${cyrillicRunic} ✧*:･ﾟ✧`,
        tag: "Sparkle",
      },
      {
        id: "cloud-angel",
        category: "aesthetic",
        styleName: "Heavenly Cloud ☁️",
        text: `☁️ ˖⁺｡˚ ${greekMath} ˚｡⁺˖ ☁️`,
        tag: "Dreamy",
      },
      {
        id: "butterfly-aesthetic",
        category: "aesthetic",
        styleName: "Butterfly Wings 🦋",
        text: `🦋 ${cyrillicRunic} 🦋`,
        tag: "Cute",
      },
      {
        id: "crown-royal-queen",
        category: "aesthetic",
        styleName: "Golden Royalty 👑",
        text: `👑 ${leetNumbers} 👑`,
        tag: "Queen",
      },
      {
        id: "bracket-chic",
        category: "heavy",
        styleName: "Square Bracket Chic",
        text: `【 ${heavySymbols} 】`,
        tag: "Clean",
      },
    ];
  }, [cleanText]);

  const filteredVariations = useMemo(() => {
    if (activeTab === "all") return variations;
    return variations.filter((v) => v.category === activeTab);
  }, [variations, activeTab]);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#3c8dbc", "#00c0ef", "#2f4867"],
    });
    if (onCopySuccess) onCopySuccess(text);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleAppendSymbol = (sym: string) => {
    setInputText((prev) => prev + sym);
  };

  const handleRandomPreset = () => {
    const random = PRESETS[Math.floor(Math.random() * PRESETS.length)];
    setInputText(random);
  };

  return (
    <div className="p-4 sm:p-5">
      {/* Input Box Area */}
      <div className="bg-[#f8fafc] border border-[#d2d6de] rounded-[3px] p-4 mb-4">
        <label className="block text-xs font-bold text-[#354861] uppercase tracking-wider mb-1.5">
          Enter Plain Nickname to Convert:
        </label>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter name or nickname..."
              maxLength={25}
              className="w-full h-[42px] px-3.5 border border-[#ccd0d5] rounded-[3px] text-[15px] font-semibold text-[#333] focus:border-[#3c8dbc] focus:ring-1 focus:ring-[#3c8dbc] focus:outline-none bg-white shadow-inner"
            />
            {inputText && (
              <button
                onClick={() => setInputText("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs font-bold"
                title="Clear input"
              >
                ✕
              </button>
            )}
          </div>

          <button
            onClick={handleRandomPreset}
            type="button"
            className="h-[42px] px-4 bg-white border border-[#ccd0d5] hover:bg-[#eef4fb] hover:border-[#3c8dbc] text-[#354861] font-bold text-xs uppercase rounded-[3px] flex items-center justify-center gap-1.5 transition-colors"
          >
            <Shuffle className="w-3.5 h-3.5" /> Sample
          </button>
        </div>

        {/* Quick Sample Presets */}
        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-bold text-gray-500 mr-1 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Presets:
          </span>
          {PRESETS.map((p) => (
            <button
              key={p}
              onClick={() => setInputText(p)}
              className="text-xs px-2.5 py-1 bg-white border border-[#d2d6de] rounded-[3px] text-[#354861] hover:bg-[#354861] hover:text-white transition-colors"
            >
              {p}
            </button>
          ))}
        </div>

        {/* Clickable Symbols Palette */}
        <div className="mt-4 pt-3.5 border-t border-[#e8ecf0]">
          <div className="text-xs font-bold text-[#354861] uppercase tracking-wider mb-2 flex items-center gap-1">
            <Plus className="w-3.5 h-3.5 text-[#3c8dbc]" /> Click Any Symbol to Insert Into Your Nickname:
          </div>
          <div className="space-y-2">
            {SYMBOL_PALETTE.map((cat, idx) => (
              <div key={idx} className="flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-semibold text-gray-500 w-28 shrink-0">
                  {cat.label}:
                </span>
                <div className="flex flex-wrap gap-1">
                  {cat.symbols.map((sym, sIdx) => (
                    <button
                      key={sIdx}
                      onClick={() => handleAppendSymbol(sym)}
                      title={`Add ${sym}`}
                      className="px-2 py-1 bg-white border border-[#ccd0d5] hover:border-[#3c8dbc] hover:bg-[#eef4fb] text-[#222] rounded-[3px] text-xs font-mono font-bold transition-colors"
                    >
                      {sym}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-1.5 mb-4 border-b border-[#d2d6de] pb-2">
        <button
          onClick={() => setActiveTab("all")}
          className={`px-3 py-1.5 text-xs font-bold rounded-[3px] transition-colors ${
            activeTab === "all"
              ? "bg-[#354861] text-white"
              : "bg-[#eef2f7] text-[#555] hover:bg-[#dde4ed]"
          }`}
        >
          All Variations ({variations.length})
        </button>
        <button
          onClick={() => setActiveTab("gaming")}
          className={`px-3 py-1.5 text-xs font-bold rounded-[3px] transition-colors flex items-center gap-1 ${
            activeTab === "gaming"
              ? "bg-[#f39c12] text-white"
              : "bg-[#eef2f7] text-[#555] hover:bg-[#dde4ed]"
          }`}
        >
          <Sword className="w-3 h-3" /> Gaming &amp; Battle
        </button>
        <button
          onClick={() => setActiveTab("leet")}
          className={`px-3 py-1.5 text-xs font-bold rounded-[3px] transition-colors flex items-center gap-1 ${
            activeTab === "leet"
              ? "bg-[#00a65a] text-white"
              : "bg-[#eef2f7] text-[#555] hover:bg-[#dde4ed]"
          }`}
        >
          <Layers className="w-3 h-3" /> Leet Letter Replacements
        </button>
        <button
          onClick={() => setActiveTab("aesthetic")}
          className={`px-3 py-1.5 text-xs font-bold rounded-[3px] transition-colors flex items-center gap-1 ${
            activeTab === "aesthetic"
              ? "bg-[#e91e63] text-white"
              : "bg-[#eef2f7] text-[#555] hover:bg-[#dde4ed]"
          }`}
        >
          <Heart className="w-3 h-3" /> Aesthetic &amp; Hearts
        </button>
        <button
          onClick={() => setActiveTab("heavy")}
          className={`px-3 py-1.5 text-xs font-bold rounded-[3px] transition-colors flex items-center gap-1 ${
            activeTab === "heavy"
              ? "bg-[#3c8dbc] text-white"
              : "bg-[#eef2f7] text-[#555] hover:bg-[#dde4ed]"
          }`}
        >
          <Crown className="w-3 h-3" /> Heavy Glyphs
        </button>
      </div>

      {/* Grid of Converted Nicknames */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {filteredVariations.map((item) => {
          const isCopied = copiedId === item.id;
          return (
            <div
              key={item.id}
              onClick={() => handleCopy(item.text, item.id)}
              className={`bg-white border rounded-[3px] p-3 shadow-sm hover:shadow transition-all cursor-pointer flex flex-col justify-between group ${
                isCopied
                  ? "border-emerald-500 bg-emerald-50/40"
                  : "border-[#d2d6de] hover:border-[#3c8dbc]"
              }`}
            >
              {/* Header: Style Name & Badge */}
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-[#f4f4f4]">
                <span className="text-[11px] font-bold text-[#354861] uppercase tracking-wider truncate max-w-[150px]">
                  {item.styleName}
                </span>
                <span className="text-[10px] text-gray-500 bg-[#f4f6f9] border border-[#e2e8f0] px-1.5 py-0.5 rounded font-mono">
                  {item.tag}
                </span>
              </div>

              {/* Converted Text */}
              <div className="py-2 px-1 text-center font-mono text-[16px] font-bold text-[#222] break-all group-hover:text-[#3c8dbc] transition-colors">
                {item.text}
              </div>

              {/* Copy Action Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCopy(item.text, item.id);
                }}
                className={`mt-2 w-full py-1.5 px-3 text-xs font-bold rounded-[3px] flex items-center justify-center gap-1.5 transition-colors ${
                  isCopied
                    ? "bg-emerald-600 text-white"
                    : "bg-[#f8fafc] border border-[#ccd0d5] text-[#333] group-hover:bg-[#354861] group-hover:text-white group-hover:border-[#354861]"
                }`}
              >
                {isCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5" /> COPIED!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-gray-500 group-hover:text-white" /> COPY SYMBOL NAME
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>

      {/* Floating Copied Toast */}
      {copiedId && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-[3px] border border-emerald-600 bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-xl">
          <Check className="w-4 h-4" />
          Copied to clipboard!
        </div>
      )}
    </div>
  );
};
