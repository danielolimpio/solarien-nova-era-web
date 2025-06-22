
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { MapPin, Zap, Calculator, TrendingDown, Building, Target, Award, Percent, Clock, Calendar, HelpCircle, Circle, Check, X } from 'lucide-react';

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

  const energyGroups = [
    {
      id: 'grupo-a',
      title: 'Grupo A',
      clientType: 'Empresas e Indústrias',
      color: 'blue',
      icon: '🟢',
      tooltip: 'Grandes indústrias, shoppings, universidades, mineradoras, redes de hospitais.',
      allowsSimulation: false,
      discount: 'até 45%'
    },
    {
      id: 'grupo-b1',
      title: 'Grupo B1',
      clientType: 'Casas e Apartamentos',
      color: 'green',
      icon: '🟢',
      tooltip: 'Residências urbanas, apartamentos, condomínios.',
      allowsSimulation: true,
      discount: 'até 25%'
    },
    {
      id: 'grupo-b2',
      title: 'Grupo B2',
      clientType: 'Propriedades Rurais',
      color: 'green',
      icon: '🟢',
      tooltip: 'Sítios, fazendas, agroindústrias, cooperativas rurais.',
      allowsSimulation: true,
      discount: 'até 25%'
    },
    {
      id: 'grupo-b3',
      title: 'Grupo B3',
      clientType: 'Comércio e Serviços',
      color: 'green',
      icon: '🟢',
      tooltip: 'Pequenos comércios, padarias, salões, escolas particulares.',
      allowsSimulation: true,
      discount: 'até 25%'
    },
    {
      id: 'grupo-b4a',
      title: 'Grupo B4a',
      clientType: 'Iluminação pública',
      color: 'green',
      icon: '🟢',
      tooltip: 'Postes de luz, praças públicas, túneis.',
      allowsSimulation: true,
      discount: 'até 25%'
    },
    {
      id: 'grupo-b4b',
      title: 'Grupo B4b',
      clientType: 'Serviços públicos',
      color: 'green',
      icon: '🟢',
      tooltip: 'Semáforos, câmeras de segurança, fontes luminosas públicas.',
      allowsSimulation: true,
      discount: 'até 25%'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'border-blue-200 bg-blue-50 text-blue-800',
      green: 'border-green-200 bg-green-50 text-green-800',
      yellow: 'border-yellow-200 bg-yellow-50 text-yellow-800',
      orange: 'border-orange-200 bg-orange-50 text-orange-800',
      red: 'border-red-200 bg-red-50 text-red-800',
      purple: 'border-purple-200 bg-purple-50 text-purple-800'
    };
    return colorMap[color as keyof typeof colorMap] || 'border-gray-200 bg-gray-50 text-gray-800';
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
      <Card className="bg-gradient-to-br from-white to-gray-50 border-2 border-[#00844e]/20 shadow-2xl mx-2 sm:mx-4 lg:mx-8">
        <CardHeader className="bg-gradient-to-r from-[#00844e]/5 to-[#02ff91]/5 border-b border-[#00844e]/10 p-4 sm:p-6">
          <CardTitle className="text-[#00844e] text-xl sm:text-2xl lg:text-3xl flex items-center gap-2 sm:gap-3">
            <div className="p-1.5 sm:p-2 bg-gradient-to-br from-[#00844e] to-[#02ff91] rounded-full">
              <Calculator className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" style={{ color: '#015c3b' }} />
            </div>
            <span className="leading-tight">Simulador Nacional de Energia Solar</span>
          </CardTitle>
          <CardDescription className="text-gray-600 text-sm sm:text-base lg:text-lg">
            Descubra sua economia com energia solar - Cobertura em 17 estados do Brasil
            <br />
            <span className="font-semibold text-[#00844e] flex items-center gap-1 sm:gap-2 mt-1 sm:mt-2 text-xs sm:text-sm">
              Grupo B - Baixa Tensão (Residências, Comércios, Rural e Iluminação Pública)
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
          {/* Hero Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-[#00844e]/10 to-[#02ff91]/10 rounded-xl sm:rounded-2xl border border-[#00844e]/20">
              <div className="p-2 sm:p-3 bg-gradient-to-br from-[#00844e] to-[#02ff91] rounded-full w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 flex items-center justify-center">
                <Percent className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" style={{ color: '#015c3b' }} />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-[#00844e] mb-1">25%</div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm">Desconto Garantido</div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-[#02ff91]/10 to-[#00844e]/10 rounded-xl sm:rounded-2xl border border-[#02ff91]/20">
              <div className="p-2 sm:p-3 bg-gradient-to-br from-[#02ff91] to-[#00844e] rounded-full w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 flex items-center justify-center">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" style={{ color: '#015c3b' }} />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-[#02ff91] mb-1">17</div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm">Estados Cobertos</div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-[#00844e]/10 to-[#02ff91]/10 rounded-xl sm:rounded-2xl border border-[#00844e]/20">
              <div className="p-2 sm:p-3 bg-gradient-to-br from-[#00844e] to-[#02ff91] rounded-full w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 flex items-center justify-center">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" style={{ color: '#015c3b' }} />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-[#00844e] mb-1">23</div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm">Distribuidoras</div>
            </div>
          </div>

          {/* Energy Groups Block */}
          <div className="bg-gradient-to-r from-[#00844e]/5 to-[#02ff91]/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border-2 border-[#00844e]/20">
            <h3 className="text-[#00844e] text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <Target className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#00844e]" />
              Grupos de Energia Elétrica
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
              Conheça todos os grupos tarifários e suas características
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {energyGroups.map((group) => (
                <div
                  key={group.id}
                  className={`p-4 rounded-xl border-2 ${getColorClasses(group.color)} transition-all duration-300 hover:shadow-lg hover:scale-105`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        group.id === 'grupo-a' 
                          ? 'bg-gradient-to-br from-blue-500 to-blue-700' 
                          : 'bg-gradient-to-br from-[#00844e] to-[#02ff91]'
                      }`}>
                        <div className="w-3 h-3 rounded-full bg-white"></div>
                      </div>
                      <h4 className={`font-semibold text-sm ${
                        group.id === 'grupo-a' ? 'text-blue-700' : 'text-[#00844e]'
                      }`}>{group.title}</h4>
                    </div>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button className="text-gray-500 hover:text-gray-700 transition-colors">
                          <HelpCircle className="w-4 h-4" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="max-w-xs">
                        <p className="text-sm">{group.tooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  
                  {/* Client Type */}
                  <div className="mb-3 p-2 bg-white/80 rounded-lg">
                    <span className="text-xs font-bold text-gray-700">{group.clientType}</span>
                  </div>
                  
                  {/* Features Grid */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-white/60 rounded-lg">
                      <div className="flex items-center gap-2">
                        {group.allowsSimulation ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <X className="w-4 h-4 text-red-600" />
                        )}
                        <span className="text-xs font-medium">
                          {group.allowsSimulation ? 'Aceita simulação' : 'Não aceita simulação'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-2 bg-white/60 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Percent className="w-4 h-4 text-blue-600" />
                        <span className="text-xs font-medium">Desconto:</span>
                      </div>
                      <span className="text-sm font-bold text-blue-700">{group.discount}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* State Selection Grid */}
          <div>
            <h3 className="text-gray-800 text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <Target className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#00844e]" />
              Selecione seu Estado
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3">
              {Object.keys(stateData).sort().map((state) => (
                <Button
                  key={state}
                  variant={selectedState === state ? "default" : "outline"}
                  onClick={() => {
                    setSelectedState(state);
                    setShowResult(false);
                  }}
                  className={`h-auto p-3 sm:p-4 text-left transition-all duration-300 hover:scale-105 touch-friendly ${
                    selectedState === state
                      ? 'bg-gradient-to-r from-[#00844e] to-[#02ff91] text-white shadow-lg shadow-[#00844e]/25'
                      : 'bg-[#00844e] text-[#02ff91] border-2 border-[#00844e]/20 hover:bg-[#00844e]/90 hover:border-[#00844e]/40'
                  }`}
                >
                  <div className="w-full">
                    <div className="font-bold text-xs sm:text-sm mb-1">{getStateDisplayName(state)}</div>
                    <div className="text-2xs sm:text-xs opacity-80">
                      {stateData[state as keyof typeof stateData].distributors.length} distribuidora{stateData[state as keyof typeof stateData].distributors.length > 1 ? 's' : ''}
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </div>

          {/* Selected State Details */}
          {selectedState && (
            <div className="bg-gradient-to-br from-[#00844e]/5 to-[#02ff91]/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border-2 border-[#00844e]/20 shadow-lg">
              <h4 className="text-gray-800 text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#00844e]" />
                {selectedState}
              </h4>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h5 className="text-[#00844e] font-bold text-sm sm:text-base lg:text-lg mb-2 sm:mb-3">Distribuidoras Disponíveis:</h5>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {stateData[selectedState as keyof typeof stateData].distributors.map((distributor, index) => (
                      <Badge key={index} className="bg-gradient-to-r from-[#00844e] to-[#02ff91] text-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold">
                        {distributor.name} - {distributor.discount}% desconto
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Simulator Section */}
                {!showResult ? (
                  <div className="space-y-4 sm:space-y-6 bg-white/70 rounded-xl p-4 sm:p-6 border border-[#00844e]/20">
                    <h5 className="text-gray-800 font-bold text-base sm:text-lg lg:text-xl flex items-center gap-2 sm:gap-3">
                      <Calculator className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#00844e]" />
                      Simule sua Economia - Grupo B
                    </h5>
                    
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-xl p-3 sm:p-4">
                      <p className="text-xs sm:text-sm text-yellow-800 font-medium">
                        <strong>💡 Dica importante:</strong> Digite o valor médio anual da sua conta de luz dos últimos 12 meses para uma simulação mais precisa.
                        <br />
                        <span className="text-2xs sm:text-xs mt-1 block">
                          ⚡ Válido para todos os subgrupos do Grupo B: B1 (Residencial), B2 (Rural), B3 (Comércio/Serviços), B4 (Iluminação Pública)
                        </span>
                      </p>
                    </div>
                    
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2 sm:mb-3">
                        Valor médio da sua conta de luz (R$) - Grupo B
                      </label>
                      <Input
                        type="number"
                        placeholder="Ex: 350,00"
                        value={billValue}
                        onChange={(e) => setBillValue(e.target.value)}
                        className="text-lg sm:text-xl text-center border-2 border-[#00844e]/30 focus:border-[#00844e] bg-white h-12 sm:h-14 text-gray-800 placeholder-gray-400 font-semibold"
                        min="0"
                        step="0.01"
                      />
                    </div>

                    <Button 
                      onClick={calculateEconomy}
                      disabled={!billValue || parseFloat(billValue.replace(',', '.')) <= 0}
                      className="w-full bg-gradient-to-r from-[#00844e] to-[#02ff91] text-white font-bold py-3 sm:py-4 text-sm sm:text-base lg:text-lg rounded-xl hover:shadow-xl hover:shadow-[#00844e]/30 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed touch-friendly"
                    >
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 sm:mr-3" />
                      Calcular Minha Economia - Grupo B
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4 sm:space-y-6 bg-white/70 rounded-xl p-4 sm:p-6 border border-[#00844e]/20">
                    <div className="text-center">
                      <div className="inline-flex p-3 sm:p-4 bg-gradient-to-br from-[#00844e] to-[#02ff91] rounded-full mb-3 sm:mb-4">
                        <TrendingDown className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
                      </div>
                      <h5 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#00844e] mb-1 sm:mb-2">
                        🎉 Sua Economia em {selectedState}
                      </h5>
                      <p className="text-gray-600 text-xs sm:text-sm">Grupo B - 15% de desconto garantido</p>
                    </div>

                    <div className="bg-gradient-to-br from-[#00844e]/10 to-[#02ff91]/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 border border-[#00844e]/20">
                      <div className="grid grid-cols-2 gap-4 sm:gap-6">
                        <div className="text-center p-3 sm:p-4 bg-white/80 rounded-xl">
                          <div className="text-xs sm:text-sm text-gray-600 font-semibold mb-1 sm:mb-2">Conta Atual</div>
                          <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">
                            R$ {billValueNum.toFixed(2).replace('.', ',')}
                          </div>
                        </div>
                        <div className="text-center p-3 sm:p-4 bg-white/80 rounded-xl">
                          <div className="text-xs sm:text-sm text-gray-600 font-semibold mb-1 sm:mb-2">Nova Conta</div>
                          <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#00844e]">
                            R$ {newBillValue.toFixed(2).replace('.', ',')}
                          </div>
                        </div>
                      </div>

                      <div className="text-center border-t-2 border-[#00844e]/20 pt-4 sm:pt-6">
                        <div className="text-sm sm:text-base lg:text-lg text-gray-600 font-semibold mb-1 sm:mb-2">💰 Economia Mensal</div>
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#00844e] to-[#02ff91] bg-clip-text text-transparent mb-1 sm:mb-2">
                          R$ {discountAmount.toFixed(2).replace('.', ',')}
                        </div>
                        <div className="text-sm sm:text-base lg:text-lg text-[#00844e] font-bold">15% de desconto</div>
                      </div>

                      <div className="text-center bg-gradient-to-r from-[#00844e]/20 to-[#02ff91]/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[#00844e]/30">
                        <div className="text-sm sm:text-base lg:text-lg text-gray-700 font-semibold mb-1 sm:mb-2">🎯 Economia Anual</div>
                        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#00844e] to-[#02ff91] bg-clip-text text-transparent animate-pulse">
                          R$ {yearlyEconomy.toFixed(2).replace('.', ',')}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">Valor que você economizará em 12 meses</div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <Button 
                        onClick={resetSimulator}
                        variant="outline"
                        className="flex-1 border-2 border-[#00844e]/30 text-[#00844e] hover:bg-[#00844e]/5 font-bold py-2.5 sm:py-3 touch-friendly"
                      >
                        Nova Simulação
                      </Button>
                      <Button 
                        className="flex-1 bg-gradient-to-r from-[#00844e] to-[#02ff91] text-white font-bold py-2.5 sm:py-3 hover:shadow-xl hover:shadow-[#00844e]/30 transition-all duration-300 touch-friendly"
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
          <div className="bg-gradient-to-r from-[#00844e]/5 to-[#02ff91]/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border-2 border-[#00844e]/20">
            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-center bg-gradient-to-r from-[#02ff91] via-[#00c26f] to-[#00844e] bg-clip-text text-transparent">🇧🇷 Cobertura Nacional - Grupo B</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center p-3 sm:p-4 bg-white/70 rounded-xl">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#02ff91] via-[#00c26f] to-[#00844e] bg-clip-text text-transparent mb-1 sm:mb-2">{"< 2,3"}</div>
                <div className="text-gray-600 font-semibold text-xs sm:text-sm">kV Tensão nominal</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-white/70 rounded-xl">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#02ff91] via-[#00c26f] to-[#00844e] bg-clip-text text-transparent mb-1 sm:mb-2">12</div>
                <div className="text-gray-600 font-semibold text-xs sm:text-sm">Meses Fidelidade</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-white/70 rounded-xl">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#02ff91] via-[#00c26f] to-[#00844e] bg-clip-text text-transparent mb-1 sm:mb-2">150kWh</div>
                <div className="text-gray-600 font-semibold text-xs sm:text-sm">Consumo Mínimo por mês</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-white/70 rounded-xl col-span-2 sm:col-span-1">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#02ff91] via-[#00c26f] to-[#00844e] bg-clip-text text-transparent mb-1 sm:mb-2">90 dias</div>
                <div className="text-gray-600 font-semibold text-xs sm:text-sm">Início da Injeção</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
};

export default StateCoverageSimulator;
