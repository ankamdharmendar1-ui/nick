import type { Metadata } from "next";
import { ToolPage } from "@/components/ToolPage";

export const metadata: Metadata = { title: "Stylish Female Gamer Names", description: "Explore cute, aesthetic gamer-name ideas and copy-ready variations for girls and women.", alternates: { canonical: "/female-names" } };
export default function FemaleNamesPage() { return <ToolPage tool="female-names" />; }
