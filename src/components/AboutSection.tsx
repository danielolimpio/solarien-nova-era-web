
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

        {/* Main Description Card */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-solarien-primary/10 to-solarien-secondary/10 border border-solarien-primary/20 rounded-3xl p-8 md:p-12 shadow-xl backdrop-blur-sm">
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-5xl mx-auto">
              Somos uma empresa comprometida com a sustentabilidade e a economia, conectando pessoas e empresas ao futuro da energia limpa e acessível. Com tecnologia de ponta e atendimento personalizado, garantimos resultados que impactam positivamente o planeta e sua conta de luz.
            </p>
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
