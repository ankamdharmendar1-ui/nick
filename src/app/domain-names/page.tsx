import type { Metadata } from "next";
import { ToolPage } from "@/components/ToolPage";

export const metadata: Metadata = {
  title: "Nicknames for Domain: DOMAIN, ᴰᴼᴹᴬᴵᴺ, Domain Name Generator 🏆",
  description:
    "Username generator for Domain & gaming clans – stylish names, fonts & symbols to copy and use. Create unique domain names, tags, and handles with 1-click copy.",
  keywords: [
    "nickname domain",
    "nicknames for domain",
    "domain nicknames",
    "domain name generator",
    "gaming clan domain names",
    "username generator for domain",
  ],
  alternates: { canonical: "https://www.nicknamegenerator.io/domain-names" },
  openGraph: {
    title: "Nicknames for Domain: DOMAIN, ᴰᴼᴹᴬᴵᴺ, Domain Name Generator 🏆",
    description:
      "Username generator for Domain – stylish names, fonts & symbols to copy and use. Generate unique domain names with 1-click copy.",
    url: "https://www.nicknamegenerator.io/domain-names",
    siteName: "Nicknamegenerator.io",
    type: "website",
  },
};
export default function DomainNamesPage() {
  return <ToolPage tool="domain-names" />;
}

