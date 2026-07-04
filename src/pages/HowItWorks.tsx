import React from 'react';
import { Zap, CheckCircle2, Users, Building2, Target, HelpCircle, ArrowRight, LucideIcon } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import StateCoverageSimulator from '../components/StateCoverageSimulator';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import {
import PageBackground, { PAGE_BG } from '@/components/premium/PageBackground';
  PageShell,
  PageHero,
  PremiumSection,
  PremiumGrid,
  PremiumCard,
  PremiumIconBadge,
  PremiumCTA,
} from '../components/premium/PremiumUI';

const HowItWorks = () => {
  const distributors = [
    'CPFL Paulista', 'CPFL Piratininga', 'Energisa', 'Copel', 'Equatorial', 'Cemig',
    'Celesc', 'CEB', 'Celpe', 'Coelba', 'Cosern', 'Neoenergia', 'Elektro', 'Enel', 'EDP',
  ];

  const energyGroups = [
    { id: 'A', title: 'Grupo A – Alta e Média Tensão', tooltip: 'Grandes indústrias, shoppings, universidades, mineradoras, hospitais.' },
    { id: 'B1', title: 'Grupo B1 – Residencial', tooltip: 'Residências urbanas, apartamentos, condomínios.' },
    { id: 'B2', title: 'Grupo B2 – Rural', tooltip: 'Sítios, fazendas, agroindústrias, cooperativas rurais.' },
    { id: 'B3', title: 'Grupo B3 – Demais Classes', tooltip: 'Pequenos comércios, padarias, salões, escolas particulares.' },
    { id: 'B4a', title: 'Grupo B4a – Iluminação Pública', tooltip: 'Postes, praças públicas, túneis.' },
    { id: 'B4b', title: 'Grupo B4b – Serviços Públicos', tooltip: 'Semáforos, câmeras de segurança, fontes públicas.' },
  ];

  const steps: { step: string; title: string; description: string }[] = [
    { step: '01', title: 'Cadastro Simples', description: 'Cadastro em nossa plataforma em menos de 5 minutos.' },
    { step: '02', title: 'Escolha do Plano', description: 'Selecione o plano que melhor se adequa ao seu consumo.' },
    { step: '03', title: 'Comece a Economizar', description: 'Receba créditos de energia solar direto na sua conta.' },
  ];

  const advantages: { icon: LucideIcon; title: string; description: string }[] = [
    { icon: CheckCircle2, title: 'Economia Imediata', description: 'Reduza sua conta de luz desde o primeiro mês.' },
    { icon: CheckCircle2, title: 'Sem Investimento', description: 'Não precisa instalar painéis ou fazer obras.' },
    { icon: CheckCircle2, title: 'Energia Limpa', description: '100% renovável e sustentável.' },
    { icon: CheckCircle2, title: 'Sem Fidelidade', description: 'Cancele quando quiser, sem multas.' },
  ];

  return (
    <div className="min-h-screen relative isolate">
      <PageBackground image={PAGE_BG.howItWorks} />
      <SEO
        title="Como Funciona a Energia por Assinatura e Mercado Livre"
        description="Entenda como funciona a energia por assinatura e o mercado livre. Processo simples, economia garantida."
        keywords="como funciona mercado livre, energia por assinatura, lei 14300, grupo A B, consumidor livre"
        canonical="https://solarien.com.br/como-funciona"
      />
      <Header />
      <PageShell>
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs />
        </div>

        <PageHero
          eyebrow="Processo"
          title="Como funciona a economia."
          subtitle="Migração simples para energia por assinatura e mercado livre. Sem obras, sem placas, sem custos."
          stats={[
            { value: 'Até 35%', label: 'Grupo B' },
            { value: 'Até 45%', label: 'Grupo A' },
            { value: '5 min', label: 'Cadastro' },
          ]}
        />

        <PremiumSection label="Etapas">
          <PremiumGrid cols={3}>
            {steps.map((s) => (
              <PremiumCard key={s.step}>
                <div className="text-solarien-primary text-sm tracking-[0.2em] font-light mb-6">{s.step}</div>
                <h3 className="text-xl font-light text-white tracking-tight mb-3">{s.title}</h3>
                <p className="text-white/60 font-light text-sm leading-relaxed">{s.description}</p>
              </PremiumCard>
            ))}
          </PremiumGrid>
        </PremiumSection>

        <PremiumSection label="Vantagens">
          <PremiumGrid cols={4}>
            {advantages.map((a) => (
              <PremiumCard key={a.title}>
                <PremiumIconBadge Icon={a.icon} />
                <h3 className="text-lg font-light text-white tracking-tight mb-2">{a.title}</h3>
                <p className="text-white/60 font-light text-sm leading-relaxed">{a.description}</p>
              </PremiumCard>
            ))}
          </PremiumGrid>
        </PremiumSection>

        <PremiumSection label="Grupos Tarifários">
          <TooltipProvider>
            <PremiumGrid cols={3}>
              {energyGroups.map((g) => (
                <PremiumCard key={g.id}>
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-solarien-primary text-sm tracking-[0.2em] font-light">{g.id}</span>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button className="text-white/40 hover:text-white">
                          <HelpCircle className="w-4 h-4" strokeWidth={1.5} />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="max-w-xs">
                        <p className="text-sm">{g.tooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <h3 className="text-base font-light text-white tracking-tight">{g.title}</h3>
                </PremiumCard>
              ))}
            </PremiumGrid>
          </TooltipProvider>
        </PremiumSection>

        <PremiumSection label="Comparativo">
          <PremiumGrid cols={2}>
            <PremiumCard>
              <PremiumIconBadge Icon={Users} />
              <h3 className="text-2xl font-light text-white tracking-tight mb-3">Grupo B – Residências</h3>
              <p className="text-white/65 font-light text-sm mb-6">Para residências e pequenos comércios.</p>
              <ul className="space-y-3">
                {['Desconto de até 35%', 'Processo simplificado', 'Sem burocracia'].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-white/80 text-sm font-light">
                    <CheckCircle2 className="w-4 h-4 text-solarien-primary mt-0.5" strokeWidth={1.5} />
                    {f}
                  </li>
                ))}
              </ul>
            </PremiumCard>
            <PremiumCard>
              <PremiumIconBadge Icon={Building2} />
              <h3 className="text-2xl font-light text-white tracking-tight mb-3">Grupo A – Empresas</h3>
              <p className="text-white/65 font-light text-sm mb-6">Para indústrias e grandes empresas.</p>
              <ul className="space-y-3">
                {['Desconto de até 45%', 'Volumes maiores', 'Consultoria especializada'].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-white/80 text-sm font-light">
                    <CheckCircle2 className="w-4 h-4 text-solarien-primary mt-0.5" strokeWidth={1.5} />
                    {f}
                  </li>
                ))}
              </ul>
            </PremiumCard>
          </PremiumGrid>
        </PremiumSection>

        <PremiumSection label="Distribuidoras">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/10 border border-white/10">
            {distributors.map((d) => (
              <div key={d} className="bg-[#002113] p-5 text-center text-white/80 font-light text-sm tracking-wide">
                {d}
              </div>
            ))}
          </div>
        </PremiumSection>

        <PremiumSection label="Cobertura">
          <div className="border border-white/10 bg-[#002113] p-4">
            <StateCoverageSimulator />
          </div>
        </PremiumSection>

        <PremiumCTA
          title="Pronto para começar?"
          description="Junte-se a milhares de brasileiros economizando com energia limpa."
          primary={{ href: 'https://painel.solarien.com.br/solarien', label: 'Cadastrar Agora' }}
          secondary={{ to: '/contato', label: 'Falar com Consultor' }}
        />
      </PageShell>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default HowItWorks;
