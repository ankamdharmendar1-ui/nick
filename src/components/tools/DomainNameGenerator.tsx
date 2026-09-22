"use client";

import React, { useState, useMemo } from "react";
import confetti from "canvas-confetti";

interface DomainNameGeneratorProps {
  onCopySuccess: (text: string) => void;
}

export const DomainNameGenerator: React.FC<DomainNameGeneratorProps> = ({ onCopySuccess }) => {
  const [keyword, setKeyword] = useState("gamer");
  const [copiedDomain, setCopiedDomain] = useState<string | null>(null);

  const extensions = [".io", ".gg", ".com", ".net", ".app", ".xyz", ".me"];
  const prefixes = ["get", "the", "my", "pro", "elite", "ultra", "epic"];
  const suffixes = ["hub", "zone", "lab", "hq", "box", "craft", "verse"];

  const domainIdeas = useMemo(() => {
    const word = keyword.trim().toLowerCase().replace(/[^a-z0-9]/g, "") || "gamer";
    const list: { name: string; ext: string; full: string }[] = [];

    extensions.forEach((ext) => {
      list.push({ name: word, ext, full: `${word}${ext}` });
    });

    prefixes.slice(0, 4).forEach((pref) => {
      list.push({ name: `${pref}${word}`, ext: ".io", full: `${pref}${word}.io` });
    });

    suffixes.slice(0, 4).forEach((suff) => {
      list.push({ name: `${word}${suff}`, ext: ".com", full: `${word}${suff}.com` });
    });

    return list;
  }, [keyword]);

  const handleCopy = (full: string) => {
    navigator.clipboard.writeText(full);
    setCopiedDomain(full);
    confetti({
      particleCount: 15,
      spread: 45,
      origin: { y: 0.8 },
      colors: ["#0055ff", "#00c0ef"],
    });
    onCopySuccess(full);
    setTimeout(() => setCopiedDomain(null), 2000);
  };

  return (
    <div className="bg-white rounded-[3px] border border-[#d2d6de] shadow-sm p-4 sm:p-5">
      <div className="border-b border-[#f0f0f0] pb-3 mb-4">
        <h2 className="text-[20px] font-bold text-[#222] m-0">Domain &amp; Website Name Ideas</h2>
        <p className="text-xs text-gray-500 mt-1">
          Generate brandable domain names and website handles for gaming clans, guilds, and projects.
        </p>
      </div>

      <div className="flex gap-2 max-w-md mb-6">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Enter a keyword (e.g. gamer, clan)..."
          className="flex-1 rounded-[2px] border border-[#d2d6de] px-3 py-2 text-sm text-gray-800 focus:border-[#0055ff] focus:outline-none"
          maxLength={20}
        />
        <button
          onClick={() => setKeyword("titan")}
          className="rounded-[2px] bg-[#00c0ef] px-4 py-2 text-xs font-bold text-white uppercase hover:bg-[#00acd6]"
        >
          Sample
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {domainIdeas.map((item, idx) => {
          const isCopied = copiedDomain === item.full;
          return (
            <div
              key={idx}
              onClick={() => handleCopy(item.full)}
              className={`border border-[#eee] p-3 text-center cursor-pointer transition-colors bg-white hover:bg-[#fbfcfd] hover:border-blue-400 ${
                isCopied ? "bg-emerald-50 border-emerald-400" : ""
              }`}
              title="Click to copy domain"
            >
              <div className="text-[16px] font-mono font-bold text-gray-900 truncate">
                {item.name}
                <span className="text-[#0055ff]">{item.ext}</span>
              </div>
              <div className="text-[11px] mt-1 text-emerald-600 font-semibold">
                {isCopied ? "✓ Copied!" : "Click to copy"}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
