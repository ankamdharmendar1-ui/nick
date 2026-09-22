"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Check } from "lucide-react";
import { DuoCombiner } from "@/components/DuoCombiner";
import { HeroGenerator } from "@/components/HeroGenerator";
import { NicknameToSymbols } from "@/components/tools/NicknameToSymbols";
import { GroupedBySymbol } from "@/components/tools/GroupedBySymbol";
import { GenderNames } from "@/components/tools/GenderNames";
import { PasswordGenerator } from "@/components/tools/PasswordGenerator";
import { DomainNameGenerator } from "@/components/tools/DomainNameGenerator";
import { NickFooter } from "@/components/NickFooter";

export type ToolId =
  | "names-mixer"
  | "nickname-to-symbols"
  | "cool-text"
  | "grouped-by-symbol"
  | "male-names"
  | "female-names"
  | "password-generator"
  | "domain-names";

type ToolDetails = { title: string; intro: string; guideTitle: string; steps: string[]; faq: { question: string; answer: string }[]; related: { label: string; href: string }[]; dark?: boolean };

const DETAILS: Record<ToolId, ToolDetails> = {
  "names-mixer": { title: "Names Mixer", intro: "Create matching names for couples, friends, squads, and gaming duos. Combine two names, then copy a coordinated duo nickname in one tap.", guideTitle: "How to Use the Names Mixer", steps: ["Enter the first name or gamertag.", "Enter the second name or gamertag.", "Choose a matching duo style and copy both names together."], faq: [{ question: "What is a names mixer?", answer: "A names mixer combines two names into matching nickname ideas for couples, friends, and gaming partners." }, { question: "Can I use these names in games?", answer: "Yes. Copy a style you like and paste it into a game, profile, or social platform that supports the characters." }], related: [{ label: "Cool Text Generator", href: "/cool-text" }, { label: "Free Fire Nicknames", href: "/freefire" }], dark: true },
  "nickname-to-symbols": { title: "Nickname to Symbols Converter", intro: "Convert a plain nickname into symbol text, leet-style characters, and decorated gaming name ideas that are ready to copy.", guideTitle: "How to Convert a Nickname to Symbols", steps: ["Type a name or nickname into the converter.", "Compare the generated symbol and leet-text styles.", "Click any result to copy it for your profile or game."], faq: [{ question: "What does a nickname to symbols converter do?", answer: "It replaces ordinary letters with creative symbols and character variants to produce distinctive nickname ideas." }, { question: "Can I customize the symbol name?", answer: "Yes. Change the input at any time to generate a new set of copy-ready variations." }], related: [{ label: "Stylish Text Generator", href: "/stylish-text" }, { label: "Nicknames by Symbol", href: "/grouped-by-symbol" }] },
  "cool-text": { title: "Cool Text Generator", intro: "Generate cool text, decorative fonts, and stylish gamer tags from any word or name. Use the live editor to create a copy-ready result.", guideTitle: "How to Make Cool Text", steps: ["Type your text into the live generator.", "Choose a font or decorative style that fits your profile.", "Copy the result and paste it into your game or social bio."], faq: [{ question: "What is cool text?", answer: "Cool text uses Unicode letters, symbols, and decorative styles to make ordinary words stand out." }, { question: "Is cool text free to copy?", answer: "Yes. Generate and copy as many text styles as you need without an account." }], related: [{ label: "Stylish Name Generator", href: "/stylish-text" }, { label: "FF Name Style", href: "/ff-name-style" }], dark: true },
  "grouped-by-symbol": { title: "Nicknames Grouped by Symbol", intro: "Browse stylish nicknames organized by popular symbols such as crowns, stars, wings, and gaming characters. Pick a symbol, explore the matching names, and copy your favorite.", guideTitle: "How to Find Nicknames by Symbol", steps: ["Select a symbol from the symbol picker.", "Browse names that use that symbol.", "Click a nickname to copy it instantly."], faq: [{ question: "Why use symbols in a nickname?", answer: "Symbols make a nickname easier to personalize and can help create a distinct visual style." }, { question: "Can I search for a specific symbol?", answer: "Choose from the featured symbol collection to see matching nickname ideas." }], related: [{ label: "Nickname to Symbols", href: "/nickname-to-symbols" }, { label: "Free Fire Nicknames", href: "/freefire" }] },
  "male-names": { title: "Stylish Male Gamer Names", intro: "Explore stylish male gamer names, cool boy nicknames, and copy-ready fonts for a game profile, social handle, or squad tag.", guideTitle: "How to Choose a Male Gamer Name", steps: ["Choose a base name from the list.", "Browse its stylish gamer-name variations.", "Copy a variation that fits your profile style."], faq: [{ question: "What makes a good male gamer name?", answer: "A good gamer name is memorable, readable, and matches the tone you want for your profile or squad." }, { question: "Can I change the selected name?", answer: "Yes. Select another base name to instantly see a new group of styled variations." }], related: [{ label: "Male and Female Names", href: "/female-names" }, { label: "Cool Text Generator", href: "/cool-text" }] },
  "female-names": { title: "Stylish Female Gamer Names", intro: "Find stylish female gamer names, aesthetic girl nicknames, and copy-ready fonts for games, social profiles, and creative handles.", guideTitle: "How to Choose a Female Gamer Name", steps: ["Choose a base name from the name list.", "Explore aesthetic and decorative variations.", "Copy your favorite style for your profile."], faq: [{ question: "What are aesthetic female gamer names?", answer: "They are creative girl-name styles that use decorative Unicode fonts, symbols, and soft visual accents." }, { question: "Can I use these names on social media?", answer: "Yes. The generated styles can be copied for supported games, profiles, bios, and usernames." }], related: [{ label: "Male Gamer Names", href: "/male-names" }, { label: "Stylish Name Generator", href: "/stylish-text" }] },
  "password-generator": { title: "Secure Password Generator", intro: "Create strong, random passwords for gaming accounts, Discord, Steam, and websites. Adjust the length and character options, then copy a new password securely.", guideTitle: "How to Generate a Secure Password", steps: ["Set the password length you need.", "Choose whether to include uppercase letters, numbers, and symbols.", "Generate a new password and copy it into a password manager."], faq: [{ question: "What makes a password strong?", answer: "Long passwords with a mix of uppercase letters, lowercase letters, numbers, and symbols are generally harder to guess." }, { question: "Should I reuse generated passwords?", answer: "No. Use a different password for every important account and store it in a trusted password manager." }], related: [{ label: "Domain Name Generator", href: "/domain-names" }, { label: "Names Mixer", href: "/names-mixer" }] },
  "domain-names": { title: "Gaming Clan Domain Name Generator", intro: "Generate brandable domain name ideas and gaming website handles for a clan, guild, esports team, or creative project.", guideTitle: "How to Generate a Gaming Domain Name", steps: ["Enter a word that represents your clan or project.", "Review the generated domain-style name ideas.", "Copy an idea, then check availability with a domain registrar before buying it."], faq: [{ question: "Does this tool check domain availability?", answer: "No. It generates naming ideas; check your preferred registrar to confirm whether a domain is available." }, { question: "What makes a good clan domain name?", answer: "Keep it short, memorable, easy to spell, and closely connected to your clan identity." }], related: [{ label: "Names Mixer", href: "/names-mixer" }, { label: "Free Fire Nicknames", href: "/freefire" }] },
};

