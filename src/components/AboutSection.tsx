
import React from 'react';
import { Users, Target, Eye } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Clean energy landscape" 
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-solarien-primary/5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Sobre</span> <span className="text-gray-800">Nós</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Mudando a forma de consumo de energia, oferecendo soluções inovadoras e econômicas para todos os perfis de clientes, construindo um futuro mais sustentável.
          </p>
        </div>

        {/* Company Presentation with Futuristic Building Mockup */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Square Building Mockup */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src="/lovable-uploads/033ede5a-9cc5-494b-ba09-435877b6a870.png" 
                alt="Fachada futurista da Solarien Energy" 
                className="w-full h-full object-cover"
              />
              
              {/* Dark overlay for logo integration */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40"></div>
              
              {/* Integrated Logo - appears as part of the building facade */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/50">
                  <img 
                    src="/lovable-uploads/7035cd87-6220-43bb-b629-649ce81e59d8.png" 
                    alt="Solarien Energy" 
                    className="h-20 md:h-24 w-auto mx-auto"
                  />
                </div>
              </div>
              
              {/* Glass reflection effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-solarien-primary/20 to-solarien-secondary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-solarien-secondary/20 to-solarien-tertiary/20 rounded-full blur-xl"></div>
          </div>

          {/* Right side - Company Description */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-solarien-primary/10 to-solarien-secondary/10 border border-solarien-primary/20 rounded-3xl p-8 shadow-xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-solarien-primary mb-4">
                Quem Somos
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Somos uma empresa comprometida com a sustentabilidade e a economia, conectando pessoas e empresas ao futuro da energia limpa e acessível.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Com tecnologia de ponta e atendimento personalizado, garantimos resultados que impactam positivamente o planeta e sua conta de luz.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white/50 rounded-xl border border-solarien-primary/10">
                <div className="w-12 h-12 bg-gradient-to-r from-solarien-primary to-solarien-secondary rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Atendimento</h4>
                  <p className="text-sm text-gray-600">Personalizado</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-white/50 rounded-xl border border-solarien-secondary/10">
                <div className="w-12 h-12 bg-gradient-to-r from-solarien-secondary to-solarien-tertiary rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Resultados</h4>
                  <p className="text-sm text-gray-600">Garantidos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-solarien-primary/5 to-solarien-secondary/5 border border-solarien-primary/20 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-solarien-primary to-solarien-secondary rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-solarien-primary">Missão</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Nossa missão é democratizar o acesso à energia limpa, proporcionando soluções inovadoras e eficientes que promovem economia e sustentabilidade para nossos clientes e o meio ambiente.
            </p>
          </div>

          <div className="bg-gradient-to-br from-solarien-secondary/5 to-solarien-tertiary/5 border border-solarien-secondary/20 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-solarien-secondary to-solarien-tertiary rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-solarien-secondary">Visão</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Ser referência global em soluções energéticas inteligentes, liderando a transição para um modelo sustentável e transformando o mercado de energia com inovação e excelência.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
