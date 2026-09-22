"use client";

import React, { useState } from "react";
import { Zap, Heart, Flame, Shield, Sparkles, Menu, X, Swords } from "lucide-react";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  favoritesCount: number;
  openFavoritesModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  favoritesCount,
  openFavoritesModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "generator", label: "Instant Styler", icon: Zap },
    { id: "explore", label: "Game Hub", icon: Flame },
    { id: "symbols", label: "Symbol Vault", icon: Sparkles },
    { id: "duo", label: "Duo & Couples", icon: Heart },
    { id: "clan", label: "Clan & Squads", icon: Swords },
    { id: "vibe", label: "Vibe Score", icon: Shield },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand Logo */}
        <div
          onClick={() => setActiveTab("generator")}
          className="flex cursor-pointer items-center gap-2.5 transition-transform hover:scale-105"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-fuchsia-500 shadow-lg shadow-cyan-500/20">
            <Zap className="h-6 w-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-extrabold tracking-tight text-white">
                Nickname<span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">Generator</span>
              </span>
              <span className="rounded-full bg-cyan-500/10 px-2 py-0.5 text-xs font-bold text-cyan-400 border border-cyan-500/30">
                .io
              </span>
            </div>
            <p className="text-[10px] font-medium tracking-wide text-zinc-400">
              #1 Free Fire, PUBG & Gamer Font Maker
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1.5 md:flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? "text-cyan-400" : "text-zinc-400"}`} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right side: Favorites Button & Mobile Toggle */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={openFavoritesModal}
            className="group relative flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/90 px-3.5 py-2 text-sm font-medium text-zinc-200 shadow-sm transition-all hover:border-pink-500/50 hover:bg-pink-500/10 hover:text-pink-300"
            title="Saved Nicknames"
          >
            <Heart className="h-4 w-4 text-pink-500 transition-transform group-hover:scale-110" />
            <span className="hidden sm:inline">Saved</span>
            {favoritesCount > 0 && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-pink-500 text-[11px] font-bold text-white shadow-sm">
                {favoritesCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white md:hidden"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-zinc-800 bg-zinc-950 px-4 pt-2 pb-4 md:hidden">
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-semibold text-left transition-all ${
                    isActive
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                      : "text-zinc-300 hover:bg-zinc-900"
                  }`}
                >
                  <Icon className="h-5 w-5 text-cyan-400" />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
