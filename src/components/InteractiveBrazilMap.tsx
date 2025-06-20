import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { MapPin, Zap, TrendingUp, Users, Building2, CheckCircle } from 'lucide-react';
import DiscountSimulator from './DiscountSimulator';

const InteractiveBrazilMap = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [showSimulator, setShowSimulator] = useState(false);

  const stateData: { [key: string]: { name: string; distributors: string[]; coverage: string; discount: string } } = {
    'sp': { name: 'São Paulo', distributors: ['CPFL', 'Elektro', 'Energisa'], coverage: '85%', discount: '15%' },
    'rj': { name: 'Rio de Janeiro', distributors: ['Light', 'Enel'], coverage: '75%', discount: '12%' },
    'mg': { name: 'Minas Gerais', distributors: ['Cemig', 'Energisa'], coverage: '80%', discount: '15%' },
    'pr': { name: 'Paraná', distributors: ['Copel', 'Energisa'], coverage: '90%', discount: '15%' },
    'sc': { name: 'Santa Catarina', distributors: ['Celesc'], coverage: '70%', discount: '15%' },
    'rs': { name: 'Rio Grande do Sul', distributors: ['RGE', 'CEEE'], coverage: '65%', discount: '10%' },
    'ba': { name: 'Bahia', distributors: ['Coelba'], coverage: '88%', discount: '15%' },
    'go': { name: 'Goiás', distributors: ['Equatorial'], coverage: '85%', discount: '15%' },
    'mt': { name: 'Mato Grosso', distributors: ['Energisa'], coverage: '82%', discount: '15%' },
    'ms': { name: 'Mato Grosso do Sul', distributors: ['Energisa'], coverage: '80%', discount: '15%' },
    'ce': { name: 'Ceará', distributors: ['Enel'], coverage: '78%', discount: '15%' },
    'pe': { name: 'Pernambuco', distributors: ['Celpe'], coverage: '85%', discount: '15%' },
    'pb': { name: 'Paraíba', distributors: ['Energisa'], coverage: '75%', discount: '12%' },
    'rn': { name: 'Rio Grande do Norte', distributors: ['Cosern'], coverage: '80%', discount: '15%' },
    'al': { name: 'Alagoas', distributors: ['Equatorial'], coverage: '70%', discount: '10%' },
    'se': { name: 'Sergipe', distributors: ['Energisa'], coverage: '85%', discount: '15%' },
    'pi': { name: 'Piauí', distributors: ['Equatorial'], coverage: '75%', discount: '15%' },
    'ma': { name: 'Maranhão', distributors: ['Equatorial'], coverage: '80%', discount: '15%' },
    'pa': { name: 'Pará', distributors: ['Equatorial'], coverage: '85%', discount: '15%' },
    'to': { name: 'Tocantins', distributors: ['Energisa'], coverage: '90%', discount: '15%' },
    'df': { name: 'Distrito Federal', distributors: ['CEB'], coverage: '95%', discount: '15%' },
  };

  const handleStateClick = (stateId: string) => {
    setSelectedState(stateId);
    setShowSimulator(true);
  };

  const getStateColor = (stateId: string) => {
    if (!stateData[stateId]) return '#4a5568';
    const coverage = parseInt(stateData[stateId].coverage.replace('%', ''));
    if (coverage >= 80) return '#10b981';
    if (coverage >= 60) return '#f59e0b';
    return '#ef4444';
  };

  return (
    <div className="w-full">
      <Card className="bg-gradient-to-br from-green-800/20 to-green-900/20 border-green-700">
        <CardHeader>
          <CardTitle className="text-solarien-primary text-3xl flex items-center gap-3">
            <MapPin className="w-10 h-10" />
            Mapa Interativo do Brasil
          </CardTitle>
          <CardDescription className="text-gray-300 text-lg">
            Clique em um estado para ver a cobertura de energia solar
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Map Container */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8">
            <svg
              viewBox="0 0 1000 700"
              className="w-full h-auto max-h-96 cursor-pointer"
              style={{ filter: 'drop-shadow(0 0 10px rgba(16, 185, 129, 0.3))' }}
            >
              {/* Simplified Brazil Map - Adding clickable states */}
              {Object.entries(stateData).map(([stateId, data]) => (
                <g key={stateId}>
                  {/* Placeholder rectangles for states - in a real implementation, you'd use proper SVG paths */}
                  <rect
                    x={Math.random() * 800 + 50}
                    y={Math.random() * 500 + 50}
                    width="80"
                    height="60"
                    fill={getStateColor(stateId)}
                    stroke="#1f2937"
                    strokeWidth="2"
                    className="hover:opacity-80 transition-opacity cursor-pointer"
                    onClick={() => handleStateClick(stateId)}
                  />
                  <text
                    x={Math.random() * 800 + 90}
                    y={Math.random() * 500 + 85}
                    className="fill-white text-xs font-semibold pointer-events-none"
                    textAnchor="middle"
                  >
                    {stateId.toUpperCase()}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-sm text-gray-300">Alta Cobertura (80%+)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-500 rounded"></div>
              <span className="text-sm text-gray-300">Média Cobertura (60-79%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span className="text-sm text-gray-300">Baixa Cobertura (&lt;60%)</span>
            </div>
          </div>

          {/* Selected State Info */}
          {selectedState && stateData[selectedState] && (
            <Card className="bg-gradient-to-br from-solarien-primary/10 to-solarien-secondary/10 border-solarien-primary/30">
              <CardHeader>
                <CardTitle className="text-solarien-primary flex items-center gap-2">
                  <Building2 className="w-6 h-6" />
                  {stateData[selectedState].name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-solarien-primary">
                      {stateData[selectedState].coverage}
                    </div>
                    <div className="text-sm text-gray-300">Cobertura</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-solarien-secondary">
                      {stateData[selectedState].discount}
                    </div>
                    <div className="text-sm text-gray-300">Desconto</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-solarien-tertiary">
                      {stateData[selectedState].distributors.length}
                    </div>
                    <div className="text-sm text-gray-300">Distribuidoras</div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Distribuidoras Disponíveis:</h4>
                  <div className="flex flex-wrap gap-2">
                    {stateData[selectedState].distributors.map((distributor, index) => (
                      <Badge key={index} variant="secondary" className="bg-solarien-primary/20 text-solarien-primary">
                        {distributor}
                      </Badge>
                    ))}
                  </div>
                </div>

                {showSimulator && (
                  <div className="mt-6">
                    <DiscountSimulator>
                      <div className="text-center mb-4">
                        <h3 className="text-solarien-primary text-xl font-bold">
                          Simule sua economia em {stateData[selectedState].name}
                        </h3>
                      </div>
                    </DiscountSimulator>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Coverage Statistics */}
          <div className="grid md:grid-cols-4 gap-4">
            <Card className="bg-gradient-to-br from-solarien-primary/10 to-solarien-secondary/10 border-solarien-primary/30">
              <CardContent className="text-center p-6">
                <Users className="w-8 h-8 text-solarien-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-solarien-primary">2.5M+</div>
                <div className="text-sm text-gray-300">Conexões Ativas</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-solarien-secondary/10 to-solarien-tertiary/10 border-solarien-secondary/30">
              <CardContent className="text-center p-6">
                <Zap className="w-8 h-8 text-solarien-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold text-solarien-secondary">24 GW</div>
                <div className="text-sm text-gray-300">Potência Instalada</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-solarien-tertiary/10 to-solarien-primary/10 border-solarien-tertiary/30">
              <CardContent className="text-center p-6">
                <TrendingUp className="w-8 h-8 text-solarien-tertiary mx-auto mb-2" />
                <div className="text-2xl font-bold text-solarien-tertiary">156%</div>
                <div className="text-sm text-gray-300">Crescimento 2023</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-solarien-primary/10 to-solarien-secondary/10 border-solarien-primary/30">
              <CardContent className="text-center p-6">
                <CheckCircle className="w-8 h-8 text-solarien-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-solarien-primary">21</div>
                <div className="text-sm text-gray-300">Estados Cobertos</div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InteractiveBrazilMap;
