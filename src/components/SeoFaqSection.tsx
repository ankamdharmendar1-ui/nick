"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, BookOpen, ShieldCheck, Flame } from "lucide-react";

interface FaqItem {
  q: string;
  a: React.ReactNode;
}

const FAQ_ITEMS_EN: FaqItem[] = [
  {
    q: "How do I create a stylish nickname for Free Fire, PUBG, or BGMI?",
    a: (
      <span>
        Type your desired gamertag into the generator bar above. Nicknamegenerator.io instantly renders over 60+ font styles decorated with wings (꧁༺ ༻꧂), apex crowns (亗), crosses (†), and Japanese kanji (メ, 々). You can also test your tags on our{" "}
        <Link href="/cool-text" className="text-[#0055ff] font-semibold hover:underline">
          Cool Text Generator
        </Link>{" "}
        or explore our{" "}
        <Link href="/?q=Freefire" className="text-[#0055ff] font-semibold hover:underline">
          Free Fire Nicknames
        </Link>{" "}
        and{" "}
        <Link href="/?q=PUBG" className="text-[#0055ff] font-semibold hover:underline">
          PUBG Name Ideas
        </Link>
        . Click any design to copy it directly to your clipboard.
      </span>
    ),
  },
  {
    q: "What is the invisible space symbol in Free Fire (Hangul Filler U+3164)?",
    a: (
      <span>
        The invisible space symbol (Hangul Filler U+3164: [ㅤ]) allows players to create invisible nicknames or insert spaces where game clients normally reject regular spacebar spaces. You can copy the blank character directly from our{" "}
        <Link href="/stylish-text" className="text-[#0055ff] font-semibold hover:underline">
          Stylish text symbols
        </Link>{" "}
        keyboard or convert your text in{" "}
        <Link href="/nickname-to-symbols" className="text-[#0055ff] font-semibold hover:underline">
          Nickname to symbols
        </Link>{" "}
        to format clean, spaced-out gamer tags.
      </span>
    ),
  },
  {
    q: "Why do some symbols appear as blank boxes (□) in certain games?",
    a: (
      <span>
        Each game client uses its own internal font rendering engine. When a game font doesn't include a particular obscure Unicode character, it displays a fallback square (□). All fonts and symbols on Nicknamegenerator.io are specifically curated and pre-tested. Browse our curated{" "}
        <Link href="/male-names" className="text-[#0055ff] font-semibold hover:underline">
          Male Gamer Names
        </Link>{" "}
        and{" "}
        <Link href="/female-names" className="text-[#0055ff] font-semibold hover:underline">
          Female Aesthetic Names
        </Link>{" "}
        for 100% verified cross-platform compatibility across Free Fire, BGMI, PUBG Mobile, Valorant, Call of Duty, and Roblox.
      </span>
    ),
  },
  {
    q: "How can I change my in-game nickname without losing account progress?",
    a: (
      <span>
        1. Copy your styled name from Nicknamegenerator.io.
        <br />
        2. Open your game profile and tap the &apos;Edit / Pencil&apos; icon next to your avatar.
        <br />
        3. Paste your new nickname into the name field.
        <br />
        4. Confirm using a Name Change Card or in-game currency (e.g. 390 Diamonds in Free Fire or 1 Rename Card in PUBG Mobile). Explore our{" "}
        <Link href="/grouped-by-symbol" className="text-[#0055ff] font-semibold hover:underline">
          Grouped by Symbol directory
        </Link>{" "}
        to find matching clan initials and brackets. Your ranking, badges, skins, and stats remain 100% intact.
      </span>
    ),
  },
  {
    q: "Are stylish Unicode nicknames safe and compliant with game Terms of Service?",
    a: (
      <span>
        Yes. All font variations generated on Nicknamegenerator.io utilize official Unicode mathematical and letter-like glyphs. They do not alter game memory, files, or client packets in any way. For esports organizations, you can also generate clan tags with our{" "}
        <Link href="/domain-names" className="text-[#0055ff] font-semibold hover:underline">
          Clan Domain Name Tool
        </Link>{" "}
        and secure your player logins with the{" "}
        <Link href="/password-generator" className="text-[#0055ff] font-semibold hover:underline">
          Password Generator
        </Link>
        .
      </span>
    ),
  },
  {
    q: "Can I generate matching duo and couple gamer tags?",
    a: (
      <span>
        Absolutely! Try our dedicated{" "}
        <Link href="/names-mixer" className="text-[#0055ff] font-semibold hover:underline">
          Names Mixer (Duo Tags)
        </Link>{" "}
        tool. Enter two player names, and our algorithm will produce creative, harmonized gamertags (e.g., King &amp; Queen, Shadow &amp; Light, Bonnie &amp; Clyde styles) complete with synchronized wings and aesthetic brackets.
      </span>
    ),
  },
];

