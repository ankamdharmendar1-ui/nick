"use client";

import React, { useState, useMemo } from "react";
import { PRESET_NICKNAMES, CuratedNickname } from "../lib/nicknameDatabase";
import { NicknameCard } from "./NicknameCard";
import { Flame, Gamepad2, Search } from "lucide-react";
import { AdPlaceholder } from "./AdPlaceholder";

interface ExploreHubProps {
  favorites: string[];
  onToggleFavorite: (name: string) => void;
  onCopySuccess: (name: string) => void;
}

export const ExploreHub: React.FC<ExploreHubProps> = ({
  favorites,
  onToggleFavorite,
  onCopySuccess,
}) => {
  const [selectedGame, setSelectedGame] = useState<string>("All");
  const [searchFilter, setSearchFilter] = useState<string>("");

  const games = [
    "All",
    "Free Fire",
    "PUBG / BGMI",
    "Valorant",
    "Roblox",
    "Call of Duty",
    "Minecraft",
    "Clan",
  ];

  const filteredNicknames: CuratedNickname[] = useMemo(() => {
    return PRESET_NICKNAMES.filter((item) => {
      const matchGame = selectedGame === "All" || item.game === selectedGame || item.game === "All";
      const matchSearch =
        searchFilter === "" ||
        item.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
        item.tags.some((t) => t.toLowerCase().includes(searchFilter.toLowerCase())) ||
        item.category.toLowerCase().includes(searchFilter.toLowerCase());
      return matchGame && matchSearch;
    });
  }, [selectedGame, searchFilter]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-800 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
            <Flame className="h-4 w-4" />
            <span>Trending Player Gamertags</span>
          </div>
          <h2 className="mt-1 text-2xl font-black text-white sm:text-3xl">
            Explore Curated Nicknames by Game
          </h2>
          <p className="mt-1 text-sm text-zinc-400">
            Copy viral Free Fire boss names, PUBG conqueror fonts, and aesthetic anime gamer tags.
          </p>
        </div>

        {/* Search within presets */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder="Search tags (wings, king, ninja)..."
            className="w-full rounded-xl border border-zinc-800 bg-zinc-900/90 pl-9 pr-4 py-2 text-sm text-zinc-200 placeholder-zinc-500 focus:border-amber-500/50 focus:outline-none"
          />
        </div>
      </div>

      {/* Game Filter Buttons */}
      <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {games.map((game) => (
          <button
            key={game}
            onClick={() => setSelectedGame(game)}
            className={`flex shrink-0 items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
              selectedGame === game
                ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20"
                : "border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700 hover:text-white"
            }`}
          >
            <Gamepad2 className="h-3.5 w-3.5" />
            <span>{game}</span>
          </button>
        ))}
      </div>

      {/* Grid of Curated Nicknames */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredNicknames.slice(0, 9).map((nick) => (
          <NicknameCard
            key={nick.id}
            name={nick.name}
            category={nick.game}
            subtitle={nick.tags.join(" • ")}
            likes={nick.likes}
            isFavorite={favorites.includes(nick.name)}
            onToggleFavorite={onToggleFavorite}
            onCopySuccess={onCopySuccess}
          />
        ))}
      </div>

      <AdPlaceholder slotType="infeed" />

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredNicknames.slice(9).map((nick) => (
          <NicknameCard
            key={nick.id}
            name={nick.name}
            category={nick.game}
            subtitle={nick.tags.join(" • ")}
            likes={nick.likes}
            isFavorite={favorites.includes(nick.name)}
            onToggleFavorite={onToggleFavorite}
            onCopySuccess={onCopySuccess}
          />
        ))}
      </div>

      {filteredNicknames.length === 0 && (
        <div className="mt-12 text-center text-zinc-500">
          <p className="text-base font-semibold">No nicknames found matching your filter.</p>
          <p className="mt-1 text-xs">Try searching for keywords like &quot;killer&quot;, &quot;boss&quot;, &quot;wings&quot;, or &quot;queen&quot;.</p>
        </div>
      )}
    </section>
  );
};
