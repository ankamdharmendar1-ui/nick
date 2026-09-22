// SEO Structured Data (JSON-LD) for Google SERP domination

export const WEBSITE_URL = "https://www.nicknamegenerator.io";
export const WEBSITE_NAME = "NicknameGenerator.io";

export function getWebApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "NicknameGenerator.io - #1 Stylish Gamer & Aesthetic Nickname Maker",
    "url": WEBSITE_URL,
    "description": "Generate stylish nicknames, fancy text fonts, and rare symbols for Free Fire, PUBG/BGMI, Valorant, Roblox, Discord, and Instagram. Instant 1-click copy with 60+ Unicode styles.",
    "applicationCategory": "EntertainmentApplication, UtilityApplication",
    "operatingSystem": "All (Web, Android, iOS, Windows, macOS)",
    "browserRequirements": "Requires JavaScript",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
    "featureList": [
      "Instant real-time fancy text generator",
      "Free Fire and PUBG name styling with wings and crowns",
      "Rare gaming symbols and Kaomoji keyboard",
      "Clan & Squad tag generator",
      "Couple & Duo gamertag combiner",
      "Gamertag threat score and vibe analyzer",
      "1-click copy to clipboard",
    ],
  };
}

export function getFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I generate a stylish nickname for Free Fire or PUBG?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply type your desired name into the search bar at NicknameGenerator.io. The tool will instantly convert your name into 60+ cool font styles, decorated with wings (꧁༒꧂), crowns (亗), crosses (†), and Japanese kanji. Click on any name to copy it instantly to your clipboard.",
        },
      },
      {
        "@type": "Question",
        "name": "Why are some symbols not showing up in my game?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most modern games like Free Fire, PUBG Mobile, BGMI, Valorant, and Roblox support Unicode characters. However, older game versions or certain regional servers may display unsupported characters as blank boxes (□). All symbols and fonts on NicknameGenerator.io are curated and tested for maximum compatibility with top multiplayer games.",
        },
      },
      {
        "@type": "Question",
        "name": "How do I change my name in Free Fire or BGMI using this generator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "1. Generate and copy your favorite nickname on NicknameGenerator.io.\n2. Open Free Fire or BGMI and navigate to your Profile.\n3. Tap on the edit icon next to your nickname.\n4. Paste the copied stylish name into the text box and confirm using diamonds or a Name Change Card.",
        },
      },
      {
        "@type": "Question",
        "name": "Is NicknameGenerator.io free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! NicknameGenerator.io is 100% free with unlimited nickname generations, symbol copies, and clan tag creation without any sign-up or downloads required.",
        },
      },
      {
        "@type": "Question",
        "name": "Can I combine two names for couples or gaming duos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, use our built-in 'Duo & Couple Name Combiner' tab to merge two names into romantic couple tags or matching squad duo gamertags like Bonnie & Clyde, Shadow & Light, or blended hybrid names.",
        },
      },
    ],
  };
}
