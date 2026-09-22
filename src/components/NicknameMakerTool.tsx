"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

interface CategoryData {
  name: string;
  emoji: string;
  ideas: string[];
}

const CATEGORIES: CategoryData[] = [
  {
    name: "Gamer & Esports",
    emoji: "🎮",
    ideas: [
      "ShadowByte", "NeonRifle", "VoidStrike", "IronPhantom", "GlitchKing", "CyberDemon",
      "DarkPixel", "NightHawk", "StormSlayer", "VenomFang", "CrimsonAce", "OmegaForce",
      "ApexPredator", "SilentViper", "BulletEcho", "PixelTitan", "ZeroGravity", "HavocMaker",
      "VortexRider", "FrostBite", "GhostSniper", "QuantumPulse", "ThunderClutch", "RogueAgent"
    ]
  },
  {
    name: "Aesthetic & Soft",
    emoji: "✨",
    ideas: [
      "MoonWhisper", "CherryBlossom", "VelvetDream", "SilkMist", "CrystalDew", "StarDust",
      "LunarPetal", "AuroraGlow", "PeachBlossom", "RosePetal", "SoftCloud", "GoldenLight",
      "LavenderSky", "MorningDew", "SilverGleam", "PastelBreeze", "HoneyDew", "StarlightSoul",
      "OceanBreeze", "BlushingFawn", "CosmicPetal", "VintageWhisper", "TwilightMelody", "VanillaMist"
    ]
  },
  {
    name: "Badass & Fierce",
    emoji: "💀",
    ideas: [
      "ReaperX", "DeathStroke", "VenomKing", "SavageWolf", "WarCriminal", "IronFist",
      "BloodRaven", "DemonBlade", "NightStalker", "SkullCrusher", "ThunderFist", "DarkReaper",
      "HellHound", "BrutalForce", "ChaosBringer", "BlackOut", "RampageKing", "IronClad",
      "GrimSpectre", "Overkill", "SoulStealer", "ApexViper", "ViciousBlade", "NightTerror"
    ]
  },
  {
    name: "Cute & Sweet",
    emoji: "🌸",
    ideas: [
      "CuddlePuff", "SnuggleBug", "TinyPaws", "FluffyBun", "PeachyCream", "SugarPlum",
      "CandyFloss", "BubblePop", "KittyPurr", "BunnyHop", "SweetiePie", "MapleSyrup",
      "BumbleBee", "MochiPuff", "CupcakeBite", "DaisyDoll", "PuddingPop", "BerrySweet",
      "Marshmallow", "HoneyBun", "SprinkleSpark", "SunnyBunny", "CinnamonRoll", "SweetPea"
    ]
  },
  {
    name: "Anime & Japanese",
    emoji: "🎌",
    ideas: [
      "Akatsuki", "KageShin", "RyuJin", "SakuraNinja", "YamiKage", "TenseiSoul",
      "HakuRyu", "NarutoWave", "ShinobiX", "ZeroKai", "DragonSoul", "PhoenixKai",
      "KuroNeko", "HikariGlow", "ShiroKitsune", "OniSlayer", "BankaiMaster", "SenseiX",
      "ZenitsuThunder", "TanjiroFlame", "GojoLimitless", "SukunaCurse", "LeviBlade", "ItachiRaven"
    ]
  },
  {
    name: "Fantasy & Mythic",
    emoji: "🐉",
    ideas: [
      "PhoenixHeart", "Dragonborn", "ValhallaKing", "ShadowMage", "RuneCaster", "ElderWarlock",
      "FrostGiant", "CelestialKnight", "MythicBeast", "ArcaneSorcerer", "ValkyrieFlight", "TitanSlayer",
      "GriffinClaw", "NetherLord", "AstralPaladin", "DreadKnight", "StormBringer", "VoidWalker"
    ]
  }
];

