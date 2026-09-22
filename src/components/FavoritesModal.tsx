"use client";

import React, { useState } from "react";
import { X, Trash2, Copy, Check, Heart, Download } from "lucide-react";
import confetti from "canvas-confetti";

interface FavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: string[];
  onRemoveFavorite: (name: string) => void;
  onClearAll: () => void;
  onCopySuccess: (text: string) => void;
}

export const FavoritesModal: React.FC<FavoritesModalProps> = ({
  isOpen,
  onClose,
  favorites,
  onRemoveFavorite,
  onClearAll,
  onCopySuccess,
}) => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  if (!isOpen) return null;

  const handleCopySingle = (name: string) => {
    navigator.clipboard.writeText(name);
    setCopiedItem(name);
    onCopySuccess(name);
    setTimeout(() => setCopiedItem(null), 1500);
  };

  const handleCopyAll = () => {
    if (favorites.length === 0) return;
    const text = favorites.join("\n");
    navigator.clipboard.writeText(text);
    setCopiedAll(true);
    confetti({
      particleCount: 25,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#ec4899", "#06b6d4"],
    });
    onCopySuccess("All favorites copied!");
    setTimeout(() => setCopiedAll(false), 2000);
  };

  const handleExportTextFile = () => {
    if (favorites.length === 0) return;
    const element = document.createElement("a");
    const file = new Blob([favorites.join("\n")], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "my-stylish-nicknames.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div className="relative flex max-h-[85vh] w-full max-w-lg flex-col rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 fill-pink-500 text-pink-500" />
            <h3 className="text-lg font-bold text-white">Saved Nicknames</h3>
            <span className="rounded-full bg-pink-500/20 px-2 py-0.5 text-xs font-bold text-pink-400">
              {favorites.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content List */}
        <div className="my-4 flex-1 space-y-2.5 overflow-y-auto pr-1">
          {favorites.length === 0 ? (
            <div className="py-12 text-center text-zinc-500">
              <Heart className="mx-auto h-8 w-8 text-zinc-700" />
              <p className="mt-2 text-sm font-semibold">No saved nicknames yet.</p>
              <p className="text-xs">Click the heart icon on any nickname card to save it here.</p>
            </div>
          ) : (
            favorites.map((name, idx) => {
              const isCopied = copiedItem === name;
              return (
                <div
                  key={idx}
                  className="flex items-center justify-between gap-3 rounded-xl border border-zinc-800 bg-zinc-900/60 p-3"
                >
                  <span className="break-all font-mono text-sm font-bold text-white">{name}</span>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => handleCopySingle(name)}
                      className={`flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-bold transition-all ${
                        isCopied ? "bg-emerald-500 text-white" : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                      }`}
                    >
                      {isCopied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                      <span>{isCopied ? "Copied" : "Copy"}</span>
                    </button>
                    <button
                      onClick={() => onRemoveFavorite(name)}
                      className="rounded-lg p-1.5 text-zinc-500 hover:bg-zinc-800 hover:text-rose-400"
                      title="Remove"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Actions */}
        {favorites.length > 0 && (
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-zinc-800 pt-4">
            <button
              onClick={onClearAll}
              className="text-xs font-semibold text-zinc-500 hover:text-rose-400"
            >
              Clear All
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={handleExportTextFile}
                className="flex items-center gap-1.5 rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs font-semibold text-zinc-300 hover:bg-zinc-800"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Export .txt</span>
              </button>
              <button
                onClick={handleCopyAll}
                className="flex items-center gap-1.5 rounded-xl bg-pink-600 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-pink-500"
              >
                {copiedAll ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                <span>Copy All</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
