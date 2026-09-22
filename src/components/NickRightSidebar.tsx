"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RECENT_SEARCHES, POPULARITY_TRENDS, NickVariant } from "../lib/nickfinderData";
import { TranslationStrings, TRANSLATIONS } from "../lib/translations";

interface NickRightSidebarProps {
  onSelectName: (name: string) => void;
  onCopySuccess: (text: string) => void;
  t?: TranslationStrings;
}

export const NickRightSidebar: React.FC<NickRightSidebarProps> = ({
  onSelectName,
  onCopySuccess,
  t = TRANSLATIONS.EN,
}) => {
  const [trends, setTrends] = useState<NickVariant[]>(POPULARITY_TRENDS);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    onCopySuccess(text);
  };

  const handleVote = (idx: number, type: "up" | "down", e: React.MouseEvent) => {
    e.stopPropagation();
    setTrends((prev) =>
      prev.map((item, i) => {
        if (i !== idx) return item;
        if (type === "up") {
          return { ...item, upCount: (item.upCount || 0) + 1 };
        } else {
          return { ...item, downCount: (item.downCount || 0) + 1 };
        }
      })
    );
  };

  return (
    <aside className="w-full lg:w-[300px] shrink-0 space-y-3.5 select-none">
      {/* Box 1: Recent nicknames */}
      <div className="rounded-[3px] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] bg-white shadow-[0_1px_1px_rgba(0,0,0,0.1)] overflow-hidden">
        <div className="bg-[#ebe9f5] px-3.5 py-2 flex items-center justify-between border-b border-[#c3bce7]">
          <h3 className="text-[15px] font-semibold text-[#333] m-0">{t.recentNicknames}</h3>
          <span className="text-gray-400 text-xs">⚙</span>
        </div>
        <div className="p-3">
          <div className="flex flex-wrap gap-x-2.5 gap-y-1.5 text-[13px] text-[#2c6da5] leading-snug">
            {RECENT_SEARCHES.map((name, idx) => (
              <Link
                key={idx}
                href={`/?q=${encodeURIComponent(name)}`}
                onClick={() => onSelectName(name)}
                title={`Nicknames and designs for ${name}`}
                className="hover:underline hover:text-[#1c4cab] cursor-pointer"
              >
                {name}
              </Link>
            ))}
          </div>

          {/* Action Links (Matches Screenshot) */}
          <div className="mt-3.5 space-y-1.5">
            <Link
              href="/stylish-text"
              title="Random nickname generator page"
              className="w-full block rounded-full border border-[#1c4cab] bg-white py-1.5 text-center text-[13px] font-medium text-[#1c4cab] shadow-sm hover:bg-blue-50 transition-colors cursor-pointer"
            >
              {t.randomPage}
            </Link>
            <Link
              href="/?q=Japanese"
              onClick={() => onSelectName("Japanese")}
              title="Japanese stylish username generator"
              className="w-full block rounded-full border border-[#1c4cab] bg-white py-1.5 text-center text-[13px] font-medium text-[#1c4cab] shadow-sm hover:bg-blue-50 transition-colors truncate px-2 cursor-pointer"
            >
              Japanese: タ☯, ダンガンロンパ... &gt;&gt;
            </Link>
          </div>
        </div>
      </div>

      {/* Box 2: Popularity trends */}
      <div className="rounded-[3px] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] bg-white shadow-[0_1px_1px_rgba(0,0,0,0.1)] overflow-hidden">
        <div className="bg-[#ebe9f5] px-3.5 py-2 flex items-center justify-between border-b border-[#c3bce7]">
          <h3 className="text-[15px] font-semibold text-[#333] m-0">{t.popularityTrends}</h3>
          <span className="text-gray-400 text-xs">⚙</span>
        </div>
        <div className="p-2 divide-y divide-[#f0f0f0] text-[13px]">
          {trends.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleCopy(item.name)}
              className="py-2 flex items-center justify-between gap-1.5 cursor-pointer hover:bg-slate-50 px-1 rounded transition-colors"
            >
              <div className="w-[82px] shrink-0">
                <Link
                  href={`/?q=${encodeURIComponent(item.game || item.name)}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectName(item.game || item.name);
                  }}
                  title={`Trending nicknames for ${item.game}`}
                  className="font-semibold text-[#2c6da5] hover:underline block text-xs"
                >
                  {item.game}
                </Link>
                <div className="flex items-center gap-1.5 text-[11px] text-gray-500 mt-0.5 font-mono">
                  <span
                    onClick={(e) => handleVote(idx, "up", e)}
                    className="flex items-center text-[#00a65a] hover:font-bold"
                    title="Up votes"
                  >
                    ▲ {item.upCount}
                  </span>
                  <span
                    onClick={(e) => handleVote(idx, "down", e)}
                    className="flex items-center text-[#dd4b39] hover:font-bold"
                    title="Down votes"
                  >
                    ▼ {item.downCount}
                  </span>
                </div>
              </div>

              <div className="flex-1 text-right overflow-hidden">
                <div className="text-[14px] font-medium text-gray-900 truncate" title={item.name}>
                  {item.name}
                </div>
                <div className="text-[11px] font-mono mt-0.5">
                  <span className="text-[#00a65a] mr-1.5">{item.upvotes}</span>
                  <span className="text-[#b4610f]">{item.downvotes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Links under trends (Exact match with competitor) */}
      <div className="space-y-1.5">
        <Link
          href="/?q=Jayanta"
          onClick={() => onSelectName("Jayanta")}
          title="Username generator for Jayanta"
          className="w-full block rounded-full border border-[#1c4cab] bg-white py-1.5 text-center text-[13px] font-medium text-[#1c4cab] shadow-sm hover:bg-blue-50 transition-colors truncate px-2 cursor-pointer"
        >
          Jayanta: Jᴀʏᴀɴᴛᴀ, ᴊᴀʏᴀɴᴛᴀᶠᶠ... &gt;&gt;
        </Link>
        <Link
          href="/stylish-text"
          title="Random nickname generator page"
          className="w-full block rounded-full border border-[#1c4cab] bg-white py-1.5 text-center text-[13px] font-medium text-[#1c4cab] shadow-sm hover:bg-blue-50 transition-colors cursor-pointer"
        >
          {t.randomPage}
        </Link>
      </div>
    </aside>
  );
};
