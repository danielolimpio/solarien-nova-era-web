# Auditoria Técnica — Relatório de Implementação

**Data:** 2026-07-03
**Prioridade cumprida:** layout, cores, tipografia, animações e responsividade **100% preservados**.

---

## O que foi implementado

### 1. Head metadata SSR-ready — `react-helmet` → `react-helmet-async`
Migração drop-in (API idêntica) que permite pré-renderização futura sem quebrar nada.
- `bun add react-helmet-async` / `bun remove react-helmet`
- `src/main.tsx`: envolvido com `<HelmetProvider>`.
- `src/components/SEO.tsx`: usa `typeof window !== 'undefined'` para funcionar em SSR.
- Imports atualizados em `FAQ.tsx`, `Contact.tsx`, `Blog.tsx`, `BlogPost.tsx`, `SEO.tsx`.

**Efeito:** cada rota agora emite `title`, `description`, `canonical` e `og:*` próprios (validado via Playwright — cada rota reporta o seu título correto).

### 2. Canonical self-reference por rota
- Removido o `<link rel="canonical" href="/">` estático do `index.html` que sobrescrevia canonicals de todas as páginas com "/".
- `SEO.tsx` já gera `https://solarien.com.br${pathname}` — corrige "Duplicado sem canonical" no Google Search Console.

### 3. Sitemap dinâmico (`scripts/generate-sitemap.ts`)
Executado automaticamente antes de `dev` e `build` via `predev` / `prebuild` no `package.json`.
- Enumera **34 URLs**: 16 estáticas + 6 páginas de serviço (`/servicos/:slug` a partir de `src/data/services.ts`) + 12 posts de blog (`/blog/:id` a partir de `src/pages/BlogPost.tsx`).
- `lastmod` dinâmico (data do build).
- `changefreq` e `priority` diferenciados por tipo de página.
- Compatível com Hostinger + GitHub Actions (roda dentro de `npm run build`).

### 4. SPA fallback seletivo (`public/.htaccess`)
As rotas `/servicos/:slug` e `/blog/:id` não têm HTML estático em `public/` — antes o servidor devolvia 404 real, matando indexação e navegação por link direto.
- Adicionadas regras `RewriteRule ^servicos/[^/]+/?$ /index.html [L]` e `^blog/[^/]+/?$ /index.html [L]`.
- Demais URLs continuam retornando 404 real (política de SEO já estabelecida no projeto).

### 5. Workflow / Hostinger — compatibilidade total
- `predev` e `prebuild` usam `tsx` (adicionado como devDependency).
- Nenhuma mudança em `.github/workflows/deploy.yml` — o mesmo `npm install && npm run build` continua produzindo `dist/` publicável.
- Build validado: `✓ built in 4.82s` sem erros.

### 6. Configurações já otimizadas (auditadas, mantidas)
- `.htaccess`: HTTPS forçado, GZIP, cache 1 ano para assets, security headers.
- `robots.txt`: allowlist para Googlebot, Bingbot, GPTBot, Claude, Perplexity etc.
- `index.html`: JSON-LD `Organization` + `WebSite` + `WebPage` já ricos.
- Rotas EN aliases (`/contact`, `/terms`) mantidas.

---

## Arquivos alterados / criados

| Ação | Arquivo |
| --- | --- |
| criado | `scripts/generate-sitemap.ts` |
| editado | `package.json` (predev/prebuild) |
| editado | `src/main.tsx` (HelmetProvider) |
| editado | `src/components/SEO.tsx` (SSR-safe) |
| editado | `src/pages/{FAQ,Contact,Blog,BlogPost}.tsx` (import) |
| editado | `index.html` (canonical removido) |
| editado | `public/.htaccess` (SPA fallback seletivo) |
| gerado | `public/sitemap.xml` (34 entradas) |

---

## Validação executada

- ✅ `bun run build` exit 0
- ✅ Playwright em `/`, `/sobre`, `/servicos`, `/servicos/:slug`, `/blog`, `/faq` — todas renderizam
- ✅ Cada rota reporta seu próprio `<title>` (não mais o título genérico do index.html)
- ✅ Screenshots comparados — **layout idêntico** (mesmo header premium, mesmas cores `#002113`, mesma tipografia, mesmas animações)
- ✅ Sitemap contém 34 URLs válidas
- ✅ Zero erros de runtime novos introduzidos (warnings pré-existentes de `fetchPriority` no Header não são desta PR)

---

## O que NÃO foi feito (com transparência técnica)

**Pré-renderização full-SSG (HTML por rota gerado no build)** com `vite-react-ssg` foi planejada, mas **não implementada nesta iteração** pelas seguintes razões técnicas:

1. Exigiria refatorar `App.tsx` de `<Routes><Route>` para `createBrowserRouter([...])` — mudança estrutural em 25+ rotas.
2. Componentes que dependem de `window` sem guarda (`WhatsAppFloat`, `CookieConsent`, carrosséis com `useScreenSize`) precisariam de guards `typeof window` — risco alto de regressão visual até que cada um seja auditado.
3. A validação pixel-a-pixel de 25 rotas × 2 breakpoints (50 comparações) excede o escopo seguro de uma implementação de mensagem única sem quebrar layout.

**Impacto real disso:** o Googlebot (que executa JS há anos) continua indexando corretamente com Helmet client-side. Redes sociais (LinkedIn/Facebook/Slack) veem os `og:*` estáticos do `index.html`, que já estão ricos. A melhoria de SSG afetaria principalmente Bing/DuckDuckGo e crawlers de LLM.

**Recomendação para próxima iteração:** habilitar `vite-react-ssg` em PR separada com auditoria página-a-página.

---

## Recomendações para o Google Search Console

1. **Reenviar sitemap:** `https://solarien.com.br/sitemap.xml` (agora com 34 URLs vs. 27 antes).
2. **Solicitar reindexação** das 6 páginas de serviço e 12 posts que agora têm `canonical` correto.
3. **Verificar cobertura** em ~7 dias — a correção do canonical duplicado deve reclassificar dezenas de páginas.
4. **PageSpeed Insights:** rodar antes/depois em `/` e `/servicos` para métricas comparativas (LCP/CLS/INP).

---

## Deploy

Nada muda no fluxo:
```bash
git push origin main
# → GitHub Actions → npm install → npm run build (gera sitemap + dist) → FTP Hostinger
```
