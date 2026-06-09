
# Plano: Expansão SEO Solarien — Curadoria de Centenas de Palavras-chave

## Diagnóstico atual (GSC)
- Apenas ~50 termos gerando impressões em 3 meses, dominados pela marca ("solarien", "solarien energy")
- 1,39 mil impressões / 164 cliques / posição média 10,1 — site está na borda da página 1, falta volume de conteúdo
- 40 páginas não indexadas vs 2 indexadas — problema crítico de indexação paralelo (404s antigos do WordPress)
- Zero ranqueamento para termos genéricos de alto volume do setor

## Objetivo
Transformar o solarien.com.br em referência SEO no setor de energia, ranqueando para **centenas** de termos de Mercado Livre de Energia, Energia por Assinatura, Geração Distribuída, Economia de Energia, Portabilidade e Consultoria Energética — combinando keywords primárias (cabeça), secundárias (corpo) e cauda longa.

## Curadoria de palavras-chave (extraída dos 40+ sites concorrentes referenciados)

### 1. Mercado Livre de Energia (primárias)
mercado livre de energia, ACL, ambiente de contratação livre, migração mercado livre, consumidor livre, consumidor especial, mercado cativo vs livre, comercializadora de energia, gerador de energia, MWh, contrato bilateral de energia, CCEE, ANEEL, modalidade tarifária, demanda contratada, sobrecontratação, subcontratação, garantia física, encargos setoriais, MCP mercado de curto prazo, PLD preço de liquidação das diferenças, sazonalização, flexibilidade contratual.

### 2. Energia por Assinatura / Solar Compartilhada
energia por assinatura, assinatura de energia solar, energia solar compartilhada, geração distribuída GD, autoconsumo remoto, geração compartilhada, consórcio de energia solar, fazenda solar, usina solar por assinatura, créditos de energia, compensação de energia elétrica, lei 14.300, marco legal GD, sistema de compensação SCEE, energia limpa por assinatura, sem investimento em painéis, desconto na conta de luz.

### 3. Economia de Energia
como economizar energia, redução conta de luz, economia conta de energia empresa, dicas economia energia elétrica, eficiência energética, gestão de energia, auditoria energética, consumo consciente, bandeira tarifária, horário de ponta, tarifa branca, tarifa verde, tarifa azul, fator de potência, demanda reativa.

### 4. Geração Distribuída e Solar
geração distribuída fotovoltaica, micro geração, mini geração, painel solar empresarial, usina solar fotovoltaica, sistema fotovoltaico, energia solar industrial, energia solar comercial, ROI energia solar, payback solar, financiamento energia solar, licenciamento usina solar, O&M usinas solares.

### 5. Portabilidade Energética / Migração
portabilidade de energia, migração energética, troca de fornecedor de energia, livre escolha do consumidor, abertura mercado livre baixa tensão, mercado livre para PMEs, mercado livre residencial 2026, varejista de energia.

### 6. Consultoria Energética
consultoria energética, consultoria mercado livre, consultoria em energia solar, gestão de contratos de energia, gestor de energia, broker de energia, assessoria energética, viabilidade energética, diagnóstico energético, análise de fatura de energia.

### 7. Long-tail (cauda longa) — exemplos
"como migrar para o mercado livre de energia", "quanto se economiza no mercado livre de energia", "vale a pena energia por assinatura", "energia solar por assinatura sem instalar painéis", "como reduzir conta de luz da empresa em 40%", "diferença mercado livre e cativo", "consumidor especial pode migrar 2026", "economia de energia para indústrias", "energia compartilhada como funciona lei 14300", "consultoria mercado livre de energia preço", "melhor comercializadora de energia Brasil", "energia por assinatura sem fidelidade", "geração distribuída remota para empresas".

## Implementação técnica

### A. Metadados sitewide (impacto imediato)
1. `index.html` — title/description/keywords/og enriquecidos com termos primários
2. Cada `public/*/index.html` (sobre, servicos, como-funciona, contato, faq, depoimentos, licenciado, usinas, blog) — meta title/description/keywords + Schema otimizados por tema
3. `src/components/SEO.tsx` — expandir defaultKeywords e permitir keywords mais ricas por página
4. `src/pages/*.tsx` — atualizar o `<SEO>` de cada página React com keywords secundárias e cauda longa específicas ao tema da página

### B. Conteúdo on-page (sinaliza relevância ao Google)
1. Hero/seções de Index, Services, HowItWorks, Licensed: enriquecer com termos primários sem keyword stuffing — variantes naturais nos H2/H3 e parágrafos
2. Footer: adicionar bloco "Soluções" com links âncora ricos em keywords (mercado livre, energia por assinatura, geração distribuída, etc.) — também ajuda crawling
3. FAQ: adicionar 10+ Q&As novas com perguntas long-tail reais ("Como funciona migração para mercado livre?", "Quem pode aderir energia por assinatura?", "O que é geração compartilhada?", etc.) → também alimenta FAQPage schema

### C. Sitemap & robots
- Atualizar `public/sitemap.xml` com lastmod atualizado
- `llms.txt` já feito anteriormente, manter

### D. JSON-LD Service / Product
- Adicionar `Service` schema em `/servicos` com lista de `hasOfferCatalog` cobrindo: Mercado Livre, Energia por Assinatura, Consultoria, Licenciamento, Gestão de Contratos
- WebSite + SearchAction já existe; reforçar `about` com keywords

## Escopo do que NÃO está incluído
- **Não vou criar artigos de blog novos** (cada artigo é trabalho substancial e o usuário tem um fluxo separado para blog). Posso fazer isso em entregas seguintes se quiser.
- **Não mexo em layout/visual** — apenas SEO/metadados e enriquecimento textual sutil em seções existentes.
- **Indexação 404 antiga (40 URLs do WordPress legado)** — recomendo tratar em PR separado com redirects 301 no `.htaccess`. Posso incluir se confirmar.

## Entregáveis desta execução
1. SEO.tsx ampliado (default keywords sitewide com ~80 termos núcleo)
2. Todos os `public/*/index.html` reescritos com title/description/keywords/OG específicos e ricos
3. Todos os `src/pages/*.tsx` com `<SEO>` atualizado por tema
4. FAQ.tsx — +10 Q&As long-tail (e schema atualizado)
5. Footer — bloco de soluções com links âncora ricos
6. sitemap.xml atualizado
7. Service JSON-LD em /servicos

## Próximo passo após aprovação
Quer que eu também:
- (a) inclua redirects 301 no `.htaccess` para os 40 URLs 404 do GSC (recupera autoridade)?
- (b) gere 5–10 pautas de blog long-tail prontas para você publicar (sem escrever os artigos completos agora)?
