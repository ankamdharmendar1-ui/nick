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
        <Link href="/freefire" className="text-[#0055ff] font-semibold hover:underline">
          Free Fire Nicknames
        </Link>{" "}
        and{" "}
        <Link href="/pubg-stylish-name" className="text-[#0055ff] font-semibold hover:underline">
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
        <Link href="/freefire" className="text-[#0055ff] font-medium hover:underline">
          Free Fire Tags
        </Link>{" "}
        and{" "}
        <Link href="/pubg-stylish-name" className="text-[#0055ff] font-medium hover:underline">
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

const FAQ_ITEMS_ES: FaqItem[] = [
  {
    q: "¿Cómo crear nombres para Free Fire chidos con símbolos?",
    a: (
      <span>
        Escribe tu nombre en la barra de búsqueda y nuestro generador aplica al instante más de 60 estilos de fuentes con alas (꧁꧂), coronas (亗) y símbolos especiales. Crea{" "}
        <Link href="/?q=Free Fire" className="text-[#0055ff] font-semibold hover:underline">
          nombres para Free Fire
        </Link>{" "}
        únicos y cópialo en 1 clic. También explora nuestra colección de{" "}
        <Link href="/?q=PUBG" className="text-[#0055ff] font-semibold hover:underline">
          nombres para PUBG
        </Link>
        .
      </span>
    ),
  },
  {
    q: "¿Qué son los símbolos para Free Fire y cómo usarlos?",
    a: (
      <span>
        Los <strong>símbolos para Free Fire</strong> son caracteres especiales Unicode como alas ꧁꧂, coronas 亗, estrellas ★彡 y espadas ⚔️ que puedes añadir a tu nombre en el juego. Ve a tu perfil en Free Fire → toca el ícono de lápiz junto a tu avatar → pega tu{" "}
        <Link href="/es" className="text-[#0055ff] font-semibold hover:underline">
          nombre con símbolos
        </Link>{" "}
        y confirma con 390 Diamantes o una tarjeta de cambio de nombre.
      </span>
    ),
  },
  {
    q: "¿Qué son los apodos y cómo generar uno cool?",
    a: (
      <span>
        Los <strong>apodos</strong> son nombres alternativos o nicks de juego que expresan tu personalidad. Para crear un{" "}
        <Link href="/?q=apodo" className="text-[#0055ff] font-semibold hover:underline">
          apodo chido
        </Link>
        , escribe tu nombre o palabra favorita en nuestro generador, elige el estilo de fuente que más te guste (gótica, bold, cursiva) y agrega símbolos como ꧁𝕯𝖆𝖗𝖐꧂ o ★𝐊𝐢𝐧𝐠★. ¡Cópialo en 1 clic!
      </span>
    ),
  },
  {
    q: "¿Cómo crear nombres chidos para Free Fire?",
    a: (
      <span>
        Para crear <strong>nombres chidos para Free Fire</strong>:<br />
        1. Escribe tu nombre base en el generador arriba.<br />
        2. Elige una fuente: gótica (𝕯𝖆𝖗𝖐), bold (𝐁𝐨𝐥𝐝), o script (𝒮𝓉𝓎𝓁𝑒).<br />
        3. Agrega símbolos: alas ꧁꧂, coronas 亗 o estrellas ★.<br />
        4. Copia y pégalo en Free Fire. Explora también nuestra colección de{" "}
        <Link href="/free-fire-guild-name" className="text-[#0055ff] font-semibold hover:underline">
          nombres para guild Free Fire
        </Link>
        .
      </span>
    ),
  },
  {
    q: "¿Los nombres con símbolos están permitidos en Free Fire?",
    a: (
      <span>
        Sí, al 100%. Todos los nombres generados en Nicknamegenerator.io usan glyphs Unicode oficiales que no modifican archivos del juego ni infringen las condiciones de uso de Garena. Tu cuenta queda completamente protegida. Explora también{" "}
        <Link href="/male-names" className="text-[#0055ff] font-semibold hover:underline">
          nombres masculinos
        </Link>{" "}
        y{" "}
        <Link href="/female-names" className="text-[#0055ff] font-semibold hover:underline">
          nombres femeninos
        </Link>{" "}
        para inspirarte.
      </span>
    ),
  },
  {
    q: "¿Puedo generar apodos en pareja o para clanes?",
    a: (
      <span>
        ¡Claro! Usa nuestra herramienta{" "}
        <Link href="/names-mixer" className="text-[#0055ff] font-semibold hover:underline">
          Mezcla de Nombres (Pareja)
        </Link>{" "}
        para crear <strong>apodos</strong> sincronizados para dos jugadores — estilo Rey &amp; Reina, Sombra &amp; Luz. Para guilds y clanes, visita nuestra página de{" "}
        <Link href="/free-fire-guild-name" className="text-[#0055ff] font-semibold hover:underline">
          nombres para guild Free Fire
        </Link>
        .
      </span>
    ),
  },
];

const INFO_CARDS_ES: InfoCard[] = [
  {
    icon: "flame",
    title: "Nombres para Free Fire & Apodos Chidos",
    body: (
      <span>
        Crea <strong>nombres para Free Fire</strong> y <strong>apodos chidos</strong> con más de 60 estilos de fuentes Unicode. Alas ꧁꧂, coronas 亗 y símbolos especiales para destacarte en el juego. Explora{" "}
        <Link href="/?q=Free Fire" className="text-[#0055ff] font-medium hover:underline">
          nombres Free Fire
        </Link>{" "}
        y{" "}
        <Link href="/?q=PUBG" className="text-[#0055ff] font-medium hover:underline">
          apodos PUBG
        </Link>
        .
      </span>
    ),
  },
  {
    icon: "book",
    title: "Símbolos para Free Fire & Letras Bonitas",
    body: (
      <span>
        Nuestro motor de fuentes convierte tu texto en <strong>nombre con símbolos para Free Fire</strong> con estilos góticos, bold e itálicos. Prueba tu{" "}
        <Link href="/stylish-text" className="text-[#0055ff] font-medium hover:underline">
          texto con símbolos
        </Link>{" "}
        o{" "}
        <Link href="/nickname-to-symbols" className="text-[#0055ff] font-medium hover:underline">
          nickname a símbolos
        </Link>
        .
      </span>
    ),
  },
  {
    icon: "shield",
    title: "100% Seguro y Sin Baneo",
    body: (
      <span>
        Todos los <strong>apodos</strong> y <strong>nombres para Free Fire</strong> cumplen con los términos de servicio de Garena, Krafton y Riot Games. Crea tu nombre sin riesgo. Ver{" "}
        <Link href="/male-names" className="text-[#0055ff] font-medium hover:underline">
          nombres masculinos
        </Link>{" "}
        y{" "}
        <Link href="/female-names" className="text-[#0055ff] font-medium hover:underline">
          nombres femeninos
        </Link>
        .
      </span>
    ),
  },
];

