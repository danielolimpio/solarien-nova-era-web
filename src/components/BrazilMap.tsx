
import React from 'react';
import InteractiveBrazilMap from './InteractiveBrazilMap';

const BrazilMap = () => {
  return (
    <section className="py-20 relative">
      {/* Full width gray background */}
      <div className="absolute inset-0 bg-gray-100"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Cobertura</span> <span className="text-gray-800">Nacional</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Descubra o desconto disponível em seu estado e a distribuidora parceira. Clique em qualquer estado para simular sua economia.
          </p>
        </div>

        <InteractiveBrazilMap />

        {/* Coverage Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center bg-gradient-to-br from-solarien-primary/10 to-solarien-secondary/10 rounded-2xl p-6 border border-solarien-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="text-3xl font-bold text-solarien-primary mb-2">16 + DF</div>
            <div className="text-gray-700">Estados</div>
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
            <div className="text-3xl font-bold text-solarien-primary mb-2">100%</div>
            <div className="text-gray-700">Renovável</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrazilMap;
