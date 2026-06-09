
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SolarPlantsCarousel from '../components/SolarPlantsCarousel';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { Sun, MapPin, Zap, TreePine, Factory, Users } from 'lucide-react';

const SolarPlants = () => {
  const stats = [
    {
      icon: Factory,
      number: "2000+",
      label: "Usinas Parceiras",
      description: "Usinas solares distribuídas por todo o Brasil"
    },
    {
      icon: Zap,
      number: "5 GW",
      label: "Capacidade Total",
      description: "Potência instalada em energia renovável"
    },
    {
      icon: Users,
      number: "1M+",
      label: "Famílias Atendidas",
      description: "Residências que recebem energia limpa"
    },
    {
      icon: TreePine,
      number: "2.5M",
      label: "Toneladas de CO₂",
      description: "Evitadas anualmente com nossa energia"
    }
  ];

  const regions = [
    {
      region: "Nordeste",
      states: ["Bahia", "Ceará", "Pernambuco", "Rio Grande do Norte", "Paraíba"],
      capacity: "2.8 GW",
      plants: 850,
      highlight: "Maior concentração de usinas devido ao excelente índice de irradiação solar"
    },
    {
      region: "Sudeste",
      states: ["São Paulo", "Minas Gerais", "Rio de Janeiro", "Espírito Santo"],
      capacity: "1.5 GW",
      plants: 650,
      highlight: "Região com maior demanda energética e importantes projetos industriais"
    },
    {
      region: "Centro-Oeste",
      states: ["Mato Grosso", "Mato Grosso do Sul", "Goiás", "Distrito Federal"],
      capacity: "450 MW",
      plants: 320,
      highlight: "Crescimento acelerado com foco no agronegócio sustentável"
    },
    {
      region: "Sul",
      states: ["Rio Grande do Sul", "Santa Catarina", "Paraná"],
      capacity: "180 MW",
      plants: 150,
      highlight: "Integração com outras fontes renováveis como eólica e hidrelétrica"
    },
    {
      region: "Norte",
      states: ["Tocantins", "Pará", "Rondônia", "Acre"],
      capacity: "70 MW",
      plants: 30,
      highlight: "Região em expansão com grande potencial de desenvolvimento"
    }
  ];

  const technologies = [
    {
      title: "Painéis Fotovoltaicos",
      description: "Tecnologia de silício monocristalino e policristalino de alta eficiência",
      efficiency: "20-22%"
    },
    {
      title: "Sistemas de Rastreamento",
      description: "Seguidores solares que acompanham o movimento do sol",
      efficiency: "+15%"
    },
    {
      title: "Inversores Inteligentes",
      description: "Conversão DC/AC com monitoramento em tempo real",
      efficiency: "98%"
    },
    {
      title: "Armazenamento",
      description: "Sistemas de baterias para fornecimento contínuo",
      efficiency: "95%"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Usinas Solares Parceiras - Rede Nacional"
        description="Conheça a maior rede de usinas solares do Brasil. Mais de 2000 usinas parceiras gerando energia limpa e renovável em todo território nacional com tecnologia de ponta."
        keywords="usinas solares parceiras, fazenda solar Brasil, geração distribuída fotovoltaica, usina fotovoltaica licenciada, mini geração solar, micro geração solar, usina solar compensação SCEE, parque solar, planta solar comercial, autoconsumo remoto, créditos energia distribuídos, energia limpa rede nacional"
        canonical="https://solarien.com.br/usinas"
      />
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs />
        </div>
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#002113' }}>
          <div className="absolute inset-0">
            <img 
              src="/lovable-uploads/ffac10ad-534c-488d-9cc2-e63ccb047edc.png" 
              alt="Usinas Solares Solarien" 
              className="w-full h-full object-cover opacity-40"
              loading="lazy"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Sun className="w-12 h-12 text-solarien-primary animate-spin-slow" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  <span className="text-white">Nossas</span> <span className="text-gradient">Usinas</span>
                </h1>
              </div>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Conheça a maior rede de <strong>usinas solares</strong> do Brasil. 
                Mais de <strong>2000 usinas parceiras</strong> gerando energia limpa e renovável 
                para milhões de brasileiros.
              </p>
            </div>
          </div>
        </section>

        {/* Carousel Section */}
        <SolarPlantsCarousel />

        {/* Statistics Section */}
        <section className="py-20" style={{ backgroundColor: '#002113' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Números que <span className="text-gradient">Impressionam</span>
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Nossa rede de usinas solares representa um dos maiores investimentos 
                  em energia renovável do país
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-green-800/30 p-6 rounded-2xl border border-green-700/50 text-center group hover:bg-green-800/40 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-solarien-primary to-solarien-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-3xl font-bold text-solarien-primary mb-2">{stat.number}</div>
                    <div className="text-xl font-semibold text-white mb-2">{stat.label}</div>
                    <p className="text-gray-300 text-sm leading-relaxed">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Regional Distribution */}
        <section className="py-20 bg-green-800/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Presença <span className="text-gradient">Nacional</span>
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Nossas usinas estão estrategicamente distribuídas por todas as regiões do Brasil, 
                  aproveitando o melhor potencial solar de cada localidade
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regions.map((region, index) => (
                  <div key={index} className="bg-green-800/30 p-6 rounded-2xl border border-green-700/50 hover:bg-green-800/40 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <MapPin className="w-6 h-6 text-solarien-primary" />
                      <h3 className="text-xl font-bold text-white">{region.region}</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-2xl font-bold text-solarien-primary">{region.capacity}</div>
                        <div className="text-sm text-gray-300">Capacidade</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-solarien-primary">{region.plants}</div>
                        <div className="text-sm text-gray-300">Usinas</div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Estados Atendidos:</h4>
                      <div className="flex flex-wrap gap-1">
                        {region.states.map((state, idx) => (
                          <span key={idx} className="bg-solarien-primary/20 text-solarien-primary px-2 py-1 rounded text-xs">
                            {state}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm italic">{region.highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-20" style={{ backgroundColor: '#002113' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Tecnologia de <span className="text-gradient">Ponta</span>
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Utilizamos as mais avançadas tecnologias em energia fotovoltaica 
                  para garantir máxima eficiência e confiabilidade
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {technologies.map((tech, index) => (
                  <div key={index} className="bg-green-800/30 p-6 rounded-2xl border border-green-700/50 hover:bg-green-800/40 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{tech.title}</h3>
                      <span className="bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black px-3 py-1 rounded-full text-sm font-bold">
                        {tech.efficiency}
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Environmental Impact */}
        <section className="py-20 bg-green-800/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Impacto <span className="text-gradient">Ambiental</span>
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Nossa rede de usinas solares contribui significativamente para um futuro mais sustentável
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TreePine className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">12 Milhões</h3>
                  <p className="text-solarien-primary font-semibold mb-2">Árvores Preservadas</p>
                  <p className="text-gray-300 text-sm">Equivalente ao CO₂ evitado anualmente</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">8 TWh</h3>
                  <p className="text-solarien-primary font-semibold mb-2">Energia Limpa Gerada</p>
                  <p className="text-gray-300 text-sm">Anualmente por nossas usinas</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sun className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">99.9%</h3>
                  <p className="text-solarien-primary font-semibold mb-2">Disponibilidade</p>
                  <p className="text-gray-300 text-sm">Confiabilidade no fornecimento</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20" style={{ backgroundColor: '#002113' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Conecte-se à <span className="text-gradient">Energia do Futuro</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Faça parte da maior rede de energia solar do Brasil e contribua 
                para um futuro mais sustentável enquanto economiza na conta de luz
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
                  href="/contato"
                  className="px-8 py-4 border-2 border-solarien-primary text-solarien-primary font-bold rounded-lg hover:bg-solarien-primary hover:text-black transition-all duration-300 text-lg"
                >
                  Saiba Mais
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

export default SolarPlants;
