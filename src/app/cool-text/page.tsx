import type { Metadata } from "next";
import { ToolPage } from "@/components/ToolPage";

export const metadata: Metadata = { title: "Cool Text Generator for Gamer Names", description: "Generate decorative fonts, symbols, and stylish gamer tags from any name.", alternates: { canonical: "/cool-text" } };
export default function CoolTextPage() { return <ToolPage tool="cool-text" />; }
