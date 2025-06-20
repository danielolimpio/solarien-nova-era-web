
import React from 'react';
import StateCoverageSimulator from './StateCoverageSimulator';

const BrazilMap = () => {
  return (
    <section id="servicos" className="py-20 w-full bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Simulador</span> <span className="text-gray-800">Nacional</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Descubra o desconto disponível em seu estado e simule sua economia com energia solar. 
            Atendemos todos os 26 estados + Distrito Federal com desconto garantido de 15%.
          </p>
        </div>

        <StateCoverageSimulator />

        {/* Coverage Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center bg-gradient-to-br from-solarien-primary/10 to-solarien-secondary/10 rounded-2xl p-6 border border-solarien-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="text-3xl font-bold text-solarien-primary mb-2">27</div>
            <div className="text-gray-700">Estados + DF</div>
          </div>
          <div className="text-center bg-gradient-to-br from-solarien-secondary/10 to-solarien-tertiary/10 rounded-2xl p-6 border border-solarien-secondary/20 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="text-3xl font-bold text-solarien-secondary mb-2">4200+</div>
            <div className="text-gray-700">Municípios</div>
          </div>
          <div className="text-center bg-gradient-to-br from-solarien-tertiary/10 to-solarien-primary/10 rounded-2xl p-6 border border-solarien-tertiary/20 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="text-3xl font-bold text-solarien-tertiary mb-2">6k+</div>
            <div className="text-gray-700">Clientes</div>
          </div>
          <div className="text-center bg-gradient-to-br from-solarien-primary/10 to-solarien-secondary/10 rounded-2xl p-6 border border-solarien-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="text-3xl font-bold text-solarien-primary mb-2">15%</div>
            <div className="text-gray-700">Desconto</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrazilMap;
