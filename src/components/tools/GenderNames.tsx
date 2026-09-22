"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";

interface GenderNamesProps {
  gender: "male" | "female";
  onCopySuccess: (text: string) => void;
}

const BOY_NAMES = [
  "Alex", "Hunter", "Shadow", "Tyler", "Ethan",
  "Ryan", "Leo", "Lucas", "Aiden", "Noah",
  "Liam", "Mason", "Jack", "Logan", "Oliver"
];

const GIRL_NAMES = [
  "Emma", "Luna", "Bella", "Mia", "Sophia",
  "Chloe", "Lily", "Zoe", "Aria", "Maya",
  "Ruby", "Stella", "Ivy", "Elena", "Grace"
];

export const GenderNames: React.FC<GenderNamesProps> = ({ gender, onCopySuccess }) => {
  const [selectedName, setSelectedName] = useState(gender === "male" ? "Alex" : "Luna");
  const [copiedVariant, setCopiedVariant] = useState<string | null>(null);

  const baseNames = gender === "male" ? BOY_NAMES : GIRL_NAMES;

  // Generate stylish variants for the selected name
  const variants = [
    `꧁༺${selectedName}༻꧂`,
    gender === "male" ? `亗『${selectedName}』亗` : `✿ ${selectedName} ࿐`,
    `x͜× ${selectedName} ×͜x`,
    gender === "male" ? `⚡${selectedName}⚡` : `♡ ᥫ᭡ ${selectedName} ᥫ᭡ ♡`,
    `メ ${selectedName} メ`,
    `★彡[${selectedName}]彡★`,
    gender === "male" ? `【${selectedName}】• BOSS` : `☁️ ˖⁺｡˚ ${selectedName} ˚｡⁺˖ ☁️`,
    `† ${selectedName} †`,
    gender === "male" ? `☠️ ${selectedName} ☠️` : `*ੈ✩‧₊˚ ${selectedName} ˚₊‧✩ੈ*`,
    `ᜰ꙰ꦿ➢${selectedName}々`,
    `◈ ${selectedName} ◈`,
    `父 ${selectedName} 父`,
  ];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedVariant(text);
    confetti({
      particleCount: 15,
      spread: 45,
      origin: { y: 0.8 },
      colors: gender === "male" ? ["#0055ff", "#00c0ef"] : ["#ec4899", "#f43f5e"],
    });
    onCopySuccess(text);
    setTimeout(() => setCopiedVariant(null), 2000);
  };

  return (
    <div className="bg-white rounded-[3px] border border-[#d2d6de] shadow-sm p-4 sm:p-5">
      <div className="border-b border-[#f0f0f0] pb-3 mb-4">
        <h2 className="text-[20px] font-bold text-[#222] m-0">
          {gender === "male" ? "Stylish Male & Boy Names" : "Stylish Female & Girl Names"}
        </h2>
        <p className="text-xs text-gray-500 mt-1">
          {gender === "male"
            ? "Cool, badass gamer names and fonts for boys and men."
            : "Cute, aesthetic gamer tags and soft floral names for girls."}
        </p>
      </div>

      {/* Select base name pills */}
      <div className="mb-4">
        <span className="text-xs font-semibold text-gray-500 block mb-2 uppercase tracking-wider">
          Choose a Name:
        </span>
        <div className="flex flex-wrap gap-1.5">
          {baseNames.map((name) => (
            <button
              key={name}
              onClick={() => setSelectedName(name)}
              className={`rounded-[2px] border px-3 py-1 text-xs font-semibold transition-colors ${
                selectedName === name
                  ? "bg-[#354861] text-white border-[#354861]"
                  : "bg-white text-gray-700 border-[#d2d6de] hover:bg-gray-100"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-4">
        {variants.map((variant, idx) => {
          const isCopied = copiedVariant === variant;
          return (
            <div
              key={idx}
              onClick={() => handleCopy(variant)}
              className={`border border-[#eee] p-3 text-center cursor-pointer transition-colors bg-white hover:bg-[#fbfcfd] hover:border-blue-400 ${
                isCopied ? "bg-emerald-50 border-emerald-400" : ""
              }`}
              title="Click to copy"
            >
              <div className="text-[16px] font-medium text-gray-900 truncate" title={variant}>
                {variant}
              </div>
              <div className="text-[11px] mt-1.5 font-mono">
                <span className="text-[#00a65a] font-semibold mr-2">+{12000 + idx * 450}</span>
                <span className="text-[#b4610f]">-{800 + idx * 60}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
