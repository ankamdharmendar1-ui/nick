import type { Metadata } from "next";
import { ToolPage } from "@/components/ToolPage";

export const metadata: Metadata = { title: "Nicknames Grouped by Symbol", description: "Browse copy-ready nickname ideas organized around popular gaming symbols.", alternates: { canonical: "/grouped-by-symbol" } };
export default function GroupedBySymbolPage() { return <ToolPage tool="grouped-by-symbol" />; }
