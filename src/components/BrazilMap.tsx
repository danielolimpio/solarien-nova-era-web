
import React from 'react';

const BrazilMap = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Cobertura</span> <span className="text-gray-800">Nacional</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Presente em todo o Brasil, oferecemos soluções de energia limpa e econômica para residências e empresas.
          </p>
        </div>

        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Mapa do Brasil com cobertura nacional" 
            className="w-full max-w-4xl mx-auto rounded-3xl shadow-2xl"
          />
          
          {/* Overlay with coverage info */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl flex items-end justify-center p-8">
            <div className="text-center text-white">
              <h3 className="text-3xl font-bold mb-4">27 Estados + DF</h3>
              <p className="text-xl">Cobertura Nacional Completa</p>
            </div>
          </div>
        </div>

        {/* Coverage Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center bg-gradient-to-br from-solarien-primary/10 to-solarien-secondary/10 rounded-2xl p-6 border border-solarien-primary/20">
            <div className="text-3xl font-bold text-solarien-primary mb-2">27</div>
            <div className="text-gray-700">Estados</div>
          </div>
          <div className="text-center bg-gradient-to-br from-solarien-secondary/10 to-solarien-tertiary/10 rounded-2xl p-6 border border-solarien-secondary/20">
            <div className="text-3xl font-bold text-solarien-secondary mb-2">1000+</div>
            <div className="text-gray-700">Cidades</div>
          </div>
          <div className="text-center bg-gradient-to-br from-solarien-tertiary/10 to-solarien-primary/10 rounded-2xl p-6 border border-solarien-tertiary/20">
            <div className="text-3xl font-bold text-solarien-tertiary mb-2">50k+</div>
            <div className="text-gray-700">Clientes</div>
          </div>
          <div className="text-center bg-gradient-to-br from-solarien-primary/10 to-solarien-secondary/10 rounded-2xl p-6 border border-solarien-primary/20">
            <div className="text-3xl font-bold text-solarien-primary mb-2">100%</div>
            <div className="text-gray-700">Renovável</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrazilMap;