const FAQ_ITEMS_IT: FaqItem[] = [
  {
    q: "Come creare soprannomi originali per i giochi?",
    a: (
      <span>
        Scrivi il tuo nome nella barra di ricerca in alto e il nostro generatore applica istantaneamente oltre 60 stili di caratteri con ali (꧁꧂), corone (亗) e simboli speciali. Crea <strong>soprannomi</strong> unici per Fortnite, Brawl Stars, Free Fire, PUBG o Discord e copiali in 1 clic. Esplora anche la nostra raccolta di{" "}
        <Link href="/?q=Fortnite" className="text-[#0055ff] font-semibold hover:underline">
          nomi per Fortnite
        </Link>
        .
      </span>
    ),
  },
  {
    q: "Quali sono i migliori nomi per Fortnite e come ottenerli?",
    a: (
      <span>
        I migliori <strong>nomi per Fortnite</strong> combinano caratteri speciali Unicode con font gotici (𝕯𝖆𝖗𝖐), bold (𝐁𝐨𝐥𝐝) o script (𝒮𝓉𝓎𝓁𝑒) e simboli come ꧁꧂, ★彡 o 亗. Per cambiare il tuo nome su Fortnite: apri Epic Games Launcher → clicca sull&apos;avatar → &apos;Gestisci account&apos; → &apos;Informazioni personali&apos; → modifica il nome. Attenzione: puoi cambiarlo una volta ogni 14 giorni.
      </span>
    ),
  },
  {
    q: "Come creare nomi Brawl Stars fighi e originali?",
    a: (
      <span>
        Per creare <strong>nomi Brawl Stars</strong> unici:<br />
        1. Scrivi il tuo nome base nel generatore in cima alla pagina.<br />
        2. Scegli un font: gotico, bold o cursivo.<br />
        3. Aggiungi simboli: ali ꧁꧂, corone 亗 o stelle ★彡.<br />
        4. Copia e incolla nel tuo profilo Brawl Stars. Esplora anche la nostra raccolta di{" "}
        <Link href="/male-names" className="text-[#0055ff] font-semibold hover:underline">
          nomi maschili
        </Link>{" "}
        e{" "}
        <Link href="/female-names" className="text-[#0055ff] font-semibold hover:underline">
          nomi femminili
        </Link>
        .
      </span>
    ),
  },
  {
    q: "Cosa sono i nomi per Fortnite con caratteri speciali?",
    a: (
      <span>
        I <strong>nomi per Fortnite</strong> con caratteri speciali sono nickname creati con glifi Unicode ufficiali come ꧁꧂ (ali), 亗 (corona), ★彡 (stelle) e font matematici come 𝓐𝓮𝓼𝓽𝓱𝓮𝓽𝓲𝓬. Questi caratteri sono completamente compatibili con Epic Games e non violano alcun termine di servizio. Usa il nostro{" "}
        <Link href="/stylish-text" className="text-[#0055ff] font-semibold hover:underline">
          generatore di testo stilizzato
        </Link>{" "}
        per esplorare tutti i simboli disponibili.
      </span>
    ),
  },
  {
    q: "I soprannomi con simboli sono consentiti in Fortnite e Brawl Stars?",
    a: (
      <span>
        Sì, al 100%! Tutti i <strong>soprannomi</strong> generati su Nicknamegenerator.io utilizzano glifi Unicode ufficiali che non modificano i file di gioco e rispettano i termini di servizio di Epic Games (Fortnite), Supercell (Brawl Stars) e Garena (Free Fire). Il tuo account è completamente al sicuro. Crea il tuo{" "}
        <Link href="/it" className="text-[#0055ff] font-semibold hover:underline">
          soprannome
        </Link>{" "}
        senza rischi!
      </span>
    ),
  },
  {
    q: "Posso generare soprannomi di coppia o per clan?",
    a: (
      <span>
        Certamente! Usa il nostro strumento{" "}
        <Link href="/names-mixer" className="text-[#0055ff] font-semibold hover:underline">
          Miscelatore di Nomi (Coppia)
        </Link>{" "}
        per creare <strong>soprannomi</strong> sincronizzati per due giocatori — stile Re &amp; Regina, Ombra &amp; Luce. Per clan e guild, visita la nostra pagina{" "}
        <Link href="/free-fire-guild-name" className="text-[#0055ff] font-semibold hover:underline">
          nomi per guild Free Fire
        </Link>
        .
      </span>
    ),
  },
];

const INFO_CARDS_IT: InfoCard[] = [
  {
    icon: "flame",
    title: "Soprannomi & Nomi per Fortnite",
    body: (
      <span>
        Crea <strong>soprannomi</strong> e <strong>nomi per Fortnite</strong> originali con oltre 60 stili di font Unicode. Ali ꧁꧂, corone 亗 e simboli speciali per distinguerti in ogni lobby. Esplora{" "}
        <Link href="/?q=Fortnite" className="text-[#0055ff] font-medium hover:underline">
          nomi Fortnite
        </Link>{" "}
        e{" "}
        <Link href="/?q=Brawl Stars" className="text-[#0055ff] font-medium hover:underline">
          nomi Brawl Stars
        </Link>
        .
      </span>
    ),
  },
  {
    icon: "book",
    title: "Caratteri Speciali & Font Estetici",
    body: (
      <span>
        Il nostro motore di font converte il tuo testo in <strong>nomi per Fortnite</strong> con stili gotici, bold e corsivi. Prova il tuo{" "}
        <Link href="/stylish-text" className="text-[#0055ff] font-medium hover:underline">
          testo stilizzato
        </Link>{" "}
        o{" "}
        <Link href="/nickname-to-symbols" className="text-[#0055ff] font-medium hover:underline">
          nickname in simboli
        </Link>
        .
      </span>
    ),
  },
  {
    icon: "shield",
    title: "100% Sicuro e Conforme ai Termini",
    body: (
      <span>
        Tutti i <strong>soprannomi</strong> e <strong>nomi Brawl Stars</strong> rispettano i termini di Epic Games, Supercell e Garena. Gioca senza rischi. Esplora anche{" "}
        <Link href="/male-names" className="text-[#0055ff] font-medium hover:underline">
          nomi maschili
        </Link>{" "}
        e{" "}
        <Link href="/female-names" className="text-[#0055ff] font-medium hover:underline">
          nomi femminili
        </Link>
        .
      </span>
    ),
  },
];

