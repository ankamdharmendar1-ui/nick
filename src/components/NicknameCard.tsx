"use client";

import React, { useState } from "react";
import { Copy, Check, Heart, Share2 } from "lucide-react";
import confetti from "canvas-confetti";

interface NicknameCardProps {
  id?: string;
  name: string;
  category?: string;
  subtitle?: string;
  likes?: number;
  isFavorite?: boolean;
  onToggleFavorite?: (name: string) => void;
  onCopySuccess?: (name: string) => void;
}

export const NicknameCard: React.FC<NicknameCardProps> = ({
  name,
  category,
  subtitle,
  likes = 0,
  isFavorite = false,
  onToggleFavorite,
  onCopySuccess,
}) => {
  const [copied, setCopied] = useState(false);
  const [currentLikes, setCurrentLikes] = useState(likes);
  const [hasLiked, setHasLiked] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(name);
    setCopied(true);

    // Trigger subtle confetti burst
    confetti({
      particleCount: 25,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#06b6d4", "#a855f7", "#ec4899"],
    });

    if (onCopySuccess) {
      onCopySuccess(name);
    }

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!hasLiked) {
      setCurrentLikes((prev) => prev + 1);
      setHasLiked(true);
    } else {
      setCurrentLikes((prev) => prev - 1);
      setHasLiked(false);
    }
  };

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Stylish Nickname from NicknameGenerator.io",
          text: `Check out this stylish nickname: ${name}`,
          url: "https://www.nicknamegenerator.io",
        });
      } catch {
        handleCopy(e);
      }
    } else {
      handleCopy(e);
    }
  };

  return (
    <div
      onClick={handleCopy}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-4 sm:p-5 transition-all duration-200 cursor-pointer ${
        copied
          ? "border-emerald-500/80 bg-emerald-950/20 shadow-lg shadow-emerald-500/10"
          : "border-zinc-800/80 bg-zinc-900/60 hover:border-cyan-500/50 hover:bg-zinc-900/90 hover:shadow-xl hover:shadow-cyan-500/5"
      }`}
    >
      {/* Top Meta Bar */}
      <div className="flex items-center justify-between gap-2 pb-3">
        {category ? (
          <span className="rounded-md bg-zinc-800/80 px-2.5 py-0.5 text-[11px] font-semibold text-cyan-400 border border-zinc-700/50">
            {category}
          </span>
        ) : (
          <span className="text-[11px] text-zinc-500">{subtitle || "Ready to copy"}</span>
        )}

        <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
          {onToggleFavorite && (
            <button
              onClick={() => onToggleFavorite(name)}
              className={`rounded-lg p-1.5 transition-colors ${
                isFavorite
                  ? "text-pink-500 hover:bg-pink-500/20"
                  : "text-zinc-500 hover:bg-zinc-800 hover:text-zinc-300"
              }`}
              title={isFavorite ? "Remove from favorites" : "Save to favorites"}
            >
              <Heart className={`h-4 w-4 ${isFavorite ? "fill-pink-500" : ""}`} />
            </button>
          )}

          <button
            onClick={handleShare}
            className="rounded-lg p-1.5 text-zinc-500 transition-colors hover:bg-zinc-800 hover:text-zinc-300"
            title="Share nickname"
          >
            <Share2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Styled Nickname Display */}
      <div className="my-2 break-all text-center">
        <span className="font-sans text-lg font-bold tracking-wide text-white group-hover:text-cyan-200 sm:text-xl">
          {name}
        </span>
      </div>

      {/* Bottom Actions */}
      <div className="mt-3 flex items-center justify-between border-t border-zinc-800/60 pt-3">
        {/* Upvotes */}
        <button
          onClick={handleLike}
          className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${
            hasLiked ? "text-cyan-400 font-semibold" : "text-zinc-400 hover:text-zinc-300"
          }`}
          title="Vote for this style"
        >
          <span>🔥</span>
          <span>{currentLikes.toLocaleString()}</span>
        </button>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all shadow-sm ${
            copied
              ? "bg-emerald-500 text-white"
              : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 group-hover:bg-cyan-500 group-hover:text-black"
          }`}
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" />
              <span>COPIED!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>COPY</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
