import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { Sun, ShieldCheck, Users, Award, Target, Heart, LucideIcon } from 'lucide-react';
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

const About = () => {
  const values: { icon: LucideIcon; title: string; description: string }[] = [
    { icon: Sun, title: 'Sustentabilidade', description: 'Comprometidos com um futuro mais limpo, renovável e responsável.' },
    { icon: ShieldCheck, title: 'Confiabilidade', description: 'Transparência total em processos e relacionamento com clientes.' },
    { icon: Users, title: 'Foco no Cliente', description: 'Cada cliente é único e merece uma solução personalizada.' },
    { icon: Award, title: 'Excelência', description: 'Buscamos sempre a excelência em serviços e resultados.' },
  ];

  const timeline = [
    { year: '2023', title: 'Início da Jornada', description: 'Iniciamos no mercado de energia limpa com os primeiros contratos.' },
    { year: '2024', title: 'Expansão Nacional', description: 'Expandimos nossa operação em rede para todo o território nacional.' },
    { year: '2025', title: 'Operação Própria', description: 'Consolidados como referência em gestão de contratos energéticos.' },
  ];

  return (
    <div className="min-h-screen relative isolate">
      <PageBackground image={PAGE_BG.about} />
      <SEO
        title="Sobre a Solarien Energy"
        description="Especialistas em gestão de contratos energéticos e consultoria em energia, oferecendo soluções completas em energia por assinatura e mercado livre."
        keywords="solarien energy, empresa mercado livre energia, energia por assinatura, consultoria energética, missão visão valores"
        canonical="https://solarien.com.br/sobre"
      />
      <Header />
      <PageShell>
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs />
        </div>

        <PageHero
          eyebrow="Quem Somos"
          title={<>Energia limpa, gestão inteligente.</>}
          subtitle="Especialistas em gestão de contratos energéticos e consultoria em energia, conectando empresas e residências às melhores soluções de economia em todo o Brasil."
          stats={[
            { value: '3+', label: 'Anos' },
            { value: '2000+', label: 'Usinas' },
            { value: '100%', label: 'Brasil' },
          ]}
        />

        <PremiumSection label="Propósito">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-6">
                Nossa Missão
              </h2>
              <p className="text-white/70 font-light leading-relaxed mb-8">
                Democratizar o acesso à energia limpa e renovável no Brasil, oferecendo soluções
                inovadoras que reduzem custos e promovem a sustentabilidade.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Target className="w-6 h-6 text-solarien-primary flex-shrink-0 mt-1" strokeWidth={1.25} />
                  <div>
                    <h3 className="text-white font-light tracking-tight text-lg mb-2">Visão</h3>
                    <p className="text-white/65 font-light text-sm leading-relaxed">
                      Ser a principal referência em gestão energética sustentável no Brasil.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Heart className="w-6 h-6 text-solarien-primary flex-shrink-0 mt-1" strokeWidth={1.25} />
                  <div>
                    <h3 className="text-white font-light tracking-tight text-lg mb-2">Propósito</h3>
                    <p className="text-white/65 font-light text-sm leading-relaxed">
                      Transformar a forma como pessoas e empresas consomem energia, tornando-a mais
                      sustentável e acessível.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-white/10 p-1">
              <img
                src="/lovable-uploads/01cf340a-bb1b-43df-b89a-91684583fe6a.png"
                alt="Missão Solarien Energy"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </PremiumSection>

        <PremiumSection label="Valores">
          <PremiumGrid cols={4}>
            {values.map(({ icon: Icon, title, description }) => (
              <PremiumCard key={title}>
                <PremiumIconBadge Icon={Icon} />
                <h3 className="text-xl font-light text-white tracking-tight mb-3">{title}</h3>
                <p className="text-white/65 font-light text-sm leading-relaxed">{description}</p>
              </PremiumCard>
            ))}
          </PremiumGrid>
        </PremiumSection>

        <PremiumSection label="Trajetória">
          <PremiumGrid cols={3}>
            {timeline.map((item) => (
              <PremiumCard key={item.year}>
                <div className="text-solarien-primary text-sm tracking-[0.2em] font-light mb-6">
                  {item.year}
                </div>
                <h3 className="text-xl font-light text-white tracking-tight mb-3">{item.title}</h3>
                <p className="text-white/60 font-light text-sm leading-relaxed">{item.description}</p>
              </PremiumCard>
            ))}
          </PremiumGrid>
        </PremiumSection>

        <PremiumCTA
          title="Faça parte da revolução energética."
          description="Junte-se a milhares de brasileiros que já descobriram como economizar na conta de luz com energia limpa e renovável."
          primary={{ href: 'https://painel.solarien.com.br/solarien', label: 'Começar Agora' }}
          secondary={{ to: '/contato', label: 'Falar com Especialista' }}
        />
      </PageShell>
      <Footer />
    </div>
  );
};

export default About;
