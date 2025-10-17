import React, { useState } from 'react';
import { ArrowLeft, Zap, CheckCircle, Users, Building, TrendingUp, HelpCircle, BarChart3, Target, Circle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import StateCoverageSimulator from '../components/StateCoverageSimulator';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

const HowItWorks = () => {
  const navigate = useNavigate();

  const distributors = [
    'CPFL Paulista', 'CPFL Piratininga', 'Energisa', 'Copel', 'Equatorial Energia',
    'Cemig', 'Celesc', 'CEB', 'Celpe', 'Coelba', 'Cosern',
    'Neoenergia', 'Elektro', 'Enel', 'EDP'
  ];

  const energyGroups = [
    {
      id: 'grupo-a',
      title: 'Grupo A – Alta e Média Tensão',
      color: 'blue',
      icon: '🔵',
      tooltip: 'Grandes indústrias, shoppings, universidades, mineradoras, redes de hospitais.'
    },
    {
      id: 'grupo-b1',
      title: 'Grupo B1 – Residencial',
      color: 'green',
      icon: '🟢',
      tooltip: 'Residências urbanas, apartamentos, condomínios.'
    },
    {
      id: 'grupo-b2',
      title: 'Grupo B2 – Rural',
      color: 'yellow',
      icon: '🟡',
      tooltip: 'Sítios, fazendas, agroindústrias, cooperativas rurais.'
    },
    {
      id: 'grupo-b3',
      title: 'Grupo B3 – Demais Classes',
      color: 'orange',
      icon: '🟠',
      tooltip: 'Pequenos comércios, padarias, salões, escolas particulares.'
    },
    {
      id: 'grupo-b4a',
      title: 'Grupo B4a – Iluminação Pública',
      color: 'red',
      icon: '🔴',
      tooltip: 'Postes de luz, praças públicas, túneis.'
    },
    {
      id: 'grupo-b4b',
      title: 'Grupo B4b – Serviços Públicos',
      color: 'purple',
      icon: '🟣',
      tooltip: 'Semáforos, câmeras de segurança, fontes luminosas públicas.'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'border-blue-200 bg-blue-50 text-blue-800',
      green: 'border-green-200 bg-green-50 text-green-800',
      yellow: 'border-yellow-200 bg-yellow-50 text-yellow-800',
      orange: 'border-orange-200 bg-orange-50 text-orange-800',
      red: 'border-red-200 bg-red-50 text-red-800',
      purple: 'border-purple-200 bg-purple-50 text-purple-800'
    };
    return colorMap[color as keyof typeof colorMap] || 'border-gray-200 bg-gray-50 text-gray-800';
  };

  return (
      <div className="min-h-screen">
        <SEO
          title="Como Funciona a Energia Solar por Assinatura"
          description="Entenda como funciona a energia solar por assinatura e mercado livre de energia. Processo simples, economia garantida e sem investimento inicial. Saiba mais sobre grupos A e B."
          keywords="como funciona energia solar, energia por assinatura, mercado livre energia, grupo a grupo b, economia energia elétrica"
          canonical="https://solarien.com.br/como-funciona"
        />
        <Header />
        <div className="min-h-screen pt-20" style={{ backgroundColor: '#002113' }}>
          <div className="container mx-auto px-4 py-4">
            <Breadcrumbs />
          </div>
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
                <h1 className="text-4xl font-bold text-white mb-2">Como Funciona a Energia Solar</h1>
                <p className="text-gray-300">
                  Entenda todo o processo e comece a economizar hoje mesmo
                </p>
              </div>
            </div>

            {/* Como funciona? */}
            <Card className="bg-green-800/20 border-green-700 mb-8">
              <CardHeader>
                <CardTitle className="text-solarien-primary text-2xl flex items-center gap-3">
                  <Zap className="w-8 h-8" />
                  Como funciona?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-solarien-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-solarien-primary">1</span>
                    </div>
                    <h3 className="text-white font-semibold mb-2">Cadastro Simples</h3>
                    <p className="text-gray-300">Faça seu cadastro em nossa plataforma em menos de 5 minutos</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-solarien-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-solarien-primary">2</span>
                    </div>
                    <h3 className="text-white font-semibold mb-2">Escolha seu Plano</h3>
                    <p className="text-gray-300">Selecione o plano que melhor se adequa ao seu consumo</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-solarien-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-solarien-primary">3</span>
                    </div>
                    <h3 className="text-white font-semibold mb-2">Comece a Economizar</h3>
                    <p className="text-gray-300">Receba créditos de energia solar direto na sua conta</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vantagens */}
            <Card className="bg-green-800/20 border-green-700 mb-8">
              <CardHeader>
                <CardTitle className="text-solarien-primary text-2xl flex items-center gap-3">
                  <CheckCircle className="w-8 h-8" />
                  Vantagens:
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-solarien-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">Economia Imediata</h3>
                      <p className="text-gray-300">Reduza sua conta de luz em até 25% desde o primeiro mês</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-solarien-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">Sem Investimento Inicial</h3>
                      <p className="text-gray-300">Não precisa instalar painéis ou fazer obras</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-solarien-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">Energia Limpa</h3>
                      <p className="text-gray-300">100% renovável e sustentável</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-solarien-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">Flexibilidade Total</h3>
                      <p className="text-gray-300">Cancele quando quiser, sem multas</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Energy Groups Block */}
            <Card className="bg-green-800/20 border-green-700 mb-8">
              <CardHeader>
                <CardTitle className="text-solarien-primary text-2xl flex items-center gap-3">
                  <Target className="w-8 h-8" />
                  Grupos de Energia Elétrica
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Conheça todos os grupos tarifários e suas características
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TooltipProvider>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {energyGroups.map((group) => (
                      <div
                        key={group.id}
                        className={`p-4 rounded-lg border-2 ${getColorClasses(group.color)} transition-all duration-300 hover:shadow-lg`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{group.icon}</span>
                            <h3 className="font-semibold text-sm">{group.title}</h3>
                          </div>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button className="text-gray-500 hover:text-gray-700 transition-colors">
                                <HelpCircle className="w-4 h-4" />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent side="top" className="max-w-xs">
                              <p className="text-sm">{group.tooltip}</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                      </div>
                    ))}
                  </div>
                </TooltipProvider>
              </CardContent>
            </Card>

            {/* Group Selection - Side by Side */}
            <Card className="bg-green-800/20 border-green-700 mb-8">
              <CardHeader>
                <CardTitle className="text-solarien-primary text-2xl">Escolha seu Grupo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-solarien-primary/10 to-solarien-secondary/10 rounded-lg p-6 border border-solarien-primary/20">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="w-8 h-8 text-solarien-primary" />
                      <h3 className="text-2xl font-bold text-white">Grupo B - Residências</h3>
                    </div>
                    <p className="text-gray-300 mb-4">Para residências e pequenos comércios</p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-solarien-primary" />
                        Desconto de até 25%
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-solarien-primary" />
                        Processo simplificado
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-solarien-primary" />
                        Sem burocracia
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-solarien-secondary/10 to-solarien-tertiary/10 rounded-lg p-6 border border-solarien-secondary/20">
                    <div className="flex items-center gap-3 mb-4">
                      <Building className="w-8 h-8 text-solarien-secondary" />
                      <h3 className="text-2xl font-bold text-white">Grupo A - Empresas</h3>
                    </div>
                    <p className="text-gray-300 mb-4">Para indústrias e grandes empresas</p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-solarien-secondary" />
                        Desconto de até 45%
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-solarien-secondary" />
                        Volumes maiores
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-solarien-secondary" />
                        Consultoria especializada
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Distribuidoras Participantes */}
            <Card className="bg-green-800/20 border-green-700 mb-8">
              <CardHeader>
                <CardTitle className="text-solarien-primary text-2xl flex items-center gap-3">
                  <Building className="w-8 h-8" />
                  Distribuidoras Participantes no Grupo B
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {distributors.map((distributor, index) => (
                    <div key={index} className="bg-green-800/30 rounded-lg p-4 text-center">
                      <p className="text-white font-semibold">{distributor}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* State Coverage Simulator - Now positioned here */}
            <div className="mb-8">
              <StateCoverageSimulator />
            </div>

            {/* Difference between Groups */}
            <Card className="bg-green-800/20 border-green-700 mb-8">
              <CardHeader>
                <CardTitle className="text-solarien-primary text-2xl flex items-center gap-3">
                  <Target className="w-8 h-8" />
                  Diferença entre Grupo A e Grupo B
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-white">
                    <thead>
                      <tr className="border-b border-green-700">
                        <th className="text-left p-4">Característica</th>
                        <th className="text-left p-4">Grupo B (Residencial)</th>
                        <th className="text-left p-4">Grupo A (Empresarial)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-green-800/50">
                        <td className="p-4 text-gray-300">Tensão</td>
                        <td className="p-4">Baixa tensão (&lt; 2.3 kV)</td>
                        <td className="p-4">Alta tensão (&gt; 2.3 kV)</td>
                      </tr>
                      <tr className="border-b border-green-800/50">
                        <td className="p-4 text-gray-300">Desconto</td>
                        <td className="p-4 text-solarien-primary font-semibold">Até 25%</td>
                        <td className="p-4 text-solarien-secondary font-semibold">Até 45%</td>
                      </tr>
                      <tr className="border-b border-green-800/50">
                        <td className="p-4 text-gray-300">Processo</td>
                        <td className="p-4">Simplificado</td>
                        <td className="p-4">Mais complexo</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="bg-green-800/20 border-green-700 mb-8">
              <CardHeader>
                <CardTitle className="text-solarien-primary text-2xl flex items-center gap-3">
                  <HelpCircle className="w-8 h-8" />
                  Perguntas Frequentes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-b border-green-800/50 pb-4">
                    <h3 className="text-white font-semibold mb-2">Como funciona o desconto na conta de luz?</h3>
                    <p className="text-gray-300">O desconto é aplicado automaticamente na sua conta de luz através dos créditos de energia solar que você adquire conosco.</p>
                  </div>
                  <div className="border-b border-green-800/50 pb-4">
                    <h3 className="text-white font-semibold mb-2">Preciso instalar algo na minha casa?</h3>
                    <p className="text-gray-300">Não! Nossa energia solar é compartilhada. Você apenas precisa se cadastrar e escolher seu plano.</p>
                  </div>
                  <div className="border-b border-green-800/50 pb-4">
                    <h3 className="text-white font-semibold mb-2">Posso cancelar quando quiser?</h3>
                    <p className="text-gray-300">Sim! Você tem total flexibilidade para cancelar seu plano a qualquer momento, sem multas ou taxas.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Market Growth */}
            <Card className="bg-green-800/20 border-green-700 mb-8">
              <CardHeader>
                <CardTitle className="text-solarien-primary text-2xl flex items-center gap-3">
                  <BarChart3 className="w-8 h-8" />
                  Crescimento do Mercado de Energia Renovável no Brasil
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center bg-gradient-to-br from-solarien-primary/10 to-solarien-secondary/10 rounded-lg p-6">
                    <TrendingUp className="w-12 h-12 text-solarien-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-solarien-primary mb-2">156%</div>
                    <div className="text-gray-300">Crescimento em 2023</div>
                  </div>
                  <div className="text-center bg-gradient-to-br from-solarien-secondary/10 to-solarien-tertiary/10 rounded-lg p-6">
                    <Users className="w-12 h-12 text-solarien-secondary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-solarien-secondary mb-2">2.5M</div>
                    <div className="text-gray-300">Conexões ativas</div>
                  </div>
                  <div className="text-center bg-gradient-to-br from-solarien-tertiary/10 to-solarien-primary/10 rounded-lg p-6">
                    <Zap className="w-12 h-12 text-solarien-tertiary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-solarien-tertiary mb-2">24 GW</div>
                    <div className="text-gray-300">Potência instalada</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ready to Start */}
            <Card className="bg-gradient-to-r from-solarien-primary/20 to-solarien-secondary/20 border-solarien-primary mb-8">
              <CardHeader>
                <CardTitle className="text-solarien-primary text-2xl flex items-center gap-3">
                  <Target className="w-8 h-8" />
                  Pronto para começar?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 mb-6 text-lg">
                  Junte-se a milhares de brasileiros que já estão economizando com energia solar!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-bold px-8 py-4 text-lg hover:shadow-lg hover:shadow-solarien-primary/25 transition-all duration-300">
                    Cadastrar Agora
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => navigate('/contact')}
                    className="border-solarien-primary text-solarien-primary hover:bg-solarien-primary hover:text-black px-8 py-4 text-lg"
                  >
                    Falar com Consultor
                  </Button>
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
