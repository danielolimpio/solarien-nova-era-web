
import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Solar panels on roof" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-solarien-primary/10"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-solarien-primary rounded-full animate-float opacity-70"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-solarien-secondary rounded-full animate-float opacity-50" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-solarien-tertiary rounded-full animate-float opacity-60" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-solarien-primary rounded-full animate-float opacity-80" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-60 right-1/3 w-2 h-2 bg-solarien-secondary rounded-full animate-float opacity-40" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Energia Solar</span>
            <br />
            <span className="text-gray-800">do Futuro</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Gestão de contratos e consultoria energética com
            <span className="text-solarien-primary font-semibold"> migração gratuita</span> para energia por assinatura e mercado livre
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-bold rounded-xl hover:shadow-2xl hover:shadow-solarien-primary/30 transition-all duration-300 transform hover:scale-105">
              Simular Economia
            </button>
            <button className="px-8 py-4 border-2 border-solarien-primary text-solarien-primary hover:bg-solarien-primary hover:text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105">
              Saiba Mais
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-solarien-primary mb-2">95%</div>
              <div className="text-gray-600 text-sm">Economia Garantida</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-solarien-secondary mb-2">24h</div>
              <div className="text-gray-600 text-sm">Suporte Disponível</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-solarien-tertiary mb-2">100+</div>
              <div className="text-gray-600 text-sm">Cidades Atendidas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-solarien-primary mb-2">0%</div>
              <div className="text-gray-600 text-sm">Taxa de Migração</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
