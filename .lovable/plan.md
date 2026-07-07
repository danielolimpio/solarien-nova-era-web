## Objetivo

Tornar o site 100% indexável pelo Google, sem alterar visual, layout, funcionalidades ou processo de deploy. Corrigir os erros do Search Console e expandir conteúdo com 1.500+ termos-chave inseridos naturalmente em FAQs e artigos.

## Diagnóstico atual (Search Console)

- **14 páginas não indexadas / 2 indexadas** — o Google está enxergando o HTML "vazio" do SPA antes do React montar. Só a home e `/servicos` conseguem indexar de forma consistente.
- **404 em 11 URLs**: `/about` (alias EN inexistente na build atual), `/feedback` (sem HTML estático), `/politica-de-transparencia/`, `/termos-de-uso`, e 7 posts do blog (`/blog/transformacao-digital-mercado-livre`, `/blog/7-mitos-mercado-livre-energia`, etc.). Existem os arquivos em `public/blog/index.html` mas **não** os `public/blog/<slug>/index.html` para cada post.
- **"Rastreada mas não indexada"** em `/sobre`, `/servicos`, `/?q={search_term_string}` — sintoma clássico de SPA sem conteúdo no HTML inicial (o Google decide não indexar por baixo valor percebido).
- **Sitemap** aponta 28 URLs mas a maioria devolve HTML idêntico ao da home (título/description iguais até o React montar).

## Estratégia: SSG via pré-renderização (sem trocar de framework)

Vou usar **`vite-plugin-prerender`** (baseado em Puppeteer/react-snap). Ele:

1. Roda o build normal do Vite (SPA continua funcionando igual em runtime).
2. Depois do build, sobe um headless Chrome, visita cada rota, captura o HTML final já renderizado (com meta tags do Helmet, textos, imagens, backgrounds — tudo) e grava um `dist/<rota>/index.html`.
3. O usuário navega no site como SPA (nada muda visualmente). O Google recebe HTML completo em cada URL.

**Por que essa abordagem:**
- **Zero risco de quebrar layout** — o HTML gerado é o mesmo que o navegador do usuário já vê hoje. O React hidrata em cima.
- **Zero mudança no processo de deploy** — continua sendo `npm run build` → `dist/` → hospedagem estática (`.htaccess` continua valendo).
- **Zero mudança em componentes** — não precisa migrar para Next/Remix/Astro.

**Rotas pré-renderizadas** (todas as do `App.tsx`, exceto duplicatas EN):
`/`, `/sobre`, `/servicos`, `/servicos/<slug>` (todos os slugs de `services.ts`), `/como-funciona`, `/usinas`, `/licenciado`, `/contato`, `/faq`, `/blog`, `/blog/<id>` (todos os posts), `/depoimentos`, `/feedback`, `/sitemap`, `/politica-de-transparencia`, `/politica-de-privacidade`, `/termos-de-uso`, `/politica-de-cookies`.

Total estimado: **~35 URLs** pré-renderizadas.

## Correções específicas do Search Console

| Erro GSC | Causa | Correção |
|---|---|---|
| 404 em `/blog/<slug>` (7 URLs) | SPA fallback do host não devolveu 200 estável | Pré-render gera `dist/blog/<slug>/index.html` real → 200 garantido |
| 404 em `/about`, `/terms`, `/privacy` (aliases EN) | Rota React existe mas Google indexou variante antiga | Remover aliases EN das rotas do sitemap; canonical aponta para versão PT; redirecionamentos 301 no `.htaccess` de `/about → /sobre`, `/terms → /termos-de-uso`, `/privacy → /politica-de-privacidade` |
| 404 em `/feedback` | Sem HTML estático no build antigo | Pré-render cria `dist/feedback/index.html` |
| `/?q={search_term_string}` rastreada | JSON-LD SearchAction usa placeholder literal | Corrigir o SearchAction schema para o Google não tentar rastrear o placeholder |
| "Rastreada mas não indexada" em `/sobre`, `/servicos` | HTML vazio | Pré-render entrega conteúdo real + meta única |
| Sitemap com 28 entradas mas descoordenado | Ok em estrutura, apenas atualizar `lastmod` | `scripts/generate-sitemap.ts` já cobre — rodar no prebuild |

## Expansão SEO — 1.500+ termos naturais (sem "nuvens de palavras")

Curadoria por página, integrada organicamente em parágrafos, headings, FAQs e artigos. Núcleos temáticos:

- **Primárias**: mercado livre de energia, energia por assinatura, energia compartilhada, geração distribuída, energia solar, energia renovável, energia fotovoltaica.
- **Secundárias**: restituição de contas de energia, restituição de contas de água, economia de energia, economia de água, recuperação de créditos de energia, recuperação de créditos de água.
- **Cauda longa** (exemplos, todos inseridos em contexto real): "como migrar para o mercado livre de energia sendo consumidor cativo", "quanto custa aderir a energia por assinatura sem instalar placas", "diferença entre geração distribuída e energia compartilhada na regulação da ANEEL", "como recuperar créditos de ICMS sobre TUSD e TUST", "energia fotovoltaica por assinatura para empresas do lucro real", "restituição de valores pagos indevidamente na conta de energia", etc.

