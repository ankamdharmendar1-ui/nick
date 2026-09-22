"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TOP_50_NICKFINDER, INITIAL_RANDOM_NICKS, NickVariant, GIRLS_BOYS_NAMES, POPULAR_PAGES, GirlBoyNickname } from "../lib/nickfinderData";
import { generateAllStyles, DecoratedStyle } from "../lib/fontTransforms";
import { TranslationStrings, TRANSLATIONS } from "../lib/translations";
import confetti from "canvas-confetti";

interface NickCenterContentProps {
  searchQuery: string;
  onCopySuccess: (text: string) => void;
  onSelectName?: (name: string) => void;
  t?: TranslationStrings;
}

export const NickCenterContent: React.FC<NickCenterContentProps> = ({
  searchQuery,
  onCopySuccess,
  onSelectName,
  t = TRANSLATIONS.EN,
}) => {
  const [firstLetterFilter, setFirstLetterFilter] = useState("");
  const [randomNicks, setRandomNicks] = useState<string[]>(INITIAL_RANDOM_NICKS.slice(0, 4));
  const [top50, setTop50] = useState<NickVariant[]>(TOP_50_NICKFINDER);
  const [girlsBoys, setGirlsBoys] = useState<GirlBoyNickname[]>(GIRLS_BOYS_NAMES);
  const [copiedVariant, setCopiedVariant] = useState<string | null>(null);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleGenerateAnother = () => {
    let pool = INITIAL_RANDOM_NICKS;
    if (firstLetterFilter.trim()) {
      const letter = firstLetterFilter.trim().toLowerCase()[0];
      const filtered = pool.filter((n) => n.toLowerCase().startsWith(letter));
      if (filtered.length > 0) pool = filtered;
    }
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    setRandomNicks(shuffled.slice(0, 4));
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedVariant(text);
    setCopiedText(text);
    confetti({
      particleCount: 15,
      spread: 45,
      origin: { y: 0.8 },
      colors: ["#0055ff", "#00c0ef", "#00a65a"],
    });
    onCopySuccess(text);
    setTimeout(() => {
      setCopiedVariant((prev) => (prev === text ? null : prev));
    }, 2000);
  };

  const handleVote = (idx: number, isUp: boolean, e: React.MouseEvent) => {
    e.stopPropagation();
    setTop50((prev) =>
      prev.map((item, i) => {
        if (i !== idx) return item;
        const currentNum =
          parseInt(isUp ? item.upvotes.replace("+", "") : item.downvotes.replace("-", ""), 10) || 0;
        const newNum = currentNum + 1;
        return {
          ...item,
          upvotes: isUp ? `+${newNum}` : item.upvotes,
          downvotes: !isUp ? `-${newNum}` : item.downvotes,
        };
      })
    );
  };

  const handleVoteGb = (idx: number, isUp: boolean, e: React.MouseEvent) => {
    e.stopPropagation();
    setGirlsBoys((prev) =>
      prev.map((item, i) => {
        if (i !== idx) return item;
        const currentNum =
          parseInt(isUp ? item.upvotes.replace("+", "") : item.downvotes.replace("-", ""), 10) || 0;
        const newNum = currentNum + 1;
        return {
          ...item,
          upvotes: isUp ? `+${newNum}` : item.upvotes,
          downvotes: !isUp ? `-${newNum}` : item.downvotes,
        };
      })
    );
  };

  const searchStyles: DecoratedStyle[] = searchQuery.trim()
    ? generateAllStyles(searchQuery.trim())
    : [];

  return (
    <div className="flex-1 space-y-3.5">
      {/* Live Search Results (Only shown when searching) */}
      {searchQuery.trim() && (
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] overflow-hidden">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5 flex items-center justify-between">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">
              Results for &quot;<span className="text-[#0055ff]">{searchQuery}</span>&quot;
            </h2>
            <span className="text-xs text-gray-500 font-medium">
              {searchStyles.length} stylish variants generated
            </span>
          </div>
          <div className="p-2 sm:p-2.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1.5 sm:gap-2">
              {searchStyles.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleCopy(item.styled)}
                  className="border border-[#eeeeee] p-2 sm:p-2.5 text-center cursor-pointer transition-colors hover:border-[#0055ff] hover:bg-[#fbfcfd]"
                >
                  <div className="text-[15px] sm:text-[16px] font-medium text-gray-900 truncate" title={item.styled}>
                    {item.styled}
                  </div>
                  <div className="text-[12px] mt-1 font-mono">
                    <span className="text-[#00a65a] font-semibold mr-2">+1</span>
                    <span className="text-[#b4610f]">-0</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Title & Description Box — matches nickfinder.com & translated dynamically */}
      <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] p-4 sm:p-5">
        <h1 className="text-[22px] sm:text-[25px] font-bold text-[#222] m-0 leading-tight">
          {t.mainTitle || "Nickname & Username Generator 🏆"}
          <span className="text-[13px] font-normal text-gray-600 font-mono tracking-normal ml-2">
            {" "}『sʜʀᴋ』•ᴮᴬᴰʙᴏʏツ, ꧁༺₦Ї₦ℑ₳༻꧂, ༄ᶦᶰᵈ᭄✿Gᴀᴍᴇʀ࿐, 𝓑𝓻𝓸𝓴𝓮𝓷 𝓗𝓮𝓪𝓻𝓽♡...
          </span>
        </h1>

        <div className="mt-3.5 text-[14px] text-gray-700 leading-relaxed space-y-3">
          <p className="indent-4 m-0">
            {t.p1}
          </p>
          <p className="indent-4 m-0">
            {t.p2}
          </p>
        </div>
      </div>

      {/* Random Nicknames Box (Matches Competitor Generator Area) */}
      <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] overflow-hidden">
        <div className="border-b border-[#f4f4f4] px-4 py-2.5">
          <h2 className="text-[17px] font-semibold text-[#333] m-0">{t.randomNicknames}</h2>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Left 4 rounded pill buttons with competitor generator_area background */}
            <div className="md:col-span-7 bg-[#ebe9f5] border border-[#c3bce7] rounded-[3px] p-3 space-y-2 text-center">
              {randomNicks.map((nick, idx) => {
                const isCopied = copiedVariant === nick;
                return (
                  <button
                    key={idx}
                    onClick={() => handleCopy(nick)}
                    className={`w-[85%] max-w-[280px] mx-auto block rounded-[30px] border py-2 px-3 text-center text-[15px] font-medium shadow-[1px_1px_1px_1px_rgb(214_210_233)] transition-all cursor-pointer truncate ${
                      isCopied
                        ? "border-[#00a65a] text-[#222] bg-[#b2ffb5]"
                        : "border-[#e2e4ea] bg-[#fdfdfd] text-[#222] hover:bg-white hover:border-[#3c8dbc]"
                    }`}
                    title="Click to copy"
                  >
                    {nick}
                  </button>
                );
              })}
            </div>

            {/* Right input & cyan button */}
            <div className="md:col-span-5 space-y-2.5">
              {copiedText && (
                <div className="space-y-1">
                  <div className="text-xs text-gray-500 font-semibold">{t.alreadyCopied}</div>
                  <input
                    type="text"
                    readOnly
                    value={copiedText}
                    onClick={(e) => (e.target as HTMLInputElement).select()}
                    className="w-full rounded-[2px] border border-[#d2d6de] bg-white px-3 py-2 text-sm text-gray-800 font-semibold focus:border-[#00c0ef] focus:outline-none shadow-inner"
                  />
                </div>
              )}

              <input
                type="text"
                value={firstLetterFilter}
                onChange={(e) => setFirstLetterFilter(e.target.value)}
                placeholder={t.firstLetters}
                className="w-full rounded-[2px] border border-[#d2d6de] bg-white px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-[#00c0ef] focus:outline-none"
              />

              <button
                onClick={handleGenerateAnother}
                className="w-full rounded-[2px] bg-[#00c0ef] py-3 text-center text-[13px] font-bold uppercase tracking-wider text-white shadow hover:bg-[#00acd6] transition-colors cursor-pointer"
              >
                {t.generateAnother}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Top 50 stylish nicknames Box */}
      <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] overflow-hidden">
        <div className="border-b border-[#f4f4f4] px-4 py-2.5">
          <h2 className="text-[17px] font-semibold text-[#333] m-0">{t.top50Title}</h2>
        </div>
        <div className="p-2 sm:p-2.5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1.5 sm:gap-2">
            {top50.map((item, idx) => {
              const isCopied = copiedVariant === item.name;
              return (
                <div
                  key={item.id}
                  onClick={() => handleCopy(item.name)}
                  className={`border border-[#eeeeee] p-2 sm:p-2.5 text-center cursor-pointer transition-colors hover:border-gray-300 ${
                    isCopied ? "bg-[#b2ffb5] border-[#00a65a]" : "bg-white hover:bg-[#fbfcfd]"
                  }`}
                  title="Click to copy"
                >
                  <div className="text-[15px] sm:text-[16px] font-medium text-gray-900 truncate" title={item.name}>
                    {item.name}
                  </div>
                  <div className="text-[12px] mt-1 font-mono">
                    <span
                      onClick={(e) => handleVote(idx, true, e)}
                      className="text-[#00a65a] font-semibold mr-2 hover:underline cursor-pointer"
                      title="Vote Up"
                    >
                      {item.upvotes}
                    </span>
                    <span
                      onClick={(e) => handleVote(idx, false, e)}
                      className="text-[#b4610f] hover:underline cursor-pointer"
                      title="Vote Down"
                    >
                      {item.downvotes}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Nicknames for girls and boys Box */}
      <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] overflow-hidden">
        <div className="border-b border-[#f4f4f4] px-4 py-2.5">
          <h2 className="text-[17px] font-semibold text-[#333] m-0">
            {t.nicknamesForGirlsAndBoys || "Nicknames for girls and boys"}
          </h2>
        </div>
        <div className="p-2 sm:p-2.5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1.5 sm:gap-2">
            {girlsBoys.map((item, idx) => {
              const fullLabel = `${item.name} - ${item.shortNick}`;
              const isCopied = copiedVariant === fullLabel;
              return (
                <div
                  key={item.id}
                  onClick={() => handleCopy(item.name)}
                  className={`border border-[#eeeeee] p-2 sm:p-2.5 text-center cursor-pointer transition-colors hover:border-gray-300 ${
                    isCopied ? "bg-[#b2ffb5] border-[#00a65a]" : "bg-white hover:bg-[#fbfcfd]"
                  }`}
                  title="Click to copy name"
                >
                  <div className="text-[15px] font-medium text-gray-900 truncate">
                    <Link
                      href={`/?q=${encodeURIComponent(item.name)}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onSelectName) onSelectName(item.name);
                      }}
                      title={`Nicknames and gamer tags for ${item.name}`}
                      className="text-[#2c6da5] font-semibold hover:underline"
                    >
                      {item.name}
                    </Link>
                    <span className="text-gray-600"> - {item.shortNick}</span>
                  </div>
                  <div className="text-[12px] mt-1 font-mono">
                    <span
                      onClick={(e) => handleVoteGb(idx, true, e)}
                      className="text-[#00a65a] font-semibold mr-2 hover:underline cursor-pointer"
                      title="Vote Up"
                    >
                      {item.upvotes}
                    </span>
                    <span
                      onClick={(e) => handleVoteGb(idx, false, e)}
                      className="text-[#b4610f] hover:underline cursor-pointer"
                      title="Vote Down"
                    >
                      {item.downvotes}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mid-page Action Buttons */}
      <div className="my-5 space-y-2">
        <Link
          href="/stylish-text"
          title="Browse random stylish nicknames"
          className="w-full block rounded-full border border-[#1c4cab] bg-white py-2 text-center text-[15px] font-medium text-[#1c4cab] shadow-sm hover:bg-blue-50 transition-colors cursor-pointer"
        >
          {t.randomPage}
        </Link>
        <Link
          href="/?q=Arbaz"
          onClick={() => onSelectName && onSelectName("Arbaz")}
          title="Username generator for Arbaz – stylish names, fonts & symbols"
          className="w-full block rounded-full border border-[#1c4cab] bg-white py-2 px-3 text-center text-[15px] font-medium text-[#1c4cab] shadow-sm hover:bg-blue-50 transition-colors cursor-pointer truncate"
        >
          Arbaz: ꧁༺ÅRßAZ༻꧂, ꧁༺₳RBAZ༻꧂... &gt;&gt;
        </Link>
      </div>

      {/* Popular pages Box */}
      <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] overflow-hidden">
        <div className="border-b border-[#f4f4f4] px-4 py-2.5">
          <h2 className="text-[17px] font-semibold text-[#333] m-0">
            {t.popularPages || "Popular pages"}
          </h2>
        </div>
        <div className="p-2 sm:p-2.5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1.5 sm:gap-2">
            {POPULAR_PAGES.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectName && onSelectName(item.title)}
                className="border border-[#eeeeee] p-2.5 text-center cursor-pointer transition-colors hover:bg-[#fbfcfd] hover:border-gray-300"
              >
                <div className="text-[15px] font-semibold text-[#2c6da5] hover:underline">
                  <Link
                    href={`/?q=${encodeURIComponent(item.title)}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onSelectName) onSelectName(item.title);
                    }}
                    title={`Nicknames and stylish fonts for ${item.title}`}
                    className="hover:underline"
                  >
                    {item.title}
                  </Link> &nbsp;
                  <span className="text-[11px] font-normal text-gray-500">{item.stars}</span>
                  <span className="text-[#f39c12] text-xs">★</span>
                </div>
                <div className="text-[11px] mt-1 font-mono flex items-center justify-center gap-1.5">
                  <span className="text-[#dd4b39]" title="Votes down">{item.downvotes}</span>
                  <span className="text-[#00a65a] font-bold text-[14px]" title="Net score">{item.netScore}</span>
                  <span className="text-[#00a65a]" title="Votes up">{item.upvotes}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};
