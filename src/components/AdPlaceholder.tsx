import React from "react";

interface AdPlaceholderProps {
  slotType: "leaderboard" | "infeed" | "rectangle" | "sticky-bottom";
  className?: string;
}

export const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ slotType, className = "" }) => {
  // Dimensions according to standard IAB / Google AdSense formats
  let dimensions = "h-24 max-w-[728px]"; // Leaderboard 728x90
  let label = "Leaderboard Ad (728x90)";

  if (slotType === "infeed") {
    dimensions = "h-32 max-w-2xl";
    label = "Native In-Feed Ad Unit";
  } else if (slotType === "rectangle") {
    dimensions = "h-[250px] w-[300px]";
    label = "Medium Rectangle (300x250)";
  } else if (slotType === "sticky-bottom") {
    dimensions = "h-14 w-full";
    label = "Mobile Anchor Ad (320x50)";
  }

  return (
    <aside
      aria-label="Advertisement"
      className={`mx-auto my-6 flex flex-col items-center justify-center rounded-xl border border-dashed border-zinc-800/80 bg-zinc-900/40 p-2 text-center transition-colors hover:border-zinc-700 ${dimensions} ${className}`}
    >
      <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
        Advertisement
      </span>
      <div className="flex items-center gap-1.5 text-xs text-zinc-400 mt-0.5">
        <span>{label}</span>
      </div>
      {/* 
        When your Google AdSense is approved, insert your <ins class="adsbygoogle" ...> tag here.
        Example:
        <ins className="adsbygoogle"
             style={{ display: "block" }}
             data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
             data-ad-slot="XXXXXXXXXX"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      */}
    </aside>
  );
};
