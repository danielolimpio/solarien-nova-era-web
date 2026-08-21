import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import {
  BadgeCheck,
  FileText,
  Clock,
  Wallet,
  Gauge,
  MessageCircle,
  LucideIcon,
} from 'lucide-react';
import {
  PageShell,
  PageHero,
  PremiumSection,
  PremiumGrid,
  PremiumCard,
  PremiumIconBadge,
  PrimaryButton,
  OutlineButton,
} from '../components/premium/PremiumUI';
import PageBackground, { PAGE_BG } from '@/components/premium/PageBackground';

const CADASTRO_URL = 'https://painel.solarien.com.br/solarien';
const GRUPO_URL = 'https://wa.me/5511997361698?text=' + encodeURIComponent('Olá! Quero entrar no Grupo Premium da Solarien.');
const SUPORTE_ALTA_TENSAO =
  'https://wa.me/5511997361698?text=' +
  encodeURIComponent('Olá! Tenho uma conta de Alta Tensão (Grupo A) e gostaria de uma análise com especialista.');

const rules: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: BadgeCheck, title: 'Cadastro 100% gratuito', description: 'Sem licença, sem taxa de adesão e sem mensalidades. Você ganha apenas pelas faturas.' },
  { icon: Gauge, title: 'Mínimo de 300 kWh', description: 'São aceitas faturas de energia a partir de 300 kWh de consumo médio mensal.' },
  { icon: Clock, title: 'Injeção em ~90 dias', description: 'O tempo médio de injeção de energia para o cliente é de aproximadamente 90 dias.' },
  { icon: Wallet, title: 'Comissão em 45 dias', description: 'O recebimento da comissão ocorre 45 dias após a assinatura do contrato pelo cliente.' },
  { icon: FileText, title: 'Grupo B com desconto fixo', description: 'Contas de baixa tensão têm descontos fixos por distribuidora — confira a tabela abaixo.' },
  { icon: MessageCircle, title: 'Grupo A com especialista', description: 'Contas de Alta Tensão devem ser enviadas ao WhatsApp de suporte para análise individual.' },
];

const discounts: [string, string, string, string, string][] = [
  ['CEMIG - MG', '28%', '30%', '31%', '32%'],
  ['ENERGISA - MT', '25%', '30%', '31%', '33%'],
  ['ENERGISA - MS', '25%', '30%', '31%', '32%'],
  ['EQUATORIAL - GO', '25%', '30%', '31%', '33%'],
  ['NEOENERGIA - PE', '23%', '25%', '26%', '27%'],
  ['NEOENERGIA - BA', '18%', '20%', '21%', '22%'],
  ['EQUATORIAL - PI', '13%', '15%', '16%', '17%'],
  ['EQUATORIAL - AL', '25%', '30%', '32%', '35%'],
  ['ENEL - CE', '20%', '25%', '26%', '27%'],
  ['EQUATORIAL - MA', '15%', '20%', '21%', '22%'],
  ['ENERGISA - SP', '15%', '20%', '21%', '22%'],
  ['CPFL PAULISTA - SP', '18%', '20%', '21%', '22%'],
  ['CPFL PIRATININGA - SP', '25%', '25%', '25%', '25%'],
  ['ELEKTRO - SP', '15%', '18%', '19%', '20%'],
  ['COPEL - PR', '18%', '20%', '21%', '22%'],
  ['CELESC - SC', '15%', '16%', '17%', '18%'],
  ['EQUATORIAL - PA', '15%', '20%', '22%', '24%'],
  ['NEOENERGIA - RN', '23%', '25%', '26%', '27%'],
  ['ENERGISA - TO', '15%', '15%', '16%', '17%'],
  ['ENERGISA - MG', '15%', '16%', '18%', '20%'],
  ['RGE - RS', '15%', '16%', '18%', '20%'],
  ['EDP - ES', '10%', '10%', '10%', '10%'],
  ['ENEL - RJ', '12%', '13%', '14%', '15%'],
  ['LIGHT - RJ', '12%', '13%', '14%', '15%'],
];

