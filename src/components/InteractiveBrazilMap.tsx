
import React, { useState } from 'react';
import DiscountSimulator from './DiscountSimulator';

const InteractiveBrazilMap = () => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const statesData = {
    'acre': { name: 'Acre', discount: '16%', distributor: 'Energisa', group: 'A' },
    'alagoas': { name: 'Alagoas', discount: '17%', distributor: 'Equatorial', group: 'A' },
    'amapa': { name: 'Amapá', discount: '17%', distributor: 'CEA', group: 'A' },
    'amazonas': { name: 'Amazonas', discount: '14%', distributor: 'Amazonas Energia', group: 'A' },
    'bahia': { name: 'Bahia', discount: '15%', distributor: 'Coelba Neoenergia', group: 'A' },
    'ceara': { name: 'Ceará', discount: '15%', distributor: 'Enel', group: 'A' },
    'distrito-federal': { name: 'Distrito Federal', discount: '15%', distributor: 'CEB Neoenergia', group: 'A' },
    'espirito-santo': { name: 'Espírito Santo', discount: '13%', distributor: 'EDP', group: 'B' },
    'goias': { name: 'Goiás', discount: '15%', distributor: 'Equatorial', group: 'A' },
    'maranhao': { name: 'Maranhão', discount: '15%', distributor: 'Equatorial', group: 'A' },
    'mato-grosso': { name: 'Mato Grosso', discount: '15%', distributor: 'Energisa', group: 'A' },
    'mato-grosso-do-sul': { name: 'Mato Grosso do Sul', discount: '15%', distributor: 'Energisa', group: 'A' },
    'minas-gerais': { name: 'Minas Gerais', discount: '15%', distributor: 'Cemig, Energisa', group: 'A' },
    'para': { name: 'Pará', discount: '10%', distributor: 'Equatorial', group: 'A' },
    'paraiba': { name: 'Paraíba', discount: '18%', distributor: 'Energisa', group: 'A' },
    'parana': { name: 'Paraná', discount: '15%', distributor: 'Energisa, Copel', group: 'A' },
    'pernambuco': { name: 'Pernambuco', discount: '15%', distributor: 'Celpe Neoenergia', group: 'A' },
    'piaui': { name: 'Piauí', discount: '10%', distributor: 'Equatorial', group: 'A' },
    'rio-de-janeiro': { name: 'Rio de Janeiro', discount: '12%', distributor: 'Light', group: 'B' },
    'rio-grande-do-norte': { name: 'Rio Grande do Norte', discount: '10%', distributor: 'Cosern Neoenergia', group: 'A' },
    'rio-grande-do-sul': { name: 'Rio Grande do Sul', discount: '25%', distributor: 'RGE', group: 'B' },
    'rondonia': { name: 'Rondônia', discount: '15%', distributor: 'Energisa', group: 'A' },
    'roraima': { name: 'Roraima', discount: '18%', distributor: 'Roraima Energia', group: 'A' },
    'santa-catarina': { name: 'Santa Catarina', discount: '15%', distributor: 'Celesc', group: 'A' },
    'sao-paulo': { name: 'São Paulo', discount: '15%', distributor: 'CPFL Paulista, Elektro, Energisa', group: 'A' },
    'sergipe': { name: 'Sergipe', discount: '10%', distributor: 'Energisa', group: 'A' },
    'tocantins': { name: 'Tocantins', discount: '10%', distributor: 'Energisa', group: 'A' }
  };

  const getStateColor = (stateId: string) => {
    const state = statesData[stateId as keyof typeof statesData];
    if (!state) return '#E5E7EB';
    
    if (hoveredState === stateId) {
      return '#00ff91';
    }
    
    return state.group === 'A' ? '#02ff91' : '#00c26f';
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-white mb-2">
            Tabela de Descontos nos Estados Brasileiros
          </h3>
          <p className="text-gray-300">Clique em qualquer estado para simular sua economia</p>
        </div>

        <div className="relative">
          <svg
            viewBox="0 0 1000 800"
            className="w-full h-auto"
            style={{ maxHeight: '600px' }}
          >
            {/* Acre */}
            <DiscountSimulator state={statesData.acre.name} discount={statesData.acre.discount}>
              <path
                id="acre"
                d="M 50 350 L 150 340 L 160 380 L 140 420 L 80 430 L 50 400 Z"
                fill={getStateColor('acre')}
                stroke="#ffffff"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-300 hover:brightness-110 hover:drop-shadow-lg"
                onMouseEnter={() => setHoveredState('acre')}
                onMouseLeave={() => setHoveredState(null)}
              />
            </DiscountSimulator>

            {/* Amazonas */}
            <DiscountSimulator state={statesData.amazonas.name} discount={statesData.amazonas.discount}>
              <path
                id="amazonas"
                d="M 80 200 L 280 180 L 320 220 L 300 280 L 250 320 L 180 340 L 80 350 L 60 300 L 70 250 Z"
                fill={getStateColor('amazonas')}
                stroke="#ffffff"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-300 hover:brightness-110 hover:drop-shadow-lg"
                onMouseEnter={() => setHoveredState('amazonas')}
                onMouseLeave={() => setHoveredState(null)}
              />
            </DiscountSimulator>

            {/* Roraima */}
            <DiscountSimulator state={statesData.roraima.name} discount={statesData.roraima.discount}>
              <path
                id="roraima"
                d="M 160 50 L 260 40 L 280 80 L 270 120 L 220 140 L 160 130 L 140 90 Z"
                fill={getStateColor('roraima')}
                stroke="#ffffff"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-300 hover:brightness-110 hover:drop-shadow-lg"
                onMouseEnter={() => setHoveredState('roraima')}
                onMouseLeave={() => setHoveredState(null)}
              />
            </DiscountSimulator>

            {/* Pará */}
            <DiscountSimulator state={statesData.para.name} discount={statesData.para.discount}>
              <path
                id="para"
                d="M 280 120 L 480 100 L 520 140 L 500 200 L 450 240 L 380 250 L 320 220 L 280 180 Z"
                fill={getStateColor('para')}
                stroke="#ffffff"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-300 hover:brightness-110 hover:drop-shadow-lg"
                onMouseEnter={() => setHoveredState('para')}
                onMouseLeave={() => setHoveredState(null)}
              />
            </DiscountSimulator>

            {/* Amapá */}
            <DiscountSimulator state={statesData.amapa.name} discount={statesData.amapa.discount}>
              <path
                id="amapa"
                d="M 520 80 L 580 70 L 590 110 L 570 140 L 520 140 Z"
                fill={getStateColor('amapa')}
                stroke="#ffffff"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-300 hover:brightness-110 hover:drop-shadow-lg"
                onMouseEnter={() => setHoveredState('amapa')}
                onMouseLeave={() => setHoveredState(null)}
              />
            </DiscountSimulator>

            {/* Maranhão */}
            <DiscountSimulator state={statesData.maranhao.name} discount={statesData.maranhao.discount}>
              <path
                id="maranhao"
                d="M 480 240 L 580 220 L 620 260 L 600 300 L 540 320 L 480 300 Z"
                fill={getStateColor('maranhao')}
                stroke="#ffffff"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-300 hover:brightness-110 hover:drop-shadow-lg"
                onMouseEnter={() => setHoveredState('maranhao')}
                onMouseLeave={() => setHoveredState(null)}
              />
            </DiscountSimulator>

            {/* Piauí */}
            <DiscountSimulator state={statesData.piaui.name} discount={statesData.piaui.discount}>
              <path
                id="piaui"
                d="M 540 320 L 600 300 L 620 340 L 600 380 L 560 400 L 520 380 Z"
                fill={getStateColor('piaui')}
                stroke="#ffffff"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-300 hover:brightness-110 hover:drop-shadow-lg"
                onMouseEnter={() => setHoveredState('piaui')}
                onMouseLeave={() => setHoveredState(null)}
              />
            </DiscountSimulator>

            {/* Ceará */}
            <DiscountSimulator state={statesData.ceara.name} discount={statesData.ceara.discount}>
              <path
                id="ceara"
                d="M 600 300 L 700 280 L 720 320 L 700 360 L 640 380 L 600 360 Z"
                fill={getStateColor('ceara')}
                stroke="#ffffff"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-300 hover:brightness-110 hover:drop-shadow-lg"
                onMouseEnter={() => setHoveredState('ceara')}
                onMouseLeave={() => setHoveredState(null)}
              />
            </DiscountSimulator>

            {/* Rio Grande do Norte */}
            <DiscountSimulator state={statesData['rio-grande-do-norte'].name} discount={statesData['rio-grande-do-norte'].discount}>
              <path
                id="rio-grande-do-norte"
                d="M 700 360 L 780 340 L 800 380 L 780 420 L 720 440 L 680 420 Z"
                fill={getStateColor('rio-grande-do-norte')}
                stroke="#ffffff"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-300 hover:brightness-110 hover:drop-shadow-lg"
                onMouseEnter={() => setHoveredState('rio-grande-do-norte')}
                onMouseLeave={() => setHoveredState(null)}
              />
            </DiscountSimulator>

            {/* Paraíba */}
            <DiscountSimulator state={statesData.paraiba.name} discount={statesData.paraiba.discount}>
              <path
                id="paraiba"
                d="M 680 420 L 760 400 L 780 440 L 760 480 L 700 500 L 660 480 Z"
                fill={getStateColor('paraiba')}
                stroke="#ffffff"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-300 hover:brightness-110 hover:drop-shadow-lg"
                onMouseEnter={() => setHoveredState('paraiba')}
                onMouseLeave={() => setHoveredState(null)}
              />
            </DiscountSimulator>

            {/* Pernambuco */}
            <DiscountSimulator state={statesData.pernambuco.name} discount={statesData.pernambuco.discount}>
              <path
                id="pernambuco"
                d="M 600 480 L 720 460 L 740 500 L 720 540 L 660 560 L 580 540 Z"
                fill={getStateColor('pernambuco')}
                stroke="#ffffff"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-300 hover:brightness-110 hover:drop-shadow-lg"
                onMouseEnter={() => setHoveredState('pernambuco')}
                onMouseLeave={() => setHoveredState(null)}
              />
            </DiscountSimulator>

            {/* Alagoas */}
            <DiscountSimulator state={statesData.alagoas.name} discount={statesData.alagoas.discount}>
              <path
                id="alagoas"
                d="M 660 560 L 720 540 L 740 580 L 720 620 L 680 640 L 640 620 Z"
                fill={getStateColor('alagoas')}
                stroke="#ffffff"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-300 hover:brightness-110 hover:drop-shadow-lg"
                onMouseEnter={() => setHoveredState('alagoas')}
                onMouseLeave={() => setHoveredState(null)}
              />
            </DiscountSimulator>

            {/* Sergipe */}
            <DiscountSimulator state={statesData.sergipe.name} discount={statesData.sergipe.discount}>
              <path
                id="sergipe"
                d="M 640 620 L 700 600 L 720 640 L 700 680 L 660 700 L 620 680 Z"
                fill={getStateColor('sergipe')}
                stroke="#ffffff"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-300 hover:brightness-110 hover:drop-shadow-lg"
                onMouseEnter={() => setHoveredState('sergipe')}
                onMouseLeave={() => setHoveredState(null)}
              />
            </DiscountSimulator>

            {/* Bahia */}
            <DiscountSimulator state={statesData.bahia.name} discount={statesData.bahia.discount}>
              <path
                id="bahia"
                d="M 480 400 L 600 380 L 640 420 L 620 500 L 580 540 L 520 560 L 460 540 L 440 480 Z"
                fill={getStateColor('bahia')}
                stroke="#ffffff"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-300 hover:brightness-110 hover:drop-shadow-lg"
                onMouseEnter={() => setHoveredState('bahia')}
                onMouseLeave={() => setHoveredState(null)}
              />
            </DiscountSimulator>

            {/* Tocantins */}
            <DiscountSimulator state={statesData.tocantins.name} discount={statesData.tocantins.discount}>
              <path
                id="tocantins"
                d="M 380 350 L 480 330 L 500 370 L 480 410 L 420 430 L 360 410 Z"
                fill={getStateColor('tocantins')}
                stroke="#ffffff"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-300 hover:brightness-110 hover:drop-shadow-lg"
                onMouseEnter={() => setHoveredState('tocantins')}
                onMouseLeave={() => setHoveredState(null)}
              />
            </DiscountSimulator>

            {/* Mato Grosso */}
            <DiscountSimulator state={statesData['mato-grosso'].name} discount={statesData['mato-grosso'].discount}>
              <path
                id="mato-grosso"
                d="M 250 350 L 380 330 L 400 370 L 380 430 L 320 450 L 230 430 Z"
                fill={getStateColor('mato-grosso')}
                stroke="#ffffff"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-300 hover:brightness-110 hover:drop-shadow-lg"
                onMouseEnter={() => setHoveredState('mato-grosso')}
                onMouseLeave={() => setHoveredState(null)}
              />
            </DiscountSimulator>

            {/* Rondônia */}
            <DiscountSimulator state={statesData.rondonia.name} discount={statesData.rondonia.discount}>
              <path
                id="rondonia"
                d="M 160 380 L 250 360 L 270 400 L 250 440 L 190 460 L 140 440 Z"
                fill={getStateColor('rondonia')}
                stroke="#ffffff"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-300 hover:brightness-110 hover:drop-shadow-lg"
                onMouseEnter={() => setHoveredState('rondonia')}
                onMouseLeave={() => setHoveredState(null)}
              />
            </DiscountSimulator>

            {/* Goiás */}
            <DiscountSimulator state={statesData.goias.name} discount={statesData.goias.discount}>
              <path
                id="goias"
                d="M 380 450 L 480 430 L 500 470 L 480 510 L 420 530 L 360 510 Z"
                fill={getStateColor('goias')}
                stroke="#ffffff"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-300 hover:brightness-110 hover:drop-shadow-lg"
                onMouseEnter={() => setHoveredState('goias')}
                onMouseLeave={() => setHoveredState(null)}
              />
            </DiscountSimulator>

            {/* Distrito Federal */}
            <DiscountSimulator state={statesData['distrito-federal'].name} discount={statesData['distrito-federal'].discount}>
              <circle
                id="distrito-federal"
                cx="450"
                cy="490"
                r="15"
                fill={getStateColor('distrito-federal')}
                stroke="#ffffff"
                strokeWidth="3"
                className="cursor-pointer transition-all duration-300 hover:brightness-110 hover:drop-shadow-lg"
                onMouseEnter={() => setHoveredState('distrito-federal')}
                onMouseLeave={() => setHoveredState(null)}
              />
            </DiscountSimulator>

            {/* Mato Grosso do Sul */}
            <DiscountSimulator state={statesData['mato-grosso-do-sul'].name} discount={statesData['mato-grosso-do-sul'].discount}>
              <path
                id="mato-grosso-do-sul"
                d="M 280 480 L 380 460 L 400 500 L 380 560 L 320 580 L 260 560 Z"
                fill={getStateColor('mato-grosso-do-sul')}
                stroke="#ffffff"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-300 hover:brightness-110 hover:drop-shadow-lg"
                onMouseEnter={() => setHoveredState('mato-grosso-do-sul')}
                onMouseLeave={() => setHoveredState(null)}
              />
            </DiscountSimulator>

            {/* Minas Gerais */}
            <DiscountSimulator state={statesData['minas-gerais'].name} discount={statesData['minas-gerais'].discount}>
              <path
                id="minas-gerais"
                d="M 480 530 L 580 510 L 620 550 L 600 590 L 540 610 L 460 590 L 440 550 Z"
                fill={getStateColor('minas-gerais')}
                stroke="#ffffff"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-300 hover:brightness-110 hover:drop-shadow-lg"
                onMouseEnter={() => setHoveredState('minas-gerais')}
                onMouseLeave={() => setHoveredState(null)}
              />
            </DiscountSimulator>

            {/* São Paulo */}
            <DiscountSimulator state={statesData['sao-paulo'].name} discount={statesData['sao-paulo'].discount}>
              <path
                id="sao-paulo"
                d="M 440 590 L 540 570 L 560 610 L 540 650 L 480 670 L 420 650 Z"
                fill={getStateColor('sao-paulo')}
                stroke="#ffffff"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-300 hover:brightness-110 hover:drop-shadow-lg"
                onMouseEnter={() => setHoveredState('sao-paulo')}
                onMouseLeave={() => setHoveredState(null)}
              />
            </DiscountSimulator>

            {/* Rio de Janeiro */}
            <DiscountSimulator state={statesData['rio-de-janeiro'].name} discount={statesData['rio-de-janeiro'].discount}>
              <path
                id="rio-de-janeiro"
                d="M 580 610 L 640 590 L 660 630 L 640 670 L 600 690 L 560 670 Z"
                fill={getStateColor('rio-de-janeiro')}
                stroke="#ffffff"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-300 hover:brightness-110 hover:drop-shadow-lg"
                onMouseEnter={() => setHoveredState('rio-de-janeiro')}
                onMouseLeave={() => setHoveredState(null)}
              />
            </DiscountSimulator>

            {/* Espírito Santo */}
            <DiscountSimulator state={statesData['espirito-santo'].name} discount={statesData['espirito-santo'].discount}>
              <path
                id="espirito-santo"
                d="M 620 550 L 680 530 L 700 570 L 680 610 L 640 630 L 600 610 Z"
                fill={getStateColor('espirito-santo')}
                stroke="#ffffff"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-300 hover:brightness-110 hover:drop-shadow-lg"
                onMouseEnter={() => setHoveredState('espirito-santo')}
                onMouseLeave={() => setHoveredState(null)}
              />
            </DiscountSimulator>

            {/* Paraná */}
            <DiscountSimulator state={statesData.parana.name} discount={statesData.parana.discount}>
              <path
                id="parana"
                d="M 380 590 L 480 570 L 500 610 L 480 650 L 420 670 L 360 650 Z"
                fill={getStateColor('parana')}
                stroke="#ffffff"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-300 hover:brightness-110 hover:drop-shadow-lg"
                onMouseEnter={() => setHoveredState('parana')}
                onMouseLeave={() => setHoveredState(null)}
              />
            </DiscountSimulator>

            {/* Santa Catarina */}
            <DiscountSimulator state={statesData['santa-catarina'].name} discount={statesData['santa-catarina'].discount}>
              <path
                id="santa-catarina"
                d="M 360 670 L 460 650 L 480 690 L 460 730 L 400 750 L 340 730 Z"
                fill={getStateColor('santa-catarina')}
                stroke="#ffffff"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-300 hover:brightness-110 hover:drop-shadow-lg"
                onMouseEnter={() => setHoveredState('santa-catarina')}
                onMouseLeave={() => setHoveredState(null)}
              />
            </DiscountSimulator>

            {/* Rio Grande do Sul */}
            <DiscountSimulator state={statesData['rio-grande-do-sul'].name} discount={statesData['rio-grande-do-sul'].discount}>
              <path
                id="rio-grande-do-sul"
                d="M 300 730 L 400 710 L 420 750 L 380 790 L 320 800 L 280 780 Z"
                fill={getStateColor('rio-grande-do-sul')}
                stroke="#ffffff"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-300 hover:brightness-110 hover:drop-shadow-lg"
                onMouseEnter={() => setHoveredState('rio-grande-do-sul')}
                onMouseLeave={() => setHoveredState(null)}
              />
            </DiscountSimulator>

            {/* Texto nos estados principais */}
            <text x="350" y="250" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">10%</text>
            <text x="550" y="270" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">15%</text>
            <text x="650" y="330" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">15%</text>
            <text x="550" y="470" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">15%</text>
            <text x="490" y="620" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">15%</text>
            <text x="350" y="740" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">25%</text>
          </svg>
        </div>

        {/* Legenda */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-solarien-primary/20 to-solarien-secondary/20 rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-solarien-primary rounded-full mr-3"></div>
              <span className="text-2xl font-bold text-white">até 45%</span>
            </div>
            <div className="text-white font-medium mb-2">DESCONTO</div>
            <div className="text-gray-300 text-sm">GRUPO A</div>
          </div>
          
          <div className="bg-gradient-to-r from-solarien-secondary/20 to-solarien-tertiary/20 rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-solarien-secondary rounded-full mr-3"></div>
              <span className="text-2xl font-bold text-white">até 25%</span>
            </div>
            <div className="text-white font-medium mb-2">DESCONTO</div>
            <div className="text-gray-300 text-sm">GRUPO B</div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">16 Estados + DF</p>
          <p className="text-solarien-primary font-bold text-lg mt-2">solarien.com.br</p>
        </div>
      </div>
    </div>
  );
};

export default InteractiveBrazilMap;
