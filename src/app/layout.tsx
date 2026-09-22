import type { Metadata } from "next";
import "./globals.css";
import { getWebApplicationSchema, getFaqSchema } from "@/lib/seoSchema";

export const metadata: Metadata = {
  title: "Nickname Generator & Username Creator 🏆 | Nicknamegenerator.io",
  description:
    "Free online nickname generator and username creator. Design standout nicknames, stylish font styles, and aesthetic usernames with rare symbols. Built for Free Fire, PUBG, Discord, Roblox, and social media.",
  keywords: [
    "nickname generator",
    "nickname maker",
    "nicknamegenerator.io",
    "username generator",
    "stylish name for free fire",
    "pubg stylish names",
    "bgmi name generator",
    "aesthetic username generator",
    "cool text generator",
    "fancy text symbols",
    "gamer tag maker",
    "names mixer",
  ],
  authors: [{ name: "Nicknamegenerator.io Team" }],
  creator: "Nicknamegenerator.io",
  publisher: "Nicknamegenerator.io",
  metadataBase: new URL("https://www.nicknamegenerator.io"),
  alternates: {
    canonical: "https://www.nicknamegenerator.io",
  },
  openGraph: {
    title: "Nickname Generator & Username Creator 🏆 | Nicknamegenerator.io",
    description:
      "Free online nickname generator and username creator. Design standout nicknames, stylish font styles, and aesthetic usernames with rare symbols. Built for Free Fire, PUBG, Discord, Roblox, and social media.",
    url: "https://www.nicknamegenerator.io",
    siteName: "Nicknamegenerator.io",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const webAppSchema = getWebApplicationSchema();
  const faqSchema = getFaqSchema();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-screen bg-[#ecf0f5] text-[#222] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
