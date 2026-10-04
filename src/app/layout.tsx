import type { Metadata } from "next";
import "./globals.css";
import { getWebApplicationSchema, getFaqSchema, getOrganizationSchema } from "@/lib/seoSchema";

export const metadata: Metadata = {
  title: "Nickname Generator: Nickname Maker & Stylish Name Writing",
  description:
    "Free online nickname generator, nickname maker, and stylish name creator. Design standout nicknames, stylish font writing, and aesthetic usernames with rare symbols for Free Fire, PUBG, Instagram, and TikTok.",
  keywords: [
    "nickname generator",
    "nickname maker",
    "name writing",
    "nickname creator",
    "stylish name writing",
    "nick name generator",
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
  authors: [{ name: "Nicknamegenerator.io Team", url: "https://www.nicknamegenerator.io/about" }],
  creator: "Nicknamegenerator.io",
  publisher: "Nicknamegenerator.io",
  metadataBase: new URL("https://www.nicknamegenerator.io"),
  alternates: {
    canonical: "https://www.nicknamegenerator.io",
  },
  openGraph: {
    title: "Nickname Generator: Nickname Maker & Stylish Name Writing",
    description:
      "Free online nickname generator, nickname maker, and stylish name creator. Design standout nicknames, stylish font writing, and aesthetic usernames with rare symbols for Free Fire, PUBG, Instagram, and TikTok.",
    url: "https://www.nicknamegenerator.io",
    siteName: "Nicknamegenerator.io",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const webAppSchema = getWebApplicationSchema();
  const faqSchema = getFaqSchema();
  const orgSchema = getOrganizationSchema();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
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
