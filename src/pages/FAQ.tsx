import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Users, ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

const FAQ = () => {
  const navigate = useNavigate();

  const energyFAQ = [
    {
      question: "Quais serviços a Solarien Energy oferece?",
      answer: "A Solarien fornece energia renovável por assinatura para clientes dos Grupos A (alta tensão) em todo Brasil, e Grupo B (baixa tensão) em 16 estados. Oferecemos economia, sustentabilidade e flexibilidade sem precisar instalar placas solares."
    },
    {
      question: "O que é o Mercado de Energia por Assinatura?",
      answer: "É um modelo onde você recebe créditos de energia gerados por usinas solares conectadas à rede elétrica. Esses créditos são usados para reduzir sua conta de luz."
    },
    {
      question: "Como funciona a emissão do boleto da Solarien?",
      answer: "Recebemos os dados da distribuidora e cruzamos com as informações da usina. Com isso, geramos seu boleto com o valor referente aos créditos energéticos gerados."
    },
    {
      question: "Quando recebo o boleto e como ele é enviado?",
      answer: "Você recebe o boleto digital mensalmente pelo WhatsApp do titular do cadastro. Também pode optar por receber por e-mail."
    },
    {
      question: "O que são ICMS, PIS, COFINS e Encargos Setoriais?",
      answer: "São taxas obrigatórias definidas pelos governos federal e estadual, aplicadas no consumo de energia, independentemente da fonte."
    },
    {
      question: "Quais são as vantagens da energia solar por assinatura?",
      answer: "• Economia na conta de luz\n• Sem investimento inicial\n• Fonte limpa e renovável\n• Adesão rápida e sem burocracia\n• Sem contrato de fidelidade"
    },
    {
      question: "A Solarien atua no Mercado Livre de Energia?",
      answer: "Sim! Oferecemos soluções tanto para o mercado cativo quanto para o livre, ajudando empresas a migrarem e negociarem preços melhores."
    },
    {
      question: "Como aderir à energia compartilhada?",
      answer: "É rápido e 100% online:\n1. Informe seus dados e código da unidade consumidora\n2. Assine o contrato\n3. Aguarde a ativação"
    },
    {
      question: "Posso cancelar minha assinatura quando quiser?",
      answer: "Sim. Basta entrar em contato conosco. Não há multa se cancelar fora do período de fidelização."
    },
    {
      question: "Existe suporte da Solarien para tirar dúvidas?",
      answer: "Sim! Temos um atendimento exclusivo via WhatsApp no número: +55 (11) 99736-1698. Ao iniciar o contato, nosso bot solicita seu CPF ou CNPJ para identificação, e um atendente entra em contato."
    }
  ];

  const networkFAQ = [
    {
      question: "O que é o Multinível da Solarien?",
      answer: "É um sistema de indicações onde você ganha dinheiro ao indicar clientes e parceiros para a energia solar por assinatura."
    },
    {
      question: "Como funcionam os ganhos?",
      answer: "Você recebe comissões por cada cliente conectado e por novos participantes que entrarem na rede através de sua indicação."
    },
    {
      question: "Quem pode participar?",
      answer: "Qualquer pessoa maior de 18 anos pode participar, mesmo sem experiência prévia no setor de energia."
    },
    {
      question: "Preciso investir algo para entrar?",
      answer: "Sim. É necessário um investimento inicial para ter acesso à plataforma, materiais de apoio, treinamentos e ferramentas de vendas."
    },
    {
      question: "Como acompanho meus ganhos e indicações?",
      answer: "Você tem acesso a um painel exclusivo onde vê suas conexões, comissões acumuladas e o crescimento da sua rede."
    },
    {
      question: "Quais são os tipos de ganhos?",
      answer: "Você pode lucrar de 8 formas diferentes, incluindo:\n• Comissões diretas e indiretas\n• Bônus residuais\n• Bônus de liderança\n• Prêmios especiais"
    },
    {
      question: "Como aumentar meus ganhos?",
      answer: "Conectando mais clientes, ampliando sua rede de licenciados e subindo de nível dentro do programa."
    },
    {
      question: "Existe suporte e treinamento?",
      answer: "Sim! Oferecemos treinamentos online, materiais de apoio e suporte personalizado para ajudar no seu sucesso."
    },
    {
      question: "Como são pagos os ganhos?",
      answer: "• Bônus da rede de licenciados: diários\n• Bônus de conexões: mensais\n• Tudo pode ser recebido via Pix"
    },
    {
      question: "Como me cadastro no Multinível Solarien?",
      answer: "Basta clicar no link de indicação de quem te trouxe, preencher o formulário e começar a indicar. Se precisar de ajuda, entre em contato pelo WhatsApp: +55 (11) 99736-1698"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Perguntas Frequentes - FAQ Solarien Energy"
        description="Tire suas dúvidas sobre energia solar por assinatura, mercado livre de energia e marketing de rede. Respostas completas sobre como economizar na conta de luz."
        keywords="faq energia solar, dúvidas energia assinatura, perguntas mercado livre energia, como funciona solarien, multinível solarien"
        canonical="https://solarien.com.br/faq"
      />
      <Header />
      <div className="min-h-screen pt-20" style={{ backgroundColor: '#002113' }}>
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs />
        </div>
        {/* Header */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="border-solarien-primary text-solarien-primary hover:bg-solarien-primary hover:text-black"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                Perguntas Frequentes
              </h1>
              <p className="text-gray-300">
                Encontre respostas para suas principais dúvidas
              </p>
            </div>
          </div>

          {/* FAQ Tabs */}
          <Tabs defaultValue="energy" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-green-800">
              <TabsTrigger 
                value="energy" 
                className="data-[state=active]:bg-solarien-primary data-[state=active]:text-black text-white font-semibold"
              >
                <Zap className="w-4 h-4 mr-2" />
                Energia por Assinatura
              </TabsTrigger>
              <TabsTrigger 
                value="network" 
                className="data-[state=active]:bg-solarien-primary data-[state=active]:text-black text-white font-semibold"
              >
                <Users className="w-4 h-4 mr-2" />
                Marketing de Rede
              </TabsTrigger>
            </TabsList>

            {/* Energy FAQ Tab */}
            <TabsContent value="energy">
              <Card className="bg-green-800/20 border-green-700">
                <CardHeader>
                  <CardTitle className="text-solarien-primary flex items-center gap-2">
                    <Zap className="w-6 h-6" />
                    Energia Solar por Assinatura
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Tudo sobre descontos na conta de energia e como funciona nosso serviço
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {energyFAQ.map((faq, index) => (
                      <AccordionItem key={index} value={`energy-${index}`} className="border-green-700">
                        <AccordionTrigger className="text-left text-white hover:text-solarien-primary">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 whitespace-pre-line">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Network Marketing FAQ Tab */}
            <TabsContent value="network">
              <Card className="bg-green-800/20 border-green-700">
                <CardHeader>
                  <CardTitle className="text-solarien-primary flex items-center gap-2">
                    <Users className="w-6 h-6" />
                    Multinível Solarien
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Informações sobre o programa de indicações e ganhos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {networkFAQ.map((faq, index) => (
                      <AccordionItem key={index} value={`network-${index}`} className="border-green-700">
                        <AccordionTrigger className="text-left text-white hover:text-solarien-primary">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 whitespace-pre-line">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-green-800/30 to-green-700/30 border-solarien-primary/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Não encontrou sua resposta?
                </h3>
                <p className="text-gray-300 mb-6">
                  Entre em contato conosco pelo WhatsApp e receba atendimento personalizado
                </p>
                <Button
                  className="bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-bold px-8 py-3 text-lg rounded-lg hover:shadow-lg hover:shadow-solarien-primary/25 transition-all duration-300"
                  onClick={() => window.open('https://wa.me/5511997361698', '_blank')}
                >
                  Falar no WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default FAQ;
