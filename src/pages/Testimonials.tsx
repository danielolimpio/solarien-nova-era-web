
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
      company: "Silva & Associados Confecções",
      location: "São Paulo, SP",
      image: "/lovable-uploads/0df96018-53de-4236-9144-decea5df4962.png",
      testimonial: "Nossa indústria de confecções tinha custos elevados com energia devido às máquinas de costura e equipamentos de produção. A Solarien conseguiu reduzir nossos gastos em 15% com a energia por assinatura. O processo foi simples e transparente, com acompanhamento completo da equipe. Agora conseguimos ser mais competitivos no mercado têxtil.",
      savings: "15%",
      service: "Energia por Assinatura"
    },
    {
      id: 2,
      name: "Ana Paula Rodrigues",
      position: "Proprietária",
      company: "Padaria Pão Dourado",
      location: "Belo Horizonte, MG",
      image: "/lovable-uploads/d7e167c0-e56b-4126-9008-dc77cba89c01.png",
      testimonial: "Nossa padaria tinha uma conta de energia muito alta devido aos fornos e equipamentos. Com a energia por assinatura da Solarien, economizamos R$ 600 por mês! O atendimento foi excepcional, sem burocracia e com total transparência. O suporte pós-migração é impecável, sempre disponíveis para esclarecer dúvidas.",
      savings: "23%",
      service: "Energia por Assinatura"
    },
    {
      id: 3,
      name: "Roberto Mendes",
      position: "Diretor Comercial",
      company: "Metalúrgica Forte Ltda",
      location: "Campinas, SP",
      image: "/lovable-uploads/5172e657-5908-42ac-a8ce-de3b2ffa4b91.png",
      testimonial: "Como indústria metalúrgica, nosso consumo energético é altíssimo. A Solarien conseguiu uma negociação no mercado livre que nos trouxe uma economia mensal de R$ 12 mil! O processo foi rápido, em apenas 45 dias estávamos com a nova modalidade ativa. A expertise da equipe fez toda diferença.",
      savings: "28%",
      service: "Mercado Livre"
    },
    {
      id: 4,
      name: "Mariana Costa",
      position: "Administradora",
      company: "Clínica Médica Vida Plena",
      location: "Fortaleza, CE",
      image: "/lovable-uploads/37671407-af35-48b0-9839-0da200f8681b.png",
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
      image: "/lovable-uploads/b4d43014-0588-4c31-a322-9ef6f3cdae53.png",
      testimonial: "Com 3 unidades de supermercado, nossa conta de energia era um dos maiores custos operacionais. A energia por assinatura da Solarien reduziu nossos gastos em 25%! A equipe é muito atenciosa, sempre nos mantendo informados sobre o processo. Hoje indicamos para outros comerciantes da região.",
      savings: "25%",
      service: "Energia por Assinatura"
    },
    {
      id: 6,
      name: "Fernanda Oliveira",
      position: "Gerente Geral",
      company: "Hotel Recanto Verde",
      location: "Gramado, RS",
      image: "/lovable-uploads/51406d1c-99e8-4b60-a2ea-6b33ed130fb4.png",
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
      image: "/lovable-uploads/a6e126ef-b2da-47cd-915d-36d98522f185.png",
      testimonial: "Com ar condicionado, esteiras e equipamentos funcionando o dia todo, nossa conta de energia era pesada. A equipe da Solarien foi muito profissional, conseguimos 22% de economia com a energia por assinatura. O processo foi transparente e rápido, sem complicações burocráticas.",
      savings: "22%",
      service: "Energia por Assinatura"
    },
    {
      id: 8,
      name: "Luciana Ferreira",
      position: "Diretora",
      company: "Escola Criança Feliz",
      location: "Recife, PE",
      image: "/lovable-uploads/2c448ca4-ad05-4092-bc49-f6f2ca22b61b.png",
      testimonial: "Como escola privada, precisávamos reduzir custos para manter mensalidades acessíveis. A Solarien nos ajudou a economizar 15% na conta de energia através da energia por assinatura. O atendimento foi humanizado, entenderam nossas necessidades educacionais. Processo simples e resultado excelente!",
      savings: "15%",
      service: "Energia por Assinatura"
    },
    {
      id: 9,
      name: "Ricardo Almeida",
      position: "Proprietário",
      company: "Cafeteria Grão Dourado",
      location: "Salvador, BA",
      image: "/lovable-uploads/5168e505-2e4e-46a1-b602-41a04d13c708.png",
      testimonial: "Nossa cafeteria possui equipamentos que demandam muita energia, como máquinas de café expresso, geladeiras e ar condicionado. A Solarien conseguiu uma economia de 24% com energia por assinatura. O que mais me impressionou foi a transparência da equipe, sem promessas irreais. Cumpriram exatamente o que prometeram, com suporte contínuo.",
      savings: "24%",
      service: "Energia por Assinatura"
    },
    {
      id: 10,
      name: "Patrícia Gomes",
      position: "Administradora",
      company: "Condomínio Residencial Jardins",
      location: "Curitiba, PR",
      image: "/lovable-uploads/7fdd1da8-17da-43a3-bbe6-55b91b05a25c.png",
      testimonial: "Administrar um condomínio com 200 apartamentos é desafiador, especialmente com os custos de energia das áreas comuns. A Solarien conseguiu reduzir nossa conta em 34% através do mercado livre. A transparência no processo e o suporte constante fizeram toda diferença. Recomendo sem hesitar!",
      savings: "34%",
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
      <section className="py-32 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/1caf31f7-cfd2-4c3f-8dea-efc4c62b37b1.png"
            alt="Economia de energia - lâmpada com símbolo de dólar"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
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
                        <Star key={i} className="w-6 h-6 text-[#02ff91] fill-current" />
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
                    className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-[#02ff91]"
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
          <a
            href="https://wa.me/5511997361698"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-bold rounded-lg hover:shadow-lg hover:shadow-solarien-primary/25 transition-all duration-300 text-lg"
          >
            Solicite Sua Análise Gratuita
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Testimonials;