export function ToolPage({ tool }: { tool: ToolId }) {
  const router = useRouter();
  const [toast, setToast] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const details = DETAILS[tool];
  const copied = (value: string) => {
    setToast(`Copied \"${value}\"`);
    window.setTimeout(() => setToast(null), 2500);
  };
  const content = {
    "names-mixer": <DuoCombiner onCopySuccess={copied} />,
    "nickname-to-symbols": <NicknameToSymbols onCopySuccess={copied} />,
    "cool-text": <HeroGenerator favorites={favorites} onToggleFavorite={(name) => setFavorites((items) => items.includes(name) ? items.filter((item) => item !== name) : [name, ...items])} onCopySuccess={copied} />,
    "grouped-by-symbol": <GroupedBySymbol onCopySuccess={copied} />,
    "male-names": <GenderNames gender="male" onCopySuccess={copied} />,
    "female-names": <GenderNames gender="female" onCopySuccess={copied} />,
    "password-generator": <PasswordGenerator onCopySuccess={copied} />,
    "domain-names": <DomainNameGenerator onCopySuccess={copied} />,
  }[tool];

  return (
    <div className="min-h-screen bg-[#ecf0f5] text-[#222]">
      <header className="bg-[#354861] shadow-md">
        <div className="mx-auto flex h-[50px] max-w-7xl items-center justify-between px-4">
          <Link href="/" className="text-xl font-bold tracking-tight text-white">Nicknamegenerator<span className="text-cyan-400">.io</span></Link>
          <nav className="flex gap-4 text-sm text-white"><Link href="/" className="hover:text-cyan-300">Home</Link><Link href="/stylish-text" className="hover:text-cyan-300">Stylish Text</Link><Link href="/freefire" className="hover:text-cyan-300">Free Fire</Link></nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-4 text-sm text-[#2c6da5]"><Link href="/" className="hover:underline">Home</Link><span className="mx-2 text-gray-400">/</span><span className="text-gray-600">{details.title}</span></div>
        <section className="mb-4 rounded border border-[#d2d6de] border-t-4 border-t-[#6b93c7] bg-white p-5 shadow-sm">
          <h1 className="text-2xl font-bold text-[#222]">{details.title}</h1>
          <p className="mt-2 text-sm leading-relaxed text-gray-700">{details.intro}</p>
          <button onClick={() => router.push("/")} className="mt-3 text-sm font-semibold text-[#2c6da5] hover:underline">Browse all nickname ideas</button>
        </section>
        <section className={details.dark ? "overflow-hidden rounded bg-[#09090b]" : ""}>{content}</section>
        <section className="mt-4 rounded border border-[#d2d6de] border-t-4 border-t-[#6b93c7] bg-white shadow-sm">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5"><h2 className="text-[17px] font-semibold text-[#333]">{details.guideTitle}</h2></div>
          <ol className="list-decimal space-y-2 p-5 pl-9 text-sm leading-relaxed text-gray-700">{details.steps.map((step) => <li key={step}>{step}</li>)}</ol>
        </section>
        <section className="mt-4 rounded border border-[#d2d6de] border-t-4 border-t-[#6b93c7] bg-white shadow-sm">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5"><h2 className="text-[17px] font-semibold text-[#333]">Frequently Asked Questions</h2></div>
          <div className="space-y-4 p-5 text-sm leading-relaxed text-gray-700">{details.faq.map((item) => <div key={item.question}><h3 className="font-bold text-[#354861]">{item.question}</h3><p className="mt-1">{item.answer}</p></div>)}</div>
        </section>
        <section className="mt-4 rounded border border-[#d2d6de] bg-white p-4 shadow-sm"><h2 className="text-[15px] font-semibold text-[#333]">Related Tools</h2><div className="mt-3 flex flex-wrap gap-2">{details.related.map((item) => <Link key={item.href} href={item.href} className="rounded-full border border-[#d2d6de] px-3 py-1.5 text-sm text-[#2c6da5] hover:border-[#3c8dbc] hover:bg-[#3c8dbc] hover:text-white">{item.label}</Link>)}</div></section>
      </main>
      <NickFooter />
      {toast && <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-lg border border-cyan-400/40 bg-[#354861] px-4 py-2.5 text-sm font-semibold text-white shadow-2xl"><Check className="h-4 w-4" />{toast}</div>}
    </div>
  );
}
