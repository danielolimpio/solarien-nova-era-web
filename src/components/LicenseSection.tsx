import React from 'react';
import { Check, Shield, ShieldCheck, BadgeCheck } from 'lucide-react';
import { PrimaryButton } from './premium/PremiumUI';

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

const IMG_SOLAR = 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=75';

const LicenseSection = () => {
  return (
    <section className="py-20 border-b border-black/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-solarien-primary">Programa de Licenciados</span>
            <div className="flex-1 h-px bg-black/10" />
          </div>

          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 id="licencas-heading" className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight mb-6">
              Seja um Licenciado
            </h2>
            <p className="text-lg text-slate-600 font-light">
              Todos os benefícios inclusos ao adquirir a licença Solarien — construa uma carreira sólida no mercado de energia.
            </p>
          </div>

          {/* 13 caixas com UMA imagem de usina solar compartilhada */}
          <div className="relative isolate overflow-hidden border border-black/10 rounded-md mb-16">
            <img
              src={IMG_SOLAR}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover -z-10"
              style={{ opacity: 0.55 }}
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/85 via-white/80 to-white/85" />
            <div className="grid md:grid-cols-2 gap-px bg-black/10">
              {benefits.map((benefit, i) => (
                <div key={i} className="bg-white/80 backdrop-blur-sm p-6 flex items-start gap-4">
                  <Check className="w-5 h-5 text-solarien-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-slate-800 font-light">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <PrimaryButton href="https://painel.solarien.com.br/solarien" target="_blank" rel="noopener noreferrer">
              Seja um Licenciado
            </PrimaryButton>

            <div className="flex justify-center items-center gap-12 mt-12">
              {trustBadges.map(({ Icon, label }) => (
                <div key={label} className="flex flex-col items-center">
                  <Icon className="w-6 h-6 text-slate-900 mb-2" strokeWidth={1.25} />
                  <span className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LicenseSection;
