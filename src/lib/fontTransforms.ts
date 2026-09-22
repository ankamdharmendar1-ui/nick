// Unicode Font Maps and Ornament Wrappers for nicknamegenerator.io

type FontMap = Record<string, string>;

function createMap(normalChars: string, targetChars: string[]): FontMap {
  const map: FontMap = {};
  for (let i = 0; i < normalChars.length; i++) {
    if (targetChars[i]) {
      map[normalChars[i]] = targetChars[i];
    }
  }
  return map;
}

const NORMAL_ALPHA = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

// Gothic / Fraktur
const GOTHIC_CHARS = [
  "𝔞","𝔟","𝔠","𝔡","𝔢","𝔣","𝔤","𝔥","𝔦","𝔧","𝔨","𝔩","𝔪","𝔫","𝔬","𝔭","𝔮","𝔯","𝔰","𝔱","𝔲","𝔳","𝔴","𝔵","𝔶","𝔷",
  "𝔄","𝔅","ℭ","𝔇","𝔈","𝔉","𝔊","ℌ","ℑ","𝔍","𝔎","𝔏","𝔐","𝔑","𝔒","𝔓","𝔔","ℜ","𝔖","𝔗","𝔘","𝔙","𝔚","𝔛","𝔜","ℨ",
  "0","1","2","3","4","5","6","7","8","9"
];

// Bold Fraktur
const BOLD_GOTHIC_CHARS = [
  "𝖆","𝖇","𝖈","𝖉","𝖊","𝖋","𝖌","𝖍","𝖎","𝖏","𝖐","𝖑","𝖒","𝖓","𝖔","𝖕","𝖖","𝖗","𝖘","𝖙","𝖚","𝖛","𝖜","𝖝","𝖞","𝖟",
  "𝕬","𝕭","𝕮","𝕯","𝕰","𝕱","𝕲","𝕳","𝕴","𝕵","𝕶","𝕷","𝕸","𝕹","𝕺","𝕻","𝕼","𝕽","𝕾","𝕿","𝖀","𝖁","𝖂","𝖃","𝖄","𝖅",
  "0","1","2","3","4","5","6","7","8","9"
];

// Cursive / Script
const SCRIPT_CHARS = [
  "𝒶","𝒷","𝒸","𝒹","ℯ","𝒻","ℊ","𝒽","𝒾","𝒿","𝓀","𝓁","𝓂","𝓃","ℴ","𝓅","𝓆","𝓇","𝓈","𝓉","𝓊","𝓋","𝓌","𝓍","𝓎","𝓏",
  "𝒜","ℬ","𝒞","𝒟","ℰ","ℱ","𝒢","ℋ","ℐ","𝒥","𝒦","ℒ","ℳ","𝒩","𝒪","𝒫","𝒬","ℛ","𝒮","𝒯","𝒰","𝒱","𝒲","𝒳","𝒴","𝒵",
  "0","1","2","3","4","5","6","7","8","9"
];

// Bold Script
const BOLD_SCRIPT_CHARS = [
  "𝓪","𝓫","𝓬","𝓭","𝓮","𝓯","𝓰","𝓱","𝓲","𝓳","𝓴","𝓵","𝓶","𝓷","𝓸","𝓹","𝓺","𝓻","𝓼","𝓽","𝓾","𝓿","𝔀","𝔁","𝔂","𝔃",
  "𝓐","𝓑","𝓒","𝓓","𝓔","𝓕","𝓖","𝓗","𝓘","𝓙","𝓚","𝓛","𝓜","𝓝","𝓞","𝓟","𝓠","𝓡","𝓢","𝓣","𝓤","𝓥","𝓦","𝓧","𝓨","𝓩",
  "0","1","2","3","4","5","6","7","8","9"
];

