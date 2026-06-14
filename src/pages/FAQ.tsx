import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Zap, Users, ArrowRight } from 'lucide-react';
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

const FAQ = () => {
  const [tab, setTab] = useState<'energy' | 'network'>('energy');

  const energyFAQ = [
    { q: 'Quais serviços a Solarien Energy oferece?', a: 'A Solarien fornece energia renovável por assinatura para clientes dos Grupos A em todo Brasil, e Grupo B em 16 estados. Oferecemos economia, sustentabilidade e flexibilidade sem precisar instalar placas solares.' },
    { q: 'O que é o Mercado de Energia por Assinatura?', a: 'É um modelo onde você recebe créditos de energia gerados por usinas solares conectadas à rede elétrica. Esses créditos são usados para reduzir sua conta de luz.' },
    { q: 'Como funciona a emissão do boleto da Solarien?', a: 'Recebemos os dados da distribuidora e cruzamos com as informações da usina. Com isso, geramos seu boleto com o valor referente aos créditos energéticos gerados.' },
    { q: 'Quando recebo o boleto e como ele é enviado?', a: 'Você recebe o boleto digital mensalmente pelo WhatsApp do titular do cadastro. Também pode optar por receber por e-mail.' },
    { q: 'O que são ICMS, PIS, COFINS e Encargos Setoriais?', a: 'São taxas obrigatórias definidas pelos governos federal e estadual, aplicadas no consumo de energia, independentemente da fonte.' },
    { q: 'Quais são as vantagens da energia solar por assinatura?', a: '• Economia na conta de luz\n• Sem investimento inicial\n• Fonte limpa e renovável\n• Adesão rápida e sem burocracia\n• Sem contrato de fidelidade' },
    { q: 'A Solarien atua no Mercado Livre de Energia?', a: 'Sim! Oferecemos soluções tanto para o mercado cativo quanto para o livre, ajudando empresas a migrarem e negociarem preços melhores.' },
    { q: 'Como aderir à energia compartilhada?', a: 'É rápido e 100% online:\n1. Informe seus dados e código da unidade consumidora\n2. Assine o contrato\n3. Aguarde a ativação' },
    { q: 'Posso cancelar minha assinatura quando quiser?', a: 'Sim. Basta entrar em contato conosco. Não há multa se cancelar fora do período de fidelização.' },
    { q: 'Existe suporte da Solarien para tirar dúvidas?', a: 'Sim! Temos um atendimento exclusivo via WhatsApp no número: +55 (11) 99736-1698.' },
    { q: 'O que é o Mercado Livre de Energia (ACL)?', a: 'É o Ambiente de Contratação Livre, onde consumidores podem escolher seu fornecedor de energia, negociar preço, prazo e volume diretamente com geradoras e comercializadoras, reduzindo custos em até 45%.' },
    { q: 'Quem pode migrar para o Mercado Livre de Energia em 2026?', a: 'Qualquer consumidor do Grupo A já pode migrar como Consumidor Livre ou Especial. Consumidores do Grupo B já têm acesso através de comercializadoras varejistas.' },
    { q: 'Quanto tempo leva a migração para o mercado livre?', a: 'O processo completo leva, em média, de 60 a 180 dias, considerando denúncia à distribuidora, adequação do SMF, modelagem comercial e início do suprimento.' },
    { q: 'Qual a diferença entre energia por assinatura e mercado livre?', a: 'A energia por assinatura usa geração distribuída solar (Lei 14.300) e gera créditos de energia que abatem sua conta. O mercado livre é a contratação direta de energia (ACL), indicado para empresas com maior consumo.' },
    { q: 'O que é a Lei 14.300 e como ela afeta a geração distribuída?', a: 'A Lei 14.300/2022 instituiu o marco legal da microgeração e minigeração distribuída no Brasil, regulamentando o SCEE, o autoconsumo remoto, a geração compartilhada e a cobrança gradual da TUSD Fio B.' },
    { q: 'Como funciona a geração compartilhada de energia solar?', a: 'Você adere a uma usina solar parceira; a energia gerada é injetada na rede e convertida em créditos que abatem sua conta de luz proporcionalmente à sua cota.' },
    { q: 'Vale a pena migrar para energia solar por assinatura?', a: 'Sim, especialmente quando há economia recorrente sem investimento inicial. A Solarien analisa sua fatura e indica se o desconto compensa.' },
    { q: 'Como reduzir a conta de luz da minha empresa em 2026?', a: 'Migração ao mercado livre (até 45%), energia por assinatura via geração distribuída (até 35%) e gestão de eficiência energética.' },
    { q: 'Energia por assinatura tem fidelidade ou multa?', a: 'A Solarien não cobra multa fora do período padrão de fidelização, e o cancelamento é simples.' },
    { q: 'O que são CCEE, ANEEL, PLD e encargos setoriais?', a: 'CCEE é a Câmara de Comercialização de Energia Elétrica. ANEEL é o regulador do setor. PLD é o Preço de Liquidação das Diferenças. Encargos setoriais são tributos do setor.' },
    { q: 'A Solarien atende em todo o Brasil?', a: 'Sim. Atendemos mercado livre em todo território nacional e energia por assinatura nos 16 estados com cobertura de usinas parceiras.' },
  ];

  const networkFAQ = [
    { q: 'O que é o Multinível da Solarien?', a: 'É um sistema de indicações onde você ganha ao indicar clientes e parceiros para a energia solar por assinatura.' },
    { q: 'Como funcionam os ganhos?', a: 'Você recebe comissões por cada cliente conectado e por novos participantes que entrarem na rede através de sua indicação.' },
    { q: 'Quem pode participar?', a: 'Qualquer pessoa maior de 18 anos pode participar, mesmo sem experiência prévia no setor de energia.' },
    { q: 'Preciso investir algo para entrar?', a: 'Sim. É necessário um investimento inicial para ter acesso à plataforma, materiais de apoio, treinamentos e ferramentas de vendas.' },
    { q: 'Como acompanho meus ganhos e indicações?', a: 'Você tem acesso a um painel exclusivo onde vê suas conexões, comissões acumuladas e o crescimento da sua rede.' },
    { q: 'Quais são os tipos de ganhos?', a: 'Você pode lucrar de 8 formas diferentes: comissões diretas e indiretas, bônus residuais, bônus de liderança, prêmios especiais.' },
    { q: 'Como aumentar meus ganhos?', a: 'Conectando mais clientes, ampliando sua rede de licenciados e subindo de nível dentro do programa.' },
    { q: 'Existe suporte e treinamento?', a: 'Sim! Oferecemos treinamentos online, materiais de apoio e suporte personalizado.' },
    { q: 'Como são pagos os ganhos?', a: '• Bônus da rede de licenciados: diários\n• Bônus de conexões: mensais\n• Tudo pode ser recebido via Pix' },
    { q: 'Como me cadastro no Multinível Solarien?', a: 'Basta clicar no link de indicação de quem te trouxe, preencher o formulário e começar a indicar. Suporte: +55 (11) 99736-1698' },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [...energyFAQ, ...networkFAQ].map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const list = tab === 'energy' ? energyFAQ : networkFAQ;

  return (
    <div className="min-h-screen">
      <SEO
        title="Perguntas Frequentes - FAQ Solarien Energy"
        description="Tire dúvidas sobre energia por assinatura, mercado livre e marketing de rede."
        keywords="faq mercado livre energia, dúvidas energia por assinatura, perguntas frequentes geração distribuída"
        canonical="https://solarien.com.br/faq"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Header />
      <PageShell>
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs />
        </div>

        <PageHero
          eyebrow="Dúvidas"
          title="Perguntas frequentes."
          subtitle="Tudo o que você precisa saber sobre energia por assinatura, mercado livre, geração distribuída e nosso programa de licenciados."
        />

        <PremiumSection label={tab === 'energy' ? 'Energia' : 'Multinível'}>
          <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10 mb-10">
            <button
              onClick={() => setTab('energy')}
              className={`flex items-center justify-center gap-2 py-4 text-sm tracking-wide font-light transition-colors ${
                tab === 'energy' ? 'bg-white/[0.04] text-white' : 'bg-[#002113] text-white/60 hover:text-white'
              }`}
            >
              <Zap className="w-4 h-4" strokeWidth={1.5} />
              Energia por Assinatura
            </button>
            <button
              onClick={() => setTab('network')}
              className={`flex items-center justify-center gap-2 py-4 text-sm tracking-wide font-light transition-colors ${
                tab === 'network' ? 'bg-white/[0.04] text-white' : 'bg-[#002113] text-white/60 hover:text-white'
              }`}
            >
              <Users className="w-4 h-4" strokeWidth={1.5} />
              Marketing de Rede
            </button>
          </div>

          <div className="border border-white/10">
            <Accordion type="single" collapsible className="w-full">
              {list.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-white/10 last:border-b-0 px-6">
                  <AccordionTrigger className="text-left text-white font-light hover:text-solarien-primary text-base py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70 font-light whitespace-pre-line pb-5 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </PremiumSection>

        <PremiumCTA
          title="Ainda com dúvidas?"
          description="Fale com nosso time pelo WhatsApp e receba atendimento personalizado."
          primary={{ href: 'https://wa.me/5511997361698', label: 'Falar no WhatsApp' }}
          secondary={{ to: '/contato', label: 'Enviar Mensagem' }}
        />
      </PageShell>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default FAQ;
