import React from 'react';
import { Eye, Mail, Phone, Globe } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';
import { PageShell, PageHero, PremiumSection, PremiumGrid, PremiumCard, PremiumIconBadge } from '../components/premium/PremiumUI';
import PageBackground, { PAGE_BG } from '@/components/premium/PageBackground';

const Transparency = () => (
  <div className="min-h-screen relative isolate">
      <PageBackground image={PAGE_BG.legal} />
    <SEO title="Política de Transparência - Solarien" description="Como garantimos clareza e ética em nossos serviços." keywords="transparência solarien" canonical="https://solarien.com.br/politica-de-transparencia" />
    <Header />
    <PageShell>
      <div className="container mx-auto px-4 py-4"><Breadcrumbs /></div>
      <PageHero
        eyebrow="Políticas"
        title={<span className="inline-flex items-center gap-3"><Eye className="w-10 h-10 text-solarien-primary" strokeWidth={1.25} />Política de Transparência</span>}
        subtitle="Como garantimos clareza, ética e honestidade em todos os nossos serviços e operações."
      />

      <PremiumSection label="Documento">
        <div className="border border-white/10 bg-[#002113] p-10 md:p-14 space-y-10 max-w-4xl mx-auto">
          <section>
            <h2 className="text-xl font-light text-white tracking-tight mb-3">1. Compromisso com a Transparência</h2>
            <p className="text-white/70 font-light leading-relaxed">
              Acreditamos que a transparência é essencial para estabelecer relações de confiança. Nosso compromisso é fornecer informações claras, precisas e acessíveis sobre nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light text-white tracking-tight mb-3">2. Sobre Nossos Serviços</h2>
            <p className="text-white/70 font-light leading-relaxed mb-4">
              Conectamos residências, comércios e indústrias a usinas solares através do mercado livre de energia e energia compartilhada por assinatura. A portabilidade é gratuita, com descontos de 10% a 35%.
            </p>
            <ul className="space-y-3 text-white/70 font-light leading-relaxed">
              <li className="flex gap-3"><span className="w-1 h-1 mt-2 rounded-full bg-solarien-primary flex-shrink-0" />Não há necessidade de instalações, obras ou investimentos.</li>
              <li className="flex gap-3"><span className="w-1 h-1 mt-2 rounded-full bg-solarien-primary flex-shrink-0" />Processo sem burocracia, com injeção de energia em até 90 dias.</li>
              <li className="flex gap-3"><span className="w-1 h-1 mt-2 rounded-full bg-solarien-primary flex-shrink-0" />Opção de assinatura com fidelidade para descontos maiores.</li>
              <li className="flex gap-3"><span className="w-1 h-1 mt-2 rounded-full bg-solarien-primary flex-shrink-0" />Assinatura 100% online com reconhecimento facial.</li>
              <li className="flex gap-3"><span className="w-1 h-1 mt-2 rounded-full bg-solarien-primary flex-shrink-0" />Desconto garantido em contrato.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-light text-white tracking-tight mb-3">3. Dados e Privacidade</h2>
            <p className="text-white/70 font-light leading-relaxed">
              Seguimos todas as regulamentações aplicáveis sobre proteção de dados pessoais. Garantimos transparência na coleta, segurança no armazenamento e controle pelos usuários sobre suas informações.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light text-white tracking-tight mb-3">4. Sustentabilidade</h2>
            <p className="text-white/70 font-light leading-relaxed">
              Nosso modelo de negócio promove o uso de energia renovável e acessível, contribuindo para um futuro mais sustentável.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light text-white tracking-tight mb-3">5. Atualização da Política</h2>
            <p className="text-white/70 font-light leading-relaxed">
              Esta política pode ser revisada periodicamente. Alterações serão comunicadas de forma clara aos clientes.
            </p>
          </section>
        </div>
      </PremiumSection>

      <PremiumSection label="Canais de Comunicação">
        <PremiumGrid cols={3}>
          <PremiumCard>
            <PremiumIconBadge Icon={Mail} />
            <h3 className="text-lg font-light text-white tracking-tight mb-2">E-mail</h3>
            <p className="text-white/65 font-light text-sm">contato@solarien.com.br</p>
          </PremiumCard>
          <PremiumCard>
            <PremiumIconBadge Icon={Phone} />
            <h3 className="text-lg font-light text-white tracking-tight mb-2">Telefone</h3>
            <p className="text-white/65 font-light text-sm">+55 (11) 99736-1698</p>
          </PremiumCard>
          <PremiumCard>
            <PremiumIconBadge Icon={Globe} />
            <h3 className="text-lg font-light text-white tracking-tight mb-2">Site</h3>
            <p className="text-white/65 font-light text-sm">solarien.com.br</p>
          </PremiumCard>
        </PremiumGrid>
      </PremiumSection>
    </PageShell>
    <Footer />
  </div>
);

export default Transparency;
