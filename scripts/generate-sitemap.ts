// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.
// Enumerates all static routes from App.tsx and dynamic routes from services + blog posts.

import { writeFileSync, readFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://solarien.com.br";
const today = new Date().toISOString().slice(0, 10);

interface Entry {
  path: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
}

// Static routes (mirrors src/App.tsx, excludes duplicates like /contact, /terms EN aliases,
// and internal-only routes like /feedback, /sitemap kept for navigation only)
const staticRoutes: Entry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/sobre", changefreq: "monthly", priority: "0.9" },
  { path: "/servicos", changefreq: "monthly", priority: "0.9" },
  { path: "/como-funciona", changefreq: "monthly", priority: "0.9" },
  { path: "/usinas", changefreq: "monthly", priority: "0.8" },
  { path: "/licenciado", changefreq: "monthly", priority: "0.8" },
  { path: "/contato", changefreq: "monthly", priority: "0.8" },
  { path: "/faq", changefreq: "monthly", priority: "0.8" },
  { path: "/blog", changefreq: "weekly", priority: "0.9" },
  { path: "/depoimentos", changefreq: "monthly", priority: "0.7" },
  { path: "/feedback", changefreq: "monthly", priority: "0.6" },
  { path: "/sitemap", changefreq: "monthly", priority: "0.5" },
  { path: "/politica-de-transparencia", changefreq: "yearly", priority: "0.5" },
  { path: "/politica-de-privacidade", changefreq: "yearly", priority: "0.5" },
  { path: "/termos-de-uso", changefreq: "yearly", priority: "0.5" },
  { path: "/politica-de-cookies", changefreq: "yearly", priority: "0.5" },
];

function extractSlugs(file: string, pattern: RegExp): string[] {
  const content = readFileSync(resolve(file), "utf-8");
  const slugs: string[] = [];
  let m;
  while ((m = pattern.exec(content)) !== null) slugs.push(m[1]);
  return Array.from(new Set(slugs));
}

const serviceSlugs = extractSlugs("src/data/services.ts", /slug:\s*['"]([^'"]+)['"]/g);
const blogIds = extractSlugs("src/data/blog-posts.ts", /^\s{4}id:\s*['"]([^'"]+)['"]/gm);

const dynamicRoutes: Entry[] = [
  ...serviceSlugs.map((s) => ({ path: `/servicos/${s}`, changefreq: "monthly" as const, priority: "0.8" })),
  ...blogIds.map((s) => ({ path: `/blog/${s}`, changefreq: "monthly" as const, priority: "0.7" })),
];

const entries = [...staticRoutes, ...dynamicRoutes];

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      `    <lastmod>${today}</lastmod>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  ),
  `</urlset>`,
  "",
].join("\n");

writeFileSync(resolve("public/sitemap.xml"), xml);
console.log(
  `sitemap.xml written — ${entries.length} entries (${staticRoutes.length} static + ${serviceSlugs.length} services + ${blogIds.length} blog posts)`,
);