const FAQ_ITEMS_RU: FaqItem[] = [
  {
    q: "Как создать красивые ники и символы для ников?",
    a: (
      <span>
        Напишите своё имя в поле поиска выше, и наш генератор мгновенно создаст более 60 вариантов шрифтов и добавит редкие <strong>символы для ников</strong>: крылья (꧁꧂), короны (亗), кресты (†) и японские иероглифы. Создавайте уникальные <strong>ники</strong> для PUBG Mobile, Free Fire, CS2, Standoff 2 и Discord. Нажмите на любой стиль, чтобы скопировать его в 1 клик.
      </span>
    ),
  },
  {
    q: "Где найти лучшие ники для пабга (PUBG Mobile)?",
    a: (
      <span>
        Лучшие <strong>ники для пабга</strong> сочетают агрессивные шрифты (готический, жирный Unicode) и боевые символы вроде ⚔️, ☠, 亗 или ꧁꧂. Введите основу своего тега в генератор выше и выберите идеальный вариант для профиля PUBG или клана. Также посмотрите готовые идеи на нашей странице{" "}
        <Link href="/pubg-stylish-name" className="text-[#0055ff] font-semibold hover:underline">
          ники для пабга
        </Link>
        .
      </span>
    ),
  },
  {
    q: "Как сделать стильный ник в тг (Telegram) с красивым шрифтом?",
    a: (
      <span>
        Чтобы оформить красивый <strong>ник в тг</strong>, введите своё имя или псевдоним в наш сервис, выберите эстетичный стиль или шрифт с символами, скопируйте его и вставьте в настройки профиля Telegram (Имя / О себе). Ваш <strong>ник в тг</strong> будет стильно отображаться на Android, iOS и компьютере.
      </span>
    ),
  },
  {
    q: "Какие символы для ников самые популярные в играх?",
    a: (
      <span>
        Самые популярные <strong>символы для ников</strong>: крылья ꧁༺ ༻꧂, короны 亗, кресты †, точки в круге ⊙, катакана メ, молнии ⚡ и смайлики ツ. Используйте наш{" "}
        <Link href="/stylish-text" className="text-[#0055ff] font-semibold hover:underline">
          каталог символов
        </Link>
        , чтобы найти идеальный редкий знак для своего игрового тега.
      </span>
    ),
  },
  {
    q: "Разрешены ли ники с нестандартными символами в играх?",
    a: (
      <span>
        Да, на 100%! Все <strong>ники</strong> и символы, созданные на Nicknamegenerator.io, состоят из официальных глифов стандарта Unicode. Они не используют запрещенных скриптов, не меняют файлы игры и полностью соответствуют правилам Krafton (PUBG), Garena (Free Fire) и Valve (CS2). Ваш <strong>ник</strong> будет отображаться корректно и без риска блокировки.
      </span>
    ),
  },
  {
    q: "Можно ли создать парные ники или ник для клана?",
    a: (
      <span>
        Конечно! Воспользуйтесь нашим инструментом{" "}
        <Link href="/names-mixer" className="text-[#0055ff] font-semibold hover:underline">
          Миксер имен (для пар)
        </Link>{" "}
        для генерации гармоничных парных ников (King &amp; Queen, Sun &amp; Moon), или разделом{" "}
        <Link href="/free-fire-guild-name" className="text-[#0055ff] font-semibold hover:underline">
          ники для гильдий и кланов
        </Link>
        .
      </span>
    ),
  },
];

const INFO_CARDS_RU: InfoCard[] = [
  {
    icon: "flame",
    title: "Символы для Ников & Ники для Пабга",
    body: (
      <span>
        Создавайте топовые <strong>ники для пабга</strong>, Free Fire и CS2 с крыльями ꧁꧂, коронами 亗 и спецсимволами. Выбирайте идеальные <strong>ники</strong> и копируйте в один клик. Смотрите также{" "}
        <Link href="/pubg-stylish-name" className="text-[#0055ff] font-medium hover:underline">
          ники для пабга
        </Link>{" "}
        и{" "}
        <Link href="/cool-text" className="text-[#0055ff] font-medium hover:underline">
          красивый текст
        </Link>
        .
      </span>
    ),
  },
  {
    icon: "book",
    title: "Красивый Шрифт & Ник в ТГ",
    body: (
      <span>
        Превратите стандартный текст в эстетичный <strong>ник в тг</strong>, Discord или Steam. Наш генератор шрифтов поддерживает готические, жирные и курсивные начертания. Попробуйте{" "}
        <Link href="/stylish-text" className="text-[#0055ff] font-medium hover:underline">
          символы для текста
        </Link>{" "}
        или{" "}
        <Link href="/nickname-to-symbols" className="text-[#0055ff] font-medium hover:underline">
          ник в символы
        </Link>
        .
      </span>
    ),
  },
  {
    icon: "shield",
    title: "100% Безопасно и Без Банов",
    body: (
      <span>
        Все сгенерированные <strong>ники</strong> и символы полностью совместимы с требованиями PUBG Mobile, Telegram, Garena и Valve. Создавайте крутой <strong>ник</strong> без риска для игрового профиля. Смотрите{" "}
        <Link href="/male-names" className="text-[#0055ff] font-medium hover:underline">
          мужские ники
        </Link>{" "}
        и{" "}
        <Link href="/female-names" className="text-[#0055ff] font-medium hover:underline">
          женские ники
        </Link>
        .
      </span>
    ),
  },
];

const FAQ_ITEMS_DE: FaqItem[] = [
  {
    q: "Wie erstelle ich coole Gamer Namen und Fortnite Namen mit Symbolen?",
    a: (
      <span>
        Gib einfach deinen Wunschnamen in das Suchfeld oben ein. Unser Generator erstellt sofort über 60 Schriftstile mit Flügeln (꧁꧂), Kronen (亗), Kreuzen (†) und Symbolen. Erstelle deinen perfekten <strong>Gamer Namen</strong> oder <strong>Fortnite Namen</strong> und kopiere ihn mit 1 Klick. Entdecke auch unsere{" "}
        <Link href="/cool-text" className="text-[#0055ff] font-semibold hover:underline">
          coolen Schriftarten
        </Link>
        .
      </span>
    ),
  },
  {
    q: "Welche Symbole eignen sich am besten für Zocker Namen?",
    a: (
      <span>
        Die beliebtesten Symbole für <strong>Gamer Namen</strong> sind Engelsflügel ꧁༺ ༻꧂, Kronen 亗, Fadenkreuze (x͜×) und japanische Zeichen (メ, 々). Kombiniere diese mit Fraktur- oder Fettschrift für einen unverwechselbaren <strong>Fortnite Namen</strong>. Teste sie in unserem{" "}
        <Link href="/stylish-text" className="text-[#0055ff] font-semibold hover:underline">
          Symbol-Generator
        </Link>
        .
      </span>
    ),
  },
  {
    q: "Wie ändere ich meinen Fortnite Namen auf Epic Games?",
    a: (
      <span>
        1. Kopiere deinen neuen <strong>Gamer Namen</strong> von Nicknamegenerator.io.<br />
        2. Öffne den Epic Games Launcher → Klicke auf dein Profil → &apos;Konto verwalten&apos;.<br />
        3. Navigiere zu &apos;Persönliche Angaben&apos; und bearbeite deinen Anzeigenamen.<br />
        4. Füge deinen neuen Namen ein. Beachte: Du kannst deinen <strong>Fortnite Namen</strong> alle 14 Tage ändern.
      </span>
    ),
  },
  {
    q: "Was macht einen guten Nickname für Discord oder Steam aus?",
    a: (
      <span>
        Ein starker <strong>Nickname</strong> ist kurz, einprägsam und hebt sich optisch ab. Durch Unicode-Buchstaben wie 𝕾𝖍𝖆𝖉𝖔𝖜 oder 𝓚𝓲𝓷𝓰 wirkt dein Profil professionell. Finde Inspiration in unseren{" "}
        <Link href="/male-names" className="text-[#0055ff] font-semibold hover:underline">
          männlichen Namen
        </Link>{" "}
        oder{" "}
        <Link href="/female-names" className="text-[#0055ff] font-semibold hover:underline">
          weiblichen Namen
        </Link>
        .
      </span>
    ),
  },
  {
    q: "Sind Schriftarten und Symbole in Fortnite & PUBG erlaubt?",
    a: (
      <span>
        Ja, absolut! Alle von Nicknamegenerator.io erstellten <strong>Gamer Namen</strong> basieren auf offiziellen Unicode-Zeichen. Sie verändern keine Spieldateien und entsprechen zu 100% den Nutzungsbedingungen von Epic Games, Krafton und Valve.
      </span>
    ),
  },
  {
    q: "Kann ich Duo-Namen oder Clan-Tags erstellen?",
    a: (
      <span>
        Natürlich! Nutze unseren{" "}
        <Link href="/names-mixer" className="text-[#0055ff] font-semibold hover:underline">
          Namen-Mixer
        </Link>{" "}
        für harmonische Duo-Tags (King &amp; Queen) oder entdecke Ideen für Clans auf unserer{" "}
        <Link href="/free-fire-guild-name" className="text-[#0055ff] font-semibold hover:underline">
          Clan-Namen-Seite
        </Link>
        .
      </span>
    ),
  },
];