const steps = [
  { step: '01', title: 'Faça seu cadastro gratuito', description: 'Crie sua conta na plataforma Solarien em poucos minutos, sem custo algum.' },
  { step: '02', title: 'Envie as faturas de energia', description: 'Faturas do Grupo B a partir de 300 kWh. Alta tensão (Grupo A) via WhatsApp de suporte.' },
  { step: '03', title: 'Cliente assina o contrato', description: 'Nossa equipe valida a fatura, aplica o desconto da distribuidora e envia o contrato digital.' },
  { step: '04', title: 'Receba suas comissões', description: 'Comissão paga 45 dias após a assinatura, com ganhos recorrentes em até 7 níveis de rede.' },
];

const Signup = () => {
  return (
    <div className="min-h-screen relative isolate">
      <PageBackground image={PAGE_BG.licensed} />
      <SEO
        title="Cadastro Gratuito Solarien — Sem Mensalidade"
        description="Cadastro 100% gratuito na Solarien: sem licença e sem mensalidade. Envie faturas a partir de 300 kWh e receba comissões recorrentes."
        keywords="cadastro gratuito solarien, licença gratuita energia, indicar faturas de energia, comissão mercado livre de energia"
        canonical="https://solarien.com.br/cadastro"
      />
      <Header />
      <PageShell>
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs />
        </div>

        <PageHero
          eyebrow="Cadastro Gratuito"
          title={<>Cadastre-se grátis e ganhe com as faturas.</>}
          subtitle="Seu cadastro na Solarien é 100% gratuito: não cobramos licença nem mensalidade. Basta se cadastrar e enviar as faturas de energia."
          stats={[
            { value: 'R$ 0', label: 'Cadastro' },
            { value: '300 kWh', label: 'Fatura mínima' },
            { value: '45 dias', label: 'Comissão' },
          ]}
        />

        {/* CTA central */}
        <PremiumSection>
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-4">
            <PrimaryButton href={CADASTRO_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              Cadastre-se Agora
            </PrimaryButton>
            <OutlineButton href={GRUPO_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              Entrar no Grupo Premium
            </OutlineButton>
            <p className="text-white/60 font-light text-sm mt-2">
              Sem taxa de adesão, sem mensalidade e sem fidelidade. Você ganha apenas pelas faturas ativas.
            </p>
          </div>
        </PremiumSection>

        {/* Seção cinematográfica */}
        <section className="relative isolate overflow-hidden border-y border-white/10">
          <img
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1920&q=80"
            alt="Parque de energia limpa ao amanhecer com painéis solares e turbinas eólicas"
            className="absolute inset-0 w-full h-full object-cover -z-10"
            loading="lazy"
            decoding="async"
          />
          <div
            className="absolute inset-0 -z-10"
            style={{ background: 'linear-gradient(180deg, rgba(0,33,19,0.82) 0%, rgba(0,33,19,0.70) 50%, rgba(0,33,19,0.88) 100%)' }}
          />
          <div className="container mx-auto px-4 py-28 text-center max-w-4xl">
            <span className="text-xs uppercase tracking-[0.2em] text-solarien-primary">Energia Limpa</span>
            <h2 className="text-4xl md:text-6xl font-light text-white tracking-tight mt-6 mb-6">
              Licença gratuita, ganhos reais.
            </h2>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              A Solarien eliminou qualquer cobrança de licença ou mensalidade. Você se cadastra, envia faturas de
              energia e passa a receber comissões pela primeira fatura e de forma recorrente, com rede em até 7 níveis.
            </p>
          </div>
        </section>

        <PremiumSection label="Como funciona">
          <PremiumGrid cols={3}>
            {rules.map(({ icon: Icon, title, description }) => (
              <PremiumCard key={title}>
                <PremiumIconBadge Icon={Icon} />
                <h3 className="text-xl font-light text-white tracking-tight mb-3">{title}</h3>
                <p className="text-white/70 font-light text-sm leading-relaxed">{description}</p>
              </PremiumCard>
            ))}
          </PremiumGrid>
        </PremiumSection>

        <PremiumSection label="Passo a passo">
          <PremiumGrid cols={4}>
            {steps.map((s) => (
              <PremiumCard key={s.step}>
                <div className="text-solarien-primary text-sm tracking-[0.2em] font-light mb-6">{s.step}</div>
                <h3 className="text-lg font-light text-white tracking-tight mb-3">{s.title}</h3>
                <p className="text-white/65 font-light text-sm leading-relaxed">{s.description}</p>
              </PremiumCard>
            ))}
          </PremiumGrid>
        </PremiumSection>

        {/* Alta tensão */}
        <PremiumSection label="Grupo A e Grupo B">
          <div className="grid lg:grid-cols-2 gap-8">
            <PremiumCard>
              <PremiumIconBadge Icon={MessageCircle} />
              <h3 className="text-2xl font-light text-white tracking-tight mb-3">Contas de Alta Tensão (Grupo A)</h3>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                Faturas de alta tensão devem ser enviadas para o WhatsApp de suporte, pois cada fatura do Grupo A é
                analisada individualmente por um especialista para definição do desconto.
              </p>
              <OutlineButton href={SUPORTE_ALTA_TENSAO} target="_blank" rel="noopener noreferrer">
                Enviar fatura no WhatsApp
              </OutlineButton>
            </PremiumCard>
            <PremiumCard>
              <PremiumIconBadge Icon={FileText} />
              <h3 className="text-2xl font-light text-white tracking-tight mb-3">Contas de Baixa Tensão (Grupo B)</h3>
              <p className="text-white/70 font-light leading-relaxed">
                Para o Grupo B os descontos são fixos e variam conforme a distribuidora e a faixa de valor da fatura.
                Consulte a tabela abaixo antes de enviar a conta — o consumo mínimo aceito é de 300 kWh.
              </p>
            </PremiumCard>
          </div>
        </PremiumSection>

        {/* Tabela de descontos */}
        <PremiumSection label="Tabela de Descontos">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-4 text-center">
              Descontos por distribuidora
            </h2>
            <p className="text-white/65 font-light text-center mb-10">
              Percentual de desconto aplicado sobre a fatura, conforme a faixa de valor (Grupo B).
            </p>

            <div className="border border-white/12 rounded-md overflow-hidden bg-[#002113]/70 backdrop-blur-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[680px] text-left border-collapse">
                  <caption className="sr-only">Descontos por distribuidora e faixa de valor da fatura</caption>
                  <thead>
                    <tr className="bg-white/[0.06]">
                      <th scope="col" className="px-5 py-4 text-xs uppercase tracking-[0.18em] text-white/60 font-normal">
                        Distribuidora
                      </th>
                      <th scope="col" className="px-5 py-4 text-xs uppercase tracking-[0.18em] text-white/60 font-normal text-center">
                        Abaixo de R$ 1.000
                      </th>
                      <th scope="col" className="px-5 py-4 text-xs uppercase tracking-[0.18em] text-white/60 font-normal text-center">
                        R$ 1.000 a R$ 3.000
                      </th>
                      <th scope="col" className="px-5 py-4 text-xs uppercase tracking-[0.18em] text-white/60 font-normal text-center">
                        R$ 3.000 a R$ 5.000
                      </th>
                      <th scope="col" className="px-5 py-4 text-xs uppercase tracking-[0.18em] text-white/60 font-normal text-center">
                        Acima de R$ 5.000
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {discounts.map((row, i) => (
                      <tr key={row[0]} className={`border-t border-white/10 ${i % 2 === 1 ? 'bg-white/[0.03]' : ''}`}>
                        <th scope="row" className="px-5 py-4 text-white font-light tracking-tight whitespace-nowrap">
                          {row[0]}
                        </th>
                        {row.slice(1).map((v, j) => (
                          <td key={j} className="px-5 py-4 text-center text-solarien-primary font-light">
                            {v}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-white/50 font-light text-xs mt-6 text-center">
              Tabela referente a contas do Grupo B (baixa tensão). Valores sujeitos a alteração pelas distribuidoras.
            </p>

            <div className="text-center mt-12">
              <PrimaryButton href={CADASTRO_URL} target="_blank" rel="noopener noreferrer">
                Cadastre-se Agora
              </PrimaryButton>
            </div>
          </div>
        </PremiumSection>
      </PageShell>
      <Footer />
    </div>
  );
};

export default Signup;
