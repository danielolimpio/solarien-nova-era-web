import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import {
import PageBackground, { PAGE_BG } from '@/components/premium/PageBackground';
  Zap,
  Network,
  ReceiptText,
  Scale,
  Droplets,
  Waves,
  CheckCircle2,
  ArrowRight,
  Calculator,
  Clock,
  Award,
  ShieldCheck,
  LucideIcon,
} from 'lucide-react';

interface ServiceCard {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  slug: string;
}

const Services = () => {
  const services: ServiceCard[] = [
    {
      icon: Zap,
      title: 'Energia por Assinatura',
      description:
        'Acesso à energia limpa sem investimento inicial, instalação ou manutenção',
      features: [
        'Sem custos de instalação',
        'Economia de até 35% na conta de luz',
        'Energia 100% renovável',
        'Sem obras ou reformas',
        'Migração gratuita',
      ],
      slug: 'energia-por-assinatura',
    },
    {
      icon: Network,
      title: 'Mercado Livre de Energia',
      description:
        'Liberdade para escolher seu fornecedor de energia e economizar até 45%',
      features: [
        'Economia de até 45%',
        'Contratos personalizados',
        'Consultoria especializada',
        'Gestão completa do processo',
        'Suporte técnico dedicado',
      ],
      slug: 'mercado-livre-de-energia',
    },
    {
      icon: Waves,
      title: 'Economia de Água para Empresas',
      description:
        'Reduza até 70% na Conta de Água da Sua Empresa com Soluções Simples',
      features: [
        'Identifique Vazamentos Ocultos',
        'Dispositivos Economizadores',
        'Monitoramento em Tempo Real',
        'Sem Obras e Investimentos',
        'Remuneração Pelo Sucesso',
      ],
      slug: 'economia-de-agua-empresas',
    },
    {
      icon: ReceiptText,
      title: 'Restituição de Créditos RCI\u00A0-\u00A0E',
      description:
        'Recuperação administrativas de créditos de energia de cobranças indevidas analisadas nos últimos 10 anos',
      features: [
        'Auditoria Técnica de 5 a 10 anos',
        'Identificação de Inconsistências',
        'Fundamentação nas Normas da ANEEL',
        'Zero Custo para o Cliente',
        'Prazo típico 60 a 180 dias',
      ],
      slug: 'restituicao-creditos-rci-e',
    },
    {
      icon: Scale,
      title: 'Restituição de Créditos Eletrobrás',
      description:
        'Recuperação judicial de créditos compulsórios de energia da Eletrobras dos anos de 1987 e 1994',
      features: [
        'Auditoria Histórica de até 40 anos',
        'Identificação de Créditos da Eletrobras',
        'Possibilidade de Venda do Crédito',
        'Sem Custo Inicial para Análise',
        'Pagamento à Vista em 7 dias',
      ],
      slug: 'restituicao-creditos-eletrobras',
    },
    {
      icon: Droplets,
      title: 'Restituição de Créditos RCI\u00A0-\u00A0A',
      description:
        'Recuperação de créditos de água e esgoto de cobranças indevidas analisadas nos últimos 10 anos',
      features: [
        'Auditoria Técnica de 5 a 10 anos',
        'Identificação de Inconsistências',
        'Recuperação Administrativa ANEEL',
        'Zero Custo para o Cliente',
        'Prazo típico 60 a 150 dias',
      ],
      slug: 'restituicao-creditos-rci-a',
    },
  ];

  const process = [
    { step: '01', title: 'Análise Inicial', description: 'Avaliamos seu perfil de consumo e identificamos oportunidades de economia.' },
    { step: '02', title: 'Proposta Personalizada', description: 'Desenvolvemos uma solução sob medida para suas necessidades específicas.' },
    { step: '03', title: 'Implementação', description: 'Cuidamos de todo o processo burocrático e migração sem interrupção.' },
    { step: '04', title: 'Acompanhamento', description: 'Monitoramos continuamente seus resultados e otimizamos a economia.' },
  ];

  const benefits: { icon: LucideIcon; title: string; description: string }[] = [
    { icon: Calculator, title: 'Economia Garantida', description: 'Redução comprovada na sua conta de energia elétrica.' },
    { icon: Clock, title: 'Atendimento 24/7', description: 'Suporte técnico disponível sempre que você precisar.' },
    { icon: Award, title: 'Certificação ISO', description: 'Processos certificados garantindo qualidade e confiabilidade.' },
    { icon: ShieldCheck, title: 'Transparência Total', description: 'Relatórios detalhados e acesso completo às informações.' },
  ];

  return (
    <div className="min-h-screen relative isolate">
      <PageBackground image={PAGE_BG.services} />
      <SEO
        title="Serviços de Energia, Restituição e Mercado Livre"
        description="Soluções completas em energia renovável, mercado livre, restituição de créditos de energia (RCI-E), créditos da Eletrobrás e créditos de água e esgoto (RCI-A)."
        keywords="mercado livre de energia, energia por assinatura, restituição créditos energia, RCI energia, RCI água, créditos eletrobras, geração distribuída, lei 14300, consumidor livre, CCEE, ANEEL, auditoria fatura energia, recuperação tributária"
        canonical="https://solarien.com.br/servicos"
      />
      <Header />
      <main className="pt-20" style={{ backgroundColor: '#002113' }}>
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs />
        </div>

        {/* HERO */}
        <section className="py-24 relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(2,255,145,0.06),_transparent_60%)]" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 text-xs uppercase tracking-[0.2em] text-white/60 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-solarien-primary" />
                Soluções Solarien
              </div>
              <h1 className="text-4xl md:text-6xl font-light text-white tracking-tight leading-tight mb-6">
                Energia, eficiência e recuperação de créditos.
              </h1>
              <p className="text-lg md:text-xl text-white/70 font-light max-w-3xl mx-auto">
                Soluções completas em energia renovável, gestão energética e recuperação de créditos para residências, empresas e indústrias em todo o Brasil.
              </p>
              <div className="mt-12 grid grid-cols-3 max-w-2xl mx-auto divide-x divide-white/10">
                <div className="text-center px-4">
                  <div className="text-3xl md:text-4xl font-light text-white">100%</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/50">Renovável</div>
                </div>
                <div className="text-center px-4">
                  <div className="text-3xl md:text-4xl font-light text-white">45%</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/50">Economia</div>
                </div>
                <div className="text-center px-4">
                  <div className="text-3xl md:text-4xl font-light text-white">24/7</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/50">Suporte</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="py-20 border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-12">
                <span className="text-xs uppercase tracking-[0.2em] text-solarien-primary">Portfólio</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <article
                      key={service.slug}
                      className="bg-[#002113] p-8 flex flex-col hover:bg-white/[0.02] transition-colors"
                    >
                      <div className="w-14 h-14 rounded-md border border-white/15 flex items-center justify-center mb-6">
                        <Icon className="w-7 h-7 text-white" strokeWidth={1.25} />
                      </div>
                      <h3 className="text-xl md:text-2xl font-light text-white tracking-tight mb-3">
                        {service.title}
                      </h3>
                      <p className="text-white/65 font-light leading-relaxed mb-6 text-sm">
                        {service.description}
                      </p>
                      <ul className="space-y-3 mb-8 flex-1">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-start gap-3 text-white/80 text-sm font-light">
                            <CheckCircle2
                              className="w-4 h-4 text-solarien-primary mt-0.5 flex-shrink-0"
                              strokeWidth={1.5}
                            />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={`/servicos/${service.slug}`}
                        className="group inline-flex items-center justify-between border border-white/20 text-white px-5 py-3 rounded-md hover:border-solarien-primary hover:text-solarien-primary transition-colors text-sm tracking-wide"
                      >
                        <span>Saber Mais</span>
                        <ArrowRight
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                          strokeWidth={2}
                        />
                      </Link>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-20 border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-12">
                <span className="text-xs uppercase tracking-[0.2em] text-solarien-primary">Processo</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
                {process.map((item) => (
                  <div key={item.step} className="bg-[#002113] p-8">
                    <div className="text-solarien-primary text-sm tracking-[0.2em] font-light mb-6">{item.step}</div>
                    <h3 className="text-white font-light text-xl tracking-tight mb-3">{item.title}</h3>
                    <p className="text-white/60 font-light text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-20 border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-12">
                <span className="text-xs uppercase tracking-[0.2em] text-solarien-primary">Por que a Solarien</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
                {benefits.map((benefit) => {
                  const I = benefit.icon;
                  return (
                    <div key={benefit.title} className="bg-[#002113] p-8">
                      <I className="w-7 h-7 text-white/85 mb-5" strokeWidth={1.25} />
                      <h3 className="text-white font-light text-lg tracking-tight mb-3">{benefit.title}</h3>
                      <p className="text-white/60 font-light text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-6">
                Pronto para economizar?
              </h2>
              <p className="text-white/70 text-lg font-light mb-10 max-w-2xl mx-auto">
                Descubra quanto você pode economizar ou recuperar com nossas soluções. Simulação e análise inicial gratuitas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://painel.solarien.com.br/solarien"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-solarien-primary text-black font-medium rounded-md hover:bg-white transition-colors"
                >
                  Simular Economia
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </a>
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 text-white rounded-md hover:bg-white/5 transition-colors"
                >
                  Falar com Especialista
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
