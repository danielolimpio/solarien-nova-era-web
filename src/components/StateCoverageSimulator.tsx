

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { MapPin, Zap, Calculator, TrendingDown, Building, Target, Award, Home, Store, Tractor, Factory, Lightbulb, HelpCircle, Circle, Percent, Clock, Calendar } from 'lucide-react';

const StateCoverageSimulator = () => {
  const [selectedState, setSelectedState] = useState('');
  const [billValue, setBillValue] = useState('');
  const [showResult, setShowResult] = useState(false);

  const stateData = {
    'Bahia': {
      distributors: [{ name: 'Coelba (Neoenergia)', discount: 15 }]
    },
    'Distrito Federal': {
      distributors: [{ name: 'CEB (Neoenergia)', discount: 15 }]
    },
    'Ceará': {
      distributors: [{ name: 'Enel', discount: 15 }]
    },
    'Goiás': {
      distributors: [{ name: 'Equatorial', discount: 15 }]
    },
    'Maranhão': {
      distributors: [{ name: 'Equatorial', discount: 15 }]
    },
    'Mato Grosso': {
      distributors: [{ name: 'Energisa', discount: 15 }]
    },
    'Mato Grosso do Sul': {
      distributors: [{ name: 'Energisa', discount: 15 }]
    },
    'Minas Gerais': {
      distributors: [
        { name: 'Cemig', discount: 15 },
        { name: 'Energisa', discount: 15 }
      ]
    },
    'Pará': {
      distributors: [{ name: 'Equatorial', discount: 15 }]
    },
    'Paraná': {
      distributors: [
        { name: 'Copel', discount: 15 },
        { name: 'Energisa', discount: 15 }
      ]
    },
    'Pernambuco': {
      distributors: [{ name: 'Celpe (Neoenergia)', discount: 15 }]
    },
    'Piauí': {
      distributors: [{ name: 'Equatorial', discount: 15 }]
    },
    'Rio Grande do Norte': {
      distributors: [{ name: 'Cosern (Neoenergia)', discount: 15 }]
    },
    'Santa Catarina': {
      distributors: [{ name: 'Celesc', discount: 15 }]
    },
    'São Paulo': {
      distributors: [
        { name: 'CPFL Paulista', discount: 15 },
        { name: 'Elektro (Neoenergia)', discount: 15 },
        { name: 'Energisa', discount: 15 },
        { name: 'Copel', discount: 15 }
      ]
    },
    'Sergipe': {
      distributors: [{ name: 'Energisa', discount: 15 }]
    },
    'Tocantins': {
      distributors: [{ name: 'Energisa', discount: 15 }]
    }
  };

  // Function to get display name for states (abbreviated for mobile)
  const getStateDisplayName = (state: string) => {
    if (state === 'Mato Grosso do Sul') return 'Mato G. do Sul';
    if (state === 'Rio Grande do Norte') return 'Rio G. do Norte';
    return state;
  };

  const calculateEconomy = () => {
    const value = parseFloat(billValue.replace(',', '.'));
    if (value && value > 0 && selectedState) {
      setShowResult(true);
    }
  };

  const resetSimulator = () => {
    setBillValue('');
    setShowResult(false);
  };

  const handleWhatsAppContact = () => {
    const value = parseFloat(billValue.replace(',', '.'));
    const discountAmount = value * 0.15;
    const phoneNumber = '+5511997361698';
    const message = `Olá! Gostaria de contratar energia solar em ${selectedState}. Simulei uma economia de R$ ${discountAmount.toFixed(2).replace('.', ',')} mensais na minha conta de luz.`;
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const billValueNum = parseFloat(billValue.replace(',', '.')) || 0;
  const discountAmount = billValueNum * 0.15;
  const newBillValue = billValueNum - discountAmount;
  const yearlyEconomy = discountAmount * 12;

  return (
    <TooltipProvider>
      <Card className="bg-gradient-to-br from-white to-gray-50 border-2 border-[#00844e]/20 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-[#00844e]/5 to-[#02ff91]/5 border-b border-[#00844e]/10">
          <CardTitle className="text-[#00844e] text-3xl flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-[#00844e] to-[#02ff91] rounded-full">
              <Calculator className="w-8 h-8" style={{ color: '#015c3b' }} />
            </div>
            Simulador Nacional de Energia Solar
          </CardTitle>
          <CardDescription className="text-gray-600 text-lg">
            Descubra sua economia com energia solar - Cobertura em 17 estados do Brasil
            <br />
            <span className="font-semibold text-[#00844e] flex items-center gap-2 mt-2">
              <Home className="w-4 h-4" />
              Grupo B - Baixa Tensão (Residências, Comércios, Rural e Iluminação Pública)
              <Store className="w-4 h-4" />
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8 space-y-8">
          {/* Hero Stats */}
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

          {/* Detailed Group Information */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-200 rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Classificação dos Consumidores de Energia Elétrica</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="bg-white/80 rounded-xl p-4 border border-blue-100 cursor-help hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <div className="p-2 bg-blue-100 rounded-full">
                        <Building className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="font-bold text-gray-800">A</div>
                    </div>
                    <div className="text-sm text-gray-700 font-semibold mb-1">Alta e Média Tensão</div>
                    <div className="text-xs text-gray-600 mb-1">Desconto até 45%</div>
                    <div className="text-xs text-blue-600 font-medium">💬 Consulte representante</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm">Grandes indústrias, shoppings, universidades, mineradoras, redes de hospitais.</p>
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="bg-white/80 rounded-xl p-4 border border-green-100 cursor-help hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      <div className="p-2 bg-green-100 rounded-full">
                        <Home className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="font-bold text-gray-800">B1</div>
                    </div>
                    <div className="text-sm text-gray-700 font-semibold mb-1">Residencial</div>
                    <div className="text-xs text-gray-600">✅ Simulação disponível</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm">Residências urbanas, apartamentos, condomínios.</p>
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="bg-white/80 rounded-xl p-4 border border-yellow-100 cursor-help hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                      <div className="p-2 bg-yellow-100 rounded-full">
                        <Tractor className="w-5 h-5 text-yellow-600" />
                      </div>
                      <div className="font-bold text-gray-800">B2</div>
                    </div>
                    <div className="text-sm text-gray-700 font-semibold mb-1">Rural</div>
                    <div className="text-xs text-gray-600">✅ Simulação disponível</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm">Sítios, fazendas, agroindústrias, cooperativas rurais.</p>
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="bg-white/80 rounded-xl p-4 border border-orange-100 cursor-help hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                      <div className="p-2 bg-orange-100 rounded-full">
                        <Store className="w-5 h-5 text-orange-600" />
                      </div>
                      <div className="font-bold text-gray-800">B3</div>
                    </div>
                    <div className="text-sm text-gray-700 font-semibold mb-1">Demais Classes</div>
                    <div className="text-xs text-gray-600">✅ Simulação disponível</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm">Pequenos comércios, padarias, salões, escolas particulares.</p>
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="bg-white/80 rounded-xl p-4 border border-red-100 cursor-help hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                      <div className="p-2 bg-red-100 rounded-full">
                        <Lightbulb className="w-5 h-5 text-red-600" />
                      </div>
                      <div className="font-bold text-gray-800">B4a</div>
                    </div>
                    <div className="text-sm text-gray-700 font-semibold mb-1">Iluminação Pública</div>
                    <div className="text-xs text-gray-600">✅ Simulação disponível</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm">Postes de luz, praças públicas, túneis.</p>
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="bg-white/80 rounded-xl p-4 border border-purple-100 cursor-help hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                      <div className="p-2 bg-purple-100 rounded-full">
                        <Factory className="w-5 h-5 text-purple-600" />
                      </div>
                      <div className="font-bold text-gray-800">B4b</div>
                    </div>
                    <div className="text-sm text-gray-700 font-semibold mb-1">Serviços Públicos</div>
                    <div className="text-xs text-gray-600">✅ Simulação disponível</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm">Semáforos, câmeras de segurança, fontes luminosas públicas.</p>
                </TooltipContent>
              </Tooltip>
            </div>
            
            <div className="text-center mt-4 p-3 bg-gradient-to-r from-[#00844e]/10 to-[#02ff91]/10 rounded-lg border border-[#00844e]/20">
              <p className="text-sm text-gray-700 font-medium">
                ⚡ <strong>Desconto de 15%</strong> aplicável a todos os subgrupos do Grupo B (Baixa Tensão)
              </p>
            </div>
          </div>

          {/* State Selection Grid */}
          <div>
            <h3 className="text-gray-800 text-2xl font-bold mb-6 flex items-center gap-3">
              <Target className="w-7 h-7 text-[#00844e]" />
              Selecione seu Estado
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {Object.keys(stateData).sort().map((state) => (
                <Button
                  key={state}
                  variant={selectedState === state ? "default" : "outline"}
                  onClick={() => {
                    setSelectedState(state);
                    setShowResult(false);
                  }}
                  className={`h-auto p-4 text-left transition-all duration-300 hover:scale-105 ${
                    selectedState === state
                      ? 'bg-gradient-to-r from-[#00844e] to-[#02ff91] text-white shadow-lg shadow-[#00844e]/25'
                      : 'bg-[#00844e] text-[#02ff91] border-2 border-[#00844e]/20 hover:bg-[#00844e]/90 hover:border-[#00844e]/40'
                  }`}
                >
                  <div className="w-full">
                    <div className="font-bold text-sm mb-1">{getStateDisplayName(state)}</div>
                    <div className="text-xs opacity-80">
                      {stateData[state as keyof typeof stateData].distributors.length} distribuidora{stateData[state as keyof typeof stateData].distributors.length > 1 ? 's' : ''}
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </div>

          {/* Selected State Details */}
          {selectedState && (
            <div className="bg-gradient-to-br from-[#00844e]/5 to-[#02ff91]/5 rounded-2xl p-8 border-2 border-[#00844e]/20 shadow-lg">
              <h4 className="text-gray-800 text-2xl font-bold mb-6 flex items-center gap-3">
                <MapPin className="w-7 h-7 text-[#00844e]" />
                {selectedState}
              </h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="text-[#00844e] font-bold text-lg mb-3">Distribuidoras Disponíveis:</h5>
                  <div className="flex flex-wrap gap-3">
                    {stateData[selectedState as keyof typeof stateData].distributors.map((distributor, index) => (
                      <Badge key={index} className="bg-gradient-to-r from-[#00844e] to-[#02ff91] text-white px-4 py-2 text-sm font-semibold">
                        {distributor.name} - {distributor.discount}% desconto
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Simulator Section */}
                {!showResult ? (
                  <div className="space-y-6 bg-white/70 rounded-xl p-6 border border-[#00844e]/20">
                    <h5 className="text-gray-800 font-bold text-xl flex items-center gap-3">
                      <Calculator className="w-6 h-6 text-[#00844e]" />
                      Simule sua Economia - Grupo B (B1, B2, B3, B4)
                    </h5>
                    
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-xl p-4">
                      <p className="text-sm text-yellow-800 font-medium">
                        <strong>💡 Dica importante:</strong> Digite o valor médio anual da sua conta de luz dos últimos 12 meses para uma simulação mais precisa.
                        <br />
                        <span className="text-xs mt-1 block">
                          ⚡ Válido para todos os subgrupos do Grupo B: B1 (Residencial), B2 (Rural), B3 (Comércio/Serviços), B4 (Iluminação Pública)
                        </span>
                      </p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">
                        Valor médio da sua conta de luz (R$) - Grupo B
                      </label>
                      <Input
                        type="number"
                        placeholder="Ex: 350,00"
                        value={billValue}
                        onChange={(e) => setBillValue(e.target.value)}
                        className="text-xl text-center border-2 border-[#00844e]/30 focus:border-[#00844e] bg-white h-14 text-gray-800 placeholder-gray-400 font-semibold"
                        min="0"
                        step="0.01"
                      />
                    </div>

                    <Button 
                      onClick={calculateEconomy}
                      disabled={!billValue || parseFloat(billValue.replace(',', '.')) <= 0}
                      className="w-full bg-gradient-to-r from-[#00844e] to-[#02ff91] text-white font-bold py-4 text-lg rounded-xl hover:shadow-xl hover:shadow-[#00844e]/30 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Zap className="w-6 h-6 mr-3" />
                      Calcular Minha Economia - Grupo B
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-6 bg-white/70 rounded-xl p-6 border border-[#00844e]/20">
                    <div className="text-center">
                      <div className="inline-flex p-4 bg-gradient-to-br from-[#00844e] to-[#02ff91] rounded-full mb-4">
                        <TrendingDown className="w-12 h-12 text-white" />
                      </div>
                      <h5 className="text-2xl font-bold text-[#00844e] mb-2">
                        🎉 Sua Economia em {selectedState}
                      </h5>
                      <p className="text-gray-600">Grupo B - 15% de desconto garantido (B1, B2, B3, B4)</p>
                    </div>

                    <div className="bg-gradient-to-br from-[#00844e]/10 to-[#02ff91]/10 rounded-2xl p-8 space-y-6 border border-[#00844e]/20">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="text-center p-4 bg-white/80 rounded-xl">
                          <div className="text-sm text-gray-600 font-semibold mb-2">Conta Atual</div>
                          <div className="text-2xl font-bold text-gray-800">
                            R$ {billValueNum.toFixed(2).replace('.', ',')}
                          </div>
                        </div>
                        <div className="text-center p-4 bg-white/80 rounded-xl">
                          <div className="text-sm text-gray-600 font-semibold mb-2">Nova Conta</div>
                          <div className="text-2xl font-bold text-[#00844e]">
                            R$ {newBillValue.toFixed(2).replace('.', ',')}
                          </div>
                        </div>
                      </div>

                      <div className="text-center border-t-2 border-[#00844e]/20 pt-6">
                        <div className="text-lg text-gray-600 font-semibold mb-2">💰 Economia Mensal</div>
                        <div className="text-4xl font-bold bg-gradient-to-r from-[#00844e] to-[#02ff91] bg-clip-text text-transparent mb-2">
                          R$ {discountAmount.toFixed(2).replace('.', ',')}
                        </div>
                        <div className="text-lg text-[#00844e] font-bold">Grupo B - 15% de desconto</div>
                      </div>

                      <div className="text-center bg-gradient-to-r from-[#00844e]/20 to-[#02ff91]/20 rounded-2xl p-6 border border-[#00844e]/30">
                        <div className="text-lg text-gray-700 font-semibold mb-2">🎯 Economia Anual</div>
                        <div className="text-5xl font-bold bg-gradient-to-r from-[#00844e] to-[#02ff91] bg-clip-text text-transparent animate-pulse">
                          R$ {yearlyEconomy.toFixed(2).replace('.', ',')}
                        </div>
                        <div className="text-sm text-gray-600 mt-2">Valor que você economizará em 12 meses</div>
                      </div>

                      <div className="bg-gradient-to-r from-[#00844e]/10 to-[#02ff91]/10 rounded-xl p-4 border border-[#00844e]/20">
                        <h6 className="text-gray-800 font-bold mb-3 flex items-center gap-2">
                          <Building className="w-5 h-5 text-[#00844e]" />
                          Distribuidoras em {selectedState}:
                        </h6>
                        <div className="space-y-2">
                          {stateData[selectedState as keyof typeof stateData].distributors.map((distributor, index) => (
                            <div key={index} className="text-sm text-gray-700 flex items-center gap-2">
                              <div className="w-2 h-2 bg-[#00844e] rounded-full"></div>
                              <span className="font-medium">{distributor.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button 
                        onClick={resetSimulator}
                        variant="outline"
                        className="flex-1 border-2 border-[#00844e]/30 text-[#00844e] hover:bg-[#00844e]/5 font-bold py-3"
                      >
                        Nova Simulação
                      </Button>
                      <Button 
                        className="flex-1 bg-gradient-to-r from-[#00844e] to-[#02ff91] text-white font-bold py-3 hover:shadow-xl hover:shadow-[#00844e]/30 transition-all duration-300"
                        onClick={handleWhatsAppContact}
                      >
                        💬 Contratar Agora
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Coverage Summary */}
          <div className="bg-gradient-to-r from-[#00844e]/5 to-[#02ff91]/5 rounded-2xl p-8 border-2 border-[#00844e]/20">
            <h4 className="text-[#00844e] text-2xl font-bold mb-6 text-center">🇧🇷 Cobertura Nacional - Grupo B (B1, B2, B3, B4)</h4>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-white/70 rounded-xl">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#02ff91] via-[#00c26f] to-[#00844e] bg-clip-text text-transparent mb-2">{"< 2,3"}</div>
                <div className="text-gray-600 font-semibold">kV Tensão nominal</div>
              </div>
              <div className="text-center p-4 bg-white/70 rounded-xl">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#02ff91] via-[#00c26f] to-[#00844e] bg-clip-text text-transparent mb-2">12</div>
                <div className="text-gray-600 font-semibold">Meses Fidelidade</div>
              </div>
              <div className="text-center p-4 bg-white/70 rounded-xl">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#02ff91] via-[#00c26f] to-[#00844e] bg-clip-text text-transparent mb-2">150kWh</div>
                <div className="text-gray-600 font-semibold">Consumo Mínimo por mês</div>
              </div>
              <div className="text-center p-4 bg-white/70 rounded-xl">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#02ff91] via-[#00c26f] to-[#00844e] bg-clip-text text-transparent mb-2">90 dias</div>
                <div className="text-gray-600 font-semibold">Início da Injeção</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
};

export default StateCoverageSimulator;

