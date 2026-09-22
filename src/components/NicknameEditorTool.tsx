"use client";

import React, { useState, useMemo } from "react";

const PREFIXES = [
  "", "꧁", "『", "【", "⚡", "★", "亗", "♛", "☆", "༒", "✦", "🔥", "💀", "❖", "⚔️", "×͜×", "༺", "『sʜʀᴋ』•"
];

const SUFFIXES = [
  "", "꧂", "』", "】", "⚡", "★", "亗", "♛", "☆", "༒", "✦", "🔥", "💀", "❖", "⚔️", "×͜×", "༻", "ツ", "ᴳᵒᵈ", "ᴮᴼˢˢ"
];

const SEPARATORS = [
  { label: "None", value: "" },
  { label: "Dot •", value: "•" },
  { label: "Pipe |", value: "|" },
  { label: "Cross ×", value: "×" },
  { label: "Underscore _", value: "_" },
  { label: "Dash -", value: "-" },
  { label: "Space", value: " " }
];

const FONT_OPTIONS = [
  { id: "normal", label: "Normal" },
  { id: "smallCaps", label: "Small Caps (ᴘʀᴏ)" },
  { id: "gothic", label: "Gothic (𝔓𝔯𝔬)" },
  { id: "boldGothic", label: "Bold Gothic (𝕻𝖗𝖔)" },
  { id: "script", label: "Script (𝒫𝓇ℴ)" },
  { id: "double", label: "Double (ℙ𝕣𝕠)" },
  { id: "monospace", label: "Monospace (𝙿𝚛𝚘)" }
];

// Simple font converter maps
const SMALL_CAPS_MAP: Record<string, string> = {
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ",
  j: "ᴊ", k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ",
  s: "s", t: "ᴛ", u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
};

const BOLD_GOTHIC_MAP: Record<string, string> = {
  a: "𝖆", b: "𝖇", c: "𝖈", d: "𝖉", e: "𝖊", f: "𝖋", g: "𝖌", h: "𝖍", i: "𝖎",
  j: "𝖏", k: "𝖐", l: "𝖑", m: "𝖒", n: "𝖓", o: "𝖔", p: "𝖕", q: "𝖖", r: "𝖗",
  s: "𝖘", t: "𝖙", u: "𝖚", v: "𝖛", w: "𝖜", x: "𝖝", y: "𝖞", z: "𝖟",
  A: "𝕬", B: "𝕭", C: "𝕮", D: "𝕯", E: "𝕰", F: "𝕱", G: "𝕲", H: "𝕳", I: "𝕴",
  J: "𝕵", K: "𝕶", L: "𝕷", M: "𝕸", N: "𝕹", O: "𝕺", P: "𝕻", Q: "𝕼", R: "𝕽",
  S: "𝕾", T: "𝕿", U: "𝖀", V: "𝖁", W: "𝖂", X: "𝖃", Y: "𝖄", Z: "𝖅"
};

function transformText(str: string, fontId: string): string {
  if (fontId === "smallCaps") {
    return str.split("").map((c) => SMALL_CAPS_MAP[c.toLowerCase()] || c).join("");
  }
  if (fontId === "boldGothic") {
    return str.split("").map((c) => BOLD_GOTHIC_MAP[c] || c).join("");
  }
  return str;
}

const PRESET_EXAMPLES = [
  "꧁Shadow꧂", "亗•KING•亗", "⚡Legend⚡", "『Ghost』", "★Ninja★",
  "【Alpha】", "♛Queen♛", "༒Warrior༒", "✦Phantom✦", "🔥Dragon🔥",
  "💀Reaper💀", "×͜× BadBoy ×͜×"
];