const FAQ_ITEMS_FR: FaqItem[] = [
  {
    q: "Comment créer un pseudo stylé pour Fortnite ou Free Fire ?",
    a: (
      <span>
        Tapez votre pseudo dans la barre de recherche ci-dessus. Notre générateur applique instantanément plus de 60 styles de polices avec des ailes (꧁༒☬ ☬༒꧂), des couronnes (亗) et des symboles spéciaux. Créez votre{" "}
        <Link href="/fr" className="text-[#0055ff] font-semibold hover:underline">
          pseudo stylé
        </Link>{" "}
        parfait pour Fortnite, Free Fire, PUBG ou Discord en quelques secondes. Cliquez sur n&apos;importe quel design pour le copier directement dans le presse-papier.
      </span>
    ),
  },
  {
    q: "C'est quoi un pseudo tryhard et comment en créer un ?",
    a: (
      <span>
        Un <strong>pseudo tryhard</strong> est un surnom de jeu agressif, compétitif et intimidant — souvent entouré de symboles comme ꧁𝕾𝖍𝖆𝖉𝖔𝖜꧂, 亗𝕿𝖗𝖞𝕳𝖆𝖗𝖉亗 ou ☠𝐊𝐢𝐥𝐥𝐞𝐫☠. Il signale aux adversaires que vous jouez sérieusement. Utilisez notre générateur pour tester des combinaisons de{" "}
        <Link href="/?q=tryhard" className="text-[#0055ff] font-semibold hover:underline">
          pseudos tryhard
        </Link>{" "}
        et copiez le meilleur en un clic.
      </span>
    ),
  },
  {
    q: "Comment changer son nom stylé sur Fortnite ?",
    a: (
      <span>
        1. Copiez votre <strong>nom stylé</strong> depuis Nicknamegenerator.io.
        <br />
        2. Ouvrez Epic Games Launcher → cliquez sur votre avatar → &apos;Gérer le compte&apos;.
        <br />
        3. Allez dans &apos;Informations personnelles&apos; → modifiez votre nom d&apos;affichage.
        <br />
        4. Collez votre nouveau <strong>pseudo stylé</strong> et confirmez. Attention : Epic Games limite les changements de pseudo à une fois tous les 14 jours. Choisissez un <strong>nom stylé</strong> qui vous représente longtemps !
      </span>
    ),
  },
  {
    q: "Quels symboles utiliser pour un pseudo stylé impressionnant ?",
    a: (
      <span>
        Les meilleurs symboles pour un <strong>pseudo stylé</strong> sont : les ailes ꧁꧂, les couronnes 亗, les croix †✝, les étoiles ★彡, les épées ⚔️, et les caractères japonais メ々. Pour un{" "}
        <Link href="/?q=pseudo" className="text-[#0055ff] font-semibold hover:underline">
          pseudo Fortnite tryhard
        </Link>
        , associez des polices gothiques (𝕯𝖆𝖗𝖐) ou bold (𝐃𝐚𝐫𝐤) avec des bordures ꧁꧂. Explorez notre{" "}
        <Link href="/stylish-text" className="text-[#0055ff] font-semibold hover:underline">
          clavier de symboles stylés
        </Link>{" "}
        pour trouver le symbole parfait.
      </span>
    ),
  },
  {
    q: "Comment créer un pseudo Free Fire invisible ou avec espace ?",
    a: (
      <span>
        Le symbole espace invisible (Hangul Filler U+3164 : ㅤ) vous permet d&apos;insérer des espaces invisibles dans votre pseudo Free Fire. Copiez ce caractère spécial depuis notre{" "}
        <Link href="/stylish-text" className="text-[#0055ff] font-semibold hover:underline">
          page de symboles stylés
        </Link>{" "}
        et collez-le entre les mots de votre{" "}
        <Link href="/fr" className="text-[#0055ff] font-semibold hover:underline">
          nom stylé
        </Link>
        . Résultat : un pseudo élégant avec des espaces propres !
      </span>
    ),
  },
  {
    q: "Les pseudos stylés sont-ils autorisés dans les jeux ?",
    a: (
      <span>
        Oui, à 100% ! Tous les styles générés par Nicknamegenerator.io utilisent des glyphes Unicode officiels. Ils ne modifient aucun fichier du jeu et respectent les conditions d&apos;utilisation de Garena (Free Fire), Epic Games (Fortnite), Krafton (PUBG) et Riot Games. Votre compte reste totalement protégé. Créez votre{" "}
        <Link href="/fr" className="text-[#0055ff] font-semibold hover:underline">
          pseudo stylé
        </Link>{" "}
        en toute sécurité !
      </span>
    ),
  },
];

