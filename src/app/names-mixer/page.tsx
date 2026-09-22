import type { Metadata } from "next";
import { ToolPage } from "@/components/ToolPage";

export const metadata: Metadata = { title: "Names Mixer for Couples & Gaming Duos", description: "Create matching nicknames for couples, friends, squads, and gaming duos.", alternates: { canonical: "/names-mixer" } };
export default function NamesMixerPage() { return <ToolPage tool="names-mixer" />; }