// Double Struck (Blackboard)
const DOUBLE_STRUCK_CHARS = [
  "𝕒","𝕓","𝕔","𝕕","𝕖","𝕗","𝕘","𝕙","𝕚","𝕛","𝕜","𝕝","𝕞","𝕟","𝕠","𝕡","𝕢","𝕣","𝕤","𝕥","𝕦","𝕧","𝕨","𝕩","𝕪","𝕫",
  "𝔸","𝔹","ℂ","𝔻","𝔼","𝔽","𝔾","ℍ","𝕀","𝕁","𝕂","𝕃","𝕄","ℕ","𝕆","ℙ","ℚ","ℝ","𝕊","𝕋","𝕌","𝕍","𝕎","𝕏","𝕐","ℤ",
  "𝟘","𝟙","𝟚","𝟛","𝟜","𝟝","𝟞","𝟟","𝟠","𝟡"
];

// Small Caps
const SMALL_CAPS_MAP: FontMap = {
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
  k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "s", t: "ᴛ",
  u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ",
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
  K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "s", T: "ᴛ",
  U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ"
};

// Circled / Bubble
const CIRCLED_CHARS = [
  "ⓐ","ⓑ","ⓒ","ⓓ","ⓔ","ⓕ","ⓖ","ⓗ","ⓘ","ⓙ","ⓚ","ⓛ","ⓜ","ⓝ","ⓞ","ⓟ","ⓠ","ⓡ","ⓢ","ⓣ","ⓤ","ⓥ","ⓦ","ⓧ","ⓨ","ⓩ",
  "Ⓐ","Ⓑ","Ⓒ","Ⓓ","Ⓔ","Ⓕ","Ⓖ","Ⓗ","Ⓘ","Ⓙ","Ⓚ","Ⓛ","Ⓜ","Ⓝ","Ⓞ","Ⓟ","Ⓠ","Ⓡ","Ⓢ","Ⓣ","Ⓤ","Ⓥ","Ⓦ","Ⓧ","Ⓨ","Ⓩ",
  "⓪","①","②","③","④","⑤","⑥","⑦","⑧","⑨"
];

// Inverted / Upside Down Map
const UPSIDE_DOWN_MAP: FontMap = {
  a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ", f: "ɟ", g: "ƃ", h: "ɥ", i: "ᴉ", j: "ɾ",
  k: "ʞ", l: "l", m: "ɯ", n: "u", o: "o", p: "d", q: "b", r: "ɹ", s: "s", t: "ʇ",
  u: "n", v: "ʌ", w: "ʍ", x: "x", y: "ʎ", z: "z",
  A: "∀", B: "𐐒", C: "Ɔ", D: "◖", E: "Ǝ", F: "Ⅎ", G: "⅁", H: "H", I: "I", J: "ſ",
  K: "ʞ", L: "˥", M: "W", N: "N", O: "O", P: "Ԁ", Q: "Ò", R: "ᴚ", S: "S", T: "┴",
  U: "∩", V: "Λ", W: "M", X: "X", Y: "⅄", Z: "Z",
  "0": "0", "1": "⇂", "2": "ᄅ", "3": "Ɛ", "4": "ㄣ", "5": "ϛ", "6": "9", "7": "ㄥ", "8": "8", "9": "6"
};

// Fullwidth / Aesthetic
const FULLWIDTH_CHARS = [
  "ａ","ｂ","ｃ","ｄ","ｅ","ｆ","ｇ","ｈ","ｉ","ｊ","ｋ","ｌ","ｍ","ｎ","ｏ","ｐ","ｑ","ｒ","ｓ","ｔ","ｕ","ｖ","ｗ","ｘ","ｙ","ｚ",
  "Ａ","Ｂ","Ｃ","Ｄ","Ｅ","Ｆ","Ｇ","Ｈ","Ｉ","Ｊ","Ｋ","Ｌ","Ｍ","Ｎ","Ｏ","Ｐ","Ｑ","Ｒ","Ｓ","Ｔ","Ｕ","Ｖ","Ｗ","Ｘ","Ｙ","Ｚ",
  "０","１","２","３","４","５","６","７","８","９"
];

