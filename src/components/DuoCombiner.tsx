"use client";

import React, { useState } from "react";
import { Heart, Swords, Copy, Check, Sparkles } from "lucide-react";
import { DUO_PRESETS } from "../lib/nicknameDatabase";
import { AdPlaceholder } from "./AdPlaceholder";
import confetti from "canvas-confetti";

interface DuoCombinerProps {
  onCopySuccess: (text: string) => void;
}

export const DuoCombiner: React.FC<DuoCombinerProps> = ({ onCopySuccess }) => {
  const [name1, setName1] = useState("King");
  const [name2, setName2] = useState("Queen");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Generate blended combinations
  const blend1 = name1.slice(0, Math.ceil(name1.length / 2)) + name2.slice(Math.floor(name2.length / 2));
  const blend2 = name2.slice(0, Math.ceil(name2.length / 2)) + name1.slice(Math.floor(name1.length / 2));

  const generatedPairs = [
    { p1: `꧁༺${name1}༻꧂`, p2: `꧁༺${name2}༻꧂`, theme: "Slayer Wings" },
    { p1: `亗 『${name1}』 亗`, p2: `亗 『${name2}』 亗`, theme: "Royal Apex" },
    { p1: `x͜× ${name1} ×͜x`, p2: `x͜× ${name2} ×͜x`, theme: "Tokyo Ghoul" },
    { p1: `♡ ᥫ᭡ ${name1} ᥫ᭡ ♡`, p2: `♡ ᥫ᭡ ${name2} ᥫ᭡ ♡`, theme: "Sweet Couple" },
    { p1: `⚡『${name1}』⚡`, p2: `⚡『${name2}』⚡`, theme: "Thunder Duo" },
    { p1: `メ ${name1} メ`, p2: `メ ${name2} メ`, theme: "Japanese Samurai" },
    { p1: `【${name1}】• SQUAD`, p2: `【${name2}】• SQUAD`, theme: "Squad Bracket" },
    { p1: `✿ ${name1} ࿐`, p2: `✿ ${name2} ࿐`, theme: "Floral Aesthetic" },
    { p1: `Bonnie • ${name1}`, p2: `Clyde • ${name2}`, theme: "Partners in Crime" },
    { p1: `Sun • ${name1} ☀️`, p2: `Moon • ${name2} 🌙`, theme: "Celestial Duo" },
    { p1: `Fire • ${name1} 🔥`, p2: `Ice • ${name2} ❄️`, theme: "Elements" },
    { p1: blend1, p2: blend2, theme: "Name Ship Mashup" },
  ];

  const handleCopyPair = (p1: string, p2: string, idx: number) => {
    const combined = `${p1} & ${p2}`;
    navigator.clipboard.writeText(combined);
    setCopiedIndex(idx);
    confetti({
      particleCount: 30,
      spread: 70,
      origin: { y: 0.8 },
      colors: ["#ec4899", "#f43f5e", "#06b6d4"],
    });
    onCopySuccess(combined);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleApplyPreset = (p1: string, p2: string) => {
    setName1(p1.replace(/[^\w]/g, ""));
    setName2(p2.replace(/[^\w]/g, ""));
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Title */}
      <div className="border-b border-zinc-800 pb-6 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-3.5 py-1 text-xs font-semibold text-pink-400">
          <Heart className="h-3.5 w-3.5 fill-pink-500" />
          <span>Couple & Gaming Duo Maker</span>
        </div>
        <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
          Matching Duo Nickname Combiner
        </h2>
        <p className="mt-1 text-sm text-zinc-400">
          Create matching gamer names for Free Fire duo matches, Valorant partner tags, and romantic ship gamertags.
        </p>
      </div>

      {/* Inputs */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5 shadow-lg">
          <label className="text-xs font-bold uppercase tracking-wider text-cyan-400">
            Player 1 Name
          </label>
          <input
            type="text"
            value={name1}
            onChange={(e) => setName1(e.target.value)}
            placeholder="e.g. King, Shadow..."
            className="mt-2 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-2.5 text-base font-bold text-white focus:border-cyan-500 focus:outline-none"
            maxLength={18}
          />
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5 shadow-lg">
          <label className="text-xs font-bold uppercase tracking-wider text-pink-400">
            Player 2 Name
          </label>
          <input
            type="text"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
            placeholder="e.g. Queen, Light..."
            className="mt-2 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-2.5 text-base font-bold text-white focus:border-pink-500 focus:outline-none"
            maxLength={18}
          />
        </div>
      </div>

      {/* Popular Concept Presets */}
      <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <span className="shrink-0 text-xs font-semibold text-zinc-400">Popular Duos:</span>
        {DUO_PRESETS.map((preset, idx) => (
          <button
            key={idx}
            onClick={() => handleApplyPreset(preset.p1, preset.p2)}
            className="shrink-0 rounded-lg border border-zinc-800 bg-zinc-900/90 px-3 py-1 text-xs font-medium text-zinc-300 hover:border-pink-500/50 hover:text-pink-300"
          >
            {preset.p1} & {preset.p2}
          </button>
        ))}
      </div>

      {/* Generated Duo Pairs */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {generatedPairs.map((pair, idx) => {
          const isCopied = copiedIndex === idx;
          return (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition-all hover:border-pink-500/50 hover:bg-zinc-900 hover:shadow-xl"
            >
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5">
                <span className="text-xs font-bold text-pink-400">{pair.theme}</span>
                <span className="flex items-center gap-1 text-[11px] text-zinc-400">
                  <Swords className="h-3 w-3" /> Duo Pair
                </span>
              </div>

              <div className="my-4 space-y-2">
                <div className="rounded-xl bg-zinc-950/80 px-3.5 py-2 text-center font-mono text-sm font-bold text-cyan-300">
                  {pair.p1}
                </div>
                <div className="text-center text-xs font-bold text-zinc-400">&</div>
                <div className="rounded-xl bg-zinc-950/80 px-3.5 py-2 text-center font-mono text-sm font-bold text-pink-300">
                  {pair.p2}
                </div>
              </div>

              <button
                onClick={() => handleCopyPair(pair.p1, pair.p2, idx)}
                className={`flex w-full items-center justify-center gap-2 rounded-xl py-2 text-xs font-bold transition-all shadow-sm ${
                  isCopied
                    ? "bg-emerald-500 text-white"
                    : "bg-zinc-800 text-zinc-200 hover:bg-pink-600 hover:text-white"
                }`}
              >
                {isCopied ? (
                  <>
                    <Check className="h-3.5 w-3.5" />
                    <span>COPIED BOTH!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>COPY BOTH AS DUO</span>
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
