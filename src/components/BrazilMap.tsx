
import React from 'react';

const BrazilMap = () => {
  return (
    <section id="servicos" className="py-20 w-full bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Nossa</span> <span className="text-gray-800">Cobertura</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Atendemos 17 estados com desconto garantido de 15% em mais de 4200 municípios.
          </p>
        </div>

        {/* Coverage Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center bg-gradient-to-br from-[#00844e]/10 to-[#02ff91]/10 rounded-2xl p-6 border border-[#00844e]/20 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="text-3xl font-bold text-[#00844e] mb-2">17</div>
            <div className="text-gray-700">Estados</div>
          </div>
          <div className="text-center bg-gradient-to-br from-[#02ff91]/10 to-[#00844e]/10 rounded-2xl p-6 border border-[#02ff91]/20 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="text-3xl font-bold text-[#02ff91] mb-2">4200+</div>
            <div className="text-gray-700">Municípios</div>
          </div>
          <div className="text-center bg-gradient-to-br from-[#00844e]/10 to-[#02ff91]/10 rounded-2xl p-6 border border-[#00844e]/20 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="text-3xl font-bold text-[#00844e] mb-2">6k+</div>
            <div className="text-gray-700">Clientes</div>
          </div>
          <div className="text-center bg-gradient-to-br from-[#02ff91]/10 to-[#00844e]/10 rounded-2xl p-6 border border-[#02ff91]/20 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="text-3xl font-bold text-[#02ff91] mb-2">15%</div>
            <div className="text-gray-700">Desconto</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrazilMap;
