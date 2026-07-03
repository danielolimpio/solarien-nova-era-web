
# Auditoria Técnica + Migração SPA → SSG (Pré-renderização)

**Prioridade absoluta:** preservar 100% do layout, identidade visual, animações, responsividade e comportamento. Nenhuma mudança de cores, tipografia, espaçamentos ou componentes. Toda otimização é incremental e reversível.

---

## Diagnóstico atual

- **Stack:** React 18 + Vite 5 + React Router (`BrowserRouter`) → SPA pura. HTML servido é apenas `index.html` com `<div id="root">`, então crawlers que não executam JS bem (Bing, redes sociais, LLMs) recebem página vazia.
- **SEO:** `react-helmet` injeta tags só client-side. `index.html` tem apenas metadados genéricos.
- **Sitemap:** `public/sitemap.xml` estático, precisa refletir todas as rotas do `App.tsx` (inclui `/servicos/:slug`, `/blog/:id`).
- **Deploy:** GitHub Actions → build Vite → FTP para Hostinger (`dangerous-clean-slate: true`). Compatível com SSG (gera HTML estático em `dist/`).
- **Imagens:** sem `loading="lazy"` / `width`/`height` explícitos em vários lugares → risco de CLS.
- **Robots.txt / .htaccess:** existem, precisam de ajustes finos (sitemap + headers de cache).

---

## Estratégia escolhida: SSG com `vite-react-ssg`

**Por quê:** compatível com stack atual (React 18 + Vite + React Router + Helmet), gera 1 HTML por rota no build, zero mudança runtime no cliente (mesma SPA depois do hydrate), zero mudança no workflow (mesmo `npm run build` → `dist/`), zero backend (Hostinger estática funciona). Layout permanece idêntico pixel a pixel porque os componentes React não mudam.

Alternativas descartadas:
- **Next.js:** exige reescrever roteamento inteiro → risco alto de regressão. ❌
- **`vite-plugin-ssr` / Astro:** exige refatorar páginas. ❌
- **`react-snap` / puppeteer prerender:** frágil, sem controle de meta por rota em build-time. ❌

---

## Escopo das mudanças

### 1. Pré-renderização (SSG)
- Adicionar `vite-react-ssg` (compatível com estrutura atual, apenas requer expor as rotas como array).
- Refatorar `App.tsx` mínimo: extrair `routes` para `src/routes.tsx` como array `RouteRecord[]` (mesmas rotas, mesmos componentes). `BrowserRouter` → `createBrowserRouter` (comportamento idêntico).
- `main.tsx` usa `ViteReactSSG` para hydrate no cliente e SSR no build.
- Enumerar rotas dinâmicas (`/servicos/:slug` a partir de `src/data/services.ts`, `/blog/:id` a partir dos posts).
- Build gera `dist/servicos/rci-e/index.html`, `dist/blog/mp-1300-2025/index.html`, etc.

### 2. Head metadata por rota (`react-helmet-async`)
- Trocar `react-helmet` → `react-helmet-async` (necessário para SSR) e envolver com `HelmetProvider`. **API idêntica** — nenhum componente `<SEO>` muda visualmente.
- Confirmar que toda página já usa `<SEO>` (existe em Sitemap, Services etc.); adicionar `<SEO>` nas páginas que faltam.
- Cada rota emite: `title`, `description`, `canonical` self-reference, `og:title/description/url/type`, `twitter:card`. Manter `og:image` global no `index.html`.

### 3. Schema JSON-LD
- `Organization` + `WebSite` global no `index.html`.
- `BreadcrumbList` nas páginas internas (já há `Breadcrumbs`, adicionar JSON-LD equivalente).
- `Article` nos posts de blog.
- `Service` nas páginas `/servicos/:slug`.
- `FAQPage` na `/faq`.

### 4. Sitemap dinâmico + robots
- Script `scripts/generate-sitemap.ts` executado em `prebuild`: lê `src/data/services.ts` e a lista de posts, gera `public/sitemap.xml` completo com todas as URLs reais (estáticas + dinâmicas), `lastmod` baseado em data atual.
- Atualizar `robots.txt`: manter regras existentes, garantir `Sitemap:` correto.

### 5. Imagens e Core Web Vitals
- Adicionar `loading="lazy"` + `decoding="async"` + `width`/`height` em `<img>` que ainda não têm (varredura sistemática, sem trocar as imagens em si).
- `<link rel="preload">` para hero LCP no `index.html`.
- `fetchpriority="high"` no hero.
- Não trocar formatos agora (evita risco de imagem quebrar) — apenas atributos.

### 6. Cache / compressão / .htaccess
- Ajustar `.htaccess` na raiz `public/`: `mod_deflate` (gzip), `mod_expires` (cache 1 ano para assets com hash, no-cache para HTML), `Cache-Control` headers.
- Confirmar SPA fallback ainda funcionando para rotas não pré-renderizadas (fallback para `index.html`).

### 7. Correções GSC comuns
- Canonical self-reference em cada rota (resolve "duplicado sem canonical").
- HTML pré-renderizado (resolve "página descoberta — não indexada" e "renderizada em branco").
- `viewport` já OK; `mobile-friendly` mantido pois layout não muda.
- Remover disallows agressivos desnecessários do `robots.txt` que possam bloquear conteúdo válido.

### 8. Workflow GitHub Actions / Hostinger
- `npm install` → adiciona `vite-react-ssg` e `react-helmet-async`.
- `npm run build` continua gerando `dist/` (agora com HTML por rota).
- FTP publica `dist/` inalterado. **Sem mudanças no `.github/workflows/deploy.yml`.**
- Adicionar `predev`/`prebuild` scripts para gerar sitemap.

---

## Validação (antes de considerar concluído)

1. `npm run build` completa sem erros.
2. Rodar Playwright: comparar screenshot da home antes/depois em 1280px e 375px — deve ser pixel-idêntico.
3. Verificar `dist/index.html`, `dist/sobre/index.html`, `dist/servicos/rci-e/index.html` contêm o HTML renderizado com títulos/meta corretos (via `curl`/grep no arquivo).
4. Verificar `dist/sitemap.xml` lista todas as rotas.
5. Navegar no preview: clicar em links entre páginas — SPA client-side continua funcionando (hydrate).
6. Console: zero erros.

---

## O que **não** vai mudar

- Nenhum componente visual (`Header`, `Footer`, `PremiumUI`, páginas).
- Nenhuma cor, fonte, espaçamento, animação.
- `tailwind.config.ts`, `index.css`, tokens de design.
- Comportamento de rotas do usuário (mesmas URLs).
- Workflow do GitHub Actions.

---

## Entregável final

Relatório em markdown ao final da implementação com:
- Lista de arquivos alterados/criados.
- HTML de exemplo antes/depois (mostra meta tags novos).
- Rotas pré-renderizadas (contagem).
- Checklist GSC corrigido.
- Recomendações de próximos passos (ex.: gerar `og:image` reais, adicionar mais posts).

Posso iniciar a implementação?
