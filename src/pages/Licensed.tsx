
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Award, Shield, CheckCircle, Users, TrendingUp, Zap } from 'lucide-react';

const Licensed = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Alta Rentabilidade", 
      description: "Ganhos atrativos com modelo de negócio comprovado e crescimento sustentável"
    },
    {
      icon: Shield,
      title: "Suporte Completo",
      description: "Treinamento, materiais de marketing e suporte técnico especializado"
    },
    {
      icon: Users,
      title: "Mercado em Expansão",
      description: "Setor de energia renovável em constante crescimento no Brasil"
    },
    {
      icon: Zap,
      title: "Tecnologia Avançada",
      description: "Plataforma digital completa para gestão de clientes e contratos"
    }
  ];

  const requirements = [
    "Experiência em vendas ou relacionamento comercial",
    "Disponibilidade para dedicação ao negócio", 
    "Investimento inicial acessível",
    "Compromisso com qualidade e excelência no atendimento",
    "Interesse genuíno em sustentabilidade e energia renovável"
  ];

  const process = [
    {
      step: "1",
      title: "Cadastro e Avaliação",
      description: "Preencha nosso formulário e participe do processo de seleção"
    },
    {
      step: "2", 
      title: "Treinamento Inicial",
      description: "Capacitação completa sobre nossos produtos e metodologias"
    },
    {
      step: "3",
      title: "Lançamento",
      description: "Início das atividades com suporte total da nossa equipe"
    },
    {
      step: "4",
      title: "Crescimento",
      description: "Desenvolvimento contínuo com metas e incentivos progressivos"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20" style={{ backgroundColor: '#002113' }}>
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/lovable-uploads/83d68f1c-b8a9-441e-bd03-c276d396d3f9.png" 
              alt="Licenciado Solarien Energy" 
              className="w-full h-full object-cover opacity-30"
              loading="lazy"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Award className="w-12 h-12 text-solarien-primary" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  <span className="text-white">Seja um</span> <span className="text-gradient">Licenciado</span>
                </h1>
              </div>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transforme sua carreira e faça parte da <strong>revolução da energia limpa</strong> no Brasil. 
                Torne-se um <strong>licenciado Solarien</strong> e tenha acesso a um modelo de negócio 
                inovador e rentável.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://painel.solarien.com.br/solarien"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-bold rounded-lg hover:shadow-lg hover:shadow-solarien-primary/25 transition-all duration-300 text-lg"
                >
                  Quero Ser Licenciado
                </a>
                <a
                  href="/contato"
                  className="px-8 py-4 border-2 border-solarien-primary text-solarien-primary font-bold rounded-lg hover:bg-solarien-primary hover:text-black transition-all duration-300 text-lg"
                >
                  Falar com Consultor
                </a>
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
                  Vantagens de ser um <span className="text-gradient">Licenciado Solarien</span>
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Descubra as oportunidades únicas que oferecemos para nossos parceiros licenciados
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-green-800/30 p-6 rounded-2xl border border-green-700/50 text-center group hover:bg-green-800/40 transition-all duration-300">
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

        {/* Requirements Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Requisitos para ser <span className="text-gradient">Licenciado</span>
                  </h2>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    Buscamos parceiros comprometidos com a excelência e interessados em 
                    fazer parte da transformação energética do Brasil.
                  </p>
                  <div className="space-y-4">
                    {requirements.map((requirement, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-solarien-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{requirement}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="/lovable-uploads/dd91c0ca-f624-4e08-93dc-300635b098c4.png" 
                    alt="Requisitos Licenciado Solarien" 
                    className="rounded-2xl shadow-2xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-green-800/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Como se Tornar um <span className="text-gradient">Licenciado</span>
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Processo simples e estruturado para você começar sua jornada como licenciado Solarien
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

        {/* Success Stories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Histórias de <span className="text-gradient">Sucesso</span>
                </h2>
                <p className="text-gray-300 text-lg">
                  Conheça alguns de nossos licenciados que transformaram suas carreiras
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-green-800/30 p-6 rounded-2xl border border-green-700/50">
                  <div className="text-center mb-4">
                    <img 
                      src="/lovable-uploads/e3d9a3c1-73b1-4698-8ee5-ac655f832465.png" 
                      alt="Carlos Silveira" 
                      className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-white font-bold text-lg">Carlos Silveira</h3>
                    <p className="text-solarien-primary text-sm">Licenciado Autorizado</p>
                  </div>
                  <p className="text-gray-300 text-center italic">
                    "A Solarien mudou minha vida profissional, consegui triplicar minha renda e ajudar dezenas de famílias a economizar energia."
                  </p>
                </div>
                <div className="bg-green-800/30 p-6 rounded-2xl border border-green-700/50">
                  <div className="text-center mb-4">
                    <img 
                      src="/lovable-uploads/5e176f78-4742-4f8b-8c76-a8b9d2c956f4.png" 
                      alt="Mayra Santos" 
                      className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-white font-bold text-lg">Mayra Santos</h3>
                    <p className="text-solarien-primary text-sm">Licenciado Autorizado</p>
                  </div>
                  <p className="text-gray-300 text-center italic">
                    "O suporte da Solarien é excepcional. Desde o treinamento até o dia a dia, 
                    sempre posso contar com uma equipe dedicada e profissional."
                  </p>
                </div>
                <div className="bg-green-800/30 p-6 rounded-2xl border border-green-700/50">
                  <div className="text-center mb-4">
                    <img 
                      src="/lovable-uploads/610577b6-6a23-483b-8218-a84bf11031dd.png" 
                      alt="Jonathan Oliveira" 
                      className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-white font-bold text-lg">Jonathan Oliveira</h3>
                    <p className="text-solarien-primary text-sm">Licenciado Autorizado</p>
                  </div>
                  <p className="text-gray-300 text-center italic">
                    "Trabalhar com energia renovável me dá propósito. Além dos ganhos financeiros, 
                    contribuo para um mundo mais sustentável."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-green-800/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Pronto para <span className="text-gradient">Começar?</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Não perca a oportunidade de fazer parte da maior revolução energética do Brasil. 
                Torne-se um licenciado Solarien hoje mesmo!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://painel.solarien.com.br/solarien"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-bold rounded-lg hover:shadow-lg hover:shadow-solarien-primary/25 transition-all duration-300 text-lg"
                >
                  Cadastrar Agora
                </a>
                <a
                  href="https://wa.me/5511997361698"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-solarien-primary text-solarien-primary font-bold rounded-lg hover:bg-solarien-primary hover:text-black transition-all duration-300 text-lg"
                >
                  WhatsApp
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

export default Licensed;
