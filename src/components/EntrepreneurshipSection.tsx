import React from 'react';
import { Zap, Users, Target, TrendingUp, Rocket, Download } from 'lucide-react';
import { PremiumSection, PremiumCard, PremiumIconBadge, PrimaryButton, OutlineButton } from './premium/PremiumUI';

const IMG_BENEFITS = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=75';
const IMG_STATS = 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=75';

const benefits = [
  { Icon: Target, title: 'Seja um expert no mercado', description: 'Domine o Mercado Livre de Energia e torne-se referência.' },
  { Icon: TrendingUp, title: 'Construa sua jornada', description: 'Uma carreira sólida e lucrativa no setor energético.' },
  { Icon: Zap, title: 'Conecte estabelecimentos', description: 'Receba comissões por cada estabelecimento conectado.' },
  { Icon: Users, title: 'Forme sua equipe', description: 'Construa sua rede e maximize seus ganhos.' },
];

const commissionStats = [
  { value: '1ª Fatura', label: 'Ganho imediato' },
  { value: 'Recorrente', label: 'Ganho mensal' },
  { value: 'Equipe', label: 'Ganho em rede' },
];

const trust = [
  { Icon: Rocket, label: 'Inovação' },
  { Icon: Zap, label: 'Energia' },
  { Icon: Target, label: 'Objetivo' },
];

const EntrepreneurshipSection = () => {
  return (
    <PremiumSection label="Oportunidade de Negócio">
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h2 id="licenciado-heading" className="text-4xl md:text-6xl font-light text-white tracking-tight mb-4">
          Energia para Empreender
        </h2>
        <p className="text-xl md:text-2xl text-white/80 font-light tracking-tight mb-8">
          Empreender para Compartilhar
        </p>
        <p className="text-lg text-white/70 font-light leading-relaxed mb-10">
          Profissionais estão transformando o mercado com energia compartilhada — um modelo revolucionário que gera fortunas. O Mercado Livre de Energia é a nova forma acessível e lucrativa de empreender.
        </p>
        <OutlineButton
          href="https://drive.google.com/file/d/1isuepY5HEDT5EtuqFuJfYfK4liPqP53e/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Download className="w-4 h-4" strokeWidth={1.5} />
          Baixar Apresentação PDF
        </OutlineButton>
      </div>

      <PremiumGrid cols={4}>
        {benefits.map((b) => (
          <PremiumCard key={b.title}>
            <PremiumIconBadge Icon={b.Icon} />
            <h3 className="text-lg font-light text-white tracking-tight mb-2">{b.title}</h3>
            <p className="text-white/60 font-light text-sm">{b.description}</p>
          </PremiumCard>
        ))}
      </PremiumGrid>

      {/* Commission Highlight */}
      <div className="mt-16 border border-white/10 p-12 text-center">
        <div className="text-xs uppercase tracking-[0.2em] text-white/50 mb-4">A melhor comissão do mercado</div>
        <div className="text-sm uppercase tracking-[0.2em] text-white/70 mb-2">Ganhos 1ª Fatura</div>
        <div className="text-6xl md:text-8xl font-light text-white tracking-tight mb-4">Até 80%</div>
        <p className="text-white/70 font-light mb-10">de comissão sobre o valor faturável</p>
        <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10 max-w-3xl mx-auto">
          {commissionStats.map((s) => (
            <div key={s.value} className="bg-[#002113] p-6">
              <div className="text-lg font-light text-white">{s.value}</div>
              <div className="text-xs uppercase tracking-[0.18em] text-white/50 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <PrimaryButton href="https://painel.solarien.com.br/solarien" target="_blank" rel="noopener noreferrer">
          Quero Empreender Agora
        </PrimaryButton>
        <p className="text-white/60 font-light mt-6">
          Comece sua jornada de sucesso no Mercado Livre de Energia.
        </p>
        <div className="flex justify-center items-center gap-12 mt-8">
          {trust.map(({ Icon, label }) => (
            <div key={label} className="flex flex-col items-center">
              <Icon className="w-5 h-5 text-white mb-2" strokeWidth={1.25} />
              <span className="text-xs uppercase tracking-[0.18em] text-white/50">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </PremiumSection>
  );
};

export default EntrepreneurshipSection;
