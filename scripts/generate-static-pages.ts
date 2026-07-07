/**
 * Gera páginas HTML estáticas por rota dinâmica (blog posts, serviços) e para
 * rotas que ainda não tinham HTML dedicado (feedback, sitemap). Cada arquivo
 * tem <title>, <meta description>, <link canonical> e conteúdo real —
 * suficiente para o Google indexar cada URL como página única.
 *
 * Executa via `prebuild` (ver package.json). Não modifica React/SPA em runtime.
 */
import { writeFileSync, mkdirSync, readFileSync } from "fs";
import { resolve, dirname } from "path";
import { blogPosts } from "../src/data/blog-posts";
import { services } from "../src/data/services";

const BASE = "https://solarien.com.br";

/* ---------- helpers ---------- */
const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Conversor markdown → HTML bem simples, adequado ao subset usado nos posts. */
function md2html(md: string): string {
  const lines = md.split("\n");
  const out: string[] = [];
  let inList = false;
  const flushList = () => {
    if (inList) {
      out.push("</ul>");
      inList = false;
    }
  };
  const inline = (s: string) =>
    esc(s)
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/`([^`]+)`/g, "<code>$1</code>");

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    if (!line.trim()) {
      flushList();
      continue;
    }
    if (line.startsWith("### ")) {
      flushList();
      out.push(`<h3>${inline(line.slice(4))}</h3>`);
    } else if (line.startsWith("## ")) {
      flushList();
      out.push(`<h2>${inline(line.slice(3))}</h2>`);
    } else if (line.startsWith("# ")) {
      flushList();
      out.push(`<h1>${inline(line.slice(2))}</h1>`);
    } else if (/^[-*]\s+/.test(line)) {
      if (!inList) {
        out.push("<ul>");
        inList = true;
      }
      out.push(`<li>${inline(line.replace(/^[-*]\s+/, ""))}</li>`);
    } else {
      flushList();
      out.push(`<p>${inline(line)}</p>`);
    }
  }
  flushList();
  return out.join("\n");
}

/* ---------- shared template ---------- */
function shell({
  title,
  description,
  canonical,
  keywords,
  currentNav,
  bodyHtml,
  jsonLd,
}: {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
  currentNav?: string;
  bodyHtml: string;
  jsonLd?: object[];
}): string {
  const ld = (jsonLd || [])
    .map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`)
    .join("\n  ");
  const navItem = (href: string, label: string) =>
    `<a href="${href}" class="nav-link"${currentNav === href ? ' aria-current="page"' : ""}>${label}</a>`;
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  ${keywords ? `<meta name="keywords" content="${esc(keywords)}">` : ""}
  <meta name="author" content="Solarien Energy">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
  <link rel="canonical" href="${canonical}">
  <meta property="og:locale" content="pt_BR">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:site_name" content="Solarien Energy">
  <meta property="og:image" content="${BASE}/og-image.jpg">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(description)}">
  <meta name="twitter:image" content="${BASE}/og-image.jpg">
  <link rel="icon" href="/lovable-uploads/5bbb6ff4-9134-46c1-88d0-f52d8a3b48df.png" type="image/png">
  <link rel="apple-touch-icon" href="/lovable-uploads/5bbb6ff4-9134-46c1-88d0-f52d8a3b48df.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/static-styles.css">
  ${ld}