// Monospace
const MONOSPACE_CHARS = [
  "𝚊","𝚋","𝚌","𝚍","𝚎","𝚏","𝚐","𝚑","𝚒","𝚓","𝚔","𝚕","𝚖","𝚗","𝚘","𝚙","𝚚","𝚛","𝚜","𝚝","𝚞","𝚟","𝚠","𝚡","𝚢","𝚣",
  "𝙰","𝙱","𝙲","𝙳","𝙴","𝙵","𝙶","𝙷","𝙸","𝙹","𝙺","𝙻","𝙼","𝙽","𝙾","𝙿","𝚀","𝚁","𝚂","𝚃","𝚄","𝚅","𝚆","𝚇","𝚈","𝚉",
  "𝟶","𝟷","𝟸","𝟹","𝟺","𝟻","𝟼","𝟽","𝟾","𝟿"
];

// Bold Serif
const BOLD_SERIF_CHARS = [
  "𝐚","𝐛","𝐜","𝐝","𝐞","𝐟","𝐠","𝐡","𝐢","𝐣","𝐤","𝐥","𝐦","𝐧","𝐨","𝐩","𝐪","𝐫","𝐬","𝐭","𝐮","𝐯","𝐰","𝐱","𝐲","𝐳",
  "𝐀","𝐁","𝐂","𝐃","𝐄","𝐅","𝐆","𝐇","𝐈","𝐉","𝐊","𝐋","𝐌","𝐍","𝐎","𝐏","𝐐","𝐑","𝐒","𝐓","𝐔","𝐕","𝐖","𝐗","𝐘","𝐙",
  "𝟎","𝟏","𝟐","𝟑","𝟒","𝟓","𝟔","𝟕","𝟖","𝟗"
];

// Bold Sans
const BOLD_SANS_CHARS = [
  "𝗮","𝗯","𝗰","𝗱","𝗲","𝗳","𝗴","𝗵","𝗶","𝗷","𝗸","𝗹","𝗺","𝗻","𝗼","𝗽","𝗾","𝗿","𝘀","𝘁","𝘂","𝘃","𝘄","𝘅","𝘆","𝘇",
  "𝗔","𝗕","𝗖","𝗗","𝗘","𝗙","𝗚","𝗛","𝗜","𝗝","𝗞","𝗟","𝗠","𝗡","𝗢","𝗣","𝗤","𝗥","𝗦","𝗧","𝗨","𝗩","𝗪","𝗫","𝗬","𝗭",
  "𝟬","𝟭","𝟮","𝟯","𝟰","𝟱","𝟲","𝟳","𝟴","𝟵"
];

// Italic Sans
const ITALIC_SANS_CHARS = [
  "𝘢","𝘣","𝘤","𝘥","𝘦","𝘧","𝘨","𝘩","𝘪","𝘫","𝘬","𝘭","𝘮","𝘯","𝘰","𝘱","𝘲","𝘳","𝘴","𝘵","𝘶","𝘷","𝘸","𝘹","𝘺","𝘻",
  "𝘈","𝘉","𝘊","𝘋","𝘌","𝘍","𝘎","𝘏","𝘐","𝘑","𝘒","𝘓","𝘔","𝘕","𝘖","𝘗","𝘘","𝘙","𝘚","𝘛","𝘜","𝘝","𝘞","𝘟","𝘠","𝘡",
  "0","1","2","3","4","5","6","7","8","9"
];

// Squared
const SQUARED_CHARS = [
  "🄰","🄱","🄲","🄳","🄴","🄵","🄶","🄷","🄸","🄹","🄺","🄻","🄼","🄽","🄾","🄿","🅀","🅁","🅂","🅃","🅄","🅅","🅆","🅇","🅈","🅉",
  "🄰","🄱","🄲","🄳","🄴","🄵","🄶","🄷","🄸","🄹","🄺","🄻","🄼","🄽","🄾","🄿","🅀","🅁","🅂","🅃","🅄","🅅","🅆","🅇","🅈","🅉",
  "0","1","2","3","4","5","6","7","8","9"
];