export default function NicknameMakerTool() {
  const [activeCategory, setActiveCategory] = useState<string>("Gamer & Esports");
  const [filterQuery, setFilterQuery] = useState<string>("");
  const [copied, setCopied] = useState<string | null>(null);

  const currentCategory = useMemo(() => {
    return CATEGORIES.find((c) => c.name === activeCategory) || CATEGORIES[0];
  }, [activeCategory]);

  const filteredIdeas = useMemo(() => {
    if (!filterQuery.trim()) return currentCategory.ideas;
    const q = filterQuery.toLowerCase().trim();
    return currentCategory.ideas.filter((name) => name.toLowerCase().includes(q));
  }, [currentCategory, filterQuery]);

  const handleCopy = (name: string) => {
    navigator.clipboard.writeText(name);
    setCopied(name);
    setTimeout(() => setCopied((p) => (p === name ? null : p)), 2000);
  };

  return (
    <div className="space-y-4">
      {/* Category Pills & Filter */}
      <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] p-4">
        <div className="text-[13px] font-bold text-[#354861] uppercase tracking-wider mb-2">
          Step 1: Choose a Vibe / Category
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.name}
              onClick={() => {
                setActiveCategory(cat.name);
                setFilterQuery("");
              }}
              className={`px-3 py-1.5 rounded-[20px] text-[13px] font-medium transition-all cursor-pointer ${
                activeCategory === cat.name
                  ? "bg-[#3c8dbc] text-white shadow-sm"
                  : "bg-[#f4f4f4] text-gray-700 hover:bg-[#e8f4fd] hover:text-[#2c6da5]"
              }`}
            >
              <span className="mr-1.5">{cat.emoji}</span>
              {cat.name}
            </button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder={`Filter in ${activeCategory}...`}
            className="flex-1 border border-[#d2d6de] rounded-[2px] px-3 py-2 text-[14px] text-gray-800 focus:border-[#3c8dbc] focus:outline-none"
          />
          {filterQuery && (
            <button
              onClick={() => setFilterQuery("")}
              className="bg-[#d2d6de] text-[#444] px-3 py-2 rounded-[2px] text-[13px] font-semibold hover:bg-[#c8ccd4] cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Ideas Grid */}
      <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7]">
        <div className="border-b border-[#f4f4f4] px-4 py-2.5 flex items-center justify-between">
          <h2 className="text-[16px] font-semibold text-[#333] m-0">
            {currentCategory.emoji} {currentCategory.name} Name Ideas ({filteredIdeas.length})
          </h2>
          <span className="text-[11px] text-gray-400 bg-[#f4f4f4] px-2 py-0.5 rounded">
            Click to copy or style
          </span>
        </div>

        {filteredIdeas.length === 0 ? (
          <div className="p-8 text-center text-gray-400 text-[14px]">
            No names match "{filterQuery}". Try another search or category!
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 divide-y sm:divide-y-0 divide-[#f4f4f4]">
            {filteredIdeas.map((name, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-3 py-2.5 border-b border-[#f4f4f4] sm:border-r hover:bg-[#f9f9f9] group transition-colors"
              >
                <span
                  onClick={() => handleCopy(name)}
                  className="font-semibold text-[14px] text-[#333] hover:text-[#2c6da5] cursor-pointer flex-1 truncate"
                  title="Click to copy name"
                >
                  {name}
                </span>

                <div className="flex items-center gap-1 shrink-0 ml-2">
                  <button
                    onClick={() => handleCopy(name)}
                    className={`text-[11px] font-semibold px-2 py-0.5 rounded transition-colors cursor-pointer ${
                      copied === name
                        ? "bg-[#00a65a] text-white"
                        : "bg-[#e8f4fd] text-[#2c6da5] group-hover:bg-[#3c8dbc] group-hover:text-white"
                    }`}
                  >
                    {copied === name ? "Copied!" : "Copy"}
                  </button>
                  <Link
                    href={`/stylish-text?q=${encodeURIComponent(name)}`}
                    className="text-[11px] text-gray-400 hover:text-[#3c8dbc] px-1 py-0.5"
                    title="Style this name in fancy fonts"
                  >
                    ✍️ Style
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