export default function NicknameEditorTool() {
  const [baseName, setBaseName] = useState("Shadow");
  const [prefix, setPrefix] = useState("꧁");
  const [suffix, setSuffix] = useState("꧂");
  const [separator, setSeparator] = useState("");
  const [selectedFont, setSelectedFont] = useState("normal");
  const [copied, setCopied] = useState<string | null>(null);

  const finalName = useMemo(() => {
    const raw = baseName.trim() || "Nickname";
    const transformed = transformText(raw, selectedFont);
    const sep = separator;
    return `${prefix}${sep}${transformed}${sep}${suffix}`;
  }, [baseName, prefix, suffix, separator, selectedFont]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied((p) => (p === text ? null : p)), 2000);
  };

  return (
    <div className="space-y-4">
      {/* Live Preview Display Box */}
      <div className="bg-[#354861] rounded-[3px] shadow-md p-6 text-center text-white">
        <div className="text-[11px] font-bold uppercase tracking-widest text-[#00c0ef] mb-2">
          Live Nickname Preview
        </div>
        <div className="font-mono text-[24px] sm:text-[28px] font-bold text-white select-all break-all py-2 min-h-[50px] flex items-center justify-center">
          {finalName}
        </div>
        <button
          onClick={() => handleCopy(finalName)}
          className={`mt-4 px-6 py-2.5 rounded-[3px] text-[14px] font-bold transition-all shadow-md cursor-pointer ${
            copied === finalName
              ? "bg-[#00a65a] text-white"
              : "bg-[#00c0ef] text-[#111] hover:bg-[#39cccc] active:scale-95"
          }`}
        >
          {copied === finalName ? "✓ Copied to Clipboard!" : "📋 Copy Nickname"}
        </button>
      </div>

      {/* Editor Controls */}
      <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] p-5 space-y-4">
        <div className="text-[14px] font-bold text-[#354861] uppercase tracking-wider border-b border-[#f4f4f4] pb-2">
          Editor Controls
        </div>

        {/* Name input */}
        <div>
          <label className="block text-[12px] font-semibold text-gray-700 mb-1">
            Your Core Name
          </label>
          <input
            type="text"
            value={baseName}
            onChange={(e) => setBaseName(e.target.value)}
            placeholder="e.g. Shadow"
            className="w-full border border-[#d2d6de] rounded-[2px] px-3 py-2 text-[15px] font-semibold text-gray-800 focus:border-[#3c8dbc] focus:outline-none"
          />
        </div>

        {/* Dropdowns row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="block text-[12px] font-semibold text-gray-700 mb-1">
              Prefix Symbol
            </label>
            <select
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
              className="w-full border border-[#d2d6de] rounded-[2px] px-3 py-2 text-[14px] text-gray-800 bg-white focus:border-[#3c8dbc] focus:outline-none"
            >
              {PREFIXES.map((p, idx) => (
                <option key={idx} value={p}>
                  {p ? `${p} (Symbol)` : "(None)"}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[12px] font-semibold text-gray-700 mb-1">
              Separator Spacing
            </label>
            <select
              value={separator}
              onChange={(e) => setSeparator(e.target.value)}
              className="w-full border border-[#d2d6de] rounded-[2px] px-3 py-2 text-[14px] text-gray-800 bg-white focus:border-[#3c8dbc] focus:outline-none"
            >
              {SEPARATORS.map((s) => (
                <option key={s.label} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[12px] font-semibold text-gray-700 mb-1">
              Suffix Symbol
            </label>
            <select
              value={suffix}
              onChange={(e) => setSuffix(e.target.value)}
              className="w-full border border-[#d2d6de] rounded-[2px] px-3 py-2 text-[14px] text-gray-800 bg-white focus:border-[#3c8dbc] focus:outline-none"
            >
              {SUFFIXES.map((s, idx) => (
                <option key={idx} value={s}>
                  {s ? `${s} (Symbol)` : "(None)"}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Font styling choice */}
        <div>
          <label className="block text-[12px] font-semibold text-gray-700 mb-1">
            Font Style
          </label>
          <div className="flex flex-wrap gap-2">
            {FONT_OPTIONS.map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFont(f.id)}
                className={`px-3 py-1.5 rounded text-[12px] font-medium transition-all cursor-pointer ${
                  selectedFont === f.id
                    ? "bg-[#3c8dbc] text-white"
                    : "bg-[#f4f4f4] text-gray-700 hover:bg-[#e8f4fd] hover:text-[#2c6da5]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Preset Inspirations */}
      <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] p-4">
        <div className="border-b border-[#f4f4f4] pb-2 mb-3">
          <h3 className="text-[15px] font-semibold text-[#333] m-0">
            ⚡ Quick-Copy Famous Combinations
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {PRESET_EXAMPLES.map((ex, i) => (
            <button
              key={i}
              onClick={() => handleCopy(ex)}
              className="px-3 py-1.5 rounded border border-[#d2d6de] bg-[#fdfdfd] hover:bg-[#e8f4fd] hover:border-[#3c8dbc] text-[13px] font-mono text-[#333] transition-colors cursor-pointer"
              title="Click to copy"
            >
              {ex}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
