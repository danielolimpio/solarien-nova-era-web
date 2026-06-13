import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { Zap, Shield, TrendingDown, Users, CheckCircle, Calculator, Clock, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Energia por Assinatura",
      description: "Acesso à energia limpa sem investimento inicial, instalação ou manutenção",
      features: [
        "Sem custos de instalação",
        "Economia de até 35% na conta de luz",
        "Energia 100% renovável",
        "Sem obras ou reformas",
        "Migração gratuita"
      ],
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: TrendingDown,
      title: "Mercado Livre de Energia", 
      description: "Liberdade para escolher seu fornecedor de energia e economizar até 45%",
      features: [
        "Economia de até 45%",
        "Contratos personalizados",
        "Consultoria especializada",
        "Gestão completa do processo",
        "Suporte técnico dedicado"
      ],
      color: "from-green-400 to-blue-500"
    },
    {
      icon: Shield,
      title: "Restituição de Créditos!",
      description: "Recuperação de créditos de energia de cobranças indevidas analisadas nos últimos 10 anos",
      features: [
        "Auditoria Técnica de 5 a 10 anos",
        "Identificação de Inconsistências",
        "Recuperação Administrativa ANEEL",
        "Zero Custo para o Cliente",
        "Prazo típico 60 a 180 dias"
      ],
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Users,
      title: "Restituição de Créditos Eletrobrás",
      description: "Recuperação de créditos compulsórios de energia da Eletrobras dos anos de 1987 e 1994",
      features: [
        "Auditoria Histórica de até 40 anos",
        "Identificação de Créditos da Eletrobras",
        "Possibilidade de Venda do Crédito",
        "Sem Custo Inicial para Análise",
        "Pagamento à Vista em 7 dias"
      ],
      color: "from-indigo-400 to-cyan-500"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Análise Inicial",
      description: "Avaliamos seu perfil de consumo e identificamos oportunidades de economia"
    },
    {
      step: "2", 
      title: "Proposta Personalizada",
      description: "Desenvolvemos uma solução sob medida para suas necessidades específicas"
    },
    {
      step: "3",
      title: "Implementação",
      description: "Cuidamos de todo o processo burocrático e migração sem interrupção"
    },
    {
      step: "4",
      title: "Acompanhamento",
      description: "Monitoramos continuamente seus resultados e otimizamos a economia"
    }
  ];

  const benefits = [
    {
      icon: Calculator,
      title: "Economia Garantida",
      description: "Redução comprovada na sua conta de energia elétrica"
    },
    {
      icon: Clock,
      title: "Atendimento 24/7",
      description: "Suporte técnico disponível sempre que você precisar"
    },
    {
      icon: Award,
      title: "Certificação ISO",
      description: "Processos certificados garantindo qualidade e confiabilidade"
    },
    {
      icon: Shield,
      title: "Transparência Total",
      description: "Relatórios detalhados e acesso completo às informações"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Serviços de Energia Solar e Mercado Livre"
        description="Soluções completas em energia renovável e gestão energética: energia por assinatura, mercado livre de energia, gestão de contratos e consultoria energética para todo o Brasil."
        keywords="mercado livre de energia, energia por assinatura, energia solar compartilhada, geração distribuída, lei 14300, autoconsumo remoto, consumidor livre, consumidor especial, comercializadora energia, contrato bilateral energia, gestão contratos energéticos, consultoria mercado livre, consultoria energética empresarial, migração mercado livre, viabilidade energética, diagnóstico energético, análise fatura energia, sazonalização, flexibilidade contratual, garantia física, encargos setoriais, CCEE, ANEEL, PLD, modalidade tarifária, demanda contratada, energia industrial, energia comercial, ROI energia solar, payback solar, broker energia"
        canonical="https://solarien.com.br/servicos"
      />
      <Header />
      <main className="pt-20" style={{ backgroundColor: '#002113' }}>
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs />
        </div>
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/lovable-uploads/939095a5-bbfa-4af3-a5bc-86bbbefab2d2.png" 
              alt="Serviços Solarien Energy" 
              className="w-full h-full object-cover opacity-30"
              loading="lazy"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-white">Nossos</span> <span className="text-gradient">Serviços</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Soluções completas em <strong>energia renovável</strong> e <strong>gestão energética</strong> 
                para residências, empresas e indústrias em todo o Brasil.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-solarien-primary mb-2">100%</div>
                  <div className="text-gray-300">Energia Renovável</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-solarien-primary mb-2">45%</div>
                  <div className="text-gray-300">Economia Máxima</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-solarien-primary mb-2">24/7</div>
                  <div className="text-gray-300">Suporte Técnico</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-green-800/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Soluções <span className="text-gradient">Completas</span>
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Oferecemos uma gama completa de serviços para atender todas as suas necessidades energéticas
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-green-800/30 p-8 rounded-2xl border border-green-700/50 hover:bg-green-800/40 transition-all duration-300">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mb-6`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-solarien-primary flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Como <span className="text-gradient">Funcionamos</span>
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Processo simples e transparente para você começar a economizar na conta de luz
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {process.map((item, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-solarien-primary to-solarien-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-black font-bold text-xl">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-green-800/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Por que Escolher a <span className="text-gradient">Solarien?</span>
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Diferenciais que nos tornam a melhor escolha para sua gestão energética
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-solarien-primary to-solarien-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Compare os <span className="text-gradient">Serviços</span>
                </h2>
                <p className="text-gray-300 text-lg">
                  Veja qual solução é ideal para o seu perfil de consumo
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full bg-green-800/30 rounded-2xl border border-green-700/50">
                  <thead>
                    <tr className="border-b border-green-700/50">
                      <th className="p-6 text-left text-white font-bold">Características</th>
                      <th className="p-6 text-center text-solarien-primary font-bold">Energia por Assinatura</th>
                      <th className="p-6 text-center text-solarien-primary font-bold">Mercado Livre</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-green-700/30">
                      <td className="p-6 text-gray-300">Investimento Inicial</td>
                      <td className="p-6 text-center text-green-400">R$ 0,00</td>
                      <td className="p-6 text-center text-green-400">R$ 0,00</td>
                    </tr>
                    <tr className="border-b border-green-700/30">
                      <td className="p-6 text-gray-300">Economia Máxima</td>
                      <td className="p-6 text-center text-white">Até 25%</td>
                      <td className="p-6 text-center text-white">Até 45%</td>
                    </tr>
                    <tr className="border-b border-green-700/30">
                      <td className="p-6 text-gray-300">Instalação</td>
                      <td className="p-6 text-center text-green-400">Não necessária</td>
                      <td className="p-6 text-center text-green-400">Não necessária</td>
                    </tr>
                    <tr>
                      <td className="p-6 text-gray-300">Ideal para</td>
                      <td className="p-6 text-center text-white">Residências e pequenas empresas</td>
                      <td className="p-6 text-center text-white">Médias e grandes empresas</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-green-800/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Pronto para <span className="text-gradient">Economizar?</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Descubra quanto você pode economizar com nossas soluções em energia renovável. 
                Faça uma simulação gratuita ou fale com nossos especialistas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://painel.solarien.com.br/solarien"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-bold rounded-lg hover:shadow-lg hover:shadow-solarien-primary/25 transition-all duration-300 text-lg"
                >
                  Simular Economia
                </a>
                <a
                  href="/contato"
                  className="px-8 py-4 border-2 border-solarien-primary text-solarien-primary font-bold rounded-lg hover:bg-solarien-primary hover:text-black transition-all duration-300 text-lg"
                >
                  Falar com Especialista
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
