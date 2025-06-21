
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Carlos Eduardo Silva",
      position: "CEO",
      company: "Silva & Associados Contabilidade",
      location: "São Paulo, SP",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      testimonial: "A Solarien foi fundamental para reduzir os custos do nosso escritório. Conseguimos uma economia de 35% na conta de energia e o processo foi surpreendentemente simples. A equipe nos acompanhou em cada etapa, desde a análise inicial até a migração completa. Recomendo para qualquer empresário que busca reduzir custos operacionais.",
      savings: "35%",
      service: "Mercado Livre"
    },
    {
      id: 2,
      name: "Ana Paula Rodrigues",
      position: "Proprietária",
      company: "Padaria Pão Dourado",
      location: "Belo Horizonte, MG",
      image: "https://images.unsplash.com/photo-1494790108755-2616c95107e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      testimonial: "Nossa padaria tinha uma conta de energia muito alta devido aos fornos e equipamentos. Com a energia por assinatura da Solarien, economizamos R$ 800 por mês! O atendimento foi excepcional, sem burocracia e com total transparência. O suporte pós-migração é impecável, sempre disponíveis para esclarecer dúvidas.",
      savings: "42%",
      service: "Energia por Assinatura"
    },
    {
      id: 3,
      name: "Roberto Mendes",
      position: "Diretor Comercial",
      company: "Metalúrgica Forte Ltda",
      location: "Campinas, SP",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      testimonial: "Como indústria metalúrgica, nosso consumo energético é altíssimo. A Solarien conseguiu uma negociação no mercado livre que nos trouxe uma economia mensal de R$ 15 mil! O processo foi rápido, em apenas 45 dias estávamos com a nova modalidade ativa. A expertise da equipe fez toda a diferença.",
      savings: "28%",
      service: "Mercado Livre"
    },
    {
      id: 4,
      name: "Mariana Costa",
      position: "Administradora",
      company: "Clínica Médica Vida Plena",
      location: "Fortaleza, CE",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      testimonial: "Nossa clínica tinha equipamentos que consomem muita energia. A Solarien analisou nosso perfil e nos colocou no mercado livre com uma economia incrível de 31%. O que mais me impressionou foi a agilidade e o acompanhamento constante. Zero burocracia, tudo online e muito profissional.",
      savings: "31%",
      service: "Mercado Livre"
    },
    {
      id: 5,
      name: "José Antonio Pereira",
      position: "Proprietário",
      company: "Supermercado Economia",
      location: "Porto Alegre, RS",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      testimonial: "Com 3 unidades de supermercado, nossa conta de energia era um dos maiores custos operacionais. A energia por assinatura da Solarien reduziu nossos gastos em 38%! A equipe é muito atenciosa, sempre nos mantendo informados sobre o processo. Hoje indicamos para outros comerciantes da região.",
      savings: "38%",
      service: "Energia por Assinatura"
    },
    {
      id: 6,
      name: "Fernanda Oliveira",
      position: "Gerente Geral",
      company: "Hotel Recanto Verde",
      location: "Gramado, RS",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      testimonial: "Nosso hotel tinha custos altíssimos com energia, especialmente na alta temporada. A Solarien conseguiu uma economia de 33% através do mercado livre. O suporte foi excepcional, nos explicaram todos os detalhes e acompanharam todo o processo. Agora podemos investir mais na experiência dos nossos hóspedes.",
      savings: "33%",
      service: "Mercado Livre"
    },
    {
      id: 7,
      name: "Paulo Henrique Santos",
      position: "Sócio-Proprietário",
      company: "Academia Fitness Pro",
      location: "Brasília, DF",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      testimonial: "Com ar condicionado, esteiras e equipamentos funcionando o dia todo, nossa conta de energia era pesada. A equipe da Solarien foi muito profissional, conseguimos 29% de economia com a energia por assinatura. O processo foi transparente e rápido, sem complicações burocráticas.",
      savings: "29%",
      service: "Energia por Assinatura"
    },
    {
      id: 8,
      name: "Luciana Ferreira",
      position: "Diretora",
      company: "Escola Criança Feliz",
      location: "Recife, PE",
      image: "https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      testimonial: "Como escola privada, precisávamos reduzir custos para manter mensalidades acessíveis. A Solarien nos ajudou a economizar 36% na conta de energia através do mercado livre. O atendimento foi humanizado, entenderam nossas necessidades educacionais. Processo simples e resultado excelente!",
      savings: "36%",
      service: "Mercado Livre"
    },
    {
      id: 9,
      name: "Ricardo Almeida",
      position: "Proprietário",
      company: "Oficina Almeida Motors",
      location: "Salvador, BA",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      testimonial: "Nossa oficina tem equipamentos pesados que consomem muita energia. A Solarien conseguiu uma economia de 32% com energia por assinatura. O que mais me chamou atenção foi a honestidade da equipe, sem promessas irreais. Cumpriram exatamente o que prometeram, com suporte contínuo.",
      savings: "32%",
      service: "Energia por Assinatura"
    },
    {
      id: 10,
      name: "Patrícia Gomes",
      position: "Administradora",
      company: "Condomínio Residencial Jardins",
      location: "Curitiba, PR",
      image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      testimonial: "Administrar um condomínio com 200 apartamentos é desafiador, especialmente com os custos de energia das áreas comuns. A Solarien conseguiu reduzir nossa conta em 40% através do mercado livre. A transparência no processo e o suporte constante fizeram toda diferença. Recomendo sem hesitar!",
      savings: "40%",
      service: "Mercado Livre"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Clientes satisfeitos"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Depoimentos</span> <span className="text-white">dos Nossos Clientes</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Conheça as histórias de sucesso de empresários que reduziram significativamente seus custos com energia
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-solarien-primary to-solarien-secondary"></div>
              
              <div className="p-8 md:p-12">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  {/* Client Photo and Info */}
                  <div className="lg:w-1/3 text-center">
                    <div className="relative mb-6">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                      />
                      <div className="absolute -top-2 -right-2 bg-solarien-primary rounded-full p-2">
                        <Quote className="w-6 h-6 text-black" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-solarien-primary font-semibold mb-1">
                      {testimonials[currentIndex].position}
                    </p>
                    <p className="text-gray-600 mb-2">
                      {testimonials[currentIndex].company}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonials[currentIndex].location}
                    </p>
                    
                    <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-solarien-primary/10 rounded-xl">
                      <div className="text-3xl font-bold text-solarien-primary mb-1">
                        {testimonials[currentIndex].savings}
                      </div>
                      <div className="text-sm text-gray-600">de economia</div>
                      <div className="text-xs text-gray-500 mt-1">
                        {testimonials[currentIndex].service}
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="lg:w-2/3">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed italic mb-6">
                      "{testimonials[currentIndex].testimonial}"
                    </blockquote>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-8">
                  <button
                    onClick={prevTestimonial}
                    className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Anterior
                  </button>

                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentIndex 
                            ? 'bg-solarien-primary' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextTestimonial}
                    className="flex items-center gap-2 px-6 py-3 bg-solarien-primary hover:bg-solarien-primary/90 text-black rounded-lg transition-colors"
                  >
                    Próximo
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Seja o Próximo a</span> <span className="text-gradient">Economizar</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de empresários que já reduziram significativamente seus custos com energia
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-bold rounded-lg hover:shadow-lg hover:shadow-solarien-primary/25 transition-all duration-300 text-lg">
            Solicite Sua Análise Gratuita
          </button>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Testimonials;
