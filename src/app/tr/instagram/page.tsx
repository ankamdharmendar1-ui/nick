import React from "react";
import type { Metadata } from "next";
import InstagramPageView from "@/components/InstagramPageView";
import { INSTAGRAM_LOCALES } from "@/lib/instagramI18n";

const data = INSTAGRAM_LOCALES.tr;

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
    locale: "tr_TR",
    type: "website",
  },
};

export default function TurkishInstagramPage() {
  return <InstagramPageView data={data} />;
}
