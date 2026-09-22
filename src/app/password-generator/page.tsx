import type { Metadata } from "next";
import { ToolPage } from "@/components/ToolPage";

export const metadata: Metadata = { title: "Secure Password Generator", description: "Create strong random passwords for gaming accounts, Discord, Steam, and websites.", alternates: { canonical: "/password-generator" } };
export default function PasswordGeneratorPage() { return <ToolPage tool="password-generator" />; }
