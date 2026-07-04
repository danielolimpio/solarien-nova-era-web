import React from 'react';
import { Cookie } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';
import { PageShell, PageHero, PremiumSection } from '../components/premium/PremiumUI';
import PageBackground, { PAGE_BG } from '@/components/premium/PageBackground';

const sections = [
  { h: '1. Introdução', p: 'A Solarien utiliza cookies para melhorar a experiência dos visitantes em nosso site, personalizar conteúdo e garantir o funcionamento eficiente da plataforma.' },
  { h: '2. O que são Cookies?', p: 'Cookies são pequenos arquivos de texto armazenados em seu dispositivo quando você acessa nosso site. Eles ajudam a otimizar sua navegação e a reconhecer suas preferências.' },
  { h: '3. Como utilizamos os Cookies?', p: 'Essenciais para o funcionamento adequado do site; de desempenho para análise; de funcionalidade para personalização; e de publicidade para apresentar conteúdo relevante.' },
  { h: '4. Gerenciamento de Cookies', p: 'Você pode configurar seu navegador para recusar ou excluir cookies a qualquer momento. Algumas funcionalidades do site podem ser afetadas ao desativá-los.' },
  { h: '5. Atualizações', p: 'Esta política pode ser atualizada periodicamente para refletir mudanças tecnológicas ou regulamentares.' },
  { h: '6. Contato', p: 'E-mail: contato@solarien.com.br · Telefone: +55 (11) 99736-1698' },
];

const Cookies = () => (
  <div className="min-h-screen relative isolate">
      <PageBackground image={PAGE_BG.legal} />
    <SEO title="Política de Cookies - Solarien" description="Saiba como usamos cookies." keywords="política cookies solarien" canonical="https://solarien.com.br/politica-de-cookies" />
    <Header />
    <PageShell>
      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs />
      </div>
      <PageHero
        eyebrow="Políticas"
        title={<span className="inline-flex items-center gap-3"><Cookie className="w-10 h-10 text-solarien-primary" strokeWidth={1.25} />Política de Cookies</span>}
        subtitle="Como usamos cookies para personalizar sua navegação e garantir uma experiência segura."
      />
      <PremiumSection label="Documento">
        <div className="border border-white/10 bg-[#002113] p-10 md:p-14 space-y-10 max-w-4xl mx-auto">
          {sections.map((s) => (
            <section key={s.h}>
              <h2 className="text-xl font-light text-white tracking-tight mb-3">{s.h}</h2>
              <p className="text-white/70 font-light leading-relaxed">{s.p}</p>
            </section>
          ))}
          <p className="text-solarien-primary font-light text-sm border-t border-white/10 pt-6">
            Ao continuar utilizando nosso site, você concorda com o uso de cookies conforme descrito nesta política.
          </p>
        </div>
      </PremiumSection>
    </PageShell>
    <Footer />
    <WhatsAppFloat />
  </div>
);

export default Cookies;