const INFO_CARDS_DE: InfoCard[] = [
  {
    icon: "flame",
    title: "Gamer Namen & Fortnite Namen",
    body: (
      <span>
        Erstelle unvergessliche <strong>Gamer Namen</strong> und <strong>Fortnite Namen</strong> mit Flügeln ꧁꧂, Kronen 亗 und 60+ Schriftstilen. Finde deinen perfekten{" "}
        <Link href="/?q=Fortnite" className="text-[#0055ff] font-medium hover:underline">
          Fortnite Nickname
        </Link>
        .
      </span>
    ),
  },
  {
    icon: "book",
    title: "Unicode Schriftarten & Symbole",
    body: (
      <span>
        Unser System wandelt normalen Text in kunstvolle <strong>Zocker Namen</strong> um. Probiere unseren{" "}
        <Link href="/stylish-text" className="text-[#0055ff] font-medium hover:underline">
          Text- und Symbol-Generator
        </Link>{" "}
        oder{" "}
        <Link href="/nickname-to-symbols" className="text-[#0055ff] font-medium hover:underline">
          Name zu Symbolen
        </Link>
        .
      </span>
    ),
  },
  {
    icon: "shield",
    title: "100% Sicher & Fair Play",
    body: (
      <span>
        Alle <strong>Gamer Namen</strong> sind voll kompatibel mit Fortnite, PUBG, Discord und Steam ohne Ban-Risiko. Entdecke auch{" "}
        <Link href="/male-names" className="text-[#0055ff] font-medium hover:underline">
          Männernamen
        </Link>{" "}
        und{" "}
        <Link href="/female-names" className="text-[#0055ff] font-medium hover:underline">
          Frauennamen
        </Link>
        .
      </span>
    ),
  },
];

const FAQ_ITEMS_ID: FaqItem[] = [
  {
    q: "Bagaimana cara membuat nama FF keren dengan simbol payung atau sayap?",
    a: (
      <span>
        Ketik nama kamu pada kolom pencarian di atas. Generator kami langsung menyediakan 60+ gaya font dengan simbol payung (☂️), sayap (꧁꧂), dan mahkota (亗). Pilih <strong>nama FF keren</strong> favoritmu dan salin dengan 1 klik untuk langsung digunakan di Free Fire.
      </span>
    ),
  },
  {
    q: "Apa itu nickname FF raja buaya dan kenapa sangat viral?",
    a: (
      <span>
        <strong>Raja buaya</strong> adalah salah satu tren <strong>nickname FF</strong> paling populer di kalangan pemain Free Fire Indonesia, sering dipadukan dengan simbol sayap ꧁༺raja buaya༻꧂ atau font tebal. Kamu bisa membuat variasi nama buaya dan raja buaya dengan mudah di generator kami.
      </span>
    ),
  },
  {
    q: "Bagaimana cara membuat spasi kosong di nama Free Fire?",
    a: (
      <span>
        Gunakan karakter spasi tak terlihat (Hangul Filler U+3164). Karakter ini memungkinkan kamu membuat nama dengan spasi atau nama tanpa huruf di Free Fire. Kamu bisa langsung menyalinnya di halaman{" "}
        <Link href="/stylish-text" className="text-[#0055ff] font-semibold hover:underline">
          simbol teks keren
        </Link>{" "}
        kami.
      </span>
    ),
  },
  {
    q: "Simbol apa saja yang paling populer untuk nama FF?",
    a: (
      <span>
        Simbol paling dicari pemain FF adalah payung ☂️, sayap ꧁༺ ༻꧂, mahkota 亗, tanda silang ⚔️, dan logo apel. Padukan dengan font aesthetic untuk menghasilkan <strong>nama FF keren</strong> yang disegani musuh.
      </span>
    ),
  },
  {
    q: "Apakah nama FF dengan simbol aman dari banned?",
    a: (
      <span>
        Ya, 100% aman! Semua <strong>nickname FF</strong> dan karakter di Nicknamegenerator.io menggunakan standar resmi Unicode. Tidak ada file game yang diubah, sehingga akun Free Fire kamu tetap aman sesuai aturan Garena.
      </span>
    ),
  },
  {
    q: "Bisa membuat nama FF bucin / pasangan?",
    a: (
      <span>
        Tentu saja! Gunakan fitur{" "}
        <Link href="/names-mixer" className="text-[#0055ff] font-semibold hover:underline">
          Penggabung Nama (Duo Tags)
        </Link>{" "}
        kami untuk membuat <strong>nama FF</strong> couple yang serasi dan estetik bersama pasangan mabar kamu.
      </span>
    ),
  },
];