const maps = {
  gothic: createMap(NORMAL_ALPHA, GOTHIC_CHARS),
  boldGothic: createMap(NORMAL_ALPHA, BOLD_GOTHIC_CHARS),
  script: createMap(NORMAL_ALPHA, SCRIPT_CHARS),
  boldScript: createMap(NORMAL_ALPHA, BOLD_SCRIPT_CHARS),
  doubleStruck: createMap(NORMAL_ALPHA, DOUBLE_STRUCK_CHARS),
  smallCaps: SMALL_CAPS_MAP,
  circled: createMap(NORMAL_ALPHA, CIRCLED_CHARS),
  fullwidth: createMap(NORMAL_ALPHA, FULLWIDTH_CHARS),
  monospace: createMap(NORMAL_ALPHA, MONOSPACE_CHARS),
  boldSerif: createMap(NORMAL_ALPHA, BOLD_SERIF_CHARS),
  boldSans: createMap(NORMAL_ALPHA, BOLD_SANS_CHARS),
  italicSans: createMap(NORMAL_ALPHA, ITALIC_SANS_CHARS),
  squared: createMap(NORMAL_ALPHA, SQUARED_CHARS),
};

function transformWithMap(text: string, map: FontMap): string {
  return text
    .split("")
    .map((char) => map[char] || char)
    .join("");
}

export function toUpsideDown(text: string): string {
  return text
    .split("")
    .reverse()
    .map((c) => UPSIDE_DOWN_MAP[c] || c)
    .join("");
}

export function toZalgo(text: string): string {
  const zalgoUp = ["̍", "̎", "̄", "̅", "̿", "̑", "̆", "̐", "͒", "͗", "͑", "̇", "̈", "̊", "͂", "̓", "̈́", "͊", "͋", "͌", "̃", "̂", "̌"];
  const zalgoMid = ["̕", "̛", "̀", "́", "͘", "̡", "̢", "̧", "̨", "̴", "̵", "̶", "͏", "͜", "͝"];
  const zalgoDown = ["̖", "̗", "̘", "̙", "̜", "̝", "̞", "̟", "̠", "̤", "̥", "̦", "̩", "̪", "̫", "̬", "̭", "̮", "̯", "̰"];

  return text
    .split("")
    .map((c) => {
      if (c === " ") return c;
      return (
        c +
        zalgoUp[Math.floor(Math.random() * zalgoUp.length)] +
        zalgoMid[Math.floor(Math.random() * zalgoMid.length)] +
        zalgoDown[Math.floor(Math.random() * zalgoDown.length)]
      );
    })
    .join("");
}

export function toStrikethrough(text: string): string {
  return text.split("").join("̶") + "̶";
}

export function toUnderline(text: string): string {
  return text.split("").join("̲") + "̲";
}

export interface DecoratedStyle {
  id: string;
  name: string;
  category: "Gamer" | "Aesthetic" | "Fonts" | "Fancy" | "Badass";
  styled: string;
}

