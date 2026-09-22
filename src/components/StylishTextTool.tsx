"use client";
import React, { useState, useMemo } from "react";
import { generateAllStyles } from "@/lib/fontTransforms";

const SAMPLES = ["Shadow","Ninja","King","Gamer","Devil","Angel","Ghost","Dragon","Phoenix","Legend"];

export default function StylishTextTool() {
  const [input, setInput] = useState("Shadow");
  const [copied, setCopied] = useState<string | null>(null);

  const styles = useMemo(() => generateAllStyles(input), [input]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied((p) => (p === text ? null : p)), 2000);
  };

  const handleRandom = () => {
    setInput(SAMPLES[Math.floor(Math.random() * SAMPLES.length)]);
  };

  return (
    <div className="space-y-4">
      {/* Input Box */}
      <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7]">
        <div className="border-b border-[#f4f4f4] px-4 py-2.5">
          <h2 className="text-[16px] font-semibold text-[#333] m-0">Enter Your Name or Text</h2>
        </div>
        <div className="p-4 flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your name here..."
            className="flex-1 border border-[#d2d6de] rounded-[2px] px-3 py-2.5 text-[15px] font-semibold text-gray-800 focus:border-[#3c8dbc] focus:outline-none"
          />
          <button
            onClick={handleRandom}
            className="bg-[#3c8dbc] text-white px-5 py-2.5 rounded-[3px] text-[13px] font-semibold hover:bg-[#367fa9] transition-colors cursor-pointer whitespace-nowrap"
          >
            🎲 Random
          </button>
          <button
            onClick={() => setInput("")}
            className="bg-[#d2d6de] text-[#444] px-4 py-2.5 rounded-[3px] text-[13px] font-semibold hover:bg-[#c8ccd4] transition-colors cursor-pointer"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Results Grid */}
      <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7]">
        <div className="border-b border-[#f4f4f4] px-4 py-2.5 flex items-center justify-between">
          <h2 className="text-[16px] font-semibold text-[#333] m-0">
            {styles.length}+ Stylish Font Styles
          </h2>
          <span className="text-[11px] text-gray-400 bg-[#f4f4f4] px-2 py-0.5 rounded">Click to copy</span>
        </div>
        <div className="divide-y divide-[#f4f4f4]">
          {styles.length === 0 ? (
            <div className="p-8 text-center text-gray-400 text-[14px]">Type something above to generate stylish names</div>
          ) : (
            styles.map((s, i) => (
              <div
                key={i}
                onClick={() => handleCopy(s.styled)}
                className="flex items-center justify-between px-4 py-3 hover:bg-[#f9f9f9] cursor-pointer group"
              >
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-[14px] text-[#222] truncate">{s.styled}</div>
                  {s.category && (
                    <div className="text-[11px] text-gray-400 mt-0.5">{s.category}</div>
                  )}
                </div>
                <span
                  className={`ml-3 shrink-0 text-[11px] font-semibold px-2.5 py-1 rounded transition-colors ${
                    copied === s.styled
                      ? "bg-[#00a65a] text-white"
                      : "bg-[#e8f4fd] text-[#2c6da5] group-hover:bg-[#3c8dbc] group-hover:text-white"
                  }`}
                >
                  {copied === s.styled ? "Copied!" : "Copy"}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