const INFO_CARDS_ID: InfoCard[] = [
  {
    icon: "flame",
    title: "Nama FF Keren & Nickname FF Viral",
    body: (
      <span>
        Buat <strong>nama FF keren</strong> dan <strong>nickname FF</strong> viral seperti raja buaya dengan sayap ꧁꧂ dan mahkota 亗. Cek koleksi{" "}
        <Link href="/?q=Free Fire" className="text-[#0055ff] font-medium hover:underline">
          nama Free Fire
        </Link>
        .
      </span>
    ),
  },
  {
    icon: "book",
    title: "Simbol Payung ☂️ & Sayap ꧁꧂",
    body: (
      <span>
        Dapatkan ribuan simbol langka untuk <strong>nama FF</strong> kamu. Coba alat{" "}
        <Link href="/stylish-text" className="text-[#0055ff] font-medium hover:underline">
          simbol teks keren
        </Link>{" "}
        atau{" "}
        <Link href="/nickname-to-symbols" className="text-[#0055ff] font-medium hover:underline">
          nama ke simbol
        </Link>
        .
      </span>
    ),
  },
  {
    icon: "shield",
    title: "100% Aman & Anti Banned",
    body: (
      <span>
        Semua <strong>nama FF keren</strong> memenuhi ketentuan resmi Garena Free Fire dan PUBG Mobile. Lihat juga koleksi{" "}
        <Link href="/male-names" className="text-[#0055ff] font-medium hover:underline">
          nama laki-laki
        </Link>{" "}
        dan{" "}
        <Link href="/female-names" className="text-[#0055ff] font-medium hover:underline">
          nama perempuan
        </Link>
        .
      </span>
    ),
  },
];

const FAQ_ITEMS_HI: FaqItem[] = [
  {
    q: "फ्री फायर नेम और स्टाइलिश नाम कैसे बनाएं?",
    a: (
      <span>
        ऊपर दिए गए सर्च बॉक्स में अपना नाम लिखें। हमारा जेनरेटर तुरंत 60 से ज्यादा फॉन्ट स्टाइल और दुर्लभ प्रतीक जैसे पंख (꧁꧂), मुकुट (亗) जोड़कर शानदार <strong>फ्री फायर नेम</strong> और <strong>स्टाइलिश नाम</strong> तैयार कर देगा। 1-क्लिक में कॉपी करके गेम में पेस्ट करें।
      </span>
    ),
  },
  {
    q: "फ्री फायर में इनविजिबल स्पेस (खाली जगह) कैसे लगाएं?",
    a: (
      <span>
        गेम में अदृश्य नाम या स्पेस बनाने के लिए हांगुल फिलर (U+3164) का उपयोग होता है। आप हमारे{" "}
        <Link href="/stylish-text" className="text-[#0055ff] font-semibold hover:underline">
          स्टाइलिश टेक्स्ट प्रतीक
        </Link>{" "}
        पेज से इनविजिबल कैरेक्टर कॉपी करके अपने <strong>फ्री फायर नेम</strong> में लगा सकते हैं।
      </span>
    ),
  },
  {
    q: "स्टाइलिश नाम के लिए सबसे लोकप्रिय प्रतीक कौन से हैं?",
    a: (
      <span>
        सबसे लोकप्रिय प्रतीक पंख ꧁༺ ༻꧂, किंग क्राउन 亗, तलवार ⚔️, क्रॉस † और जापानी चिन्ह हैं। इनसे आपका <strong>निकनेम</strong> दूसरों से बिल्कुल अलग और आकर्षक दिखता है।
      </span>
    ),
  },
  {
    q: "बीजीएमआई और फ्री फायर में निकनेम कैसे बदलें?",
    a: (
      <span>
        1. Nicknamegenerator.io से अपना पसंदीदा <strong>स्टाइलिश नाम</strong> कॉपी करें।<br />
        2. गेम खोलकर अपनी प्रोफाइल पर टैप करें और एडिट (पेंसिल) आइकन पर क्लिक करें।<br />
        3. नाम के बॉक्स में पेस्ट करें और रिनेम कार्ड या डायमंड्स से सेव करें।
      </span>
    ),
  },
  {
    q: "क्या स्टाइलिश नाम गेम्स के नियमों के अनुसार सुरक्षित हैं?",
    a: (
      <span>
        हाँ, बिल्कुल 100%! हमारे द्वारा जनरेट किए गए सभी <strong>फ्री फायर नेम</strong> आधिकारिक यूनिकोड सिंबल का उपयोग करते हैं। इससे आपके अकाउंट को कोई बैन या समस्या नहीं होगी।
      </span>
    ),
  },
  {
    q: "क्या हम डुओ और कपल के लिए मैचिंग नाम बना सकते हैं?",
    a: (
      <span>
        ज़रूर! हमारे{" "}
        <Link href="/names-mixer" className="text-[#0055ff] font-semibold hover:underline">
          नाम मिक्सर
        </Link>{" "}
        टूल से दो नामों को मिलाकर कपल और स्क्वाड के लिए मैचिंग <strong>स्टाइलिश नाम</strong> बनाएं।
      </span>
    ),
  },
];

const INFO_CARDS_HI: InfoCard[] = [
  {
    icon: "flame",
    title: "फ्री फायर नेम & स्टाइलिश नाम",
    body: (
      <span>
        अपने गेमिंग कैरेक्टर के लिए बेहतरीन <strong>फ्री फायर नेम</strong> और <strong>स्टाइलिश नाम</strong> बनाएं। पंख ꧁꧂ और मुकुट 亗 के साथ। देखें{" "}
        <Link href="/?q=Free Fire" className="text-[#0055ff] font-medium hover:underline">
          फ्री फायर निकनेम
        </Link>
        .
      </span>
    ),
  },
  {
    icon: "book",
    title: "यूनिकोड प्रतीक और फॉन्ट",
    body: (
      <span>
        साधारण नाम को स्टाइलिश फोंट में बदलें। हमारा टूल देखें{" "}
        <Link href="/stylish-text" className="text-[#0055ff] font-medium hover:underline">
          स्टाइलिश टेक्स्ट प्रतीक
        </Link>{" "}
        या{" "}
        <Link href="/nickname-to-symbols" className="text-[#0055ff] font-medium hover:underline">
          उपनाम से प्रतीक
        </Link>
        .
      </span>
    ),
  },
  {
    icon: "shield",
    title: "100% सुरक्षित और कानूनी",
    body: (
      <span>
        सभी <strong>निकनेम</strong> Free Fire और BGMI के नियमों का पालन करते हैं। देखें{" "}
        <Link href="/male-names" className="text-[#0055ff] font-medium hover:underline">
          लड़कों के नाम
        </Link>{" "}
        और{" "}
        <Link href="/female-names" className="text-[#0055ff] font-medium hover:underline">
          लड़कियों के नाम
        </Link>
        .
      </span>
    ),
  },
];

