import React from "react";
import type { Metadata } from "next";
import InstagramPageView from "@/components/InstagramPageView";
import { INSTAGRAM_LOCALES } from "@/lib/instagramI18n";

const data = INSTAGRAM_LOCALES.ru;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDesc,
  keywords: data.keywords,
  alternates: {
    canonical: `https://www.nicknamegenerator.io/${data.langCode}/instagram`,
  },
  openGraph: {
    title: data.metaTitle,
    description: data.metaDesc,
    url: `https://www.nicknamegenerator.io/${data.langCode}/instagram`,
    siteName: "Nicknamegenerator.io",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RussianInstagramPage() {
  return <InstagramPageView data={data} />;
}
