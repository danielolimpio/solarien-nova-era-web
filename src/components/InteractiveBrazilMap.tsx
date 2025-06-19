
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
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const handleStateClick = (stateId: string) => {
    const state = states.find(s => s.id === stateId);
    if (state) {
      setSelectedState(state);
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-700">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Map Section */}
        <div className="relative">
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 border border-slate-600">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Mapa Interativo do Brasil
            </h3>
            
            {/* Interactive Brazil Map SVG */}
            <div className="relative bg-gradient-to-br from-solarien-primary/10 to-solarien-secondary/10 rounded-xl p-4 border border-solarien-primary/30">
              <svg
                viewBox="0 0 800 600"
                className="w-full h-auto max-h-[500px] cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background */}
                <rect width="800" height="600" fill="url(#backgroundGradient)" />
                
                {/* Gradient Definitions */}
                <defs>
                  <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(2, 255, 145, 0.05)" />
                    <stop offset="50%" stopColor="rgba(0, 194, 111, 0.05)" />
                    <stop offset="100%" stopColor="rgba(0, 132, 78, 0.05)" />
                  </linearGradient>
                  <linearGradient id="stateGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#02ff91" />
                    <stop offset="100%" stopColor="#00c26f" />
                  </linearGradient>
                  <linearGradient id="selectedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#02ff91" />
                    <stop offset="50%" stopColor="#00c26f" />
                    <stop offset="100%" stopColor="#00844e" />
                  </linearGradient>
                </defs>

                {/* Simplified Brazil Map Regions */}
                
                {/* Amazonas */}
                <path
                  id="am"
                  d="M120 150 L250 130 L280 180 L260 220 L200 240 L150 200 Z"
                  fill={selectedState?.id === 'am' ? 'url(#selectedGradient)' : hoveredState === 'am' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="1"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('am')}
                  onMouseEnter={() => setHoveredState('am')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* Pará */}
                <path
                  id="pa"
                  d="M280 180 L380 160 L400 200 L380 240 L300 250 L260 220 Z"
                  fill={selectedState?.id === 'pa' ? 'url(#selectedGradient)' : hoveredState === 'pa' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="1"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('pa')}
                  onMouseEnter={() => setHoveredState('pa')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* Maranhão */}
                <path
                  id="ma"
                  d="M400 200 L480 190 L500 230 L480 260 L400 250 Z"
                  fill={selectedState?.id === 'ma' ? 'url(#selectedGradient)' : hoveredState === 'ma' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="1"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('ma')}
                  onMouseEnter={() => setHoveredState('ma')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* Ceará */}
                <path
                  id="ce"
                  d="M500 230 L550 220 L570 250 L550 270 L500 275 Z"
                  fill={selectedState?.id === 'ce' ? 'url(#selectedGradient)' : hoveredState === 'ce' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="1"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('ce')}
                  onMouseEnter={() => setHoveredState('ce')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* Bahia */}
                <path
                  id="ba"
                  d="M450 300 L520 290 L540 350 L500 400 L430 390 L420 340 Z"
                  fill={selectedState?.id === 'ba' ? 'url(#selectedGradient)' : hoveredState === 'ba' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="1"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('ba')}
                  onMouseEnter={() => setHoveredState('ba')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* Minas Gerais */}
                <path
                  id="mg"
                  d="M420 340 L500 330 L520 380 L480 420 L420 410 Z"
                  fill={selectedState?.id === 'mg' ? 'url(#selectedGradient)' : hoveredState === 'mg' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="1"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('mg')}
                  onMouseEnter={() => setHoveredState('mg')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* São Paulo */}
                <path
                  id="sp"
                  d="M420 410 L480 400 L500 440 L460 460 L420 450 Z"
                  fill={selectedState?.id === 'sp' ? 'url(#selectedGradient)' : hoveredState === 'sp' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="1"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('sp')}
                  onMouseEnter={() => setHoveredState('sp')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* Rio de Janeiro */}
                <path
                  id="rj"
                  d="M500 440 L530 430 L540 450 L520 465 L500 460 Z"
                  fill={selectedState?.id === 'rj' ? 'url(#selectedGradient)' : hoveredState === 'rj' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="1"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('rj')}
                  onMouseEnter={() => setHoveredState('rj')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* Paraná */}
                <path
                  id="pr"
                  d="M380 450 L420 440 L440 480 L400 490 L380 470 Z"
                  fill={selectedState?.id === 'pr' ? 'url(#selectedGradient)' : hoveredState === 'pr' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="1"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('pr')}
                  onMouseEnter={() => setHoveredState('pr')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* Santa Catarina */}
                <path
                  id="sc"
                  d="M380 470 L420 460 L440 490 L400 500 L380 485 Z"
                  fill={selectedState?.id === 'sc' ? 'url(#selectedGradient)' : hoveredState === 'sc' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="1"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('sc')}
                  onMouseEnter={() => setHoveredState('sc')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* Rio Grande do Sul */}
                <path
                  id="rs"
                  d="M340 490 L400 480 L420 520 L360 530 L340 510 Z"
                  fill={selectedState?.id === 'rs' ? 'url(#selectedGradient)' : hoveredState === 'rs' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="1"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('rs')}
                  onMouseEnter={() => setHoveredState('rs')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* Mato Grosso do Sul */}
                <path
                  id="ms"
                  d="M300 380 L360 370 L380 410 L340 430 L300 420 Z"
                  fill={selectedState?.id === 'ms' ? 'url(#selectedGradient)' : hoveredState === 'ms' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="1"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('ms')}
                  onMouseEnter={() => setHoveredState('ms')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* Mato Grosso */}
                <path
                  id="mt"
                  d="M250 280 L350 270 L370 320 L320 340 L250 330 Z"
                  fill={selectedState?.id === 'mt' ? 'url(#selectedGradient)' : hoveredState === 'mt' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="1"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('mt')}
                  onMouseEnter={() => setHoveredState('mt')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* Goiás */}
                <path
                  id="go"
                  d="M370 320 L420 310 L440 350 L400 370 L370 360 Z"
                  fill={selectedState?.id === 'go' ? 'url(#selectedGradient)' : hoveredState === 'go' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="1"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('go')}
                  onMouseEnter={() => setHoveredState('go')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* Add more simplified state paths for remaining states */}
                {/* Tocantins, Piauí, Pernambuco, etc. */}
                
                {/* Legend */}
                <text x="50" y="550" fill="#02ff91" fontSize="14" fontWeight="bold">
                  Clique em um estado para ver detalhes
                </text>
              </svg>

              {/* Hover tooltip */}
              {hoveredState && (
                <div className="absolute top-4 left-4 bg-slate-800 text-white px-3 py-2 rounded-lg text-sm border border-solarien-primary/30">
                  {states.find(s => s.id === hoveredState)?.name}
                </div>
              )}
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