export const ORNAMENTS = [
  { name: "Free Fire Legendary Wings", wrap: (s: string) => `꧁༒☬${s}☬༒꧂` },
  { name: "Royal Slayer Wings", wrap: (s: string) => `꧁༺${s}༻꧂` },
  { name: "Apex Boss Crown", wrap: (s: string) => `亗『${s}』亗` },
  { name: "Tokyo Ghoul Badass", wrap: (s: string) => `x͜× ${s} ×͜x` },
  { name: "Sniper God Crosshairs", wrap: (s: string) => `⚔️ 彡${s}彡 ⚔️` },
  { name: "Aesthetic Soft Blossom", wrap: (s: string) => `✿ ${s} ࿐` },
  { name: "Vampire Shadow Katana", wrap: (s: string) => `ᜰ꙰ꦿ➢${s}々` },
  { name: "Dark Syndicate Mafia", wrap: (s: string) => `◥ᖫ${s}ᖭ◤` },
  { name: "Thunder God Bolt", wrap: (s: string) => `⚡『${s}』⚡` },
  { name: "Japanese Clan Honor", wrap: (s: string) => `メ ${s} メ` },
  { name: "Deadshot Skull", wrap: (s: string) => `☠️ ${s} ☠️` },
  { name: "Sweet Kawaii Heart", wrap: (s: string) => `♡ ᥫ᭡ ${s} ᥫ᭡ ♡` },
  { name: "Star Lord Starlight", wrap: (s: string) => `★彡[${s}]彡★` },
  { name: "Cyberpunk Glitch Border", wrap: (s: string) => `【 𝕏 】${s}【 𝕏 】` },
  { name: "Godfather Crown", wrap: (s: string) => `👑 ☬${s}☬ 👑` },
  { name: "Eternity Cross", wrap: (s: string) => `† ${s} †` },
  { name: "Ghost Assassin", wrap: (s: string) => `乂 ${s} 乂` },
  { name: "Smiley Troll Face", wrap: (s: string) => `ツ ${s} シ` },
  { name: "Diamond Emperor", wrap: (s: string) => `◈ ${s} ◈` },
  { name: "Savage Tiger Claws", wrap: (s: string) => `彡[${s}]彡` },
  { name: "Fire Dragon Breath", wrap: (s: string) => `🔥 ${s} 🔥` },
  { name: "Demon Horns", wrap: (s: string) => `😈 『${s}』 😈` },
  { name: "Cloud Nine Dreamy", wrap: (s: string) => `☁️ ˖⁺｡˚ ${s} ˚｡⁺˖ ☁️` },
  { name: "Vaporwave Spaced", wrap: (s: string) => s.split("").join("・") },
];