**Onde entra o conteúdo novo** (sem mudar layout, apenas ampliando textos existentes e adicionando FAQs):

1. **FAQ** — expandir de N para ~40 perguntas cobrindo cada tema (mercado livre, GD, energia compartilhada, restituições, créditos tributários, fotovoltaica). Componente visual atual preservado.
2. **Blog** — reescrever/expandir os 7 posts existentes com introdução, subtítulos H2/H3, glossário no fim de cada artigo. Nenhum layout novo.
3. **Serviços (`/servicos/<slug>`)** — cada página de serviço ganha 2 blocos de texto adicionais (descrição estendida + FAQ específica de 4-6 perguntas) usando os componentes que já existem.
4. **Home** — o texto das seções atuais é enriquecido (não são adicionadas seções novas).
5. **Sobre / Como Funciona / Licenciado / Usinas** — textos ampliados dentro dos blocos existentes.

**Regras de curadoria (SEO expert)**:
- 1 keyword primária por página (no `<title>`, H1 e primeiro parágrafo).
- 3-5 secundárias distribuídas em H2/H3 e corpo.
- Densidade natural (≤2%). Sinônimos e variações semânticas (LSI).
- Meta description única, 150-160 chars, com CTA.
- Schema JSON-LD específico por página: `Organization` (home), `FAQPage` (FAQ e páginas de serviço), `Article` + `BreadcrumbList` (blog), `Service` (serviços).
- Internal linking contextual entre artigos e páginas de serviço relacionadas.

## Arquivos a mexer

**Novos:**
- `scripts/prerender.mjs` — script que roda após `vite build`, itera rotas e gera HTMLs.
- `src/content/seo-copy.ts` — banco central dos textos ampliados por página (facilita revisão).

**Editados** (só conteúdo/meta — nada de layout):
- `package.json` — script `postbuild` chamando `prerender.mjs`.
- `src/pages/FAQ.tsx` — passa a ler perguntas de um array expandido em `src/data/faq.ts`.
- `src/data/services.ts` — descrição estendida + FAQ por serviço.
- `src/pages/BlogPost.tsx` (dados dos posts) — corpo expandido.
- `src/pages/Index.tsx`, `About.tsx`, `HowItWorks.tsx`, `Licensed.tsx`, `SolarPlants.tsx` — textos ampliados dentro dos componentes já existentes.
- `src/components/SEO.tsx` — já suporta tudo que precisamos, sem mudança.
- `public/.htaccess` — adicionar 3 redirects 301 EN→PT.
- `public/robots.txt` — confirmar `Sitemap:` e allow.

**Removidos** (para não conflitar com o pré-render):
- `public/blog/index.html`, `public/sobre/index.html`, `public/servicos/index.html`, etc. — os HTMLs estáticos manuais em `public/`. Serão substituídos pelo output do pré-render, garantindo sincronia com o React.

## Garantias de que o layout NÃO quebra

- Nada é alterado em `src/components/*` de UI (Header, Footer, Hero, backgrounds premium, seções). Só componentes textuais recebem mais conteúdo.
- Pré-render captura o DOM já pintado — se está bonito no navegador, está bonito no HTML gerado.
- `main.tsx` continua com `createRoot(...).render(...)` e agora com `hydrateRoot` fallback (react-snap padrão) — troca transparente.
- Antes de finalizar, rodo `vite build && node scripts/prerender.mjs` e comparo screenshots (Playwright) de 5 rotas-chave contra a versão atual para validar visualmente.

## O que o usuário NÃO verá mudar

- Visual, cores, fontes, imagens de fundo, animações, comportamento de navegação.
- Nada no fluxo de publicar (Lovable Publish continua funcionando).
- URLs (as mesmas de hoje).

## O que o usuário verá mudar

- Search Console: 404s caem para 0, "Rastreada mas não indexada" migra para "Indexada" em 1-3 semanas.
- Impressões e cliques sobem por causa da amplitude de termos cobertos.
- Cada aba do navegador com título/description próprios (hoje só a home tem).

## Ordem de execução

1. Instalar Puppeteer + criar `scripts/prerender.mjs` e `postbuild` no `package.json`.
2. Ajustar `main.tsx` para usar `hydrateRoot` quando `#root` já tiver conteúdo.
3. Rodar build local + prerender e validar 5 rotas visualmente.
4. Remover HTMLs estáticos manuais de `public/`.
5. Adicionar redirects 301 no `.htaccess`.
6. Corrigir schema `SearchAction` (remover placeholder rastreável).
7. Expandir conteúdo (FAQ → 40 perguntas, 7 blog posts, páginas de serviço) usando os componentes existentes.
8. Rodar prerender final + validação visual final.

Confirma que posso seguir com esse plano?
