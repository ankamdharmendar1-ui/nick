"use client";

import React, { useState, useMemo } from "react";
import { Shield, Flame, Sparkles, Award, Check, Copy } from "lucide-react";
import { AdPlaceholder } from "./AdPlaceholder";
import confetti from "canvas-confetti";

interface VibeAnalyzerProps {
  onCopySuccess: (text: string) => void;
}

export const VibeAnalyzer: React.FC<VibeAnalyzerProps> = ({ onCopySuccess }) => {
  const [testName, setTestName] = useState("亗『LEGEND』亗");
  const [copied, setCopied] = useState(false);

  const scores = useMemo(() => {
    const text = testName.trim();
    if (!text) {
      return { intimidation: 0, aesthetic: 0, readability: 0, overall: 0, tier: "Unranked", verdict: "Type a name above" };
    }

    // Heuristics
    let intimidation = 40;
    let aesthetic = 40;
    let readability = 80;

    // Symbol presence boosts intimidation or aesthetic
    if (/[☠️⚔️亗†☬x͜×⚡]/.test(text)) intimidation += 35;
    if (/[♡ᥫ᭡✿❀✨☁️]/.test(text)) aesthetic += 45;
    if (/[꧁༒꧂༺༻]/.test(text)) {
      intimidation += 25;
      readability -= 20;
    }
    if (text.length > 14) readability -= 25;
    if (text.length >= 6 && text.length <= 12) readability += 15;
    if (/[a-zA-Z]/.test(text)) aesthetic += 10;

    intimidation = Math.min(Math.max(intimidation, 10), 99);
    aesthetic = Math.min(Math.max(aesthetic, 15), 99);
    readability = Math.min(Math.max(readability, 20), 98);

    const overall = Math.round((intimidation * 0.4 + aesthetic * 0.35 + readability * 0.25));

    let tier = "Silver Rank";
    let verdict = "Solid casual username. Adding a wing or weapon symbol can boost your intimidation level.";

    if (overall >= 90) {
      tier = "Apex Predator / Radiant";
      verdict = "God-tier gamertag! Super menacing in kill feeds and instant tournament intimidation.";
    } else if (overall >= 80) {
      tier = "Conqueror / Grandmaster";
      verdict = "Elite composition! Well-balanced aesthetic and high presence in lobbies.";
    } else if (overall >= 65) {
      tier = "Diamond Pro";
      verdict = "Great gamer tag with clean spacing and recognizable style.";
    }

    return { intimidation, aesthetic, readability, overall, tier, verdict };
  }, [testName]);

  const handleCopy = () => {
    navigator.clipboard.writeText(testName);
    setCopied(true);
    confetti({
      particleCount: 25,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#10b981", "#06b6d4"],
    });
    onCopySuccess(testName);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="border-b border-zinc-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
          <Shield className="h-4 w-4" />
          <span>Gamertag Threat & Aesthetic Rater</span>
        </div>
        <h2 className="mt-1 text-2xl font-black text-white sm:text-3xl">
          Gamertag Power & Vibe Analyzer
        </h2>
        <p className="mt-1 text-sm text-zinc-400">
          Test your nickname&apos;s intimidation factor, kill feed cleanliness, and competitive aura rating.
        </p>
      </div>

      <div className="mt-8 max-w-2xl mx-auto">
        {/* Input */}
        <div className="rounded-2xl border border-zinc-700 bg-zinc-900/90 p-5 shadow-2xl">
          <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">
            Enter Any Gamertag to Analyze
          </label>
          <div className="mt-2 flex gap-2">
            <input
              type="text"
              value={testName}
              onChange={(e) => setTestName(e.target.value)}
              placeholder="Paste or type any nickname..."
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 font-mono text-base font-bold text-white focus:border-emerald-500 focus:outline-none"
              maxLength={25}
            />
            <button
              onClick={handleCopy}
              className={`flex shrink-0 items-center gap-1.5 rounded-xl px-4 py-3 text-xs font-bold transition-all ${
                copied ? "bg-emerald-500 text-white" : "bg-zinc-800 text-zinc-200 hover:bg-emerald-600 hover:text-white"
              }`}
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              <span>{copied ? "Copied" : "Copy"}</span>
            </button>
          </div>
        </div>

        {/* Score Card Display */}
        <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-zinc-900 via-zinc-900 to-emerald-950/20 p-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-zinc-800 pb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Calculated Power Tier
              </span>
              <h3 className="mt-0.5 text-2xl font-black text-white">{scores.tier}</h3>
              <p className="mt-1 text-xs text-zinc-400">{scores.verdict}</p>
            </div>

            <div className="flex flex-col items-center justify-center rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-6 py-4 text-center">
              <span className="text-4xl font-black text-emerald-400">{scores.overall}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-300">
                Overall Vibe
              </span>
            </div>
          </div>

          {/* Metric Progress Bars */}
          <div className="mt-6 space-y-4">
            <div>
              <div className="flex justify-between text-xs font-bold text-zinc-300">
                <span className="flex items-center gap-1.5 text-rose-400">
                  <Flame className="h-4 w-4" /> Intimidation / Threat Score
                </span>
                <span>{scores.intimidation}%</span>
              </div>
              <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-zinc-800">
                <div
                  className="h-full bg-gradient-to-r from-rose-500 to-red-600 transition-all duration-500"
                  style={{ width: `${scores.intimidation}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-zinc-300">
                <span className="flex items-center gap-1.5 text-fuchsia-400">
                  <Sparkles className="h-4 w-4" /> Aesthetic & Style Index
                </span>
                <span>{scores.aesthetic}%</span>
              </div>
              <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-zinc-800">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-fuchsia-500 transition-all duration-500"
                  style={{ width: `${scores.aesthetic}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-zinc-300">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <Award className="h-4 w-4" /> Kill Feed Readability
                </span>
                <span>{scores.readability}%</span>
              </div>
              <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-zinc-800">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500"
                  style={{ width: `${scores.readability}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <AdPlaceholder slotType="infeed" />
    </section>
  );
};
