import type { Metadata } from "next";
import { ToolPage } from "@/components/ToolPage";

export const metadata: Metadata = { title: "Stylish Male Gamer Names", description: "Explore stylish gamer-name ideas and copy-ready variations for boys and men.", alternates: { canonical: "/male-names" } };
export default function MaleNamesPage() { return <ToolPage tool="male-names" />; }
