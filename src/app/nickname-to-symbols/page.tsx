import type { Metadata } from "next";
import { ToolPage } from "@/components/ToolPage";

export const metadata: Metadata = { title: "Nickname to Symbols Converter", description: "Convert a plain nickname into copy-ready symbol and leet-style name ideas.", alternates: { canonical: "/nickname-to-symbols" } };
export default function NicknameToSymbolsPage() { return <ToolPage tool="nickname-to-symbols" />; }
