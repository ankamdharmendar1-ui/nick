import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import NullsBrawlGrid from "@/components/NullsBrawlGrid";
import { NickFooter } from "@/components/NickFooter";

export const metadata: Metadata = {
  title: "Nulls Brawl İsim Önerileri: ζ͜͡M₳ƧƬeR, ⚡BRAWLER⚡ & Şekilli Nickler 🏆",
  description:
    "Nullsbrawl kullanıcı adı oluşturucu ve en havalı isim önerileri – kopyalanıp kullanılabilecek şık isimler, fontlar ve semboller. 50+ Null's Brawl takma adı tek tıkla kopyala.",
  keywords: [
    "nulls brawl isim önerileri",
    "nullsbrawl takma adları",
    "nulls brawl şekilli nick",
    "nulls brawl havalı isimler",
    "nulls takma adları",
    "nulls brawl kullanıcı adı oluşturucu",
    "brawl stars isim önerileri",
    "nulls brawl nickleri",
  ],
  alternates: {
    canonical: "https://www.nicknamegenerator.io/tr/nulls-brawl",
  },
  openGraph: {
    title: "Nulls Brawl İsim Önerileri: ζ͜͡M₳ƧƬeR, ⚡BRAWLER⚡ & Şekilli Nickler 🏆",
    description:
      "Nullsbrawl kullanıcı adı oluşturucu ve en havalı isim önerileri – kopyalanıp kullanılabilecek şık isimler, fontlar ve semboller.",
    url: "https://www.nicknamegenerator.io/tr/nulls-brawl",
    siteName: "Nicknamegenerator.io",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nulls Brawl İsim Önerileri: ζ͜͡M₳ƧƬeR & Şekilli Nickler 🏆",
    description:
      "50+ en havalı Nulls Brawl ve Brawl Stars isim önerileri, şekilli fontlar ve semboller. Tek tıkla kopyala.",
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Nulls Brawl'da isim nasıl değiştirilir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nulls Brawl oyununu açın, sol üst köşedeki profil simgenize dokunun, isminizin yanındaki dişli çark veya kalem simgesine tıklayın. Buradan kopyaladığınız şekilli ismi yapıştırıp onaylayın.",
      },
    },
    {
      "@type": "Question",
      name: "Nulls Brawl için en iyi isimler hangileridir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mortis, Crow, Leon, Spike gibi popüler brawler karakterlerini içeren, havalı sembollerle süslenmiş (ζ͜͡, 亗, ꧁, ⚡) şekilli isimler en popüler olanlardır.",
      },
    },
    {
      "@type": "Question",
      name: "Bu isimler Brawl Stars ve Nulls Brawl'da çalışır mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet, bu sayfadaki tüm isimler resmi Unicode karakter standartlarına uygundur ve hem Null's Brawl özel sunucusunda hem de orijinal Brawl Stars oyununda sorunsuz görüntülenir.",
      },
    },
    {
      "@type": "Question",
      name: "Kendi özel Nulls Brawl ismimi nasıl oluşturabilirim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sitemizde bulunan Şekilli Yazı Yazma (Stylish Text) aracını kullanarak kendi adınızı yazabilir ve 60'tan fazla farklı font ve sembol kombinasyonu elde edebilirsiniz.",
      },
    },
  ],
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Ana Sayfa",
      item: "https://www.nicknamegenerator.io/tr",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Nulls Brawl İsim Önerileri",
      item: "https://www.nicknamegenerator.io/tr/nulls-brawl",
    },
  ],
};

const RELATED_LINKS = [
  { label: "Instagram Takma Adları", href: "/tr/instagram" },
  { label: "Şekilli Yazı Yazma", href: "/stylish-text" },
  { label: "Free Fire İsimleri", href: "/freefire" },
  { label: "PUBG Şekilli İsimler", href: "/pubg-stylish-name" },
  { label: "İsim Karıştırıcı (Duo)", href: "/names-mixer" },
  { label: "Sembollü İsimler", href: "/grouped-by-symbol" },
];

