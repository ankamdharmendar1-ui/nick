// Curated Nicknames Database for nicknamegenerator.io (Enriched with Top Competitive Styles)

export interface CuratedNickname {
  id: string;
  name: string;
  game: "Free Fire" | "PUBG / BGMI" | "Valorant" | "Roblox" | "Call of Duty" | "Minecraft" | "Clan" | "All";
  category: "Gamer" | "Badass" | "Aesthetic" | "Cute" | "Anime" | "Clan";
  likes: number;
  tags: string[];
}

export const PRESET_NICKNAMES: CuratedNickname[] = [
  // Top 50 Competitive Hall of Fame (Free Fire & BGMI Legends)
  { id: "top-1", name: "꧁༺₦Ї₦ℑ₳༻꧂", game: "Free Fire", category: "Gamer", likes: 8940, tags: ["ninja", "legendary", "wings"] },
  { id: "top-2", name: "༄ᶦᶰᵈ᭄✿Gᴀᴍᴇʀ࿐", game: "Free Fire", category: "Gamer", likes: 7820, tags: ["ind", "flair", "gamer"] },
  { id: "top-3", name: "×͜×ㅤ𝙰𝙻𝙾𝙽𝙴ㅤ𝙱𝙾𝚈 亗", game: "PUBG / BGMI", category: "Badass", likes: 6950, tags: ["aloneboy", "boss", "ghoul"] },
  { id: "top-4", name: "Sᴋ᭄Sᴀʙɪʀᴮᴼˢˢ", game: "Free Fire", category: "Gamer", likes: 6410, tags: ["sk", "boss", "pro"] },
  { id: "top-5", name: "『sʜʀᴋ』•ᴮᴬᴰʙᴏʏツ", game: "PUBG / BGMI", category: "Badass", likes: 5890, tags: ["badboy", "squad", "smile"] },
  { id: "top-6", name: "꧁༒☬ᤂℌ໔ℜ؏ৡ☬༒꧂", game: "Free Fire", category: "Gamer", likes: 5320, tags: ["wings", "devanagari", "royal"] },
  { id: "top-7", name: "꧁༺J꙰O꙰K꙰E꙰R꙰༻꧂", game: "All", category: "Badass", likes: 5120, tags: ["joker", "circus", "wings"] },
  { id: "top-8", name: "✿ • Q U E E N✿ᴳᴵᴿᴸ࿐", game: "All", category: "Cute", likes: 4980, tags: ["queen", "girl", "floral"] },
  { id: "top-9", name: "꧁ঔৣ☬✞𝓓𝖔𝖓✞☬ঔৣ꧂", game: "Free Fire", category: "Badass", likes: 4830, tags: ["don", "cross", "wings"] },
  { id: "top-10", name: "༺Leͥgeͣnͫd༻ᴳᵒᵈ", game: "All", category: "Gamer", likes: 4670, tags: ["legend", "god", "wings"] },
  { id: "top-11", name: "꧁⁣༒𓆩₦ł₦ℑ₳𓆪༒꧂", game: "Free Fire", category: "Gamer", likes: 4510, tags: ["ninja", "trident", "wings"] },
  { id: "top-12", name: "亗 𝚁 𝙾 𝙻 𝙴 𝚇  ☯︎", game: "PUBG / BGMI", category: "Badass", likes: 4390, tags: ["rolex", "yin-yang", "crown"] },
  { id: "top-13", name: "Dɪᴏ፝֟sᴀღ᭄", game: "All", category: "Aesthetic", likes: 4210, tags: ["diosa", "goddess", "flair"] },
  { id: "top-14", name: "𝕯𝖆𝖗𝖐 𝕬𝖓𝖌𝖊𝖑", game: "All", category: "Badass", likes: 4100, tags: ["dark", "angel", "gothic"] },
  { id: "top-15", name: "ᴹᴿメY a h M a t i  ☂️", game: "Free Fire", category: "Gamer", likes: 3990, tags: ["mr", "umbrella", "tokyo"] },
  { id: "top-16", name: "♔〘Ł€Ꮆ€ŇĐ〙♔", game: "All", category: "Gamer", likes: 3880, tags: ["crown", "legend", "bracket"] },
  { id: "top-17", name: "𖣘ᴰᵃʳᴋ᭄ꮯꮎᏼꭱꭺ🐲࿐", game: "Free Fire", category: "Badass", likes: 3750, tags: ["cobra", "dragon", "dark"] },
  { id: "top-18", name: "OPㅤㅤVICENZO√", game: "Free Fire", category: "Gamer", likes: 3620, tags: ["vicenzo", "op", "check"] },
  { id: "top-19", name: "『sᴛʀᴋ』ᴷᴺᴵᴳᴴᵀ༒࿐", game: "Free Fire", category: "Gamer", likes: 3540, tags: ["knight", "strike", "cross"] },
  { id: "top-20", name: "Ꭵ°᭄ᶫᵒᵛᵉᵧₒᵤ࿐♥", game: "All", category: "Cute", likes: 3420, tags: ["iloveyou", "heart", "flair"] },
  { id: "top-21", name: "꧁☯ℙ么ℕⅅ么☯꧂﻿", game: "All", category: "Cute", likes: 3310, tags: ["panda", "yin-yang", "wings"] },
  { id: "top-22", name: "꧁༒•TheKing•༒꧂", game: "Free Fire", category: "Gamer", likes: 3200, tags: ["king", "wings"] },
  { id: "top-23", name: "꧁࿇ÐɑʀҟƑîʀɛ࿇꧂", game: "Free Fire", category: "Badass", likes: 3150, tags: ["darkfire", "wings"] },
  { id: "top-24", name: "『ƬƘ』 ƬƦΘレ乇メ", game: "PUBG / BGMI", category: "Gamer", likes: 3080, tags: ["tk", "trolex", "bracket"] },
  { id: "top-25", name: "꧁☆☬κɪɴɢ☬☆꧂", game: "Free Fire", category: "Gamer", likes: 2990, tags: ["king", "star", "wings"] },
  { id: "top-26", name: "ƊᴏㅤσʀㅤƊɪᴇㅤ⓿❸", game: "PUBG / BGMI", category: "Badass", likes: 2920, tags: ["door-die", "squad"] },
  { id: "top-27", name: "ᴬᴷ°᭄ʜᴇʀᴏ࿐", game: "Free Fire", category: "Gamer", likes: 2860, tags: ["ak", "hero", "flair"] },
  { id: "top-28", name: "╰‿╯Sᴏʀʀʏ ʙᴀʙʏ★࿐", game: "Free Fire", category: "Badass", likes: 2790, tags: ["sorrybaby", "devil", "star"] },
  { id: "top-29", name: "꧁༺༒〖°ⓅⓇⓄ°〗༒༻꧂", game: "Free Fire", category: "Gamer", likes: 2730, tags: ["pro", "wings", "cross"] },
  { id: "top-30", name: "꧁ᶜ͢ᴿ͢ᴬ͢ᶻ͢ᵞ꧂", game: "All", category: "Badass", likes: 2680, tags: ["crazy", "arrows", "wings"] },
  { id: "top-31", name: "༄ᶦᶰᵈ᭄✿ᴮᴬᴰʙᴏʏツ", game: "Free Fire", category: "Badass", likes: 2610, tags: ["badboy", "ind", "flower"] },
  { id: "top-32", name: "Oɴʟʏㅤz!xuㅤ모 👹", game: "PUBG / BGMI", category: "Badass", likes: 2540, tags: ["demon", "korean", "oni"] },
  { id: "top-33", name: "👑🅓🅐🅝🅐🅛🅛🅞🅝🅝🅔║▌💕✿", game: "All", category: "Cute", likes: 2470, tags: ["bubble", "barcode", "crown"] },
  { id: "top-34", name: "🍭ⓢⓦⓔⓔⓣ ⓖⓘⓡⓛ✨", game: "Roblox", category: "Cute", likes: 2410, tags: ["sweetgirl", "candy", "stars"] },
  { id: "top-35", name: "ᜰ꙰ꦿ➢KiLLeR々", game: "Free Fire", category: "Badass", likes: 3105, tags: ["killer", "katana"] },
  { id: "top-36", name: "亗 M A F I A 亗", game: "PUBG / BGMI", category: "Badass", likes: 4520, tags: ["mafia", "boss"] },
  { id: "top-37", name: "◤☠ĜÖĎ ḞÃŢΉỄᏒ☠◥", game: "PUBG / BGMI", category: "Badass", likes: 3890, tags: ["godfather", "skull"] },
  { id: "top-38", name: "★彡[ᴅᴇᴀᴅ ᴋɪʟʟᴇʀ]彡★", game: "PUBG / BGMI", category: "Gamer", likes: 1890, tags: ["sniper", "killer"] },
  { id: "top-39", name: "メ S N I P E R メ", game: "PUBG / BGMI", category: "Gamer", likes: 3120, tags: ["sniper", "japan"] },
  { id: "top-40", name: "乡C O N Q U E R O R乡", game: "PUBG / BGMI", category: "Gamer", likes: 3650, tags: ["conqueror", "rank"] },

  // Valorant & Shooters
  { id: "val-1", name: "Jett Diff ツ", game: "Valorant", category: "Gamer", likes: 2890, tags: ["jett", "radiant"] },
  { id: "val-2", name: "Reyna ᥫ᭡", game: "Valorant", category: "Aesthetic", likes: 3410, tags: ["reyna", "duelist"] },
  { id: "val-3", name: "V1PER ☣️", game: "Valorant", category: "Badass", likes: 1890, tags: ["viper", "toxic"] },
  { id: "val-4", name: "Omen In The Dark 乂", game: "Valorant", category: "Badass", likes: 1650, tags: ["omen", "controller"] },
  { id: "val-5", name: "Chamber Headshot ◈", game: "Valorant", category: "Gamer", likes: 1420, tags: ["chamber", "op"] },
  { id: "val-6", name: "Miss Sage ♡", game: "Valorant", category: "Cute", likes: 2980, tags: ["sage", "healer"] },

  // Clan & Squad Tags
  { id: "cln-1", name: "【VORTEX】• SQUAD", game: "Clan", category: "Clan", likes: 2450, tags: ["esports", "bracket"] },
  { id: "cln-2", name: "«SYNDICATE»", game: "Clan", category: "Clan", likes: 1980, tags: ["mafia", "guild"] },
  { id: "cln-3", name: "⚡VALKYRIE⚡", game: "Clan", category: "Clan", likes: 3100, tags: ["valk", "thunder"] },
  { id: "cln-4", name: "『IMMORTAL』", game: "Clan", category: "Clan", likes: 2890, tags: ["immortal", "squad"] },
  { id: "cln-5", name: "メ O M E G A メ", game: "Clan", category: "Clan", likes: 2210, tags: ["omega", "tokyo"] },
  { id: "cln-6", name: "◈ BLOODLINE ◈", game: "Clan", category: "Clan", likes: 1870, tags: ["blood", "dynasty"] },
];

export const DUO_PRESETS = [
  { p1: "King 👑", p2: "Queen ♕" },
  { p1: "Sun ☀️", p2: "Moon 🌙" },
  { p1: "Shadow 乂", p2: "Light ✦" },
  { p1: "Bonnie 🔫", p2: "Clyde 💣" },
  { p1: "Yin ☯", p2: "Yang ☯" },
  { p1: "Beauty ✿", p2: "Beast 亗" },
  { p1: "Adam ⚡", p2: "Eve ᥫ᭡" },
  { p1: "Romeo ⚔️", p2: "Juliet ♡" },
  { p1: "Toxic ☣️", p2: "Antidote 💉" },
  { p1: "Fire 🔥", p2: "Ice ❄️" },
];
