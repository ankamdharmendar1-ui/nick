"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";

interface PasswordGeneratorProps {
  onCopySuccess: (text: string) => void;
}

export const PasswordGenerator: React.FC<PasswordGeneratorProps> = ({ onCopySuccess }) => {
  const [length, setLength] = useState(14);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    let chars = "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) chars += "0123456789";
    if (includeSymbols) chars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let res = "";
    for (let i = 0; i < length; i++) {
      res += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(res);
  };

  useEffect(() => {
    generatePassword();
  }, [length, includeSymbols, includeNumbers, includeUppercase]);

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    confetti({
      particleCount: 15,
      spread: 45,
      origin: { y: 0.8 },
      colors: ["#0055ff", "#00c0ef"],
    });
    onCopySuccess(password);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-[3px] border border-[#d2d6de] shadow-sm p-4 sm:p-5">
      <div className="border-b border-[#f0f0f0] pb-3 mb-4">
        <h2 className="text-[20px] font-bold text-[#222] m-0">Password &amp; PIN Generator</h2>
        <p className="text-xs text-gray-500 mt-1">
          Generate strong, secure passwords for gaming accounts, Discord, Steam, and websites.
        </p>
      </div>

      {/* Display box */}
      <div className="flex flex-col sm:flex-row gap-2 mb-6">
        <input
          type="text"
          readOnly
          value={password}
          className="flex-1 rounded-[2px] border border-[#d2d6de] bg-[#f8fafd] px-4 py-3 font-mono text-base font-bold text-gray-800 focus:outline-none"
        />
        <button
          onClick={handleCopy}
          className={`rounded-[2px] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors ${
            copied ? "bg-[#00a65a]" : "bg-[#0055ff] hover:bg-blue-700"
          }`}
        >
          {copied ? "Copied!" : "Copy Password"}
        </button>
        <button
          onClick={generatePassword}
          className="rounded-[2px] bg-[#00c0ef] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#00acd6]"
        >
          Generate New
        </button>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg bg-[#f8fafd] p-4 rounded border border-[#e2e4ea]">
        <div>
          <label className="text-xs font-semibold text-gray-600 block mb-1">
            Password Length: <span className="font-bold text-black">{length}</span>
          </label>
          <input
            type="range"
            min={8}
            max={32}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="space-y-1.5 text-xs text-gray-700">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
            />
            <span>Include Uppercase Letters (A-Z)</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            />
            <span>Include Numbers (0-9)</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
            />
            <span>Include Symbols (!@#$)</span>
          </label>
        </div>
      </div>
    </div>
  );
};