export default function TurkishNullsBrawlPage() {
  return (
    <div className="min-h-screen bg-[#ecf0f5] text-[#222]">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      {/* Header */}
      <header className="bg-[#354861] h-[44px] flex items-center px-4 shadow-md">
        <Link
          href="/tr"
          className="text-white font-light text-[26px] tracking-tight hover:opacity-80"
        >
          Nicknamegenerator<span className="text-[#3c8dbc]">.io</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 text-[13px]">
          <Link href="/tr" className="text-white hover:text-[#00c0ef]">
            Ana Sayfa
          </Link>
          <Link href="/tr/instagram" className="text-white hover:text-[#00c0ef]">
            Instagram
          </Link>
          <Link href="/stylish-text" className="text-white hover:text-[#00c0ef]">
            Şekilli Yazı
          </Link>
        </nav>
      </header>

      {/* Main Container */}
      <div className="max-w-[960px] mx-auto px-3 py-4">
        {/* Breadcrumb */}
        <div className="text-[12px] text-gray-500 mb-3 flex items-center gap-1.5">
          <Link href="/tr" className="text-[#2c6da5] hover:underline">
            Ana Sayfa
          </Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Nulls Brawl İsim Önerileri</span>
        </div>

        {/* H1 Box */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="p-5">
            <h1 className="text-[22px] sm:text-[24px] font-bold text-[#333] m-0 mb-2">
              Nulls Brawl İsim Önerileri: <span className="font-mono text-[#3c8dbc]">ζ͜͡M₳ƧƬeR, ⚡BRAWLER⚡</span>
            </h1>
            <p className="text-[14px] text-gray-600 m-0 mb-2 leading-relaxed">
              <strong>Nullsbrawl kullanıcı adı oluşturucu</strong> ile en havalı, şekilli ve şık isim önerilerini keşfedin. Brawl Stars ve Null&apos;s Brawl özel sunucularında öne çıkmak için tasarlanmış 50&apos;den fazla hazır takma adı tek tıkla kopyalayın.
            </p>
            <p className="text-[13px] text-gray-500 m-0">
              Kral taçları (亗), şimşekler (⚡), anime kanatları (꧁) ve özel klan etiketleri içeren kopyalanıp kullanılabilecek şekilli nickler aşağıda listelenmiştir.
            </p>
          </div>
        </div>

        {/* Copy Grid Box */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <NullsBrawlGrid />
        </div>

        {/* How to Guide */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">
              Nulls Brawl&apos;da İsim Nasıl Değiştirilir? (Adım Adım)
            </h2>
          </div>
          <div className="p-5 text-[14px] text-gray-700 leading-relaxed">
            <ol className="list-decimal list-inside space-y-2 m-0">
              <li>Yukarıdaki listeden beğendiğiniz bir Nulls Brawl ismine tıklayarak kopyalayın.</li>
              <li>Null&apos;s Brawl oyununu açın ve ana ekranda sol üstteki profil resminize dokunun.</li>
              <li>Profil ekranında mevcut adınızın yanındaki ayarlar (dişli veya kalem) simgesine dokunun.</li>
              <li>İsim kutusuna dokunup kopyaladığınız şekilli ismi yapıştırın.</li>
              <li>Değişikliği onaylayın (Null&apos;s Brawl&apos;da sınırsız elmas olduğu için dilediğiniz sıklıkta değiştirebilirsiniz).</li>
            </ol>
            <p className="mt-3 text-[12px] text-gray-500 m-0">
              💡 İpucu: Klan sohbetinde <code className="bg-[#f4f4f4] px-1 py-0.5 rounded font-mono text-[#333]">/name [yeni_isim]</code> komutunu yazarak da anında isim değiştirebilirsiniz.
            </p>
          </div>
        </div>

        {/* FAQ Box */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">
              Nulls Brawl İsimleri Hakkında Sıkça Sorulan Sorular
            </h2>
          </div>
          <div className="p-5 space-y-4 text-[14px] text-gray-700 leading-relaxed">
            <div>
              <h3 className="font-bold text-[#354861] mb-1">
                Nulls Brawl için en havalı isimler hangileridir?
              </h3>
              <p className="m-0">
                Özellikle Mortis, Leon, Edgar ve Crow gibi agresif brawler karakterlerinin adlarını içeren ve 亗, ⚡, ꧁ gibi özel sembollerle süslenen isimler oyuncular arasında en çok tercih edilenlerdir.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[#354861] mb-1">
                Şekilli isimler oyunda kutucuk olarak görünür mü?
              </h3>
              <p className="m-0">
                Hayır. Bu sayfada yer alan tüm harfler ve semboller Brawl Stars ve Null&apos;s Brawl oyun motoru tarafından desteklenen evrensel Unicode karakterleridir.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[#354861] mb-1">
                Kendi adımı Nulls Brawl tarzında nasıl şekillendirebilirim?
              </h3>
              <p className="m-0">
                <Link href="/stylish-text" className="text-[#2c6da5] hover:underline font-semibold">
                  Şekilli Yazı Yazma
                </Link>{" "}
                aracımızı kullanarak kendi adınızı yazabilir, onlarca farklı font ve sembol stilini anında oluşturabilirsiniz.
              </p>
            </div>
          </div>
        </div>

        {/* Related Links Box */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h2 className="text-[17px] font-semibold text-[#333] m-0">İlgili Araçlar ve İsim Listeleri</h2>
          </div>
          <div className="p-4 flex flex-wrap gap-2">
            {RELATED_LINKS.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="text-[13px] text-[#2c6da5] border border-[#d2d6de] px-3 py-1.5 rounded-[20px] hover:bg-[#3c8dbc] hover:text-white hover:border-[#3c8dbc] transition-colors"
              >
                {r.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Global Footer */}
      <NickFooter />
    </div>
  );
}
