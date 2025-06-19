
import React from 'react';
import DiscountSimulator from './DiscountSimulator';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image of solar panels with dark overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Solar farm with panels" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Subtle solar rays effect */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-1 h-32 bg-gradient-to-b from-yellow-400/30 to-transparent rotate-12 animate-pulse"></div>
        <div className="absolute top-20 right-1/3 w-1 h-40 bg-gradient-to-b from-yellow-300/20 to-transparent -rotate-12 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-32 left-1/2 w-1 h-36 bg-gradient-to-b from-yellow-500/25 to-transparent rotate-6 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-16 right-1/4 w-1 h-28 bg-gradient-to-b from-yellow-400/35 to-transparent -rotate-8 animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-solarien-primary via-white to-solarien-secondary bg-clip-text text-transparent">
              Energia Solar
            </span>
            <br />
            <span className="text-white">do Futuro</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Gestão de contratos e consultoria energética com
            <span className="text-solarien-primary font-semibold"> migração gratuita</span> para energia por assinatura e mercado livre
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <DiscountSimulator>
              <button className="px-8 py-4 bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-bold rounded-xl hover:shadow-2xl hover:shadow-solarien-primary/50 transition-all duration-300 transform hover:scale-105 animate-energy-pulse">
                Simular Economia
              </button>
            </DiscountSimulator>
            <button className="px-8 py-4 border-2 border-solarien-primary text-solarien-primary hover:bg-solarien-primary hover:text-black font-bold rounded-xl transition-all duration-300 transform hover:scale-105">
              Saiba Mais
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-solarien-primary/30 shadow-2xl">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-solarien-primary mb-2">45%</div>
              <div className="text-gray-300 text-sm">Economia Garantida</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-solarien-secondary mb-2">24h</div>
              <div className="text-gray-300 text-sm">Suporte Disponível</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-solarien-tertiary mb-2">100+</div>
              <div className="text-gray-300 text-sm">Cidades Atendidas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-solarien-primary mb-2">95%</div>
              <div className="text-gray-300 text-sm">Taxa de Migração</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