const FAQ_ITEMS_TR: FaqItem[] = [
  {
    q: "En iyi PUBG isimleri ve şekilli nickler nasıl oluşturulur?",
    a: (
      <span>
        Arama çubuğuna adınızı girin ve sistemimiz anında 60&apos;tan fazla fontla kanatlar (꧁꧂), taçlar (亗) ve havalı simgeler eklesin. En popüler <strong>PUBG isimleri</strong> ve <strong>şekilli nick</strong> çeşitlerini 1 tıkla kopyalayıp oyununuza ekleyin.
      </span>
    ),
  },
  {
    q: "Nulls Brawl şekilli nick nasıl yazılır?",
    a: (
      <span>
        <strong>Nulls Brawl şekilli nick</strong> yazmak için yukarıdaki arama kutusuna adınızı yazın, gotik veya kalın yazı tiplerini seçin ve sembollerle süsleyin. Nulls Brawl ve Brawl Stars ile %100 uyumlu şekilli isimler oluşturun.
      </span>
    ),
  },
  {
    q: "Brawl Stars isim önerileri ve havalı isimler nelerdir?",
    a: (
      <span>
        Brawl Stars için en çok tercih edilenler: ★Kral★, ꧁༺Pro༻꧂, 亗Dark亗 ve renkli özel sembollerdir. Koleksiyonumuzdaki{" "}
        <Link href="/pubg-stylish-name" className="text-[#0055ff] font-semibold hover:underline">
          havalı isim önerilerini
        </Link>{" "}
        inceleyebilirsiniz.
      </span>
    ),
  },
  {
    q: "PUBG Mobile'da isim nasıl değiştirilir?",
    a: (
      <span>
        1. Beğendiğiniz <strong>PUBG ismini</strong> Nicknamegenerator.io üzerinden kopyalayın.<br />
        2. PUBG Mobile&apos;a girip Envanter → İsim Yenileme Kartı&apos;nı seçin.<br />
        3. Yeni şekilli isminizi yapıştırın ve onaylayın.
      </span>
    ),
  },
  {
    q: "Şekilli nickler oyun kurallarına uygun mu, ban sebebi mi?",
    a: (
      <span>
        Kesinlikle güvenlidir! Sitemizdeki tüm <strong>PUBG isimleri</strong> ve <strong>şekilli nickler</strong> resmi Unicode glifleri kullanır. Oyun dosyalarına müdahale etmez ve ban riski taşımaz.
      </span>
    ),
  },
  {
    q: "Klan veya ikili (duo) oyun isimleri yapabilir miyim?",
    a: (
      <span>
        Evet!{" "}
        <Link href="/names-mixer" className="text-[#0055ff] font-semibold hover:underline">
          İsim Karıştırıcı
        </Link>{" "}
        aracımızla sevgiliniz veya takım arkadaşınızla uyumlu ikili nickler üretebilirsiniz. Klanlar için{" "}
        <Link href="/free-fire-guild-name" className="text-[#0055ff] font-semibold hover:underline">
          klan isimleri
        </Link>{" "}
        sayfamıza göz atın.
      </span>
    ),
  },
];

const INFO_CARDS_TR: InfoCard[] = [
  {
    icon: "flame",
    title: "PUBG İsimleri & Nulls Brawl",
    body: (
      <span>
        En havalı <strong>PUBG isimleri</strong> ve <strong>Nulls Brawl şekilli nick</strong> seçenekleri burada. Kanatlar ꧁꧂ ve taçlar 亗 ile fark yaratın. İncele:{" "}
        <Link href="/?q=PUBG" className="text-[#0055ff] font-medium hover:underline">
          PUBG isimleri
        </Link>
        .
      </span>
    ),
  },
  {
    icon: "book",
    title: "Şekilli Harfler & Semboller",
    body: (
      <span>
        İsminizi özel yazı tiplerine dönüştürün. Deneyin:{" "}
        <Link href="/stylish-text" className="text-[#0055ff] font-medium hover:underline">
          şekilli yazı sembolleri
        </Link>{" "}
        ve{" "}
        <Link href="/nickname-to-symbols" className="text-[#0055ff] font-medium hover:underline">
          takma adı sembole çevir
        </Link>
        .
      </span>
    ),
  },
  {
    icon: "shield",
    title: "%100 Güvenli & Ban Riski Yok",
    body: (
      <span>
        Tüm <strong>şekilli nickler</strong> PUBG, Nulls Brawl ve Free Fire için onaylıdır. Ayrıca göz atın:{" "}
        <Link href="/male-names" className="text-[#0055ff] font-medium hover:underline">
          erkek isimleri
        </Link>{" "}
        ve{" "}
        <Link href="/female-names" className="text-[#0055ff] font-medium hover:underline">
          kız isimleri
        </Link>
        .
      </span>
    ),
  },
];

const FAQ_ITEMS_BR: FaqItem[] = [
  {
    q: "Como criar nomes para Free Fire masculino top com símbolos?",
    a: (
      <span>
        Digite seu nome na barra de pesquisa no topo. Nosso gerador cria instantaneamente dezenas de <strong>nomes para Free Fire masculino top</strong> decorados com asas (꧁꧂), coroas (亗), cruz (†) e fontes estilosas. Copie em 1 clique para colar no Free Fire.
      </span>
    ),
  },
  {
    q: "Como colocar espaço invisível no nome do Free Fire?",
    a: (
      <span>
        Para inserir espaço no seu nick do Free Fire, utilize o código de espaço invisível (Hangul Filler U+3164). Você pode copiá-lo facilmente na nossa página de{" "}
        <Link href="/stylish-text" className="text-[#0055ff] font-semibold hover:underline">
          símbolos para nicks
        </Link>{" "}
        e intercalar entre as palavras do seu <strong>nome para colocar no Free Fire</strong>.
      </span>
    ),
  },
  {
    q: "Quais são os melhores nomes para colocar no Free Fire?",
    a: (
      <span>
        Os melhores <strong>nomes para colocar no Free Fire</strong> combinam letras personalizadas góticas ou em negrito com símbolos imponentes como ꧁𝕾𝖍𝖆𝖉𝖔𝖜꧂ ou 亗𝕿𝖗𝖞𝖍𝖆𝖗𝖉亗. Encontre diversas sugestões na nossa página de{" "}
        <Link href="/ff-name-style" className="text-[#0055ff] font-semibold hover:underline">
          estilos de nomes FF
        </Link>
        .
      </span>
    ),
  },
  {
    q: "Como mudar de nome no Free Fire sem perder a conta?",
    a: (
      <span>
        1. Copie seu <strong>nome para botar no Free Fire</strong> aqui no gerador.<br />
        2. Abra o Free Fire, clique no seu perfil e toque no ícone de lápis.<br />
        3. Cole o novo nick e confirme usando 800 diamantes ou um Cartão de Mudança de Nome. Suas skins, patentes e histórico permanecem intactos.
      </span>
    ),
  },
  {
    q: "Nomes com símbolos dão ban no Free Fire?",
    a: (
      <span>
        Não! Todos os <strong>nicks para Free Fire</strong> criados aqui usam glifos oficiais do padrão Unicode. Eles não modificam os arquivos do jogo e são 100% seguros de acordo com os termos da Garena.
      </span>
    ),
  },
  {
    q: "Posso criar nomes para duo e guilda no Free Fire?",
    a: (
      <span>
        Com certeza! Utilize nossa ferramenta{" "}
        <Link href="/names-mixer" className="text-[#0055ff] font-semibold hover:underline">
          Misturador de Nomes
        </Link>{" "}
        para nicks de casal (duo) ou confira nossa seção de{" "}
        <Link href="/free-fire-guild-name" className="text-[#0055ff] font-semibold hover:underline">
          nomes para guildas Free Fire
        </Link>
        .
      </span>
    ),
  },
];

