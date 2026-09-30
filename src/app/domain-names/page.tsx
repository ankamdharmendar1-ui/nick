import type { Metadata } from "next";
import { ToolPage } from "@/components/ToolPage";

export const metadata: Metadata = {
  title: "Nicknames for Domain: DOMAIN, DOMAIN, Domain Name Generator",
  description:
    "Username generator for Domain – stylish names, fonts & symbols to copy and use. This generator helps you quickly create usernames for Domain and gaming clans.",
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
    title: "Nicknames for Domain: DOMAIN, DOMAIN, Domain Name Generator",
    description:
      "Username generator for Domain – stylish names, fonts & symbols to copy and use. This generator helps you quickly create usernames for Domain and gaming clans.",
    url: "https://www.nicknamegenerator.io/domain-names",
    siteName: "Nicknamegenerator.io",
    type: "website",
  },
};
export default function DomainNamesPage() {
  return <ToolPage tool="domain-names" />;
}
