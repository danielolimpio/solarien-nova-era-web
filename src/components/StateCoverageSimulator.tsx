import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Calculator, Percent, MapPin, Zap, Users, TrendingUp, CheckCircle, Building2 } from 'lucide-react';
import DiscountSimulator from './DiscountSimulator';

const StateCoverageSimulator = () => {
  const [selectedState, setSelectedState] = useState<string>('');
  const [showSimulator, setShowSimulator] = useState(false);

  const stateData: { [key: string]: { name: string; distributors: string[]; coverage: string; discount: string; mobileName?: string } } = {
    'ac': { name: 'Acre', distributors: ['Energisa'], coverage: '88%', discount: '15%' },
    'al': { name: 'Alagoas', distributors: ['Equatorial'], coverage: '85%', discount: '15%' },
    'ap': { name: 'Amapá', distributors: ['CEA'], coverage: '70%', discount: '12%' },
    'am': { name: 'Amazonas', distributors: ['Amazonas Energia'], coverage: '65%', discount: '10%' },
    'ba': { name: 'Bahia', distributors: ['Neoenergia'], coverage: '90%', discount: '15%' },
    'ce': { name: 'Ceará', distributors: ['Enel'], coverage: '92%', discount: '15%' },
    'df': { name: 'Distrito Federal', distributors: ['CEB'], coverage: '95%', discount: '15%' },
    'es': { name: 'Espírito Santo', distributors: ['EDP'], coverage: '88%', discount: '15%' },
    'go': { name: 'Goiás', distributors: ['Equatorial'], coverage: '87%', discount: '15%' },
    'ma': { name: 'Maranhão', distributors: ['Equatorial'], coverage: '82%', discount: '15%' },
    'mt': { name: 'Mato Grosso', distributors: ['Energisa'], coverage: '85%', discount: '15%' },
    'ms': { name: 'Mato Grosso do Sul', mobileName: 'MS', distributors: ['Energisa'], coverage: '83%', discount: '15%' },
    'mg': { name: 'Minas Gerais', distributors: ['Cemig'], coverage: '91%', discount: '15%' },
    'pa': { name: 'Pará', distributors: ['Equatorial'], coverage: '78%', discount: '15%' },
    'pb': { name: 'Paraíba', distributors: ['Energisa'], coverage: '86%', discount: '15%' },
    'pr': { name: 'Paraná', distributors: ['Copel'], coverage: '94%', discount: '15%' },
    'pe': { name: 'Pernambuco', distributors: ['Neoenergia'], coverage: '89%', discount: '15%' },
    'pi': { name: 'Piauí', distributors: ['Equatorial'], coverage: '80%', discount: '15%' },
    'rj': { name: 'Rio de Janeiro', distributors: ['Light'], coverage: '87%', discount: '15%' },
    'rn': { name: 'Rio Grande do Norte', mobileName: 'RN', distributors: ['Neoenergia'], coverage: '84%', discount: '15%' },
    'rs': { name: 'Rio Grande do Sul', distributors: ['RGE'], coverage: '89%', discount: '15%' },
    'ro': { name: 'Rondônia', distributors: ['Energisa'], coverage: '75%', discount: '12%' },
    'rr': { name: 'Roraima', distributors: ['RR Energia'], coverage: '60%', discount: '10%' },
    'sc': { name: 'Santa Catarina', distributors: ['Celesc'], coverage: '92%', discount: '15%' },
    'sp': { name: 'São Paulo', distributors: ['Enel', 'CPFL'], coverage: '93%', discount: '15%' },
    'se': { name: 'Sergipe', distributors: ['Energisa'], coverage: '87%', discount: '15%' },
    'to': { name: 'Tocantins', distributors: ['Energisa'], coverage: '81%', discount: '15%' }
  };

  const handleStateSelect = (stateId: string) => {
    setSelectedState(stateId);
  };

  const handleSimulate = () => {
    if (selectedState) {
      setShowSimulator(true);
    }
  };

  const getStateColor = (stateId: string) => {
    if (!stateData[stateId]) return 'bg-gray-400';
    const coverage = parseInt(stateData[stateId].coverage.replace('%', ''));
    if (coverage >= 90) return 'bg-gradient-to-br from-[#00844e] to-[#02ff91]';
    if (coverage >= 80) return 'bg-gradient-to-br from-[#02ff91] to-[#00844e]';
    if (coverage >= 70) return 'bg-gradient-to-br from-yellow-500 to-orange-500';
    return 'bg-gradient-to-br from-red-500 to-red-600';
  };

  const getDisplayName = (stateId: string) => {
    const state = stateData[stateId];
    return state?.mobileName || state?.name || stateId.toUpperCase();
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Card className="bg-gradient-to-br from-gray-50 to-white border-2 border-[#00844e]/20 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-[#00844e]/5 to-[#02ff91]/5 border-b border-[#00844e]/10">
          <CardTitle className="text-[#00844e] text-3xl flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-[#00844e] to-[#02ff91] rounded-full">
              <Calculator className="w-8 h-8" style={{ color: '#015c3b' }} />
            </div>
            Simulador Nacional de Energia Solar
          </CardTitle>
        </CardHeader>
        
        <CardContent className="p-8">
          {/* Coverage Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-gradient-to-br from-[#00844e]/10 to-[#02ff91]/10 rounded-2xl border border-[#00844e]/20">
              <div className="p-3 bg-gradient-to-br from-[#00844e] to-[#02ff91] rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Percent className="w-6 h-6" style={{ color: '#015c3b' }} />
              </div>
              <div className="text-3xl font-bold text-[#00844e] mb-1">15%</div>
              <div className="text-gray-600 font-medium">Desconto Garantido</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-[#02ff91]/10 to-[#00844e]/10 rounded-2xl border border-[#02ff91]/20">
              <div className="p-3 bg-gradient-to-br from-[#02ff91] to-[#00844e] rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <MapPin className="w-6 h-6" style={{ color: '#015c3b' }} />
              </div>
              <div className="text-3xl font-bold text-[#02ff91] mb-1">17</div>
              <div className="text-gray-600 font-medium">Estados Cobertos</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-[#00844e]/10 to-[#02ff91]/10 rounded-2xl border border-[#00844e]/20">
              <div className="p-3 bg-gradient-to-br from-[#00844e] to-[#02ff91] rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Zap className="w-6 h-6" style={{ color: '#015c3b' }} />
              </div>
              <div className="text-3xl font-bold text-[#00844e] mb-1">23</div>
              <div className="text-gray-600 font-medium">Distribuidoras</div>
            </div>
          </div>

          {/* State Selection Grid */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Selecione seu Estado
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
              {Object.entries(stateData).map(([stateId, data]) => (
                <button
                  key={stateId}
                  onClick={() => handleStateSelect(stateId)}
                  className={`
                    ${getStateColor(stateId)}
                    ${selectedState === stateId ? 'ring-4 ring-[#00844e] ring-opacity-50 scale-105' : ''}
                    text-white font-bold p-3 rounded-xl shadow-lg hover:shadow-xl 
                    transform hover:scale-105 transition-all duration-200 
                    text-xs sm:text-sm aspect-square flex items-center justify-center
                    min-h-[60px] sm:min-h-[70px]
                  `}
                >
                  <span className="text-center leading-tight">
                    {getDisplayName(stateId)}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Selected State Info */}
          {selectedState && stateData[selectedState] && (
            <div className="bg-gradient-to-r from-[#00844e]/10 to-[#02ff91]/10 border-2 border-[#00844e]/20 rounded-2xl p-6 mb-6">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-[#00844e] mb-2">
                  {stateData[selectedState].name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#00844e]">
                      {stateData[selectedState].coverage}
                    </div>
                    <div className="text-sm text-gray-600">Cobertura</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#02ff91]">
                      {stateData[selectedState].discount}
                    </div>
                    <div className="text-sm text-gray-600">Desconto</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#00844e]">
                      {stateData[selectedState].distributors.length}
                    </div>
                    <div className="text-sm text-gray-600">Distribuidoras</div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h4 className="text-gray-700 font-semibold mb-2">Distribuidoras Disponíveis:</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {stateData[selectedState].distributors.map((distributor, index) => (
                      <Badge key={index} variant="secondary" className="bg-[#00844e]/20 text-[#00844e]">
                        {distributor}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button
                  onClick={handleSimulate}
                  className="bg-gradient-to-r from-[#00844e] to-[#02ff91] text-white font-bold py-3 px-8 text-lg rounded-xl hover:shadow-xl hover:shadow-[#00844e]/30 transition-all duration-300 hover:scale-105"
                >
                  Simular Economia
                </Button>
              </div>
            </div>
          )}

          {/* Simulator */}
          {showSimulator && selectedState && (
            <div className="mt-8">
              <DiscountSimulator>
                <div className="text-center mb-4">
                  <h3 className="text-[#00844e] text-xl font-bold">
                    Simule sua economia em {stateData[selectedState].name}
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Desconto garantido de {stateData[selectedState].discount} na sua conta de luz
                  </p>
                </div>
              </DiscountSimulator>
            </div>
          )}

          {/* Additional Stats */}
          <div className="grid md:grid-cols-4 gap-4 mt-8">
            <div className="text-center p-4 bg-gradient-to-br from-[#00844e]/5 to-[#02ff91]/5 rounded-xl border border-[#00844e]/10">
              <Users className="w-8 h-8 text-[#00844e] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[#00844e]">2.5M+</div>
              <div className="text-sm text-gray-600">Conexões Ativas</div>
            </div>
            
            <div className="text-center p-4 bg-gradient-to-br from-[#02ff91]/5 to-[#00844e]/5 rounded-xl border border-[#02ff91]/10">
              <Zap className="w-8 h-8 text-[#02ff91] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[#02ff91]">24 GW</div>
              <div className="text-sm text-gray-600">Potência Instalada</div>
            </div>

            <div className="text-center p-4 bg-gradient-to-br from-[#00844e]/5 to-[#02ff91]/5 rounded-xl border border-[#00844e]/10">
              <TrendingUp className="w-8 h-8 text-[#00844e] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[#00844e]">156%</div>
              <div className="text-sm text-gray-600">Crescimento 2023</div>
            </div>

            <div className="text-center p-4 bg-gradient-to-br from-[#02ff91]/5 to-[#00844e]/5 rounded-xl border border-[#02ff91]/10">
              <CheckCircle className="w-8 h-8 text-[#02ff91] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[#02ff91]">27</div>
              <div className="text-sm text-gray-600">Estados + DF</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StateCoverageSimulator;
