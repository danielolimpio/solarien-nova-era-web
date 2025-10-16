import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { Sun, Shield, Users, Award, Target, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Sun,
      title: "Sustentabilidade", 
      description: "Comprometidos com um futuro mais verde e sustentável através da energia solar"
    },
    {
      icon: Shield,
      title: "Confiabilidade",
      description: "Transparência total em nossos processos e relacionamento com clientes"
    },
    {
      icon: Users,
      title: "Foco no Cliente",
      description: "Cada cliente é único e merece uma solução personalizada"
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Buscamos sempre a excelência em nossos serviços e resultados"
    }
  ];

  const timeline = [
    {
      year: "2023",
      title: "Ínicio da Jornada",
      description: "Iniciamos no mercado de energia limpa com os primeiros contratos"
    },
    {
      year: "2024", 
      title: "Expansão Nacional",
      description: "Expandimos nossa operação em rede para todo o território nacional"
    },
    {
      year: "2025",
      title: "Operação Própria",
      description: "Nos consolidamos como referência em gestão de contratos energéticos"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Sobre a Solarien Energy"
        description="Especialistas em gestão de contratos energéticos e consultoria em energia, oferecendo soluções completas em energia por assinatura e mercado livre de energia para todo o Brasil."
        keywords="solarien energy, gestão energética, consultoria energia, energia renovável brasil, história solarien"
        canonical="https://solarien.com.br/sobre"
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
              src="/lovable-uploads/00c148a8-b0fa-4818-a6ee-85e977a4c451.png" 
              alt="Energia Solar Solarien" 
              className="w-full h-full object-cover opacity-30"
              loading="lazy"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-gradient">Sobre a</span> <span className="text-white">Solarien</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Somos especialistas em <strong>gestão de contratos energéticos</strong> e 
                <strong> consultoria em energia</strong>, oferecendo soluções completas em 
                energia por assinatura e mercado livre de energia para todo o Brasil.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-solarien-primary mb-2">3+</div>
                  <div className="text-gray-300">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-solarien-primary mb-2">2000+</div>
                  <div className="text-gray-300">Usinas Parceiras</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-solarien-primary mb-2">100%</div>
                  <div className="text-gray-300">Brasil Atendido</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-green-800/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Nossa <span className="text-gradient">Missão</span>
                  </h2>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    Democratizar o acesso à energia limpa e renovável no Brasil, oferecendo 
                    soluções inovadoras que reduzem custos e promovem a sustentabilidade.
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <Target className="w-8 h-8 text-solarien-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-semibold mb-2">Visão</h3>
                      <p className="text-gray-300">
                        Ser a principal referência em gestão energética sustentável no Brasil
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Heart className="w-8 h-8 text-solarien-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-semibold mb-2">Propósito</h3>
                      <p className="text-gray-300">
                        Transformar a forma como as pessoas consomem energia, 
                        tornando-a mais sustentável e acessível
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="/lovable-uploads/01cf340a-bb1b-43df-b89a-91684583fe6a.png" 
                    alt="Missão Solarien Energy - 100% Sustentável" 
                    className="rounded-2xl shadow-2xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Nossos <span className="text-gradient">Valores</span>
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Os princípios que norteiam nossa atuação e nosso relacionamento com clientes, 
                  parceiros e colaboradores
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-solarien-primary to-solarien-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-green-800/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Nossa <span className="text-gradient">Trajetória</span>
                </h2>
                <p className="text-gray-300 text-lg">
                  Conheça os principais marcos da nossa jornada rumo à sustentabilidade energética
                </p>
              </div>
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-solarien-primary to-solarien-secondary rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-sm">{item.year}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Faça Parte da <span className="text-gradient">Revolução Energética</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Junte-se a milhares de brasileiros que já descobriram como economizar 
                na conta de luz com energia limpa e renovável
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://painel.solarien.com.br/solarien"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-bold rounded-lg hover:shadow-lg hover:shadow-solarien-primary/25 transition-all duration-300 text-lg"
                >
                  Começar Agora
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

export default About;
