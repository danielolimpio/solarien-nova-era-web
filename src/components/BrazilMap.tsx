
import React from 'react';
import InteractiveBrazilMap from './InteractiveBrazilMap';

const BrazilMap = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Cobertura</span> <span className="text-gray-800">Nacional</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Descubra o desconto disponível em seu estado e a distribuidora parceira. Clique em qualquer estado para simular sua economia.
          </p>
        </div>

        <InteractiveBrazilMap />
      </div>
    </section>
  );
};

export default BrazilMap;
