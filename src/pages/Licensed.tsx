import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { Award, ShieldCheck, CheckCircle2, Users, TrendingUp, Zap, LucideIcon } from 'lucide-react';
import {
  PageShell,
  PageHero,
  PremiumSection,
  PremiumGrid,
  PremiumCard,
  PremiumIconBadge,
  PremiumCTA,
} from '../components/premium/PremiumUI';
import PageBackground, { PAGE_BG } from '@/components/premium/PageBackground';

const Licensed = () => {
  const benefits: { icon: LucideIcon; title: string; description: string }[] = [
    { icon: TrendingUp, title: 'Alta Rentabilidade', description: 'Modelo de negócio comprovado com crescimento sustentável.' },
    { icon: ShieldCheck, title: 'Suporte Completo', description: 'Treinamento, materiais e suporte técnico especializado.' },
    { icon: Users, title: 'Mercado em Expansão', description: 'Setor de energia renovável em constante crescimento.' },
    { icon: Zap, title: 'Tecnologia Avançada', description: 'Plataforma digital completa para gestão de clientes.' },
  ];

  const requirements = [
    'Experiência em vendas ou relacionamento comercial',
    'Disponibilidade para dedicação ao negócio',
    'Investimento inicial acessível',
    'Compromisso com qualidade e excelência',
    'Interesse genuíno em sustentabilidade',
  ];

  const steps = [
    { step: '01', title: 'Cadastro e Avaliação', description: 'Preencha o formulário e participe da seleção.' },
    { step: '02', title: 'Treinamento Inicial', description: 'Capacitação completa sobre produtos e metodologias.' },
    { step: '03', title: 'Lançamento', description: 'Início das atividades com suporte total da equipe.' },
    { step: '04', title: 'Crescimento', description: 'Desenvolvimento contínuo com metas progressivas.' },
  ];

  const stories = [
    { name: 'Carlos Silveira', role: 'Licenciado Autorizado', img: '/lovable-uploads/e3d9a3c1-73b1-4698-8ee5-ac655f832465.png', text: 'A Solarien mudou minha vida profissional. Tripliquei minha renda e ajudei dezenas de famílias.' },
    { name: 'Mayra Santos', role: 'Licenciado Autorizado', img: '/lovable-uploads/5e176f78-4742-4f8b-8c76-a8b9d2c956f4.png', text: 'Suporte excepcional, do treinamento ao dia a dia. Equipe dedicada e profissional.' },
    { name: 'Jonathan Oliveira', role: 'Licenciado Autorizado', img: '/lovable-uploads/610577b6-6a23-483b-8218-a84bf11031dd.png', text: 'Trabalhar com energia renovável me dá propósito além do ganho financeiro.' },
  ];

  return (
    <div className="min-h-screen relative isolate">
      <PageBackground image={PAGE_BG.licensed} />
      <SEO
        title="Seja um Licenciado Solarien - Oportunidade de Negócio"
        description="Torne-se licenciado Solarien e empreenda no setor de energia renovável."
        keywords="seja licenciado solarien, empreender mercado livre energia, parceria energia"
        canonical="https://solarien.com.br/licenciado"
      />
      <Header />
      <PageShell>
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs />
        </div>

        <PageHero
          eyebrow="Programa de Licenciados"
          title={<>Empreenda na revolução da energia limpa.</>}
          subtitle="Torne-se um licenciado Solarien e tenha acesso a um modelo de negócio inovador, rentável e com propósito."
          stats={[
            { value: '100%', label: 'Online' },
            { value: 'Pix', label: 'Pagamento' },
            { value: '24/7', label: 'Suporte' },
          ]}
        />

        <PremiumSection label="Vantagens">
          <PremiumGrid cols={4}>
            {benefits.map(({ icon: Icon, title, description }) => (
              <PremiumCard key={title}>
                <PremiumIconBadge Icon={Icon} />
                <h3 className="text-xl font-light text-white tracking-tight mb-3">{title}</h3>
                <p className="text-white/65 font-light text-sm leading-relaxed">{description}</p>
              </PremiumCard>
            ))}
          </PremiumGrid>
        </PremiumSection>

        <PremiumSection label="Requisitos">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-6">
                Quem buscamos
              </h2>
              <p className="text-white/70 font-light leading-relaxed mb-8">
                Buscamos parceiros comprometidos com a excelência e interessados em fazer parte da
                transformação energética do Brasil.
              </p>
              <ul className="space-y-4">
                {requirements.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-white/80 font-light text-sm">
                    <CheckCircle2 className="w-4 h-4 text-solarien-primary mt-1 flex-shrink-0" strokeWidth={1.5} />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-white/10 p-1">
              <img
                src="/lovable-uploads/dd91c0ca-f624-4e08-93dc-300635b098c4.png"
                alt="Requisitos Licenciado"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </PremiumSection>

        <PremiumSection label="Processo">
          <PremiumGrid cols={4}>
            {steps.map((s) => (
              <PremiumCard key={s.step}>
                <div className="text-solarien-primary text-sm tracking-[0.2em] font-light mb-6">{s.step}</div>
                <h3 className="text-xl font-light text-white tracking-tight mb-3">{s.title}</h3>
                <p className="text-white/60 font-light text-sm leading-relaxed">{s.description}</p>
              </PremiumCard>
            ))}
          </PremiumGrid>
        </PremiumSection>

        <PremiumSection label="Histórias">
          <PremiumGrid cols={3}>
            {stories.map((s) => (
              <PremiumCard key={s.name}>
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={s.img}
                    alt={s.name}
                    className="w-14 h-14 rounded-full object-cover border border-white/15"
                  />
                  <div>
                    <h3 className="text-white font-light tracking-tight">{s.name}</h3>
                    <p className="text-xs uppercase tracking-[0.18em] text-solarien-primary mt-1">{s.role}</p>
                  </div>
                </div>
                <p className="text-white/70 font-light text-sm leading-relaxed italic">"{s.text}"</p>
              </PremiumCard>
            ))}
          </PremiumGrid>
        </PremiumSection>

        <PremiumCTA
          title="Pronto para começar?"
          description="Não perca a oportunidade de fazer parte da maior revolução energética do Brasil."
          primary={{ href: 'https://painel.solarien.com.br/solarien', label: 'Cadastrar Agora' }}
          secondary={{ href: 'https://wa.me/5511997361698', label: 'WhatsApp' }}
        />
      </PageShell>
      <Footer />
    </div>
  );
};

export default Licensed;
