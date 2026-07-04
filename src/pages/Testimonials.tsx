import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import {
  PageShell,
  PageHero,
  PremiumSection,
  PremiumCTA,
} from '../components/premium/PremiumUI';
import PageBackground, { PAGE_BG } from '@/components/premium/PageBackground';

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const items = [
    { id: 1, name: 'Carlos Eduardo Silva', position: 'CEO', company: 'Silva & Associados Confecções', location: 'São Paulo, SP', image: '/lovable-uploads/0df96018-53de-4236-9144-decea5df4962.png', text: 'Nossa indústria tinha custos elevados com energia. A Solarien reduziu nossos gastos em 15% com a energia por assinatura. Processo simples e transparente.', savings: '15%', service: 'Energia por Assinatura' },
    { id: 2, name: 'Ana Paula Rodrigues', position: 'Proprietária', company: 'Padaria Pão Dourado', location: 'Belo Horizonte, MG', image: '/lovable-uploads/d7e167c0-e56b-4126-9008-dc77cba89c01.png', text: 'Economizamos R$ 600 por mês com a energia por assinatura. Atendimento excepcional, sem burocracia.', savings: '23%', service: 'Energia por Assinatura' },
    { id: 3, name: 'Roberto Mendes', position: 'Diretor Comercial', company: 'Metalúrgica Forte Ltda', location: 'Campinas, SP', image: '/lovable-uploads/5172e657-5908-42ac-a8ce-de3b2ffa4b91.png', text: 'Negociação no mercado livre que nos trouxe economia mensal de R$ 12 mil. Em 45 dias estávamos com a nova modalidade ativa.', savings: '28%', service: 'Mercado Livre' },
    { id: 4, name: 'Mariana Costa', position: 'Administradora', company: 'Clínica Médica Vida Plena', location: 'Fortaleza, CE', image: '/lovable-uploads/37671407-af35-48b0-9839-0da200f8681b.png', text: 'A Solarien analisou nosso perfil e nos colocou no mercado livre com economia de 31%. Zero burocracia, tudo online.', savings: '31%', service: 'Mercado Livre' },
    { id: 5, name: 'José Antonio Pereira', position: 'Proprietário', company: 'Supermercado Economia', location: 'Porto Alegre, RS', image: '/lovable-uploads/b4d43014-0588-4c31-a322-9ef6f3cdae53.png', text: 'A energia por assinatura reduziu nossos gastos em 25% em 3 unidades. Equipe atenciosa.', savings: '25%', service: 'Energia por Assinatura' },
    { id: 6, name: 'Fernanda Oliveira', position: 'Gerente Geral', company: 'Hotel Recanto Verde', location: 'Gramado, RS', image: '/lovable-uploads/51406d1c-99e8-4b60-a2ea-6b33ed130fb4.png', text: 'Economia de 33% através do mercado livre. Suporte excepcional em todo o processo.', savings: '33%', service: 'Mercado Livre' },
    { id: 7, name: 'Paulo Henrique Santos', position: 'Sócio-Proprietário', company: 'Academia Fitness Pro', location: 'Brasília, DF', image: '/lovable-uploads/a6e126ef-b2da-47cd-915d-36d98522f185.png', text: '22% de economia com a energia por assinatura. Processo transparente e rápido.', savings: '22%', service: 'Energia por Assinatura' },
    { id: 8, name: 'Luciana Ferreira', position: 'Diretora', company: 'Escola Criança Feliz', location: 'Recife, PE', image: '/lovable-uploads/2c448ca4-ad05-4092-bc49-f6f2ca22b61b.png', text: '15% de economia na conta de energia. Atendimento humanizado e resultado excelente.', savings: '15%', service: 'Energia por Assinatura' },
    { id: 9, name: 'Ricardo Almeida', position: 'Proprietário', company: 'Cafeteria Grão Dourado', location: 'Salvador, BA', image: '/lovable-uploads/5168e505-2e4e-46a1-b602-41a04d13c708.png', text: 'Economia de 24% com energia por assinatura. Transparência total, sem promessas irreais.', savings: '24%', service: 'Energia por Assinatura' },
    { id: 10, name: 'Patrícia Gomes', position: 'Administradora', company: 'Condomínio Residencial Jardins', location: 'Curitiba, PR', image: '/lovable-uploads/7fdd1da8-17da-43a3-bbe6-55b91b05a25c.png', text: 'Redução de 34% na conta do condomínio através do mercado livre. Suporte constante.', savings: '34%', service: 'Mercado Livre' },
  ];

  const next = () => setIndex((i) => (i === items.length - 1 ? 0 : i + 1));
  const prev = () => setIndex((i) => (i === 0 ? items.length - 1 : i - 1));

  const t = items[index];

  return (
    <div className="min-h-screen relative isolate">
      <PageBackground image={PAGE_BG.testimonials} />
      <SEO
        title="Depoimentos de Clientes - Casos de Sucesso"
        description="Conheça depoimentos de empresários que reduziram custos com energia."
        keywords="depoimentos energia solar, casos de sucesso mercado livre, cases economia energia"
        canonical="https://solarien.com.br/depoimentos"
      />
      <Header />
      <PageShell>
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs />
        </div>

        <PageHero
          eyebrow="Depoimentos"
          title="Resultados reais, contados pelos clientes."
          subtitle="Histórias de empresas que reduziram significativamente seus custos energéticos com nossas soluções."
        />

        <PremiumSection label="Caso em destaque">
          <div className="border border-white/10 bg-[#002113]">
            <div className="grid lg:grid-cols-[1fr_2fr] gap-px bg-white/10">
              <div className="bg-[#002113] p-10 flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-28 h-28 rounded-full object-cover border border-white/15"
                  />
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-md border border-white/15 bg-[#002113] flex items-center justify-center">
                    <Quote className="w-4 h-4 text-solarien-primary" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-xl font-light text-white tracking-tight mb-1">{t.name}</h3>
                <p className="text-solarien-primary text-xs uppercase tracking-[0.18em] mb-1">{t.position}</p>
                <p className="text-white/65 font-light text-sm mb-1">{t.company}</p>
                <p className="text-white/45 font-light text-xs">{t.location}</p>

                <div className="mt-8 pt-6 border-t border-white/10 w-full">
                  <div className="text-4xl font-light text-white">{t.savings}</div>
                  <div className="text-xs uppercase tracking-[0.18em] text-white/50 mt-2">de economia</div>
                  <div className="text-xs text-white/40 mt-1 font-light">{t.service}</div>
                </div>
              </div>

              <div className="bg-[#002113] p-10 flex flex-col justify-center">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-solarien-primary" fill="currentColor" strokeWidth={1} />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-white/85 font-light leading-relaxed">
                  "{t.text}"
                </blockquote>
              </div>
            </div>

            <div className="border-t border-white/10 flex items-center justify-between p-6">
              <button
                onClick={prev}
                className="inline-flex items-center gap-2 px-4 py-2 text-white/70 hover:text-white text-sm tracking-wide font-light"
              >
                <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
                Anterior
              </button>

              <div className="flex gap-2">
                {items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Ir para depoimento ${i + 1}`}
                    className={`h-1 transition-all ${
                      i === index ? 'w-8 bg-solarien-primary' : 'w-4 bg-white/15 hover:bg-white/30'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="inline-flex items-center gap-2 px-4 py-2 text-white/70 hover:text-white text-sm tracking-wide font-light"
              >
                Próximo
                <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </PremiumSection>

        <PremiumCTA
          title="Seja o próximo a economizar."
          description="Junte-se a centenas de empresas que reduziram seus custos com energia."
          primary={{ href: 'https://wa.me/5511997361698', label: 'Análise Gratuita' }}
          secondary={{ to: '/servicos', label: 'Ver Serviços' }}
        />
      </PageShell>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Testimonials;
