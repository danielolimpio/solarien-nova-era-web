import React from 'react';
import { Check, Shield, ShieldCheck, BadgeCheck } from 'lucide-react';
import { PremiumSection, PrimaryButton } from './premium/PremiumUI';

const benefits = [
  'Direito de uso da Marca Solarien Energy',
  'Licença Vitalícia como Consultor Autorizado',
  'Backoffice Completo com Gestão de Ganhos',
  'Ganhos de Conexões e Indicações Atrativas',
  'Treinamentos e Atualizações Contínuas',
  'Material Profissional de Divulgação Incluso',
  'Sistema pronto com suporte técnico e comercial',
  'Ferramentas com IA e integração ao WhatsApp',
  'Plano de carreira com bônus e incentivos',
  'Atendimento especializado para os seus Clientes',
  'Comissões recorrentes por licenciados ativos',
  'Rede própria com ganhos ilimitados em multinível',
  'Assessoria especializada e atendimento humanizado',
];

const trustBadges = [
  { Icon: Shield, label: 'Segurança' },
  { Icon: ShieldCheck, label: 'Garantia' },
  { Icon: BadgeCheck, label: 'Autenticidade' },
];

const LicenseSection = () => {
  return (
    <PremiumSection label="Programa de Licenciados">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 id="licencas-heading" className="text-4xl md:text-5xl font-light text-white tracking-tight mb-6">
          Seja um Licenciado
        </h2>
        <p className="text-lg text-white/70 font-light">
          Todos os benefícios inclusos ao adquirir a licença Solarien — construa uma carreira sólida no mercado de energia.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10 mb-16">
        {benefits.map((benefit, i) => (
          <div key={i} className="bg-[#002113] p-6 flex items-start gap-4">
            <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" strokeWidth={1.5} />
            <span className="text-white/80 font-light">{benefit}</span>
          </div>
        ))}
      </div>

      <div className="text-center">
        <PrimaryButton href="https://painel.solarien.com.br/solarien" target="_blank" rel="noopener noreferrer">
          Seja um Licenciado
        </PrimaryButton>

        <div className="flex justify-center items-center gap-12 mt-12">
          {trustBadges.map(({ Icon, label }) => (
            <div key={label} className="flex flex-col items-center">
              <Icon className="w-6 h-6 text-white mb-2" strokeWidth={1.25} />
              <span className="text-xs uppercase tracking-[0.18em] text-white/50">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </PremiumSection>
  );
};

export default LicenseSection;
