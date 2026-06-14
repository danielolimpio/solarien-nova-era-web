import React from 'react';
import { FileText } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';
import { PageShell, PageHero, PremiumSection } from '../components/premium/PremiumUI';

const sections = [
  { h: '1. Aceitação dos Termos', body: 'Ao utilizar os serviços da Solarien, você declara ter lido, compreendido e aceitado estes Termos.' },
  { h: '2. Sobre a Solarien', body: 'Oferecemos portabilidade nas contas de energia para residências, comércios e indústrias por meio da Energia Compartilhada por Assinatura e do Mercado Livre de Energia.' },
  { h: '3. Cadastro e Envio de Dados', body: 'O usuário fornecerá dados da conta de energia, dados pessoais e o anexo da conta. Declara que as informações são verdadeiras.' },
  { h: '4. Uso dos Serviços', body: 'O usuário autoriza o uso dos dados para intermediação da portabilidade, comunicações via WhatsApp/e-mail e análise do perfil de consumo.' },
  { h: '5. Responsabilidades do Usuário', body: 'Fornecer informações corretas, manter contato ativo, respeitar estes termos e não usar os serviços para fins ilícitos.' },
  { h: '6. Responsabilidades da Solarien', body: 'Proteger dados conforme a Política de Privacidade, oferecer suporte, atuar como intermediadora com transparência e respeitar normas regulatórias.' },
  { h: '7. Limitações de Responsabilidade', body: 'Não nos responsabilizamos por informações incorretas, mudanças regulatórias, falhas de terceiros ou mau uso dos serviços.' },
  { h: '8. Alterações nos Termos', body: 'A Solarien pode modificar estes Termos para atender novas regulamentações ou melhorias. Alterações serão publicadas em www.solarien.com.br.' },
  { h: '9. Rescisão e Cancelamento', body: 'O usuário pode solicitar o cancelamento a qualquer momento. A Solarien pode suspender o acesso em caso de descumprimento.' },
  { h: '10. Contato', body: 'E-mail: contato@solarien.com.br · WhatsApp: +55 (11) 99736-1698 · Site: www.solarien.com.br' },
];

const Terms = () => (
  <div className="min-h-screen">
    <SEO title="Termos de Uso - Solarien" description="Termos e condições dos nossos serviços." keywords="termos de uso solarien" canonical="https://solarien.com.br/termos-de-uso" />
    <Header />
    <PageShell>
      <div className="container mx-auto px-4 py-4"><Breadcrumbs /></div>
      <PageHero
        eyebrow="Políticas"
        title={<span className="inline-flex items-center gap-3"><FileText className="w-10 h-10 text-solarien-primary" strokeWidth={1.25} />Termos de Uso</span>}
        subtitle="Leia os termos e condições que regem o uso dos nossos serviços."
      />
      <PremiumSection label="Documento">
        <div className="border border-white/10 bg-[#002113] p-10 md:p-14 space-y-10 max-w-4xl mx-auto">
          <p className="text-white/70 font-light leading-relaxed">
            Bem-vindo à Solarien. Ao acessar e utilizar nosso site e serviços, você concorda com os termos descritos abaixo.
          </p>
          {sections.map((s) => (
            <section key={s.h}>
              <h2 className="text-xl font-light text-white tracking-tight mb-3">{s.h}</h2>
              <p className="text-white/70 font-light leading-relaxed">{s.body}</p>
            </section>
          ))}
          <p className="text-solarien-primary font-light text-sm border-t border-white/10 pt-6">
            Ao utilizar nossos serviços, você declara estar ciente e de acordo com os termos estabelecidos neste documento.
          </p>
        </div>
      </PremiumSection>
    </PageShell>
    <Footer />
    <WhatsAppFloat />
  </div>
);

export default Terms;
