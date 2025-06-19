
import React, { useState } from 'react';
import DiscountSimulator from './DiscountSimulator';
import { Button } from './ui/button';

interface State {
  name: string;
  discount: string;
  distributor: string;
}

const states: State[] = [
  { name: 'São Paulo', discount: '15%', distributor: 'CPFL Energia' },
  { name: 'Rio de Janeiro', discount: '12%', distributor: 'Light' },
  { name: 'Minas Gerais', discount: '18%', distributor: 'CEMIG' },
  { name: 'Paraná', discount: '14%', distributor: 'COPEL' },
  { name: 'Rio Grande do Sul', discount: '16%', distributor: 'RGE' },
  { name: 'Santa Catarina', discount: '13%', distributor: 'CELESC' },
  { name: 'Bahia', discount: '17%', distributor: 'COELBA' },
  { name: 'Goiás', discount: '15%', distributor: 'ENEL Goiás' },
  { name: 'Pernambuco', discount: '14%', distributor: 'CELPE' },
  { name: 'Ceará', discount: '16%', distributor: 'ENEL Ceará' },
  { name: 'Pará', discount: '13%', distributor: 'CELPA' },
  { name: 'Maranhão', discount: '15%', distributor: 'CEMAR' },
  { name: 'Paraíba', discount: '14%', distributor: 'ENERGISA' },
  { name: 'Alagoas', discount: '12%', distributor: 'CEAL' },
  { name: 'Sergipe', discount: '13%', distributor: 'ENERGISA' },
  { name: 'Rio Grande do Norte', discount: '15%', distributor: 'COSERN' },
  { name: 'Piauí', discount: '14%', distributor: 'CEPISA' },
  { name: 'Espírito Santo', discount: '16%', distributor: 'EDP' },
  { name: 'Mato Grosso', discount: '17%', distributor: 'ENERGISA' },
  { name: 'Mato Grosso do Sul', discount: '15%', distributor: 'ENERGISA' },
  { name: 'Distrito Federal', discount: '14%', distributor: 'CEB' },
  { name: 'Tocantins', discount: '13%', distributor: 'CELTINS' },
  { name: 'Amazonas', discount: '12%', distributor: 'AMAZONAS ENERGIA' },
  { name: 'Roraima', discount: '15%', distributor: 'RR ENERGIA' },
  { name: 'Amapá', discount: '14%', distributor: 'CEA' },
  { name: 'Rondônia', discount: '16%', distributor: 'ENERGISA' },
  { name: 'Acre', discount: '13%', distributor: 'ENERGISA' }
];

const InteractiveBrazilMap = () => {
  const [selectedState, setSelectedState] = useState<State | null>(null);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-700">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Map Section */}
        <div className="relative">
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 border border-slate-600">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Mapa Interativo do Brasil
            </h3>
            
            {/* Simplified Brazil Map Representation */}
            <div className="relative bg-gradient-to-br from-solarien-primary/20 to-solarien-secondary/20 rounded-xl p-8 min-h-[400px] flex items-center justify-center border border-solarien-primary/30">
              <div className="text-center text-white">
                <div className="w-32 h-32 bg-gradient-to-br from-solarien-primary to-solarien-secondary rounded-full mx-auto mb-4 flex items-center justify-center border-4 border-white/20">
                  <span className="text-3xl font-bold text-black">BR</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">Brasil</h4>
                <p className="text-sm text-gray-300">
                  Selecione um estado na lista ao lado para ver os detalhes
                </p>
              </div>
              
              {/* Visual Elements */}
              <div className="absolute top-4 left-4 w-4 h-4 bg-solarien-primary rounded-full animate-pulse"></div>
              <div className="absolute bottom-6 right-6 w-3 h-3 bg-solarien-secondary rounded-full animate-pulse delay-300"></div>
              <div className="absolute top-1/3 right-8 w-2 h-2 bg-solarien-tertiary rounded-full animate-pulse delay-700"></div>
            </div>
          </div>
        </div>

        {/* States List Section */}
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-3">
              Selecione seu Estado
            </h3>
            <p className="text-gray-300">
              Clique no estado para ver o desconto disponível e simular sua economia
            </p>
          </div>

          <div className="max-h-96 overflow-y-auto pr-2 space-y-2 custom-scrollbar">
            {states.map((state, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-xl p-4 border transition-all duration-300 cursor-pointer hover:scale-[1.02] ${
                  selectedState?.name === state.name
                    ? 'border-solarien-primary bg-gradient-to-r from-solarien-primary/20 to-solarien-secondary/20'
                    : 'border-slate-600 hover:border-solarien-primary/50'
                }`}
                onClick={() => setSelectedState(state)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-white text-lg">{state.name}</h4>
                    <p className="text-sm text-gray-300">{state.distributor}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-solarien-primary font-bold text-xl">
                      {state.discount}
                    </div>
                    <div className="text-xs text-gray-400">desconto</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Selected State Info & Simulator */}
          {selectedState && (
            <div className="bg-gradient-to-br from-solarien-primary/10 to-solarien-secondary/10 rounded-xl p-6 border border-solarien-primary/30 mt-6">
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-white mb-2">
                  {selectedState.name}
                </h4>
                <div className="flex justify-between items-center text-sm text-gray-300 mb-4">
                  <span>Distribuidora: {selectedState.distributor}</span>
                  <span className="text-solarien-primary font-bold">
                    Desconto: {selectedState.discount}
                  </span>
                </div>
              </div>

              <DiscountSimulator state={selectedState.name} discount={selectedState.discount}>
                <Button className="w-full bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-solarien-primary/25 transition-all duration-300">
                  Simular Economia em {selectedState.name}
                </Button>
              </DiscountSimulator>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(51, 65, 85, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #10b981, #059669);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #059669, #047857);
        }
      `}</style>
    </div>
  );
};

export default InteractiveBrazilMap;
