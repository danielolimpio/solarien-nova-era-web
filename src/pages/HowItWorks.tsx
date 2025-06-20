
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Sun, Zap, Building, Home, CheckCircle, MessageCircle, FileText, Clock, MapPin, Phone, Mail, Settings, Award, Building2, HelpCircle, TrendingUp, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const HowItWorks = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('grupo-b');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const grupoASteps = [
    {
      icon: MessageCircle,
      title: "Entre em contato",
      description: "Fale com um Licenciado Solarien via WhatsApp"
    },
    {
      icon: FileText,
      title: "Análise detalhada",
      description: "Análise do seu consumo e histórico energético"
    },
    {
      icon: Zap,
      title: "Negociação",
      description: "Apresentação de fornecedores e negociação direta"
    },
    {
      icon: CheckCircle,
      title: "Ativação",
      description: "Formalização do contrato e início da migração"
    }
  ];

  const grupoBSteps = [
    {
      icon: MessageCircle,
      title: "Contato inicial",
      description: "Entre em contato conosco pelo WhatsApp"
    },
    {
      icon: FileText,
      title: "Análise personalizada",
      description: "Licenciado analisa seu perfil e envia proposta"
    },
    {
      icon: CheckCircle,
      title: "Contrato digital",
      description: "Assine o contrato e aguarde a ativação"
    },
    {
      icon: Clock,
      title: "Créditos solares",
      description: "Em até 90 dias, receba os créditos na sua conta"
    }
  ];

  const distribuidoras = [
    { estado: "Bahia", empresa: "Coelba (Neoenergia)", desconto: "15%" },
    { estado: "Brasília (DF)", empresa: "CEB (Neoenergia)", desconto: "15%" },
    { estado: "Ceará", empresa: "Enel", desconto: "15%" },
    { estado: "Goiás", empresa: "Equatorial", desconto: "15%" },
    { estado: "Maranhão", empresa: "Equatorial", desconto: "15%" },
    { estado: "Mato Grosso", empresa: "Energisa", desconto: "15%" },
    { estado: "Mato Grosso do Sul", empresa: "Energisa", desconto: "15%" },
    { estado: "Minas Gerais", empresa: "Cemig", desconto: "15%" },
    { estado: "Minas Gerais", empresa: "Energisa", desconto: "15%" },
    { estado: "Pará", empresa: "Equatorial", desconto: "15%" },
    { estado: "Paraná", empresa: "Copel", desconto: "15%" },
    { estado: "Paraná", empresa: "Energisa", desconto: "15%" },
    { estado: "Pernambuco", empresa: "Celpe (Neoenergia)", desconto: "15%" },
    { estado: "Piauí", empresa: "Equatorial", desconto: "15%" },
    { estado: "Rio Grande do Norte", empresa: "Cosern (Neoenergia)", desconto: "15%" },
    { estado: "Santa Catarina", empresa: "Celesc", desconto: "15%" },
    { estado: "São Paulo", empresa: "CPFL Paulista", desconto: "15%" },
    { estado: "São Paulo", empresa: "Elektro (Neoenergia)", desconto: "15%" },
    { estado: "São Paulo", empresa: "Energisa", desconto: "15%" },
    { estado: "São Paulo", empresa: "Copel", desconto: "15%" },
    { estado: "Sergipe", empresa: "Energisa", desconto: "15%" },
    { estado: "Tocantins", empresa: "Energisa", desconto: "15%" }
  ];

  const faqs = [
    {
      question: "A mudança é legalizada?",
      answer: "Sim! A portabilidade é regulada pela ANEEL e garantida pela Lei 14.300/2022, que permite a livre escolha do fornecedor de energia."
    },
    {
      question: "É preciso pagar algo para migrar?",
      answer: "Não! A adesão é gratuita e não há cobrança de taxas ou custos adicionais."
    },
    {
      question: "Preciso instalar algo na minha casa ou empresa?",
      answer: "Não! Você continua usando a mesma rede elétrica da distribuidora. Nenhuma obra ou instalação é necessária."
    },
    {
      question: "Como acompanho os descontos na conta?",
      answer: "Você receberá créditos energéticos diretamente na fatura da distribuidora, com destaque claro do valor abatido."
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer: "Sim! Após cumprir o período de fidelização (12 meses para grupo B ou 5 anos para grupo A), você pode cancelar quando quiser, sem multa."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="min-h-screen pt-20" style={{ backgroundColor: '#002113' }}>
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
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
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                <Sun className="w-10 h-10 text-solarien-primary" />
                Como Funciona | Solarien Energy
              </h1>
              <p className="text-gray-300">
                Seja muito bem-vindo(a) à revolução da energia limpa no Brasil!
              </p>
            </div>
          </div>

          {/* Hero Section */}
          <Card className="bg-energy-gradient border-green-700 mb-12">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Energia Solar Sem Instalação
                </h2>
                <p className="text-gray-300 text-lg mb-8 max-w-4xl mx-auto leading-relaxed">
                  Na Solarien Energy, você pode reduzir sua conta de luz em <span className="text-solarien-primary font-bold">até 15% no Grupo B</span> e <span className="text-solarien-primary font-bold">até 45% no Mercado Livre</span>, sem precisar instalar placas solares em casa ou na sua empresa. Tudo isso graças ao <span className="text-solarien-primary font-bold">Mercado de Energia por Assinatura</span>.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-green-800/30 p-6 rounded-lg border border-green-700">
                    <Zap className="w-12 h-12 text-solarien-primary mx-auto mb-4" />
                    <h3 className="text-white font-bold text-lg mb-2">Sem Obras</h3>
                    <p className="text-gray-300">Nenhuma instalação necessária</p>
                  </div>
                  <div className="bg-green-800/30 p-6 rounded-lg border border-green-700">
                    <CheckCircle className="w-12 h-12 text-solarien-primary mx-auto mb-4" />
                    <h3 className="text-white font-bold text-lg mb-2">Sem Custos Extras</h3>
                    <p className="text-gray-300">Migração totalmente gratuita</p>
                  </div>
                  <div className="bg-green-800/30 p-6 rounded-lg border border-green-700">
                    <Sun className="w-12 h-12 text-solarien-primary mx-auto mb-4" />
                    <h3 className="text-white font-bold text-lg mb-2">Energia Limpa</h3>
                    <p className="text-gray-300">100% renovável e sustentável</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Portabilidade Energética */}
          <Card className="bg-green-800/20 border-green-700 mb-12">
            <CardHeader>
              <CardTitle className="text-solarien-primary text-2xl flex items-center gap-3">
                <Zap className="w-8 h-8" />
                Portabilidade Energética: Acesso Simples e Sustentável
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-lg leading-relaxed">
                A <span className="text-solarien-primary font-bold">Lei 14.300/2022</span> trouxe grandes transformações ao setor elétrico brasileiro, permitindo que consumidores dos Grupos A (Alta Tensão) e B (Baixa Tensão) possam escolher de onde querem receber sua energia — mesmo sem ter geradores físicos instalados em suas unidades.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                Isso significa que você não precisa mais depender apenas da distribuidora local. Com a Solarien Energy, você se conecta a <span className="text-solarien-primary font-bold">usinas solares certificadas</span>, e recebe créditos energéticos diretamente na sua conta de luz.
              </p>
            </CardContent>
          </Card>

          {/* Tabs para Grupos A e B */}
          <div className="mb-12">
            <div className="flex justify-center mb-8">
              <div className="bg-green-800/30 p-2 rounded-lg border border-green-700">
                <button
                  onClick={() => setActiveTab('grupo-b')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                    activeTab === 'grupo-b'
                      ? 'bg-solarien-primary text-black'
                      : 'text-white hover:bg-green-700/50'
                  }`}
                >
                  <Home className="w-5 h-5" />
                  Grupo B - Residências
                </button>
                <button
                  onClick={() => setActiveTab('grupo-a')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ml-2 ${
                    activeTab === 'grupo-a'
                      ? 'bg-solarien-primary text-black'
                      : 'text-white hover:bg-green-700/50'
                  }`}
                >
                  <Building className="w-5 h-5" />
                  Grupo A - Empresas
                </button>
              </div>
            </div>

            {activeTab === 'grupo-b' && (
              <div className="space-y-8">
                <Card className="bg-green-800/20 border-green-700">
                  <CardHeader>
                    <CardTitle className="text-solarien-primary text-2xl flex items-center gap-3">
                      <Home className="w-8 h-8" />
                      Para Residências e Pequenos Comércios – Grupo B (Baixa Tensão)
                    </CardTitle>
                    <CardDescription className="text-gray-300 text-lg">
                      Se sua conta tem consumo médio de <span className="text-solarien-primary font-bold">150 kWh/mês ou mais</span>, você pode fazer parte da geração compartilhada e começar a economizar já!
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                          <Award className="w-6 h-6 text-solarien-primary" />
                          Vantagens:
                        </h3>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-solarien-primary" />
                            Desconto de até 15% na conta de luz
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-solarien-primary" />
                            Sem instalações ou obras
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-solarien-primary" />
                            Não paga nada para migrar
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-solarien-primary" />
                            Utiliza a mesma rede elétrica atual
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-solarien-primary" />
                            Fidelidade de 12 meses
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-solarien-primary" />
                            Injeção de créditos a partir de 90 dias
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-solarien-primary" />
                            Atendemos 16 estados + Distrito Federal
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                          <Settings className="w-6 h-6 text-solarien-primary" />
                          Como funciona?
                        </h3>
                        <div className="space-y-4">
                          {grupoBSteps.map((step, index) => (
                            <div key={index} className="flex items-start gap-4 p-4 bg-green-800/30 rounded-lg border border-green-700">
                              <div className="bg-solarien-primary p-2 rounded-full">
                                <step.icon className="w-5 h-5 text-black" />
                              </div>
                              <div>
                                <h4 className="text-white font-semibold">{step.title}</h4>
                                <p className="text-gray-300 text-sm">{step.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 text-center">
                      <Button
                        onClick={() => window.open('https://wa.me/5511997361698', '_blank')}
                        className="bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-bold px-8 py-4 text-lg hover:shadow-lg hover:shadow-solarien-primary/25 transition-all duration-300"
                      >
                        <MessageCircle className="w-6 h-6 mr-2" />
                        Fale com um Licenciado Agora
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Tabela de Distribuidoras */}
                <Card className="bg-green-800/20 border-green-700">
                  <CardHeader>
                    <CardTitle className="text-solarien-primary text-2xl flex items-center gap-3">
                      <Building2 className="w-8 h-8" />
                      Distribuidoras Participantes no Grupo B
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {distribuidoras.map((dist, index) => (
                        <div key={index} className="bg-green-800/30 p-4 rounded-lg border border-green-700">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-white font-semibold">{dist.estado}</h4>
                              <p className="text-gray-300 text-sm">{dist.empresa}</p>
                            </div>
                            <span className="text-solarien-primary font-bold text-lg">{dist.desconto}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'grupo-a' && (
              <Card className="bg-green-800/20 border-green-700">
                <CardHeader>
                  <CardTitle className="text-solarien-primary text-2xl flex items-center gap-3">
                    <Building className="w-8 h-8" />
                    Para Empresas e Indústrias – Mercado Livre de Energia – Grupo A (Alta Tensão)
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-lg">
                    Para empresas e indústrias, oferecemos acesso ao Mercado Livre de Energia, onde é possível negociar contratos com preços competitivos e fontes renováveis.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <Award className="w-6 h-6 text-solarien-primary" />
                        Benefícios:
                      </h3>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-solarien-primary" />
                          Redução real na tarifa de energia de até 45%
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-solarien-primary" />
                          Contrato com duração mínima de 5 anos
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-solarien-primary" />
                          Injeção de energia a partir de 90 a 180 dias
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-solarien-primary" />
                          Atendemos todo o Brasil — 26 estados + DF
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-solarien-primary" />
                          Sistema interligado nacional
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-solarien-primary" />
                          Sem burocracia e sem custos extras
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <Settings className="w-6 h-6 text-solarien-primary" />
                        Como migrar?
                      </h3>
                      <div className="space-y-4">
                        {grupoASteps.map((step, index) => (
                          <div key={index} className="flex items-start gap-4 p-4 bg-green-800/30 rounded-lg border border-green-700">
                            <div className="bg-solarien-primary p-2 rounded-full">
                              <step.icon className="w-5 h-5 text-black" />
                            </div>
                            <div>
                              <h4 className="text-white font-semibold">{step.title}</h4>
                              <p className="text-gray-300 text-sm">{step.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                    <Button
                      onClick={() => window.open('https://wa.me/5511997361698', '_blank')}
                      className="bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-bold px-8 py-4 text-lg hover:shadow-lg hover:shadow-solarien-primary/25 transition-all duration-300"
                    >
                      <MessageCircle className="w-6 h-6 mr-2" />
                      Fale com um Especialista
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Diferença entre Grupos */}
          <Card className="bg-green-800/20 border-green-700 mb-12">
            <CardHeader>
              <CardTitle className="text-solarien-primary text-2xl flex items-center gap-3">
                <Users className="w-8 h-8" />
                Diferença entre Grupo A e Grupo B
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-800/30 p-6 rounded-lg border border-green-700">
                  <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                    <Building className="w-6 h-6 text-solarien-primary" />
                    Grupo A
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Grandes empresas, indústrias e comércios</li>
                    <li>• Alta Tensão (69 kV a 2,4 kV)</li>
                    <li>• Shoppings, fábricas, centros comerciais</li>
                    <li>• <span className="text-solarien-primary font-bold">Até 45% de desconto</span></li>
                  </ul>
                </div>
                <div className="bg-green-800/30 p-6 rounded-lg border border-green-700">
                  <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                    <Home className="w-6 h-6 text-solarien-primary" />
                    Grupo B
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Residências e pequenos comércios</li>
                    <li>• Baixa Tensão (até 2,3 kV)</li>
                    <li>• Casas, escritórios, salões de beleza</li>
                    <li>• <span className="text-solarien-primary font-bold">Até 15% de desconto</span></li>
                  </ul>
                </div>
              </div>
              <p className="text-center text-gray-300 mt-6 text-lg">
                Com a Solarien, ambos os grupos têm acesso a energia limpa e econômica — cada um com a solução ideal para seu perfil.
              </p>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card className="bg-green-800/20 border-green-700 mb-12">
            <CardHeader>
              <CardTitle className="text-solarien-primary text-2xl flex items-center gap-3">
                <HelpCircle className="w-8 h-8" />
                Perguntas Frequentes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-green-700 rounded-lg">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full p-4 text-left hover:bg-green-800/30 transition-colors duration-300 flex justify-between items-center"
                    >
                      <span className="text-white font-semibold">{faq.question}</span>
                      <span className="text-solarien-primary text-xl">
                        {openFaq === index ? '−' : '+'}
                      </span>
                    </button>
                    {openFaq === index && (
                      <div className="p-4 pt-0 border-t border-green-700">
                        <p className="text-gray-300">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Crescimento do Mercado */}
          <Card className="bg-energy-gradient border-green-700 mb-12">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center justify-center gap-3">
                <TrendingUp className="w-10 h-10 text-solarien-primary" />
                Crescimento do Mercado de Energia Renovável no Brasil
              </h2>
              <p className="text-gray-300 text-lg mb-6 max-w-4xl mx-auto leading-relaxed">
                O mercado de energia renovável no Brasil está em <span className="text-solarien-primary font-bold">forte expansão</span>. Cada vez mais pessoas e empresas estão buscando alternativas sustentáveis e econômicas para reduzir custos e contribuir com o meio ambiente.
              </p>
              <p className="text-gray-300 text-lg mb-8 max-w-4xl mx-auto leading-relaxed">
                Com a <span className="text-solarien-primary font-bold">energia por assinatura</span>, o Brasil está se tornando líder em geração compartilhada, unindo tecnologia, transparência e responsabilidade ambiental.
              </p>
              <p className="text-white text-xl font-bold">
                E com a Solarien Energy, você faz parte dessa transformação desde o primeiro passo.
              </p>
            </CardContent>
          </Card>

          {/* CTA Final */}
          <Card className="bg-gradient-to-r from-solarien-primary/20 to-solarien-secondary/20 border-solarien-primary">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center justify-center gap-3">
                <Users className="w-10 h-10 text-solarien-primary" />
                Pronto para começar?
              </h2>
              <p className="text-gray-300 text-xl mb-8">
                Conecte-se a uma usina solar e comece a reduzir sua conta de luz hoje mesmo!
              </p>
              <Button
                onClick={() => window.open('https://wa.me/5511997361698', '_blank')}
                className="bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-bold px-12 py-6 text-xl hover:shadow-lg hover:shadow-solarien-primary/25 transition-all duration-300 glow-effect"
              >
                <MessageCircle className="w-8 h-8 mr-3" />
                Fale Conosco no WhatsApp
              </Button>
              <div className="flex items-center justify-center gap-2 mt-4 text-gray-300">
                <Phone className="w-5 h-5" />
                <span>+55 (11) 99736-1698</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default HowItWorks;