const INFO_CARDS_BR: InfoCard[] = [
  {
    icon: "flame",
    title: "Nomes FF Masculino Top",
    body: (
      <span>
        Descubra <strong>nomes para Free Fire masculino top</strong> e <strong>nomes para colocar no Free Fire</strong> com asas ꧁꧂ e coroas 亗. Explore{" "}
        <Link href="/?q=Free Fire" className="text-[#0055ff] font-medium hover:underline">
          nicks Free Fire
        </Link>
        .
      </span>
    ),
  },
  {
    icon: "book",
    title: "Símbolos & Espaço Invisível",
    body: (
      <span>
        Transforme seu nick com fontes diferenciadas e espaço invisível. Experimente{" "}
        <Link href="/stylish-text" className="text-[#0055ff] font-medium hover:underline">
          símbolos e letras personalizadas
        </Link>{" "}
        ou{" "}
        <Link href="/nickname-to-symbols" className="text-[#0055ff] font-medium hover:underline">
          apelido para símbolos
        </Link>
        .
      </span>
    ),
  },
  {
    icon: "shield",
    title: "100% Seguro & Sem Ban",
    body: (
      <span>
        Todos os <strong>nicks para Free Fire</strong> são compatíveis com as diretrizes da Garena e Krafton. Veja também{" "}
        <Link href="/male-names" className="text-[#0055ff] font-medium hover:underline">
          nomes masculinos
        </Link>{" "}
        e{" "}
        <Link href="/female-names" className="text-[#0055ff] font-medium hover:underline">
          nomes femininos
        </Link>
        .
      </span>
    ),
  },
];

const FAQ_ITEMS_JP: FaqItem[] = [
  {
    q: "かっこいいニックネームや特殊文字フォントはどうやって作りますか？",
    a: (
      <span>
        上の検索バーにお好みの名前や単語を入力するだけで、自動的に60種類以上のフォントスタイルと羽（꧁꧂）、王冠（亗）、十字架（†）などの特殊文字を組み合わせた<strong>かっこいいニックネーム</strong>が生成されます。1クリックでコピー可能です。
      </span>
    ),
  },
  {
    q: "フォートナイトや荒野行動で使えるおすすめの名前記号は？",
    a: (
      <span>
        ゲームで人気なのは、羽（꧁༺ ༻꧂）、王冠（亗）、手裏剣やカタカナ記号（メ、々）、星記号（★彡）です。当サイトの{" "}
        <Link href="/stylish-text" className="text-[#0055ff] font-semibold hover:underline">
          特殊文字と記号
        </Link>{" "}
        キーボードから直接コピーできます。
      </span>
    ),
  },
  {
    q: "空白文字（透明な名前・スペース）はゲームで使えますか？",
    a: (
      <span>
        ハングルフィラー（U+3164）などの特殊文字を使用することで、ゲーム内で認識される空白スペースを作成できます。荒野行動や各種ゲームの規約に合わせてご活用ください。
      </span>
    ),
  },
  {
    q: "特殊文字を使ったニックネームはBAN対象になりますか？",
    a: (
      <span>
        いいえ、公式のUnicode標準文字のみを使用しているため、ゲームのプログラムを改変することなく安全にご利用いただけます。Apex、PUBG、フォートナイトで安心して使用可能です。
      </span>
    ),
  },
  {
    q: "ペアネームやクラン名も生成できますか？",
    a: (
      <span>
        はい！{" "}
        <Link href="/names-mixer" className="text-[#0055ff] font-semibold hover:underline">
          名前ミキサー
        </Link>{" "}
        ツールを使って2人の名前を組み合わせたペアネームや、クラン用タグを作成できます。
      </span>
    ),
  },
  {
    q: "ゲーム内での名前変更方法は？",
    a: (
      <span>
        1. 当サイトで生成した<strong>かっこいいニックネーム</strong>をコピーします。<br />
        2. ゲーム内のプロフィール設定またはアカウント管理画面を開きます。<br />
        3. 名前変更欄にペーストして保存します。
      </span>
    ),
  },
];

const INFO_CARDS_JP: InfoCard[] = [
  {
    icon: "flame",
    title: "かっこいい名前＆フォートナイト",
    body: (
      <span>
        フォートナイトやApexで際立つ<strong>かっこいいニックネーム</strong>を生成。羽 ꧁꧂ や王冠 亗 をワンクリックコピー。{" "}
        <Link href="/cool-text" className="text-[#0055ff] font-medium hover:underline">
          かっこいいフォント
        </Link>{" "}
        も確認。
      </span>
    ),
  },
  {
    icon: "book",
    title: "特殊文字フォント＆レア記号",
    body: (
      <span>
        日常のテキストをおしゃれなフォントに変換。{" "}
        <Link href="/stylish-text" className="text-[#0055ff] font-medium hover:underline">
          特殊文字と記号
        </Link>{" "}
        や{" "}
        <Link href="/nickname-to-symbols" className="text-[#0055ff] font-medium hover:underline">
          ニックネームを記号化
        </Link>{" "}
        をお試しください。
      </span>
    ),
  },
  {
    icon: "shield",
    title: "公式Unicode対応・安全安心",
    body: (
      <span>
        すべてのニックネームは規約に準拠した安全な文字です。{" "}
        <Link href="/male-names" className="text-[#0055ff] font-medium hover:underline">
          男性の名前
        </Link>{" "}
        や{" "}
        <Link href="/female-names" className="text-[#0055ff] font-medium hover:underline">
          女性の名前
        </Link>{" "}
        もご覧ください。
      </span>
    ),
  },
];

