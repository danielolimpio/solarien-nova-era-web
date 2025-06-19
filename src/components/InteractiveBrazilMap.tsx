
import React, { useState } from 'react';
import DiscountSimulator from './DiscountSimulator';
import { Button } from './ui/button';

interface State {
  name: string;
  discount: string;
  distributor: string;
  id: string;
}

const states: State[] = [
  { id: 'ac', name: 'Acre', discount: '13%', distributor: 'ENERGISA' },
  { id: 'al', name: 'Alagoas', discount: '12%', distributor: 'CEAL' },
  { id: 'ap', name: 'Amapá', discount: '14%', distributor: 'CEA' },
  { id: 'am', name: 'Amazonas', discount: '12%', distributor: 'AMAZONAS ENERGIA' },
  { id: 'ba', name: 'Bahia', discount: '17%', distributor: 'COELBA' },
  { id: 'ce', name: 'Ceará', discount: '16%', distributor: 'ENEL Ceará' },
  { id: 'df', name: 'Distrito Federal', discount: '14%', distributor: 'CEB' },
  { id: 'es', name: 'Espírito Santo', discount: '16%', distributor: 'EDP' },
  { id: 'go', name: 'Goiás', discount: '15%', distributor: 'ENEL Goiás' },
  { id: 'ma', name: 'Maranhão', discount: '15%', distributor: 'CEMAR' },
  { id: 'mt', name: 'Mato Grosso', discount: '17%', distributor: 'ENERGISA' },
  { id: 'ms', name: 'Mato Grosso do Sul', discount: '15%', distributor: 'ENERGISA' },
  { id: 'mg', name: 'Minas Gerais', discount: '18%', distributor: 'CEMIG' },
  { id: 'pa', name: 'Pará', discount: '13%', distributor: 'CELPA' },
  { id: 'pb', name: 'Paraíba', discount: '14%', distributor: 'ENERGISA' },
  { id: 'pr', name: 'Paraná', discount: '14%', distributor: 'COPEL' },
  { id: 'pe', name: 'Pernambuco', discount: '14%', distributor: 'CELPE' },
  { id: 'pi', name: 'Piauí', discount: '14%', distributor: 'CEPISA' },
  { id: 'rj', name: 'Rio de Janeiro', discount: '12%', distributor: 'Light' },
  { id: 'rn', name: 'Rio Grande do Norte', discount: '15%', distributor: 'COSERN' },
  { id: 'rs', name: 'Rio Grande do Sul', discount: '16%', distributor: 'RGE' },
  { id: 'ro', name: 'Rondônia', discount: '16%', distributor: 'ENERGISA' },
  { id: 'rr', name: 'Roraima', discount: '15%', distributor: 'RR ENERGIA' },
  { id: 'sc', name: 'Santa Catarina', discount: '13%', distributor: 'CELESC' },
  { id: 'sp', name: 'São Paulo', discount: '15%', distributor: 'CPFL Energia' },
  { id: 'se', name: 'Sergipe', discount: '13%', distributor: 'ENERGISA' },
  { id: 'to', name: 'Tocantins', discount: '13%', distributor: 'CELTINS' }
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
            
            {/* Brazil Map Image */}
            <div className="relative bg-gradient-to-br from-solarien-primary/10 to-solarien-secondary/10 rounded-xl p-4 border border-solarien-primary/30">
              <img
                src="/lovable-uploads/60cfbf44-9aea-402c-9cea-dc463d264cab.png"
                alt="Mapa do Brasil com estados e descontos"
                className="w-full h-auto max-h-[600px] object-contain rounded-lg"
              />
              
              <div className="mt-4 text-center">
                <p className="text-sm text-solarien-primary font-semibold">
                  Clique em um estado na lista ao lado para ver detalhes e simular sua economia
                </p>
              </div>
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
    </div>
  );
};

export default InteractiveBrazilMap;
