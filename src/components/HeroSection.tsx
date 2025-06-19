
import React from 'react';
import DiscountSimulator from './DiscountSimulator';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Solar farm with wind turbines" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-slate-800/90 to-gray-900/80"></div>
      </div>

      {/* Animated wind turbines effect */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-16 h-16 opacity-30">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 border-2 border-solarien-primary rounded-full animate-spin"></div>
            <div className="absolute top-1/2 left-1/2 w-8 h-1 bg-solarien-primary transform -translate-x-1/2 -translate-y-1/2 rotate-0 animate-spin"></div>
            <div className="absolute top-1/2 left-1/2 w-8 h-1 bg-solarien-primary transform -translate-x-1/2 -translate-y-1/2 rotate-120 animate-spin"></div>
            <div className="absolute top-1/2 left-1/2 w-8 h-1 bg-solarien-primary transform -translate-x-1/2 -translate-y-1/2 rotate-240 animate-spin"></div>
          </div>
        </div>
        <div className="absolute bottom-32 left-16 w-12 h-12 opacity-20">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 border-2 border-solarien-secondary rounded-full animate-spin" style={{animationDirection: 'reverse'}}></div>
            <div className="absolute top-1/2 left-1/2 w-6 h-1 bg-solarien-secondary transform -translate-x-1/2 -translate-y-1/2 rotate-0 animate-spin" style={{animationDirection: 'reverse'}}></div>
            <div className="absolute top-1/2 left-1/2 w-6 h-1 bg-solarien-secondary transform -translate-x-1/2 -translate-y-1/2 rotate-120 animate-spin" style={{animationDirection: 'reverse'}}></div>
            <div className="absolute top-1/2 left-1/2 w-6 h-1 bg-solarien-secondary transform -translate-x-1/2 -translate-y-1/2 rotate-240 animate-spin" style={{animationDirection: 'reverse'}}></div>
          </div>
        </div>
      </div>

      {/* Floating energy particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-3 h-3 bg-solarien-primary rounded-full animate-float opacity-70 shadow-lg shadow-solarien-primary/50"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-solarien-secondary rounded-full animate-float opacity-60" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-solarien-tertiary rounded-full animate-float opacity-80" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-60 left-1/3 w-2 h-2 bg-solarien-primary rounded-full animate-float opacity-90" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-60 right-1/3 w-3 h-3 bg-solarien-secondary rounded-full animate-float opacity-50" style={{animationDelay: '1.5s'}}></div>
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