const FAQ_ITEMS_KR: FaqItem[] = [
  {
    q: "배그나 롤에서 쓸 멋진 게임 닉네임과 특수문자는 어떻게 만드나요?",
    a: (
      <span>
        상단 검색창에 이름이나 단어를 입력하면 60가지 이상의 글씨체와 날개(꧁꧂), 왕관(亗) 기호가 포함된 멋진 <strong>게임 닉네임 추천</strong> 결과를 즉시 확인할 수 있습니다. 1클릭으로 복사하여 바로 게임에 적용하세요.
      </span>
    ),
  },
  {
    q: "배틀그라운드(배그) 추천 닉네임과 인기 기호는 무엇인가요?",
    a: (
      <span>
        배그에서 인기 있는 <strong>특수문자 닉네임</strong> 스타일은 ꧁༺닉네임༻꧂, 亗포스亗, x͜× 조준선 스타일입니다. 당사의{" "}
        <Link href="/stylish-text" className="text-[#0055ff] font-semibold hover:underline">
          특수문자 및 기호
        </Link>{" "}
        모음에서 다양한 조합을 시도해보세요.
      </span>
    ),
  },
  {
    q: "닉네임에 투명 공백(한글 채움 문자)을 넣으려면 어떻게 하나요?",
    a: (
      <span>
        한글 채움 문자(Hangul Filler U+3164)를 사용하면 글자 사이에 공백을 주거나 투명 닉네임을 만들 수 있습니다. 당사의 기호 키보드에서 바로 복사하여 사용할 수 있습니다.
      </span>
    ),
  },
  {
    q: "특수문자 닉네임을 사용하면 게임 정지(밴) 위험이 있나요?",
    a: (
      <span>
        아닙니다! Nicknamegenerator.io에서 생성되는 모든 닉네임은 국제 표준 유니코드 문자만을 사용하므로 게임 클라이언트를 변조하지 않으며, 넥슨, 크래프톤, 라이엇 게임즈의 운영 정책을 준수합니다.
      </span>
    ),
  },
  {
    q: "커플 닉네임이나 클랜 태그도 만들 수 있나요?",
    a: (
      <span>
        네!{" "}
        <Link href="/names-mixer" className="text-[#0055ff] font-semibold hover:underline">
          이름 믹서
        </Link>{" "}
        기능을 활용하면 두 사람의 이름을 조합한 감성 커플 닉네임을 만들 수 있습니다.
      </span>
    ),
  },
  {
    q: "게임 닉네임 변경 방법은 어떻게 되나요?",
    a: (
      <span>
        1. 생성된 <strong>게임 닉네임</strong>을 클릭하여 복사합니다.<br />
        2. 배그, 롤, 발로란트 게임 내 상점 또는 프로필에서 닉네임 변경권을 사용합니다.<br />
        3. 복사한 특수문자 닉네임을 붙여넣고 확인을 누릅니다.
      </span>
    ),
  },
];

const INFO_CARDS_KR: InfoCard[] = [
  {
    icon: "flame",
    title: "게임 닉네임 추천 & 배그 닉네임",
    body: (
      <span>
        배틀그라운드, 발로란트, 롤에서 돋보이는 <strong>게임 닉네임 추천</strong>. 날개 ꧁꧂와 왕관 亗 기호 포함.{" "}
        <Link href="/cool-text" className="text-[#0055ff] font-medium hover:underline">
          멋진 텍스트 폰트
        </Link>{" "}
        확인.
      </span>
    ),
  },
  {
    icon: "book",
    title: "특수문자 닉네임 & 폰트 생성",
    body: (
      <span>
        평범한 텍스트를 감성 폰트로 변환하세요.{" "}
        <Link href="/stylish-text" className="text-[#0055ff] font-medium hover:underline">
          특수문자 및 기호
        </Link>{" "}
        또는{" "}
        <Link href="/nickname-to-symbols" className="text-[#0055ff] font-medium hover:underline">
          닉네임을 기호로
        </Link>{" "}
        사용.
      </span>
    ),
  },
  {
    icon: "shield",
    title: "100% 안전 & 공식 유니코드",
    body: (
      <span>
        모든 <strong>특수문자 닉네임</strong>은 정지 위험 없는 표준 글자입니다.{" "}
        <Link href="/male-names" className="text-[#0055ff] font-medium hover:underline">
          남자 이름
        </Link>{" "}
        및{" "}
        <Link href="/female-names" className="text-[#0055ff] font-medium hover:underline">
          여자 이름
        </Link>{" "}
        참고.
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
  const isES = lang === "ES";
  const isIT = lang === "IT";
  const isRU = lang === "RU";
  const isDE = lang === "DE";
  const isID = lang === "ID";
  const isHI = lang === "HI";
  const isTR = lang === "TR";
  const isBR = lang === "BR";
  const isJP = lang === "JP";
  const isKR = lang === "KR";

  const faqItems = isFR
    ? FAQ_ITEMS_FR
    : isES
    ? FAQ_ITEMS_ES
    : isIT
    ? FAQ_ITEMS_IT
    : isRU
    ? FAQ_ITEMS_RU
    : isDE
    ? FAQ_ITEMS_DE
    : isID
    ? FAQ_ITEMS_ID
    : isHI
    ? FAQ_ITEMS_HI
    : isTR
    ? FAQ_ITEMS_TR
    : isBR
    ? FAQ_ITEMS_BR
    : isJP
    ? FAQ_ITEMS_JP
    : isKR
    ? FAQ_ITEMS_KR
    : FAQ_ITEMS_EN;

  const infoCards = isFR
    ? INFO_CARDS_FR
    : isES
    ? INFO_CARDS_ES
    : isIT
    ? INFO_CARDS_IT
    : isRU
    ? INFO_CARDS_RU
    : isDE
    ? INFO_CARDS_DE
    : isID
    ? INFO_CARDS_ID
    : isHI
    ? INFO_CARDS_HI
    : isTR
    ? INFO_CARDS_TR
    : isBR
    ? INFO_CARDS_BR
    : isJP
    ? INFO_CARDS_JP
    : isKR
    ? INFO_CARDS_KR
    : INFO_CARDS_EN;

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

  const gotQuestionsLabel = isFR
    ? "Vous avez des questions ?"
    : isES
    ? "¿Tienes preguntas?"
    : isIT
    ? "Hai domande?"
    : isRU
    ? "Есть вопросы?"
    : isDE
    ? "Hast du Fragen?"
    : isID
    ? "Ada pertanyaan?"
    : isHI
    ? "कोई प्रश्न हैं?"
    : isTR
    ? "Sorularınız mı var?"
    : isBR
    ? "Dúvidas frequentes?"
    : isJP
    ? "よくある質問"
    : isKR
    ? "자주 묻는 질문"
    : "Got Questions?";

  const faqHeading = isFR
    ? "Questions Fréquentes sur les Pseudos Stylés"
    : isES
    ? "Preguntas Frecuentes sobre Apodos y Nombres Free Fire"
    : isIT
    ? "Domande Frequenti su Soprannomi e Nomi per Fortnite"
    : isRU
    ? "Часто задаваемые вопросы: Символы для ников и ники для игр"
    : isDE
    ? "Häufige Fragen zu Gamer Namen & Fortnite Namen"
    : isID
    ? "Pertanyaan Umum Seputar Nama FF Keren & Nickname FF"
    : isHI
    ? "अक्सर पूछे जाने वाले सवाल: फ्री फायर नेम & स्टाइलिश नाम"
    : isTR
    ? "Sıkça Sorulan Sorular: PUBG İsimleri & Şekilli Nick"
    : isBR
    ? "Perguntas Frequentes sobre Nomes para Free Fire"
    : isJP
    ? "よくある質問：かっこいいニックネームと特殊文字"
    : isKR
    ? "자주 묻는 질문: 게임 닉네임 추천 & 특수문자 닉네임"
    : "Frequently Asked Questions & Naming Tips";

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
            <span>{gotQuestionsLabel}</span>
          </div>
          <h3 className="mt-1 text-base sm:text-lg font-bold text-[#1e293b]">
            {faqHeading}
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
