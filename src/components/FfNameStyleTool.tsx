"use client";

import { useMemo, useState } from "react";
import { generateAllStyles } from "@/lib/fontTransforms";

const DECORATIONS = [
  (name: string) => `꧁${name}꧂`,
  (name: string) => `亗 ${name} 亗`,
  (name: string) => `×͜× ${name} ×͜×`,
  (name: string) => `『${name}』`,
  (name: string) => `⚡${name}⚡`,
  (name: string) => `᭄${name}࿐`,
];

export default function FfNameStyleTool() {
  const [name, setName] = useState("Shadow");
  const [copied, setCopied] = useState<string | null>(null);
  const styles = useMemo(() => {
    const source = name.trim() || "Shadow";
    const fonts = generateAllStyles(source).slice(0, 18).map((item) => item.styled);
    return [...DECORATIONS.map((decorate) => decorate(source)), ...fonts];
  }, [name]);

  const copy = (value: string) => {
    navigator.clipboard.writeText(value);
    setCopied(value);
    window.setTimeout(() => setCopied((current) => current === value ? null : current), 1800);
  };

  return (
    <section className="rounded-[3px] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] bg-white shadow-sm">
      <div className="border-b border-[#f4f4f4] px-4 py-3">
        <h2 className="text-[18px] font-semibold text-[#333]">FF Name Style Generator</h2>
        <p className="mt-1 text-sm text-gray-600">Enter a name to create copy-ready Free Fire style ideas.</p>
      </div>
      <div className="p-4">
        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            maxLength={20}
            placeholder="Enter your Free Fire name"
            className="flex-1 rounded-[2px] border border-[#d2d6de] px-3 py-2.5 text-base font-semibold text-gray-800 focus:border-[#3c8dbc] focus:outline-none"
          />
          <button onClick={() => setName("Legend")} className="rounded-[2px] bg-[#3c8dbc] px-4 py-2 text-sm font-semibold text-white hover:bg-[#367fa9]">Try example</button>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {styles.map((style) => (
            <button key={style} onClick={() => copy(style)} className="flex items-center justify-between gap-3 rounded border border-[#e5e7eb] px-3 py-2.5 text-left hover:border-[#3c8dbc] hover:bg-[#f8fafd]">
              <span className="min-w-0 truncate font-mono text-sm text-[#222]">{style}</span>
              <span className={`shrink-0 rounded px-2 py-0.5 text-[11px] font-semibold ${copied === style ? "bg-[#00a65a] text-white" : "bg-[#e8f4fd] text-[#2c6da5]"}`}>{copied === style ? "Copied" : "Copy"}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
