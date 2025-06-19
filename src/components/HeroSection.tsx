
import React from 'react';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with solar panels */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Solar panels background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Subtle sun rays effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-radial from-solarien-primary/20 via-solarien-primary/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-radial from-solarien-secondary/15 via-solarien-secondary/8 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-gradient-radial from-solarien-primary/10 via-solarien-primary/5 to-transparent rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 pt-32 md:pt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
            A <span className="text-gradient">Energia Solar</span><br />
            do Futuro
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Gestão de contratos e consultoria energética com <span className="text-solarien-primary font-semibold">migração gratuita</span> para energia por assinatura e mercado livre
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="w-full sm:w-auto bg-solarien-primary hover:bg-solarien-secondary text-black font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              Simular Economia
            </Button>
            <Button variant="outline" className="w-full sm:w-auto border-2 border-solarien-primary text-solarien-primary hover:bg-solarien-primary hover:text-black font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300">
              Saiba Mais
            </Button>
          </div>
        </div>
        
        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-solarien-primary mb-2">45%</div>
            <div className="text-gray-300 text-sm md:text-base">Economia Garantida</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-solarien-primary mb-2">24h</div>
            <div className="text-gray-300 text-sm md:text-base">Suporte Disponível</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-solarien-primary mb-2">100+</div>
            <div className="text-gray-300 text-sm md:text-base">Cidades Atendidas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-solarien-primary mb-2">95%</div>
            <div className="text-gray-300 text-sm md:text-base">Taxa de Migração</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
