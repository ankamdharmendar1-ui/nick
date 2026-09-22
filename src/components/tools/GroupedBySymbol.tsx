"use client";

import React, { useState } from "react";
import { TOP_50_NICKFINDER, NickVariant } from "../../lib/nickfinderData";
import confetti from "canvas-confetti";

interface GroupedBySymbolProps {
  onCopySuccess: (text: string) => void;
}

const FEATURED_SYMBOLS = [
  "亗", "ツ", "x͜×", "★", "꧁", "꧂", "♥", "⚡", "メ", "父", "乡", "☠", "†", "᭄", "࿐", "ᥫ᭡"
];

export const GroupedBySymbol: React.FC<GroupedBySymbolProps> = ({ onCopySuccess }) => {
  const [selectedSymbol, setSelectedSymbol] = useState("亗");
  const [copiedName, setCopiedName] = useState<string | null>(null);

  // Filter nicknames by selected symbol or generate variations
  const matchingNicks: NickVariant[] = TOP_50_NICKFINDER.filter((item) =>
    item.name.includes(selectedSymbol)
  );

  // If few matches, add generated examples with that symbol
  const displayList = matchingNicks.length >= 4 ? matchingNicks : [
    ...matchingNicks,
    { id: "gen-1", name: `${selectedSymbol}『L E G E N D』${selectedSymbol}`, upvotes: "+24500", downvotes: "-1200" },
    { id: "gen-2", name: `${selectedSymbol} S H A D O W ${selectedSymbol}`, upvotes: "+18900", downvotes: "-950" },
    { id: "gen-3", name: `${selectedSymbol}•K I L L E R•${selectedSymbol}`, upvotes: "+21400", downvotes: "-1450" },
    { id: "gen-4", name: `꧁༺${selectedSymbol} V I P E R ${selectedSymbol}༻꧂`, upvotes: "+19800", downvotes: "-1100" },
    { id: "gen-5", name: `メ ${selectedSymbol} B O S S ${selectedSymbol} メ`, upvotes: "+16700", downvotes: "-870" },
  ];

  const handleCopy = (name: string) => {
    navigator.clipboard.writeText(name);
    setCopiedName(name);
    confetti({
      particleCount: 15,
      spread: 45,
      origin: { y: 0.8 },
      colors: ["#0055ff", "#00c0ef"],
    });
    onCopySuccess(name);
    setTimeout(() => setCopiedName(null), 2000);
  };

  return (
    <div className="bg-white rounded-[3px] border border-[#d2d6de] shadow-sm p-4 sm:p-5">
      <div className="border-b border-[#f0f0f0] pb-3 mb-4">
        <h2 className="text-[20px] font-bold text-[#222] m-0">Grouped by Symbol</h2>
        <p className="text-xs text-gray-500 mt-1">
          Explore nicknames containing specific gaming symbols and Unicode characters.
        </p>
      </div>

      {/* Symbol selection pill buttons */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {FEATURED_SYMBOLS.map((sym, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedSymbol(sym)}
            className={`min-w-[42px] h-[38px] rounded-[3px] border px-3 text-[16px] font-bold transition-colors ${
              selectedSymbol === sym
                ? "bg-[#354861] text-white border-[#354861]"
                : "bg-white text-gray-800 border-[#d2d6de] hover:bg-gray-100"
            }`}
          >
            {sym}
          </button>
        ))}
      </div>

      <div className="mb-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
        Nicknames with symbol &quot;<span className="text-[#0055ff]">{selectedSymbol}</span>&quot;:
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {displayList.map((item, idx) => {
          const isCopied = copiedName === item.name;
          return (
            <div
              key={idx}
              onClick={() => handleCopy(item.name)}
              className={`border border-[#eee] p-3 text-center cursor-pointer transition-colors bg-white hover:bg-[#fbfcfd] hover:border-blue-400 ${
                isCopied ? "bg-emerald-50 border-emerald-400" : ""
              }`}
              title="Click to copy"
            >
              <div className="text-[16px] font-medium text-gray-900 truncate" title={item.name}>
                {item.name}
              </div>
              <div className="text-[11px] mt-1.5 font-mono">
                <span className="text-[#00a65a] font-semibold mr-2">{item.upvotes}</span>
                <span className="text-[#b4610f]">{item.downvotes}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