interface InfoCard {
  icon: "flame" | "book" | "shield";
  title: string;
  body: React.ReactNode;
}

const INFO_CARDS_EN: InfoCard[] = [
  {
    icon: "flame",
    title: "Top Free Fire & PUBG Styles",
    body: (
      <span>
        Discover how competitive esports players style their handles with signature wings (꧁༒☬ ☬༒꧂), apex crowns (亗), and crosshairs (x͜×). Explore our{" "}
        <Link href="/?q=Freefire" className="text-[#0055ff] font-medium hover:underline">
          Free Fire Tags
        </Link>{" "}
        and{" "}
        <Link href="/?q=PUBG" className="text-[#0055ff] font-medium hover:underline">
          PUBG Collections
        </Link>
        .
      </span>
    ),
  },
  {
    icon: "book",
    title: "Unicode Compatibility Engine",
    body: (
      <span>
        Our font engine maps standard characters to mathematical alphanumeric symbols, aesthetic small caps, and fraktur scripts. Test your handle in our{" "}
        <Link href="/stylish-text" className="text-[#0055ff] font-medium hover:underline">
          Stylish text symbols
        </Link>{" "}
        or{" "}
        <Link href="/nickname-to-symbols" className="text-[#0055ff] font-medium hover:underline">
          Nickname to symbols
        </Link>
        .
      </span>
    ),
  },
  {
    icon: "shield",
    title: "100% Fair Play & TOS Safe",
    body: (
      <span>
        All text and symbol combinations are fully compliant with publisher guidelines (Garena, Krafton, Riot Games, Valve, Roblox Corp). Check out our{" "}
        <Link href="/male-names" className="text-[#0055ff] font-medium hover:underline">
          Male Names
        </Link>{" "}
        and{" "}
        <Link href="/female-names" className="text-[#0055ff] font-medium hover:underline">
          Female Names
        </Link>
        .
      </span>
    ),
  },
];

