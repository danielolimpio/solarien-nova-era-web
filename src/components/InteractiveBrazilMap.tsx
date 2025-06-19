
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
            
            {/* High Quality Brazil Map SVG */}
            <div className="relative bg-gradient-to-br from-solarien-primary/10 to-solarien-secondary/10 rounded-xl p-4 border border-solarien-primary/30">
              <svg
                viewBox="0 0 1000 800"
                className="w-full h-auto max-h-[600px] cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
              >
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

                {/* Background */}
                <rect width="1000" height="800" fill="url(#backgroundGradient)" />

                {/* Roraima */}
                <path
                  id="rr"
                  d="M250 50 L320 45 L340 80 L330 120 L280 130 L240 100 Z"
                  fill={selectedState?.id === 'rr' ? 'url(#selectedGradient)' : hoveredState === 'rr' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="1.5"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('rr')}
                  onMouseEnter={() => setHoveredState('rr')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* Amapá */}
                <path
                  id="ap"
                  d="M380 110 L420 105 L440 140 L430 180 L390 185 L370 150 Z"
                  fill={selectedState?.id === 'ap' ? 'url(#selectedGradient)' : hoveredState === 'ap' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="1.5"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('ap')}
                  onMouseEnter={() => setHoveredState('ap')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* Amazonas */}
                <path
                  id="am"
                  d="M80 150 L280 130 L330 170 L300 220 L250 250 L180 280 L120 260 L100 200 Z"
                  fill={selectedState?.id === 'am' ? 'url(#selectedGradient)' : hoveredState === 'am' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="1.5"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('am')}
                  onMouseEnter={() => setHoveredState('am')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* Pará */}
                <path
                  id="pa"
                  d="M330 170 L450 150 L480 200 L460 280 L420 300 L380 280 L340 250 L300 220 Z"
                  fill={selectedState?.id === 'pa' ? 'url(#selectedGradient)' : hoveredState === 'pa' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="1.5"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('pa')}
                  onMouseEnter={() => setHoveredState('pa')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* Acre */}
                <path
                  id="ac"
                  d="M80 250 L150 240 L170 280 L150 320 L100 330 L80 290 Z"
                  fill={selectedState?.id === 'ac' ? 'url(#selectedGradient)' : hoveredState === 'ac' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="1.5"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('ac')}
                  onMouseEnter={() => setHoveredState('ac')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* Rondônia */}
                <path
                  id="ro"
                  d="M170 280 L250 270 L270 320 L240 360 L180 370 L150 330 Z"
                  fill={selectedState?.id === 'ro' ? 'url(#selectedGradient)' : hoveredState === 'ro' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="1.5"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('ro')}
                  onMouseEnter={() => setHoveredState('ro')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* Mato Grosso */}
                <path
                  id="mt"
                  d="M270 320 L380 300 L420 350 L400 420 L350 450 L280 440 L250 400 L240 360 Z"
                  fill={selectedState?.id === 'mt' ? 'url(#selectedGradient)' : hoveredState === 'mt' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="1.5"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('mt')}
                  onMouseEnter={() => setHoveredState('mt')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* Tocantins */}
                <path
                  id="to"
                  d="M420 300 L480 290 L500 340 L480 390 L450 410 L420 380 L420 350 Z"
                  fill={selectedState?.id === 'to' ? 'url(#selectedGradient)' : hoveredState === 'to' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="1.5"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('to')}
                  onMouseEnter={() => setHoveredState('to')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* Maranhão */}
                <path
                  id="ma"
                  d="M480 200 L580 190 L600 240 L590 290 L550 310 L500 300 L480 260 Z"
                  fill={selectedState?.id === 'ma' ? 'url(#selectedGradient)' : hoveredState === 'ma' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="1.5"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('ma')}
                  onMouseEnter={() => setHoveredState('ma')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* Piauí */}
                <path
                  id="pi"
                  d="M550 310 L620 300 L640 350 L620 400 L580 420 L540 410 L520 370 Z"
                  fill={selectedState?.id === 'pi' ? 'url(#selectedGradient)' : hoveredState === 'pi' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="1.5"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('pi')}
                  onMouseEnter={() => setHoveredState('pi')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* Ceará */}
                <path
                  id="ce"
                  d="M620 240 L720 230 L740 280 L720 320 L680 340 L640 330 L620 300 Z"
                  fill={selectedState?.id === 'ce' ? 'url(#selectedGradient)' : hoveredState === 'ce' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="1.5"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('ce')}
                  onMouseEnter={() => setHoveredState('ce')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* Rio Grande do Norte */}
                <path
                  id="rn"
                  d="M720 320 L780 310 L800 340 L790 370 L750 380 L720 360 Z"
                  fill={selectedState?.id === 'rn' ? 'url(#selectedGradient)' : hoveredState === 'rn' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="1.5"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('rn')}
                  onMouseEnter={() => setHoveredState('rn')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* Paraíba */}
                <path
                  id="pb"
                  d="M750 380 L800 370 L820 400 L810 430 L770 440 L750 410 Z"
                  fill={selectedState?.id === 'pb' ? 'url(#selectedGradient)' : hoveredState === 'pb' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="1.5"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('pb')}
                  onMouseEnter={() => setHoveredState('pb')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* Pernambuco */}
                <path
                  id="pe"
                  d="M640 400 L750 380 L780 420 L760 470 L700 480 L660 460 L640 430 Z"
                  fill={selectedState?.id === 'pe' ? 'url(#selectedGradient)' : hoveredState === 'pe' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="1.5"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('pe')}
                  onMouseEnter={() => setHoveredState('pe')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* Alagoas */}
                <path
                  id="al"
                  d="M700 480 L760 470 L780 500 L770 530 L720 540 L700 510 Z"
                  fill={selectedState?.id === 'al' ? 'url(#selectedGradient)' : hoveredState === 'al' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="1.5"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('al')}
                  onMouseEnter={() => setHoveredState('al')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* Sergipe */}
                <path
                  id="se"
                  d="M720 540 L770 530 L790 560 L780 580 L740 590 L720 570 Z"
                  fill={selectedState?.id === 'se' ? 'url(#selectedGradient)' : hoveredState === 'se' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="1.5"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('se')}
                  onMouseEnter={() => setHoveredState('se')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* Bahia */}
                <path
                  id="ba"
                  d="M520 430 L660 420 L720 540 L700 620 L620 650 L540 640 L480 600 L460 540 L480 480 Z"
                  fill={selectedState?.id === 'ba' ? 'url(#selectedGradient)' : hoveredState === 'ba' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="1.5"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('ba')}
                  onMouseEnter={() => setHoveredState('ba')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* Goiás */}
                <path
                  id="go"
                  d="M420 420 L520 410 L540 470 L520 530 L480 560 L440 550 L400 520 Z"
                  fill={selectedState?.id === 'go' ? 'url(#selectedGradient)' : hoveredState === 'go' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="1.5"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('go')}
                  onMouseEnter={() => setHoveredState('go')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* Distrito Federal */}
                <circle
                  id="df"
                  cx="470"
                  cy="500"
                  r="8"
                  fill={selectedState?.id === 'df' ? 'url(#selectedGradient)' : hoveredState === 'df' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="2"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('df')}
                  onMouseEnter={() => setHoveredState('df')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* Mato Grosso do Sul */}
                <path
                  id="ms"
                  d="M350 450 L420 440 L440 500 L420 560 L370 580 L320 570 L300 520 Z"
                  fill={selectedState?.id === 'ms' ? 'url(#selectedGradient)' : hoveredState === 'ms' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="1.5"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('ms')}
                  onMouseEnter={() => setHoveredState('ms')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* Minas Gerais */}
                <path
                  id="mg"
                  d="M480 560 L620 550 L640 600 L620 650 L580 680 L520 690 L460 680 L440 640 L450 600 Z"
                  fill={selectedState?.id === 'mg' ? 'url(#selectedGradient)' : hoveredState === 'mg' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="1.5"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('mg')}
                  onMouseEnter={() => setHoveredState('mg')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* Espírito Santo */}
                <path
                  id="es"
                  d="M620 650 L660 640 L680 670 L670 700 L640 710 L620 680 Z"
                  fill={selectedState?.id === 'es' ? 'url(#selectedGradient)' : hoveredState === 'es' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="1.5"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('es')}
                  onMouseEnter={() => setHoveredState('es')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* Rio de Janeiro */}
                <path
                  id="rj"
                  d="M580 680 L640 670 L660 700 L640 730 L600 740 L580 710 Z"
                  fill={selectedState?.id === 'rj' ? 'url(#selectedGradient)' : hoveredState === 'rj' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="1.5"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('rj')}
                  onMouseEnter={() => setHoveredState('rj')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* São Paulo */}
                <path
                  id="sp"
                  d="M460 680 L580 670 L600 710 L580 740 L520 750 L480 740 L450 720 Z"
                  fill={selectedState?.id === 'sp' ? 'url(#selectedGradient)' : hoveredState === 'sp' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="1.5"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('sp')}
                  onMouseEnter={() => setHoveredState('sp')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* Paraná */}
                <path
                  id="pr"
                  d="M370 580 L460 570 L480 620 L460 660 L420 680 L380 670 L350 640 Z"
                  fill={selectedState?.id === 'pr' ? 'url(#selectedGradient)' : hoveredState === 'pr' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="1.5"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('pr')}
                  onMouseEnter={() => setHoveredState('pr')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* Santa Catarina */}
                <path
                  id="sc"
                  d="M350 640 L420 630 L450 660 L440 690 L400 700 L360 690 L340 670 Z"
                  fill={selectedState?.id === 'sc' ? 'url(#selectedGradient)' : hoveredState === 'sc' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="1.5"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('sc')}
                  onMouseEnter={() => setHoveredState('sc')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* Rio Grande do Sul */}
                <path
                  id="rs"
                  d="M300 670 L400 660 L430 700 L420 750 L380 780 L320 770 L280 740 L270 700 Z"
                  fill={selectedState?.id === 'rs' ? 'url(#selectedGradient)' : hoveredState === 'rs' ? 'url(#stateGradient)' : '#1e293b'}
                  stroke="#02ff91"
                  strokeWidth="1.5"
                  className="transition-all duration-300 hover:brightness-125 cursor-pointer"
                  onClick={() => handleStateClick('rs')}
                  onMouseEnter={() => setHoveredState('rs')}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* Legend */}
                <text x="50" y="750" fill="#02ff91" fontSize="16" fontWeight="bold">
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