export function generateAllStyles(inputText: string): DecoratedStyle[] {
  const text = inputText.trim() || "ProGamer";
  const small = transformWithMap(text, maps.smallCaps);
  const gothic = transformWithMap(text, maps.gothic);
  const boldGothic = transformWithMap(text, maps.boldGothic);
  const script = transformWithMap(text, maps.script);
  const boldScript = transformWithMap(text, maps.boldScript);
  const double = transformWithMap(text, maps.doubleStruck);
  const circled = transformWithMap(text, maps.circled);
  const fullwidth = transformWithMap(text, maps.fullwidth);
  const monospace = transformWithMap(text, maps.monospace);
  const boldSerif = transformWithMap(text, maps.boldSerif);
  const boldSans = transformWithMap(text, maps.boldSans);
  const italicSans = transformWithMap(text, maps.italicSans);
  const squared = transformWithMap(text, maps.squared);

  const results: DecoratedStyle[] = [
    // 1. Pro Gamer & Battle Royale Styles
    { id: "ff-legend", name: "Free Fire Legendary", category: "Gamer", styled: `꧁༒☬${boldGothic}☬༒꧂` },
    { id: "pubg-boss", name: "PUBG/BGMI Conqueror", category: "Gamer", styled: `亗『${small}』亗` },
    { id: "demon-slayer", name: "Demon Hunter Wings", category: "Gamer", styled: `꧁༺${boldSans}༻꧂` },
    { id: "deadshot", name: "Deadshot Sniper", category: "Badass", styled: `x͜× ${boldSans} ×͜x` },
    { id: "thunder-god", name: "Thunder Sovereign", category: "Gamer", styled: `⚡『${boldGothic}』⚡` },
    { id: "katana-blade", name: "Katana Samurai", category: "Gamer", styled: `ᜰ꙰ꦿ➢${boldSans}々` },
    { id: "shadow-assassin", name: "Shadow Assassin", category: "Badass", styled: `乂 ${boldGothic} 乂` },
    { id: "dark-syndicate", name: "Dark Syndicate", category: "Badass", styled: `◥ᖫ${small}ᖭ◤` },
    { id: "skull-reaper", name: "Death Reaper", category: "Badass", styled: `☠️ ${boldGothic} ☠️` },
    { id: "clan-japan", name: "Tokyo Clan Tag", category: "Gamer", styled: `メ ${small} メ` },
    { id: "starlight-pro", name: "Star Stalker", category: "Gamer", styled: `★彡[${boldSans}]彡★` },
    { id: "troll-smile", name: "Toxic Troll", category: "Badass", styled: `ツ ${small} シ` },
    { id: "cyber-god", name: "Cyber Warlord", category: "Gamer", styled: `【 𝕏 】${boldSans}【 𝕏 】` },
    { id: "royal-crown", name: "Imperial Dynasty", category: "Gamer", styled: `👑 ☬${boldGothic}☬ 👑` },
    { id: "eternity-cross", name: "Holy Crusader", category: "Badass", styled: `† ${boldGothic} †` },

    // 2. Aesthetic & Cute Styles
    { id: "aesthetic-blossom", name: "Cherry Blossom Soft", category: "Aesthetic", styled: `✿ ${small} ࿐` },
    { id: "kawaii-heart", name: "Sweet Angelic", category: "Aesthetic", styled: `♡ ᥫ᭡ ${script} ᥫ᭡ ♡` },
    { id: "cloud-dream", name: "Dreamy Clouds", category: "Aesthetic", styled: `☁️ ˖⁺｡˚ ${script} ˚｡⁺˖ ☁️` },
    { id: "soft-fairy", name: "Pastel Fairy", category: "Aesthetic", styled: `*ੈ✩‧₊˚ ${small} ˚₊‧✩ੈ*` },
    { id: "star-glimmer", name: "Cosmic Glow", category: "Aesthetic", styled: `✨ ${script} ✨` },
    { id: "japanese-kanji", name: "Neo Tokyo Vibe", category: "Aesthetic", styled: `『鬼』${small}『神』` },
    { id: "minimal-stars", name: "Minimalist Dotted", category: "Aesthetic", styled: `★ ${small} ★` },
    { id: "heart-beat", name: "Heartbeat Melody", category: "Aesthetic", styled: `─═━┈ ${script} ┈━═─` },

    // 3. Pure Font Transformations
    { id: "font-smallcaps", name: "Small Caps (Clean)", category: "Fonts", styled: small },
    { id: "font-bold-gothic", name: "Bold Fraktur (Gothic)", category: "Fonts", styled: boldGothic },
    { id: "font-gothic", name: "Old English Fraktur", category: "Fonts", styled: gothic },
    { id: "font-bold-script", name: "Bold Cursive Script", category: "Fonts", styled: boldScript },
    { id: "font-script", name: "Fine Calligraphy", category: "Fonts", styled: script },
    { id: "font-double", name: "Double Struck (Math)", category: "Fonts", styled: double },
    { id: "font-bold-sans", name: "Heavy Sans Bold", category: "Fonts", styled: boldSans },
    { id: "font-italic-sans", name: "Speed Italic", category: "Fonts", styled: italicSans },
    { id: "font-bold-serif", name: "Editorial Serif Bold", category: "Fonts", styled: boldSerif },
    { id: "font-monospace", name: "Hacker Monospace", category: "Fonts", styled: monospace },
    { id: "font-circled", name: "Bubble Circled", category: "Fancy", styled: circled },
    { id: "font-squared", name: "Block Squared", category: "Fancy", styled: squared },
    { id: "font-fullwidth", name: "Aesthetic Spaced", category: "Fancy", styled: fullwidth },
    { id: "font-upside-down", name: "Upside Down Flip", category: "Fancy", styled: toUpsideDown(text) },
    { id: "font-strikethrough", name: "Strikethrough Slash", category: "Fancy", styled: toStrikethrough(text) },
    { id: "font-underline", name: "Cyber Underline", category: "Fancy", styled: toUnderline(text) },
    { id: "font-zalgo", name: "Glitch / Zalgo Corrupted", category: "Fancy", styled: toZalgo(text.slice(0, 15)) },

    // 4. Combined Fancy & Border Variations
    ...ORNAMENTS.map((orn, idx) => ({
      id: `ornament-${idx}`,
      name: orn.name,
      category: "Fancy" as const,
      styled: orn.wrap(small),
    })),
  ];

  return results;
}
