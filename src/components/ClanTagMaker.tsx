"use client";

import React, { useState } from "react";
import { Swords, Shield, Copy, Check, Users } from "lucide-react";
import { AdPlaceholder } from "./AdPlaceholder";
import confetti from "canvas-confetti";

interface ClanTagMakerProps {
  onCopySuccess: (text: string) => void;
}

export const ClanTagMaker: React.FC<ClanTagMakerProps> = ({ onCopySuccess }) => {
  const [clanTag, setClanTag] = useState("VORTEX");
  const [playerName, setPlayerName] = useState("Sniper");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const clanStyles = [
    { title: "Esports Tournament Bracket", format: `【${clanTag}】• ${playerName}` },
    { title: "Imperial Dynasty Crown", format: `亗『${clanTag}』${playerName}亗` },
    { title: "Tokyo Syndicate Kanji", format: `メ ${clanTag} メ ${playerName}` },
    { title: "Thunderstrike Squad", format: `⚡${clanTag}⚡ ${playerName}` },
    { title: "Death Ghoul Cross", format: `x͜× ${clanTag} • ${playerName} ×͜x` },
    { title: "Double Angle Wing", format: `«${clanTag}» ${playerName}` },
    { title: "Dark Mafia Trident", format: `◥ᖫ${clanTag}ᖭ◤ ${playerName}` },
    { title: "Japanese Clan Honor", format: `父 ${clanTag} 父 ${playerName}` },
    { title: "Cyber Slasher", format: `乂 ${clanTag} 乂 ${playerName}` },
    { title: "Star Vanguard", format: `★彡[${clanTag}]彡★ ${playerName}` },
    { title: "Minimal Square", format: `[${clanTag}] • ${playerName}` },
    { title: "Crusader Cross", format: `† ${clanTag} † ${playerName}` },
  ];

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    confetti({
      particleCount: 20,
      spread: 50,
      origin: { y: 0.8 },
      colors: ["#3b82f6", "#06b6d4"],
    });
    onCopySuccess(text);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="border-b border-zinc-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400">
          <Shield className="h-4 w-4" />
          <span>Esports & Guild Tag Studio</span>
        </div>
        <h2 className="mt-1 text-2xl font-black text-white sm:text-3xl">
          Clan, Guild & Squad Name Maker
        </h2>
        <p className="mt-1 text-sm text-zinc-400">
          Design uniform, tournament-ready clan tags and squad prefixes for Free Fire Guilds, BGMI clans, and Discord servers.
        </p>
      </div>

      {/* Input controls */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5">
          <label className="text-xs font-bold uppercase tracking-wider text-blue-400">
            Clan / Guild Tag (Acronym)
          </label>
          <input
            type="text"
            value={clanTag}
            onChange={(e) => setClanTag(e.target.value)}
            placeholder="e.g. VORTEX, S9, TITAN"
            className="mt-2 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-2.5 text-base font-bold text-white focus:border-blue-500 focus:outline-none"
            maxLength={12}
          />
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5">
          <label className="text-xs font-bold uppercase tracking-wider text-cyan-400">
            Member Name / Role
          </label>
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="e.g. Leader, Sniper, Ace"
            className="mt-2 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-2.5 text-base font-bold text-white focus:border-cyan-500 focus:outline-none"
            maxLength={18}
          />
        </div>
      </div>

      {/* Presets Grid */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {clanStyles.map((item, idx) => {
          const isCopied = copiedIndex === idx;
          return (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition-all hover:border-blue-500/50 hover:bg-zinc-900"
            >
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5">
                <span className="text-xs font-bold text-blue-400">{item.title}</span>
                <Users className="h-3.5 w-3.5 text-zinc-400" />
              </div>

              <div className="my-4 rounded-xl bg-zinc-950 px-3 py-3 text-center font-mono text-base font-bold text-white break-all">
                {item.format}
              </div>

              <button
                onClick={() => handleCopy(item.format, idx)}
                className={`flex items-center justify-center gap-2 rounded-xl py-2 text-xs font-bold transition-all ${
                  isCopied
                    ? "bg-emerald-500 text-white"
                    : "bg-blue-500/10 text-blue-400 border border-blue-500/30 hover:bg-blue-500 hover:text-white"
                }`}
              >
                {isCopied ? (
                  <>
                    <Check className="h-3.5 w-3.5" />
                    <span>COPIED!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>COPY SQUAD TAG</span>
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>

      <AdPlaceholder slotType="infeed" />
    </section>
  );
};