</head>
<body>
  <header class="header">
    <div class="container header-inner">
      <a href="/"><img src="/lovable-uploads/solarien-logo-new.png" alt="Solarien Energy" class="logo" width="151" height="48"></a>
      <nav class="nav" aria-label="Menu principal">
        ${navItem("/", "Home")}
        ${navItem("/sobre/", "Sobre")}
        ${navItem("/usinas/", "Parcerias")}
        ${navItem("/servicos/", "Serviços")}
        ${navItem("/licenciado/", "Licenciado")}
        ${navItem("/contato/", "Contato")}
      </nav>
      <div class="nav-buttons">
        <a href="https://painel.solarien.com.br/login" target="_blank" rel="noopener" class="nav-link">Entrar</a>
        <a href="https://painel.solarien.com.br/solarien" target="_blank" rel="noopener" class="btn btn-primary">Cadastrar</a>
      </div>
      <button class="mobile-menu-btn" aria-label="Abrir menu" onclick="toggleMenu()">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>
    </div>
    <div id="mobile-menu" class="mobile-menu">
      <a href="/" class="mobile-nav-link">Home</a>
      <a href="/sobre/" class="mobile-nav-link">Sobre</a>
      <a href="/usinas/" class="mobile-nav-link">Parcerias</a>
      <a href="/servicos/" class="mobile-nav-link">Serviços</a>
      <a href="/licenciado/" class="mobile-nav-link">Licenciado</a>
      <a href="/contato/" class="mobile-nav-link">Contato</a>
      <a href="https://painel.solarien.com.br/login" target="_blank" rel="noopener" class="mobile-nav-link">Entrar</a>
      <a href="https://painel.solarien.com.br/solarien" target="_blank" rel="noopener" class="btn btn-primary" style="margin-top: 1rem;">Cadastrar</a>
    </div>
  </header>
  <main style="padding-top: 80px; background: linear-gradient(135deg, #002113, #001a0f, #002113); min-height: 100vh;">
    ${bodyHtml}
  </main>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <img src="/lovable-uploads/solarien-logo-new.png" alt="Solarien Energy" class="footer-logo" width="151" height="48">
          <p class="footer-description">Especialistas em mercado livre de energia, energia por assinatura, geração distribuída e energia solar por assinatura. Migração gratuita e economia recorrente em todo o Brasil.</p>
        </div>
        <div>
          <h3 class="footer-title">Institucional</h3>
          <ul class="footer-links">
            <li><a href="/">Home</a></li><li><a href="/sobre/">Sobre</a></li><li><a href="/servicos/">Serviços</a></li><li><a href="/usinas/">Usinas</a></li><li><a href="/contato/">Contatos</a></li><li><a href="/faq/">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h3 class="footer-title">Plataforma</h3>
          <ul class="footer-links">
            <li><a href="/como-funciona/">Como Funciona</a></li><li><a href="/licenciado/">Licenciados</a></li><li><a href="/depoimentos/">Depoimentos</a></li><li><a href="https://painel.solarien.com.br/login" target="_blank" rel="noopener">Portal do Cliente</a></li><li><a href="/blog/">Blog/Notícias</a></li>
          </ul>
        </div>
        <div>
          <h3 class="footer-title">Políticas</h3>
          <ul class="footer-links">
            <li><a href="/termos-de-uso/">Termos de Uso</a></li><li><a href="/politica-de-privacidade/">Política de Privacidade</a></li><li><a href="/politica-de-cookies/">Política de Cookies</a></li><li><a href="/politica-de-transparencia/">Política de Transparência</a></li><li><a href="/feedback/">Envie o Feedback</a></li><li><a href="/sitemap/">Mapa do Site</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="footer-copyright">Copyright 2025 | Todos direitos reservados. | Desenvolvido por <a href="https://danielolimpio.com/" target="_blank" rel="noopener">Daniel Olímpio</a></p>
      </div>
    </div>
  </footer>
  <a href="https://wa.me/5511997361698?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20energia%20limpa" target="_blank" rel="noopener" class="whatsapp-float" aria-label="Falar no WhatsApp">
    <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
  </a>
  <script>function toggleMenu(){document.getElementById('mobile-menu').classList.toggle('active')}</script>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-4BWQ7M92JC"></script>
  <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-4BWQ7M92JC');</script>
