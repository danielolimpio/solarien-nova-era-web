
import React, { useState } from 'react';

const BrazilMap = () => {
  const [selectedState, setSelectedState] = useState(null);

  const statesData = [
    { name: 'São Paulo', discount: '15%', distributor: 'CPFL Energia', code: 'SP' },
    { name: 'Rio de Janeiro', discount: '12%', distributor: 'Light', code: 'RJ' },
    { name: 'Minas Gerais', discount: '18%', distributor: 'Cemig', code: 'MG' },
    { name: 'Paraná', discount: '14%', distributor: 'Copel', code: 'PR' },
    { name: 'Rio Grande do Sul', discount: '16%', distributor: 'RGE', code: 'RS' },
    { name: 'Bahia', discount: '13%', distributor: 'Neoenergia', code: 'BA' },
    { name: 'Ceará', discount: '17%', distributor: 'Enel', code: 'CE' },
    { name: 'Pernambuco', discount: '15%', distributor: 'Neoenergia', code: 'PE' },
    { name: 'Goiás', discount: '14%', distributor: 'Equatorial', code: 'GO' },
    { name: 'Maranhão', discount: '19%', distributor: 'Equatorial', code: 'MA' },
    { name: 'Pará', discount: '16%', distributor: 'Equatorial', code: 'PA' },
    { name: 'Santa Catarina', discount: '15%', distributor: 'Celesc', code: 'SC' },
    { name: 'Espírito Santo', discount: '13%', distributor: 'EDP', code: 'ES' },
    { name: 'Paraíba', discount: '18%', distributor: 'Energisa', code: 'PB' },
    { name: 'Alagoas', discount: '17%', distributor: 'Equatorial', code: 'AL' },
    { name: 'Sergipe', discount: '16%', distributor: 'Energisa', code: 'SE' },
    { name: 'Rio Grande do Norte', discount: '15%', distributor: 'Cosern', code: 'RN' },
    { name: 'Piauí', discount: '18%', distributor: 'Equatorial', code: 'PI' },
    { name: 'Mato Grosso', discount: '14%', distributor: 'Energisa', code: 'MT' },
    { name: 'Mato Grosso do Sul', discount: '16%', distributor: 'Energisa', code: 'MS' },
    { name: 'Distrito Federal', discount: '12%', distributor: 'CEB', code: 'DF' },
    { name: 'Tocantins', discount: '17%', distributor: 'Energisa', code: 'TO' },
    { name: 'Rondônia', discount: '15%', distributor: 'Energisa', code: 'RO' },
    { name: 'Acre', discount: '16%', distributor: 'Energisa', code: 'AC' },
    { name: 'Amazonas', discount: '14%', distributor: 'Amazonas Energia', code: 'AM' },
    { name: 'Roraima', discount: '18%', distributor: 'Roraima Energia', code: 'RR' },
    { name: 'Amapá', discount: '17%', distributor: 'CEA', code: 'AP' }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Cobertura</span> Nacional
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Descubra o desconto disponível em seu estado e a distribuidora parceira
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <div className="relative">
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 energy-glow">
              <div className="aspect-square bg-gradient-to-br from-solarien-primary/10 to-solarien-secondary/10 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-solarien-primary to-solarien-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-black">BR</span>
                  </div>
                  <h3 className="text-xl font-bold text-gradient mb-2">Mapa Interativo do Brasil</h3>
                  <p className="text-gray-400">Clique em um estado da lista para ver os detalhes</p>
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
                className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 hover:scale-102 ${
                  selectedState?.code === state.code
                    ? 'bg-solarien-primary/20 border-solarien-primary'
                    : 'bg-card/50 border-border hover:bg-solarien-primary/10 hover:border-solarien-primary/30'
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-white">{state.name}</h3>
                    <p className="text-sm text-gray-400">{state.distributor}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-solarien-primary">{state.discount}</div>
                    <div className="text-xs text-gray-400">desconto</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedState && (
          <div className="mt-12 bg-card/50 backdrop-blur-sm border border-solarien-primary/30 rounded-2xl p-8 animate-slide-up">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gradient mb-4">{selectedState.name}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-solarien-primary mb-2">{selectedState.discount}</div>
                  <div className="text-gray-400">Desconto Garantido</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-white mb-2">{selectedState.distributor}</div>
                  <div className="text-gray-400">Distribuidora Parceira</div>
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

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(30, 41, 59, 0.5);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #02ff91;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #00c26f;
        }
      `}</style>
    </section>
  );
};

export default BrazilMap;
