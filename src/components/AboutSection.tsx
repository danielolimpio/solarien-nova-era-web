import React from 'react';
import { Users, Target, Eye, MessageCircle, DollarSign, FileText, Leaf } from 'lucide-react';
import { PremiumSection, PremiumGrid, PremiumCard, PremiumIconBadge } from './premium/PremiumUI';

const stats = [
  { value: '2000+', label: 'Usinas Solares' },
  { value: 'R$3B+', label: 'Faturamento Anual' },
  { value: '100k+', label: 'Clientes Ativos' },
  { value: '100%', label: 'Energia Limpa' },
];

const features = [
  { Icon: MessageCircle, title: 'Atendimento', description: 'Personalizado e humanizado' },
  { Icon: DollarSign, title: 'Economia', description: '100% garantida em contrato' },
  { Icon: Leaf, title: 'Energia', description: '100% renovável e sustentável' },
  { Icon: FileText, title: 'Contrato', description: '100% digital e sem burocracia' },
];

const AboutSection = () => {
  return (
    <PremiumSection label="Sobre a Solarien" className="">
      <div className="text-center mb-16">
        <h2 id="sobre-heading" className="text-4xl md:text-5xl font-light text-white tracking-tight mb-6">
          Sobre Nós
        </h2>
        <p className="text-lg text-white/70 font-light max-w-3xl mx-auto">
          Mudando a forma de consumo de energia, oferecendo soluções inovadoras e econômicas para todos os perfis de clientes, construindo um futuro mais sustentável.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 border border-white/10 divide-x divide-y md:divide-y-0 divide-white/10 mb-16">
        {stats.map((s) => (
          <div key={s.label} className="p-8 text-center">
            <div className="text-3xl md:text-4xl font-light text-white">{s.value}</div>
            <div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/50">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Quem Somos */}
      <div className="grid lg:grid-cols-2 gap-px bg-white/10 border border-white/10 mb-16">
        <div className="bg-[#002113] p-10">
          <PremiumIconBadge Icon={Users} />
          <h3 className="text-2xl font-light text-white tracking-tight mb-4">Quem Somos</h3>
          <p className="text-white/70 font-light leading-relaxed mb-4">
            Somos uma empresa comprometida com a sustentabilidade e a economia, conectando pessoas e empresas ao futuro da energia limpa e acessível.
          </p>
          <p className="text-white/70 font-light leading-relaxed">
            Com tecnologia de ponta e atendimento personalizado, garantimos resultados que impactam positivamente o planeta e sua conta de luz.
          </p>
        </div>
        <div className="bg-[#002113] grid grid-cols-2 gap-px">
          {features.map((f) => (
            <div key={f.title} className="bg-[#002113] p-6 flex flex-col">
              <f.Icon className="w-7 h-7 text-white mb-4" strokeWidth={1.25} />
              <div className="text-white font-light">{f.title}</div>
              <div className="text-xs text-white/50 mt-1">{f.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Missão / Visão */}
      <PremiumGrid cols={2}>
        <PremiumCard>
          <PremiumIconBadge Icon={Target} />
          <h3 className="text-2xl font-light text-white tracking-tight mb-4">Missão</h3>
          <p className="text-white/70 font-light leading-relaxed">
            Democratizar o acesso à energia limpa, proporcionando soluções inovadoras e eficientes que promovem economia e sustentabilidade para nossos clientes e o meio ambiente.
          </p>
        </PremiumCard>
        <PremiumCard>
          <PremiumIconBadge Icon={Eye} />
          <h3 className="text-2xl font-light text-white tracking-tight mb-4">Visão</h3>
          <p className="text-white/70 font-light leading-relaxed">
            Ser referência global em soluções energéticas inteligentes, liderando a transição para um modelo sustentável e transformando o mercado de energia com inovação e excelência.
          </p>
        </PremiumCard>
      </PremiumGrid>
    </PremiumSection>
  );
};

export default AboutSection;