</body>
</html>
`;
}

/* ---------- writers ---------- */
function writeFile(rel: string, html: string) {
  const full = resolve("public" + rel);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, html);
}

/* ---------- BLOG POSTS ---------- */
let generated = 0;
for (const post of blogPosts) {
  const canonical = `${BASE}/blog/${post.id}/`;
  const bodyHtml = `
    <div class="container" style="padding-top: 1rem;">
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <a href="/">Home</a><span>/</span><a href="/blog/">Blog</a><span>/</span><span>${esc(post.title)}</span>
      </nav>
    </div>
    <article class="section">
      <div class="container" style="max-width: 860px;">
        <span style="background: linear-gradient(to right, #02ff91, #00c26f); color: #000; padding: 0.35rem 0.9rem; border-radius: 999px; font-size: 0.85rem; font-weight: 700;">${esc(post.category)}</span>
        <h1 style="color: #fff; margin-top: 1rem; font-size: 2.5rem; line-height: 1.15;">${esc(post.title)}</h1>
        <p style="color: #cbd5e1; font-size: 1.15rem; margin-top: 1rem;">${esc(post.excerpt)}</p>
        <p style="color: #94a3b8; margin-top: 0.5rem; font-size: 0.9rem;">Por ${esc(post.author)} · ${esc(post.date)} · ${esc(post.readTime)} de leitura</p>
        <div style="color: #e2e8f0; margin-top: 2rem; line-height: 1.75; font-size: 1.05rem;">
          ${md2html(post.content)}
        </div>
        <div style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid rgba(148,163,184,0.2);">
          <p style="color: #94a3b8;">Tags: ${post.tags.map((t) => `<span style="color:#02ff91;">#${esc(t)}</span>`).join(" ")}</p>
          <p style="margin-top: 1.5rem;"><a href="/blog/" style="color: #02ff91;">← Voltar para o Blog</a></p>
        </div>
      </div>
    </article>
  `;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      author: { "@type": "Organization", name: post.author },
      publisher: {
        "@type": "Organization",
        name: "Solarien Energy",
        logo: { "@type": "ImageObject", url: `${BASE}/lovable-uploads/7035cd87-6220-43bb-b629-649ce81e59d8.png` },
      },
      mainEntityOfPage: canonical,
      image: `${BASE}${post.image}`,
      keywords: post.tags.join(", "),
      articleSection: post.category,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE + "/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: BASE + "/blog/" },
        { "@type": "ListItem", position: 3, name: post.title, item: canonical },
      ],
    },
  ];

  writeFile(`/blog/${post.id}/index.html`, shell({
    title: `${post.title} | Blog Solarien Energy`,
    description: post.excerpt.slice(0, 158),
    canonical,
    keywords: post.tags.join(", ") + ", mercado livre de energia, energia por assinatura, geração distribuída, energia solar",
    bodyHtml,
    jsonLd,
  }));
  generated++;
}

/* ---------- SERVICE PAGES ---------- */
for (const s of services) {
  const canonical = `${BASE}/servicos/${s.slug}/`;
  const featureItems = s.features.map((f) => `<li>${esc(f)}</li>`).join("");
  const sectionHtml = s.sections
    .map(
      (sec) => `
      <section style="margin-top: 2.5rem;">
        <h2 style="color: #fff;">${esc(sec.title)}</h2>
        <p style="color: #cbd5e1; margin-top: 0.5rem;">${esc(sec.body)}</p>
        ${sec.bullets ? `<ul style="color:#cbd5e1;">${sec.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>` : ""}
      </section>`,
    )
    .join("");
  const processHtml = s.process
    .map(
      (p) => `
      <div style="background: rgba(30,41,59,0.3); border: 1px solid rgba(51,65,85,0.5); border-radius: 12px; padding: 1.25rem;">
        <span style="color:#02ff91; font-weight:700;">${esc(p.step)}</span>
        <h3 style="color:#fff; margin-top:0.4rem;">${esc(p.title)}</h3>
        <p style="color:#cbd5e1;">${esc(p.description)}</p>
      </div>`,
    )
    .join("");
  const faqHtml = s.faq
    .map(
      (q) => `
      <details style="background: rgba(30,41,59,0.3); border: 1px solid rgba(51,65,85,0.5); border-radius: 12px; padding: 1rem 1.25rem; margin-top: 0.75rem;">
        <summary style="color:#fff; font-weight:600; cursor:pointer;">${esc(q.q)}</summary>
        <p style="color:#cbd5e1; margin-top: 0.75rem;">${esc(q.a)}</p>
      </details>`,
    )
    .join("");
  const statsHtml = s.stats
    .map(
      (st) => `
      <div style="text-align:center;">
        <div style="color:#02ff91; font-size:2rem; font-weight:800;">${esc(st.value)}</div>
        <div style="color:#94a3b8;">${esc(st.label)}</div>
      </div>`,
    )
    .join("");

  const bodyHtml = `
    <div class="container" style="padding-top: 1rem;">
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <a href="/">Home</a><span>/</span><a href="/servicos/">Serviços</a><span>/</span><span>${esc(s.title)}</span>
      </nav>
    </div>
    <section class="section">
      <div class="container" style="max-width: 900px;">
        <h1 style="color:#fff; font-size: 2.5rem;">${esc(s.title)}</h1>
        <p style="color:#02ff91; font-size:1.1rem; margin-top:0.5rem;">${esc(s.tagline)}</p>
        <p style="color:#cbd5e1; margin-top:1.5rem; font-size:1.1rem; line-height:1.7;">${esc(s.heroDescription)}</p>
        <ul style="color:#cbd5e1; margin-top:1.5rem; columns: 2;">${featureItems}</ul>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 1rem; margin-top: 2rem; padding: 1.5rem; background: rgba(2,255,145,0.05); border-radius: 12px;">${statsHtml}</div>
        ${sectionHtml}
        <section style="margin-top: 2.5rem;">
          <h2 style="color:#fff;">Como funciona o processo</h2>
          <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; margin-top: 1rem;">${processHtml}</div>
        </section>
        <section style="margin-top: 2.5rem;">
          <h2 style="color:#fff;">Perguntas frequentes</h2>
          ${faqHtml}
        </section>
        <div style="margin-top:3rem;"><a href="/contato/" class="btn btn-primary">Falar com um especialista</a></div>
      </div>
    </section>
  `;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: s.title,
      description: s.metaDescription,
      provider: { "@type": "Organization", name: "Solarien Energy", url: BASE },
      areaServed: { "@type": "Country", name: "Brasil" },
      url: canonical,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: s.faq.map((q) => ({
        "@type": "Question",
        name: q.q,
        acceptedAnswer: { "@type": "Answer", text: q.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE + "/" },
        { "@type": "ListItem", position: 2, name: "Serviços", item: BASE + "/servicos/" },
        { "@type": "ListItem", position: 3, name: s.title, item: canonical },
      ],
    },
  ];

  writeFile(`/servicos/${s.slug}/index.html`, shell({
    title: `${s.title} — Solarien Energy`,
    description: s.metaDescription.slice(0, 158),
    canonical,
    keywords: s.keywords,
    bodyHtml,
    jsonLd,
  }));
  generated++;
}

/* ---------- FEEDBACK PAGE ---------- */
writeFile(
  "/feedback/index.html",
  shell({
    title: "Envie seu Feedback — Solarien Energy",
    description:
      "Compartilhe sua experiência com a Solarien Energy sobre mercado livre de energia, energia por assinatura ou geração distribuída. Sua opinião melhora nosso serviço.",
    canonical: `${BASE}/feedback/`,
    keywords: "feedback solarien, avaliação serviço energia, opinião cliente energia por assinatura",
    bodyHtml: `
    <section class="section">
      <div class="container" style="max-width:820px; text-align:center;">
        <h1 style="color:#fff;">Envie o seu Feedback</h1>
        <p style="color:#cbd5e1; margin-top:1rem; font-size:1.1rem;">Sua opinião é fundamental para continuarmos aprimorando nossos serviços de <strong>mercado livre de energia</strong>, <strong>energia por assinatura</strong> e <strong>geração distribuída</strong>. Compartilhe elogios, sugestões ou críticas construtivas — leemos todos os feedbacks.</p>
        <p style="margin-top:2rem;"><a href="/contato/" class="btn btn-primary">Ir para o formulário de contato</a></p>
      </div>
    </section>`,
  }),
);

/* ---------- SITEMAP HTML PAGE ---------- */
writeFile(
  "/sitemap/index.html",
  shell({
    title: "Mapa do Site — Solarien Energy",
    description:
      "Navegue por todas as páginas da Solarien Energy: mercado livre de energia, energia por assinatura, geração distribuída, energia solar, blog, serviços e políticas.",
    canonical: `${BASE}/sitemap/`,
    bodyHtml: `
    <section class="section">
      <div class="container" style="max-width:900px;">
        <h1 style="color:#fff;">Mapa do Site</h1>
        <p style="color:#cbd5e1; margin-top:1rem;">Todas as páginas da Solarien Energy organizadas por área.</p>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
          <div><h2 style="color:#fff;">Institucional</h2><ul style="color:#cbd5e1;"><li><a href="/">Home</a></li><li><a href="/sobre/">Sobre</a></li><li><a href="/servicos/">Serviços</a></li><li><a href="/usinas/">Usinas Solares</a></li><li><a href="/licenciado/">Seja Licenciado</a></li><li><a href="/contato/">Contato</a></li></ul></div>
          <div><h2 style="color:#fff;">Serviços</h2><ul style="color:#cbd5e1;">${services.map((s) => `<li><a href="/servicos/${s.slug}/">${esc(s.shortTitle)}</a></li>`).join("")}</ul></div>
          <div><h2 style="color:#fff;">Blog</h2><ul style="color:#cbd5e1;">${blogPosts.map((p) => `<li><a href="/blog/${p.id}/">${esc(p.title)}</a></li>`).join("")}</ul></div>
          <div><h2 style="color:#fff;">Outros</h2><ul style="color:#cbd5e1;"><li><a href="/como-funciona/">Como Funciona</a></li><li><a href="/faq/">FAQ</a></li><li><a href="/depoimentos/">Depoimentos</a></li><li><a href="/feedback/">Feedback</a></li><li><a href="/blog/">Blog</a></li></ul></div>
          <div><h2 style="color:#fff;">Políticas</h2><ul style="color:#cbd5e1;"><li><a href="/termos-de-uso/">Termos de Uso</a></li><li><a href="/politica-de-privacidade/">Privacidade</a></li><li><a href="/politica-de-cookies/">Cookies</a></li><li><a href="/politica-de-transparencia/">Transparência</a></li></ul></div>
        </div>
      </div>
    </section>`,
  }),
);

console.log(`✔ Static pages generated: ${generated} (blog + services) + feedback + sitemap`);
