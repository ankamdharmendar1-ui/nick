import type { MetadataRoute } from "next";

const BASE_URL = "https://www.nicknamegenerator.io";
const LAST_MODIFIED = "2026-09-22";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Home ──────────────────────────────────────────────────────────────
    {
      url: BASE_URL,
      lastModified: LAST_MODIFIED,
      changeFrequency: "daily",
      priority: 1.0,
    },

    // ── International Language Editions (High Global SEO Priority) ────────
    { url: `${BASE_URL}/fr`,                             lastModified: LAST_MODIFIED, changeFrequency: "daily",  priority: 0.9 },
    { url: `${BASE_URL}/es`,                             lastModified: LAST_MODIFIED, changeFrequency: "daily",  priority: 0.9 },
    { url: `${BASE_URL}/it`,                             lastModified: LAST_MODIFIED, changeFrequency: "daily",  priority: 0.9 },
    { url: `${BASE_URL}/ru`,                             lastModified: LAST_MODIFIED, changeFrequency: "daily",  priority: 0.9 },
    { url: `${BASE_URL}/de`,                             lastModified: LAST_MODIFIED, changeFrequency: "daily",  priority: 0.9 },
    { url: `${BASE_URL}/id`,                             lastModified: LAST_MODIFIED, changeFrequency: "daily",  priority: 0.9 },
    { url: `${BASE_URL}/hi`,                             lastModified: LAST_MODIFIED, changeFrequency: "daily",  priority: 0.9 },
    { url: `${BASE_URL}/jp`,                             lastModified: LAST_MODIFIED, changeFrequency: "daily",  priority: 0.9 },
    { url: `${BASE_URL}/kr`,                             lastModified: LAST_MODIFIED, changeFrequency: "daily",  priority: 0.9 },
    { url: `${BASE_URL}/tr`,                             lastModified: LAST_MODIFIED, changeFrequency: "daily",  priority: 0.9 },
    { url: `${BASE_URL}/br`,                             lastModified: LAST_MODIFIED, changeFrequency: "daily",  priority: 0.9 },
    { url: `${BASE_URL}/freefire`,                       lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/free-fire-guild-name`,           lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/ff-name-style`,                  lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/pubg-stylish-name`,              lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/pubg-girl-names`,                lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/stylish-text`,                   lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/nickname-maker`,                 lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/nickname-editor`,                lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/love-style-name`,                lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/instagram-girl-attitude-names`,  lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.8 },

    // ── Tool Generators ────────────────────────────────────────────────────
    { url: `${BASE_URL}/names-mixer`,                    lastModified: LAST_MODIFIED, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE_URL}/nickname-to-symbols`,            lastModified: LAST_MODIFIED, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE_URL}/cool-text`,                      lastModified: LAST_MODIFIED, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE_URL}/grouped-by-symbol`,              lastModified: LAST_MODIFIED, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE_URL}/male-names`,                     lastModified: LAST_MODIFIED, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE_URL}/female-names`,                   lastModified: LAST_MODIFIED, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE_URL}/password-generator`,             lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/domain-names`,                   lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },

    // ── Static & Legal Pages ───────────────────────────────────────────────
    { url: `${BASE_URL}/about`,                          lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`,                        lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/terms`,                          lastModified: LAST_MODIFIED, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE_URL}/privacy-policy`,                 lastModified: LAST_MODIFIED, changeFrequency: "yearly",  priority: 0.3 },
  ];
}
