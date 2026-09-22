"use client";

import React from "react";
import Link from "next/link";
import { Zap, Heart } from "lucide-react";

interface FooterProps {
  setActiveTab?: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand Col */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 to-fuchsia-500 text-white shadow-md">
                <Zap className="h-5 w-5" />
              </div>
              <span className="text-xl font-extrabold text-white">
                Nickname<span className="text-cyan-400">Generator</span>.io
              </span>
            </div>
            <p className="mt-3 max-w-sm text-xs leading-relaxed text-zinc-400">
              The internet&apos;s fastest, modern generator for stylish nicknames, fancy Unicode fonts, rare gamer symbols, and duo clan tags. Outclassing outdated nickname sites with 100% free, 1-click tools.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-zinc-400">
              <span>Made with</span>
              <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" />
              <span>for the global gaming community</span>
            </div>
          </div>

          {/* Tools Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Interactive Tools</h4>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <button
                  onClick={() => setActiveTab?.("generator")}
                  className="hover:text-cyan-400 transition-colors"
                >
                  ⚡ Instant Live Styler
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab?.("explore")}
                  className="hover:text-cyan-400 transition-colors"
                >
                  🔥 Trending Game Hub
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab?.("symbols")}
                  className="hover:text-cyan-400 transition-colors"
                >
                  ✨ Rare Symbol Vault
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab?.("duo")}
                  className="hover:text-cyan-400 transition-colors"
                >
                  ❤️ Couple & Duo Maker
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab?.("clan")}
                  className="hover:text-cyan-400 transition-colors"
                >
                  ⚔️ Clan & Squad Studio
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab?.("vibe")}
                  className="hover:text-cyan-400 transition-colors"
                >
                  🛡️ Gamertag Vibe Checker
                </button>
              </li>
            </ul>
          </div>

          {/* Games Category */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Popular Games</h4>
            <ul className="mt-3 space-y-2 text-xs">
              <li><span className="hover:text-zinc-200">Free Fire (FF) Stylish Names</span></li>
              <li><span className="hover:text-zinc-200">PUBG Mobile / BGMI Conqueror</span></li>
              <li><span className="hover:text-zinc-200">Valorant Radiant Gamertags</span></li>
              <li><span className="hover:text-zinc-200">Roblox Aesthetic Usernames</span></li>
              <li><span className="hover:text-zinc-200">Minecraft OG & PVP Usernames</span></li>
              <li><span className="hover:text-zinc-200">Call of Duty: Mobile / Warzone</span></li>
              <li><span className="hover:text-zinc-200">Discord Aesthetic Profiles</span></li>
            </ul>
          </div>

          {/* Legal / AdSense Pages */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Legal & About</h4>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link href="/privacy-policy" className="hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-cyan-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-12 border-t border-zinc-900 pt-6 text-center text-[11px] leading-relaxed text-zinc-400">
          <p>
            Disclaimer: NicknameGenerator.io is an independent utility tool. Free Fire is a registered trademark of Garena. PUBG & BGMI are registered trademarks of KRAFTON Inc. Valorant is a trademark of Riot Games. Roblox is a trademark of Roblox Corporation. All trademark rights belong to their respective owners.
          </p>
          <p className="mt-2 text-zinc-400">
            &copy; {new Date().getFullYear()} NicknameGenerator.io. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
