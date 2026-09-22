"use client";

import React, { useState, useMemo } from "react";
import confetti from "canvas-confetti";

interface NicknameToSymbolsProps {
  onCopySuccess: (text: string) => void;
}

const SYMBOL_SUBSTITUTIONS: Record<string, string[]> = {
  a: ["4", "@", "Δ", "Λ", "д", "α", "Ѧ", "∀"],
  b: ["8", "ß", "ɮ", "Ɓ", "β", "฿"],
  c: ["(", "¢", "<", "©", "ç", "匚"],
  d: [")", "Ð", "ɖ", "₫", "∂"],
  e: ["3", "€", "£", "є", "э", "Σ", "ξ"],
  f: ["ƒ", "|= ", "բ", "ᖴ"],
  g: ["9", "6", "ǥ", "₲", "Ꮆ"],
  h: ["#", "н", "ɦ", "ӈ", "ዘ"],
  i: ["1", "!", "|", "ι", "ɨ", "ł"],
  j: ["ʝ", "נ", "ل", "ʲ"],
  k: ["|<", "к", "ƙ", "Ҡ"],
  l: ["1", "£", "ℓ", "ł", "乚"],
  m: ["^^", "м", "ɱ", "爪"],
  n: ["η", "ռ", "И", "П"],
  o: ["0", "ø", "Ø", "σ", "ѳ", "◯", "☯"],
  p: ["ρ", "ƿ", "₱", "ק"],
  q: ["9", "գ", "զ"],
  r: ["2", "я", "ɾ", "Ʀ", "Я"],
  s: ["5", "$", "§", "ѕ", "ƨ", "⚡"],
  t: ["7", "+", "†", "т", "τ", "‡"],
  u: ["μ", "υ", "ʊ", "Ц", "ㄩ"],
  v: ["\\/", "ν", "ѵ", "ט"],
  w: ["\\/\\/", "ω", "ш", "ฬ", "山"],
  x: ["%", "><", "ж", "乂", "✖", "×"],
  y: ["¥", "ч", "ყ", "γ"],
  z: ["2", "ƶ", "ʐ", "乙"],
};

export const NicknameToSymbols: React.FC<NicknameToSymbolsProps> = ({ onCopySuccess }) => {
  const [inputText, setInputText] = useState("Ninja");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const variations = useMemo(() => {
    const text = inputText.trim() || "Ninja";

    // 1. Full leet / symbol substitution
    const sym1 = text
      .split("")
      .map((c) => {
        const lower = c.toLowerCase();
        const subs = SYMBOL_SUBSTITUTIONS[lower];
        return subs ? subs[0] : c;
      })
      .join("");

    // 2. Heavy symbol substitution
    const sym2 = text
      .split("")
      .map((c) => {
        const lower = c.toLowerCase();
        const subs = SYMBOL_SUBSTITUTIONS[lower];
        return subs ? subs[Math.min(1, subs.length - 1)] : c;
      })
      .join("");

    // 3. Greek/Math symbol substitution
    const sym3 = text
      .split("")
      .map((c) => {
        const lower = c.toLowerCase();
        const subs = SYMBOL_SUBSTITUTIONS[lower];
        return subs ? subs[subs.length - 1] : c;
      })
      .join("");

    return [
      { styled: `꧁༺${sym1}༻꧂`, up: "+14520", down: "-1200" },
      { styled: `亗『${sym2}』亗`, up: "+23410", down: "-1980" },
      { styled: `x͜× ${sym3} ×͜x`, up: "+31200", down: "-2400" },
      { styled: `⚡${sym1}⚡`, up: "+18900", down: "-1100" },
      { styled: `メ ${sym2} メ`, up: "+17450", down: "-980" },
      { styled: `† ${sym3} †`, up: "+12300", down: "-850" },
      { styled: `★彡[${sym1}]彡★`, up: "+15600", down: "-1300" },
      { styled: `【${sym2}】`, up: "+19800", down: "-1400" },
      { styled: `☠️ ${sym3} ☠️`, up: "+21000", down: "-1600" },
      { styled: `ᜰ꙰ꦿ➢${sym1}々`, up: "+27500", down: "-2100" },
      { styled: `✿ ${sym2} ࿐`, up: "+16400", down: "-890" },
      { styled: `♡ ᥫ᭡ ${sym3} ᥫ᭡ ♡`, up: "+18900", down: "-950" },
      { styled: `◥ᖫ${sym1}ᖭ◤`, up: "+14200", down: "-1100" },
      { styled: `父 ${sym2} 父`, up: "+13800", down: "-750" },
      { styled: `◈ ${sym3} ◈`, up: "+11500", down: "-620" },
    ];
  }, [inputText]);

  const handleCopy = (styled: string, idx: number) => {
    navigator.clipboard.writeText(styled);
    setCopiedIndex(idx);
    confetti({
      particleCount: 15,
      spread: 45,
      origin: { y: 0.8 },
      colors: ["#0055ff", "#00c0ef"],
    });
    onCopySuccess(styled);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="bg-white rounded-[3px] border border-[#d2d6de] shadow-sm p-4 sm:p-5">
      <div className="border-b border-[#f0f0f0] pb-3 mb-4">
        <h2 className="text-[20px] font-bold text-[#222] m-0">Nickname to Symbols Converter</h2>
        <p className="text-xs text-gray-500 mt-1">
          Convert letters into special symbols, leet text, and cool ornaments for gaming handles.
        </p>
      </div>

      <div className="flex gap-2 max-w-md mb-6">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type your name or nickname..."
          className="flex-1 rounded-[2px] border border-[#d2d6de] px-3 py-2 text-sm text-gray-800 focus:border-[#0055ff] focus:outline-none"
          maxLength={25}
        />
        <button
          onClick={() => setInputText("Legend")}
          className="rounded-[2px] bg-[#00c0ef] px-4 py-2 text-xs font-bold text-white uppercase hover:bg-[#00acd6]"
        >
          Sample
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {variations.map((item, idx) => {
          const isCopied = copiedIndex === idx;
          return (
            <div
              key={idx}
              onClick={() => handleCopy(item.styled, idx)}
              className={`border border-[#eee] p-3 text-center cursor-pointer transition-colors bg-white hover:bg-[#fbfcfd] hover:border-blue-400 ${
                isCopied ? "bg-emerald-50 border-emerald-400" : ""
              }`}
              title="Click to copy"
            >
              <div className="text-[16px] font-medium text-gray-900 truncate" title={item.styled}>
                {item.styled}
              </div>
              <div className="text-[11px] mt-1.5 font-mono">
                <span className="text-[#00a65a] font-semibold mr-2">{item.up}</span>
                <span className="text-[#b4610f]">{item.down}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
