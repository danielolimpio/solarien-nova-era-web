
import React, { useState } from 'react';

const BrazilMap = () => {
  const [selectedState, setSelectedState] = useState(null);

  const statesData = [
    { name: 'São Paulo', discount: '15%', distributor: 'CPFL Paulista, Elektro, Energisa, Copel', code: 'SP' },
    { name: 'Santa Catarina', discount: '15%', distributor: 'Celesc', code: 'SC' },
    { name: 'Paraná', discount: '15%', distributor: 'Energisa, Copel', code: 'PR' },
    { name: 'Mato Grosso do Sul', discount: '15%', distributor: 'Energisa', code: 'MS' },
    { name: 'Mato Grosso', discount: '15%', distributor: 'Energisa', code: 'MT' },
    { name: 'Goiás', discount: '15%', distributor: 'Equatorial', code: 'GO' },
    { name: 'Distrito Federal', discount: '15%', distributor: 'CEB Neoenergia', code: 'DF' },
    { name: 'Minas Gerais', discount: '15%', distributor: 'Cemig, Energisa', code: 'MG' },
    { name: 'Bahia', discount: '15%', distributor: 'Coelba Neoenergia', code: 'BA' },
    { name: 'Tocantins', discount: '15%', distributor: 'Energisa', code: 'TO' },
    { name: 'Pará', discount: '15%', distributor: 'Equatorial', code: 'PA' },
    { name: 'Maranhão', discount: '15%', distributor: 'Equatorial', code: 'MA' },
    { name: 'Piauí', discount: '15%', distributor: 'Equatorial', code: 'PI' },
    { name: 'Ceará', discount: '15%', distributor: 'Enel', code: 'CE' },
    { name: 'Rio Grande do Norte', discount: '15%', distributor: 'Cosern Neoenergia', code: 'RN' },
    { name: 'Pernambuco', discount: '15%', distributor: 'Celpe Neoenergia', code: 'PE' },
    { name: 'Sergipe', discount: '15%', distributor: 'Energisa', code: 'SE' },
    { name: 'Rio de Janeiro', discount: '12%', distributor: 'Light', code: 'RJ' },
    { name: 'Espírito Santo', discount: '13%', distributor: 'EDP', code: 'ES' },
    { name: 'Rio Grande do Sul', discount: '16%', distributor: 'RGE', code: 'RS' },
    { name: 'Paraíba', discount: '18%', distributor: 'Energisa', code: 'PB' },
    { name: 'Alagoas', discount: '17%', distributor: 'Equatorial', code: 'AL' },
    { name: 'Rondônia', discount: '15%', distributor: 'Energisa', code: 'RO' },
    { name: 'Acre', discount: '16%', distributor: 'Energisa', code: 'AC' },
    { name: 'Amazonas', discount: '14%', distributor: 'Amazonas Energia', code: 'AM' },
    { name: 'Roraima', discount: '18%', distributor: 'Roraima Energia', code: 'RR' },
    { name: 'Amapá', discount: '17%', distributor: 'CEA', code: 'AP' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-solarien-primary/5 to-solarien-secondary/5 relative">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Modern building" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-solarien-primary/10 via-white/90 to-solarien-secondary/10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Cobertura</span> <span className="text-gray-800">Nacional</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Descubra o desconto disponível em seu estado e a distribuidora parceira
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <div className="relative">
            <div className="bg-white/90 backdrop-blur-sm border border-solarien-primary/20 rounded-2xl p-8 shadow-lg">
              <div className="aspect-square bg-gradient-to-br from-solarien-primary/10 to-solarien-secondary/10 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-solarien-primary to-solarien-secondary rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-black">BR</span>
                  </div>
                  <h3 className="text-xl font-bold text-gradient mb-2">Mapa Interativo do Brasil</h3>
                  <p className="text-gray-600">Clique em um estado da lista para ver os detalhes</p>
                </div>
                
                {/* Animated particles */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-solarien-primary rounded-full animate-glow"></div>
                <div className="absolute top-8 right-6 w-1 h-1 bg-solarien-secondary rounded-full animate-glow" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-6 left-8 w-3 h-3 bg-solarien-tertiary rounded-full animate-glow" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>

          {/* States List */}
          <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
            {statesData.map((state) => (
              <div
                key={state.code}
                onClick={() => setSelectedState(state)}
                className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 hover:scale-102 shadow-sm ${
                  selectedState?.code === state.code
                    ? 'bg-solarien-primary/20 border-solarien-primary'
                    : 'bg-white/90 border-solarien-primary/20 hover:bg-solarien-primary/10 hover:border-solarien-primary/30'
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-gray-800">{state.name}</h3>
                    <p className="text-sm text-gray-600">{state.distributor}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-solarien-primary">{state.discount}</div>
                    <div className="text-xs text-gray-500">desconto</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedState && (
          <div className="mt-12 bg-white/90 backdrop-blur-sm border border-solarien-primary/30 rounded-2xl p-8 animate-slide-up shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gradient mb-4">{selectedState.name}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-solarien-primary mb-2">{selectedState.discount}</div>
                  <div className="text-gray-600">Desconto Garantido</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-800 mb-2">{selectedState.distributor}</div>
                  <div className="text-gray-600">Distribuidora Parceira</div>
                </div>
                <div className="text-center">
                  <button className="px-6 py-3 bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-solarien-primary/25 transition-all duration-300">
                    Simular Agora
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(248, 250, 252, 0.5);
            border-radius: 3px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #02ff91;
            border-radius: 3px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #00c26f;
          }
        `
      }} />
    </section>
  );
};

export default BrazilMap;