const INFO_CARDS_FR: InfoCard[] = [
  {
    icon: "flame",
    title: "Pseudo Stylé & Pseudo Fortnite Tryhard",
    body: (
      <span>
        Créez un <strong>pseudo stylé</strong> pour Fortnite, Free Fire ou PUBG avec nos 60+ polices Unicode. Des ailes (꧁꧂), couronnes (亗) et symboles spéciaux pour un <strong>pseudo tryhard</strong> qui impressionne vos adversaires. Explorez nos{" "}
        <Link href="/?q=Fortnite" className="text-[#0055ff] font-medium hover:underline">
          pseudos Fortnite
        </Link>{" "}
        et{" "}
        <Link href="/?q=Free Fire" className="text-[#0055ff] font-medium hover:underline">
          noms Free Fire
        </Link>
        .
      </span>
    ),
  },
  {
    icon: "book",
    title: "Nom Stylé & Générateur de Pseudo",
    body: (
      <span>
        Notre moteur de polices transforme votre texte en <strong>nom stylé</strong> avec des polices gothiques, bold, italic et décoratives. Testez votre <strong>pseudo stylé</strong> dans notre{" "}
        <Link href="/stylish-text" className="text-[#0055ff] font-medium hover:underline">
          générateur de texte stylé
        </Link>{" "}
        ou{" "}
        <Link href="/nickname-to-symbols" className="text-[#0055ff] font-medium hover:underline">
          pseudo en symboles
        </Link>
        .
      </span>
    ),
  },
  {
    icon: "shield",
    title: "100% Sécurisé & Conforme aux CGU",
    body: (
      <span>
        Tous nos <strong>pseudos stylés</strong> respectent les conditions d&apos;utilisation de Garena, Epic Games, Krafton et Riot Games. Créez votre{" "}
        <Link href="/fr" className="text-[#0055ff] font-medium hover:underline">
          pseudo stylé
        </Link>{" "}
        en toute confiance. Voir aussi nos{" "}
        <Link href="/male-names" className="text-[#0055ff] font-medium hover:underline">
          prénoms masculins
        </Link>{" "}
        et{" "}
        <Link href="/female-names" className="text-[#0055ff] font-medium hover:underline">
          prénoms féminins
        </Link>
        .
      </span>
    ),
  },
];

interface SeoFaqSectionProps {
  lang?: string;
}

export const SeoFaqSection: React.FC<SeoFaqSectionProps> = ({ lang = "EN" }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const isFR = lang === "FR";
  const faqItems = isFR ? FAQ_ITEMS_FR : FAQ_ITEMS_EN;
  const infoCards = isFR ? INFO_CARDS_FR : INFO_CARDS_EN;

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const iconMap = {
    flame: <Flame className="h-5 w-5" />,
    book: <BookOpen className="h-5 w-5" />,
    shield: <ShieldCheck className="h-5 w-5" />,
  };

  const iconColorMap = {
    flame: "bg-[#0055ff]/10 text-[#0055ff]",
    book: "bg-[#00c0ef]/15 text-[#00acd6]",
    shield: "bg-[#00a65a]/10 text-[#00a65a]",
  };

  return (
    <section className="py-2">
      {/* Informational Rich Content for SEO */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 border-b border-[#e5e7eb] pb-6">
        {infoCards.map((card, i) => (
          <div key={i} className="rounded-[4px] border border-[#e2e8f0] bg-[#f8fafc] p-4 shadow-sm">
            <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${iconColorMap[card.icon]}`}>
              {iconMap[card.icon]}
            </div>
            <h3 className="mt-3 text-sm font-bold text-[#1e293b]">{card.title}</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-[#64748b]">{card.body}</p>
          </div>
        ))}
      </div>

      {/* FAQ Accordion */}
      <div className="mt-6">
        <div className="mb-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0055ff]">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>{isFR ? "Vous avez des questions ?" : "Got Questions?"}</span>
          </div>
          <h3 className="mt-1 text-base sm:text-lg font-bold text-[#1e293b]">
            {isFR
              ? "Questions Fréquentes sur les Pseudos Stylés"
              : "Frequently Asked Questions & Naming Tips"}
          </h3>
        </div>

        <div className="space-y-2">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-[3px] border border-[#e2e8f0] bg-white transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full items-center justify-between p-3.5 text-left text-xs sm:text-sm font-semibold text-[#1e293b] hover:bg-[#f8fafc] transition-colors cursor-pointer"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-[#0055ff] transition-transform duration-200 shrink-0 ml-2 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-[#f1f5f9] bg-[#fafafa] p-3.5 text-xs leading-relaxed text-[#475569] whitespace-pre-line">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
