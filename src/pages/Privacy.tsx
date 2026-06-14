import React from 'react';
import { ShieldCheck } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';
import { PageShell, PageHero, PremiumSection } from '../components/premium/PremiumUI';

const sections = [
  { h: '1. Coleta de Dados', body: 'Coletamos dados da conta de energia (número, unidade consumidora, histórico de consumo) e dados pessoais (nome completo, CPF, e-mail e WhatsApp), além do anexo da conta enviado no cadastro.' },
  { h: '2. Uso dos Dados', body: 'Os dados são usados para processar a portabilidade, analisar descontos, gerar e enviar faturas mensais, manter comunicação sobre consumo e cumprir normas regulatórias.' },
  { h: '3. Compartilhamento', body: 'Não vendemos, alugamos ou compartilhamos dados, exceto com parceiros responsáveis pelo processamento da portabilidade e geração de faturas, ou quando exigido por lei.' },
  { h: '4. Armazenamento e Segurança', body: 'Dados armazenados em ambiente seguro com criptografia e controle de acesso. O tempo de retenção segue as finalidades descritas e obrigações legais.' },
  { h: '5. Direitos do Titular (LGPD)', body: 'Acesso, correção, exclusão, portabilidade, revogação de consentimentos e informações sobre uso dos dados. Contato: contato@solarien.com.br' },
  { h: '6. Alterações nesta Política', body: 'A Solarien pode modificar esta política a qualquer momento. Alterações serão publicadas em www.solarien.com.br.' },
  { h: '7. Contato', body: 'E-mail: contato@solarien.com.br · WhatsApp: +55 (11) 99736-1698 · Site: www.solarien.com.br' },
];

const Privacy = () => (
  <div className="min-h-screen">
    <SEO title="Política de Privacidade - Solarien" description="Como protegemos suas informações." keywords="privacidade solarien, LGPD energia" canonical="https://solarien.com.br/politica-de-privacidade" />
    <Header />
    <PageShell>
      <div className="container mx-auto px-4 py-4"><Breadcrumbs /></div>
      <PageHero
        eyebrow="Políticas"
        title={<span className="inline-flex items-center gap-3"><ShieldCheck className="w-10 h-10 text-solarien-primary" strokeWidth={1.25} />Política de Privacidade</span>}
        subtitle="Como coletamos, utilizamos, armazenamos e protegemos suas informações pessoais. Última atualização: 06/03/2025."
      />
      <PremiumSection label="Documento">
        <div className="border border-white/10 bg-[#002113] p-10 md:p-14 space-y-10 max-w-4xl mx-auto">
          <p className="text-white/70 font-light leading-relaxed">
            A Solarien tem o compromisso de proteger a privacidade e os dados pessoais de seus usuários. Esta política explica como tratamos as informações fornecidas pelos clientes dos nossos serviços de portabilidade e energia compartilhada.
          </p>
          {sections.map((s) => (
            <section key={s.h}>
              <h2 className="text-xl font-light text-white tracking-tight mb-3">{s.h}</h2>
              <p className="text-white/70 font-light leading-relaxed">{s.body}</p>
            </section>
          ))}
          <p className="text-solarien-primary font-light text-sm border-t border-white/10 pt-6">
            Ao utilizar nossos serviços, você declara estar ciente e de acordo com os termos desta Política de Privacidade.
          </p>
        </div>
      </PremiumSection>
    </PageShell>
    <Footer />
    <WhatsAppFloat />
  </div>
);

export default Privacy;
