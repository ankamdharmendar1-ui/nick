import type { Metadata } from "next";
import { ToolPage } from "@/components/ToolPage";

export const metadata: Metadata = { title: "Gaming Clan Domain Name Generator", description: "Generate brandable domain and website-name ideas for gaming clans, guilds, and projects.", alternates: { canonical: "/domain-names" } };
export default function DomainNamesPage() { return <ToolPage tool="domain-names" />; }
